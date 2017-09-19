FROM node:alpine

ADD . /code

WORKDIR /code

RUN npm install

RUN npm install webpack -g

RUN npm install nodemon -g

CMD [ "npm", "start" ]