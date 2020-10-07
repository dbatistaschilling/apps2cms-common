import icon from 'serve-favicon'
import path from 'path'

export const favicon = icon(path.join(__dirname, 'public', 'favicon.ico'))