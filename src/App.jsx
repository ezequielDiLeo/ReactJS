import {products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products.jsx'
import { useState } from 'react'
import { Header } from './components/Header.jsx'

function App () {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    minPrice: 0,
    category: 'all'
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(products) 

  return (
    <>
      <Header changeFilters={setFilters} /> 
      <Products products={ filteredProducts } />
    </>
  )

}

export default App;