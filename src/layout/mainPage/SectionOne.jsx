import React from 'react'
import {  Button,Container } from 'react-bootstrap'
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { useTranslation } from "react-i18next";
import Catogries from '../../components/home/Catogries';
import FirstCard from '../../components/home/sectionOneComponemts/FirstCard';
import { Link } from 'react-router-dom';

export default function SectionOne() {
    const { i18n } = useTranslation()
    const { t } = useTranslation()
    const theme = useContext(ThemeContext)
return (
<div className='sectionOne' variant="light">
    
    <Container className={theme.theme === "light"? "bg-coloring": "dark-con dark-border" } variant="light">
        <div  className='d-flex justify-content-between section1'>
            <div className='flex-column  col-2 category'  >
                <Catogries/>
            </div>
            <div className='img-bckg col-6 ps-5 pt-5 ' variant="light">
            <div className={ i18n.language === 'en' ? "light": "rtl-text"  }>
            <h4 variant="light" > {t('Latest trending')}</h4>
            <h2 variant="light" >{t('Electronic items')} </h2>
            </div>
            <Link to={`/products/`} className= {theme.theme === "light" ? " btn-light btn m-2" : "btn-dark btn m-2"}>{t('Learn More')} </Link>
            </div>
            <div className='flex-column  col-3    cards' >
            <FirstCard/>
        </div>
        </div>
    </Container>
</div>
    )
} 