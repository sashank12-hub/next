import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import NProgres from "nprogress";
import { useState } from "react";
import Connection from "./../databse/index";
import { useRouter } from "next/router";
import { signin, signout, useSession } from "../node_modules/next-auth/client";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, Elements } from "@stripe/react-stripe-js";
const Home = (props) => {
  // const router=useRouter();
  // router.events.on('s')
  const [form, setform] = useState({ username: "", password: "" });

  const fetchposts = async () => {
    const response = await fetch(
      "https://my-json-server.typicode.com/typicode/demo/posts"
    );
    const data = await response.json();
    return data;
  };
  const { data, error } = useSWR("posts", fetchposts);
  const handleformsubmit = async () => {
    const res = await fetch("/api/database", {
      method: "POST",
      body: JSON.stringify({ user: form }),
      headers: {
        "Content-Type": "application/json",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhc2hhbmsiLCJwYXNzd29yZCI6IjEyMzQ1Njc4IiwiaWF0IjoxNjM0ODA5NTU4fQ.KU8oI0axKdwGh3aBVIHEqNE02_pYw2vPcSRp5n2fHLs",
      },
    });
    // const res=await fetch("/api/database")
    const data = await res.json();
    console.log("data", data);
  };
  const handleformvaluechange = (event) => {
    setform({ ...form, [event.target.name]: event.target.value });
  };
  //const stripelib=
  return (
    <div>
      <div
        style={{
          width: "200px",
          height: "200px",
          boxShadow: "4px solid rgba(0,0,0,0.4)",
        }}
      >
        <Elements stripe={loadStripe("pK_test_VtKnn6vSdcZWSG2JWvEiWSqC")}>
          <CardElement />
        </Elements>
      </div>

      <input
        type="text"
        onChange={handleformvaluechange}
        value={form.username}
        name="username"
      />
      <input
        type="password"
        onChange={handleformvaluechange}
        value={form.password}
        name="password"
      />

      <button onClick={handleformsubmit}>Submit form</button>
      <h1> hello </h1>
      {/* <h2>{response.connection}</h2> */}

      <Image alt="dog" src={"/2.jpg"} width={"280"} height={"420"} />
    </div>
  );
};

export default Home;
