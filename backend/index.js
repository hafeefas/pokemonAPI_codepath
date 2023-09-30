const express = require("express")
const app = express()
const PORT = "5432"
const axios = require("axios")
const cors = require("cors");

app.use(cors());
app.use(express.json());


const serverRun = () => {
    app.listen(PORT, () => {
        console.log(`live on port: ${PORT}`)
    })
}

app.get("/getPokemon", async (req, res) => {
    try{
        const result = await axios.get("https://pokeapi.co/api/v2/pokemon/")
        const data = result.data
        res.send(data)
    } catch (error){
        console.log(error)
        res.status(500).json({ error:"Internal Server Error" })
    }
})

serverRun();

module.exports = serverRun;