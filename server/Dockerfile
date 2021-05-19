FROM node:12.14.1

WORKDIR /usr/src/app
COPY /server/package*.json ./
RUN npm install
COPY ./server ./
EXPOSE 3001
CMD ["node", "index.js"]