import { Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react"

export default function EditProduct() {

    let [product, setProduct] = useState({})
    let [title, setTitle] = useState("")
    let [description, setDescription] = useState("")
    const params = useParams()
    console.log(params.productID)
    let navigate = useNavigate();

    
    
    let editProduct = (ev) => {
        ev.preventDefault()
        fetch('http://localhost:3000/products/' + params.productID, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...product, title, description })
        }).then(() => {
            navigate('/products')
        })
    }

    
    useEffect(() => {
        getProduct(setProduct, params)
    }, [])
    let getProduct = (setProduct, params) => {
        fetch('http://localhost:3000/products/' + params.productID)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error(error));
    }
    
    
    useEffect(() => {
        setTitle(product.title)
        setDescription(product.description)
    }, [product.title, product.description])
    return (
        <div className='min-vh-100 p-4'>
            <Form className="w-50 mx-auto" onSubmit={editProduct}>
                <Form.Group className="mb-3" >
                    <Form.Label>Product name</Form.Label>
                    <Form.Control
                        type="text"
                        value={title}
                        onChange={(ev) => setTitle(ev.target.value)}
                        placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={description}
                        onChange={(ev) => setDescription(ev.target.value)}
                        placeholder='Enter description' />
                </Form.Group>
                <Button type="submit">Submit form</Button>
            </Form>
        </div>
    )
}
