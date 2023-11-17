import { lazy, useState } from "react";
import { useNavigate } from "react-router-dom";
const Loginform = lazy(() => import('../../shared/components/forms/Loginform'));
import { apilogin } from "../../shared/services/apiauthentication/apilogin";
import { settoken } from "../../shared/services/Token/token";
import toast from "react-hot-toast";
const Login=()=>{
    const [formdata,setFormdata]=useState({})
    const [loading, setLoading] = useState(false);
    const navigate= useNavigate();
    const handlechange=(e)=>setFormdata({...formdata,...{[e.target.name]:e.target.value}})
    const handlelogin=async(e)=>{
        e.preventDefault();
        setLoading(true)
        var res=await apilogin(formdata);
         if(res.status=="Success"){
          settoken(res.token) 
          toast.success(res.status);
          navigate('/dashboard')
         }
         else{
          toast.error(res.status)
         }
         setLoading(false)
    }
    return(
        <>
        <section className="min-h-screen flex  justify-center items-center">
           <Loginform loading={loading} handlechange={handlechange} handlelogin={handlelogin}/>
        </section>
        </>
    )
}
export default Login