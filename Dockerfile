FROM node:12.14.1

WORKDIR /app 
ENV PATH /app/node_modules/.bin:$PATH 
COPY package*.json ./ 
RUN npm install && \ 
    npm install react-scripts@3.4.1 -g 
COPY . ./ 
RUN rm -rf ./server

CMD ["npm", "start"]