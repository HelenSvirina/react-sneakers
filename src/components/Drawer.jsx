

function Drawer({onCloseCart, onRemove, items = []}) {
    return (
  <div className='overlay'>
    <div  className="drawer">
        <h2 className='d-flex justify-between mb-30'>
        Корзина <img className='cu-p' onClick={onCloseCart} src="/img/Remove.svg" alt="Remove" />
        </h2>

        { items.length > 0 ? 
        <div>
        <div className="items">

          {items.map((obj) => {
           return (
   
             <div className="cartItem d-flex align-center mb-20">
               <img 
               className='mr-20' 
               width={70} 
               height={70} 
               src={obj.imageUrl} 
               alt="Sneakers" 
               />
                  <div className='mr-20'>
                   <p className='mb-5'>{obj.title}</p>
                   <b>{obj.price}.руб</b>
                  </div>
                   <div>
                   <img onClick={() => onRemove(obj.id)} className='revoveBtn cu-p' src="/img/Remove.svg" alt="Remove" />
                   </div>
              </div>
         
           )}
   
          )}

          </div> 
      <div className="cartTotalBlock">
     <ul>
       <li className='d-flex mb-20'>
        <span>Итого:</span>
        <div></div>
        <b>21 498 руб.</b> 
       </li>
       <li className='d-flex mb-20'>
        <span>Налог 5%:</span>
        <div></div>
        <b>1074 руб.</b>
       </li>
     </ul>
     <button className='greenButton'>Оформить заказ <img className='arrow' src="/img/RightVector.svg" alt="Arrow" /></button>
   </div> 
 </div> : 
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
          <img className="mb-20" src="/img/Empty_Cart.jpg" alt="Empty" />
          <h2>Корзина пуста</h2>
          <p className="opacity-6">Добавьте хотя бы один товар, чтобы сделать заказ.</p>
          <button onClick={onCloseCart} className='greenButton'>Вернуться назад       
          </button>
        </div>

      }

           
        
        
    </div>
</div>
 )
} 

export default Drawer;