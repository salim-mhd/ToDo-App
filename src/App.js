import './App.css';
import { useState } from 'react';
function App() {
  const [toDos,setTodos]=useState([])
  const [toDo,setTodo]=useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>{
          if(toDo.length===0){
            alert('🖊️   Please Enter Somthing  !!!')
          }else{
            setTodos([...toDos,{id:Date.now(),text: toDo,status:false}])
            setTodo('')
          }
        }} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        { toDos.map((obj,index)=>{
          return(
            <div key={index} className="todo">
            <div className="left">
              <input onChange={(e)=>{
                setTodos(toDos.filter(obj2=>{
                  if(obj2.id===obj.id){
                    obj2.status=e.target.checked
                  }
                  return obj2
                }))
              }} value={obj.status} type="checkbox" name="" id={obj.id} />
              <p>{obj.text}</p>
            </div>
            {/* deletion */}
            <div className="right">
              <i onClick={()=>setTodos(toDos.filter((e)=>
                e.id!==obj.id
              ))} className="fas fa-times"></i>
            </div>
          </div>
          )
        })
        }
        {toDos.map((obj)=>{
          if(obj.status){
            return(<h1>{obj.text}</h1>)
          }
          return null
        })}
      </div>
    </div>
  );
}

export default App;
