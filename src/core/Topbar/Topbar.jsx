import { useNavigate } from "react-router-dom"
import { getuserdetails,removetoken } from "../../shared/services/Token/token"
const Topbar=()=>{
    const navigate=useNavigate()
    const logout=()=>{
     removetoken()
     navigate('/')
    }
    return(
      <>

     <header>
      <nav>
      <div className="max-w-[85rem] mx-auto px-4 py-5">
               <div className="flex items-center justify-between flex-wrap">
                 <div>
                   <h1 className="text-sky-500 text-xl font-bold">Logo / Name</h1>
                 </div>
                 <div className="flex gap-4">
                 
                   <a >{getuserdetails()?.Name}</a>
                   <a onClick={logout} className="cursor-pointer">Logout</a>
                 </div>

               </div>
            </div>
      </nav>
     </header>
      </>
    )
  }
  export default Topbar