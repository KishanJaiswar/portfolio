import React, { useState, useEffect } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Logo, MenuIcon, NavbarContainer } from '../styles/Navbar.styled'
import { BlueText, Container, FlexContainer, PaddingContainer } from '../styles/Global.styled'
import NavMenu from './layouts/NavMenu'
import { theme } from '../utils/Theme'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {

    const [menu, setMenu] = useState(false);
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        //oncsroll function
        window.onscroll = () => {
            window.pageYOffset > 50 ? setSticky(true) : setSticky(false);
        }
        window.addEventListener('scroll', onscroll);
        return () => window.removeEventListener('scroll', onscroll);
    }, [])

    return (
        <NavbarContainer bgColor={sticky ? theme.colors.primary : 'transparent'} left='7%'>
            <PaddingContainer top='1.2rem' bottom='1.2rem'>
                <Container>
                    <FlexContainer justify='space-between' responsiveFlex>
                        {/* left group */}
                        <Logo>Kishan <BlueText>Jaiswar</BlueText></Logo>
                        {/* right menu icon */}
                        <MenuIcon as={motion.a} onClick={() => { setMenu(true) }} whileHover={{ scale: 1.2 }}>
                            <GiHamburgerMenu />
                        </MenuIcon>
                    </FlexContainer>
                </Container>
                <AnimatePresence>
                    {menu && <NavMenu setMenu={setMenu} />}
                </AnimatePresence>
            </PaddingContainer>
        </NavbarContainer >
    )
}

export default Navbar
