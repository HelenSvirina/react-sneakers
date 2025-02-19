
import './App.scss';
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Drawer from './components/Drawer';
import Header from './components/Header';
import axios, { Axios } from 'axios';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './components/pages/Orders';

export const AppContext = React.createContext({});


  function App() {
  const [cartItems, setCartItems] = React.useState([]) 
  const [items, setItems] = React.useState([])  
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [favorites, setFavorites] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(()=> {
    async function fetchData() {
      const cartResponse = await axios.get('https://67a6efd4510789ef0dfc8294.mockapi.io/Cart');
      const favResponse = await axios.get('https://67adff5a9e85da2f020c05c6.mockapi.io/favorites');
      const itemsResponse = await axios.get('https://67a6efd4510789ef0dfc8294.mockapi.io/items');
      
      setIsLoading(false);

      setCartItems(cartResponse.data);
      setFavorites(favResponse.data);
      setItems(itemsResponse.data);

    }

    fetchData();
  
  }, []);
  
  
  const addToCart = (item) => {
    try {
      if (cartItems.find((itemCart) => Number(itemCart.id) === Number(item.id))) {
        axios.delete(`https://67a6efd4510789ef0dfc8294.mockapi.io/Cart/${item.id}`);
        setCartItems((prev) => prev.filter((obj) => Number(obj.id) !== Number(item.id)))
      } else {
        axios.post('https://67a6efd4510789ef0dfc8294.mockapi.io/Cart', item);
        setCartItems((prev) => [...prev, item]);
        }
    } catch {
      alert('Не удалось добавить товар в корзину');
    }
    
  };

 
  const removeItemFromCart = (id) => {
   axios.delete(`https://67a6efd4510789ef0dfc8294.mockapi.io/Cart/${id}`)
   setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const addToFavorite = (obj) => {
     try {
      if (favorites.find((objFav) => Number(objFav.id) === Number(obj.id))) {

        axios.delete(`https://67adff5a9e85da2f020c05c6.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
    } else {

    const { data } = axios.post('https://67adff5a9e85da2f020c05c6.mockapi.io/favorites', obj);
    setFavorites((prev) => [...prev, data]);
    }
    } catch (error) {
    alert('Не удалось добавить в закладки'); 
   }
  };

  const isItemAddedToCart = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id))};
  


 
return  (
  <AppContext.Provider value= { { cartItems, favorites, items, isItemAddedToCart, setCartOpened, setCartItems, addToCart, addToFavorite } }>
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
       isLoading={isLoading}
       />} />

      
       <Route path="/favorites" exact element={
         <Favorites addToFavorite={addToFavorite}/>} 
        />

        <Route path="/orders" exact element={
         <Orders />} 
        />   

     </Routes>
 </div>
     
  </AppContext.Provider> 
  
  );
}


export default App


