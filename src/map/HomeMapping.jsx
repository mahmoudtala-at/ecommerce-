import React from 'react'
import { useEffect, useState, useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';
import { useTranslation } from "react-i18next";
export default function HomeMapping() {

    const theme = useContext(ThemeContext)
    const { i18n } = useTranslation()
    let [home, setHome] = useState([])
    let getHome = () => {
        fetch("http://localhost:3000/home")
            .then(response => response.json())
            .then(data => setHome(data))
            .catch(error => console.error(error));
    }
    // let [homeAr, setHomear] = useState([])
    let getHomear = () => {
        fetch(" http://localhost:3000/homeAr")
            .then(response => response.json())
            .then(data => setHome(data))
            .catch(error => console.error(error));
    }
    useEffect(() => {
        if (i18n.language === "en") {
            getHome();
        }
        else {
            getHomear();
        }
    }
        , [i18n.language])
    return (
        <div className={theme.theme === 'light' ? "d-flex border " : "d-flex dark-border"}>
            {home.map((photo) => (

                <div className={i18n.language === 'en'  ? " d-flex  border-end p-3 pe-0 w-25 gap-4 " : " d-flex  border-end   p-3 w-25 gap-4   "} key={photo.id}>
                    <div className="d-flex flex-column card-3  w-50  ">
                        <h3 className='text-capitalize '>{photo.name}</h3>
                        <h5 className='text-muted'>{photo.price}</h5>
                    </div>
                    <div className='align-self-end '><img src={photo.url} className=' w-100 ' alt={photo.description} /></div>

                </div>




            ))}
        </div>
    )
}
