import React from 'react'
import { Button, FlexContainer, Heading, IconContainer, PaddingContainer, ParaText } from '../../styles/Global.styled'
import { FaGithub } from 'react-icons/fa'
import { ProjectImage, ProjectImageContainer, TechStackCard } from '../../styles/MyProject.styled'
import { motion } from 'framer-motion'
import { fadeInLeftVariant, fadeInRightVariant } from '../../utils/Variants'

const Project = ({ data }) => {
    return (
        <FlexContainer fullWidthChild direction={data.reverse ? 'row-reverse' : false}>
            {/* left container */}
            <motion.div variants={data.reverse ? fadeInRightVariant : fadeInLeftVariant} initial='hidden' whileInView='visible'>
                <FlexContainer align='center' gap='1rem' responsiveFlex>
                    <Heading as='h3' size='h3' bottom='1rem'>{data.projectName}</Heading>
                    <IconContainer color='blue' size='2rem'>
                        <FaGithub />
                    </IconContainer>
                </FlexContainer>
                <PaddingContainer top='1rem'>
                    <FlexContainer gap='1.5rem'>
                        {data.technologies.map((arr) => {
                            return (
                                <TechStackCard>{arr}</TechStackCard>
                            )
                        })}
                    </FlexContainer>
                </PaddingContainer>
                <ParaText top='1.5rem' bottom='2rem'>
                    {data.projectDescription}
                </ParaText>
                <Button>Visit Website</Button>
            </motion.div>
            {/* right section project image  */}
            <ProjectImageContainer justify={data.reverse ? 'flex-start' : 'flex-end'} as={motion.div} variants={data.reverse ? fadeInLeftVariant : fadeInRightVariant} initial='hidden' whileInView='visible'>
                <ProjectImage>
                    <img src={data.projectPic} alt="" />
                </ProjectImage>
            </ProjectImageContainer>
        </FlexContainer>
    )
}

export default Project
