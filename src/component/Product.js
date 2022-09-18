import React from 'react'
import data from '../data'

const Product = (props) => {

  const {products} = data;
  const { Increament } = props;  
  
  return (
    <div className='   '> 
      <div className='p-4  bg-zinc-300'>
        <h1 className='text-4xl font-bold text-center  pb-2 tracking-wider bg-white mb-4'>PRODUCT CHECK OUT</h1>
      <div className=' grid grid-cols-5 gap-y-5 gap-x-3'>
      {products.map((product)=>(
        <div key={product.id} className='bg-white p-2 rounded'>
          <h1 className='text-lg font-bold'>{product.name}</h1>
          <hr />
          <div className='flex gap-x-3 py-2 relative'>
            <div className='w-[30%] h-20'>
              <img src={product.img} alt="product" className='h-full iimg' />
            </div>
            <div className='w-[70%]'>
              <h2 className='text-lg font-bold'>{product.price}$</h2>
              <p className='text-xs font-normal'>{product.decription}</p>
              <div className='absolute top-12 tr right-[45px] h-7 w-[61px]  '><img src={product.logo} alt="" className='bg-center bg-cover' /></div>
            </div>
          </div>
          <hr />
          <div onClick={() => Increament(product)}  className='flex justify-center pt-2'><button className='btn'>Add to Cart</button></div>
      </div>))}
      
      </div>
    </div>
    </div>
  )
}

export default Product