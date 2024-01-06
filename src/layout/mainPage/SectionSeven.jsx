import React from 'react'
import nation1 from "../../../public/Property 1=AE.png"
import nation2 from "../../../public/Property 1=AU.png"
import nation3 from "../../../public/Property 1=CN.png"
import nation4 from "../../../public/Property 1=DE.png"
import nation5 from "../../../public/Property 1=DK.png"
import { useTranslation } from "react-i18next";
import { NavLink } from 'react-router-dom';
export default function SectionSeven() {
    const { t } = useTranslation()
    return (
        <>
            <div className="row my-3 ">
                <div className="col-xl-2 col-lg-6 col-md-6 col-sm-12  d-flex gap-3 mb-3">
                    <img src={nation1} alt="" className=' h-75' />
                    <div className="d-flex flex-column">
                        <h6 >{t("Arabic Emirates")}</h6>
                        <NavLink className='nav-link text-muted' to="/">shopname.ae</NavLink>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-6 col-md-6 col-sm-12  d-flex gap-3 mb-3">
                    <img src={nation2} alt="" className=' h-75' />
                    <div className="d-flex flex-column">
                        <h6 >{t("Australia")}</h6>
                        <NavLink className='nav-link text-muted' to="/">shopname.au</NavLink>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-6 col-md-6 col-sm-12  d-flex gap-3 mb-3">
                    <img src={nation3} alt="" className=' h-75' />
                    <div className="d-flex flex-column">
                        <h6 >{t("china")}</h6>
                        <NavLink className='nav-link text-muted' to="/">shopname.ch</NavLink>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-6 col-md-6 col-sm-12  d-flex gap-3 mb-3">
                    <img src={nation4} alt="" className='h-75 ' />
                    <div className="d-flex flex-column">
                        <h6 >{t("Geremany")}</h6>
                        <NavLink className='nav-link text-muted' to="/">shopname.du</NavLink>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-6 col-md-6 col-sm-12  d-flex gap-3 mb-3">
                    <img src={nation5} alt="" className=' h-75' />
                    <div className="d-flex flex-column">
                        <h6 >{t("Denemark")}</h6>
                        <NavLink className='nav-link text-muted' to="/">shopname.dk</NavLink>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-6 col-md-6 col-sm-12  d-flex gap-3 mb-3">
                <img src={nation1} alt="" className=' h-75' />
                <div className="d-flex flex-column">
                    <h6 >{t("Arabic Emirates")}</h6>
                    <NavLink className='nav-link text-muted' to="/">shopname.ae</NavLink>
                </div>
            </div>
            <div className="col-xl-2 col-lg-6 col-md-6 col-sm-12  d-flex gap-3 mb-3">
                <img src={nation2} alt="" className=' h-75' />
                <div className="d-flex flex-column">
                    <h6 >{t("Australia")}</h6>
                    <NavLink className='nav-link text-muted' to="/">shopname.au</NavLink>
                </div>
            </div>
            <div className="col-xl-2 col-lg-6 col-md-6 col-sm-12  d-flex gap-3 mb-3">
                <img src={nation3} alt="" className=' h-75' />
                <div className="d-flex flex-column">
                    <h6 >{t("china")}</h6>
                    <NavLink className='nav-link text-muted' to="/">shopname.ch</NavLink>
                </div>
            </div>
            <div className="col-xl-2 col-lg-6 col-md-6 col-sm-12  d-flex gap-3 mb-3">
                <img src={nation4} alt="" className='h-75 ' />
                <div className="d-flex flex-column">
                    <h6 >{t("Geremany")}</h6>
                    <NavLink className='nav-link text-muted' to="/">shopname.du</NavLink>
                </div>
            </div>
            <div className="col-xl-2 col-lg-6 col-md-6 col-sm-12  d-flex gap-3 mb-3">
                <img src={nation5} alt="" className=' h-75' />
                <div className="d-flex flex-column">
                    <h6 >{t("Denemark")}</h6>
                    <NavLink className='nav-link text-muted' to="/">shopname.dk</NavLink>
                </div>
            </div>
            </div>

        </>
    )
}
