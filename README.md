# Properly Coding Challenge
Code challenge for full stack developers.

## Objectives
 - Asses software development skills such as:
    - Problem solving
    - Software quality
    - Code quality
    - Sizing Estimation
    - Tools (e.g. Git)
    - Delivery

## Format
 - Assigment to be develop at the candidate own time/estiamtes. There is a limit as to how long this should take and we also measure against that.
    - The candidate will estimate the task
    - Develop
    - Upload the code to a public github repository
    - Demo the delivery and present the delivery during the technical interview
    - Pair programming during the technical interview. 2 additional requirements will be added and should be developed during a pair programming session (20 to 45 mins max).

## Problem Statement

Given a **Database** of:
### Users
 - name
 - email
 - full address
 - location
 - subscriptionId

### Subscriptions
 - id
 - name
 - priceType

### Properties
 - id
 - user_id
 - title
 - address
 - location
 - type
 - numberOfRooms
 - timeZone

### Bookings

 - id
 - property_id
 - startDate
 - endDate
 - title

Using the **JSON dataset** that we have provided in the repository, create functions that return:

 - All users from a particular city

 - All users from a particular company (a user of a company is a user that has the same email domain. E.g john@getproperly.com and company@getproperly.com)

 - All users from Free tier subscription which have more than 10 properties

 - All users from Premium tier subscription which have less than 4 properties

 - All users that live in a different city that their properties

 - After creating the functions, expose them in a restful application and create a dashboard displaying the results

Assignment for pair programming
 - How to limit the users that live in a different city to just use premium subscription?

create a function that return:
 - All bookings for a **given period** (start and end dates).
    - The bookings returned should have the startDate and endDate formated to dd/MM/YYYY HH:mm using the property timeZone. 
    - The **given period** is also provided in the Property timeZone.