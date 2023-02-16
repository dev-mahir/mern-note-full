import React, { useState } from 'react'

const Upload = () => {
  const [postPhotos, setPostPhotos] = useState([]);

  const handlePostPhotoUpload = (e) => {
    const uploaderImages = Array.from(e.target.files);
    setPostPhotos((prevState) => ([
      ...prevState,
      ...uploaderImages
    ]));
  }

  const handlePreviewDelete = (item) => {
    const updatedImage = postPhotos.filter(data => data !== item);
    // setPostPhotos(updatedImage);
    setPostPhotos([...updatedImage]);
  }
  const handlePhotoUpload = (e) => {
    e.preventDefault();
    const data = new FormData();

    postPhotos.forEach((item) => {
      data.append("photo", item);
    })
  }

  return (
    <div className="container mx-auto p-10">
      <div className="flex flex-col w-[600px] mx-auto items-center gap-2">
        <form onSubmit={handlePhotoUpload}>
          <input type="file" onChange={handlePostPhotoUpload} multiple />
        </form>
        <button className='btn bg-blue text-white' type='submit'>Submit</button>
        <div className='flex' >
          {postPhotos.map((item, i) => {
            const imageUrl = URL.createObjectURL(item);
            return (
              <div key={i}>
                <img src={imageUrl} className="w-20 h-20 object-cover" alt="" />
                <button onClick={() => handlePreviewDelete(item)} className='btn bg-red-700 text-white'>Delete</button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Upload;