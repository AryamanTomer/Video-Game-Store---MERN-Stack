import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { VideoGame } from './models/videoGameModel.js';
import videoGamesRoute from './routes/videoGamesRoute.js'
import cors from 'cors'

const app = express();

// Middleware for parsing the request body
app.use(express.json());

// Middleware for handling the CORS Policy
// The 1st option is allowing origins with default of cors
app.use(cors());
// The 2nd option is allowing custom origins
//app.use(
//    cors({
//       origin: 'http://localhost:3000',
//      methods: ['GET','POST','PUT','DELETE'],
//       allowedHeaders: ['Content-Type'],
//    })
//);

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome To MERN Stack Tutorial');
});

app.use('/videogames', videoGamesRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });