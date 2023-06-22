FROM node:18

RUN chown -R node /app/node_modules

USER node

WORKDIR /app