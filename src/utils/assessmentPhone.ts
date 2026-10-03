// Accept familiar phone formatting without guessing a missing country code.
export function normalizeAssessmentPhone(value: string): string | null {
  const digits = value.trim()
    .replace(/[٠-٩]/g, digit => String(digit.charCodeAt(0) - 0x0660))
    .replace(/[۰-۹]/g, digit => String(digit.charCodeAt(0) - 0x06f0));
  if (!/^[+\d\s().\-]+$/.test(digits)) return null;
  const compact = digits.replace(/[\s().\-]/g, '').replace(/^00/, '+');
  if (!/^\+?\d{7,15}$/.test(compact) || /^\+?0+$/.test(compact)) return null;
  if (compact.startsWith('+0')) return null;
  return compact;
}
