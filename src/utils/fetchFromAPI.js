import axios from 'axios';

const BASE_URL = "https://internship-service.onrender.com/videos"

const options = {
    method: 'GET',
    params: {
        page:'0'
    },
  };


export const fetchFromAPI = async(pgNo) => {
    const {data} = await axios.get(`${BASE_URL}?page=${pgNo}`, options);
    return data.data;
}