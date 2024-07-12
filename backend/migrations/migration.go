package migrations

import (
    "database/sql"
    "log"
)

func Migrate(db *sql.DB) {
    query := `
    CREATE TABLE IF NOT EXISTS example (
        id INT AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        PRIMARY KEY (id)
    );`

    _, err := db.Exec(query)
    if err != nil {
        log.Fatalf("テーブル作成失敗!!: %v", err)
    }
}
