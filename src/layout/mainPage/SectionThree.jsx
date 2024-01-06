import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { useTranslation } from "react-i18next";
import HomeMapping from '../../map/HomeMapping';
import HomeMappingColtwo from '../../map/HomeMappingColtwo';
import { Link } from 'react-router-dom';
export default function () {
    const { t } = useTranslation()
    const { i18n } = useTranslation()
    const theme = useContext(ThemeContext)
    return (
        <>

            <div className='sectionThree d-flex '>
                <Container className={theme.theme === "light" ? "bg-coloring" : "dark-con dark-border "} >
                    <div className="row m-0">

                        <div className="col-lg-3 home_section_img p-4">
                            <h4 className={i18n.language === "en" ? "w-50" : "  w-50"}>{t("Home and outdoor")}</h4>
                            <Link to={`/products/`} className= {theme.theme === "light" ? " btn-light btn" : "btn-dark btn"}>{t('Learn More')} </Link>

                        </div>
                        <div className='col-lg-9  ps-0 pe-0'>
                            <HomeMapping />
                            <HomeMappingColtwo />
                        </div>



                    </div>
                </Container>
            </div>
            <div className='sectionThree d-flex '>
                <Container className={theme.theme === "light" ? "bg-coloring" : "dark-con dark-border "} >
                    <div className="row m-0">

                        <div className="col-lg-3 home_section_img p-4">
                            <h4 className={i18n.language === "en" ? "w-50" : "  w-50"}>{t("Home and outdoor")}</h4>
                            <Link to={`/products/`} className= {theme.theme === "light" ? " btn-light btn" : "btn-dark btn"}>{t('Learn More')} </Link>

                        </div>
                        <div className='col-lg-9  ps-0 pe-0'>
                            <HomeMapping />
                            <HomeMappingColtwo />
                        </div>



                    </div>
                </Container>
            </div>
        </>
    )
}
