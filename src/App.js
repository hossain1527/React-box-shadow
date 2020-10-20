import React, {useState} from 'react';
import './App.css';

function App() {
  
  const [color,setColor] = useState("black")
  const [hLength,sethLength] = useState(10)
  const [vLength,setvLength] = useState(10)
  const [blur,setBlur] = useState(10)
  const [opacity,setOpacity] = useState(10)
  const [switchControl, setswitchControl] = useState("false")
  
  return (
    <div className="main-container">
        
            <div className="controls">
                
                <h4>React Box Shadow
                
                </h4><p>Toogle to start controling your box</p>

                <label>Horizontal length</label>
                <input type="range" min="-100" max="100" value={hLength} onChange={(event) => sethLength(event.target.value)} />

                <label>Verticle length</label>
                <input type="range" min="-100" max="100" value={vLength} onChange={(event) => setvLength(event.target.value)} />

                <label>Blur</label>
                <input type="range" min="0" max="100" value={blur} onChange={(event) => setBlur(event.target.value)} />

                <label>Opacity</label>
                <input type="range" min="0" max="100" value={opacity} onChange={(event) => setOpacity(event.target.value)} />
                
                <label>Color</label>
                <input type="color" value={color} onChange={(event) => setColor(event.target.value)} />
                  
                <div className="switch">
                    <label>
                    Outline
                    <input type="checkbox" checked={switchControl} onChange={() => setswitchControl(!switchControl)} />
                    <span className="lever"></span>
                    Inset
                  </label>
                </div>

            </div>

            <div className="output">
               <div className="outputBox" style = {{boxShadow:`${switchControl?"inset":""} ${hLength}px ${vLength}px ${blur}px ${opacity}px ${color}`}}>
                 <span>box-shadow: {hLength}px {vLength}px {blur}px {opacity}px {color}</span>  
               </div>
                
            </div>
        
    </div>

  )
   
} 

export default App
