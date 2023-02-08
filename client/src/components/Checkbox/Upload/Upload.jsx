import React, { useState } from 'react'

const Upload = () => {
  const [postPhotos, setPostPhotos] = useState([]);

  const handlePostPhotoUpload = (e) => {
    const post_images = [];
    for (let i = 0; i < e.target.files.length; i++) {
      post_images.push(e.target.files[i]);
    }
    setPostPhotos(post_images);
  }

  console.log(postPhotos);

  return (
    <div className="container mx-auto p-10">
      <div className="flex flex-col w-[600px] mx-auto items-center gap-2">
        <input type="file" onChange={handlePostPhotoUpload} multiple />
        <div>
          <img src="" alt="" />
          <button className='btn bg-red-700 text-white'>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Upload;