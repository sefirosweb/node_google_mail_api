import dotenv from 'dotenv'
import { google } from 'googleapis'
import { GetAccessTokenResponse } from 'google-auth-library/build/src/auth/oauth2client'
import { Options } from 'sequelize'


dotenv.config({ path: "../.env" })

if (process.env.PORT === undefined) throw Error('MISSING PORT')
if (process.env.CLIENT_ID === undefined) throw Error('MISSING CLIENT_ID')
if (process.env.CLIENT_SECRET === undefined) throw Error('MISSING CLIENT_SECRET')
if (process.env.REDIRECT_URL === undefined) throw Error('MISSING REDIRECT_URL')
if (process.env.REFRESH_TOKEN === undefined) throw Error('MISSING WEREFRESH_TOKENB_CLIENT')

export const PORT = process.env.PORT
export const CLIENT_ID = process.env.CLIENT_ID
export const CLIENT_SECRET = process.env.CLIENT_SECRET
export const REDIRECT_URL = process.env.REDIRECT_URL
export const REFRESH_TOKEN = process.env.REFRESH_TOKEN
export const DB_NAME = 'mailcache'
export const DB_USER = 'mailcache'
export const DB_PASSWORD = 'mailcache'
export const DB_PARAMS: Options = {
  dialect: 'sqlite',
  storage: 'db.sqlite',
  define: {
    underscored: true
  }
}

export const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL)
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

let accessToken: string | undefined

export const getAccessToken = async (): Promise<string> => {
  if (accessToken) {
    return accessToken
  }

  const { token } = await oAuth2Client.getAccessToken();
  if (typeof token !== 'string') {
    throw new Error('Token not found!')
  }

  return token
}