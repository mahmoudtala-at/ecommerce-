import { React, useState } from 'react'
import { Button, Stack } from 'react-bootstrap'
import { useCart } from '../../context/CartContext';


export default function CartItem({ id, quantity }) {
    const {removeFromCart} =useCart
    let [categories, setCategories] = useState([]);
    let getCategories = () => {
        fetch('http://localhost:3000/products')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error));
    }
    const item = categories.find((i) =>
        i.id === id)
    if (item == null) return null;

    return (
        <Stack direction='horizontal' className='d-flex align-items-center gap-2'>
            <img src={item.image} alt="cat-img" />
            <div className='me-auto'>
            <div>
            <h5>{item.title} </h5>
            {quantity>1&&<span className='text-muted'>x {quantity}</span>}
            </div>
            <p className='fs-6 text-muted'>{item.price}$</p>
            <Button variant='outline-danger' onClick={()=> removeFromCart(id)

            }>
            </Button>
            </div>
        </Stack>
    )
}
