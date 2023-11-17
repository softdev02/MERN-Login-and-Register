
import { Spinner } from "@nextui-org/react"
import { Link } from "react-router-dom"
const Loginform=(props)=>{
    const {loading,handlechange,handlelogin}=props
    return(

        <div className="max-w-[85rem] mx-auto  px-4 lg:px-6 grow">
          <div className="flex justify-center">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign In
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handlelogin}>
               
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="Email" id="email" onChange={handlechange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="Password" id="password" onChange={handlechange} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                  </div>
              
               
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 flex items-center justify-center">
                   {loading&&<Spinner size="sm" className="mr-1" color="white"/>}  Sign in</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      new to application name? <Link to={'/register'} className="font-medium text-primary-600 hover:underline dark:text-primary-500">create new account</Link>
                  </p>
              </form>
          </div>
      </div>
          </div>
        </div>
       
    )
}
export default Loginform