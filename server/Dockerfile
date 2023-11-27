FROM node:18.18.2

WORKDIR /use/src/app

COPY ./package.json ./

RUN npm i

COPY ./prisma ./prisma
COPY ./server.js ./

# Run prisma generate during the build
RUN npx prisma generate

EXPOSE 8081

CMD [ "npm", "run", "dev" ]
