FROM node:18-slim

WORKDIR /app

COPY package.json ./

RUN npm install -g @quasar/cli

RUN npm install

COPY src src
COPY public public

COPY index.html postcss.config.cjs quasar.config.js package.json package-lock.json ./

EXPOSE 9000
