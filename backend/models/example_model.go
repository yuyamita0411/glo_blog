package models

import (
    "database/sql"
    "log"
)

type Example struct {
    ID   int    `json:"id"`
    Name string `json:"name"`
}

func CreateExample(db *sql.DB, name string) (int64, error) {
    result, err := db.Exec("INSERT INTO example (name) VALUES (?)", name)
    if err != nil {
        return 0, err
    }
    return result.LastInsertId()
}

func GetExamples(db *sql.DB) ([]Example, error) {
    rows, err := db.Query("SELECT id, name FROM example")
    if err != nil {
        return nil, err
    }
    defer rows.Close()

    examples := []Example{}
    for rows.Next() {
        var ex Example
        if err := rows.Scan(&ex.ID, &ex.Name); err != nil {
            log.Fatal(err)
        }
        examples = append(examples, ex)
    }
    return examples, nil
}
