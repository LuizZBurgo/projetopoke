const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");

const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonSprite = document.getElementById("pokemon-img");
const pokeWeight = document.getElementById("weight");
const pokeHeight = document.getElementById("height");
const pokeTypes = document.getElementById("types");

const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

async function searchPokedex() {
    try {
        let res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchInput.value.toLowerCase()}`);
        if (!res.ok) {
            alert("Pokémon not found");
            return; }
        let data = await res.json();

        const { name, weight, height, sprites, id, stats, types } = data; // Desestruturação
        pokemonName.innerHTML = `<strong>${name.toUpperCase()}</strong>`;
        pokemonId.innerHTML =  `<strong>#${id}</strong>`;
        pokeWeight.innerHTML = `Weight: ${weight}`;
        pokeHeight.innerHTML = `Height: ${height}`;

        pokemonSprite.innerHTML = `<img id="sprite" src="${sprites.front_default}"> `;

        hp.innerHTML = stats[0].base_stat;
        attack.innerHTML = stats[1].base_stat;
        defense.innerHTML = stats[2].base_stat;
        specialAttack.innerHTML = stats[3].base_stat;
        specialDefense.innerHTML = stats[4].base_stat;
        speed.innerHTML = stats[5].base_stat;

        const typeColors = {
            grass: '#78C850',
            poison: '#A040A0',
            fire: '#F08030',
            water: '#6890F0',
            normal: '#a8a878',
            flying: '#a890f0',
            fighting: '#903028',
            electric: '#f8d030',
            ground: '#e0c068',
            rock: '#b8a038',
            psychic: '#f85888',
            ice: '#98d8d8',
            bug: '#A8B820',
            ghost: '#705898',
            steel: '#b8b8d0',
            dragon: '#7038f8',
            dark: '#705848',
            fairy: '#EE99AC',
          };

          pokeTypes.innerHTML = types.map(typeInfo => {
            const typeName = typeInfo.type.name;
            const color = typeColors[typeName] || '#000000'; // Cor padrão caso o tipo não esteja no objeto
            return `<span class="type-span" style="background-color: ${color};">${typeName.toUpperCase()}</span>`; 
        }).join(" ");

    } catch (err) {
        console.error('Error:', err);
        alert('Pokémon not found');
    }
} 
searchBtn.addEventListener('click', function() {
    if (searchInput.value === "Red") {
        alert("Pokémon not found");
      } else {
          searchPokedex();
      }
      });
