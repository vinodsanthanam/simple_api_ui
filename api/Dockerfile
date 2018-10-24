FROM node:8-alpine

RUN mkdir -p /usr/app
WORKDIR  /usr/app

COPY . /usr/app/
RUN npm install

EXPOSE 8082

CMD ["npm", "start"] 