import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import Image from '../../../../assets/images/image.svg';
import './ImageUpload.scss';

const ImageUpload = ({ onUploadImage }) => {
  const fileInput = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleChange = () => {
    if (fileInput.current.files && fileInput.current.files[0]) {
      const imageFile = fileInput.current.files[0];

      onUploadImage && onUploadImage(imageFile);
    }
  };

  const handleDragIn = () => {
    setIsDragging(true);
  };

  const handleDragOut = () => {
    setIsDragging(false);
  };

  const handleDrag = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const imageFile = e.dataTransfer.files[0];

      onUploadImage && onUploadImage(imageFile);
    }
  };

  return (
    <div className='image-upload'>
      <h1 className='image-upload-title'>Upload your image</h1>
      <p className='image-upload-subtitle'>File should be Jpeg, Png,...</p>

      <div
        className={
          !isDragging ? 'image-upload-inner' : 'image-upload-inner dragging'
        }
        onDragOver={handleDrag}
        onDragEnter={handleDragIn}
        onDragLeave={handleDragOut}
        onDrop={handleDrop}
      >
        <img src={Image} alt='' />
        <p>Drag & Drop your image here</p>
      </div>

      <p className='image-upload-or'>Or</p>

      <input type='file' ref={fileInput} onChange={handleChange} hidden />

      <button
        type='button'
        className='image-upload-choose'
        onClick={() => fileInput.current.click()}
      >
        Choose a file
      </button>
    </div>
  );
};

ImageUpload.propTypes = {
  onUploadImage: PropTypes.func,
};

ImageUpload.defaultProps = {
  onUploadImage: null,
};

export default ImageUpload;
