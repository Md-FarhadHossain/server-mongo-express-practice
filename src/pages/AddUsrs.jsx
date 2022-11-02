import React from 'react'

const AddUsrs = () => {
    const handleForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const result = {name: name, email: email}
    
        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(result)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    
        console.log(result)
      }
    
    
      return (
        <div className="App">
          <h1>Add users to database:</h1>
    
          <form onSubmit={handleForm}>
            <input type="text" name='name' placeholder='name' /><br />
            <input type="email" name="email" placeholder='email' /><br />
            <button>Add Users</button>
          </form>
    
        </div>
      );
}

export default AddUsrs