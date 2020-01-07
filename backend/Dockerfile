FROM node:alpine 
WORKDIR /usr/src/app
RUN npm install express --save && npm install 
COPY . .
EXPOSE 4007
CMD ["node","app"]
