const path=require('path')
const multer=require('multer')
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/')
    },
    filename:(req,file,cb)=>{let ext=path.extname(file.originalname);
        cb(null,Date.now()+ ext)

    }
})
var upload= multer.upload({storage:storage,fileFilter:(req,file,cb)=>{
    if(file.mimetype=="image/png"|| file.mimetype=="image/jpg"){
        cb(null,true)
    }
    else{
        console.log('jpg only')
         cb(null,false)
    }

}})
module.exports=upload;