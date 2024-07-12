package main

import (
    
    "log"
    "time"

    "github.com/gin-contrib/cors"
    "github.com/gin-gonic/gin"
    "globlog-backend/config"
    "globlog-backend/controllers"
    "globlog-backend/migrations"
    "globlog-backend/routes"

    _ "github.com/go-sql-driver/mysql"
    "database/sql"
)

func main() {
    r := gin.Default()

    // CORS設定
    r.Use(cors.New(cors.Config{
        AllowOrigins:     []string{"*"},
        AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
        AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
        ExposeHeaders:    []string{"Content-Length"},
        AllowCredentials: true,
        MaxAge: 12 * time.Hour,
    }))

    // Load configurations
    config.Load()

    // Setup database connection with retry logic
    var db *sql.DB
    var err error
    for i := 0; i < 10; i++ {
        db, err = sql.Open("mysql", config.GetDBConnectionString())
        if err == nil {
            err = db.Ping()
            if err == nil {
                break
            }
        }
        log.Printf("接続を試みています 5秒... (%d/10)", i+1)
        time.Sleep(5 * time.Second)
    }
    if err != nil {
        log.Fatalf("データベースに接続できませんでした。: %v", err)
    }
    defer db.Close()

    // Run migrations
    migrations.Migrate(db)

    // Set DB for controllers
    controllers.SetDB(db)

    // Setup routes
    routes.Setup(r)

    // Listen and Serve on localhost:8189
    r.Run(":8189")
}
