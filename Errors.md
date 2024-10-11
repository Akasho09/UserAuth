- You have tried to call .then(), .catch(), or invoked await on the result of query that is not a promise, which is a programming error. Try calling con.promise().query(), or require('mysql2/promise') instead of 'mysql2' for a promise-compatible version of the query interface. To learn how to use async/await or Promises check out documentation at https://sidorares.github.io/node-mysql2/docs#using-promise-wrapper, or the mysql2 documentation at https://sidorares.github.io/node-mysql2/docs/documentation/promise-wrapper
POST /user/register 500 85.193 ms - 44

- 
    "message": "Error creating user",
    "error": {
        "message": "Unknown column 'email' in 'field list'",
        "code": "ER_BAD_FIELD_ERROR",
        "errno": 1054,
        "sql": "INSERT INTO users (username, email, password) VALUES ('akash09', 'aakashbwd@gmail.com', '$2b$10$c8dX/yDs/tf8kCiqfh5Y8.32j6D2kuqGlUG5pWxuuRruHnfmncqAW')",
        "sqlState": "42S22",
        "sqlMessage": "Unknown column 'email' in 'field list'"
    }


    