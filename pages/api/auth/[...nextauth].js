import NextAuth from "../../../node_modules/next-auth";
import Providers from "../../../node_modules/next-auth/providers";
require("dotenv").config();
export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId:process.env.GITID,
      clientSecret: process.env.GITSECRET
    }),
  ],
  // database:"mongodb+srv://sashank:sashankpassword@cluster0.ugbba.mongodb.net/next?retryWrites=true&w=majority",
  // session:{
  //   jwt:true
  // },
  // jwt:{
  //   secret:'asdfghjklpoiuytrewq',
  // }
});
