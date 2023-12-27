FROM node:latest
WORKDIR /app
RUN npm i -g nodemon
COPY . .
RUN npm i
EXPOSE 5000
CMD [ "npm","run","dev" ]
