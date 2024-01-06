import { Container, Row, Col, InputGroup, Form, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import logo from "../../public/logo.jpg"
import logoDark from "../../public/logo2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMessage, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from "react-i18next";
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
export default function SiteNav() {
    const { i18n } = useTranslation()
    const { t } = useTranslation()

    const theme = useContext(ThemeContext)

    let [searchValue, setSearchValue] = useState("")

    const {openCart} = useCart()
    return (
        <nav className='pt-3'>
            <Container>
                <Row>
                    <Col md={2} className='text-center'>
                        <img src={theme.theme === "light" ? logo : logoDark} width={100} alt="Site logo" />
                    </Col>
                    <Col className="pt-2" md="7" col-md-5>
                        <InputGroup className="mb-3">
                            <Form.Control
                                aria-label="Text input with dropdown button"
                                onChange={(ev) => setSearchValue(ev.target.value)} />
                            <DropdownButton
                                title=""
                                variant="outline-secondary"
                                id="input-group-dropdown-2"
                                align="end"
                            >
                                <Dropdown.Item href="#">{t('Action')}</Dropdown.Item>
                                <Dropdown.Item href="#">{t('Action')} </Dropdown.Item>
                                <Dropdown.Item href="#">{t('Action')}</Dropdown.Item>
                            </DropdownButton>
                            <Button variant="primary" className={i18n.language === 'en' ? "text-capitalize": ' text-capitalize button-rtl'}>{t('search')}</Button>
                        </InputGroup>
                    </Col>
                    <Col md={3} className="mt-2 d-flex justify-content-between gap-3" col-md-6>
                        <Link to="/profile" className="nav_item d-flex justify-content-center flex-column text-center nav-link fw-normal">
                            <FontAwesomeIcon icon={faUser} />
                            <div className='text-capitalize'>{t('profile')}</div>
                        </Link>
                        <div className="nav_item d-flex justify-content-center flex-column text-center">
                            <FontAwesomeIcon icon={faMessage} />
                            <div className='text-capitalize'>{t('messages')}</div>
                        </div>
                        <div className="nav_item d-flex justify-content-center flex-column text-center">
                            <FontAwesomeIcon icon={faHeart} />
                            <div className='text-capitalize'>{t('order')}</div>
                        </div>
                        <Button className="" onClick={openCart}>
                            <FontAwesomeIcon icon={faCartShopping} />
                            <div className='text-capitalize'>{t('cart')}</div>
                        </Button>
                    </Col>
                </Row>
            </Container >
        </nav>
    )
}
