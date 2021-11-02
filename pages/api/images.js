// export const config = {
//         api: { bodyParser: false }
//       }
const cloudinary=require('cloudinary').v2;

export default async function handler(req,res){
    cloudinary.config({
        cloud_name:process.env.CLOUDNAME,
        api_key:process.env.API_KEY,
        api_secret:process.env.API_SECRET,
        
    })
if(req.method=="POST")
    try{
        let imagedata=req.body.image
        if(imagedata){
            
            console.log("===================================================================")
            // console.log(imagedata)
            const uploadresponse=await cloudinary.uploader.upload(imagedata)
            //.upload(imagedata,{
                // upload_preset:"first"
            // })
            console.log("uploadresponse",)
            res.status(200).json({image:uploadresponse.url})
        }


    }
    catch(err){

    }
   
    

}
// import Image from '../../databse/image.model'
// // import upload from '../../databse/upload';

// import handler from "./database"

// // export default function handler(req,res){
// //     upload.single('avatar')
// //     console.log('came here')
// //     let img=new Image({name:req.body.name})
// //             if(req.file){
// //                 img.avatar=req.file.path
// //             }
// //     console.log("Image",img)
// // //     upload.single('avatar')
// // //     // if(req.method=="POST"){
// // //        
       
// //        res.status(200).json({img:"img"})
// // //    // }
  
// // // let avatar;
   
// //     // let img=new image({avatar:avatar})
    
// // }

// // import multer from 'multer'
// // export const config = {
// //     api: { bodyParser: false }
// //   }
// //   
//   export default async function handler(req, res) {
//       if(req.method=="POST"){
//           console.log("============================================================================")
//         console.log('req.body',req.file)
//       }
      
// // let ima =new Image({name:req.body.name})

// // ima.img=req.files[0].buffer
// //     try{
// //         const response=await ima.save()
// //         res.status(200).json({req:req.body})
// //     }
// //     catch(err){
// //         console.log(err).json({err})
// //         res.status(500)
// //     }
// //     await new Promise(resolve => {
// //       // you may use any other multer function
// //       const mw = multer().any()
  
// //       //use resolve() instead of next()
// //       mw(req, res, resolve)
// //     })
// //     console.log(req.files[0].buffer.toString('base64'))
// //    // data.toString('base64')
// //     // example response
// //     res.status(200).json({
// //       body: req.body,
// //       files:req.files[0].buffer.toString('base64')
// //     })
//   }
