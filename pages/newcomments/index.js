import { useState } from "react";
import Link from "next/link"
function Comments() {
  const [getcomments, setcomments] = useState([]);
  const [newComment, setnewComment] = useState("");
  const handlebuttonclick = async () => {
    const comments = await fetch("/api/comments");
    const data = await comments.json();

    setcomments(data);
  };

  const postcomment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment: newComment }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    handlebuttonclick();
    setnewComment("");
  };
  const handledelete = async (id) => {
    const response = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
      body: JSON.stringify({id:id}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    handlebuttonclick();
  };
  return (
    <>
      <input
        type="text"
        value={newComment}
        onChange={(e) => {
          setnewComment(e.target.value);
        }}
      />
      <button onClick={handlebuttonclick}>Load comments</button>
      <button onClick={postcomment}>submit</button>

      {getcomments.map((item) => {
        return (
          <div key={item.id}>
            <Link href={`/newcomments/${item.id}`}>
              <a>{item.body}</a>
            </Link>
            <button onClick={(item) => handledelete(item.id)}>delete</button>
          </div>
        );
      })}
    </>
  );
}

export default Comments;
