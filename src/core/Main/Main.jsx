import { Outlet } from "react-router-dom"
import Sidebar from "../Sidebar/Sidebar"
import Topbar from "../Topbar/Topbar"
const Main=()=>{
  return(
    <>
     <Topbar/>
     <Sidebar/>
     <main>
        <Outlet/>
     </main>
    </>
  )
}
export default Main