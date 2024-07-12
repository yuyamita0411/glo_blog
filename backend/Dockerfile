FROM golang:1.18

WORKDIR /app

# MySQLクライアントのインストール
RUN apt-get update && apt-get install -y default-mysql-client

COPY go.mod .
COPY go.sum .
RUN go mod download

COPY . .

# go mod tidyを実行して依存関係を整理
RUN go mod tidy -compat=1.18

RUN go build -o /backend cmd/server/main.go

CMD ["/backend"]
