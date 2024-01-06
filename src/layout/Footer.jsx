import React from 'react'
import { Container } from 'react-bootstrap'
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';
import logoDak from "../../public/logo.jpg";
import logo from "../../public/logo2.png"
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";
export default function Footer() {
    const theme = useContext(ThemeContext)
    const { t } = useTranslation()
    return (

        <div className={theme.theme === "light" ? "bg-coloring" : "darkcard dark-border "}>
            <Container>
                <footer className="footer-container">
                    <div className="footer-content">
                        <div className="footer-section">
                            <h2>{t('Contact')}</h2>
                            <p>{t('Email')}: info@example.com</p>
                            <p>{t('phone')}: (123) 456-7890</p>
                        </div>
                        <div className="footer-section">
                            <h2>{t('follow')}</h2>
                            <p>Facebook</p>
                            <p>Twitter</p>
                            <p>Instagram</p>
                        </div>
                        <div className="footer-section">
                            <h2>{t('Links')}</h2>
                            <NavLink className='nav-link' to="/">{t('home')}</NavLink>
                            <NavLink className='nav-link' to="/about">{t('about')}</NavLink>
                            <NavLink className='nav-link' to="/contact">{t('contact')}</NavLink>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; {t('Rights')}.</p>
                    </div>
                </footer>
            </Container>
        </div>

    )
}
