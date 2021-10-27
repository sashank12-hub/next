import cookie from "cookie";
export default function handler(req, res) {

  res.setHeader(
    "set-cookie",
    cookie.serialize("next-js-cookie", '', {
      httpOnly: true,
      path: "/",
      maxAge:(0),
      sameSite:"strict"
    })
  );
  res.status(200).json({ cookie: "is removed" });
}
