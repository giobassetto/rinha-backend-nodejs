FROM node:18-alpine

ENV NODE_ENV production

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5000
CMD [ "node", "build/index.js" ]