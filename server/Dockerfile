FROM node:18.18.2

WORKDIR /usr/src/app

COPY ./package.json ./

RUN npm i

COPY ./prisma ./prisma
COPY ./server.js ./

# Run prisma generate during the build
RUN npx prisma generate

EXPOSE 8081

CMD [ "npm", "run", "dev" ]

# FROM node:18.18.2

# WORKDIR /usr/src/app

# COPY package*.json ./

# # Install dependencies and rebuild any binary modules.
# # If you only have bcrypt as a binary module, you could just rebuild bcrypt as follows
# RUN npm install && npm rebuild bcrypt --build-from-source

# # Alternatively, if you have other binary modules, you can use:
# # RUN npm install && npm rebuild

# COPY ./prisma ./prisma
# RUN npx prisma generate

# COPY . .

# EXPOSE 8081

# CMD ["npm", "run", "dev"]

