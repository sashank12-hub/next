import React from 'react'
import Link from "next/link";
import * as styles from "../styles/Navbar.module.css"
import { signIn, signOut, useSession } from "../node_modules/next-auth/client";
import Router from 'next/router'

import {useRouter} from 'next/router'
import NProgress from 'nprogress';
function Navbar() {
    const [session, loading] = useSession();
    //const router=useRouter();
    Router.events.on('routeChangeStart',()=>NProgress.start())
    Router.events.on('routeChangeComplete',()=>NProgress.done());
  
    return (
        <div>
        <nav className={styles.navbar}>
             <Link href="/posts">
        <a>First</a>
      </Link>
      <Link href="/likes">
        <a>likes</a>
      </Link>
      <Link href="/comments">
        <a>comments</a>
      </Link>
      {
        !session && <Link href="/api/signin">
        <a
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
        >
          signin
        </a>
      </Link>
      }
      {
        session && <Link href="/api/signout">
        <a
          onClick={(e) => {
            e.preventDefault();
            signOut();
          }}
        >
          signout
        </a>
      </Link>
      }
     
        </nav>
        </div>
    )
}

export default Navbar
