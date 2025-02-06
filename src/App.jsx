
import './App.css';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Shapka from './components/Header';

const arr =[
  {name: 'Мужские Кроссовки Nike Blazer Mid Suede', 
   price: 12999,
   imageUrl: '/img/sneakers/image 5.png'
  }, 
  {name: 'Кроссовки Puma X Aka Boku Future Rider', 
   price: 8999,
   imageUrl: '/img/sneakers/image 5 (1).png'
  },
  {name: 'Мужские Кроссовки Nike Blazer Mid Suede', 
   price: 8499,
   imageUrl: '/img/sneakers/image 5 (2).jpg'
},
  {name: 'Мужские Кроссовки Under Armour Curry 8', 
   price: 15999,
   imageUrl: '/img/sneakers/image 5 (4).jpg'
  }
];
  function App(props) {
  return  <div className="wrapper clear">
<Drawer/>      
<Shapka/>
<div className="content p-40">
  <div className='d-flex align-center mb-40 justify-between'>
    <h1>Все кроссовки</h1>
    <div className='search-block d-flex'>
    <img src="/img/Search.svg" alt="Search" />
    <input placeholder='Поиск...' />
    </div>
  </div>
   <div className='d-flex'>
   {arr.map(obj => 
    <Card 
     title={obj.name} 
     price={obj.price}
     imageUrl={obj.imageUrl}
    /> )
   }
       
    </div>
 </div>
</div>
 
    
}
export default App
