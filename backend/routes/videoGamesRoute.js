import express from 'express';
import { VideoGame } from '../models/videoGameModel.js';

const router = express.Router();


// Route for Saving a new Video Game
router.post('/', async (request, response) => {
    try {
        if (!request.body.title ||
            !request.body.developer ||
            !request.body.releaseYear
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, developer, releaseYear',
            });
        }
        const newVideoGame = {
            title: request.body.title,
            developer: request.body.developer,
            releaseYear: request.body.releaseYear,
        };

        const videoGame = await VideoGame.create(newVideoGame);

        return response.status(201).send(videoGame);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for getting all the video games from the database
router.get('/', async (request, response) => {
    try {
        const videogames = await VideoGame.find({});

        return response.status(200).json({
            count: videogames.length,
            data: videogames
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for getting one book from the database
router.get('/:id', async (request, response) => {
    try {

        const { id } = request.params;

        const videogames = await VideoGame.findById(id);

        return response.status(200).json(videogames);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to update the book in a database

router.put('/:id', async (request, response) => {
    try {
        if (!request.body.title ||
            !request.body.developer ||
            !request.body.releaseYear
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, developer, releaseYear',
            });
        }

        const { id } = request.params;

        const result = await VideoGame.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'Video Game not found' });
        }

        return response.status(200).json({ message: 'Video Game updated successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for deleting a book

router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await VideoGame.findByIdAndDelete(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'Video Game not found' });
        }
        return response.status(200).json({ message: 'Video Game deleted successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;