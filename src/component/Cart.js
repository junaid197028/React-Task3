import React from 'react'

const Cart = (props) => {
  const {citem,Increament,Decrement,products } = props; 
  const itemprice = citem.reduce((a, c) => a + c.qty * c.price, 0 ) ; 
  const totalprice = itemprice;  
  
  const off = products.find( obj => obj.id===2 );
  const discount = off > 200 ? 2000 : 0;
  console.log(off)
  console.log(discount); 

  return (
    <div className='p-4 mt-1 bg-zinc-300'> 
      <div>
        {citem.length === 0 && <div className='font-bold text-center'>YOUE CART IS EMPTY 😲</div>} 
        {citem.map((item) => (
          <div key={item.id}>
            <div className='grid grid-cols-3 bg-white mb-4 py-2'>
              <div className='flex items-center justify-center gap-x-12'>
                 <div className=' h-20'><img src={item.img} alt="product" className='w-full h-full iimg' /></div>
                 <div className='text-base font-bold'>{item.name}</div> 
              </div> 
              <div className='flex items-center gap-x-4 justify-center gap-y-3'>
                <button onClick={() => Decrement(item)} className="btnn border-y-2 border-black">-</button>
                <div className='bg-white font-bold border-y-2 border-black py-[5px] px-5'>{item.qty}</div>
                <button onClick={() => Increament(item)} className="btnn border-y-2 border-black">+</button>
              </div>
              <div className='flex gap-x-10 text-center pt-2 justify-center items-center'>
                <div> 
                  <strong> ${item.price} </strong> 
                </div>  
              </div>
            </div>
           
          </div>
        ))}
      </div>

      {citem.length !== 0 && (
            <> 
           
            <div className='text-lg font-bold mt-10 border-t-2 border-black flex gap-x-5 justify-end '>
              <div>Total Price:</div>
              <div>${totalprice}.00</div>
            </div> 
            <div className='flex justify-end'><button onClick={()=>(alert("Your Bill is:$"+totalprice))} className="border-2 border-black rounded-2xl px-8  py-1 mr-6 mt-2 hover:border-white hover:bg-slate-500 hover:text-white hover">CheckOut</button></div>
            </>
      )}

    </div>
  )
}

export default Cart