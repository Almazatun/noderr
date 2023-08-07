FROM node:18-alpine

WORKDIR /app

COPY package.json .

COPY package-lock.json .

COPY ./workers /app/workers

COPY ./common/package.json ./app/common/package.json
COPY ./common/tsconfig.json ./app/common/tsconfig.json

COPY ./workers/package.json ./app/workers/package.json

RUN apk update && apk add make

COPY . .

RUN make install

RUN make build_common

RUN make build_workers

EXPOSE 3000

CMD ["node", "workers/dist/main" ]
