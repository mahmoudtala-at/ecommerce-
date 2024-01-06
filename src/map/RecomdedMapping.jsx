import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { Container, Card, Button } from 'react-bootstrap'
import { ThemeContext } from '../context/ThemeContext';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
export default function RecomdedMapping() {
    const { t } = useTranslation()
    let [categories, setCategories] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [filteredData2, setFilteredData2] = useState([]);
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
        setFilteredData(categories.slice(0, 4));
      }, [categories]);
      useEffect(() => {
        setFilteredData2(categories.slice(7, 11));
      }, [categories]);
    return (
        <>

            <div className='row  '>
                {filteredData.map((photo) => (
                    <div className='mt-2 col-lg-3  col-md-6 col-sm-12 mb-2'>
                        <Card className={theme.theme === "light" ? "h-100 mt-2 mb-2 p-3 card-md" : "bg-dark p-2 text-white  border-dark  mb-2 mt-2 h-100 p-3 card-md"}>
                            <Card.Img variant="top" src={photo.image} style={{ width: '50%' }} className='align-self-center h-50' />
                            <hr />
                            <Card.Body >
                                <Card.Title><h4>${photo.price}</h4></Card.Title>
                                <Card.Text className='h-50 '>
                                    <h6> {photo.title}</h6>
                                </Card.Text>
                            </Card.Body>
                            <Link to={`/products/${photo.id}`} className= {theme.theme === "light" ? "btn btn-warning w-50 mx-auto" : "btn btn-secondary w-50 mx-auto"}>{t("view_details")} </Link>
                        </Card>
                    </div>
                ))}


            </div>
            <div className='row  '>
                {filteredData2.map((photo) => (
                    <div className='mt-2 col-lg-3  col-md-6 col-sm-12 mb-2'>
                        <Card className={theme.theme === "light" ? "h-100 mt-2 mb-2 p-3 card-md" : "bg-dark p-2 text-white  border-dark  mb-2 mt-2 h-100 p-3 card-md"}>
                            <Card.Img variant="top" src={photo.image} style={{ width: '50%' }} className='align-self-center h-50' />
                            <hr />
                            <Card.Body >
                                <Card.Title><h4>${photo.price}</h4></Card.Title>
                                <Card.Text className='h-50 '>
                                    <h6> {photo.title}</h6>
                                </Card.Text>
                            </Card.Body>
                            <Link to={`/products/${photo.id}`} className= {theme.theme === "light" ? "btn btn-warning w-50 mx-auto" : "btn btn-secondary w-50 mx-auto"}>{t("view_details")} </Link>
                        </Card>
                    </div>
                ))}


            </div>
        </>
    )
}
