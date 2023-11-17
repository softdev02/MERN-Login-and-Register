
const Userstable=(props)=>{
    const {users}=props
    return(

        <div className="max-w-[85rem] mx-auto  px-4 lg:px-6 grow">
         <div className="grid grid-cols-1">
          <div>
             <table>
                <thead>
                    <tr>
                    <th>S.NO</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                  {users?.map((item,index)=>(
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{item.Name}</td>
                      <td>{item.Email}</td>
                      <td>{item.Role}</td>
                      <td>{item.Status}</td>
                    </tr>
                  ))}  
                 
                </tbody>
             </table>
          </div>
         </div>
        </div>
       
    )
}
export default Userstable