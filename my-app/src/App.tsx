
import { useEffect, useState } from 'react'
import './App.css'

var mouseActive = false


/*class Circle
{
  constructor(){
    this.isclicked = false
  }  

  function render()
  {
    return <div className='Circle' onMouseOver={(e) =>  { if(mouseActive == true) {
    
    e.currentTarget.style.backgroundColor = "black"}} }></div>

  
  }

}*/


function Text()
{
  return <input></input>
}
function WhiteCircle()
{
  return <div className='Circle' onMouseOver={(e) =>  { if(mouseActive == true) {
    
  e.currentTarget.style.backgroundColor = "black"}} }></div>
}


function WhiteBoard()
{
  
  return <div id='WhiteBoard'>

    {Array.from({ length: 28 }).map((_, row) =>
        Array.from({ length: 28 }).map((_, col) => (
          <WhiteCircle key={`${row}-${col}`} />
        ))
      )}

    
     </div> 

 
}

function Click(value : boolean)
{
  console.log('abur')
  mouseActive = value
}

function GetArray(array2 : any )
{
  
  for (let i = 0; i < array2.length; i++) {
    
   console.log(array2[i]);
}
}
function App() {

  useEffect(() => {
    
    
    document.body.addEventListener("mousedown",() => Click(true))
    document.body.addEventListener("mouseup",() => Click(false))

  
  })

  return (
    <>
      
      <h1>aa</h1>
      <Text></Text>
      <WhiteBoard></WhiteBoard>
      <button onClick={(e) => { GetArray(document.getElementById("WhiteBoard")?.children)}}>Enter</button >
      
    </>
  )
}

export default App
