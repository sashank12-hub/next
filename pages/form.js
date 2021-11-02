import { useState } from "react";
import axios from "axios";
function Form(params) {
  const [state, setstate] = useState(null);
 
 
  return (
    <>
     <form method="post" action="/api/fileupload" encType="multipart/form-data">
        <input
          name="logo"
          type="file"
          onChange={async(e) => {
            console.log(e.target.files[0]);
            
            let fileReader = new FileReader(); 
           
             fileReader.readAsDataURL(e.target.files[0]); 
            fileReader.onload = function() {
                setstate(e.target.files[0])
              alert(fileReader.result);
            }; 
            fileReader.onerror = function() {
              alert(fileReader.error);
          }
       
        
        }
        
        
        }
        />
        {/* <input name="logo" type="file" /> */}
        { <button type="submit"
        // onClick={(e)=>e.preventDefault()}
       /* onClick={async()=>{
            axios.post("/api/fileupload",state,{
                headers:{
                           "encType":"multipart/form-data"
                        }
            })
            // let res=await fetch("/api/fileupload",{
            //     method:"post",
            //     data:state,
            //     headers:{
            //        "encType":"multipart/form-data"
            //     },
                
            // })
        }}*/
        >button</button> }
      {/* {state &&  <img src={state} alt="data"/>} */}
      </form>
    </>
  );
}

export default Form;
