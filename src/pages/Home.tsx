import React from 'react'
import Navbar from '../components/reuseble/Navbar'
import { Container } from 'semantic-ui-react'
import HeaderHome from '../components/Header.Home'

const Home = () => {
  return (
    <Container>
        <Navbar/>
        <HeaderHome/>
    </Container>
  )
}

export default Home