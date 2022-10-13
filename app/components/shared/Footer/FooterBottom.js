import React from 'react'
import Image  from 'next/image'
import { FooterBottomContainer, FooterBottomList, FooterConent } from './Footer.styled'

 function FooterBottom(props) {
    

    return (
        <FooterBottomContainer>
            <FooterConent>
                <FooterBottomList>© Telif Hakkı 2022 -  testwebsite.com</FooterBottomList>
                <FooterBottomList>Kullanım Koşulları</FooterBottomList>
                <FooterBottomList>KVK ve Gizlilik Politikası</FooterBottomList>
            </FooterConent>
            <div>
                <Image src='/Footer/masterCardImg.png' width={36} height={22} alt=".." />
                <Image src='/Footer/Visa.png' width={26} height={22} alt=".." />
            </div>
        </FooterBottomContainer>
    )
}
export default FooterBottom