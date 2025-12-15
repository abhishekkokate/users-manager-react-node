require("dotenv").config();

const db = require("./config/db");

async function migrateData() {
    try {
        const resp = await fetch("https://dummyjson.com/users?limit=20");
        const result = await resp.json();
        let users = result.users || [];

        const queryCreateTable = `
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            firstName VARCHAR(100) NOT NULL,
            lastName VARCHAR(100) NOT NULL,
            age INT,
            gender VARCHAR(100),
            email VARCHAR(255) NOT NULL UNIQUE,
            username VARCHAR(100),
            image VARCHAR(255),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        );
        `;

        await db.query(queryCreateTable);

        const allProms = users.map((user, i) => {
            const queryInsert = {
                sql: `
            INSERT IGNORE INTO users
            (id, firstName, lastName, age, gender, email, username, image) 
            VALUES 
            (${user.id}, '${user.firstName}', '${user.lastName}', ${user.age}, '${user.gender}', '${user.email}', '${user.username}', '${user.image}')
            `,
                timeout: 5000,
            };
            console.log("Insertion done for user index: ", i);
            return db.query(queryInsert);
        });
        await Promise.all(allProms);
        console.log("Data Migration done");
        process.exit(0);
    } catch (err) {
        console.error("Error occurred: ", err);
        process.exit(1);
    }
}

migrateData();
