const axios = require('axios');

const callApi = async () => {
  try {
    const response = await axios.get('https://symfony-9z0y.onrender.com/activities/bulk');
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

// Gọi hàm
callApi();
