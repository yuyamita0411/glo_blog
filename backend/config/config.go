package config

import (
    "fmt"
    "github.com/spf13/viper"
    "log"
)

var DBConfig DatabaseConfig

type DatabaseConfig struct {
    Host     string
    User     string
    Password string
    Name     string
    Port     string
}

func Load() {
    viper.SetConfigFile(".env")
    err := viper.ReadInConfig()
    if err != nil {
        log.Fatalf("Error loading config file: %v", err)
    }

    DBConfig = DatabaseConfig{
        Host:     viper.GetString("DB_HOST"),
        User:     viper.GetString("DB_USER"),
        Password: viper.GetString("DB_PASSWORD"),
        Name:     viper.GetString("DB_NAME"),
        Port:     viper.GetString("DB_PORT"),
    }
}

func GetDBConnectionString() string {
    return fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?parseTime=true",
        DBConfig.User, DBConfig.Password, DBConfig.Host, DBConfig.Port, DBConfig.Name)
}
