import { z } from 'zod'
import { auth, api } from '../salesforce'
import { createRouter } from '../createRouter'
import { td2Data } from '~/shared/d2-dummy-data'

/**
 * Return an event object, identified by its id
 *
 */
export const eventDetailsRouter = createRouter().query('eventDetails', {
  input: z.object({
    eventId: z.string()
  }),
  
  async resolve({ input }) {
    if (!auth.token) {
      await auth.getBearerToken(api)
    }

    const qString = `SELECT Id, Name, Program_Description__c, Goals__c, Type__c, Contact_Person__c, OwnerId, Regional_Record_owner_Contact__c, Reporting_Region__c, Start_Date__c, End_Date__c, Delivery_Method__c, Program_Offering_Schedule__c, Location_Label__c, Location_Address__c, RecordTypeId FROM Program__c WHERE Id ='${input.eventId}'`

    let data = await api.query(qString, auth.token as string)
    if (data && data.errorCode && data.errorCode === 'INVALID_SESSION_ID') {
      await auth.getBearerToken(api)
      data = await api.query(qString, auth.token as string)
    }
    
    // console.log(data)
    const program = data.records[0]

    const recordTypeQuery = `SELECT Id, Name, DeveloperName FROM RecordType WHERE Id = '${program.RecordTypeId}'`
    let recordData = await api.query(recordTypeQuery, auth.token as string)
    if (
      recordData &&
      recordData.errorCode &&
      recordData.errorCode === 'INVALID_SESSION_ID'
    ) {
      await auth.getBearerToken(api)
      recordData = await api.query(recordTypeQuery, auth.token as string)
    }

    // only parse data if records are available
    if (data.totalSize && data.totalSize > 0) {
        return {
          programId: data.Id,
          name: program.Name,
          description: program.Program_Description__c,
          goals: program.Goals__c,
          contactPerson: program.Contact_Person__c,
          ownerId: program.OwnerId,
          regionalRecordOwner: program.Regional_Record_owner_Contact__c,
          reportingRegion:program.Reporting_Region__c,
          startDate: program.Start_Date__c, 
          endDate: program.End_Date__c,
          deliveryMethod: program.Delivery_Method__c,
          programOfferingSchedule: program.Program_Offering_Schedule__c,
          locationLabel: program.Location_Label__c, 
          locationAddress: program.Location_Address__c,
          recordTypeId: recordData.records[0].Name
        }
      }
  }
})
