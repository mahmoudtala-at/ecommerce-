import React, { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next"

import { useContext } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
export default function Section2Part2() {

    const theme = useContext(ThemeContext)
    const { i18n } = useTranslation()
    const { t } = useTranslation();
    let [photoData, setPhotoData] = useState([])
    let getPhotoData = () => {
        fetch('http://localhost:3000/photoData')
            .then(response => response.json())
            .then(data => setPhotoData(data))
            .catch(error => console.error(error));
    }
    let photoDataAr = () => {
        fetch("http://localhost:3000/photoDataAr")
            .then(response => response.json())
            .then(data => setPhotoData(data))
            .catch(error => console.error(error));
    }
    useEffect(() => {
        if (i18n.language === "en") {
            getPhotoData();
        }
        else {
            photoDataAr();
        }
    }
        , [i18n.language])
    return (
        <div className='col d-flex justify-content-center text-center deals-products ' >
            {photoData.map((photo) => (

                <div className={i18n.language === 'en' ? " p-3  d-flex flex-column align-items-center border-start  w-100" : " p-3  d-flex flex-column align-items-center  w-100   border-start "} key={photo.id}>

                    <img src={photo.url} className='w-100 ' alt={photo.description} />
                    <h5 className='mt-4 mb-4 text-capitalize'>{photo.description}</h5>
                    <p className='discountper'> {photo.discount}</p>
                </div>
            ))}
        </div>
    )
}
