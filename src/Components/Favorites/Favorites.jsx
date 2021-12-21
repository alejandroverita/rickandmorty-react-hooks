import React, {useState, useReducer } from 'react';

//Para un reducer necesitamos estados compuestos
const initialState = {
    favorites: [],
};

  
//2 parametros: estado y accion
//Una forma de usar Reducer es con SWITCH
const favoriteReducer = (state, action) => {
    switch (action.type){
        case 'ADD_TO_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            };

        case 'REMOVE_FROM_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites.filter(item=> item.id !== action.payload.id)]
            }
        default:
            return state;
    }
};

const Favorites = () => {
    
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

    const handleClickOnAddFavorites = favorite =>{
        dispatch({
          type: 'ADD_TO_FAVORITE',
          payload: favorite
        })
    };
    
     /*  const handleClickOnRemovefavorite = favorite => {
        dispatch({
          type: 'REMOVE_FROM_FAVORITE',
          payload: favorite,
        })
      } */
    
    return (
        <>
            <div className='flex flex-start mb-4'>
                <h2 className='text-900 title-font font-medium'>Favorite Characters</h2>
            </div>
            <div className= 'flex flex-row flex-wrap mb-4'>
                {favorites.favorites.map(favorite =>(
                    <li className='list-none' key={favorite.id}>
                        <img alt="team" className="w-16 h-16 border-gray-400 border-4 rounded-full mr-4 mt-4" src={favorite.image} />
                    </li>
                ))}
            </div>
        </>
    );
}

export {Favorites};