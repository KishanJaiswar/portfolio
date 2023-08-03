import React from 'react'
import { BlueText, Button, FlexContainer, Heading, PaddingContainer } from '../styles/Global.styled'
import { ContactForm, FormInput, FormLabel } from '../styles/Footer.Styled'
import { motion } from 'framer-motion'
import { fadeInBottomVariant } from '../utils/Variants'

const Footer = () => {

    function handleForm() {
        document.getElementById('form').reset();
        /* var form = document.getElementById("form");
        form.addEventListener("submit", e => {
            e.preventDefault();
            fetch(form.action, {
                method: "POST",
                body: new FormData(document.getElementById("form")),
            }).then(
                Response => Response.json()
            ).then((html) => {
                //if you any to open any page after submitting the form
                //alert("Thanks.html", "_blank");
                form.reset();
            });
            //to reset the form after submitting
        }); */
    }

    return (
        <PaddingContainer id='Contact' top='5%' bottom='10%'>
            <Heading as={motion.h4} size='h4' align='center' variants={fadeInBottomVariant} initial='hidden' whileInView='visible'>MY CONTACT</Heading>
            <Heading as={motion.h2} size='h2' align='center' top='0.5rem' variants={fadeInBottomVariant} initial='hidden' whileInView='visible'>Contact <BlueText>Me Here</BlueText></Heading>
            <PaddingContainer top='3rem'>
                <FlexContainer justify='center'>
                    <ContactForm action='https://sheetdb.io/api/v1/kllv6x6b9pp32' method='post' as={motion.form} id='form' variants={fadeInBottomVariant} initial='hidden' whileInView='visible'>
                        <PaddingContainer bottom='2rem'>
                            <FormLabel>Name:</FormLabel>
                            <FormInput type='text' placeholder='Enter your name' name='data[Name]'></FormInput>
                        </PaddingContainer>
                        <PaddingContainer bottom='2rem'>
                            <FormLabel>Email:</FormLabel>
                            <FormInput type='email' placeholder='Enter your email' name='data[Email]'></FormInput>
                        </PaddingContainer>
                        <PaddingContainer bottom='2rem'>
                            <FormLabel>Message:</FormLabel>
                            <FormInput as='textarea' placeholder='Enter your message' name='data[Message]'></FormInput>
                        </PaddingContainer>
                        <FlexContainer justify='center' responsiveFlex>
                            <Button onClick={handleForm} id='btn' type='submit' >Send Message</Button>
                        </FlexContainer>
                    </ContactForm>
                </FlexContainer>
            </PaddingContainer>
        </PaddingContainer>
    )
}

export default Footer
