import React, { useState } from 'react'
import Card from './Component/Card'

function App() {

 const info = [
    {name: 'Vijay',profession: 'Tech Support',image: 'https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',friends: false,},
    {name: 'Vinay',profession: 'Preparation',image: 'https://plus.unsplash.com/premium_photo-1689747698547-271d2d553cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',friends: false,},
    {name: 'Vikas',profession: 'Entrepreneur',image: 'https://plus.unsplash.com/premium_photo-1689977871600-e755257fb5f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',friends: false,},
    {name: 'Vivek',profession: 'MR',image: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',friends: false,}
    
 ]

 const [data,setData]= useState(info)
 const friendRequest = (cardindex)=>{
   setData((prev)=>{
     return prev.map((item,index)=>{
       if(index === cardindex){
        return {...item, friends: !item.friends}
       }
       return item;
     })
   })
 }
 
  return (
    <>
    <div className='h-screen flex items-center justify-center gap-10 bg-slate-300'>
        {data.map((item, index)=>(
            <Card key={index} values={item} handleClick={friendRequest} index={index}/>
        ))}
    </div>
    </>
  )
}

export default App