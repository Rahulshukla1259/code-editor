import React, { useEffect, useState } from "react";
import {Acecomponent} from "./Ace";





export default function Header() {



  const [theme,setTheme]=useState("monokai")

  const [themeOption,setoption]=useState("Monokai")

  const [lang,setLang]=useState("javascript")


  const [fontSize,setFontsize ]=useState(16)
 

 


   
  return (<>

<div class="code-pannel">
      <h4 style={{fontWeight:"bold"}}>Codex</h4>
      <div class="button_pannel">
        <div class="language_name">
          <div class="w3-dropdown-hover">
            <button class="w3-button lang_button">{lang==="javascript"?"Javascript":lang.charAt(0).toUpperCase()+lang.slice(1)}</button>
            <div class="w3-dropdown-content w3-bar-block lang_content">
              <a href="#" onClick={()=>{setLang("javascript")}} class="w3-bar-item w3-button">JavaScript</a>
              <a href="#" onClick={()=>{setLang("python")}} class="w3-bar-item w3-button">Python</a>
              <a href="#" onClick={()=>{setLang("c++")}} class="w3-bar-item w3-button">C++</a>
              <a href="#" onClick={()=>{setLang("r")}} class="w3-bar-item w3-button">R</a>
              <a href="#" onClick={()=>{setLang("c")}} class="w3-bar-item w3-button">C</a>
              <a href="#" onClick={()=>{setLang("java")}} class="w3-bar-item w3-button">Java</a>
              <a href="#" onClick={()=>{setLang("c#")}} class="w3-bar-item w3-button">C#</a>
            </div>
          </div>
        </div>
        <div className="font_size">
            <div className="w3-dropdown-hover">
              <button className="w3-button font">{fontSize}</button>
              <div class="w3-dropdown-content w3-bar-block font_content ">
              <a href="#" onClick={()=>{setFontsize(15)}} className="w3-bar-item w3-button">15</a>
                <a href="#" onClick={()=>{setFontsize(17)}} className="w3-bar-item w3-button">17</a>
                <a href="#" onClick={()=>{setFontsize(18)}} className="w3-bar-item w3-button">18</a>
                <a href="#" onClick={()=>{setFontsize(19)}} className="w3-bar-item w3-button">19</a>
                <a href="#" onClick={()=>{setFontsize(20)}} className="w3-bar-item w3-button">20</a>
                <a href="#" onClick={()=>{setFontsize(21)}} className="w3-bar-item w3-button">21</a>
               
              </div>
            </div>
        </div>
        <div class="theme">
          <div class="w3-dropdown-hover">
            <button class="w3-button theme_button">{theme==="monokai"?"Monokai":themeOption}</button>
            <div class="w3-dropdown-content w3-bar-block theme_name">
              <a onClick={()=>{setTheme(document.querySelector(".theme_name").children[0].textContent.toLowerCase());setoption("Monokai")}} href="#" class="w3-bar-item w3-button">Monokai</a>
              <a onClick={()=>{setTheme(document.querySelector(".theme_name").children[1].textContent.toLowerCase());setoption("Xcode")}} href="#" class="w3-bar-item w3-button">Xcode</a>
              <a onClick={()=>{setTheme(document.querySelector(".theme_name").children[2].textContent.toLowerCase());setoption("Dracula")}} href="#" class="w3-bar-item w3-button">Dracula</a>
              <a onClick={()=>{setTheme("solarized_light");setoption("Solarized Light")}} href="#" class="w3-bar-item w3-button">Solarized Light</a>
              <a onClick={()=>{setTheme(document.querySelector(".theme_name").children[4].textContent.toLowerCase());setoption("Twilight")}} href="#" class="w3-bar-item w3-button">Twilight</a>
              <a onClick={()=>{setTheme("solarized_dark"); setoption("Solarized Dark")}} href="#" class="w3-bar-item w3-button">Solarized Dark</a>
            </div>
          </div>
        </div>
        
      </div>
      <div id="editor">
      <Acecomponent theme={theme} lang={lang} fontSize={fontSize}/>
      </div>
      
    </div>

  </>);
}
