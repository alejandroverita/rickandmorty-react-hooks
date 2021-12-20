import React from 'react';

const Header = (props) => {
    
    
    return (
        <div className= 'Header flex flex-col w-full mb-20'>
            <h1 className={`sm:text-3xl text-2xl font-medium title-font mb-4 text-900`}>Rick and Morty</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">All Characters</p>
            <button 
                className="w-1/5 mx-auto border-2 p-4 mt-4 rounded-xl"
                type="button"
                onClick={()=>props.onClick()}
            > 
            {props.darkMode ? 'Dark Mode' : 'Light Mode'} 
            
            </button>
        </div>
    );
}

export { Header };