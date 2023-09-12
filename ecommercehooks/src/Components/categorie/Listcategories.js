import React from 'react'
import {useState, useEffect} from "react";
import axios from "axios";

import Button from 'react-bootstrap/Button';
import { Table } from 'react-bootstrap';
import { fetchCategories } from '../../services/categoriesService';
const Listcategories = () => {
  const [categories,setCategories]=useState([])
  useEffect(()=>{
   fetchCategories()
    .then(res=>{  
        setCategories(res.data)
    })
    .catch(error=>{
        console.log(error)
    })
  },[])
  return (
   
    <div>
       <h1>Liste des catégories</h1>
      <Button variant="success">New</Button>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Image</th>
          <th>Désignation</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((cat,index)=>
        <tr>
          <td><img src={cat.imagecategorie} alt="" width={50} height={50}/></td>
          <td>{cat.nomcategorie}</td>
          <td><Button variant="primary">Update</Button>{' '}</td>
          <td><Button variant="danger">Delete</Button>{' '}</td>
        </tr>
        )}
      </tbody>
    </Table>
    </div>
  )
}

export default Listcategories
