FROM node:18
WORKDIR /usr/app
COPY . .
COPY ~/.aws /root/.aws
ENV AWS_CONFIG_FILE=/root/.aws/config
RUN npm install --only=production
RUN npm run build
CMD ["npm", "start"]