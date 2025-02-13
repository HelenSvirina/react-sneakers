import styles from './Card.module.scss'
import React from 'react';

function Card({ onClickPlus, title, imageUrl, price, onLike, favorited = false }) {
  const [isAdded, setIsAdded] = React.useState();
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  
  const handleClick = () => {
    onClickPlus({ title, imageUrl, price });
    setIsAdded(!isAdded)
  };

  const onClickLike = () => {
    onLike({ title, imageUrl, price })
    setIsFavorite(!isFavorite);
  };

return (
<div className={styles.card}>
      <div className={styles.favorite} onClick={onClickLike}>
      <img src={isFavorite ? "/img/Liked.svg" : "/img/Unliked (2).svg"} alt="liked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt='Nike Blazer Mid Suede'/>
     <h5>{title}</h5>
        <div className='d-flex justify-between align-center'>
          <div className='d-flex flex-column'>
            <span>Цена:</span>
            <b>{price} руб.</b>
          </div>
        
        <img className={styles.plus} src={isAdded ? "/img/Added.jpg" : "/img/NotAdded.jpg"} alt="Plus" onClick={handleClick}/>
        
        </div>
    </div>
    )
    }

    export default Card;