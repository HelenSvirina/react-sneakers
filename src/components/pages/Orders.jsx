import React from "react";
import Card from "../Card/Card";
import axios from "axios";
import { AppContext } from "../../App";


function Orders() {
    const { addToCart, addToFavorite } = React.useContext(AppContext)
    const [isLoading, setIsLoading] = React.useState(true); //стейты загрузки страницы заказов.
    const [orders, setOrders] = React.useState([]); //стейты для карточек заказов.
    
    React.useEffect(() => {
        (async () => {
           try {
            const { data } = await axios.get('https://67adff5a9e85da2f020c05c6.mockapi.io/order');
            setOrders(data.map(obj => obj.items ).flat());
            setIsLoading(false);
           } catch (error) {
            alert('Не удалось загрузить Мои заказы');
            console.error(error);
           }
        })(); //самовызывающаяся анонимная функция для async/await. В useEffect нельзя писать async.
    }, []);

    return (
     <div className="content p-40">
       <div className='d-flex align-center mb-40 justify-between'>
         <h1>Мои заказы</h1>
         </div>
         <div className='d-flex flex-wrap'>
         { (isLoading ? [...Array(12)] : orders)
           .map((obj, index) => (
         <Card
         key={index}
         loading={isLoading}
         {...obj}
         /> 
          
        ))}
        
        </div>
       </div>
     )
     
    };
    
    export default Orders;