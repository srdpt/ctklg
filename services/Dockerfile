FROM node:14.8.0-buster-slim

WORKDIR /app/

RUN yarn global add pm2

COPY package.json yarn.lock /app/
RUN yarn --pure-lockfile

COPY . /app/

RUN yarn gen

CMD ["pm2-runtime", "ecosystem.yml"]
