import imageApi from 'api/imageApi';
import ImageUpload from 'features/ImageUploader/components/ImageUpload';
import ImageUploaded from 'features/ImageUploader/components/ImageUploaded';
import ImageUploading from 'features/ImageUploader/components/ImageUploading';
import React, { useState } from 'react';
import './MainPage.scss';

const MainPage = () => {
  const [progress, setProgress] = useState(0);
  const [imageUrl, setImageUrl] = useState('');

  const handleUploadImage = async (imageFile) => {
    const formData = new FormData();
    formData.append('image', imageFile);

    const options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let percent = Math.round((loaded * 100) / total);

        setProgress(percent);
      },
    };

    try {
      const response = await imageApi.addImage(formData, options);
      const { url } = response;

      setImageUrl(url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='image-uploader-main'>
      {!imageUrl && progress === 0 && (
        <ImageUpload onUploadImage={handleUploadImage} />
      )}

      {!imageUrl && progress > 0 && <ImageUploading />}

      {imageUrl && <ImageUploaded imageUrl={imageUrl} />}
    </div>
  );
};

export default MainPage;
