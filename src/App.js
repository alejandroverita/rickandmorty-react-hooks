import React, {useState} from 'react';
import './App.css';

// COMPONENTS
import { Header } from './Components/Header/Header';
import { Characters } from './Components/Characters/Characters';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const bg = darkMode ? 'bg-black text-white' : 'bg-white text-black';

  const handleClick = () => {
      setDarkMode(!darkMode);
  };
  
  return (
    <div className={`App ${bg}`}>
      <Header 
        darkMode={darkMode}
        onClick={handleClick}
      />
      <Characters />
    </div>
  );
}

export default App;
