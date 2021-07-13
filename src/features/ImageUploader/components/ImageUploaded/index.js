import { makeStyles } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import './ImageUploaded.scss';

const useStyles = makeStyles(() => ({
  checkCircleIcon: {
    color: '#219653',
    fontSize: '3.5rem',
  },
}));

const ImageUploaded = ({ imageUrl }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const handleCopyLinkClick = () => {
    navigator.clipboard.writeText(imageUrl);
    enqueueSnackbar('Link has been copied 🚀', { variant: 'success' });
  };

  return (
    <div className='image-uploaded'>
      <CheckCircleIcon className={classes.checkCircleIcon} />

      <h1 className='image-uploaded-title'>Uploaded Successfully!</h1>

      <img src={imageUrl} alt='' />

      <div className='image-uploaded-link'>
        <a href={imageUrl} target='_blank' rel='noreferrer'>
          {imageUrl}
        </a>
        <button type='button' onClick={handleCopyLinkClick}>
          Copy link
        </button>
      </div>
    </div>
  );
};

ImageUploaded.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default ImageUploaded;
