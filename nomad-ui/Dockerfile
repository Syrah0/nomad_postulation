FROM node:16.14.2-slim

WORKDIR /app

COPY package.json ./

RUN npm install -g @quasar/cli

RUN npm install

COPY src src
COPY public public

COPY index.html jsconfig.json postcss.config.js quasar.config.js package.json package-lock.json ./

EXPOSE 9000
