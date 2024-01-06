import React from 'react'
import RecomdedMapping from '../../map/RecomdedMapping'
import { Container, Card, Button } from 'react-bootstrap'
import { useTranslation } from "react-i18next";
export default function SectionFive() {
    
    const { t } = useTranslation()
    return (
        <Container className='my-2'>
            <h3 className='text-center'>{t("Recommended items")}</h3>
            <RecomdedMapping/>
        </Container>
    )
}
