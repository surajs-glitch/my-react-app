import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
const Header = React.lazy(() => import("./common/Header"))
const Footer = React.lazy(() => import("./common/Footer"))
const Hero = React.lazy(() => import("./components/Hero"))
const About = React.lazy(() => import("./pages/About"))
const Blog = React.lazy(() => import("./pages/Blogs"))
const Contact = React.lazy(() => import("./pages/Contact"))
const Products = React.lazy(() => import("./pages/Products"))
const ProductDetails = React.lazy(() => import("./pages/ProductDetails"))
const BlogDetail = React.lazy(() => import('./pages/BlogDetail'))

import ScrollToTop from './components/scrollToTop';  
import ProductVariantDetails from './pages/ProductVariantDetails'
import StickyContactIcons from './components/StickyContactIcons'

function App() {
  return (
    <Router>
      <Header />
      <StickyContactIcons/>
      <ScrollToTop />  
      <Routes >
        <Route path='/' element={<Hero />} />
        <Route path='/about-us' element={<About />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/contact-us' element={<Contact />}/>
        <Route path='/products' element={<Products />}/>
        <Route path="/products/:name" element={<ProductDetails />} />
        <Route path="/products/:name/:variant" element={<ProductVariantDetails />} />
        <Route path='/blog/:slug' element={<BlogDetail />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
