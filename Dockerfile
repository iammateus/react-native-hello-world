FROM node:14.17.6

ENV REACT_NATIVE_PACKAGER_HOSTNAME=0.0.0.0
ENV EXPO_DEVTOOLS_LISTEN_ADDRESS=0.0.0.0

WORKDIR /app

RUN apt-get update -y
RUN yarn global add expo-cli
 
COPY . .

RUN yarn install

EXPOSE 19000
EXPOSE 19001
EXPOSE 19002

CMD node .docker/entrypoint.js