export class StringHelper {
  static mascaraCpf(value) {
    const formatedValue = value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1')
    return formatedValue
  }

  static mascaraCnpj(value) {
    const formatedValue = value
      .replace(/\D+/g, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1')

    return formatedValue
  }

  static removeCaracteresEspeciais(value) {
    return value.replace(/[^\w\s]/gi, '')
  }

  static formatMaskCpfCnpj(value) {
    if (!value) {
      return
    }

    const valueWithoutWhiteSpaces = value.trim()
    const valueWithoutSpecialChars = this.removeCaracteresEspeciais(
      valueWithoutWhiteSpaces
    )

    if (valueWithoutSpecialChars.length <= 11) {
      return this.mascaraCpf(valueWithoutSpecialChars)
    }
    if (valueWithoutSpecialChars.length > 11) {
      return this.mascaraCnpj(valueWithoutSpecialChars)
    }
    return null
  }

  static mascaraEmail(email) {
    // eslint-disable-next-line no-useless-escape
    const maskedEmail = email.replace(/([^@\.])/g, '*').split('')
    let disable = false

    for (let i = 0; i < maskedEmail.length; i++) {
      if (maskedEmail[i] === '@') {
        disable = true
      }

      if (disable || i < 2) {
        maskedEmail[i] = email[i]
      }
    }

    return maskedEmail.join('')
  }
}
