FROM node:16
WORKDIR /si3mshady_staging_directory
COPY ./package.json ./package.json
COPY ./public ./public
COPY ./src ./src
RUN yarn install 
EXPOSE 3000

CMD ["yarn","start"]

# RUN npm run build
# FROM nginx:latest

# LABEL developer=ElliottLamarArnold

# FROM  nginx:latest

# WORKDIR /usr/share/nginx/html
# COPY --from=multi-stage-build /si3mshady_staging_directory/build /usr/share/nginx/html
# COPY default.conf default.conf
# EXPOSE 80

# docker build . -f Dockerfile.reactUI  -t si3mshady/slackclone-fe:1