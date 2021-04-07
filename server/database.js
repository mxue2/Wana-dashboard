const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    password: 'Pass1234!@',
    host: 'localhost',
    port: 5432,
    database: 'Wana'

});

client.connect()
    .then(() => console.log('Connected successfully'))
/*.then(() => client.query('select * from dimregion where addresszip =$1 ', ['81301']))
.then(results => console.table(results.rows))
.catch(e => console.log)
.finally(() => client.end());*/


//console if the connection is a success
/*client.on('connect', () => {
    console.log('Database connection');
});*/

//console if the connection ends
/*client.on('end', () => {
    console.log('Connection end');
});*/

/*module.exports = pool;*/
//client.connect();
module.exports = client;

/*client.connect();
client.query(`select * from wanadwruninfo`, (err, result) => {
    if (!err) {
        console.log(result.rows);
    }
    //end the connection
    client.end();
})
*/