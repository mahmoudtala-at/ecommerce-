import React from 'react'
import Section2Part1 from '../../components/home/sectionTwoComponents/Section2Part1'
import { Container } from 'react-bootstrap'

import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
export default function SectionTwo() {

    const theme = useContext(ThemeContext)
    return (
        <div className="sectionTwo d-flex  ">
        
            <Container className={theme.theme === "light"  ? "bg-coloring" : "dark-con dark-border "} >
                <Section2Part1 targetDate="1-12-2024" />
                
            </Container>
        </div>

    )
}
