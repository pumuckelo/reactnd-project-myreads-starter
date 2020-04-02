# MyReads Project

This Web Application is a simple Book Tracker which allows you to categorize books in shelves. You can put a book in one of the 3 shelves:

Want to read
Currently Reading
Read

## Install Application

To install the application run the following commands:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## Backend Server

As a backend an API is used. The API is accessed by [`BooksAPI.js`](src/BooksAPI.js) This file contains the following functions, used to get and update the data on the backend.

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

## Important

On the search page you can only search for the following terms:

'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
