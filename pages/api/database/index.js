import Connection from "../../../databse";
import User from "../../../databse/user.model";
import jwt from "jsonwebtoken";
Connection();

export default async function handler(req, res) {
  
  if (req.method === "POST") {
    try {
      // console.log(req.body)
      const authorised = jwt.verify(
        req.headers.authorization.split("Bearer ")[1],
        process.env.KEY
      );
          res.c
      res.status(200).json({ authorised });
    } catch (err) {
      res.status(401).json({err});
    }

   // console.log("authorised", authorised);
    //    console.log(req.headers.authorization.split("Bearer ")[1])
    // res.send(200).json(req.headers)
  }
  //   if (req.method === "POST") {
  //     let data = req.body.user;

  //     let user = new User({ ...data });
  //     const token = jwt.sign(
  //       {
  //         username: user.username,
  //         password: user.password,
  //       },
  //       'vgjdwhyjkfcadhbkjvadb,hkj'
  //     );
  //     console.log(token);
  //     res.status(200).json({token:token})

  //     //     let response=await user.save()
  //     //    console.log("response",response)
  //     //     res.status(200).json(response)
  //     // user.save((err,data)=>{
  //     //     if(err){
  //     //         res.status(401).json({err})
  //     //     }
  //     //     else{
  //     //         res.status(200).json({data})
  //     //     }

  //     // })
  //   }
  else {
    const items = await User.find();

    res.status(200).json(items);
  }

  // res.status(200).json({"connection":"successful"})
}
