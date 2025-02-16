# Example API for JavaScript Introduction: A Sneak Peek into Backend

Welcome everyone to the source code for Example API Repository made specifically for 
**JavaScript Introduction: A Sneak Peek into Backend** webinar. It provides a functional API to help you understand the basics of backend development using JavaScript
-

## Overview
This repository contains a basic API built with JavaScript and Node.js. It demonstrates how to create a backend server, handle HTTP requests, and respond with JSON data. The API is intentionally simple, making it easy for beginners to understand and modify.

## Getting Started
Follow these steps to set up and run the API on your local machine.

### Prerequisites
Before you begin, ensure you have the following installed:
 - Node.js (v14 or Higher)
 - npm (6.14.18 or Higher)
 - A Code Editor (VS Code preferred)

### Installation
1. Clone Repository
    ```BASH
    git clone https://github.com/bodybody123/example-API.git
    ```
1. Navigate to project directory
    ```BASH
    cd example-API
    ```
1. Install dependencies
    ```BASH
    cd backend
    npm install
    ```

### Running the API
To start the API you can run:
```BASH
npm start
```
By default, the server will run on [http://localhost:8000](http://localhost:8000). You can test the API using tools like Postman.

## API Endpoints
Currently there's only one API that exist

### 1. GET /
- **Description:** Return body message 
- **Request (Optional):**
```JSON
{
    "message": "example"
}
```
- **Response:** 
```JSON
{
    "message": "example"
}
```

## License
This project is licensed under the ISC License. See the LICENSE file for details.

## Acknowledgments
- This project was created as part of the JavaScript Introduction: A Sneak Peek into Backend webinar.
- Special thanks to the contributors and the open-source community for their invaluable resources and tools.

Feel free to explore, modify, and expand this API to suit your learning needs. Happy coding! 🚀
