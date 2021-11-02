// import nextConnect from 'next-connect';
// import multer from 'multer';

// const upload = multer({
//   storage: multer.diskStorage({ 
//     destination: './public/uploads',
//     filename: (req, file, cb) => cb(null, file.originalname),
//   }),
// });

// const apiRoute = nextConnect({
//   onError(error, req, res) {
//     res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
//   },
//   onNoMatch(req, res) {
//     res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
//   },
// });

// apiRoute.use(upload.array('theFiles'));

// apiRoute.post((req, res) => {
//   res.status(200).json({ data: 'success' });
// });

// export default apiRoute;

// export const config = {
//   api: {
//     bodyParser: false, // Disallow body parsing, consume as stream
//   },
// };


import middleware from '../middleware/middleware'
import nextConnect from 'next-connect'

const handler = nextConnect()
handler.use(middleware)

handler.post(async (req, res) => {
// let paths;
// paths=req.files.logo.map(item=>item.path)
//   console.log(paths)
console.log(req.files)
 res.status(200).redirect("/likes")
 //.json({paths:paths})
})

export const config = {
  api: {
    bodyParser: false
  }
}

export default handler