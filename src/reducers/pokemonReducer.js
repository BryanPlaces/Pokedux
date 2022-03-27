import { SET_POKEMONS } from "../constants/constants";

const initialState = {
  list: []
}

const pokemonReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_POKEMONS:
      return { ...state, list: action.payload };
    default:
      return { ...state };
  }
};

export default pokemonReducer;