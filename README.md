# Digital-Barometer
Check the current weather conditions in Vilnius and Nida

# Instructions for building and running a project
This file contains detailed instructions on how to build and run your project consisting of a Front-End: written in React and a Back-End completed in PHP.
## Requirements
Before proceeding, make sure you have the following components installed on your computer:

- [Node.js](https://nodejs.org/) (for front-end)
- [PHP](https://www.php.net/) (for back-end)
- [XAMPP](https://www.apachefriends.org/index.html) (to run the PHP web server)

## Front-end (React)
<BR>1. Open a command prompt (terminal).
<BR>2. Navigate to the folder with the front-end code:
<BR>npm install (to install dependencies) 
<BR>npm start (for start the development server)
<BR>The Front-End will be accessible at http://localhost:3000.


## Back-end (PHP)
<br>Place your PHP code in the directory C:\xampp\htdocs\ (or in the appropriate directory if you are using a different web server).
<br> Start Apache: In the XAMPP Control Panel, to start the Apache web server, simply click the "Start" button next to "Apache." 
<br> The Back-End will be accessible at http://localhost/.

## Testing
<br> npm test (for running test)

## Docker Containerization (Optional)
<br>To containerize the project using Docker:
<br>Create a Dockerfile at the root of your project.
<br>Build a Docker image:
<br>docker build -t your-image-name .
<br>Start a Docker container:
<br>docker run -p 8080:80 your-image-name
<br>Both the Front-End and Back-End will be accessible at http://localhost:8080.

