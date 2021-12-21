import React, {useState, useEffect, useReducer} from 'react';

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

const Characters = () => {
    const [characters, setCharacters] = useState([]);

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

    useEffect(() =>{
        fetch('https://rickandmortyapi.com/api/character')
            .then(response=> response.json())
            .then(data => setCharacters(data.results))
    }, []);
    
    return (
        <div className="Characters px-5 mx-auto">

            {/* show favorites */}
            <div className= 'flex flex-row mb-4'>
                {favorites.favorites.map(favorite =>(
                    <li className='list-none' key={favorite.id}>
                        <img alt="team" className="w-16 h-16 border-gray-400 border-4 rounded-full mr-4" src={favorite.image} />
                    </li>
                ))}
            </div>
            
            <div className=" flex flex-wrap -m-2">
            {characters.length > 0 && characters.map(character => (
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={character.id}>
              <div className="h-full flex items-center border-gray-200 border-2 p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={character.image} />
                <div className="flex-grow">
                  <h2 className="text-900 title-font font-medium">{character.name}</h2>
                  <p className="text-gray-400">{character.status}</p>
                  <p className="text-gray-400">{character.species}</p>

                </div>
                <button 
                className="w-1/6 mx-auto border-2 p-2 rounded-xl"
                type='button' onClick={() => handleClickOnAddFavorites(character)}>❤️</button>
              </div>
            </div>
          ))}
            </div>   
        </div>
    );
}

export { Characters };