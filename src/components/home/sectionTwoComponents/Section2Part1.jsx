import React from "react"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useContext } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
import Section2Part2 from "./Section2Part2"
export default function Section2Part1({ targetDate }) {
    const { i18n } = useTranslation()
    let handleLanguage = () => {
        i18n.language === "en"
            ? i18n.changeLanguage("ar")
            : i18n.changeLanguage("en")}
    const { t } = useTranslation()
    const theme = useContext(ThemeContext)
    const [countdown, setCountdown] = useState({})
    useEffect(() => {
        const interval = setInterval(() => {
            const timeRemaining = getTimeRemaining(targetDate)
            setCountdown(timeRemaining)  }, 1000)
        return () => clearInterval(interval)
    }, [targetDate])
    const getTimeRemaining = (endtime) => {
        const total = Date.parse(endtime) - Date.parse(new Date())
        const seconds = Math.floor((total / 1000) % 60)
        const minutes = Math.floor((total / 1000 / 60) % 60)
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
        const days = Math.floor(total / (1000 * 60 * 60 * 24))
        return { total, days, hours, minutes, seconds }}
    const formatTime = (time) => {
        return time < 10 ? `0${time}` : time}
    return (
        <div className="row ">
            <div className={ theme.theme==='light' && i18n.language === 'en' ? "col-lg-3 pt-3  deals-section": "col-lg-3 pt-3 deals-section " }>
                <div className="">
                    <h3 className=" text-capitalize">{t("deals and offers")}</h3>
                    <h5 className="text-muted text-capitalize">{t("Hygiene equipments")}</h5>
                </div>
                <div className=" d-flex  mb-4  ">
                    <div className="countdown text-center p-2  m-1 w-25">
                        <p>{formatTime(countdown.days)}</p> {t("days")}
                    </div>
                    <div className="countdown text-center  p-2 m-1 w-25">
                        <p>{formatTime(countdown.hours)}</p> {t("hours")}
                    </div>
                    <div className="countdown text-center p-2 m-1 w-25">
                        <p>{formatTime(countdown.minutes)}</p> {t("minutes")}
                    </div>
                    <div className="countdown text-center  p-2  m-1 w-25">
                        <p>{formatTime(countdown.seconds)}</p> {t("seconds")}
                    </div>
                </div>
            </div>
            <div className="col-lg-9 deals-products-div">
            <Section2Part2/>
            </div>
        </div>
    )
}
