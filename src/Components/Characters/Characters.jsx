import React, {useState, useReducer, useMemo, useRef, useCallback} from 'react';

import './Characters.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { Search } from '../Search/Search';

import { useCharacters } from '../Hooks/useCharacters';

//Para un reducer necesitamos estados compuestos
const initialState = {
    favorites: [],
};

const API = 'https://rickandmortyapi.com/api/character'
  
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

    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

    const [search, setSearch] = useState('');

    const searchInput = useRef(null);

    const characters = useCharacters(API);

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

    const handleSearch = useCallback(()=>{
        setSearch(searchInput.current.value);
    }, [])

    const filteredCharacters = useMemo(()=>
        characters.filter((user) => {
            return user.name.toLowerCase().includes(search.toLowerCase());
        }),
        [characters,search]
    )
    
    return (
        <div className="Characters px-5 mx-auto">

            {/* show favorites */}
            {favorites.favorites.length ? (
                <>
                    <div className='flex flex-start mb-4'>
                        <h2 className='text-900 title-font font-medium'>Favorite Characters</h2>
                    </div>
                    <div className= 'flex flex-row flex-wrap mb-4'>
                        {favorites.favorites.map(favorite =>(
                            <li className='list-none' key={favorite.id}>
                                <img 
                                    alt="team" 
                                    className="w-16 h-16 border-gray-400 border-4 rounded-full mr-4 mt-4" 
                                    src={favorite.image} 
                                    alt={favorite.name}
                                    title={favorite.name}
                                />
                            </li>
                        ))}
                    </div>
                </>
            ) : null}

            <Search 
                search={search}
                searchInput={searchInput}
                handleSearch={handleSearch}
            />
            
            <div className='flex flex-start mb-4'>
                <h2 className='text-900 title-font font-medium'>Characters</h2>
            </div>
            <div className=" flex flex-wrap -m-2">
            {characters.length > 0 && filteredCharacters.map(character => (
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
                type='button' onClick={() => handleClickOnAddFavorites(character)}>
                    <FontAwesomeIcon
                    className={`icon--favorite ${
                      favorites.favorites.filter(
                        (favorite) => favorite.id === character.id
                      ).length
                        ? 'favorite'
                        : ''
                    }`}
                    icon={faStar}
                  />
                </button>
              </div>
            </div>
          ))}
            </div>   
        </div>
    );
}

export { Characters };