# Team 5 - Frontier College
> _Note:_ This document is meant to evolve throughout the planning phase of your project.   That is, it makes sense for you commit regularly to this file while working on the project (especially edits/additions/deletions to the _Highlights_ section). Most importantly, it is a reflection of all the planning you work you've done in the first iteration. 
 > **This document will serve as a master plan between your team, your partner and your TA.**

## Product Details
 
#### Q1: What are you planning to build?

We are planning to build a standalone mobile-first web application that is integrated with Frontier College's existing infrastructure and serves as the primary application for Frontier College volunteers and coordinators to manage and share resources. Volunteers at Frontier College provide programming to members of their community across a wide variety of educational domains and coordinators facilitate this by providing volunteers with event information (location, time, etc) and all required resources (powerpoints, documents, etc). Our web application aims to solve Frontier College's concerns surrounding user experience, where the current event management and resource sharing is often decentralized and not very user friendly. Currently, many of the day-to-day features used by coordinators and volunteers are spread out across email, Salesforce, and the Frontier College website. Thus, while still allowing for access to existing tools and resources through Salesforce integration, our application will provide bilingual support and aims to be a primary hub for volunteers and coordinators to easily:

 * Create and manage groups of volunteers
 * Create and RSVP to events
 * Access group/event specific resources
 * Conduct communication through tools such as group and global announcements
 * Manage personal profiles

This will greatly improve the user experience for coordinators and volunteers, as all regularly used Frontier College features will be easily accessible and all in one place.


#### Q2: Who are your target users?
Our target users are volunteers and volunteer coordinators at Frontier College.

Roger is our first persona. Roger is a college student from Quebec with some free time. He wanted to give back to his community and was referred to Frontier College by a friend. Since then, Roger has hosted weekly homework clubs at his local YMCA, tutoring reading and writing to children and youth. He is happy with what he is doing at Frontier College but wishes that their volunteer tracking system was more user-friendly. Roger's goals are:
 * To track his volunteer hours.
 * To find out about upcoming volunteer opportunities.
 * To contribute to his community.

His frustrations are:
 * He finds it difficult to navigate the user interface of the current volunteer tracking system.
 * French is his first language but it is not well supported.
 * His local coordinator sends emails to notify him about events instead of sending it through the system.
    
Kathy is a middle school teacher with a passion for education. On top of her full-time teaching position, she coordinates programming for Frontier College in her region. Kathy spends a lot of time developing resources for her volunteers to use. She thinks they would be useful to other coordinators. Kathy's goals are:
 * To provide volunteers with the tools they need.
 * To organize special events.
 * She wants to be able to talk with her volunteers online.

Her frustrations are:
 * Volunteers sometimes miss the events they sign up for.
 * Coordinators from different regions do not collaborate on volunteer resources.

#### Q3: Why would your users choose your product? What are they using today to solve their problem/need?
There is an existing app that is not user friendly, so people currently are not using it. The partner want to combine a bunch of features to make it easier to organize into one single location rather multiple software tools than such as across email and other file sharing, calendar RSVPing. There are following thee reasons that users would like to choose our product.

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

We will use Figma to prototype and test the flow of UI (events pages, info sections, smooth animations, and navigation bar) for improving the existing app. We use Vue.js to create a frontend framework because some groupmates already know how to use it, and it is easy to learn. We ended up choosing to learn Node.js for the backend framework. In addition, we implement the database with a version of SQL that we learned in CSC343. On the API server, we will integrate with the existing applications: FormAssembly (access and fill out forms), Salesforce (access the community portal through app), WordPress(connect to posting info page, annual reports, and Access to volunteer resources documents).



