const sqlite3 = require('sqlite3').verbose();

// Create/connect to database file

const db = new sqlite3.Database('./database/university.db');
console.log('Connected to SQLite database');


// Other setup.js code not shown
// Create courses table
db.run(`
  CREATE TABLE courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    courseCode TEXT,
    title TEXT,
    credits INTEGER,
    description TEXT,
    semester TEXT
  )
`);

console.log('Courses table created');