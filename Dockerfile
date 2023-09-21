FROM node:14

WORKDIR /app

COPY Front-End/package*.json ./
COPY Front-End/yarn.lock ./   

RUN yarn install

COPY . ./

RUN yarn build

CMD [ "yarn", "start" ]
