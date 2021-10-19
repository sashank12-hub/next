import Link from "next/link"
function Comments(props) {
  
  return (
    <>
      <h3>hfhfhjgj</h3>
      {props?.comments?.map((item) => {
        return (
          <Link key={item.id} href={`/comments/${item.id}`} passHref>
              <a>
            <p>{item.body}</p>
            <p>{item.id}</p>
            </a>
          </Link>
        );
      })}
    </>
  );
}

export default Comments;
// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps = async (context) => {
  
  const response = await fetch(
    "https://my-json-server.typicode.com/typicode/demo/comments"
  );
  const data = await response.json();

  return {
    props: {
      comments: data,
    },
  };
};
