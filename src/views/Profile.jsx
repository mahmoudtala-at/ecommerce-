import { Form, Button } from 'react-bootstrap';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {

    let [title, setTitle] = useState("")
    let [description, setDescription] = useState("")

    let navigate = useNavigate()

    let handleSubmit = (ev) => {
        ev.preventDefault()
        fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, description })
        }).then(() => {
            navigate('/products')
        })
    }
    return (
        <div className='min-vh-100 p-4'>
            <Form className="w-50 mx-auto" onSubmit={handleSubmit}>
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
                <Button type="submit">Add new product</Button>
            </Form>
        </div>
    )
}
