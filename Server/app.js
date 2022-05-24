import express  from 'express';
import dotenv from 'dotenv'

const app = express();
app.use(express.json());

// config 
dotenv.config({path: 'config/dotenv.env'});


// Route Imports
// import {router as hello} from './routes/createFileRoute';
import createFile from './routes/createFileRoute.js';
import createDirectory from './routes/createDirectoryRoute.js'

app.use('/', createFile);
app.use('/', createDirectory);

app.listen(process.env.PORT, () => {
    console.log(`server is up and running on port ${process.env.PORT}`);
})