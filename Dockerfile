FROM node:latest

RUN mkdir -p /app/react-app
WORKDIR /app/react-app

COPY src/package*.json ./

# RUN npm install

CMD [ "npm", "start" ]
