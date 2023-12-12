# Student Crud Operations in MERN

Short description or tagline about your project.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)
- [API Endpoints](#api-endpoints)
- [Conclusion](#conclusion)


## Overview

This repository contains a simple web application built with the MERN (MongoDB, Express.js, React, Node.js) stack, allowing users to perform CRUD (Create, Read, Update, Delete) operations on student records.

## Features

- **Create Student:** Add a new student with a name, email, and grade.
- **Read Students:** View a list of all students and their details.
- **Update Student:** Modify the information of an existing student.
- **Delete Student:** Remove a student from the database.

## Prerequisites

Before you begin, ensure you have the following installed:

### Node.js

Node.js is a JavaScript runtime that allows you to execute JavaScript code on the server side. It is essential for running server-side applications and building scalable network applications.

#### Installation

Download and install Node.js from the official website: [Node.js](https://nodejs.org/)

### MongoDB

MongoDB is a NoSQL database that provides a flexible, scalable, and high-performance data storage solution. It is widely used for building modern applications.

#### Installation

Install MongoDB by following the instructions on the official MongoDB website: [MongoDB](https://www.mongodb.com/try/download/community)

Make sure to start your MongoDB server after installation. You are now ready to set up and run applications that rely on Node.js and MongoDB.


## Getting Started

Follow these steps to set up and run the MERN stack student CRUD application.

### Clone the Repository

1. git clone https://github.com/your-username/mern-student-crud.git
2. cd mern-student-crud


###Install Server Dependencies

Navigate to the server directory and install the necessary dependencies.

1. cd server
2. npm install

### Set Up MongoDB

Start your MongoDB server.

### Configure the Server

Create a `.env` file in the server directory and add the following configuration. Adjust the `PORT` and `MONGODB_URI` as needed.

```env
PORT=3001
MONGODB_URI=mongodb://localhost:27017/studentDB

### Run the Server

Start the server - ###npm start

The server will start at http://localhost:3001.

### Install Client Dependencies

Navigate to the client directory and install the required dependencies.

1. cd ../client
2. npm install


### Configure the Client

In the `client/src/config.js` file, update the `API_URL` to match your server's URL.

```javascript
const API_URL = 'http://localhost:3001/api/students';


### Run the Client

Start the client - ###npm start

The client will be accessible at http://localhost:3000.

### Folder Structure

- **client:** React frontend code.
- **server:** Express.js backend code.

## Technologies Used

### Frontend:

- React.js
- Axios (for API requests)
- Bootstrap (for styling)

### Backend:

- Node.js
- Express.js
- MongoDB (mongoose for ODM)

## API Endpoints

- **GET /api/students:** Retrieve all students.
- **GET /api/students/:id:** Retrieve a specific student by ID.
- **POST /api/students:** Create a new student.
- **PUT /api/students/:id:** Update a student by ID.
- **DELETE /api/students/:id:** Delete a student by ID.

## Conclusion

You have successfully set up a MERN stack application for managing student records with CRUD operations. Feel free to explore and customize the application as needed for your project. If you encounter any issues or have questions, refer to the documentation of the respective technologies or open an issue in this repository.

