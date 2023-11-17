import axios from "axios";
import apiurl from "../apiendpoint/apiendpoint";
import { gettoken } from "../Token/token";
const apigetallusers=async()=>{
   var res=await axios.get(`${apiurl()}/users/apigetallusers`,{ headers: {"Authorization" : `Bearer ${gettoken()}`}});
   return res.data;
}
export {apigetallusers};