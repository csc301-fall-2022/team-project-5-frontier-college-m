# Team 5 - Frontier College

<!-- > _Note:_ This document is intended to be relatively short. Be concise and precise. Assume the reader has no prior knowledge of your application and is non-technical.  -->

## Description

<!--  * Provide a high-level description of your application and it's value from an end-user's perspective
 * What is the problem you're trying to solve?
 * Is there any context required to understand **why** the application solves this problem? -->

We are building a standalone mobile-first web application that is integrated with Frontier College's infrastructure, serving as the primary application for Frontier College volunteers and coordinators to manage and share resources. The app facilitates the process of providing academic programming to members of communities by volunteers. The problem that exists is a lackluster user experience surrounding Frontier College's current infrastructure. This app aims to solve this problem by presenting shared resources to volunteers while also allowing these resources to be managed by coordinators in a user-friendly manner.

## Key Features

<!--  * Described the key features in the application that the user can access
 * Provide a breakdown or detail for each feature that is most appropriate for your application
 * This section will be used to assess the value of the features built -->

### Deliverable 2 features

1. A home page
   - Presents important announcements at the top of the page with a redirection button for the announcement page
   - Provides short previews and a redirection button for:
     - Assigned programs
     - Group chats
     - A community portal
2. An academic programming page
   - Presents the users with the relevant programs for the current date
     - These programs are highlighted in a section separate from upcoming programs
   - Also presents the users with a separate section containing upcoming programs
   - For all programs, the user is provided with:
     - The date of the program
     - The title of the program
     - A description of the program
3. A separate page containing details regarding each program
   - Can be accessed by clicking on the program you wish to view details about
   - When selected, provides details regarding:
     - The date of the program
     - The location of the program
     - Any relevant files
     - A description of the program
     - The relevant staff (categorized by coordinator or volunteer)

### Future features to implement

4. Programming announcements
   - Notifications for those announcements
5. Integrations with external calendars

## Instructions

The deployed version of our website can be accessed by going to https://frontier-college-5.herokuapp.com/. Currently, the account is pre-created and already logged in when visiting the website.

Every page will have a header that indicates which page you are on, as well as a footer, which has a set of navigation buttons (Home, Program, Profile, Chat, and Updates) that will take you to their corresponding website page when clicked. Currently, only Home and Program have an associated page.

Firstly, clicking the link above will bring you to the website home page (our first feature). At the top of the page you will be able to see a preview of the user’s announcement’s, along with a ‘View All’ button which, in the future, will bring you to an Announcements page. Underneath, there are previews for the user’s assigned programs, group chats and community portals. The Assigned Programs card links to the user’s Programs page. The Group Chats and Community Portals cards will link to their corresponding pages in the future.

Clicking on the Program navigation button or the Assigned Programs card will bring you to the user’s Programs page (our second feature). This page contains a list of the programs the current user is assigned to, with the ones that are occurring on today’s date appearing under the ‘Today’ header and those that are upcoming appearing under the ‘Upcoming’ header. Each program card allows the user to see the date the program is occurring, the program name, and a preview of the program description.

Clicking on any of these cards brings you to a page with specific information regarding that event (our third feature). An event specific page contains a title indicating the event which the page is for. Underneath you can find a set of tags indicating how often the event reoccurs (ie. weekly), the days of the week on which it occurs, and the location of the event. Additionally, there is a button, which in the future, will allow a user to download any relevant files when clicked. The page also displays the full description of the event, all users part of it, and their associated role (coordinator or volunteer).


## Development requirements

 <!-- * If a developer were to set this up on their machine or a remote server, what are the technical requirements (e.g. OS, libraries, etc.)?
 * Briefly describe instructions for setting up and running the application (think a true README).
  -->

See `README.md` at the root of the project for development requirements.

## Deployment and Github Workflow

<!-- Describe your Git / GitHub workflow. Essentially, we want to understand how your team members shares a codebase, avoid conflicts and deploys the application. -->

<!-- - Be concise, yet precise. For example, "we use pull-requests" is not a precise statement since it leaves too many open questions - Pull-requests from where to where? Who reviews the pull-requests? Who is responsible for merging them? etc.
- If applicable, specify any naming conventions or standards you decide to adopt.
- Describe your overall deployment process from writing code to viewing a live applicatioon
- What deployment tool(s) are you using and how
- Don't forget to **briefly explain why** you chose this workflow or particular aspects of it! -->

### Git Branches and Workflow

The `main` branch is our primary branch and is maintained to the quality that code in `main` should be deployable.

Developers making changes can branch off of `main` to create feature branches. These branches can only be merged back into main through a PR. Each of these branches is prefixed with `<gitub-username>-` to make it clear whose responsibility it is to manage the PR. Responsibilities include responding to feedback and merging once approval has been given.

PRs also trigger automated deployments that allow developers and reviewers to review changes in a production-like environment without needing to compromise the `main` deployment. Preview apps for a PR can be inspected at `https://frontier-college-pr-<number>.herokuapp.com`.

We opted to use this simplified workflow to avoid the complexity associated with the additional branches using in gitflow. Additionally our preview environments mean that we do not need to maintain a permanent develop deployment.

### Deployments

Once code has been pushed to remote, automation kick into deploy our application. We opted to use Heroku with our project since it can provision an application server in addition to PostgreSQL database. Another reason we opted to use Heroku is that it allows us to deploy without writing custom IaC or pipeline scripts.

Depending on which branch code is pushed to different deployment processes are triggered.

- Pushes to `main` trigger a deployment to our live deployment that is shared with our partner
- Pushes to branches that are the source of pull requests trigger a deployment to temporary environments used to review new changes. These environments are automatically terminated when the PR is merged.

## Licenses

We chose to use the [Apache 2.0 License](https://github.com/csc301-fall-2022/team-project-5-frontier-college-m/LICENSE)

```
Copyright 2022 Samm Du, Michael Lai, Zachary Lee, Shawn Plotko, Greg Sherman, Ricky Yi, Patrick Zhou

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

We chose this license in consultation with our partner, because it allows us to release our source code for public use, enables commercial use of our source code without creating the obligation that derivative work also release their source code, and excludes us from liability or obligation to provide warranty.
