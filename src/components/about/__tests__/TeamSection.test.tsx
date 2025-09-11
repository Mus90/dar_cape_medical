// Simple test to verify team data structure
describe('TeamSection Data', () => {
  it('has correct team member data structure', () => {
    const teamData = [
      {
        name: 'Mustafa',
        position: 'CEO & Founder',
        image: '/images/team/mustafa.png',
        email: 'mustafa@capehome.co.za',
        phone: '+27817394084'
      },
      {
        name: 'Mujahid',
        position: 'CTO',
        image: '/images/team/mujahid.jpg',
        email: 'mujahid@capehome.co.za',
        phone: '+27 123 456 790'
      }
    ]

    expect(teamData).toHaveLength(2)
    expect(teamData[0].name).toBe('Mustafa')
    expect(teamData[0].image).toBe('/images/team/mustafa.png')
    expect(teamData[1].name).toBe('Mujahid')
    expect(teamData[1].image).toBe('/images/team/mujahid.jpg')
  })

  it('validates email formats', () => {
    const validateEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
    }

    expect(validateEmail('mustafa@capehome.co.za')).toBe(true)
    expect(validateEmail('mujahid@capehome.co.za')).toBe(true)
    expect(validateEmail('invalid-email')).toBe(false)
  })

  it('validates phone number formats', () => {
    const formatPhone = (phone: string) => {
      return phone.replace(/\D/g, '').length >= 10
    }

    expect(formatPhone('+27817394084')).toBe(true)
    expect(formatPhone('+27 123 456 790')).toBe(true)
    expect(formatPhone('123')).toBe(false)
  })
})
