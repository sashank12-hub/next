import {comments} from "../../../data/comments";

export default function handler(req,res) {
    if(req.method=='DELETE'){
        const id=req.body.id;
       
        const index=comments.findIndex(item=>item.id==id)
        comments.splice(index,1)
        res.status(200).json(comments)
    }
    else{
        const id=req.query.commentid;
      
        const index=comments.findIndex(item=>item.id==parseInt(id))
        res.status(200).json(comments[index])

    }
    
}