import * as dotenv from 'dotenv'
import fetch from 'node-fetch'
dotenv.config()

export class SFAPI {
  baseUrl: string | undefined
  version: string = 'v56.0'

  constructor() {
    this.baseUrl = process.env.SF_BASE_URL
  }

  async query(statement: string, authInstance: SFAuth): Promise<Response> {
    if (!authInstance.token) {
      await authInstance.getBearerToken(this)
    }

    const path =
      `${this.baseUrl}/services/data/${this.version}/query?q=` +
      encodeURIComponent(statement)

    const opts = {
      headers: { Authorization: `Bearer ${authInstance.token}` }
    }

    let response = await fetch(path, opts)

    let errorAttempts = 0
    while (
      response &&
      (response as Response).status !== 200 &&
      errorAttempts < 2
    ) {
      errorAttempts += 1
      const responseJson = await (response as Response).json()

      // refresh API token if not valid
      if (
        responseJson.errorCode &&
        responseJson.errorCode === 'INVALID_SESSION_ID'
      ) {
        await authInstance.getBearerToken(this)
        opts.headers.Authorization = `Bearer ${authInstance.token}`
        response = await fetch(path, opts)
        continue
      }
      // other error types, log to console
      console.error((response as Response).status)
      console.error()
      errorAttempts = 3
    }

    return response as Response
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

  async getBearerToken(apiInstance: SFAPI): Promise<string | undefined> {
    const oauthParams = new URLSearchParams()
    oauthParams.append('grant_type', 'password')
    oauthParams.append('client_id', this.clientId as string)
    oauthParams.append('client_secret', this.clientSecret as string)
    oauthParams.append('username', this.sfUsername as string)
    oauthParams.append('password', this.sfPassword as string)

    const response = await fetch(
      apiInstance.baseUrl + '/services/oauth2/token',
      {
        method: 'POST',
        body: oauthParams
      }
    ).catch((err) => {
      console.error('Unable to fetch bearer token for OAuth:', err)
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
