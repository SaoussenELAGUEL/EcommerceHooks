import React, { useState, useEffect } from 'react'
import MediaCard from './MediaCard'
import axios from 'axios'
import { fetchCategories } from '../../services/categoriesService'
const Listcategoriescard = () => {
   const [categories,setCategories]=useState([])
    useEffect(()=>{
    fetchCategories()
    .then (res=>
    {setCategories(res.data)})
    .catch(error=>{
        console.log(error)})
    },[])
  return (
    <div className="container">
    <div
    style={{"display":"flex","flexWrap":"wrap","justifyContent":"left"}}>
{categories.map((cat,ind)=>
<MediaCard
categorie={cat}
/>
    
)}
</div></div>)}

export default Listcategoriescard
