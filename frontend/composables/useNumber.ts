function formatIdr(
  amount: string | number,
  currencyCode: string = 'IDR'
): string {
  // Menggunakan toFixed() untuk menghilangkan dua angka nol di belakang desimal
  const amountWithoutDecimalZeros = Number(amount)
    .toFixed(2)
    .replace(/\.00$/, '')

  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: currencyCode
  })
  return formatter.format(parseFloat(amountWithoutDecimalZeros))
}

function formatUSD(amount: number, currencyCode: string = 'USD'): string {
  const amountWithoutDecimalZeros = amount.toFixed().replace(/\.00$/, '')
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 3,
    maximumFractionDigits: 3
  })
  return formatter.format(parseFloat(amountWithoutDecimalZeros))
}

function formatCurrency(amount: any, currencyCode: string = 'USD'): string {
  // const amountWithoutDecimalZeros = amount?.toFixed()?.replace(/\.00$/, "");
  // const amountWithoutDecimalZeros = amount;

  let locale = 'en-US'
  if (currencyCode === 'EUR') {
    locale = 'en-EU'
  } else if (currencyCode === 'GBP') {
    locale = 'en-GB'
  } else if (currencyCode === 'IDR') {
    locale = 'id-ID'
  }

  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 3,
    maximumFractionDigits: 3
  })

  // return formatter.format(parseFloat(amountWithoutDecimalZeros));
  return formatter.format(parseFloat(amount))
}

function formatWithoutCurrencySymbol(
  amount: any,
  currencyCode: string = 'USD'
): string {
  let locale = 'en-US'
  if (currencyCode === 'EUR') {
    locale = 'en-EU'
  } else if (currencyCode === 'GBP') {
    locale = 'en-GB'
  } else if (currencyCode === 'IDR') {
    locale = 'id-ID'
  }

  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 3,
    maximumFractionDigits: 3
  })

  const formattedAmount = formatter.format(parseFloat(amount))

  const currencySymbolRegex = /[^\d.,]+/
  const currencySymbolMatch = formattedAmount.match(currencySymbolRegex)
  const currencySymbol = currencySymbolMatch ? currencySymbolMatch[0] : ''

  const formattedWithoutSymbol = formattedAmount
    .replace(currencySymbol, '')
    .trim()

  return formattedWithoutSymbol
}

function formatNumberSeparator(
  amount: any,
  minimumFractionDigits = 3,
  maximumFractionDigits = 3,
  locale = 'en-US',
  currencyCode = 'IDR'
) {
  if (Number.isNaN(amount) || !amount) {
    amount = 0
  }

  return new Intl.NumberFormat(locale, {
    currency: currencyCode,
    minimumFractionDigits: minimumFractionDigits,
    maximumFractionDigits: maximumFractionDigits
  }).format(parseFloat(amount))
}

const numberInputFormat = {
  precision: 3,
  decimal: '.',
  separator: ',',
  prefix: '⠀',
  suffix: '',
  nullValue: '',
  masked: false,
  reverseFill: false
}

export const useNumber = {
  formatIdr,
  formatUSD,
  formatCurrency,
  formatNumberSeparator,
  formatWithoutCurrencySymbol,
  numberInputFormat
}
