const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
const client = require('./database');

//midddleware
app.use(cors());
//req.body
app.use(express.json());


/*const { Client } = require('pg');
const client = new Client({
    user: 'postgres',
    password: 'Pass1234!@',
    host: 'localhost',
    port: 5432,
    database: 'Wana'
});
client.connect()
    .then(() => console.log('Connected successfully'))
    .then(() => client.query('select * from dimregion where addresszip =$1 ', ['81301']))
    .then(results => console.table(results.rows))
    .catch(e => console.log)
    .finally(() => client.end());*/


//Routes

//ceate a todo
/*app.post('/todos', async(req, res) => {
    //await
    try {
        console.log(req.body);
    } catch (err) {
        console.error(err.message)
    }
})*/


//get all accounts
app.get("/account", async (req, res) => {
    try {
        const allData = await client.query("SELECT * FROM dimaccounts");

        res.json(allData.rows);
    } catch (err) {
        console.error(err.message)
    }
})


//get all orders
app.get("/orders", async (req, res) => {
    try {
        const allData = await client.query("SELECT * FROM _orderinfo");
        res.json(allData.rows);
    } catch (err) {
        console.error(err.message)
    }
})

//get records
app.get("/data/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const record = await client.query("SELECT * FROM dimregion WHERE addresszip = $1", [
            id
        ]);

        res.json(record.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get a record
app.get("/data/one/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const record = await client.query("SELECT * FROM dimregion WHERE addresszip = $1", [
            id
        ]);

        res.json(record.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//update a todo

//delete a todo

app.listen(port, () => {
    console.log("server has started on port 5000");
});