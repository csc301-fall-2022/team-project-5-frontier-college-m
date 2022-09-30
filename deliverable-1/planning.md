# Team 5 - Frontier College
> _Note:_ This document is meant to evolve throughout the planning phase of your project.   That is, it makes sense for you commit regularly to this file while working on the project (especially edits/additions/deletions to the _Highlights_ section). Most importantly, it is a reflection of all the planning you work you've done in the first iteration. 
 > **This document will serve as a master plan between your team, your partner and your TA.**

## Product Details
 
#### Q1: What are you planning to build?

We plan to build a web app that serves as the primary resource for Frontier College volunteers. Volunteers at Frontier College provide programming to support the learning and development of people of all ages. (add problems volunteers may have here). To support a volunteer's every need, the app aims to provide several key functions and features, which are:
 * Bilingual support for both English and French
 * Integrations with Salesforce, Form Assembly, and WordPress
 * Communication between volunteer and supervisor
 * Push notifications
 * Volunteer groups
 * Tracking of volunteer hours
 * Invite friends to volunteer
 * Connect to the job opportunities page of the Frontier College website
 
 > Short (1 - 2 min' read)
 * Start with a single sentence, high-level description of the product.
 * Be clear - Describe the problem you are solving in simple terms.
 * Be concrete. For example:
    * What are you planning to build? Is it a website, mobile app,
   browser extension, command-line app, etc.?      
    * When describing the problem/need, give concrete examples of common use cases.
    * Assume your the reader knows nothing about the problem domain and provide the necessary context. 
 * Focus on *what* your product does, and avoid discussing *how* you're going to implement it.      
   For example: This is not the time or the place to talk about which programming language and/or framework you are planning to use.
 * **Feel free (and very much encouraged) to include useful diagrams, mock-ups and/or links**.


#### Q2: Who are your target users?

The target users are volunteers and staff at Frontier College.

  > Short (1 - 2 min' read max)
 * Be specific (e.g. a 'a third-year university student studying Computer Science' and not 'a student')
 * **Feel free to use personas. You can create your personas as part of this Markdown file, or add a link to an external site (for example, [Xtensio](https://xtensio.com/user-persona/)).**

#### Q3: Why would your users choose your product? What are they using today to solve their problem/need?
1. Flexibility in Use: We implement an app with two languages, which allows more potential users to use our app. In addtion, each language format has similar looking UIs so that there doesn't exist any discrimination.
2. Simple and Intuitive Use: We will make our UI fairly straightforward so that users can use our app simply following their intuition without giving formal instruction. We also embed other applications (Salesforce, Form Assembly, and WordPress) into our app, so it saves users time by just checking one single interface.
3. Perceptible Information: This application will provide adequate contrast between essential information and its surroundings by increasing the font of text, so the users are more easy to read information and manage their accounts. We also may use different modes (pictorial and verbal) to emphasize the display of profile and dashboard. 

> Short (1 - 2 min' read max)
 * We want you to "connect the dots" for us - Why does your product (as described in your answer to Q1) fits the needs of your users (as described in your answer to Q2)?
 * Explain the benefits of your product explicitly & clearly. For example:
    * Save users time (how much?)
    * Allow users to discover new information (which information? And, why couldn't they discover it before?)
    * Provide users with more accurate and/or informative data (what kind of data? Why is it useful to them?)
    * Does this application exist in another form? If so, how does your differ and provide value to the users?
    * How does this align with your partner's organization's values/mission/mandate?

#### Q4: How will you build it?

> Short (1-2 min' read max)
 * What is the technology stack? Specify any and all languages, frameworks, libraries, PaaS products or tools. 
 * How will you deploy the application?
 * Describe the architecture - what are the high level components or patterns you will use? Diagrams are useful here. 
 * Will you be using third party applications or APIs? If so, what are they?
 * What is your testing strategy?

#### Q5: What are the user stories that make up the MVP?
 
 ### User Story 1
 As a volunteer, I would like to access resources for conducting programming, so that I have everything I need to successfully deliver programming to students.
 
 #### Acceptance Criteria
  - Given that a volunteer is registered, when they view their Resources page, then they are able to access all program resources relevent to their current placement.
  - Given that a staff is supervising a program, when they view the program's Resource page, then they can change, add, or remove resources from it and these changes are refelected on all applicable volunteer's Resource pages.

 ### User Story 2
 As a volunteer, I would like to track my volunteer hours and history, so that I have a up-to-date record of all the volunteer work I did.
 
 #### Acceptance Criteria
  - Given that a volunteer has done volunteer work, when they navigate to their profile and view the Volunteer History section, then they will be able to see their total hours and each program they volunteered for.
 
 ### User Story 3
 As a staff member, I would like to be able to manage the accounts of volunteers I supervise, so that I can view and modify relevent volunteer information.
 
 #### Acceptance Criteria
  - Given that a staff members is supervising volunteers, when they view their Volunteers page, then they can view and manage all volunteers they supervise.  
  - Given that a volunteer is registered and their notification settings allow for it, when their superviser makes changes to their account, then they are notified about relevent changes.
 
 ### User Story 4
 As a staff member, I would like to be able to create groups/chats, so that I can communicate with volunteers and they can communicate with each other.
 
 #### Acceptance Criteria
  - Given that a staff member is logged in, when they click on the Chat Creation page/interface, then they can select existing volunteers or staff and add them to a chat.
  - Given that a user is in a chat, when they navigate to the Chat page, then they can view all active chats and send messages.
  - Given that a user's notification settings allow it, when a message is sent in a chat they are in, then they recieve a notification.
 
 ### User Story 5
 As a volunteer, I would like to be able to invite friends to volunteer functions, so that they can exprience or assist with the programs I or other volunteers helped make possible.
 
 #### Acceptance Criteria
 - Given that there are existing volunteer functions, when a volunteer navigates to the Current Functions page and clicks the share button for a particular function, then they get a sharable link to function information/sign up. 

----
 * At least 5 user stories concerning the main features of the application - note that this can broken down further
 * You must follow proper user story format (as taught in lecture) ```As a <user of the app>, I want to <do something in the app> in order to <accomplish some goal>```
 * User stories must contain acceptance criteria. Examples of user stories with different formats can be found here: https://www.justinmind.com/blog/user-story-examples/. **It is important that you provide a link to an artifact containing your user stories**.
 * If you have a partner, these must be reviewed and accepted by them. You need to include the evidence of partner approval (e.g., screenshot from email) or at least communication to the partner (e.g., email you sent)

----
## Intellectual Property Confidentiality Agreement 
> Note this section is **not marked** but must be completed briefly if you have a partner. If you have any questions, please ask on Piazza.
>  
**By default, you own any work that you do as part of your coursework.** However, some partners may want you to keep the project confidential after the course is complete. As part of your first deliverable, you should discuss and agree upon an option with your partner. Examples include:
1. You can share the software and the code freely with anyone with or without a license, regardless of domain, for any use.
2. You can upload the code to GitHub or other similar publicly available domains.
3. You will only share the code under an open-source license with the partner but agree to not distribute it in any way to any other entity or individual. 
4. You will share the code under an open-source license and distribute it as you wish but only the partner can access the system deployed during the course.
5. You will only reference the work you did in your resume, interviews, etc. You agree to not share the code or software in any capacity with anyone unless your partner has agreed to it.

**Briefly describe which option you have agreed to. Your partner cannot ask you to sign any legally binding agreements or documents pertaining to non-disclosure, confidentiality, IP ownership, etc.**

----

## Process Details

#### Q6: What are the roles & responsibilities on the team?

Describe the different roles on the team and the responsibilities associated with each role. 
 * Roles should reflect the structure of your team and be appropriate for your project. Not necessarily one role to one team member.  
 * Add role(s) to your Team-[Team_Number]-[Team_Name].csv file on the main folder

List each team member and:
 * A description of their role(s) and responsibilities including the components they'll work on and non-software related work
 * 3 technical strengths and weaknesses each (e.g. languages, frameworks, libraries, development methodologies, etc.)

Roles:
* Samm Du: 
    * Roles: Deployment/Infrastructure, Product Management, Full-Stack Development
    * Strengths:
        1. Linux, cloud provisioning, deployment
        2. Node.js/TypeScript/JavaScript
        3. Databases
    * Weaknesses:
        1. Vue.js
        2. Docker, CI/CD
        3. Figma
* Zachary Lee: 
    * Roles: Front-end Prototyping, Backend Development, Database Management
    * Strengths:
        1. Databases
        2. Figma
        3. JavaScript
    * Weaknesses:
        1. Vue.js
        2. Deployment
        3. Mobile Development
* ...


#### Q7: What operational events will you have as a team?

Describe meetings (and other events) you are planning to have. 
 * When and where? Recurring or ad hoc? In-person or online?
 * What's the purpose of each meeting?
 * Other events could be coding sessions, code reviews, quick weekly sync meeting online, etc.
 * You should have at least 2 meetings with your project partner (if you have one) before D1 is due. Describe them here:
   * What did you discuss during the meetings?
   * What were the outcomes of each meeting?
   * You must keep track of meeting minutes and add them to your repo.
   * You must have a regular meeting schedule established by the second meeting.  
  
#### Q8: What artifacts will you use to self-organize?

List/describe the artifacts you will produce in order to organize your team.       

 * Artifacts can be To-Do lists, Task boards, schedule(s), meeting minutes, etc.
 * We want to understand:
   * How do you keep track of what needs to get done?
   * **How do you prioritize tasks?**
   * How do tasks get assigned to team members?
   * How do you determine the status of work from inception to completion?

#### Q9: What are the rules regarding how your team works?

Describe your team's working culture.

**Communications:**
 * What is the expected frequency? What methods/channels are appropriate? 
 * If you have a partner project, what is your process (in detail) for communicating with your partner?
 
**Meetings:**
 * How are people held accountable for attending meetings, completing action items? Is there a moderator or process?


----
## Highlights

Specify 3 - 5 key decisions and/or insights that came up during your meetings
and/or collaborative process.

 * Short (5 min' read max)
 * Decisions can be related to the product and/or the team process.
    * Mention which alternatives you were considering.
    * Present the arguments for each alternative.
    * Explain why the option you decided on makes the most sense for your team/product/users.
 * Essentially, we want to understand how (and why) you ended up with your current product and process plan.
 * This section is useful for important information regarding your decision making process that may not necessarily fit in other sections. 
