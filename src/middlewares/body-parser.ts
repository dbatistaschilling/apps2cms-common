// import { Request, Response } from 'express'
// import bodyParser from 'body-parser'

// declare global {
//   namespace Express {
//     interface Request {
//       rawBody?: String
//     }
//   }
// }

// let rawBodySaver = function(req: Request, res: Response, buf: Buffer, encoding: any) {
//   if (buf && buf.length) {
//       req.rawBody = buf.toString(encoding || 'utf8');
//   }
// }
// bodyParser.json({ verify: rawBodySaver })
// bodyParser.urlencoded({ verify: rawBodySaver, extended: false })
// bodyParser.raw({ verify: rawBodySaver, type: 'application/json' })

// export { bodyParser }

import { json } from 'express'
export const bodyParser = json()
