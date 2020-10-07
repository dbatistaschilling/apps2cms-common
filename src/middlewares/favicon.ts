import favicon from 'serve-favicon'
import path from 'path'

favicon(path.join(__dirname, 'public', 'favicon.ico'))

export { favicon }
