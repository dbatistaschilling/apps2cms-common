import favicon from 'serve-favicon'
import path from 'path'

export const appIcon = () => {
  favicon(path.join(__dirname, 'public', 'favicon.ico'))
}