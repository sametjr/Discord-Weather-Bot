import 'dotenv/config';
import pkg from "pg";
const {Client} = pkg;

console.log(Client.prototype);
const pool = new Client({

  user: 'postgres',
  host: 'localhost',
  database: 'deneme',
  password: process.env.pgpassword
})

pool.connect();



export async function db(query){

    return new Promise((resolve, reject) => {
        pool.query(query, (err, res) => {
            if(err) return;
            resolve(res?.rows);
        })
    })
}




