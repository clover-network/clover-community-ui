FROM node:current-alpine3.10

ADD . /opt/web

WORKDIR /opt/web
RUN yarn
RUN yarn build

CMD yarn start