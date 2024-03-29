import React from 'react'

import { 
    PaddingContainer, 
    Heading, 
    FlexContainer, 
    ParaText, 
    IconContainer ,
    Button,
} 
from '../styled-components/Global.styled';

import { 
    ProjectContentContainer, 
    ProjectImageContainer, 
    TechStackCard, 
    ProjectImage,
} from '../styled-components/MyProjects.styled';

import {FaGithub} from 'react-icons/fa';
import earth from '../../assets/earth.png';
import { motion } from 'framer-motion';
import { fadeInLeftVariant, fadeInRightVariant } from '../../utils/Variants';

const Project = ({ rowReverse }) => {
  return (
    <FlexContainer rowReverse={rowReverse? true : false} fullWidthChild>
        <ProjectContentContainer 
            as={motion.div} 
            variants={rowReverse ? fadeInRightVariant : fadeInLeftVariant} 
            initial="hidden" 
            whileInView="visible"
        >

            <FlexContainer align="center" gap="1rem">
                <Heading as="h3" size="h3" bottom="1rem">Earth Orbit App</Heading>
                <IconContainer color="blue" size="2rem"><FaGithub /></IconContainer>
            </FlexContainer>

            <PaddingContainer top="1rem">
                <FlexContainer gap="1.5rem">
                    <TechStackCard>React JS</TechStackCard>
                    <TechStackCard>Tailwind</TechStackCard>
                    <TechStackCard>Vite Js</TechStackCard>
                </FlexContainer>
            </PaddingContainer>

            <ParaText top="1.5rem" bottom="2rem">Earth Orbit App is an application used to descibe various details of space elements. This app stores data about technology used to create space satellite </ParaText>
            
            <Button href='https://geocontent.netlify.app/' target='_blank'>Visit Website</Button>


        </ProjectContentContainer>
        <ProjectImageContainer 
            justify={rowReverse ? "flex-start" : "flex-end"}
            as={motion.div} 
            variants={rowReverse ? fadeInLeftVariant : fadeInRightVariant} 
            initial="hidden" 
            whileInView="visible"
        >
            <ProjectImage src={earth} alt="project" />
        </ProjectImageContainer>
    </FlexContainer>
  )
}

export default Project
