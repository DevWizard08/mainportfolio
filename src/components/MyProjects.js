import React from 'react'
import { 
    PaddingContainer, 
    Heading, 
    BlueText,
} 
from './styled-components/Global.styled';



import Project from './layouts/Project';
import Eject from './layouts/Project2';
import { motion } from 'framer-motion';
import { fadeInTopVariant } from '../utils/Variants';

const MyProjects = () => {
  return (
    <PaddingContainer top="5%" bottom="5%" responsiveTop="20%" responsiveLeft="1rem" responsiveRight="1rem">
        <Heading 
            as={motion.h4} 
            variants={fadeInTopVariant}
            initial="hidden"
            whileInView="visible"
            size="h4"
        >
            MY PROJECTS
        </Heading>

        <Heading 
            as={motion.h4}
            variants={fadeInTopVariant}
            initial="hidden"
            whileInView="visible"
            size="h2" 
            top="0.5rem"
        >
            What <BlueText>I have built</BlueText>
        </Heading>

        <PaddingContainer top="5rem" bottom="5rem">
            <Project />
        </PaddingContainer>

        <PaddingContainer top="5rem" bottom="5rem">
            <Eject  rowReverse/>
        </PaddingContainer>
        
        
    </PaddingContainer>
  )
}

export default MyProjects