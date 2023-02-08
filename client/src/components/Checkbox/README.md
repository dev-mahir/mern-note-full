##Method 1:
const [postPhotos, setPostPhotos] = useState([]);
const handlePostPhotoUpload = (e) => {
const post_images = [];
for (let i = 0; i < e.target.files.length; i++) {
post_images.push(e.target.files[i]);
}
setPostPhotos(post_images);
}
