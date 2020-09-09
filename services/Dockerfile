FROM node:14.8.0-buster-slim

RUN apt-get -qy update
RUN apt-get -qy install openssl

WORKDIR /app

RUN yarn global add pm2

COPY package.json yarn.lock /app/
RUN yarn --pure-lockfile

COPY . /app

RUN yarn prisma generate
RUN yarn build

ENTRYPOINT ["pm2-runtime", "--raw", "ecosystem.config.js"]