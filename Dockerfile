FROM node:10.15-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

RUN apk update && apk add bash

ENV NODE_ENV="prod"

EXPOSE 3001

ENTRYPOINT bash -c "npm run start && npm run test"
