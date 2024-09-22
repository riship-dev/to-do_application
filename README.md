# To-Do Application

This is a simple To-Do application built using **React** for the frontend and **Node.js** with **PostgreSQL** for the backend.

## Features
- Add new to-do items.
- View a list of all to-do items.
- Edit existing to-do items.
- Delete to-do items.

## Technologies Used
- **Frontend**: React, Bootstrap
- **Backend**: Node.js, Express
- **Database**: PostgreSQL

## Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install dependencies for both the server and client:

    For the backend:

    ```bash
    cd server
    npm install
    ```

    For the frontend:

    ```bash
    cd client
    npm install
    ```

3. Set up the environment variables:

    Create a `.env` file in the backend root and provide the following:

    ```bash
    DB_USER_NAME=<your-database-username>
    PASSWORD=<your-database-password>
    DATABASE=<your-database-name>
    HOST=<your-database-host>
    PORT=<your-database-port>
    ```

4. Run the backend server:

    ```bash
    cd server
    npm start
    ```

5. Run the frontend client:

    ```bash
    cd client
    npm start
    ```

## API Endpoints

- **GET /todos**: Get all to-do items.
- **POST /todos**: Add a new to-do item.
- **PUT /todos/:id**: Edit a to-do item by id.
- **DELETE /todos/:id**: Delete a to-do item by id.