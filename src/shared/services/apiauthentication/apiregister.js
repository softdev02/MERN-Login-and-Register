import axios from "axios";
import apiurl from "../apiendpoint/apiendpoint";
const apisendotp=async(data)=>{
   var res=await axios.post(`${apiurl()}/api/apisendotp`,data);
   return res.data;
}
const apiregister=async(data)=>{
   var res=await axios.put(`${apiurl()}/api/apiregister`,data);
   return res.data;
}
export {apisendotp, apiregister};