import React, {useState, useEffect} from 'react';
import unsplash from '../api/unsplash';
import ImageCard from './ImageCard';


const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await unsplash.get('/users/paramo45/photos');

      setPhotos(response.data);
    })();
  },[])

  return(
  <div className='image-list'>
    {photos.map((photo) => {
    return <ImageCard key={photo.id} images={photo} modalImage={photo.urls.full} />
  })}
  </div>
  )
}

export default Gallery;