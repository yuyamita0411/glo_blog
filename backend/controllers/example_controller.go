package controllers

import (
    "database/sql"
    "globlog-backend/models"
    "github.com/gin-gonic/gin"
    "net/http"
)

var db *sql.DB

func SetDB(database *sql.DB) {
    db = database
}

func Example(c *gin.Context) {
    examples, err := models.GetExamples(db)
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
        return
    }
    c.JSON(http.StatusOK, examples)
}
