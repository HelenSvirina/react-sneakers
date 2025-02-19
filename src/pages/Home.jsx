import Card from '../components/Card/Card';
import { AppContext } from '../App';
import React from 'react';

function Home({ items, searchValue, setSearchValue, onChangeSearchInput, addToCart, addToFavorite, isLoading }) {


const renderItems = () => {
  return ((isLoading 
    ? [...Array(12)] 
    : items.filter((obj) => obj.name.toLowerCase().includes(searchValue)))
       
      .map((obj, index) => 
       <Card
        key={index}
        onClickPlus={(item) => addToCart(item)}
        onLike={(obj) => addToFavorite(obj)}
        loading={isLoading}
        {...obj}
        /> 
        )
  )   
  

};

  return (
 <div className="content p-40">
   <div className='d-flex align-center mb-40 justify-between'>
     <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
      <div className='search-block d-flex'>
        <img src="/img/Search.svg" alt="Search" />
        {searchValue && (
        <img onClick={() => setSearchValue('')} 
        className='removeInput cu-p' 
        src="/img/Remove.svg" 
        alt="Clear" 
        />
         )
        }    
        <input onChange={onChangeSearchInput} value={searchValue} placeholder='Поиск...'/>
      </div>
    </div>
  <div className='d-flex flex-wrap'>
    {renderItems()}
      
   </div>
 </div>
 )
};

export default Home;