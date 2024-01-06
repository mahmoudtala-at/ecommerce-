import React from 'react'
import avatarPic from "../../../../public/avatar=pic1.jpg"
import {Card , Button} from 'react-bootstrap'
import { useTranslation } from "react-i18next";
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
export default function FirstCard() {
  const { i18n } = useTranslation()

  let handleLanguage = () => {
      i18n.language === 'en' ? i18n.changeLanguage('ar') : i18n.changeLanguage('en')
  }
  const { t } = useTranslation()
  const theme = useContext(ThemeContext)
  return (
<div>
<Card className={ theme.theme === "light"? "card-bg": "dark"  } >
<Card.Body>
  <div className='d-flex align-items-center'>
  <img src={avatarPic} width={50} className="rounded-circle"/>
  <div className='ms-3 me-3 '>
<h5>{t("hi")} </h5>

<h5>{t("getStarted")}</h5>
  </div>
  </div>
  <Button variant={ theme.theme === "light"? "primary": "dark"  } className='w-100 mt-4 text-capitalize'> {t("join now")}</Button>
  <Button variant={ theme.theme === "light"? "light": "dark"  } className='w-100 mt-3 text-capitalize'> {t("log in")}</Button>
  
</Card.Body>
</Card>
<Card className={ theme.theme === "light"? "card-bg2": "dark mt-2 mb-2"  }  >
<Card.Body>
<h4>
{t("Get US $10 off with a new supplier")}
</h4>
</Card.Body>
</Card>
<Card className={ theme.theme === "light"? "card-bg3": "dark"  }  >
<Card.Body>
<h4>
{t("Get US $10 off with a new supplier")}
</h4>
</Card.Body>
</Card>
</div>
  
  )
}
