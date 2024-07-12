package routes

import (
    "github.com/gin-gonic/gin"
    "globlog-backend/controllers"
)

func Setup(router *gin.Engine) {
    router.GET("/example", controllers.Example)
}
