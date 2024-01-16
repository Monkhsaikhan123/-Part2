import React, { useEffect , useState} from 'react'
import axios from 'axios'

export default function AdminUser(){

    const [users, setUsers] = useState([])


    useEffect(() => {
      axios.get('http://localhost:3000/getUsers')
        .then(users => setUsers(users.data))
        .catch(err => console.log(err));
    }, []);
  
    return(
        <div>
            <h3>Welcome</h3>
            <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Desc</th>
              <th>Price</th>
              <th>Usertype</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(users=>{
                return(   
                <tr>
                  <td>{users.lname}</td>
                  <td>{users.fname}</td>
                  <td>{users.email}</td>
                  <td>{users.password}</td>
                  <td>{users.UserType}</td>
                </tr>
                )
                
              })
            }
          </tbody>
        </table>
        </div>
    )
}
