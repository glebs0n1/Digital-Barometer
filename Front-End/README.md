# Instructions for building and running a project

This file contains detailed instructions on how to build and run your project consisting of a Front-End: written in React and a Back-End completed in PHP.

## Requirements

Before you start, make sure you have the following components installed on your computer:

- [Node.js](https://nodejs.org/) (for front-end)
- [PHP](https://www.php.net/) (for back-end)
- [XAMPP](https://www.apachefriends.org/index.html) (to run the PHP web server)

## Front-end (React)

1. Open a command prompt (terminal).

2. Navigate to the folder with the front-end code:

   cd C:\Users\gleb\Desktop\Digital_Barometr\Front-End
Install the dependencies:
npm install (Start the development server:)

npm start (Front-end will be available at http://localhost:3000.)

## Back-end (PHP)
Place your PHP code in the directory C:\xampp\htdocs\ (or in the appropriate directory if you are using a different web server).

Start Apache in XAMPP.

Back-End will be available at http://localhost/.

Testing
You can run unit tests for both parts of your application:

For the Front-End:

bash
cd C:\Users\gleb\Desktop\Digital_Barometr\Front-End
npm test

## Docker
To create a Docker container:

Create a Dockerfile in the root of your project.
Build a Docker image:
docker build -t your-image-name .
Start the container:

docker run -p 8080:80 your-image-name
Front-end and back-end will be available at http://localhost:8080.
