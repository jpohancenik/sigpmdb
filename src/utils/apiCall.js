import axios from 'axios';

const apiCall = async (url, options = {}) => {
  try {
    return await axios(url, options);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('API call error', error);
    return error.response ? error.response : error;
  }
};

export default apiCall;
