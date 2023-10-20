import React, { useState } from 'react';
import AceEditor from 'react-ace';
import Terminal from './Terminal';



function Ace(props) {
  var [code, setCode] = useState(''); 

  const[readOnly,setreadOnly]=useState(false)

  const [saveText,setsaveText]=useState("Save")

  const [ctext,setctext]=useState("Copy")

  const [result,setresult]=useState("")
 
 //saving the code 
  let save = function (){

    localStorage.setItem("code",code===""?localStorage.getItem("code"):code)

    setsaveText("Saved")
  }
  // copying the code 
  let copy = function(){

    navigator.clipboard.writeText(code===""?localStorage.getItem("code"):code)

    setctext("Copied!")

  }
 //handling mouse leave event
  let handleLeave = function (){

       setsaveText("Save")

       setctext("Copy")
  }

   let resultArr=[];

  //evaluating js code to show result in terminal
  let evaluate = function(){
     try{
     
      let result =eval(code===""?localStorage.getItem("code"):code)
     

      resultArr.push(result)
        

     } catch(err){

        resultArr.push(err.message)
     }

    
    
    setresult(...resultArr)
    
  }





  


 
  
   
  return (
    <div>
      <>
      <div class="buttons">
          <button class="lock_btn" onClick={()=>{readOnly==false?setreadOnly(true):setreadOnly(false)}}>{readOnly==false?"Lock":"Locked"}</button>
          <button onMouseLeave={handleLeave} class="save" onClick={save}>{saveText}</button>
          <button onMouseLeave={handleLeave} class="copy"onClick={copy}>{ctext}</button>
        </div>
      </>
      <AceEditor
        mode={props.lang}
        theme={props.theme}
        name="code-editor"
        width="100%"
        height="70vh"
        fontSize={props.fontSize}
        showPrintMargin={false}
        showGutter={true}
        highlightActiveLine={true}
        onChange={(newCode) => {setCode(newCode)}}
        value={code==""?localStorage.getItem("code"):code}
        UseSoftTabs={true}
        UseWorker={true}
        tabSize={5}
        readOnly={readOnly}
      />
   
      <button onClick={evaluate} className='run'>Run</button>
      <Terminal result={result}/>
    </div>
  );
}

export const Acecomponent=Ace;




