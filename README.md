# Properly Coding Challenge
Code challenge for development candidates.

## Objectives

## Format


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

 - All bookings for a **given period** (start and end dates).
    - The bookings returned should have the startDate and endDate formated to dd/MM/YYY using the property timeZone. 
    - The **given period** is also provided in the Property timeZone.

 - After creating the functions, expose them in a restful application and create a dashboard displaying the results



Assignment for pair programming
 - How to limit the users that live in a different city to just use premium subscription?

