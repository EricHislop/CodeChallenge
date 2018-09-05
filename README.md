# Properly Coding Challenge
Code challenge for full stack developers.

## Objectives
 - Assess software development skills such as:
    - Problem solving
    - Software quality
    - Code quality
    - Testing
    - Task sizing and work estimation
    - Use of tools (e.g. Git)
    - Delivery

## Format
 - A candidate will be assigned to one or more tasks listed below. 
    - Clone/download the Git repository to have access to all the assets he needs to complete the tasks.
    - Estimate the time needed to complete each task and provide an estimated date of delivery 
    - Complete the tasks and upload the resulting code and any other assets to a public github repository
    - Provide the link to the repository for the solution to be reviewed
    - If required, demo the solution during a technical interview. Be prepared to perform pair programming during the technical interview. Additional requirements may be introduced, or a different approach may be tried (20 to 45 mins max).

## Problem Statement

Given a **Database** of:
### Users
 - name
 - email
 - location
 - subscriptionId

### Subscriptions
 - id
 - name
 - priceType

### Properties
 - id
 - userId
 - title
 - location
 - type
 - numberOfRooms
 - timeZone

### Bookings

 - id
 - propertyId
 - startDate
 - endDate

Use the **JSON dataset** that we have provided in the repository. 

#### Task Group 1
Create functions that return:

 1.1 - All users from a particular city

 1.2 - All users from a particular company (a user of a company is a user that has the same email domain. E.g for john@getproperly.com and company@getproperly.com "getproperly.com" is the email domain)

 1.3 - All users from Free tier subscription which have more than 6 properties

 1.4 - All users from Premium tier subscription which have less than 4 properties

 1.5 - All users that live in a different city than their properties

#### Task Group 2
Create a function that return:

 2.1 - All bookings for a **given period** (start and end dates).
 
    2.1.a - The bookings returned should have the startDate and endDate formated to dd/MM/YYYY HH:mm using the property timeZone. 
    
    2.1.b - The **given period** is also provided in the Property timeZone.

2.2 - All bookings longer or equal to 25 days.

2.3 - All bookings shorter or equal to 3 days.

2.4 - All Properties with Bookings with 1 day or less between bookings

2.5 - With the functions created expose them in a restful application and create a dashboard (simple UI) to display the results

#### Task Group 3

 3.1 - How to limit the users that live in a different city to just use premium subscription?


## FAQ
1 -  Where can I find the city for Property and User?
Use the GPS location provided.
