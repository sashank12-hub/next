function Cookiestest(props) {
  return (
    <div>
    
      <h2> {props.cookie }</h2>
      <button
        onClick={async () => {
          const res = await fetch("api/cookie-in");
          const data = await res.json();
          console.log(data);
        }}
      >
        login
      </button>
      <button
        onClick={async () => {
          const res = await fetch("api/cookie-out");
          const data = await res.json();
          console.log(data);
        }}
      >
        logout
      </button>
    </div>
  );
}

export default Cookiestest;

export const getServerSideProps = async (context) => {
  const { req, res } = context;

  console.log(req.cookies);
  if (req.cookies["next-js-cookie"]) {
    return {
      props: {
        cookie: req.cookies["next-js-cookie"],
      },
    };
  }
  return {
    props: {
        cookie: ''
    },
  };
};
// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
// export const getServerSideProps = async (ctx) => {
//     const { data } = await  // your fetch function here

//     return {
//         props: {

//         }
//     }
// }
