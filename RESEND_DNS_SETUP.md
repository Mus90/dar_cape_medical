# Resend DNS Configuration for Dar Cape Medica

## Overview
To send emails from `mustafa@darcape.com`, you need to verify your domain with Resend and configure DNS records. This ensures email deliverability and prevents your emails from being marked as spam.

## Prerequisites
1. A Resend account (sign up at https://resend.com)
2. Access to your DNS provider (where darcape.com is hosted)
3. Your Resend API key

## Step 1: Add Domain in Resend Dashboard

1. Log in to your Resend dashboard at https://resend.com/domains
2. Click "Add Domain"
3. Enter: `darcape.com`
4. Click "Add Domain"

## Step 2: Get DNS Records from Resend

After adding the domain, Resend will provide you with DNS records to add. These typically include:

### Required DNS Records

**1. TXT Record for Domain Verification**
- **Type:** TXT
- **Name:** `@` (or your domain name)
- **Value:** `resend-domain-verification=YOUR_VERIFICATION_CODE`
- **TTL:** 3600 (or as recommended by your DNS provider)

**2. TXT Record for SPF (Sender Policy Framework)**
- **Type:** TXT
- **Name:** `@` (or your domain name)
- **Value:** `v=spf1 include:_resend.com ~all`
- **TTL:** 3600

**3. CNAME Record for DKIM (DomainKeys Identified Mail)**
- **Type:** CNAME
- **Name:** `resend._domainkey`
- **Value:** `YOUR_DKIM_VALUE.resend.com`
- **TTL:** 3600

**4. MX Records (Optional - if you want Resend to handle inbound email)**
- **Type:** MX
- **Name:** `@`
- **Value:** `feedback-smtp.us-east-1.amazonses.com`
- **Priority:** 10
- **TTL:** 3600

## Important Notes

### ⚠️ DO NOT DELETE EXISTING MX RECORDS
Your existing `mustafa@darcape.com` mailbox must continue receiving emails. 

**If you already have MX records for darcape.com:**
- Do NOT replace them with Resend's MX records
- Only add Resend's MX records if you want Resend to handle inbound email
- For outbound email only (our use case), you only need the TXT and CNAME records above

### SPF Record Handling
If you already have an SPF record for darcape.com:
- **Do NOT create a new SPF record**
- **Modify your existing SPF record** to include Resend
- Add `include:_resend.com` to your existing SPF record

Example:
```
Existing: v=spf1 include:google.com ~all
Modified: v=spf1 include:google.com include:_resend.com ~all
```

### DKIM Record
The DKIM CNAME record is unique to your domain. Get the exact value from your Resend dashboard after adding the domain.

## Step 3: Add DNS Records

1. Log in to your DNS provider (e.g., GoDaddy, Namecheap, Cloudflare, etc.)
2. Navigate to DNS management for darcape.com
3. Add the records provided by Resend
4. Save changes

## Step 4: Verify Domain in Resend

1. Go back to your Resend dashboard
2. Click "Verify" next to your domain
3. Resend will check the DNS records
4. Verification may take up to 24 hours (usually faster)

## Step 5: Test Email Sending

Once verified:
1. Add your API key to `.env.local`:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```
2. Test the contact form on your website
3. Check mustafa@darcape.com for the test email

## Troubleshooting

### DNS Propagation Delay
DNS changes can take 24-48 hours to propagate worldwide. If verification fails immediately, wait a few hours and try again.

### Multiple SPF Records
You cannot have multiple SPF records for the same domain. If you see an error, combine all SPF includes into a single record.

### DKIM Record Not Found
Ensure the CNAME record name is exactly as specified by Resend (case-sensitive).

### Email Still Going to Spam
After verification, it may take time for your domain reputation to build. Start with low-volume sending and gradually increase.

## Security Best Practices

1. **Never commit .env.local to Git** - It's already in .gitignore
2. **Rotate API keys regularly** - Generate new keys in Resend dashboard
3. **Monitor email delivery** - Use Resend's analytics dashboard
4. **Set up DMARC** (optional but recommended) - Add a DMARC record for additional security

## DNS Record Summary

Add these records to your DNS:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| TXT | @ | resend-domain-verification=YOUR_CODE | 3600 |
| TXT | @ | v=spf1 include:_resend.com ~all (modify existing) | 3600 |
| CNAME | resend._domainkey | YOUR_VALUE.resend.com | 3600 |

**Get the exact values from your Resend dashboard after adding the domain.**
