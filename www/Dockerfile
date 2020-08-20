FROM node:14.8.0-buster-slim

ENV PORT 3000
EXPOSE 3000

WORKDIR /app/

COPY package.json yarn.lock /app/
RUN yarn --pure-lockfile

COPY . /app/

RUN yarn build

CMD ["yarn", "start"]
