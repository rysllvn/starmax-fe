import axios from 'axios';

const eCommerce_API = axios.create({
    baseURL:  "http://localhost:8080/ecommerce", //main endpoint
    headers: {
        "Content-Type":"application/json"
    }


})
export default eCommerce_API;