FROM node:18
WORKDIR /usr/app
COPY . .
ENV AWS_CONTAINER_CREDENTIALS_RELATIVE_URI "/v2/credentials/access_s3_final"
ENV AWS_REGION "us-west-2"
RUN npm install --only=production
RUN npm run build
CMD ["npm", "start"]