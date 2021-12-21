import React, {useReducer, createContext} from 'react';

const ThemeContext = React.createContext({});

//Para un reducer necesitamos estados compuestos
const initialState = {
    darkmode: true,
    characters: [],
    favorites: [],
    search: '',
};

//2 parametros: estado y accion
//Una forma de usar Reducer es con SWITCH
const reducer = (state, action) => {
    switch (action.type){
        case 'ADD_TO_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            };

        case 'REMOVE_FROM_FAVORITE':
            const favoriteIndex = state.favorites.findIndex(
                (favorite) => favorite.id === action.payload.id
              );
            const newFavorites = [...state.favorites];
            newFavorites.splice(favoriteIndex, 1);
            return {
                ...state,
                favorites: newFavorites,
            }
        default:
            return {
                ...state,
            };
    }
};

const ThemeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    return (
      <ThemeContext.Provider value={[state, dispatch]}>
        {children}
      </ThemeContext.Provider>
    );
  };
  
  export { ThemeContext, ThemeContextProvider };