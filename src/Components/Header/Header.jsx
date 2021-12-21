import React from 'react';

import logo from '../../Assets/Static/rick-and-morty-logo.png'

const Header = (props) => {

    return (
        <div className= 'Header flex flex-col w-full mb-10'>
            <figure>
                <img className='mx-auto' src={logo} alt='Rick and Morty' />
            </figure>
            
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