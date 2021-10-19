import { useRouter } from "next/dist/client/router";
import { comments } from "../../data/comments";

function comment({ comment: { id, body, postId } }) {
  const router = useRouter();
  if (router.isFallback) {
    return <h2>...Loading</h2>;
  }
  return (
    <>
      <h2>{id}</h2>
      <h2>{body}</h2>
    </>
  );
}
export default comment;

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths = async () => {
  // const { data } = await  // your fetch function here

  return {
    paths: [
      {
        params: {
          commentid: '1',
        },
      },
      {
        params: {
          commentid: '2',
        },
      },
    ],
    fallback: true,
  };
};
// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps = async (context) => {
  console.log(context.params);
  const response = await comments.find(
    (item) => (item.id = context.params.commentid)
  );

  return {
    props: {
      comment: response,
    },
  };
};
