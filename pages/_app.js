import Navbar from "../components/navbar";
import { Provider } from "../node_modules/next-auth/client";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  
  return (
    <Provider session={pageProps.session}>
      <Navbar/>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
