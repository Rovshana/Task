import React from 'react'
import Navbar from '../shared/Navbar/Navbar'
import Footer from '../shared/Footer/Footer'
import FooterBottom from '../shared/Footer/FooterBottom'
import { HeaderCatagory } from '../shared/HeaderCatagory/HeaderCatagory'
 function Layout({children}) {
    

    return (
        <>
            <Navbar/>
            <HeaderCatagory/>
            {children}
            <Footer/>
            <FooterBottom/>

        </>
    )
}
 export default Layout