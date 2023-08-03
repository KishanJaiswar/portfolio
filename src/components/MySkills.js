import React from 'react'
import { BlueText, FlexContainer, Heading, IconContainer, PaddingContainer, ParaText } from '../styles/Global.styled'
import { SkillsCard, SkillsCardContainer } from '../styles/MySkills.styled'
import { Skills } from '../utils/Data'
import { motion } from 'framer-motion'
import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants'

const MySkills = () => {
    return (
        <PaddingContainer id='Skills' left='2%' right='7%' top='18%' bottom='10%' responsiveLeft='0rem' responsiveRight='0rem'>
            {/* left section */}
            <FlexContainer responsiveFlex responsiveDirection='column-reverse' fullWidthChild>
                <SkillsCardContainer as={motion.div} variants={fadeInLeftVariant} initial='hidden' whileInView='visible'>
                    {Skills.map((skill) => {
                        return <SkillsCard>
                            <IconContainer size='2.5rem' color='blue'>
                                {skill.icon}
                            </IconContainer>
                            <Heading>
                                {skill.tech}
                            </Heading>
                        </SkillsCard>
                    })}
                </SkillsCardContainer>
                {/* right scetion */}
                <motion.div variants={fadeInRightVariant} initial='hidden' whileInView='visible'>
                    <Heading as='h4' size='h4'>
                        MY SKILLS
                    </Heading>
                    <Heading as='h2' size='h2' top='1rem'>
                        what <BlueText>I can do</BlueText>
                    </Heading>
                    <ParaText top='2rem' bottom='1.5rem'>
                        As a developer, I have a wide range of experience in front-end development. I am proficient in JavaScript, React, HTML, CSS, My SQL. My strong experience in building responsive and dynamic user interfaces using React and Redux has allowed me to  create engaging and interactive web applications.
                    </ParaText>

                    <ParaText>
                        I have experinece in using React for building scalable and maintainable application. This has allowed me to create efficient and sustainable code that can adopt to the changing need of a business.
                    </ParaText>
                </motion.div>
            </FlexContainer>
        </PaddingContainer>
    )
}

export default MySkills
