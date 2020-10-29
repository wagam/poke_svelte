<script>
  import { onMount } from "svelte";
  import { getPokemonList, getPokemonByName } from "../api/pokemon";

  let pokemonList = [];

  onMount(async () => {
    const pokemonPartialList = await getPokemonList();
    for (let poke of pokemonPartialList) {
      const fullDataPokemon = await getPokemonByName(poke.name);
      pokemonList = [...pokemonList, fullDataPokemon];
    }
  });
</script>

<style>
  .poke-list {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
    font-weight: 100;
  }
  .pokemonList {
    display: grid;
    grid-template-columns: repeat(auto-fit, 160px);
    justify-content: center;
    gap: 20px;
  }
  .card {
    list-style: none;
    text-align: left;
    margin-bottom: 5px;

    border-radius: 8px;
    padding: 10px;
    text-align: center;
    background-color: #6699ff;
  }
  .pokeName {
    text-transform: capitalize;
    font-size: 18px;
  }

  img {
    border-radius: 50%;
    background-color: white;
    margin: 20px;
  }

  .tag {
    border-radius: 10px;
    padding: 1px 5px;
    font-size: 12px;
    margin: 0 5px;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .bug {
    background-color: #adfc89;
  }
  .grass {
    background-color: #7bf0ac;
  }
  .fire {
    background-color: #ffdd99;
  }
  .water {
    background-color: #77ccff;
  }
  .normal {
    background-color: #c4c4c4;
  }
  .poison {
    background-color: #9966ff;
  }
  .electric {
    background-color: #fffc55;
  }
  .ground {
    background-color: #cc8b55;
  }
  .fighting {
    background-color: #ff5b55;
  }
  .rock {
    background-color: #c9b3a1;
  }
  .fairy {
    background-color: #ff55ff;
  }

  .psychic {
    background-color: #e993ff;
  }

  .ghost {
    background-color: #eeeeee;
  }

</style>

<div class="poke-list">
  <ul class="pokemonList">
    {#each pokemonList as pokemon}
      <li class={`card ${pokemon.types[0].type.name}`}>
        <div class="pokeName">#{pokemon.id} {pokemon.name}</div>
        {#if pokemon.sprites.front_default}
          <img class="pokeimage" src={pokemon.sprites.front_default} alt="pokeimage" />
        {/if}
        <div class="tags">
          {#each pokemon.types as type}<span class={`tag`}>{type.type.name}</span>{/each}
        </div>
      </li>
    {/each}
  </ul>
</div>
