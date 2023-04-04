import axios from 'axios';
import React, { useState } from 'react'
import Preloader from '../../Preloader/Preloader';

const UpWithPackage = () => {
  const [postPhotos, setPostPhotos] = useState([]);
  const [loader, setLoader] = useState(false);
  const [images, setImages] = useState([]);
  const [photo, setPhoto] = useState('');

  console.log(photo);

  const handlePostPhotoUpload = (e) => {
    setPhoto(e.target.files[0])

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




  const handlePhotoUpload = async (e) => {
    e.preventDefault();
    const data = new FormData();
      data.append('photo', postPhotos);
      data.append('me', "me");

    await axios.post("http://localhost:5050/api/v1/cloud", data).then(res => {
      console.log(res.data);
    }).catch(error => {
      console.log(error);
    });
  }


  console.log(postPhotos);




  return (
    <div className="container mx-auto p-10">
      {loader && <Preloader />}
      <div className="flex flex-col w-[600px] mx-auto items-center gap-2">
        <form onSubmit={handlePhotoUpload} >
          <input type="file" name='photo' onChange={handlePostPhotoUpload} />
          <button type="submit" className='btn bg-blue text-white'>Submit</button>

        </form>
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


export default UpWithPackage;