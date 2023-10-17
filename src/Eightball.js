import React, { useState } from "react";

function Eightball({array}){
    const [object, setObject] = useState({msg:"Think of a question", color: "black"});
return (
    <div onClick={()=>setObject(array[Math.floor(Math.random()*(array.length-1))])} className="eight-ball" style={{backgroundColor: object.color}}>
       <h1 class="text">{object.msg}</h1>
    </div>
)

}

export default Eightball