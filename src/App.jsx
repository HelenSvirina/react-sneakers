
import './App.scss';
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Drawer from './components/Drawer';
import Header from './components/Header';
import axios, { Axios } from 'axios';
import Home from './pages/Home';
import Favorites from './pages/Favorites';


  function App() {
  const [cartItems, setCartItems] = React.useState([]) 
  const [items, setItems] = React.useState([])  
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);

  React.useEffect(()=> {
   axios.get('https://67a6efd4510789ef0dfc8294.mockapi.io/items')
  .then(res =>  {
    setItems(res.data)
  });
   axios.get('https://67a6efd4510789ef0dfc8294.mockapi.io/Cart')
  .then(res => {
    setCartItems(res.data)
  });  
    axios.get('https://67adff5a9e85da2f020c05c6.mockapi.io/favorites')
  .then(res => {
    setFavorites(res.data)
  });
  }, []);
  
  
  const addToCart = (item) => {
    axios.post('https://67a6efd4510789ef0dfc8294.mockapi.io/Cart', item)
    setCartItems((prev) => [...prev, item]);
  };

 
  const removeItemFromCart = (id) => {
   axios.delete(`https://67a6efd4510789ef0dfc8294.mockapi.io/Cart/${id}`)
   setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const addToFavorite = (obj) => {
    if (favorites.find((objFav) => objFav.id === obj.id)) {

      axios.delete(`https://67adff5a9e85da2f020c05c6.mockapi.io/favorites/${obj.id}`);
      setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
    } else {

    axios.post('https://67adff5a9e85da2f020c05c6.mockapi.io/favorites', obj);
    setFavorites((prev) => [...prev, obj]);
    }
  }

 
 
return  (
 <div className="wrapper clear">
   {cartOpened && (
     <Drawer items = {cartItems} onCloseCart={() => setCartOpened(false)} onRemove = {removeItemFromCart}/> 
    )}     
  
    <Header onClickCart={() => setCartOpened(true)} />
   
    
     <Routes>
       <Route path="/" exact element={
         <Home 
       items={items} 
       setItems={setItems} 
       searchValue={searchValue} 
       setSearchValue={setSearchValue}
       onChangeSearchInput={onChangeSearchInput}
       addToCart={addToCart}
       addToFavorite={addToFavorite}
       />} />

      
       <Route path="/favorites" exact element={
         <Favorites items={favorites} addToFavorite={addToFavorite}/>} 
        />

     </Routes>
   
 </div>
 
  );   
}

export default App
