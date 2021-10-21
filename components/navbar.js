import React from 'react'
import Link from "next/link";
import * as styles from "../styles/Navbar.module.css"
import { signIn, signOut, useSession } from "../node_modules/next-auth/client";
function Navbar() {
    const [session, loading] = useSession();
  
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
