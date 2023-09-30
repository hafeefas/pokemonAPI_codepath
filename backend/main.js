import './config/dotenv.js';
import { pool } from './config/database.js';

import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = process.env.PGPORT;

app.use(cors());
app.use(express.json());

// Define the route for external API data
app.get('/getExternalPokemon', async (req, res) => {
    try {
        const result = await axios.get('https://pokeapi.co/api/v2/pokemon/');
        const data = result.data;
        res.send(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Define a separate route for database data
app.get('/getDatabasePokemon', async (req, res) => {
    try {
        const databaseData = await getPokemonDB();
        res.send(databaseData);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const serverRun = () => {
    app.listen(PORT, () => {
        console.log(`live on port: ${PORT}`);
    });
};

// Function to retrieve database data
async function getPokemonDB() {
    try {
        let results = await pool.query('SELECT * FROM POKEMONS');
        console.log(results.rows);
        return results.rows;
    } catch (error) {
        console.log("error im the error you're looking for", error);
    }
}

serverRun();
