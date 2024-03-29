import { useState } from "react"


export const Input = ( {inputData}: any ) => 
{

    const [inputValue, setInputValue] = useState('')

    const textHandler = (event: any) => setInputValue(event.target.value)
    
    return (

        <input value={inputData} onChange={textHandler}/>
        
    )
}
      
