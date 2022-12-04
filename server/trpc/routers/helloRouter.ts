import { auth, api } from '../salesforce'
import { createRouter, TRPCError } from '../createRouter'

export const helloRouter = createRouter().query('hello', {
  async resolve() {
    const qString =
      'SELECT Id, Name, Assigned_Program__c, RecordTypeId FROM Contact'

    const resp = await api.query(qString, auth)
    const data = await resp.json()
    if (!resp || resp.status !== 200) {
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        cause: data
      })
    }

    return data
  }
})
