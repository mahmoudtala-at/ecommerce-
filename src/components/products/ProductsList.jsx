import React from 'react'

export default function ProductsList({ products, onAddToCart }) {
    const handleAddToCart = () => {
        onAddToCart(product.id, 1);
    }
    
    return (
        <div className="products" id="products">
            {products.map((product) => (
                <ProductItem
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                />
            ))}
        </div>
    )
}
