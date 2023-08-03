import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { MenuIcon, MenuItem, NavMenuContainer } from '../../styles/Navbar.styled'
import { FlexContainer, PaddingContainer } from '../../styles/Global.styled'
import { navLinks } from '../../utils/Data'
import { motion } from 'framer-motion'
import { slideInLeft } from '../../utils/Variants'

const NavMenu = ({ setMenu }) => {
    return (
        <NavMenuContainer as={motion.div} variants={slideInLeft} initial='hidden' animate='visible' exit='exit'>
            {/* close button */}
            <PaddingContainer left='5%' right='5%' top='2rem'>
                <FlexContainer justify='flex-end' responsiveFlex>
                    <MenuIcon as={motion.a} onClick={() => setMenu(false)} whileHover={{ scale: 1.2 }}>
                        <AiOutlineClose />
                    </MenuIcon>
                </FlexContainer>
            </PaddingContainer>
            {/* menu items */}
            <PaddingContainer top='8%'>
                <FlexContainer direction='column' align='center' responsiveFlex>
                    {navLinks.map((link) => {
                        return (
                            <MenuItem as={motion.a} key={link.id} href={`#${link.href}`} onClick={() => setMenu(false)} whileHover={{ scale: 1.2 }}>{link.name}</MenuItem>
                        )
                    })}
                </FlexContainer>
            </PaddingContainer>
        </NavMenuContainer>
    )
}

export default NavMenu
