import * as dotenv from 'dotenv'
import FormData from 'form-data';
import fetch from 'node-fetch';
dotenv.config()

export class SFAPI {
  baseUrl: string | undefined
  version: string = 'v56.0'

  constructor() {
    this.baseUrl = process.env.SF_BASE_URL
  }

  async query(statement: string, token: string): Promise<any> {
    const response = await fetch(
      `${this.baseUrl}/services/data/${this.version}/query?q=` +
        encodeURIComponent(statement),
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    )

    return (response as Response).json()
  }
}

export class SFAuth {
  token: string | undefined
  clientId: string | undefined
  clientSecret: string | undefined
  sfUsername: string | undefined
  sfPassword: string | undefined

  constructor() {
    this.clientId = process.env.SF_CLIENT_ID
    this.clientSecret = process.env.SF_CLIENT_SECRET
    this.sfUsername = process.env.SF_USERNAME
    this.sfPassword = process.env.SF_PASSWORD
  }

  async getBearerToken(api: SFAPI): Promise<string | undefined> {
    const oauthParams = new FormData()
    oauthParams.append('grant_type', 'password')
    oauthParams.append('client_id', this.clientId as string)
    oauthParams.append('client_secret', this.clientSecret as string)
    oauthParams.append('username', this.sfUsername as string)
    oauthParams.append('password', this.sfPassword as string)

    const response = await fetch(api.baseUrl + '/services/oauth2/token', {
      method: 'POST',
      body: oauthParams
    }).catch((err) => {
      console.log('Unable to fetch bearer token for OAuth:', err)
    })

    if (response !== null && (response as Response).status === 200) {
      const data = await (response as Response).json()
      this.token = data.access_token
      return this.token
    }

    console.error(await (response as Response).json())
    return undefined
  }
}

export const auth = new SFAuth()
export const api = new SFAPI()
