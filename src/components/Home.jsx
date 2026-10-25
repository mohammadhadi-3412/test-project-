import {  useQuery } from '@tanstack/react-query';
import React from 'react';
import { Api } from '../Api';


export default function Home() {

     const {data : todo,isPending,isError,refetch} = useQuery({
        queryKey:["fetch"],
        queryFn :()=>Api(),

     })
     console.log(todo);  
     

     if(isPending){
        return <h2>data  is loading...</h2>
     }
  return (
    <>
  {todo.map((list)=>{
    return(
       <h3>{list.title}</h3> 
    )
  })}
    </>
  )
}
