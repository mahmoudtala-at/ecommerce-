import React from 'react'
import { Offcanvas } from 'react-bootstrap'
import { useCart } from '../../context/CartContext'
import CartItem from './CartItem'
export default function Cart(isOpen) {
    const { cartItems,closeCart } = useCart()
    return (
        <Offcanvas show={false} onHide={closeCart} placement='top'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title className="text-center">Your Shopping Bag </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {cartItems.map((item) => (

                    <CartItem key={item.id}/>
                ))}
            </Offcanvas.Body>
        </Offcanvas>
    )
}
