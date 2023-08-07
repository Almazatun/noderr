FROM node:18-alpine

WORKDIR /app

COPY package.json .

COPY package-lock.json .

COPY ./cluster /app/cluster

COPY ./common/package.json ./app/common/package.json
COPY ./common/tsconfig.json ./app/common/tsconfig.json

COPY ./cluster/package.json ./app/cluster/package.json

RUN apk update && apk add make

COPY . .

RUN make install

RUN make build_common

RUN make build_cluster

EXPOSE 3000

CMD ["node", "cluster/dist/main" ]
