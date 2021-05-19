# Phone Catalog
## Running the server
```sh
cd server
npm i
npm start
```
The server will be running on port **3001**
## Running the client
Make sure you are at **root** level of the project
```sh
npm i
npm start
```
The React application will be running on port **3000**
## Explaining the application
The server uses a json file to mock a database. It has three end points:
- Get Phones
- Get Phone by Id
- Create Phone

Newly created device will not be added to the JSON file, but it will persist throughout the lifetime of the server. If you restart the server, it will reset all devices that are added by user.
The data is returned after 0.5s to better showcase the loading icon, otherwise it would be too quick to observe.

The client will get all phones to display on the main page. You can click on individual phone to get more information. Finally you can add a phone with **Add Device** button. In which case, make sure to fill in all fields. Error handling is not the most optimal at the moment.The image field must be a URL to an actual image.
