FROM node:18
WORKDIR /usr/app
COPY . .
RUN npm install
CMD ["npm", "start"]