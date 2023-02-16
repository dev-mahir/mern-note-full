import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';


const CloudSystem = () => {
  const [photos, setPhotos] = useState([]);

  const handleInputChange = (e) => {
    const files = Array.from(e.target.files);
    setPhotos((prevState) => ([
      ...prevState,
      ...files
    ]));
  }



  const handleRemoveImage = (index) => {
    setPhotos((prevState) => ([
      ...prevState,
      photos.filter( (data) => data)
    ]));
  }


  
  return (
    <div className='container mt-5'>

      <nav className='space-x-3  text-center mb-2'>
        <button className='btn  btn-primary '>Cloudinary</button>
        <button className='btn  bg-blue-500  '>Dropbox</button>
        <button className='btn  bg-blue-500 '>Google Drive</button>
      </nav>

      <div className="divider"></div>

      <div className="mt-3">

        <div className="grid grid-cols-5 gap-2">

          <div className='col-span-1'>
            <form className=''>
              <div className="form-control">
                <input type="file" onChange={handleInputChange} multiple />
              </div>
              <button className='btn btn-sm btn-primary mt-2'>Submit</button>
            </form>

            <div className='flex flex-wrap gap-3 mt-2'>

              {photos?.map((item, index) => {
                const url = URL.createObjectURL(item);
                return (
                  <div className='relative'>
                    <img className='h-16 w-16 object-cover rounded-md' src={url} alt="" />
                    <button onClick={() => handleRemoveImage(index)} className='absolute top-1 right-1 z-50'><MdClose className='text-white bg-primary rounded-md' /></button>
                  </div>
                )
              })}

            </div>

          </div>

          <div className='col-span-4'>
            <div className='flex flex-wrap gap-2'>
              <img className='h-36 w-32 object-cover rounded-md' src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
              <img className='h-36 w-32 object-cover rounded-md' src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
              <img className='h-36 w-32 object-cover rounded-md' src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
            </div>
            <p>File not found</p>
          </div>

        </div>





      </div>

    </div>
  )
}

export default CloudSystem;