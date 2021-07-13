import axiosClient from './axiosClient';

const imageApi = {
  addImage: (payload, config) => {
    const url = '/upload';
    return axiosClient.post(url, payload, config);
  },
};

export default imageApi;
