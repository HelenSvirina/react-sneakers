

function Drawer() {
    return (
<div className='overlay'>
    <div style={{display: 'none'}}  className="drawer">
        <h2 className='d-flex justify-between mb-30'>
        Корзина <img className='cu-p' src="/img/Remove.svg" alt="Remove" />
        </h2>
    <div className="items">
        <div className="cartItem d-flex align-center mb-20">
            <img 
            className='mr-20' 
            width={70} 
            height={70} 
            src="/img/sneakers/image 5.png" 
            alt="Sneakers" 
            />
            
              <div className='mr-20'>
                <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб</b>
              </div>
              <div>
                <img className='revoveBtn' src="/img/Remove.svg" alt="Remove" />
             </div>
            
        </div>
        <div className="cartItem d-flex align-center mb-20">
            <img 
            className='mr-20' 
            width={70} 
            height={70} 
            src="/img/sneakers/image 5.png" 
            alt="Sneakers" 
            />
            
            <div className='mr-20'>
              <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб</b>
            </div>
            <div>
              <img className='revoveBtn' src="/img/Remove.svg" alt="Remove" />
            </div>
            
        </div>
    </div>
        <div className="cartTotalBlock"><ul>
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
        
    </div>
</div>
)
} 

export default Drawer;