import { DateTime } from 'luxon'

export default class FormatHelper {
  static formatNumericValueDecimals(value, maximumDigits, minimumDigits) {
    const formatter = new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: minimumDigits || 2,
      maximumFractionDigits: maximumDigits || 8
    })
    const formatedValue = formatter.format(value)
    return formatedValue
  }

  static formatDate(value) {
    let date = DateTime.fromISO(value)
    let formatDate = date.setLocale('pt-BR').toLocaleString()
    return formatDate
  }

  static formatCurrency(value) {
    return `R$ ${this.formatNumericValueDecimals(value, 2, 2)}`
  }

  static formatUnitPrice(value) {
    return this.formatNumericValueDecimals(value, 8, 8)
  }

  static formatPercent(value) {
    return (value * 100).toFixed(0) + ' %'
  }
}
