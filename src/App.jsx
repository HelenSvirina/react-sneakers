
import './App.css';
import React from 'react';
import Card from './components/Card/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';


  function App() {
  const [cartItems, setCartItems] = React.useState([]) 
  const [items, setItems] = React.useState([])  
  const [cartOpened, setCartOpened] = React.useState(false);
  
  React.useEffect(()=> {
  fetch('https://67a6efd4510789ef0dfc8294.mockapi.io/items')
  .then(res => {
    return res.json();
  })
  .then(json => {
    setItems(json);
  });
  }, []);

  
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

console.log(cartItems)

  return  (
<div className="wrapper clear">
 {cartOpened && <Drawer items = {cartItems} onCloseCart={() => setCartOpened(false)}/> }     
 <Header onClickCart={() => setCartOpened(true)} />
<div className="content p-40">
  <div className='d-flex align-center mb-40 justify-between'>
    <h1>Все кроссовки</h1>
    <div className='search-block d-flex'>
    <img src="/img/Search.svg" alt="Search" />
    <input placeholder='Поиск...' />
    </div>
  </div>
   <div className='d-flex flex-wrap'>
   {items.map(obj => 
    <Card 
     title={obj.name} 
     price={obj.price}
     imageUrl={obj.imageUrl}
     onClickPlus={(item) => addToCart(item)}
     onClickLike={() => console.log('Like')}
    /> )
   }
       
    </div>
 </div>
</div>
 
 )   
}

export default App
