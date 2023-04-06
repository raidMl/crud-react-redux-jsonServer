import React from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useGetUsersQuery ,useAddUserMutation,useDeleteUserMutation,useUpdateUserMutation} from '../redux/apiSlice';
const Admin = () => {
   
    
    const {data:users,isLoading,isSuccess,isError,error}=useGetUsersQuery()
    const[updateUser]=useUpdateUserMutation();
    const[deleteUser]=useDeleteUserMutation();
    const navigate=useNavigate()

    let content;
        if(isLoading){content= <p>Loading...</p>}
        if(isError){content=<p>{error}</p>}

        else if(isSuccess){
            
            // content=JSON.stringify(users)
           return(
            <div style={{"margin":"50px auto"}}><Table responsive="sm">

                       <thead>
                           <tr>
                               <th>#</th>
                               <th>name</th>
                               <th> role</th>
                               <th> faculty</th>
                               <th>action </th>
                               <th>degre</th>
                               <th>matricule</th>
                           </tr>
                       </thead>
                       <tbody>
                           {users.map(item => {
                               return (


                                   <tr key={item.id}>
                                       <td>{item.id}</td>
                                       <td>{item.name}</td>
                                       <td>{item.role}</td>
                                       <td>{item.faculty}</td>
                                       <td>
                                        <Button variant="outline-primary" className='m-2' size="sm"> show info  </Button>
                                        <Button variant="outline-success" size="sm"  onClick={()=>{navigate("/edit/",{state:{item}})}}>edit </Button>
                                        <Button variant="outline-danger" className='m-2' size="sm" onClick={()=>deleteUser({id:item.id})}> delete  </Button>


        
        </td>
                                       <td>{item.degre}</td>
                                       <td>{item.matricule}</td>
                                   </tr>);
                           })}
                       </tbody>
                   </Table></div>)}

        
      
}

export default Admin;
