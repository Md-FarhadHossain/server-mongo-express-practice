import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const ShowUsers = () => {
  const userData = useLoaderData();
  const [displayUsers, setDisplayUsers] = useState(userData)
  const handleDelete = user => {
    const agree = window.confirm(`your want to delete ${user._id}`)
    
    if(agree) {
      fetch(`http://localhost:5000/users/${user._id}`, {
        method: "DELETE"
      })
      .then(res => res.json())
      .then(data => {
        if(data.deletedCount > 0){
          const remainingUsers = displayUsers.filter(usr => usr._id !== user._id)
        setDisplayUsers(remainingUsers)
        console.log(data)
        }
      })
      console.log(agree)
    }
  }
  return (
    <div>
      <h1>user found: {displayUsers.length}</h1>

      <div>
        {displayUsers.map((user) => (
          <p key={user._id}>
            
            {user.name} - {user.email}
            <button onClick={() => handleDelete(user)}>X</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default ShowUsers;
