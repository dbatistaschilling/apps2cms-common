import i18n from 'i18n'
import { Express } from 'express'

export const internalization = (app: Express) => {
  i18n.configure({
      locales: ['it','en'],
      directory: __dirname + '/server/locales',
      defaultLocale: 'it'
  })

  app.use(i18n.init)
}