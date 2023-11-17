import { lazy } from "react";
import { useQuery } from "react-query";
import { apigetallusers } from "../../shared/services/apiusers/apiusers";
const Userstable = lazy(() => import('../../shared/components/tables/Userstable'));
const Dashboard=()=>{
    const getallusers=async()=>{
     var res= await apigetallusers()
     return res;
    }
    const {data: users,error,isLoading} = useQuery("getallusers", getallusers);
    if (isLoading) return <div>Fetching posts...</div>;
    if (error) return <div>An error occurred: {error.message}</div>;
    return(
        <>
        <section className="min-h-screen py-10">
           <Userstable users={users}/>
        </section>
        </>
    )
}
export default Dashboard