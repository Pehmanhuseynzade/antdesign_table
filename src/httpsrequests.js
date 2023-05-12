import { BASE_URL } from "./base_URL.js";
import axios from "axios";

//get all orders
export const getAllOrders = async()=>{
    let globalData;
    await axios.get(`${BASE_URL}/orders`)
    .then(res=>{
        globalData = res.data
    })
    return globalData;
}