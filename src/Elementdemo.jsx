import React from "react"
function Elementdemo()
{
    const demo =() => {
        alert("Welcome")
    }
    const printData =(event) =>(
        console.log(event.target.value)
    )
    return (
        <>
            <input type='button' onClick={demo} value="Clikme"/>
            <input type='button' onClick={( )=> alert("Inline")}  value="Inline"/>
            <input type='button' name="btn1" value="btn1" onClick={printData}/>
            Text1<input type="text" name="text1" onChange={printData}/>
            Text2<input type="text" name="text2" onChange={printData}/>
        </>
    )
}

export default Elementdemo