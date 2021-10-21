import { getSession } from "../../node_modules/next-auth/client";

export default async function handler(req, res) {
  const session = await getSession({ req: req });
  if (!session) {
    res.status(401).json({ error: "un authorised" });
  } else {
    res.status(200).json({ user: session });
  }
}
