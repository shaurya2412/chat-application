# BlinkChat - Real-time Chat Application

BlinkChat is a full-featured real-time chat application built with the MERN stack. It provides a seamless and engaging user experience with features like user authentication, real-time messaging, and online presence indicators.

## Features

- **User Authentication**: Secure user registration and login system with JWT authentication.
- **Real-time Messaging**: Instant messaging between users powered by Socket.IO.
- **User Discovery**: View a list of all registered users on the platform.
- **Online Status**: See which users are currently online.
- **Responsive Design**: A modern and user-friendly interface that works on all devices.
- **State Management**: Centralized state management using Redux Toolkit for a predictable application state.

## Tech Stack

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: For efficient and predictable state management.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Socket.IO Client**: For real-time, bidirectional event-based communication.
- **Axios**: A promise-based HTTP client for making requests to the backend.
- **React Router**: For declarative routing in the application.

### Backend

- **Node.js**: A JavaScript runtime for building the server-side application.
- **Express**: A fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: A NoSQL database for storing user and message data.
- **Mongoose**: An ODM library for MongoDB and Node.js.
- **Socket.IO**: For enabling real-time, bidirectional communication.
- **JSON Web Token (JWT)**: For secure user authentication.
- **bcryptjs**: For hashing passwords before storing them in the database.
- **dotenv**: For managing environment variables.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB (local installation or a cloud-based instance like MongoDB Atlas)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/chat-application.git
    cd chat-application
    ```

2.  **Install backend dependencies:**
    ```sh
    cd Backend
    npm install
    ```

3.  **Install frontend dependencies:**
    ```sh
    cd ../frontend
    npm install
    ```

### Configuration

1.  **Create a `.env` file** in the `Backend` directory and add the following variables. Replace the placeholder values with your actual configuration.

    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET_KEY=your_super_secret_jwt_key
    ```

    - `PORT`: The port on which the backend server will run.
    - `MONGO_URI`: The connection string for your MongoDB database.
    - `JWT_SECRET_KEY`: A secret key for signing JWT tokens.

### Running the Application

1.  **Start the backend server:**
    - From the `Backend` directory, run:
      ```sh
      npm run dev
      ```
    - The server will start on the port specified in your `.env` file (e.g., `http://localhost:5000`).

2.  **Start the frontend development server:**
    - From the `frontend` directory, run:
      ```sh
      npm start
      ```
    - The application will open in your default browser at `http://localhost:3000`.

## Available Scripts

### Backend (`/Backend`)

- `npm run dev`: Starts the backend server with `nodemon`, which automatically restarts the server on file changes.

### Frontend (`/frontend`)

- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm test`: Launches the test runner in interactive watch mode.
- `npm run eject`: Ejects the app from Create React App's managed configuration.





![image](https://github.com/user-attachments/assets/317e5c13-7925-494e-9ff5-451c579986a0)
![WhatsApp Image 2024-09-25 at 19 57 28_a3e54d60](https://github.com/user-attachments/assets/88f06a39-7cba-4eb5-b0b8-54b5c32aef2e)



A Complete Chat App with MERN Stack | MongoDB, JWT, Socket.io, Daisy UI
