# eJam-assignment

Fullstack Node.js Engineer - eJam - test assigment

HOW TO GET IT STARTED :

  GET THE PROJECT
  
    git clone https://github.com/Lemnnn/eJam-assignment.git

  GO TO THE SERVER
  
    cd server

  INIT THE SERVER
  
    npm i

  GO TO THE CLIENT
  
    cd client

  INIT THE CLIENT
  
    npm i

  START THE SERVER
  
    npm run start

  START THE CLIENT
  
    npm run dev

  RUN THE TEST ON THE SERVER
  
    npm run test

BACKEND :

  - made the GET and POST endpoint to add and get superheroes
  - added a validation so the humility score can be between 1 and 10
  - tested the GET route with Jest and can be found in the superheroes.controller.spec.ts file
  - added pagination to the data, in case we have a huge amount of data 

FRONTEND :

  - created a simple interface for the app
  - the user can create new heroes and the list is updated
  - the list of the heroes is sorted by humility score in descending order

HOW WOULD I COLLABORATE WITH A TEAMMATE TO IMPROVE AND EXPAND THE TASK :

  - work together on implementing new features or improving existing ones
  - regularly review each other's code to ensure quality and share knowledge
  - provide constructive feedback and brainstorm ideas to enhance the project
  - collaborate on improving documentation to make the project more accessible

IF I HAD MORE TIME :

  - allow users to upvote or downvote superheroes based on their humility
  - I would prioritize implementing the Update, Delete, and Search features, as they are essential for a fully functional CRUD API
  - I would explore adding Superhero Teams and Superhero Images to make the API more engaging and visually appealing
  - replace the in-memory array with a proper database like MongoDB or PostgreSQL to store superhero data permanently
  - add user authentication using JWT or OAuth to secure the API
  - allow users to sort superheroes by other attributes, such as name or superpower
  - add filtering options (e.g., filter superheroes by a specific superpower or humility score range)
  - improve error handling on both the backend and frontend to provide more informative error messages
  - add more robust validation for input fields (e.g., ensuring names are unique or superpowers are within a predefined list)
  - use Swagger or Postman to create detailed API documentation for easier onboarding and usage
