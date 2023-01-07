import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '04c283e2b4msh760546bbccff46bp11b654jsn2156f725555e',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const FetchFromAPI = async (URL)=>{
    const {data} = await axios.get(`${BASE_URL}/${URL}`,options);
    return data;
}