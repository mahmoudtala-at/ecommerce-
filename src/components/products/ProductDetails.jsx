import { useParams, Link } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import { Container, Card, Button } from 'react-bootstrap'
import { ThemeContext } from '../../context/ThemeContext';
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useCart } from "../../context/CartContext";
export default function ProductDetails() {
    const { t } = useTranslation()
    const params = useParams()

    let [product, setProduct] = useState([])

    useEffect(() => {
        getSingleProduct(setProduct, params)
    }, [])
    let getSingleProduct = (setProduct, params) => {
        fetch('http://localhost:3000/products/' + params.productID)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error(error));
    }
    let [categories, setCategories] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const theme = useContext(ThemeContext)
    let getCategories = () => {
        fetch('http://localhost:3000/products')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error));
    }

    useEffect(() => {
        getCategories()
    }, []);
    useEffect(() => {
        setFilteredData(categories.slice(8, 12));
    }, [categories]);
    const { getItems, increaceCart, decreaseCart, removeItem } = useCart();
    let quantity = getItems(product.id);
    return (
        <>
            <div className={theme.theme === "light" ? "bg-coloring productDetails" : "dark-con productDetails"}>
                <div className={theme.theme === "light" ? "d-flex align-items-center justify-content-evenly  bg" : "bg-dark d-flex align-items-center justify-content-evenly  bg m-3"}>
                    <div>
                        <img src={product.image} alt={product.title} width="100" />
                    </div>
                    <div className="col-5 ">
                        <h4>{product.title}</h4>
                        <h5>${product.price} USD</h5>
                        <p>{product.description}</p>
                        {quantity === 0 ? <Button onClick={() =>
                            increaceCart(product.id)
                        }> Add to cart</Button> :
                            <div>
                                <div className="d-flex gap-3 mb-3 align-items-center">
                                    <Button onClick={() =>
                                        decreaseCart(product.id)
                                    } >-</Button>
                                    Quantity : {quantity}
                                    <Button onClick={() => increaceCart(product.id)}>+</Button>
                                </div>
                                <div><Button variant="danger" onClick={() =>
                                    removeItem(product.id)
                                }>Remove</Button></div>
                            </div>

                        }

                        <FontAwesomeIcon icon={faHeart} className="ms-3 me-3" />
                        <span >Like this product</span>
                    </div>
                </div>
            </div>
            <h4 className="text-center mt-3">You may also like </h4>
            <div className='row justify-content-center '>
                {filteredData.map((photo) => (
                    <div className='mt-2 col-lg-2  col-md-6 col-sm-12 mb-4 '>
                        <Card className={theme.theme === "light" ? "h-100 mt-2 mb-2 p-3 card-md" : "bg-dark p-2 text-white  border-dark  mb-2 mt-2 h-100 p-3 card-md"}>
                            <Card.Img variant="top" src={photo.image} style={{ width: '20%' }} className='align-self-center h-50' />
                            <hr />
                            <Card.Body >
                                <Card.Title><h4>${photo.price}</h4></Card.Title>
                                <Card.Text className='h-50 '>
                                    <h6> {photo.title}</h6>
                                </Card.Text>
                            </Card.Body>
                            <Link to={`/products/${photo.id}`} className={theme.theme === "light" ? "btn btn-warning w-50 mx-auto" : "btn btn-secondary w-50 mx-auto"}>{t("view_details")} </Link>
                        </Card>
                    </div>
                ))}


            </div>
        </>
    )
}
