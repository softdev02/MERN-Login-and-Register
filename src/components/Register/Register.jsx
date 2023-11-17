import { lazy, useState } from "react";
import { useNavigate } from "react-router-dom";
const Registerform = lazy(() => import('../../shared/components/forms/Registerform'));
const Otpform = lazy(() => import('../../shared/components/forms/Otpform'));
import { apisendotp,apiregister } from "../../shared/services/apiauthentication/apiregister";
import { useDisclosure } from "@nextui-org/react";
import toast from "react-hot-toast";
const Register=()=>{
   const [formdata,setFormdata]=useState({})
   const [otp, setOtp] = useState('');
   const [loading, setLoading] = useState(false);
   const {isOpen, onOpen, onClose} = useDisclosure();
   const navigate= useNavigate();
   const handlechange=(e)=>setFormdata({...formdata,...{[e.target.name]:e.target.value}})
   const handleregister=async (e)=>{
    e.preventDefault();
    console.log(formdata)
    setLoading(true)
    const res= await apisendotp(formdata)
    if(res.status=="OTP Sent"){
      toast.success(res.status)
      onOpen()
     }
     else if(res.status=="Already email exists"){
        toast.error(res.status)
     }
     else{
      toast.error("Try again later!")
     }
     setLoading(false)
   }
   const userregister=async(e)=>{
    e.preventDefault();
    var res=await apiregister({Email:formdata.Email,OTP:otp});
     if(res.status=="Sucessfully registered"){
      toast.success(res.status);
      navigate('/')
     }

     else{
      toast.error("Invalid OTP")
     }
    }
    return(
        <>
         <section className="min-h-screen flex  justify-center items-center">
           <Registerform loading={loading} handlechange={handlechange} handleregister={handleregister}/>
         </section>
         <Otpform isOpen={isOpen} onClose={onClose} otp={otp} setOtp={setOtp} userregister={userregister}/>
        </>
    )
}
export default Register