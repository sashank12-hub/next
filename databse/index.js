import mongoose from 'mongoose'


const Connection=()=>{
    if(mongoose.connections[0].readyState){
   console.log("already connected");
        return
    }
  mongoose.connect("mongodb+srv://sashank:sashankpassword@cluster0.ugbba.mongodb.net/next?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    mongoose.connection.on('connected',()=>{
   console.log('mongoose connected')
       
       
    })
    mongoose.connection.on('error',()=>{
     console.log('mongoose error')
      
    })
}

export default Connection;

