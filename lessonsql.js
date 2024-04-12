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

createTable();

main().catch(console.error);
