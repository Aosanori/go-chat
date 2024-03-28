FROM golang:1.22.1-alpine3.19

ENV GO111MODULE=on

WORKDIR /go/src/go-chat/backend

COPY . .

RUN apk add --no-cache --update git

RUN go install github.com/pilu/fresh@latest

CMD ["fresh"]

EXPOSE 9090