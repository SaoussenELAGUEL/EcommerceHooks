import React, {useState, useEffect} from "react";
import axios from "axios";
import Mediacard from './Mediacard'
import {fetchArticles} from '../../services/articlesService'

const Listarticlescard = () => {
    const [articles,setArticles]=useState([])
  useEffect(()=>{
    fetchArticles()
    .then(res=>{  
        setArticles(res.data)
    })
    .catch(error=>{
        console.log(error)
    })
  },[])
  return (
    <div className="container">
    <div
    style={{"display":"flex","flexWrap":"wrap","justifyContent":"left"}}>
{articles.map((art,ind)=>
<Mediacard
article={art}
/>
    
)}
</div></div>)}

export default Listarticlescard
