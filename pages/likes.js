import {useState}from 'react'

function Likes(props) {
    
    const [state, setstate] = useState({
        error:{

        }
    })
    const handleLikes=async()=>{
        const res = await fetch("/api/likes")
        const data=await res.json()
        // if(data.error){
        //     
        //     const user={
        //         user:{
        //             name:"unauth"
        //         }
        //     }
        //     setstate(user)
        // }
        // 
        setstate(data)
       
    }
    return(<>
    <button onClick={
        handleLikes
    }>fetch</button>
    {
     !state.error &&   state && <h2>{state?.user.user.name} </h2>
    }
    {

    }
    
    
    </>)
}

export default Likes;

