FROM node:boron

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY . /usr/app
RUN npm config set ui:environment docker-dev
RUN npm config set ui:port 5000
CMD ["npm", "start"]

