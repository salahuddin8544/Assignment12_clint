import { useEffect, useState } from "react"

// its make a client site token and verify token from server to access user
const useToken = (email) => {
    const [token,setToken] = useState('')
    console.log('token email',email);
    useEffect( ()=> {
      if(email){
          
        fetch(`http://localhost:5000/jwt?email=${email}`)
        .then(res =>  res.json())
         .then(data => {
            if(data.accessToken){
                localStorage.setItem('accessToken', data.accessToken)
                setToken(data.accessToken)
            }
         })
      }
    },[email]);
    return [token];

}

export default useToken ;
