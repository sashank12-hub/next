import image from "next/image";
import { useState } from "react";
function Image() {
  const [form, setform] = useState();
  const [preview, setpreview] = useState(null)
  const [source, setsource] = useState(null)
const handleChange=(e)=>{
const  file=e.target.files[0];
previewfile(file)
}
const previewfile=(file)=>{
  let reader=new FileReader()
  reader.readAsDataURL(file);
  reader.onloadend=()=>setpreview(reader.result)

}
const handlesubmit=(e)=>{
  e.preventDefault();
  console.log(typeof(preview))
  upload(preview)
}
const upload=async(base64Image)=>{

//const bytes= new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, 0, 5, 0, 0, 0, 5, 8, 6, 0, 0, 0, 141, 111, 38, 229, 0, 0, 0, 28, 73, 68, 65, 84, 8, 215, 99, 248, 255, 255, 63, 195, 127, 6, 32, 5, 195, 32, 18, 132, 208, 49, 241, 130, 88, 205, 4, 0, 14, 245, 53, 203, 209, 142, 14, 31, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130]);


 // console.log(base64Image)
  const buff = new  Buffer.from(base64Image, 'base64');
// // //  console.log(buff)
 let bytes = new Uint8Array(buff);
 var blob = new Blob([bytes], {type: 'image/bmp'});
 
setsource(URL.createObjectURL(blob))
}
  return (
    <>
     <form>
       <input type="file" name="image" onChange={handleChange} />
       <button type="submit" onClick={handlesubmit}>submit</button>
     </form>
    
     {preview && <img src={preview} alt="choosen"/> }
     <h2>seperate</h2>
     {source && <img src={source} alt="choosen"/> }
     
    </>
  );
}
export default Image;
