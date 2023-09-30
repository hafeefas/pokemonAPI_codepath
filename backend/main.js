import './config/dotenv.js'

import { pool } from './config/database.js'

// console.log(pool)

const getPokemonDB = async = () => {
try {
    let results = await pool.query("SELECT * FROM POKEMONS")
    console.log(results.rows)
    return results
} catch (error) {
    console.log("error im the error ur looking for", error)
}
}

const pokemonsDB = await getPokemonDB()
console.log(albums)