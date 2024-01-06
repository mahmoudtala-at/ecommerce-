import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from "react-i18next";
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LangContext';



export default function Header() {
    const { t } = useTranslation()

    const theme = useContext(ThemeContext)
    const language = useContext(LanguageContext)

    return (
        <Navbar
            expand="lg"
            variant={theme.theme}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <NavLink className='nav-link' to="/">{t('home')}</NavLink>
                        <NavLink className='nav-link' to="/about">{t('about')}</NavLink>
                        <NavLink className='nav-link' to="/contact">{t('contact')}</NavLink>
                        <NavLink className='nav-link' to="/products">{t('products')}</NavLink>
                    </Nav>
                    <FontAwesomeIcon
                        className='mx-1'
                        icon={faLanguage}
                        onClick={language.handleLanguage}
                    />
                    <FontAwesomeIcon
                        className='mx-3'
                        onClick={theme.handleTheme}
                        icon={theme.theme === 'light' ? faMoon : faSun} />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
