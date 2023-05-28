import axios from 'axios';

const BASE_URL = "https://internship-service.onrender.com/videos"

const options = {
    method: 'GET',
    params: {
        page:'0'
    },
  };


export const fetchFromAPI = async() => {
    const {data} = await axios.get(`${BASE_URL}`, options);
    return data.data;
}