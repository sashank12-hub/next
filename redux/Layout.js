import React from "react";
import { withRedux } from "./reduxconfig";

function Layout({ children }) {
  return <div>{children}</div>;
}

export default withRedux(Layout);

/*
You can use the above snippet
 at each page that requires a 
 connection to the redux store.
  But a better way to achieve this
   would be to wrapping Redux HOC with a
    common Layout component, which will a wrapper around all the pages.

We will be wrapping the Layout component 
in the _app.js file, which will be used across all the pages.
*/
