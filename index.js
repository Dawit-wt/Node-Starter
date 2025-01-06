const axios = require('axios');

const fetchData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log('Fetched Data:', response.data);
  } catch (error) {
    console.error('Error :', error.message);
  }
};

fetchData();
