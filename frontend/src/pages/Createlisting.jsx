import React from 'react'

export default function Createlisting() {
  return (
    <main className='p-3 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Create a Listing</h1>

      <form className=' flex flex-col sm:flex-row gap-4'>
        <div className='flex flex-col gap-4' >
          <input type="text" placeholder='Name' id='name' maxLength='62' minLength='10' required className='border p-3 rounded-lg ' />
          <input type="text" placeholder='Description'id='description'  required className='border p-3 rounded-lg ' />
          <input type="text" placeholder='Address'id='address' required className='border p-3 rounded-lg ' />
          {/* checkbox */}
          <div className='flex gap-6 flex-wrap'> 
            <div className='flex gap-2'>
            <input type='checkbox' id='sale' className='w-5'/>
            <span>sell</span>
          </div>
           <div className='flex gap-2'>
            <input type='checkbox' id='rent' className='w-5'/>
            <span>Rent</span>
          </div>
         <div className='flex gap-2'>
            <input type='checkbox' id='parking' className='w-5'/>
            <span>Parking spot</span>
          </div>
          <div className='flex gap-2'>
            <input type='checkbox' id='furnished' className='w-5'/>
            <span>Furnished</span>
          </div>
          <div className='flex gap-2'>
            <input type='checkbox' id='offer' className='w-5'/>
            <span>offer</span>
          </div>
          </div>
         {/* numbers */}
          <div className='flex gap-6 flex-wrap'>

            <div className='flex items-center gap-2'>
              <input type="number" id='bedrooms'min='1' max='10' required  className='p-3 border-gray-300 rounded'/>
              <span>Beds</span>
            </div>
             <div className='flex items-center gap-2'>
              <input type="number" id='bathrooms'min='1' max='10' required  className='p-3 border-gray-300 rounded'/>
              <span>Baths</span>
            </div>
             <div className='flex items-center gap-2'>
              <input type="number" id='regularprice'min='1' max='10' required  className='p-3 border-gray-300 rounded'/>

              <div className='flex flex-col items-center'>
                <p>Regularprice</p>
              <span className='text-xs'>{"$/Month"}</span>
              </div>
            </div>
             <div className='flex items-center gap-2'>
              <input type="number" id='discountedprice'min='1' max='10' required  className='p-3 border-gray-300 rounded'/>
              <div  className='flex flex-col items-center'>
                <p>Discountedprice</p>
              <span className='text-xs'>{'$/Month'}</span>

              </div>
            </div>

          </div>
        </div>
        {/* images */}
        <div className='flex flex-col  gap-4'>
          <p className='font-semibold'>images:
          <span className=' font-normal text-gray-600 ml-2'>The first image will be the cover  image (max 6)</span>
          </p>
        
        <div className='flex gap-4'>
          <input className='p-3 border border-gray-400 rounded  w-full' type="file" id='images' accept='images/* ' multiple />
          <button className='p-3 border-green-700 border text-green-700 rounded-2xl uppercase hover:shadow:lg disabled:opacity-80'>Upload</button>
        </div>
        <button className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-05 disabled:opacity-80'>Create Listing</button>
         </div>
      </form>
    </main>
  )
}
