import styles from './Card.module.scss'
import React from 'react';

function Card(props) {
  const [isAdded, setIsAdded] = React.useState();
  const handleClick = () => {
    setIsAdded(!isAdded)
  };

return (
<div className={styles.card}>
      <div className={styles.favorite} onClick={props.onClickLike}>
      <img src="/img/Unliked (2).svg" alt="liked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt='Nike Blazer Mid Suede'/>
     <h5>{props.title}</h5>
        <div className='d-flex justify-between align-center'>
          <div className='d-flex flex-column'>
            <span>Цена:</span>
            <b>{props.price} руб.</b>
          </div>
        
        <img className={styles.plus} src={isAdded ? "/img/Added.jpg" : "/img/NotAdded.jpg"} alt="Plus" onClick={handleClick}/>
        
        </div>
    </div>
    )
    }

    export default Card;