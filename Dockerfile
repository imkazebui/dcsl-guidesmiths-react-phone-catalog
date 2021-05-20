# pull official base image
FROM node:12.14.1
# set working directory 
WORKDIR /app 
# add `/app/node_modules/.bin` to $PATH 
ENV PATH /app/node_modules/.bin:$PATH 
# install app dependencies 
COPY package*.json ./ 
RUN npm install && \ 
    npm install react-scripts@3.4.1 -g 
# add app 
COPY . ./ 
RUN rm -rf ./server
# start app 
CMD ["npm", "start"]