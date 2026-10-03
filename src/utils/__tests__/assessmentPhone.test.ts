import { normalizeAssessmentPhone } from '../assessmentPhone';

describe('Assessment phone formats', () => {
  it.each([
    ['074 954 8756', '0749548756'],
    ['+27 (74) 954-8756', '+27749548756'],
    ['0027.74.954.8756', '+27749548756'],
    ['٠٧٤٩٥٤٨٧٥٦', '0749548756'],
    ['۰۷۴۹۵۴۸۷۵۶', '0749548756']
  ])('accepts and normalizes %s', (input, expected) => {
    expect(normalizeAssessmentPhone(input)).toBe(expected);
  });

  it.each(['123', '++++++++++', '0000000000', '+27abc749548756', '1234567890123456'])('rejects %s', input => {
    expect(normalizeAssessmentPhone(input)).toBeNull();
  });
});
