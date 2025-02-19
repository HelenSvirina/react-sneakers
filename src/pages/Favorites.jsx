import { sassTrue } from 'sass';
import Card from '../components/Card/Card';
import { AppContext } from '../App';
import React from 'react';



function Favorites() {
const { favorites, addToFavorite, addToCart} = React.useContext(AppContext);
  
return (
 <div className="content p-40">
   <div className='d-flex align-center mb-40 justify-between'>
     <h1>Мои закладки</h1>
     </div>
     <div className='d-flex flex-wrap'>
     {favorites.map((obj, index) => 
     <Card
      key={index}
      favorited={true}
      onLike={addToFavorite}
      onClickPlus={(item) => addToCart(item)}
      {...obj}
      
      /> 
      )
     }
    </div>
      
   </div>
 
 )
};

export default Favorites;