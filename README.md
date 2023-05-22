
# MERN Stack Financia assistant Application

----

  * [Introduction](#introduction)
  * [Key Features](#key-features)
  * [Technologies used](#technologies-used)
      - [Client](#client)
      - [Server](#server)
      - [Database](#database)
  * [Configuration and Setup](#configuration-and-setup)
  * [Author](#author)
  * [License](#license)

## Introduction
This is a project crated for the ITPM module. A full stack Finance manager application made using the MERN stack (MongoDB, Express, React & Nodejs), specially designed for low level income personsal and small businesses, but can be used for almost any type of business need. With this application, you can Track your expences, Fine if you are eligible for a loan/Lease.

## Key Features
- Track your personal expences to better mange a great lifestyle
- Generate and download pdf reports
- Multiple user registration.
- Authentication using jsonwebtoken (jwt) and Google auth


## Technologies used
This project was created using the following technologies.

#### Client
- React JS
- Redux (for managing and centralizing application state)
- React-router-dom (To handle routing)
- Axios (for making api calls)
- Material UI & CSS Module (for User Interface)
- 

#### Server
- Express
- Mongoose
- JWT (For authentication)
- bcryptjs (for data encryption)
- html-pdf (for generating report PDFs)

#### Database
MongoDB (MongoDB Atlas)

## Configuration and Setup
In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine. 
- Open the project in your prefered code editor.
- Go to terminal -> New terminal (If you are using VS code)
- Split your terminal into two (run the client on one terminal and the server on the other terminal)


In the first terminal
$ cd client
$ npm install (to install client-side dependencies)
$ npm start (to start the client)


- cd server and create a .env file in the root of your server directory.
- Supply the following credentials

```
JWT_SECRET=
MONGO_URL=
```

Please follow [This tutorial](https://dev.to/dalalrohit/how-to-connect-to-mongodb-atlas-using-node-js-k9i) to create your mongoDB connection url, which you'll use as your MONGO_URL

In the second terminal
```
$ cd server
$ npm install (to install server-side dependencies)
& npm start (to start the server)
```


## Author

# Batch - IT.S3.WE.01.02
# Group - GRP_120
## Group Leader - IT21062742 - Weerasinghe D.J.A.H (IT21062742)

## License

- This project is [MIT](https://github.com/Panshak/accountill/blob/master/LICENSE.md) licensed.


