document.addEventListener("DOMContentLoaded", () => {
    const pokeList = document.getElementById("pokemonList");
    console.log("Hello");

    fetch("http://localhost:8080/getPokemon")
    .then((response) => response.json())
    .then((data) => {
        data.results.forEach((pokemon) => {
            const card = document.createElement("div");
            card.classList.add("pokeCardStyling");

            // Create an element for the Pokémon ID
            const idElement = document.createElement("div");
            idElement.classList.add("pokemon-id");
            const pokemonId = getPokemonIdFromUrl(pokemon.url); // Extracts the Pokémon ID from the URL
            idElement.textContent = `#${pokemonId}`;

            // Create an element for the Pokémon name and set its text content
            const nameElement = document.createElement("div");
            nameElement.classList.add("pokemon-name");
            nameElement.textContent = pokemon.name;

            // Create an element for the Pokémon image
            const imageElement = document.createElement("img");
            imageElement.classList.add("pokemon-image");
            imageElement.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
            imageElement.alt = pokemon.name;

            // Add the ID, name, and image elements to the card
            card.appendChild(idElement);
            card.appendChild(nameElement);
            card.appendChild(imageElement);

            card.addEventListener("click", () => {
                // Redirect to the Pokémon detail page with the Pokémon's name as a query parameter
                window.location.href = `./individualCard/pokeDetails.html?name=${pokemon.name}&id=${pokemonId}`;
            });
          

            pokeList.appendChild(card);
            console.log(data, "testing...");
        });
    })
    .catch((error) => {
        console.log("error", error);
    });
});

// Function to extract Pokémon ID from URL
function getPokemonIdFromUrl(url) {
    const urlSplit = url.split("/");
    return urlSplit[urlSplit.length - 2];
}
