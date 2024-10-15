# Book-Record-Management-System
    >>  server:
        >> Storing book data (Basic)
        >> User Registrations (Standard)
        >> Subscription (Premium)


# Routes & Endpoints

## /users
GET: Get all list of users
POST: Create a new user

## /users/{id}
GET:Get user by their id
PUT: Update user by their id
DELETE: Delete a user by id (check if user have any issued book )&&(is their any fine to be collected)

#Subscriptions:
    >> 3 months
    >> 6 months
    >> 12 months

## /users/subscription-details/{id}
GET: get user subscription details
    >> Data of subscriptions
    >> Valid till
    >> Fine if any


## /books
GET: Get all books
POST: Add new book

## /books/issued
GET: Get all issued book

## /books/issued/withfine
GET: All books with fine


# fine calculation 
    >> if user has an issued book & issued book is to be returned by 10th october 2024, if he miss the date of return then he needs to pay fine of Rs. 100/- 

    >> if user has an issued book & issued book is to be returned by 10th october 2024, if he miss the date of return & also his subscription also expired then he needs to pay fine of Rs. 200/-