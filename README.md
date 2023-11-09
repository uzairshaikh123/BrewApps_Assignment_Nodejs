# Bookshelf API Documentation
Welcome to the Bookshelf API documentation! This API is designed to help you manage your virtual bookshelf effortlessly. Whether you're a book enthusiast or building a library management system, these endpoints provide the functionality you need to interact with your book collection.

## API Endpoints


### 1. Add a New Book
Endpoint: /books
Method: POST
Request Body:

{
  "title": "The Art of Programming",
  "author": "John Doe",
  "summary": "A comprehensive guide to programming principles and practices."
}
## Response:
Success (200 OK):

{
  "message": "Book added",
  "book": {
      "id": 1,
      "title": "The Art of Programming",
      "author": "John Doe"
    }
}
## Error:

{
  "error": "Invalid request. Please provide title, author, and summary."
}
###  2. View a List of All Books
Endpoint: /books
Method: GET
## Response:
Success (200 OK):
{
  "books": [
    {
      "id": 1,
      "title": "The Art of Programming",
      "author": "John Doe",
      "summary": "A comprehensive guide to programming principles and practices."
    },
    {
      "id": 2,
      "title": "Design Patterns",
      "author": "Jane Smith",
      "summary": "A comprehensive guide to programming principles and practices of Design Patterns."
    },
    // ... other books
  ]
}
### 3. View Details of a Specific Book by its ID
Endpoint: /books/{id}
Method: GET
## Response:

 Success (200 OK):
 
{
  "id": 1,
  "title": "The Art of Programming",
  "author": "John Doe",
  "summary": "A comprehensive guide to programming principles and practices."
}

Error:

{
  "error": "Book not found"
}
### 4. Update a Book's Details
Endpoint: /books/{id}
Method: PUT
Request Body:


{
  "title": "Updated Title",
  "author": "Updated Author",
  "summary": "Updated summary."
}
## Response:

 Success (200 OK):
 
json

{
  "message": "Book details updated successfully",
  data:{
  "title": "Updated Title",
  "author": "Updated Author",
  "summary": "Updated summary."
}
}

 Error:

{
  "error": "Book not found"
}
 ### 5. Delete a Book
Endpoint: /books/{id}
Method: DELETE
Response:
Success (200 OK):

{
  "message": "Book deleted successfully",
  data:{
  "title": "deleted Title",
  "author": "deleted Author",
  "summary": "deleted summary."
}
}

 Error:
{
  "error": "Book not found"
}


## Setup and Local Run Instructions


#### Clone the Repository:
git clone https://github.com/your/BrewApps_Backend_Assignment.git


Install Dependencies:


npm install
### Run the Application:

npm start
Access the API:

Base URL: http://localhost:8080
### Decisions and Assumptions

#### Database Choice:

MongoDB was chosen for its simplicity and easy setup. It can be easily changed to a different database system as needed.
Authentication:

No authentication is implemented for simplicity. In a production environment, consider adding secure authentication.
Error Handling:

Standard HTTP status codes and JSON responses for errors to enhance clarity and interoperability.
Assumptions:

Assumes a well-structured request with valid JSON data for book addition and update.
Assumes a book's unique identifier is its ID.
Assumes the application will be used in a controlled environment without malicious intent.
Feel free to explore and enhance your book management experience with the Bookshelf API! If you have any questions or need assistance, don't hesitate to reach out. Happy coding! 📚✨
