const { Pool } = require('pg');

module.exports = new Pool({
    host: "localhost",
    user: "suhas",
    database: "members_only",
    password: "Suhas9980",
    port: 5432
})