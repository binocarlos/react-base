FROM binocarlos/yarn-base
MAINTAINER kaiyadavenport@gmail.com
WORKDIR /baseapp
COPY ./package.json /baseapp/package.json
RUN yarn install