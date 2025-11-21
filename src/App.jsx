import React, { useState } from 'react'
import ProductList from './components/ProductList'

const App = () => {
  // Initial product data
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: '$999', inStock: true },
    { id: 2, name: 'Phone', price: '$699', inStock: false },
    { id: 3, name: 'Tablet', price: '$499', inStock: true },
    { id: 4, name: 'Monitor', price: '$199', inStock: false },
  ])

  // Function to remove a product by id
  const removeProduct = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id))
  }

  return (
    <div className="App">
      <h1>Product Dashboard</h1>
      <ProductList
        products={products}
        removeProduct={removeProduct}
      />
    </div>
  )
}

export default App