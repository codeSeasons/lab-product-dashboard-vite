import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({ products, removeProduct }) => {
  return (
    <div>
      {/* Render a message if no products are available */}
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        // Map through the products and render a ProductCard for each
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            removeProduct={removeProduct}
          />
        ))
      )}
    </div>
  )
}

export default ProductList