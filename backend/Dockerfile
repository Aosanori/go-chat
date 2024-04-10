FROM golang:1.22.1-alpine3.19

ENV GO111MODULE=on

WORKDIR /go/src/go-chat/backend

COPY . .

RUN apk add --no-cache --update git

RUN go install github.com/pilu/fresh@latest

RUN go get github.com/gin-gonic/gin@latest
RUN go get github.com/go-sql-driver/mysql@latest
RUN go get github.com/jinzhu/gorm@latest

CMD ["fresh"]

EXPOSE 9090