import React, { useState, useEffect } from 'react'
import MUIDataTable from "mui-datatables";
import { fetchArticles } from '../../services/articlesService';
import { deleteArticle } from '../../services/articlesService';

import { IconButton,Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { pink } from '@mui/material/colors';
import { Link } from "react-router-dom";

function ListArticlesDatatable() {
    const [articles,setArticles] =useState([])
    useEffect(()=>{
        Getlistarticles()
      },[])
      const Getlistarticles=()=>{
      fetchArticles()
        .then(res=>{  
            setArticles(res.data)
        })
        .catch(error=>{
            console.log(error)
        })}
      const delArticle= async (_id) => { 
        await deleteArticle(_id)
        var newarticles=articles.filter((item)=>{
        return item._id!==_id
        })
        setArticles(newarticles);
        }
    const columns = [
        {
            name: "imageart",
            label: "Image",
            options: {customBodyRender:(rowData)=>
                <img
                  style={{ height: 80, borderRadius: '50%' }}
                  src={rowData}
                  alt=""
/>
             
            }
           },
        {
         name: "reference",
         label: "Référence",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "designation",
         label: "Désignation",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "marque",
         label: "Marque du produit",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
         name: "prix",
         label: "Prix de l'article",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
            name: "qtestock",
            label: "Quantité ",
            options: {
             filter: true,
             sort: false,
            }
           },
           {
            name: "_id",
            label: "Actions",
            options: {
            customBodyRender: (value) => (
            <div>
            <IconButton >
            { <Link to={"/editarticles/" + value} >
            <EditIcon color='secondary' />
            </Link>
            }
            </IconButton>
            <IconButton onClick={()=>{delArticle(value)}}>
            <DeleteIcon sx={{ color: pink[500] }} />
            </IconButton>
            </div>)}}
       ];
       
      
       
       const options = {
        filterType: 'checkbox',
      };
       
  return (
    <div>
        <div style={{padding:5,margin:5}}>
<Button
color="success"
startIcon={<AddCircleIcon />}
variant="contained"
>
{ <Link to={"/insertarticles"} style={{textDecoration:
"none",color:"white"}}>
Ajouter
</Link>
}
</Button>
</div>

      <MUIDataTable
  title={"Liste des articles "}
  data={articles}
  columns={columns}
  options={options}
/>
    </div>
  )
}

export default ListArticlesDatatable

