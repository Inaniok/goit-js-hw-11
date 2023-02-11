import axios from "axios";

const URL = 'https://pixabay.com/api/';
const API_KEY = '33556347-34338037d24ce35911151359c';

export async function getImg(name, page = 1, per_page = 40) { 
  const res = axios.get(`${URL}?key=${API_KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${per_page}`);
  return await res;
    
}