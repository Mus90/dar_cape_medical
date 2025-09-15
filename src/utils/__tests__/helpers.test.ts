// Utility functions tests
describe('Utility Functions', () => {
  describe('formatPhoneNumber', () => {
    const formatPhoneNumber = (phone: string) => {
      return phone.replace(/\D/g, '').replace(/(\d{2})(\d{3})(\d{3})(\d{3})/, '+$1 $2 $3 $4')
    }

    it('formats South African phone numbers correctly', () => {
      expect(formatPhoneNumber('27749548756')).toBe('+27 749 548 756')
      expect(formatPhoneNumber('+27749548756')).toBe('+27 749 548 756')
    })

    it('handles phone numbers with spaces and dashes', () => {
      expect(formatPhoneNumber('27 817 394 084')).toBe('+27 817 394 084')
      expect(formatPhoneNumber('27-817-394-084')).toBe('+27 817 394 084')
    })
  })

  describe('validateEmail', () => {
    const validateEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      // Additional check for consecutive dots
      if (email.includes('..')) return false
      return emailRegex.test(email)
    }

    it('validates correct email addresses', () => {
      expect(validateEmail('mustafa@darcape.com')).toBe(true)
      expect(validateEmail('test@example.com')).toBe(true)
      expect(validateEmail('user.name+tag@domain.co.uk')).toBe(true)
    })

    it('rejects invalid email addresses', () => {
      expect(validateEmail('invalid-email')).toBe(false)
      expect(validateEmail('test@')).toBe(false)
      expect(validateEmail('@domain.com')).toBe(false)
      expect(validateEmail('test..test@domain.com')).toBe(false)
    })
  })

  describe('truncateText', () => {
    const truncateText = (text: string, maxLength: number) => {
      if (text.length <= maxLength) return text
      return text.slice(0, maxLength) + '...'
    }

    it('truncates text longer than max length', () => {
      const longText = 'This is a very long text that should be truncated'
      expect(truncateText(longText, 20)).toBe('This is a very long ...')
    })

    it('returns original text if shorter than max length', () => {
      const shortText = 'Short text'
      expect(truncateText(shortText, 20)).toBe('Short text')
    })

    it('handles edge cases', () => {
      expect(truncateText('', 10)).toBe('')
      expect(truncateText('Exact', 5)).toBe('Exact')
    })
  })
})
