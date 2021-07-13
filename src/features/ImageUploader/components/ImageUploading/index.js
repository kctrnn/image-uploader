import { LinearProgress } from '@material-ui/core';
import React from 'react';
import './ImageUploading.scss';

const ImageUploading = () => {
  return (
    <div className='image-uploading'>
      <h1 className='image-uploading-title'>Uploading...</h1>

      {/* <div className='progress'>
        <div
          className='progress-percent'
          style={{ width: `${progress}%` }}
        ></div>
      </div> */}

      <LinearProgress />
    </div>
  );
};

export default ImageUploading;