#### Q5: What are the user stories that make up the MVP?
 
 ### User Story 1
 As a volunteer, I would like to access resources for conducting programming, so that I have everything I need to successfully deliver programming to students.
 
 #### Acceptance Criteria
  - Given that a volunteer is registered for an event, when they view their event's Resources page, then they are able to access all program resources relevent to their current placement.
  - Given that a coordinator is supervising an event, when they view the event's Resource page, then they can change, add, or remove resources from it and these changes are refelected on all applicable volunteer's Resource pages.

 ### User Story 2
 As a volunteer, I would like to be able to sign in with my existing volunteer profile, so that I am able to access all my information that was available on the previous, Salesforce integrated, system. 
 
 #### Acceptance Criteria
  - Given that a volunteer was previously registered with Frontier College, when they try to sign in to their existing profile, then they are able to successfully sign in and access all information they were able to previously.
 
 ### User Story 3
 As a coordinator, I would like to be able to create groups of volunteers, so that I can adminsitrate, communicate with, and share resources/information with relevent volunteers.
 
 #### Acceptance Criteria
  - Given that a coordinator is coordinating a given event, when they choose to create a new group, then they are able to add relevant volunteers to it, share resources, and perform administrative functions.
  - Given that a volunteer is added to a gourp, when they view it on their "Group Page", then they are able to see other group members and any other group specific information shared with them by the group coordinator.
 
 ### User Story 4
 As a coordinator, I would like to be able to create group events that volunteers can RSVP to, so that I can easily share event information, view who is attending an event, and notify volunteers about relevent events.
 
 #### Acceptance Criteria
  - Given that a coordinator has created a group, when they select "Create an Event", then they are able to enter event information, resources, and invitees.
  - Given that a volunteer is in a group where an event has been created, when they click on the event, then they are able to see relevent event information and have to option to RSVP.
  - Given that a volunteer has RSVPed to an event, when they view their "Event page", then they are able to see information able events they are attending and be notified of any changes.
 
 ### User Story 5
 As a volunteer, I would like to be able to recieve global announcements, so that I can be easily and reliably notified of general Frontier College changes, events, and information.
 
 #### Acceptance Criteria
 - Given that a user is registered, when a global announcement is made, then they are notified about it and are able to view it on their "Announcements" page. 
 
 ### User Story 6
 As a volunteer, I would like to be able to edit my volunteer profile, so that other users can see my most up to date and relevent information.
 
 #### Acceptance Criteria
 - Given that a volunteer is registered and signed in, when they visit their profile, then they are able to make changes to personal and volunteer specific information and these changes are saved and visible when other users view their profile.

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
 * Frontend Development: Frontend developers are responsible for coding an intuitive user interface that communicates with the backend. They work closely with the prototyping subteam to create an enjoyable user experience.
 * Frontend Prototyping: Frontend prototypers design the UI/UX of the app.
 * Backend Development: Backend developers program a server that integrates the partner's existing systems, along with new features like an event calendar.
 * Database Management: Database managers devise and implement a database schema according to the partner's needs.
 * Deployment/Infrastructure: Members in charge of Deployment/Infrastructure will work with tools like Docker to accelerate software development and deployment.
 * Product Management: Product managers work closely with the partners to figure out their needs and the problems our target users have that we are trying to solve. They determine what our team can realistically produce and the value we can provide to the partner.

Team members:
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
    * Roles: Frontend Prototyping, Backend Development, Database Management
    * Strengths:
        1. Databases
        2. Figma
        3. JavaScript
    * Weaknesses:
        1. Vue.js
        2. Deployment
        3. Mobile Development
* Michael Lai:
    * Roles: Frontend Development, Deployment/Infrastructure, Product Management
    * Strengths:
        1. Node.js/TypeScript/JavaScript
        2. Full-Stack Web Development
        3. DevOps
    * Weaknesses:
        1. Project Management 
        2. Presenting
        3. Mobile Development
* Ricky Yi:
    * Roles: Backend Development, Database Management
    * Strengths:
        1. Databases
        2. JavaScript
        3. Automated Testing
    * Weaknesses:
        1. DevOps
        2. Mobile Development
        3. Figma
* Shawn Plotko:
    * Roles: Frontend Development, Backend Development
    * Strengths:
        1. JavaScript/TypeScript
        2. Python
        3. Automated Testing
    * Weaknesses:
        1. Mobile Development
        2. Vue.js
        3. Figma
* Patrick Zhou:
    * Roles: Fronted Development, Backend Development
    * Strengths:
        1. JavaScript
        2. Automated Testing
        3. Nginx
    * Weaknesses:
        1. Deployment
        2. Figma
        3. Databases
* Greg Sherman:
    * Roles: Backend Development, Database Management, Light Frontend Development
    * Strengths:
        1. Python
        2. Figma
        3. React
    * Weaknesses:
        1. TypeScript
        2. Vue.js/Node.js
        3. Mobile Development

#### Q7: What operational events will you have as a team?

