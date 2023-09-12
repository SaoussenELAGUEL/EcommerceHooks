import { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { fetchSCategories } from '../../services/scategoriesService';
import { useNavigate } from 'react-router-dom';
import { addArticle } from '../../services/articlesService'

const Insertarticles = () => {

  const [validated, setValidated] = useState(false);
  const [reference, setReference] = useState("");
  const [designation, setDesignation] = useState("");
  const [prix, setPrix] = useState("");
  const [marque, setMarque] = useState("");
  const [qtestock, setQtestock] = useState("");
  const [imageart, setImageart] = useState("");
  const [scategorieID, setScategorieID] = useState("");
  const [scat,setscat]=useState([]);
  useEffect(()=>{
    GetUnArticle();
GetListCategories();

  },[])
  const GetUnArticle=async()=>{
   fetchArticleById(id)
    .then(res=>{
    setReference(res.data.reference)
    setDesignation(res.data.designation)
    setPrix(res.data.prix)
    setMarque(res.data.marque)
    setQtestock(res.data.qtestock)
    setImageart(res.data.imageart)
    setScategorieID(res.data.scategorieID)
    })
    .catch(error=>{
    console.log(error)
    })
    } 
    const GetListCategories=async()=>{
    fetchSCategories()
    .then(res=>{
      setScategories(res.data)
      })
      .catch(error=>{
      console.log(error)
      alert("Erreur ! Modification non effectuée")
      })
      }
    
  const handleSubmit = (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (form.checkValidity() === true) {
    const article={
      _id:id,
      reference: reference,
      designation: designation,
      prix: prix,
      marque: marque,
      qtestock: qtestock,
      imageart: imageart,
      scategorieID: scategorieID
      }
      addArticle (article)
      .then(res=>{
        console.log("Insert OK",res);
        navigate("/listarticlesdatatable");
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
<h1 align="center">Ajout Article</h1>
<div className='form mt-3'>
<Form className="border p-3" noValidate validated={validated}
onSubmit={handleSubmit}>
<Row className="mb-2">
<Form.Group as={Col} md="6" >
<Form.Label >Référence *</Form.Label>
<Form.Control
required
type="text"
placeholder="Référence"
value={reference}
onChange={(e)=>setReference(e.target.value)}
/>
<Form.Control.Feedback type="invalid">
Saisir Référence Article
</Form.Control.Feedback>
</Form.Group>
<Form.Group as={Col} md="6">
<Form.Label>Désignation *</Form.Label>
<Form.Control
required
type="text"
placeholder="Désignation"
value={designation}
onChange={(e)=>setDesignation(e.target.value)}
/>
<Form.Control.Feedback type="invalid">
Saisir Désignation
</Form.Control.Feedback>
</Form.Group>
</Row>
<Row className="mb-2">
<Form.Group className="col-md-6">
<Form.Label>Marque *</Form.Label>
<InputGroup hasValidation>
<Form.Control
type="text"
required
placeholder="Marque"
value={marque}
onChange={(e)=>setMarque(e.target.value)}
/>
<Form.Control.Feedback type="invalid">
Marque Incorrecte
</Form.Control.Feedback>
</InputGroup>
</Form.Group>
<Form.Group as={Col} md="6">
<Form.Label>Prix</Form.Label>
<Form.Control
type="number"
placeholder="Prix"
value={prix}
onChange={(e)=>setPrix(e.target.value)}
/>
</Form.Group>
</Row>
<Row className="mb-3">
<Form.Group className="col-md-6 ">
<Form.Label>
Qté stock<span className="req-tag">*</span>
</Form.Label>
<Form.Control
required
type="number"
value={qtestock}
onChange={(e)=>setQtestock(e.target.value)}
placeholder="Qté stock"
/>
<Form.Control.Feedback type="invalid">
Qté stock Incorrect
</Form.Control.Feedback>
</Form.Group>
<Form.Group as={Col} md="6">
<Form.Label>Image</Form.Label>
<Form.Control
type="text"
placeholder="Image"
value={imageart}
onChange={(e)=>setImageart(e.target.value)}
/>
</Form.Group>
<Form.Group as={Col} md="12">
<Form.Label>Catégorie</Form.Label>
<Form.Control
as="select"
type="select"
value={scategorieID}
onChange={(e)=>setScategorieID(e.target.value)}
>
<option></option>
{scat? scat.map((sc)=><option key={sc._id}
value={sc._id}>{sc.nomscategorie}</option>):null}

</Form.Control>
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

export default Insertarticles
