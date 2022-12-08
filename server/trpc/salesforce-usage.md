# How we connect to Salesforce

## Dev Access to Salesforce API

- Ensure [Salesforce CLI](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm#sfdx_setup_install_cli_npm) is installed correctly. This repository should already include the Salesforce CLI in the devDependencies. Run `pnpm i` to install the latest project dependencies, and verify you have the Salesforce CLI by running `npx sfdx --version`
- [Login to Salesforce via Salesforce CLI](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/quickstart_oauth.htm). You will need to specify the URL prefix for our sandbox account.

  - Find the URL prefix, by going to the sandbox web URL, and noting the first segment. For example, if you login to Salesforce at `https://organization--group888.sandbox.lightning.force.com/...`, the URL prefix is `organization--group888`.
  - Run the login command with the URL prefix you found above:
    ```bash
    npx sfdx auth:web:login -r https://organization--group888.sandbox.my.salesforce.com
    ```
    Note that the ending of the URL is different in the command (`...salesforce.com`) than your web login URL (`...force.com`).
  - Verify you have successfully logged in by typing the following:
    ```bash
    npx sfdx auth:list
    ```
    The output should contain a list with one entry, and you should see your email in the `USERNAME` column

- Get an access token for authenticating with the API by typing the following command:

  ```bash
  npx sfdx force:org:display --targetusername your@login.email.from.above
  ```

  This access token can be used as a Bearer token for API access using any tool you like, or in code.

- Checkout [basic Salesforce REST API usage](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/quickstart_code.htm).

- Checkout [Salesforce API access examples](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/dome_user_tasks.htm).

- Learn about [Salesforce Object Query Language (SOQL) and Salesforce Object Search Language (SOSL)](https://developer.salesforce.com/docs/atlas.en-us.240.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_sosl_intro.htm)

## Accessing and querying Salesforce data

View and search through all available objects using this URL: `https://organization--group888.sandbox.lightning.force.com/lightning/setup/ObjectManager/home`
Click into an object and go to "Fields & Relationships" tab on the left, to view all available fields.

You can try out the queries below in the [Developer Console](https://help.salesforce.com/s/articleView?id=sf.code_dev_console_opening.htm&type=5), using the [Query Editor](https://help.salesforce.com/s/articleView?id=sf.code_dev_console_tab_query_editor.htm&type=5).

Once you are happy with the query results, you can execute the query through the REST API like so: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_query.htm

### SOQL Examples:

- Get `Contact` info

  ```sql
  SELECT Id, Name, Assigned_Program__c, Regional_Supervisor_Contact__c, RecordTypeId FROM Contact
  ```

- Get `Program__c` info

  ```sql
  SELECT Id, Name, Program_Description__c, Goals__c, Type__c, Contact_Person__c, OwnerId, Regional_Record_owner_Contact__c, Reporting_Region__c, Start_Date__c, End_Date__c, Delivery_Method__c, Program_Offering_Schedule__c, Location_Label__c, Location_Address__c, Location_City__c, Location_Province__c, RecordTypeId FROM Program__c
  ```

- Get `RecordType` names (Volunteer, FC Staff, etc). Useful for corroborating `RecordTypeId` from other queries

  ```sql
  SELECT Id, Name, DeveloperName FROM RecordType
  ```

### Salesforce Objects and Fields Used:

- `Contact`: users in this app (note that a `user` in this app corresponds to a `Contact` in Salesforce)
  - `Id`, `Name`, `Email`, `RecordTypeId`
- `RecordType`: types of a particular Salesforce record, like `Volunteer` or `Partner`
  - `Id`, `Name`, `DeveloperName`
- `Program__C`: program profiles in Salesforce (each event in our app is a Program in Salesforce)
  - `Id`, `Name`, `Program_Description__c`, `Goals__c`, `Type__c`, `Contact_Person__c`, `OwnerId`, `Regional_Record_owner_Contact__c`, `Reporting_Region__c`, `Start_Date__c`, `End_Date__c`, `Delivery_Method__c`, `Program_Offering_Schedule__c`, `Location_Label__c`, `Location_Address__c`, `RecordTypeId`, `File_Sharing__c`, `Chatter_Group_ID__c`
  - 💡 `Program_Offering_Schedule__c` has been modified to store/read a JSON value specifying the recurrence period and specific days of recurrence, as such:
    ```json
    { "interval": "weekly", "daysOfWeek": [0, 1, 2, 3] }
    ```
  - 💡 `File_Sharing__c` is a newly invented field, to store a URL to a file storage folder (e.g. OneDrive), managed by a program coordinator
  - 💡 `Chatter_Group_ID__c` is a newly invented field, to store a correspondence between a program and its special chatter group, used by coordinators to send announcements
- `ProgPar__C`: participation of a `Contact` in a `Program`
  - `Id`, `Participant_Contact__c`, `Program_Offering__c`
- `FeedItem`: newsfeed for a given user (`Contact`), used for fetching announcements from Chatter in Salesforce
  - `Id`, `CreatedDate`, `Title`, `Body`, `ParentId`

## OAuth App-level Authentication

The following steps allows for the integration of the app into Salesforce.

To get a bearer token, create a [new connected app](https://developer.salesforce.com/docs/atlas.en-us.api_iot.meta/api_iot/qs_auth_connected_app.htm), set permitted users to all users may self-authorize, and ensure trusted IP ranges are set or change IP relaxation to Relax IP restrictions.

Use the consumer details from this app to send a [POST request](https://developer.salesforce.com/docs/atlas.en-us.api_iot.meta/api_iot/qs_auth_access_token.htm) to `https://organization--group888.sandbox.my.salesforce.com/services/oauth2/token`.

View video tutorial for OAuth integration here: https://youtu.be/N96cZh6Kiho
