import internalization from 'i18n'

export const i18n = internalization.configure({
    locales: ['it','en'],
    directory: __dirname + '/server/locales',
    defaultLocale: 'it'
})