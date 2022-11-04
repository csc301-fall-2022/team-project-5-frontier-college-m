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

- Clear instructions for how to use the application from the end-user's perspective
- How do you access it? Are accounts pre-created or does a user register? Where do you start? etc.
- Provide clear steps for using each feature described above
- This section is critical to testing your application and must be done carefully and thoughtfully

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

Keep this section as brief as possible. You may read this [Github article](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/licensing-a-repository) for a start.

- What type of license will you apply to your codebase?
- What affect does it have on the development and use of your codebase?
- Why did you or your partner make this choice?
