import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import React from 'react';
import './App.css';
import Listarticles from './Components/articles/Listarticles';
import Insertarticles from './Components/articles/Insertarticles';
import Editarticles from './Components/articles/Editarticles';
import Listscategories from './Components/scategories/Listscategories';
import Editscategories from './Components/scategories/Editscategories';
import Insertscategories from './Components/scategories/Insertscategories';
import Listcategories from './Components/categorie/Listcategories';
import Editcategories from './Components/categorie/Editcategories';
import Insertcategories from './Components/categorie/Insertcategories';  
import Listarticlescard from './Components/articles/Listarticlescard';
import Listcategoriescard from './Components/categorie/Listcategoriescard';
import Menu from './Components/Menu';
import ListArticlesDatatable from './Components/articles/ListArticlesDatatable';
import Listcategoriesdatatable from './Components/categorie/Listcategoriesdatatable';

function App() {
  return (
   <Router>
   <Menu/>
   <Routes>
    <Route path="/listarticles" element={<Listarticles/>}/>
    <Route path="/insertarticles" element={<Insertarticles/>}/>
    <Route path="/editarticles/:id" element={<Editarticles/>}/>
    <Route path="/listarticlesdatatable" element={<ListArticlesDatatable/>}/>
    <Route path="/listarticlescard" element={<Listarticlescard/>}/> 

    <Route path="/listcategories" element={<Listcategories/>}/>
    <Route path="/insertcategories" element={<Insertcategories/>}/>
    <Route path="/editcategories/:id" element={<Editcategories/>}/>
    <Route path="/listcategoriescard" element={<Listcategoriescard/>}/>
    <Route path="/listcategoriesdatatable" element={<Listcategoriesdatatable/>}/>


    <Route path="/listscategories" element={<Listscategories/>}/>
    <Route path="/insertscategories" element={<Insertscategories/>}/>
    <Route path="/editscategories/:id" element={<Editscategories/>}/>
  
    </Routes> 
   </Router>

 
  );
}

export default App;
