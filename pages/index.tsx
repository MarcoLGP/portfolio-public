import type { NextPage } from 'next'
import Informations from '../src/components/informations/Informations'
import ScrollDown from '../src/components/scroll_down/ScrollDown'
import ContentHome from '../src/components/content_home/ContentHome'
import Header from '../src/components/header/Header'
import Develop from '../src/components/develop/Develop'
import Projects from '../src/components/projects/Projects'
import Experiences from '../src/components/experiences/Experiences'
import Footer from '../src/components/footer/Footer'
import { Dispatch, SetStateAction, useState } from 'react'

export interface IOpenMenu {
  openMobileMenu: boolean,
  setOpenMobileMenu: Dispatch<SetStateAction<boolean>>
}

const Home: NextPage = () => {

  const [openMobileMenu, setOpenMobileMenu] = useState(false)

  return (
    <div onClick={() => openMobileMenu && setOpenMobileMenu(false)}>
      <Header openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu} />
      <ContentHome />
      <ScrollDown />
      <Informations />
      <Develop />
      <Experiences />
      <Projects />
      <Footer />
    </div>
  )
}

export default Home
