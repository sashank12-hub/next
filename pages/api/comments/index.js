import {comments} from "../../../data/comments";

export default function handler(req, res) {
  if (req.method == "POST") {
    let new_comment = {
      id:  Date.now(),
      body:req.body.comment,
      postId: 1,
    };
    
    
    comments.push(new_comment);
    res.status(200).json(new_comment)
  }
  else  {
    res.status(200).json(comments)
}
  
}
