import Info from "./Info";
import React from "react";

import axios from "axios";
import { useCart } from "../hooks/useCart";

//const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


function Drawer({onCloseCart, onRemove, items = [] }) {
   const { cartItems, setCartItems, totalPrice } = useCart(); //кастомный хук
   const [isOrderComplete, setIsOrderComplete] = React.useState(false); //стейты для оформления заказа
   const [orderId, setOrderId] = React.useState(null); // стейты для подсчета количества заказов
   const [isLoading, setIsLoading] = React.useState(false); // стейты для загрузки страницы
   
    //функция для оформления заказа
    const onClickOrder = async () => {
     try {
      setIsLoading(true);
      const {data} = await axios.post('https://67adff5a9e85da2f020c05c6.mockapi.io/order', {
        items: cartItems,
     });
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      /*for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete('https://67a6efd4510789ef0dfc8294.mockapi.io/Cart', + item.id);
        await delay(1000);
      }*/
      
     } catch(error) {
        alert('Не удалось оформить заказ! Пожалуйста, попробуйте позже.')
     }
      setIsLoading(false);
    };

  return (
  <div className='overlay'>
    <div  className="drawer">
        <h2 className='d-flex justify-between mb-30'>
        Корзина <img className='cu-p' onClick={onCloseCart} src="/img/Remove.svg" alt="Remove" />
        </h2>

        { items.length > 0 ? 
        <div className="d-flex flex-column flex">
          <div className="items">

          {items.map((obj) => {
           return (
   
             <div key={obj.id} className="cartItem d-flex align-center mb-20">
               <img 
               className='mr-20' 
               width={70} 
               height={70} 
               src={obj.imageUrl} 
               alt="Sneakers" 
               />
                  <div className='mr-20'>
                   <p className='mb-5'>{obj.name}</p>
                   <b>{obj.price} руб.</b>
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
        <b>{ totalPrice } руб.</b> 
       </li>
       <li className='d-flex mb-20'>
        <span>Налог 5%:</span>
        <div></div>
        <b>{ (totalPrice * 0.05).toFixed(2) } руб.</b>
       </li>
     </ul>
     <button disabled={isLoading} onClick={onClickOrder} className='greenButton'>Оформить заказ <img className='arrow' src="/img/RightVector.svg" alt="Arrow" /></button>
   </div> 
 </div> : 
 <Info 
    title= {isOrderComplete ? 'Заказ оформлен!' : 'Корзина пуста' }   
    description= {isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : 'Добавьте хотя бы один товар в корзину.'}  
    image= {isOrderComplete ? 'img/placedorder.jpg' : '/img/Empty_Cart.jpg'} 
  />
  }

               
    </div>
</div>
 
 
 )
} 

export default Drawer;