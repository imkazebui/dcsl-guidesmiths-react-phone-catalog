# Phone Catalog
## Running locally
### FROM **ROOT** 
- Running the server:

```sh
npm run install-server
npm run start-server
```

- Running the client

```sh
npm install
npm start
```
## Running with docker compose
### FROM **ROOT** 
```sh
docker build -f ./server/Dockerfile -t server .
docker build -f Dockerfile -t phone-app .
docker-compose up
```
The web application will be available on port **localhost:3000**, while the server is at **localhost:3001**.
## Explaining the application
The server uses a json file to mock a database. It has four end points:
- Get Phones
- Get Phone by Id
- Create Phone
- Delete Phone

Newly created device will not be added to the JSON file, but it will persist throughout the lifetime of the server. If you restart the server, it will reset all devices that are added by user.

The client will get all phones to display on the main page. You can click on individual phone to get more information. Finally you can add a phone with **Add Device** button. In which case, make sure to fill in all fields.
## Tech stacks
### Server
- [NodeJS] - evented I/O for the backend
- [Express] - fast node.js network app framework
- [Express Validator] - validate incoming request

### Client
- [ReactJS] - JavaScript library for building user interfaces
- [React Spinner] - React SVG loader spinner
- [React Modal] - React Responsive Modal
- [Docker] - Build and compose images


[//]: # (References)
   [NodeJS]: <https://nodejs.org>
   [Express Validator]: <https://express-validator.github.io/docs/>
   [Express]: <http://expressjs.com>
   [ReactJS]: <https://reactjs.org/>
   [React Spinner]: <https://github.com/mhnpd/react-loader-spinner>
   [React Modal]: <https://github.com/pradel/react-responsive-modal>
   [Docker]: <https://www.docker.com/>
