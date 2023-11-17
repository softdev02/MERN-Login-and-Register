import { lazy, Suspense } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import {Spinner} from "@nextui-org/spinner";
//private router
const Protected = lazy(() => import('../shared/components/AuthGuard/Protected'));
//routes
import Main from "../core/Main/Main";
//pages
const Login = lazy(() => import('../components/Login/Login'));
const Register = lazy(() => import('../components/Register/Register'));
const Dashboard = lazy(() => import('../components/Dashboard/Dashboard'));
const AppRouter=()=>{
  return(
    <>
  
    <BrowserRouter>
       <Suspense fallback={<div className="h-screen flex justify-center items-center bg-gray-50"><Spinner/></div>}>
         <Routes>
            <Route element={<Protected allowedRoles={['User','Admin']}><Main/></Protected>}>
              <Route path="/dashboard" element={<Protected allowedRoles={['User','Admin']}><Dashboard/></Protected>} />
              {/*<Route path="/users" element={<Protected allowedRoles={['User']}><Users/></Protected>} /> */}
            </Route>
            <Route path="/register" element={<Register/>} />
            <Route path="/" element={<Login/>} />
         </Routes> 
       </Suspense>
    </BrowserRouter>
    </>
  )
}
export default AppRouter;