/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { useTranslation } from "react-i18next";
export default function CategoryBtns({ handleFilter, setProducts }) {
    const { t } = useTranslation()
    let [categories, setCategories] = useState([])
    let [filterValue, setFilterValue] = useState("")
    const { i18n } = useTranslation()
    let getCategories = () => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error));
    }
    let getProducts = (setProducts) => {
        fetch('http://localhost:3000/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error(error));
    }

    useEffect(() => {
        getCategories()
    }, [])
    return (
        <div>
            <div className="row">
                <div>
                    <ButtonGroup>
                        <Button
                        className={i18n.language === 'en' ? "": 'button2-rtl'}
                            key={Math.random()}
                            onClick={() => getProducts(setProducts)}

                        >All</Button>

                        {categories.map(category =>
                            <Button className={i18n.language === 'en' ? "": 'button-rtl'}
                                key={Math.random()}
                                // onClick={(ev) => setFilterValue(ev.target.name)}
                                onClick={() => handleFilter(category)}
                            >{category}</Button>

                        )}

                    </ButtonGroup>
                </div>
            </div>
        </div>
    )
}

