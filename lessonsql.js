const { Client } = require('pg');

async function main() {
    const client = new Client({
        host: 'surus.db.elephantsql.com',
        port: 5432,
        database: 'iiypgvhw',
        user: 'iiypgvhw',
        password: 'Ehi-avgvbH-GU06aFXtOZPMEvMwZbH_S',
    });

    try {
        await client.connect();

        const res = await client.query('SELECT NOW() as ttt');
        console.log(res.rows[0]); // Assuming you want to log the result

        await createTable(); // Create table if it doesn't exist

        await insertData(client); // Insert sample data into the table

    } catch (error) {
        console.error('Error executing query:', error);
    } finally {
        await client.end();
    }
}

async function createTable() {
    const client = new Client({
        host: 'surus.db.elephantsql.com',
        port: 5432,
        database: 'iiypgvhw',
        user: 'iiypgvhw',
        password: 'Ehi-avgvbH-GU06aFXtOZPMEvMwZbH_S',
    });

    try {
        await client.connect();
        await client.query(`
            CREATE TABLE IF NOT EXISTS djurnal (
                id SERIAL PRIMARY KEY,
                student_id INTEGER,
                subject VARCHAR(255),
                grade VARCHAR(10)
            )
        `);
        console.log('Table "djurnal" created successfully.');
    } catch (error) {
        console.error('Error creating table:', error);
    } finally {
        await client.end();
    }
}

async function insertData(client) {
    try {
        const data = [
            { student_id: 1, subject: 'Math', grade: 'A' },
            { student_id: 2, subject: 'History', grade: 'B' },
            { student_id: 3, subject: 'Science', grade: 'C' }
        ];

        for (const item of data) {
            await client.query(`
                INSERT INTO djurnal (student_id, subject, grade)
                VALUES ($1, $2, $3)
            `, [item.student_id, item.subject, item.grade]);
        }

        console.log('Sample data inserted into "djurnal" table successfully.');

    } catch (error) {
        console.error('Error inserting data:', error);
    }
}

main().catch(console.error);
