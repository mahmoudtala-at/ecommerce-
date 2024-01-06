import React from 'react'
import { NavLink } from 'react-router-dom'

import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { useTranslation } from "react-i18next";
export default function Catogries() {
    const { i18n } = useTranslation()

    let handleLanguage = () => {
        i18n.language === 'en' ? i18n.changeLanguage('ar') : i18n.changeLanguage('en')
    }
    const { t } = useTranslation()
    const theme = useContext(ThemeContext)
  return (
    <>
    <NavLink className='nav-link  text-capitalize' to="/" variant="light">{t('Auto_mobile')}</NavLink>
    <NavLink className='nav-link  text-capitalize' to="/" variant="light"> {t('clothes_wear')}</NavLink>
    <NavLink className='nav-link  text-capitalize' to="/" variant="light"> {t('home_inerior')}</NavLink>
    <NavLink className='nav-link  text-capitalize' to="/" variant="light"> {t('clothes_wear')}</NavLink>
    <NavLink className='nav-link text-capitalize' to="/" variant="light"> {t('computer and tech')}</NavLink>
    <NavLink className='nav-link  text-capitalize' to="/" variant="light"> {t('tools,equipments')}</NavLink>
    <NavLink className='nav-link  text-capitalize' to="/" variant="light"> {t('sports and outdoors')}</NavLink>
    <NavLink className='nav-link  text-capitalize' to="/" variant="light"> {t('animals and pets')}</NavLink>
    <NavLink className='nav-link  text-capitalize' to="/" variant="light"> {t('machinery tools')}</NavLink>
    <NavLink className='nav-link  text-capitalize' to="/" variant="light"> {t('more categories')}</NavLink>

    </>
  )
}
