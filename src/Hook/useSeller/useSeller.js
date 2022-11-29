import { useEffect, useState } from "react"

const useSeller = email =>  {
    
    const [isSeller,setIsSeller] = useState(null);
    const [isSellerLoading,setIsSellerLoading] = useState(true);

    useEffect(()=> {
        if(email){
            fetch(`https://assignment12-server-beta.vercel.app/users/seller/${email}`,{

            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setIsSeller(data.isSeller)
                setIsSellerLoading(false)
            })

        }

    },[email])
    return [isSeller,isSellerLoading];
}

export default useSeller;