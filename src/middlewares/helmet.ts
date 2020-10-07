import helm from 'helmet'

export const helmet = helm({frameguard: {action: 'deny'}})