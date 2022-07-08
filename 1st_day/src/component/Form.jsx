import React ,{useState}from 'react'

function Form() {
    const [obj,setObj]= useState({
    });
    const handleAdd =(e)=>{
        const {name,value}=e.target;
        obj[name]=value;
        setObj(obj)
    }
    const handleSubmit=(e) => {
        e.preventDefault();
        console.log(obj)
    }
  return (
    <div>
        <form onSubmit ={handleSubmit}>
            <input type="text" placeholder="name" name="name" onChange={handleAdd}></input>
            <input type="text" placeholder="name" name="age" onChange={handleAdd}></input>
            <input type="text" placeholder="name" name="work" onChange={handleAdd}></input>
            <input type="submit"/>
        </form>
    </div>
  )
}

export default Form