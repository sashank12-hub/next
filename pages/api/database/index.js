import Connection from "../../../databse";
import User from '../../../databse/user.model'
Connection();

export default async function handler (req,res) {
    if(req.method==='POST'){
        let data=req.body.user
        
        let user=new User({...data})
        let response=await user.save()
       
        res.status(200).json(response)
        // user.save((err,data)=>{
        //     if(err){
        //         res.status(401).json({err})
        //     }
        //     else{
        //         res.status(200).json({data})
        //     }
           
        // })
    }
    else{
        const items=await User.find()
       
        res.status(200).json(items)
       
    }

    // res.status(200).json({"connection":"successful"})
    
}