# Phone Catalog
## Running locally
- Running the server:

From **root**:
```sh
cd server
npm i
npm start
```
- Running the client

From **root**:
```sh
npm i
npm start
```

## Running with docker compose
From **root**:
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
The data is returned after 0.5s to better showcase the loading icon, otherwise it would be too quick to observe.

The client will get all phones to display on the main page. You can click on individual phone to get more information. Finally you can add a phone with **Add Device** button. In which case, make sure to fill in all fields.
