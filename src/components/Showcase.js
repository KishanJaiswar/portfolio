import React from 'react'
//global styles
import { PaddingContainer, FlexContainer, Heading, ParaText, BlueText, IconContainer } from '../styles/Global.styled'
//icons
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
//showcase styles
import { ShowcaseImageCard, ShowcaseParticleContainer } from '../styles/Showcase.styled'
//image
import myImage from '../assets/myImage.jpg'

import { motion } from 'framer-motion';
import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants';

const Showcase = () => {
    return (
        <PaddingContainer id='Home' left='7%' right='7%' top='23%' bottom='10%' responsiveLeft='0rem' responsiveRight='1rem' responsiveTop="8rem">
            <FlexContainer gap='190px'>
                {/* left content */}
                <motion.div variants={fadeInLeftVariant} initial='hidden' whileInView='visible'>
                    <Heading as='h3' size='h3'>hello</Heading>
                    <Heading as='h2' size='h2' top='0.5rem' bottom='1rem' padding='0.8rem 0'>I'm<BlueText> Kishan Jaiswar</BlueText></Heading>
                    <Heading as='h3' size='h3'>I'm a <BlueText>React Developer</BlueText></Heading>
                    <ParaText as='p' top='1.5rem' bottom='4rem'>Hello, my name is Kishan Jaiswar and I'm a front-end developer with 1 year of experience in creating user-friendly websites and web applications</ParaText>
                    {/* social-icons */}
                    <FlexContainer gap='20px' responsiveFlex>
                        <IconContainer color='white' size='1.7rem' >
                            <BsLinkedin />
                        </IconContainer>
                        <IconContainer color='white' size='1.7rem' >
                            <BsGithub />
                        </IconContainer>
                        <IconContainer color='white' size='1.7rem' >
                            <BsInstagram />
                        </IconContainer>
                    </FlexContainer>
                </motion.div>
                {/* right container */}
                <FlexContainer justify='flex-end' as={motion.div} variants={fadeInRightVariant} initial='hidden' whileInView='visible'>
                    <ShowcaseParticleContainer>
                        <ShowcaseImageCard>
                            <img src={myImage} alt="" height='380px' width='330px' background-size='cover' />
                        </ShowcaseImageCard>
                    </ShowcaseParticleContainer>
                </FlexContainer>
            </FlexContainer>
        </PaddingContainer>
    )
}

export default Showcase
