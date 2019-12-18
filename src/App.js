import React, { useEffect,useState} from 'react';
import './App.css';
import Recipe from './Recipe.js';

const App = () => {
   const APP_ID = '9aade08e';
   const APP_KEY = '3fcd160baa62779d72cbb86e993b07e8';
   
   const [recepies_recived, setRecepies] = useState([]);
   const [searchh, setSearch] = useState('');
   const [queryy, setQuery] = useState('chicken');
   
   useEffect(() => {
    getRecipes();
   }, [queryy]);

   const getRecipes = async () =>{
     const response = await fetch (
       `https://api.edamam.com/search?q=${queryy}&app_id=${APP_ID}&app_key=${APP_KEY}`);
     const data     = await response.json();
     setRecepies(data.hits);
     console.log(data.hits);
   };

  const getSearch = e =>{
    setSearch(e.target.value);
  };

  const querysSearch = e =>{
    e.preventDefault();
    setQuery(searchh);
  };

  return(
    <div className="App">
    <h1>Hello, Find the best recepies in the world here!</h1>
     <form onSubmit={querysSearch} className="search-form">
       <input className="search-bar" type="text" value={searchh} onChange={getSearch}/>
       <button className="search-button" type="submit">
        Search
       </button>
     </form>
     <div className="recipe">
     {recepies_recived.map(rcp =>(
      <Recipe 
            key         ={rcp.recipe.label}
            title       ={rcp.recipe.label}
            calories    ={rcp.recipe.calories.toFixed(2)}
            image       ={rcp.recipe.image}
            ingredients ={rcp.recipe.ingredients}
         />
     ))}
     </div>
    </div>
  );
};


export default App;
