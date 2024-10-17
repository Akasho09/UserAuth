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
 ====> Change database in db.js to userauth <====

- npm install
 but still   Error: Cannot find module 'bcryptjs'
Require stack:
- /Users/akashmalik/Desktop/UserAuth/routes/user.js
- /Users/akashmalik/Desktop/UserAuth/index.js
    at Module._resolveFilename (node:internal/modules/cjs/loader:1248:15)
    at Module._load (node:internal/modules/cjs/loader:1074:27)
    at TracingChannel.traceSync (node:diagnostics_channel:315:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:217:24)
    at Module.require (node:internal/modules/cjs/loader:1339:12)
    at require (node:internal/modules/helpers:135:16)
    at Object.<anonymous> (/Users/akashmalik/Desktop/UserAuth/routes/user.js:3:16)
    at Module._compile (node:internal/modules/cjs/loader:1546:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1691:10)
    at Module.load (node:internal/modules/cjs/loader:1317:32) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/Users/akashmalik/Desktop/UserAuth/routes/user.js',
    '/Users/akashmalik/Desktop/UserAuth/index.js'
  ]
}

Install bcrypt manually
npm install bcryptjs



-  /Users/akashmalik/Desktop/UserAuth/node_modules/jsonwebtoken/sign.js:111
    return failure(new Error('secretOrPrivateKey must have a value'));
                   ^

Error: secretOrPrivateKey must have a value
    at module.exports [as sign] (/Users/akashmalik/Desktop/UserAuth/node_modules/jsonwebtoken/sign.js:111:20)
    at /Users/akashmalik/Desktop/UserAuth/routes/user.js:32:27

Node.js v22.9.0