import React from 'react';

const AddToCart = ({ addToCart }) => {
    const handleAddToCart = () => {
        addToCart('New Item');
    };

    return (
        <div>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default AddToCart;