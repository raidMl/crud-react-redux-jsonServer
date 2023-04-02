import React from 'react';
import { useGetUsersQuery ,useAddUserMutation,useDeleteUserMutation,useUpdateUserMutation} from '../redux/apiSlice';
const Admin = () => {
    const {data:users,isLoading,isSuccess,isError,error}=useGetUsersQuery()

    let content;
        if(isLoading){content= <p>Loading...</p>}
        else if(isSuccess){
            // content=JSON.stringify(users)
            content=users.map(item=>{
                return(
                    <div key={item.id}>
                    <h3>{item.id}</h3>
                    <h3>{item.name}</h3>

                    </div>
                )
            })
        
        }
        else if(isError){content=<p>{error}</p>}
        else {content="raid"}
        console.log(content)
         const[addUser]=useAddUserMutation()
        const[updateUser]=useUpdateUserMutation()
        const[deleteUser]=useDeleteUserMutation()
        // const handleSubmit=(e)=>{
        //     e.preventDefault();
        //     addUser()
        // }
       return(
         <div>
            
                  {/* {content.map(it => <div>{it.name}</div>)} */}

{content}
        </div>
    );
}

export default Admin;
