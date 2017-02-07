FROM node:boron

RUN mkdir -p /usr/app
WORKDIR  /usr/app

COPY . /usr/app/
RUN npm config set api:port 8082
CMD ["npm", "start"] 
