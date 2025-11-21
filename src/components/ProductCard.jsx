import React from 'react'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product, removeProduct }) => {
  return (
    <div
    // Apply conditional class based on stock status  
    className={`product-card ${
        product.inStock
          ? styles.card
          : `${styles.card} ${styles.outOfStockClass} outOfStockClass`
      }`}
    >
      {/* Display product name and price */}
      <h3>{product.name}</h3>
      <p>{product.price}</p>

      {/* Display out of stock message if the product is not in stock */}
      {!product.inStock && (
        <p className={styles.outOfStockText}>Out of Stock</p>
      )}
      {/* Button to remove the product */}
      <button onClick={() => removeProduct(product.id)}>Remove</button>
    </div>
  )
}

export default ProductCard