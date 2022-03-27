import { SET_POKEMONS } from "../constants/constants";

export const setPokemonsAction = (payload) => ({
  type: SET_POKEMONS,
  payload,
})