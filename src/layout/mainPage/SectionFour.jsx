import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { useTranslation } from "react-i18next";
export default function SectionFour() {

    const { t } = useTranslation()
    const theme = useContext(ThemeContext)
    return (
        <div className='  '>
            <Container className={theme.theme === "light" ? "bg-coloring d-flex justify-content-between sectionFour " : " sectionFour  d-flex d-flex justify-content-between dark-con border-dark"} >
                <div className='w-50 text'>
                    <h2>{t("easy_way")}</h2>
                    <p>{t("easily_request")}</p>
                </div>
                <div className={theme.theme === "light" ? 'bg-coloring' : "dark-con border-dark"}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>{t("Email")}</Form.Label>
                            <Form.Control type="email" placeholder={t("Enter Email")} />
                            <Form.Text className="text-muted ">
                                {t("share_your_email")}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>{t("Password")}</Form.Label>
                            <Form.Control type="password" placeholder={t("Password")} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label={t("Check me out")} />
                        </Form.Group>
                        <Button variant={theme.theme === "light" ? "primary" : "dark"} type="submit">
                        {t("Submit")}
                        </Button>
                    </Form>
                </div>
            </Container>
        </div>
    )
}
