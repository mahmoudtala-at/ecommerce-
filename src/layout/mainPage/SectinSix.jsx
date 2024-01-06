import React from 'react'
import { Container } from 'react-bootstrap'
import { useTranslation } from "react-i18next";
import CardMapping from '../../map/CardMapping';
import SectionSeven from './SectionSeven';

export default function SectinSix() {
    const { t } = useTranslation()
    return (
        <>
            <Container className='sectionSix my-3'>
                <h3 className='text-center'>{t("extra")}</h3>
                <CardMapping />
            </Container>
            <Container className='sectionSeven my-3'>
            <h3 className='text-center'>{t("region")}</h3>
                <SectionSeven/>
            </Container>
        </>)}
