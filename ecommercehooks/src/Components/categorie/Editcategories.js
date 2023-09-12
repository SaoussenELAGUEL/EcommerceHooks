import { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { fetchSCategories } from '../../services/scategoriesService';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchCategorieById } from '../../services/categoriesService';
import { editCategorie } from '../../services/categoriesService';
const Editcategories = () => {
  const {id} = useParams();
  const navigate=useNavigate();
   const [imagecategorie,setImagecategorie]=useState("")
  const [validated, setValidated] = useState(false);
  const [nomcategorie,setNomcategorie]=useState("")
  useEffect(()=>{
    GetUneCategories();
  },[])
  const GetUneCategories=async()=>{
    fetchCategorieById(id)
     .then(res=>{
     setImagecategorie(res.data.imagecategorie)
     setNomcategorie(res.data.nomcategorie)
          })
     .catch(error=>{
     console.log(error)
     })
     } 

     const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      if (form.checkValidity() === true) {
      const categorie={
      _id:id,
      imagecategorie: imagecategorie,
      nomcategorie: nomcategorie,
      }
    
    editCategorie (categorie)
      .then(res=>{
      console.log("Update OK",res);
      navigate("/listcategoriesdatatable");
      })
      .catch(error=>{
      console.log(error)
      })
      }
      setValidated(true);
      };
  return (
    <div>
     <div className="container w-100 d-flex justify-content-center">
<div className=' mt-5 w-50'>
<h1 align="center">Editer Categorie</h1>
<div className='form mt-3'>
<Form className="border p-3" noValidate validated={validated} onSubmit={handleSubmit}
>
<Row className="mb-2">
<Form.Group as={Col} md="6" >
<Form.Label >Image categorie </Form.Label>
<Form.Control

type="text"
placeholder="Image categorie"
value={imagecategorie}
onChange={(e)=>setImagecategorie(e.target.value)}
/>

</Form.Group>
<Form.Group as={Col} md="6">
<Form.Label> Nom categorie *</Form.Label>
<Form.Control
required
type="text"
placeholder="Nom categorie"
value={nomcategorie}
onChange={(e)=>setNomcategorie(e.target.value)}
/>
<Form.Control.Feedback type="invalid">
Saisir nom categorie
</Form.Control.Feedback>
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

export default Editcategories
