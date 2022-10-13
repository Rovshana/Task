import React from 'react'
import { ImageHolder, MenuDiv, MenuParagraph, MenuSidebar } from './Menu.styled'
import Image from 'next/image'
import { useRouter } from 'next/router'
export function Menu(props) {
  const route = useRouter()  

    return (
        <MenuSidebar>
            <MenuDiv onClick={()=>route.push('/CategoryPage')}>
                <ImageHolder>
                <Image src="/Menu/makeUp.svg" width={13} height={24} alt=" "/>
                </ImageHolder>
                <MenuParagraph>Kozmetik</MenuParagraph>
                <ImageHolder>
               <Image src="/Menu/Arrow.svg" width={8} height={14} alt=" "/>
               </ImageHolder>
            </MenuDiv>
            <MenuDiv  onClick={()=>route.push('/CategoryPage')}>
                <ImageHolder>
                <Image src="/Menu/shoe.svg" width={30} height={16} alt=" "/>
                </ImageHolder>
                <MenuParagraph>Spor ve outdoor</MenuParagraph>
                <ImageHolder>
               <Image src="/Menu/Arrow.svg" width={8} height={14} alt=" "/>
               </ImageHolder>
            </MenuDiv>
            <MenuDiv  onClick={()=>route.push('/CategoryPage')}>
                <ImageHolder>
                <Image src="/Menu/care.svg" width={24} height={23} alt=" "/>
                </ImageHolder>
                <MenuParagraph>Kişisel bakım</MenuParagraph>
                <ImageHolder>
               <Image src="/Menu/Arrow.svg" width={8} height={14} alt=" "/>
               </ImageHolder>
            </MenuDiv>
            <MenuDiv>
                <ImageHolder>
                <Image src="/Menu/kitchen.svg" width={24} height={28} alt=" "/>
                </ImageHolder>
                <MenuParagraph>Mutfak</MenuParagraph>
                <ImageHolder>
               <Image src="/Menu/Arrow.svg" width={8} height={14} alt=" "/>
               </ImageHolder>
            </MenuDiv>
            <MenuDiv  onClick={()=>route.push('/CategoryPage')}>
                <ImageHolder>
                <Image src="/Menu/toy.svg" width={24} height={23} alt=" "/>
                </ImageHolder>
                <MenuParagraph>Oyuncaq</MenuParagraph>
                <ImageHolder>
               <Image src="/Menu/Arrow.svg" width={8} height={14} alt=" "/>
               </ImageHolder>
            </MenuDiv>
            
            <MenuDiv  onClick={()=>route.push('/CategoryPage')}>
                <ImageHolder>
                <Image src="/Menu/Book.svg" width={18} height={24} alt=" "/>
                </ImageHolder>
                <MenuParagraph>Kitap</MenuParagraph>
                <ImageHolder>
               <Image src="/Menu/Arrow.svg" width={8} height={14} alt=" "/>
               </ImageHolder>
            </MenuDiv>
            <MenuDiv  onClick={()=>route.push('/CategoryPage')}>
                <ImageHolder>
                <Image src="/Menu/house.svg" width={18} height={24} alt=" "/>
                </ImageHolder>
                <MenuParagraph>Ev ve Yaşam</MenuParagraph>
                <ImageHolder>
               <Image src="/Menu/Arrow.svg" width={8} height={14} alt=" "/>
               </ImageHolder>
            </MenuDiv>
            <MenuDiv  onClick={()=>route.push('/CategoryPage')}>
                <ImageHolder>
                <Image src="/Menu/electronic.svg" width={28} height={27} alt=" "/>
                </ImageHolder>
                <MenuParagraph>Elektronik</MenuParagraph>
                <ImageHolder>
               <Image src="/Menu/Arrow.svg" width={8} height={14} alt=" "/>
               </ImageHolder>
            </MenuDiv>
            <MenuDiv  onClick={()=>route.push('/CategoryPage')}>
                <ImageHolder>
                <Image src="/Menu/Car.svg" width={31} height={20} alt=" "/>
                </ImageHolder>
                <MenuParagraph>Araç</MenuParagraph>
                <ImageHolder>
               <Image src="/Menu/Arrow.svg" width={8} height={14} alt=" "/>
               </ImageHolder>
            </MenuDiv>
            
        </MenuSidebar>
    )
}

