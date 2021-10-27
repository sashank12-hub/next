import cookie from "cookie";
export default function handler(req, res) {

  res.setHeader(
    "set-cookie",
    cookie.serialize("next-js-cookie", "sashankcookie", {
      httpOnly: true,
      path: "/",
      
      sameSite:"strict"
    })
  );
  res.status(200).json({ cookie: "is set" });
}
