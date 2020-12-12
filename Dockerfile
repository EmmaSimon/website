FROM node:15

WORKDIR /app
COPY . ./
RUN git submodule update

WORKDIR knit
ENV PATH /app/knit/node_modules/.bin:$PATH
RUN npm i
RUN npm run build

WORKDIR ..

