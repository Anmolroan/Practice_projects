import React from 'react'
import List from './List'
import data from "../db.json";
function Form() {
  const [form,setForm] =React.useState({});
  const [list,setList] =React.useState(data)
  const handleSubmit=(e)=>{
    e.preventDefault();
    
    setList([...list,form]);
}
  const handleChange=(e) => {
const {name,value} = e.target;
setForm({...form,[name]:value});


  }
  return (
    <div>
    

    <div className="form_container"> 
    
      <form onSubmit={handleSubmit}>
        <input type="Number" 
        placeholder="Id" 
        name = "id" 
       
        onChange={handleChange}/>
        <br/>

       <input type="text" 
        placeholder="Restarunt_name" 
        name = "Restarunt_name" 
       
        onChange={handleChange}/>
         <br/>
        <input type="text" 
        placeholder="dishes_name" 
        name = "dishes_name" 
       
        onChange={handleChange}/>
         <br/>
        
        <input type="Number" 
        placeholder="rating" 
        name = "rating" 
       
        onChange={handleChange}/>
         <br/>
        <input type="Number" 
        placeholder="reviews" 
        name = "reviews" 
       
        onChange={handleChange}/>
         <br/>
        <input type="Number" 
        placeholder="votes" 
        name = "votes" 
       
        onChange={handleChange}/>
         <br/>
        <input type="Number" 
        placeholder="Min_limit_of order" 
        name = "Min_limit_of order" 
       
        onChange={handleChange}/>
         <br/>
        <input type="Number" 
        placeholder="min_time_to cook" 
        name = "min_time_to cookr" 
       
        onChange={handleChange}/>
         <br/>
           <input type="text" 
        placeholder="payment_methods" 
        name = "payment_methods" 
       
        onChange={handleChange}/>
         <br/>
         <input type="url" 
        placeholder="image" 
        name = "image" 
       
        onChange={handleChange}/>
         <br/>
<input type="submit" value="Submit" />

        
        
      </form>
      </div>
      <div className="list_container">
    <List list={list}/>
    </div>
    </div>
  )
}

export default Form