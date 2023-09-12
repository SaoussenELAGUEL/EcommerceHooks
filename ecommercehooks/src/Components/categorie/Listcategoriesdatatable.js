import React from 'react'
import { deleteCategorie, fetchCategories } from '../../services/categoriesService'
import { useEffect,useState } from 'react'
import MUIDataTable from 'mui-datatables'
import { IconButton,Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { pink } from '@mui/material/colors';
import { Link } from "react-router-dom";
const Listcategoriesdatatable = () => {
    const [categories,setCategories]=useState([])
    useEffect(()=>{
        Getlistarticles()
   },[])
const Getlistarticles=()=>{
    fetchCategories()
    .then(res=>{
        setCategories(res.data)
    })
.catch(error=>{
    console.log(error)
})
}
const delCategories=async(_id)=>{
    await deleteCategorie(_id)
    var newcategories=categories.filter((item)=>
    {return item._id!==_id})
    setCategories(newcategories)
}
const columns = [
    {
        name: "imagecategorie",
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
     name: "nomcategorie",
     label: "Désignation",
     options: {
      filter: true,
      sort: true,
     }
    },
       {
        name: "_id",
        label: "Actions",
        options: {
        customBodyRender: (value) => (
        <div>
        <IconButton >
        { <Link to={"/editcategories/" + value} >
        <EditIcon color='secondary' />
        </Link>
        }
        </IconButton>
        <IconButton onClick={()=>{delCategories(value)}}>
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
{ <Link to={"/insertcategories"} style={{textDecoration:
"none",color:"white"}}>
Ajouter
</Link>
}
</Button>
</div>

      <MUIDataTable
  title={"Liste des catégories "}
  data={categories}
  columns={columns}
  options={options}
/>
    </div>
  )
}

export default Listcategoriesdatatable
