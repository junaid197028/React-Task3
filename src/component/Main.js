import React,{useState} from 'react' 
import Product from './Product' 
import Cart from './Cart'
import data from '../data'

function Main() {
  const { products } = data; 
  const [citem, setCitem] = useState([]);  
  
  const Increament = (product) => {
    const z = citem.find(x => x.id === product.id); 
    // const a = citem.find((x) => x.id === 1 && x.price >= 200 ); 
    
    if(z){
      setCitem (citem.map(x => x.id === product.id ? {...z, qty: z.qty +1 } : x ));
    }
    else {
      setCitem([...citem, {...product,qty:1}])
    }
  }

  const Decrement = (product) => {
    const z = citem.find((x) => x.id === product.id);
    if((z.qty === 1)){
      window.confirm("Are you sure to delete this item from Cart") && setCitem(citem.filter((x)=>x.id !== product.id))
    }else{
      setCitem (citem.map(x => x.id === product.id ?{...z, qty: z.qty -  1 } : x
        )
        );
    } 
  }

  return (
    <div  className='bg-gray-400 w-full h-[full] flex justify-center items-center '> 
      <div className='bg-white w-[80%] mt-2 border-[0.5px] border-black   mb-5'>  
          <Product Increament={Increament} products = {products}/>
          <Cart Increament={Increament} Decrement={Decrement} citem={citem}  products = {products}/>
      </div>
    </div>
  );
} 
export default Main;