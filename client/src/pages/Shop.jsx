import React from 'react'

const Shop = () => {
  return (
      <div className='flex gap-10 p-10'>
          <div className='w-[20%]'>
              
          </div>
          <div className='grid grid-cols-4 gap-4 w-[80%]'>
              
              <div className='bg-white border shadow-sm p-3 rounded-md'>
                  <img className='w-full h-[200px] object-cover' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204" alt="" />
                  <h3>name</h3>
                  <p>1254</p>
                  <button className='btn btn-primary'>Add to cart</button>
              </div>

          </div>
    </div>
  )
}

export default Shop