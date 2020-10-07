import i18n from 'i18n'

i18n.configure({
    locales: ['it','en'],
    directory: __dirname + '/server/locales',
    defaultLocale: 'it'
})

export { i18n }