* The meetings will generally take place online over Discord
* We schedule regular weekly meetings during the tutorial period after the TA's keynote, and allow spillover into the 9-10PM period should more time be needed
* The purpose of regular meetings is to align every team member on the latest status of the project, and discuss any issues that have come up since the last meeting
* We may also schedule ad-hoc meetings for specific concerns
* Other team communication such as code reviews, are conducted asynchronously, as described in Q8 and Q9 of this document 
* With our project partner, we discussed the existing workflow of their volunteer program, clarified the pain points in their user experience, and established a basic expectation on where we can add the most value for them with our software. The outcome is the project framework outlined in this document
  
#### Q8: What artifacts will you use to self-organize?

* GitHub projects will be used as a Kanban to track tasks and who they are assigned to, deadlines, and dependencies. This will be the source of truth to track the current status of a work task. A task will only be marked as completed when it has been code reviewed, merged, and validated within the main branch of version control.
* Tasks will be assigned based on subteam and then divided within subteam members based on availability and fairness.
* At a high level we will prioritize tasks that move the project in the direction of completing our MVP. At a low level, we will prioritize dependencies to ensure the team remains unblocked and we can continue working in parallel.
* A Discord server will be used to organize  our internal group communication. Channels will be used to organize communication across subteams. Additionally, a resources channel will be used to pin important resources for quick access.
* Meeting minutes will be stored in the GitHub repo to keep track of the findings, key insights and action itmes of each meeting.

#### Q9: What are the rules regarding how your team works?

The team leads set staggered deadlines and team members are responsible for their assigned tasks. Members are expected to communicate early and often, so that there is sufficient time to discuss new implementation and changes. As one team, we provide trust, support, and transparency to each other. When a member is stuck with their task, they should ask for help as early as possible, and other members should provide ideas and suggestions that meet both project requirements and quality standards.

**Communications & Meetings:**
 * At least one group meeting per week, usually during the tutorial period on Monday at 8-9PM through the team discord voice channel. Should there be a need for additional meeting time, the team is expected to set aside 9-10PM after the tutorial, as much as possible.  
 * We may use Zoom meeting in case we need to share multiple screens together and make annotations. 
 * We use GitHub repositories to access and track code and other artifacts. In addition, we use GitHub Projects as a kanban solution to brainstorm and assign each task for each team members ([Link](https://github.com/orgs/csc301-fall-2022/projects/1/views/1))



----
## Highlights

#### The Product

Frontier College already has a robust volunteer management system, and it is unrealistic to migrate the entire thing. Their current solution consists of a SalesForce portal, FormAssembly for volunteer applications and inquiries, and their website. Its main issue is the SalesForce UI/UX. Volunteers find it hard to use, and it lacks some critical features, such as strong bilingual support. At this point, we can improve the SalesForce applet, most functionality is already in place, or develop a standalone app and integrate it with their existing systems. The issue with improving the SalesForce applet is that it limits our options for expansion and control over the UI/UX. So, we ended up choosing to make a standalone app.

#### Our Tech Stack

Deciding our tech stack was one of the first design decisions we made and an important one. Our partner does not have any preference for this aspect of the project, so we were free to choose one on our own. We ended up with two main options for the backend, Python and Django or TypeScript and Node.js. Python was an obvious contender. It is easy to use, and everyone is familiar with it. As for Node.js, we have members who have worked with Node.js and can share their expertise with other members. We decided on Node.js because the individuals working on the backend wanted to learn Node.js anyways. The choices for our database implementation and frontend were more clear-cut. We chose to implement the database with a version of SQL since that is what CSC343 teaches, and we chose Vue.js for the frontend because we have members who are confident using Vue.js and individuals who want to learn.

#### Team Processes

We put a lot of thought and consideration into our team processes. First, we wanted a consistent time when we could expect everyone to be available for a meeting. As it turns out, it is difficult to find time where seven students can all meet. We decided on Mondays at 9-10 pm because everyone already attends the 8-9 pm Monday tutorial, so it is unlikely that anyone would have any other obligations Monday night. Then we had to decide on the meeting platform. Zoom was an option; we use it for online classes. But we already handled asynchronous discussions on Discord, and it is convenient to consolidate communications onto one platform, so we chose Discord. Discord also hosts links to our notes and resources. Another tool we are considering is a whiteboard app like Lucidpark. It provides a visual representation of project structure that Discord cannot and might be useful once we start development. When it comes to managing project tasks, there are a lot of options. Two of the ones that came up during our discussion were Jira and Asana. We settled on GitHub Projects as we can easily access it through our GitHub repository, and our members had a good experience using it outside of the course.
