import axios from "../services/axios";

export const getPokemons = (limit = 151) => 
  axios.get(`/pokemon?limit={$limit}`)
    .then((res) => res.data)
    .catch((error) => console.log(error));