import axios from 'axios';
import React, { useState } from 'react'
import Preloader from '../../Preloader/Preloader';

const Upload = () => {
  const [postPhotos, setPostPhotos] = useState([]);
  const [loader, setLoader] = useState(false);
  const [images, setImages] = useState([]);

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
    setLoader(true);
    const data = new FormData();
    let count = 1;
    postPhotos.forEach((item) => {
      data.append("file", item);
      data.append("upload_preset", "test_upload");
      data.append("cloud_name", "dxdrjruzm");
      axios.post('https://api.cloudinary.com/v1_1/dxdrjruzm/image/upload', data)
        .then(res => {
          setImages((prevState) => ([
            ...prevState,
            {
              url: res.data.url,
              name: res.data.original_filename,
              secure_url: res.data.secure_url,
              public_id: res.data.public_id
            }
          ]))
          if (count >= postPhotos.length) {
            setPostPhotos([]);
            setLoader(false);
            console.log(images);
          }
          count++;
        }).catch(error => {
          console.log(error);
          setLoader(false);
        });
    });
  }


  const handleClick = () => {
    axios.post("http://localhost:5050/api/v1/cloud", { me: images }).then(res => {
      console.log(res.data);
    }).catch(error => {
      console.log(error);
    });
  }


  return (
    <div className="container mx-auto p-10">
      {loader && <Preloader />}
      <div className="flex flex-col w-[600px] mx-auto items-center gap-2">
        <form>
          <input type="file" onChange={handlePostPhotoUpload} multiple />
        </form>
        <button onClick={handlePhotoUpload} className='btn bg-blue text-white' type='submit'>Submit</button>
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

        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  )
}

export default Upload;