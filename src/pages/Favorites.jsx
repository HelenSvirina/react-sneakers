import { sassTrue } from 'sass';
import Card from '../components/Card/Card';

function Favorites({ items, addToFavorite }) {
return (
 <div className="content p-40">
   <div className='d-flex align-center mb-40 justify-between'>
     <h1>Мои закладки</h1>
     </div>
     <div className='d-flex flex-wrap'>
     {items.map((obj, index) => 
     <Card
      key={index}
      favorited={true}
      onFavorite={addToFavorite}
      {...obj}
      
      /> 
      )
     }
    </div>
    
      
   </div>
 
 )
};

export default Favorites;