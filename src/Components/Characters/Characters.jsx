import React, {useEffect, useState} from 'react';

const Characters = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() =>{
        fetch('https://rickandmortyapi.com/api/character')
            .then(response=> response.json())
            .then(data => setCharacters(data.results))
    }, []);
    
    return (
        <div className="Characters container px-5 mx-auto">
            <div className=" flex flex-wrap -m-2">
            {characters.length > 0 && characters.map(character => (
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={character.image} />
                <div className="flex-grow">
                  <h2 className="text-900 title-font font-medium">{character.name}</h2>
                  <p className="text-gray-400">{character.status}</p>
                  <p className="text-gray-400">{character.species}</p>
                </div>
              </div>
            </div>
          ))}
            </div>   
        </div>
    );
}

export { Characters };