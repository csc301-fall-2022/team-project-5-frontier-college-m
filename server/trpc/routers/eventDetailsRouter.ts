import { z } from 'zod'
import { auth, api } from '../salesforce'
import { createRouter } from '../createRouter'

/**
 * Return an event object, identified by its id
 *
 */
export const eventDetailsRouter = createRouter().query('eventDetails', {
  input: z.object({
    eventId: z.string()
  }),

  async resolve({ input }) {
    const qString = `SELECT Id, Name, Program_Description__c, Goals__c, Type__c, Contact_Person__c, OwnerId, Regional_Record_owner_Contact__c, Reporting_Region__c, Start_Date__c, End_Date__c, Delivery_Method__c, Program_Offering_Schedule__c, Location_Label__c, Location_Address__c, RecordTypeId, File_Sharing__c FROM Program__c WHERE Id ='${input.eventId}'`
    const resp = await api.query(qString, auth)
    const data = await resp.json()

    const program = data.records[0]
    const recordTypeQuery = `SELECT Id, Name, DeveloperName FROM RecordType WHERE Id = '${program.RecordTypeId}'`
    const recordResp = await api.query(recordTypeQuery, auth)
    const recordData = await recordResp.json()

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
        reportingRegion: program.Reporting_Region__c,
        startDate: program.Start_Date__c,
        endDate: program.End_Date__c,
        deliveryMethod: program.Delivery_Method__c,
        programOfferingSchedule: JSON.parse(
          program.Program_Offering_Schedule__c
        ),
        locationLabel: program.Location_Label__c,
        locationAddress: program.Location_Address__c,
        recordType: recordData.records[0].Name,
        fileSharing: program.File_Sharing__c
      }
    }
  }
})
