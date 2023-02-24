# 🤚 Image uploader
View live demo: https://image-uploader-kctrnn.netlify.app

> User stories:
- I can drag and drop an image to upload it
- I can choose to select an image from my folder
- I can see a loader when uploading
- I can choose to copy to the clipboard
- When the image is uploaded, I can see the image and copy it


## 🏠 Built With
### Front end
- [React](https://reactjs.org/)
- [Material UI](https://material-ui.com/)
- [Sass](https://sass-lang.com/)

### Back end
- [Express.js](https://expressjs.com/)
- [Cloudinary](https://cloudinary.com/)
- [Multer](https://www.npmjs.com/package/multer)

## 🚀 API Guide
- API_URL: `https://api-kctrnn.herokuapp.com`

### To upload a image

```sh
POST /upload
```

Example:
```js
  const formData = new FormData();
  formData.append('image', imageFile);
```

## ⛩️ How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/kctrnn/image-uploader

# Run frontend
$ cd front-end

# Install dependencies
$ npm install

# Run the app
$ npm start
```
