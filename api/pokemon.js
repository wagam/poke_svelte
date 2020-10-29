import api from "../services/api";

// Method to get a list of all Pokemon
export const getPokemonList = async () => {
  try {
    const response = await api.get("/pokemon?limit=151");
    return response.results;
  } catch (error) {
    console.error(error);
  }
};

// Get a pokemon details by name
export const getPokemonByName = async (name) => {
  try {
    const response = await api.get(`/pokemon/${name}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};
