//this is a file pretending to be an end user

//import things we will need from deps file
import { Pool, PoolClient, Client } from "./deps.ts"; 

//for now, importing queryBuilder directly from file
import { queryBuilder } from "./querybuilder.ts"

//declare new instance of PONDER to use throughout this page

const ponder = new queryBuilder('test');

//connect to a DB
const pool = new Pool('postgres://hfwbmzny:AArrmznb9EBr4Tjbxe5XordjASLQ_j4S@heffalump.db.elephantsql.com/hfwbmzny', 3, true) // the number(3) is establishing the number of connections. True is the 'lazy' option, meaning that all the connections won't be initialized until they are needed
const connect = await pool.connect();
try {
    const { rows } = await connect.queryObject`SELECT * FROM species WHERE name = 'matt';`;
    console.log('row of response', rows);
} finally {
    connect.release();
}

//new query to already connect DB
try {
    const { rows } = await connect.queryObject`SELECT * FROM people WHERE name = 'Luke Skywalker'`;
    console.log('luke?', rows)
} finally {
    connect.release();
}

//first attempt at using PONDER
try {
    const newFind = ponder.findAllinOne('people');
    const { rows } = await connect.queryObject(newFind)
    console.log('newFind', rows)
} finally {
    connect.release();
}



//run queries on DB

//do something with returned results from the query