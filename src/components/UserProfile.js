import React from 'react'

function UserProfile({ user, setUser }) {

    const Logout = ()=>{
        setUser({name:"", email:""})
    
      }

    return (
        <div className='userProfileContainer'>
            <h1>Welcome {user.name} </h1> 
       
            <button className='logoutBtn' onClick={Logout}>Logout</button>

        </div>
    )
}

export default UserProfile