import React from 'react'
import { useState } from 'react';

import { addCategorie } from '../../services/categoriesService';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
const Insertcategories = () => {
  const [validated, setValidated] = useState(false);
  const [imagecategorie, setImagecategorie] = useState("");
  const [nomcategorie, setNomcategorie] = useState("");
  let navigate=useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      const categorie={
        imagecategorie: imagecategorie,
        nomcategorie: nomcategorie,
        }
        addCategorie (categorie)
        .then(res=>{
          console.log("Insert OK",res);
            navigate("/listcategoriesdatatable");
          })
          .catch(error=>{
          console.log(error)
          alert("Erreur ! Insertion non effectuée")
          })
          
        
      }
      setValidated(true);
      };
  return (
    <div>
    <div className="container w-100 d-flex justify-content-center">
  <div className=' mt-5 w-50'>
  <h1 align="center">Ajout categorie</h1>
  <div className='form mt-3'>
  <Form className="border p-3" noValidate validated={validated}
  onSubmit={handleSubmit}>
  <Row className="mb-2">
  <Form.Group as={Col} md="6" >
  <Form.Label >Nom catégorie *</Form.Label>
  <Form.Control
  required
  type="text"
  placeholder="Nom catégorie"
  value={nomcategorie}
  onChange={(e)=>setNomcategorie(e.target.value)}
  />
  <Form.Control.Feedback type="invalid">
Saisir Nom Catégorie
</Form.Control.Feedback>
   </Form.Group>
  <Form.Group as={Col} md="6">
  <Form.Label>Image</Form.Label>
  <Form.Control
  type="text"
  placeholder="Image"
  value={imagecategorie}
  onChange={(e)=>setImagecategorie(e.target.value)}
  />
  </Form.Group>
  
  </Row>
  
  <center><Button type="submit">Enregistrer</Button></center>
  </Form>
  </div>
  </div>
  </div>
      </div>
  )
}

export default Insertcategories
