import helmet from 'helmet'

helmet({frameguard: {action: 'deny'}})

export { helmet }