FROM node:21.7-alpine3.19

WORKDIR /client

COPY . .

RUN npm install

CMD ["npm", "run", "dev"]

EXPOSE 3000