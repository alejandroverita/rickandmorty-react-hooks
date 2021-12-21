import React from 'react';

const Search = ({search, searchInput, handleSearch}) => {
    return (
        <div className='Search'>
                <input 
                    className="w-2/3 h-16 border-gray-400 rounded-3xl border-4 p-4 mx-auto mb-8 mt-8"
                    type="text"
                    placeholder='Type the character name...'
                    value={search}
                    ref= {searchInput}
                    onChange={handleSearch}
                    />
        </div>
    );
}

export { Search };