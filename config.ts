import dotenv from 'dotenv'

dotenv.config()

if (process.env.CLIENT_ID === undefined) throw Error('MISSING CLIENT_ID')
if (process.env.CLIENT_SECRET === undefined) throw Error('MISSING CLIENT_SECRET')
if (process.env.REDIRECT_URL === undefined) throw Error('MISSING REDIRECT_URL')
if (process.env.REFRESH_TOKEN === undefined) throw Error('MISSING WEREFRESH_TOKENB_CLIENT')

export const CLIENT_ID = process.env.CLIENT_ID
export const CLIENT_SECRET = process.env.CLIENT_SECRET
export const REDIRECT_URL = process.env.REDIRECT_URL
export const REFRESH_TOKEN = process.env.REFRESH_TOKEN

export default {
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URL,
  REFRESH_TOKEN
}
