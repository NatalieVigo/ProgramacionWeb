import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout.jsx'
import Home from './pages/Home'
import Products from './pages/Products.jsx'
import CategoryLanding from './pages/CategoryLanding.jsx'
import CategoryProducts from './pages/CategoryProducts.jsx'
import About from './pages/About.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import SearchResults from './pages/SearchResults'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="producto/:id" element={<ProductDetail />} />
          <Route path="busqueda" element={<SearchResults />} />
          <Route path="productos" element={<Products />} />
          <Route path="categorias" element={<CategoryLanding />} />
          <Route path="category/:nombre" element={<CategoryProducts />} />
          <Route path="nosotros" element={<About />} />

        </Route>
      </Routes>
    </Router>
  )
}

export default App
