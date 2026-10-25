import axios from "axios"

 export const Api = async()=>{
   return await axios.get("https://jsonplaceholder.typicode.com/todos")
    .then((response)=> response.data)
      
    
    }


     