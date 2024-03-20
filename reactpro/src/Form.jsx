import { useState } from "react"

export default function Form(){
    const [name,setName]=useState({firstname:"",lastname:""});
    
    return (
        <div>
            <form>
                {name.firstname}{name.lastname}
                <input onChange={(e)=>setName({...name, firstname:e.target.values})} type="text" value={name.firstname}/>
                <input onChange={(e)=>setName({...name, lastname:e.target.values})} type="text" value={name.lastname}/>
                <button>add</button>
            </form>
        </div>
    )
}