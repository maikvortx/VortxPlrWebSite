import React, { useState, useEffect } from 'react'
import { HeaderApp, HeaderContainer } from './styles'
import LogoVortx from '../../assets/img/logo/logo-vortx.svg'
import { Menu, Close } from '@mui/icons-material'
import { whiteColor } from '../../assets/ui-kit'
import CadastroHeader from './CadastroHeader'
import HomeHeader from './HomeHeader'
import CadastroButton from './CadastroButton'

function Header({ estilo }) {
  const [showMenu, setShowMenu] = useState('')
  const [headerColor, setHeaderColor] = useState(whiteColor)
  const [logoVortx, setLogoVortx] = useState(LogoVortx)
  // const [logoQR, setLogoQR] = useState(LogoQR)
  const [widthDimension, setWidthDimension] = useState()
  const [heightDimension, setHeightDimension] = useState()

  const menuHandler = {
    toggle() {
      setShowMenu((showMenu) => !showMenu)
    },
    close() {
      setShowMenu(false)
    },

    handleScroll() {
      const position = window.pageYOffset
      setHeightDimension(position)

      if (estilo === 'home') {
        setHeaderColor(whiteColor)
        setLogoVortx(LogoVortx)
        // setLogoQR(LogoQR)
        // if (position < 100 && widthDimension > 1200) {
        //   setHeaderColor('transparent')
        //   setLogoVortx(LogoVortxBranco)
        //   setLogoQR(LogoQRBranco)
        // } else {
        //   setHeaderColor(whiteColor)
        //   setLogoVortx(LogoVortx)
        //   setLogoQR(LogoQR)
        // }
      }
    }
  }

  useEffect(() => {
    setWidthDimension(window.innerWidth)

    if (widthDimension > 1200) {
      menuHandler.close()
    }
  }, [widthDimension])

  useEffect(() => {
    function handleResize() {
      setWidthDimension(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (estilo === 'home') {
      // setHeaderColor('transparent')
      // setLogoVortx(LogoVortxBranco)
      // setLogoQR(LogoQRBranco)
    }
    window.addEventListener('scroll', menuHandler.handleScroll)
  }, [widthDimension])

  return (
    <HeaderApp exibeMenu={showMenu} headerColor={headerColor}>
      <HeaderContainer exibeMenu={showMenu} headerColor={headerColor}>
        <HeaderContainer.btnMenuEImgDiv>
          <HeaderContainer.btnMenu headerColor={headerColor}>
            {!showMenu ? (
              <Menu onClick={menuHandler.toggle} />
            ) : (
              <Close onClick={menuHandler.toggle} />
            )}
          </HeaderContainer.btnMenu>

          <a href="/">
            <HeaderContainer.ImgDiv>
              <img
                src={logoVortx}
                alt="Logo Vórtx"
                layout="fixed"
                width={'100px'}
              />
            </HeaderContainer.ImgDiv>
          </a>
        </HeaderContainer.btnMenuEImgDiv>

        <HeaderContainer.Menu exibeMenu={showMenu}>
          {estilo === 'home' && (
            <HomeHeader
              heightDimension={heightDimension}
              widthDimension={widthDimension}
            />
          )}
          {estilo === 'cadastro' && <CadastroHeader />}
          {estilo === 'tokens' && <CadastroButton />}
        </HeaderContainer.Menu>
        <div />
      </HeaderContainer>
    </HeaderApp>
  )
}

export default Header
