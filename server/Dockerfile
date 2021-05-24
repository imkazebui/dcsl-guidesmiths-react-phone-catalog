FROM node:12.14.1

WORKDIR /usr/src/app
COPY /server/package*.json ./
RUN npm install
COPY ./server ./

CMD ["node", "index.js"]