import axios from 'axios';

const eCommerce_API = axios.create({
    baseURL:  "http://localhost:8080/Ecommerce", //main endpoint ie
    headers: {
        "Content-Type":"application/json"
    }


})
export default eCommerce_API;