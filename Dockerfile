FROM node:latest

# Create app directory
WORKDIR /app
ADD . /app

# Install app dependencies
RUN npm install
RUN npm test

CMD ["node", "index.js" ]
