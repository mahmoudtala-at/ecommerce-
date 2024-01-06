import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { Container, Card, Button } from 'react-bootstrap'
import { ThemeContext } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faWarehouse, faPaperPlane, faShieldHalved } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from "react-i18next";
export default function CardMapping() {
    const { t } = useTranslation()
    const theme = useContext(ThemeContext)
    return (

        <div className='row  '>
            <div className='mt-2 col-lg-3  col-md-6 col-sm-12 mb-2'>
                <Card className={theme.theme==="light"? " card-md h-100": "darkcard card-md h-100"}>
                    <div className="card1 ">
                        <div className="rounded-circle  overlay extraCardSec  ">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' />
                        </div>
                    </div>
                    <Card.Text className='p-3 pt-5 w-75 '>
                        <h4>{t("Source from Industry Hubs")}</h4>
                    </Card.Text>
                </Card>
            </div>
            <div className='mt-2 col-lg-3  col-md-6 col-sm-12 mb-2'>
                <Card className={theme.theme==="light"? " card-md h-100": "darkcard card-md h-100"}>
                    <div className="card2">
                        <div className="rounded-circle  overlay extraCardSec">
                            <FontAwesomeIcon icon={faWarehouse} className='icon' />
                        </div>
                    </div>
                    <Card.Text className='p-3 pt-5 w-75 '>
                        <h4>{t("Customize Your Products")}</h4>
                    </Card.Text>
                </Card>
            </div>
            <div className='mt-2 col-lg-3  col-md-6 col-sm-12 mb-2'>
                <Card className={theme.theme==="light"? " card-md h-100": "darkcard card-md h-100"}>
                    <div className="card3">
                        <div className="rounded-circle  overlay extraCardSec">
                            <FontAwesomeIcon icon={faPaperPlane} className='icon' />
                        </div>
                    </div>
                    <Card.Text className='p-3 pt-5 w-100 '>
                        <h4>{t("fast")}</h4>
                    </Card.Text>
                </Card>
            </div>
            <div className='mt-2 col-lg-3  col-md-6 col-sm-12 mb-2'>
                <Card className={theme.theme==="light"? " card-md h-100": "darkcard card-md h-100"}>
                    <div className="card4">
                        <div className="rounded-circle  overlay extraCardSec ">
                            <FontAwesomeIcon icon={faShieldHalved} className='icon' />
                        </div>
                    </div>
                    <Card.Text className='p-3 pt-5 w-100'>
                        <h4>{t("Product")}</h4>
                    </Card.Text>
                </Card>
            </div>

        </div>
    )
}
