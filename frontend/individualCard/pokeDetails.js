document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const pokemonName = params.get("name");
    console.log("pokemon name: line 4", pokemonName);
    const pokemonId = params.get("id");
   
    console.log(params,"Params")

    if (pokemonName) {
        const pokemonDetailName = document.getElementById("pokemonDetailName");
        const pokemonDetailImage = document.getElementById("pokemonDetailImage");

        if (pokemonDetailName && pokemonDetailImage) {
            // Set the name and image of the Pokémon
            pokemonDetailName.textContent = pokemonName;
            
        
            // The image URL format is different from the Pokémon name,
            // so we need to manually construct it
           
            
            const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
            console.log(imageUrl)

            // Set the image source and alt attribute
            pokemonDetailImage.src = imageUrl;
            pokemonDetailImage.alt = pokemonName;
        }
    }
});

// Function to extract Pokémon ID from name
function getPokemonIdFromName(name) {
    // Since the name is directly the Pokémon name, no need to split
    return name;
}
