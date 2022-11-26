import { auth, api } from '../salesforce'
import { createRouter } from '../createRouter'

export const helloRouter = createRouter().query('hello', {
  async resolve() {
    if (!auth.token) {
      await auth.getBearerToken(api)
    }

    const qString =
      'SELECT Id, Name, Assigned_Program__c, RecordTypeId FROM Contact'

    let data = await api.query(qString, auth.token as string)
    if (data && data.errorCode && data.errorCode === 'INVALID_SESSION_ID') {
      await auth.getBearerToken(api)
      data = await api.query(qString, auth.token as string)
    }

    return data
  }
})
