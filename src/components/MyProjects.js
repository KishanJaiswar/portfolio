import React from 'react'
import { BlueText, Heading, PaddingContainer } from '../styles/Global.styled'
import { projectDetails } from '../utils/Data'
import Project from './layouts/Project'
import { motion } from 'framer-motion';
import { fadeInTopVariant } from '../utils/Variants';

const MyProjects = () => {
    return (
        <PaddingContainer id='Projects' left='7%' right='7%' top='15%' bottom='10%' responsiveTop='20%' responsiveLeft='0rem' responsiveRight='0rem'>
            <Heading as={motion.h4} size='h4' variants={fadeInTopVariant} initial='hidden' whileInView='visible'>MY PROJECTS</Heading>
            <Heading as={motion.h2} size='h2' variants={fadeInTopVariant} initial='hidden' whileInView='visible'>What <BlueText>I have built</BlueText></Heading>
            {projectDetails.map((project) => {
                return (
                    <PaddingContainer key={project.id} top='2rem' bottom='3rem'>
                        <Project data={project} />
                    </PaddingContainer>
                )
            })}
        </PaddingContainer>
    )
}

export default MyProjects
