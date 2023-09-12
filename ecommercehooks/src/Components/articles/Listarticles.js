
import {useState, useEffect} from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import React from 'react';
import axios from "axios";

import {fetchArticles} from '../../services/articlesService'
const Listarticles = () => {
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
    <div>
      <h1>Liste des articles</h1>
      <Button variant="success">New</Button>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Image</th>
          <th>Référence</th>
          <th>Désignation</th>
          <th>Quantité</th>
          <th>Prix</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {articles.map((art,index)=>
        <tr>
          <td><img src={art.imageart} alt={art.refrence} width={50} height={50}/></td>
          <td>{art.reference}</td>
          <td>{art.designation}</td>
          <td>{art.qtestock}</td>
          <td>{art.prix}</td>
          <td><Button variant="primary">Update</Button>{' '}</td>
          <td><Button variant="danger">Delete</Button>{' '}</td>
        </tr>
        )}
      </tbody>
    </Table>
    </div>
  )
}

export default Listarticles
