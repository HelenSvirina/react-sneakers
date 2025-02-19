import styles from './Card.module.scss'
import React from 'react';
import ContentLoader from 'react-content-loader';
import { AppContext } from '../../App';

function Card({ onClickPlus, id, name, imageUrl, price, onLike, favorited = false, /*added = false,*/ loading = false }) {
 // const [isAdded, setIsAdded] = React.useState(added);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  
  const {isItemAddedToCart} = React.useContext(AppContext);
  
  
  const handleClick = () => {
    onClickPlus({ id, name, imageUrl, price });
   // setIsAdded(!isAdded)
  };

  const onClickLike = () => {
    onLike({ id, name, imageUrl, price });
    setIsFavorite(!isFavorite);
  };

return (
<div className={styles.card}>
  {
    loading ?  <ContentLoader 
    speed={2}
    width={150}
    height={230}
    viewBox="0 0 150 230"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    
  >
    <rect x="0" y="0" rx="10" ry="10" width="150" height="120" /> 
    <rect x="1" y="138" rx="5" ry="5" width="150" height="15" /> 
    <rect x="0" y="159" rx="5" ry="5" width="100" height="15" /> 
    <rect x="0" y="198" rx="5" ry="5" width="80" height="25" /> 
    <rect x="108" y="198" rx="10" ry="10" width="32" height="32" /> 
    <rect x="139" y="208" rx="0" ry="0" width="4" height="2" />
  </ContentLoader> : 
      <>
        <div className={styles.favorite} onClick={onClickLike}>
         { onLike && <img src={isFavorite ? "/img/Liked.svg" : "/img/Unliked (2).svg"} alt="liked" /> }
        </div>
         <img width={133} height={112} src={imageUrl} alt='Nike Blazer Mid Suede'/>
        <h5>{name}</h5>
        <div className='d-flex justify-between align-center'>
          <div className='d-flex flex-column'>
            <span>Цена:</span>
            <b>{price} руб.</b>
          </div>
        
        { onClickPlus && <img className={styles.plus} src={isItemAddedToCart(id) ? "/img/Added.jpg" : "/img/NotAdded.jpg"} alt="Plus" onClick={handleClick}/>}
        
        </div>
      </>
  }
      
    </div>
   
      
    )
  }

    export default Card;