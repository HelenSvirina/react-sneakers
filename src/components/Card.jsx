
function Card(props) {
  const onClickButton = () => {
    alert(props.title);
  }
    return (
<div className='card'>
      <div className='favorite'>
      <img src="/img/Liked.svg" alt="liked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt='Nike Blazer Mid Suede'/>
     <h5>{props.title}</h5>
        <div className='d-flex justify-between align-center'>
          <div className='d-flex flex-column'>
            <span>Цена:</span>
            <b>{props.price} руб.</b>
          </div>
        <button className='buttonPlus' onClick={() => onClickButton()}>
        <img width= {11} height={11} src="/img/Vector.svg" alt="Plus" />
        </button>
        </div>
    </div>
    )
    }

    export default Card;