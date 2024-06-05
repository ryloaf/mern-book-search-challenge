# 21 MERN: Book Search Engine

This week's assignment highlights the modern web development focus on data and user demands. We were tasked with refactoring a Google Books API search engine from a RESTful API to a GraphQL API using Apollo Server. The starter code, built with the MERN stack, features a React front end, a MongoDB database, and a Node.js/Express.js server and API, and allows users to save book searches to the back end.

## User Story

```md
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

## Acceptance Criteria

```md
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  
```
## Technologies

  1. JavaScript
  2. Node.js
  3. Apollo GQL
  4. React
  5. MongoDB

## Usage

  1. Run `npm install` in the root folder
  2. Then run `npm run start`

## Mock-Up

![21-mern-homework-demo-01](https://github.com/ryloaf/mern-book-search-challenge/assets/151485696/b8e0e05e-70d2-4f7d-a376-64cf18cead69)
![21-mern-homework-demo-02](https://github.com/ryloaf/mern-book-search-challenge/assets/151485696/3f3c5e01-d580-4182-9f44-822cc0d4d88b)
![Uploading 21-mern-homework-demo-03.gif…]()

## Credits & Links

  © 2024 [Rylee Jolley](https://github.com/ryloaf)
