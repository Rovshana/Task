import React from 'react'
import { ImageHolder, MenuDiv, MenuParagraph, MenuSidebar } from './Menu.styled'
import Image from 'next/Image'
export function Menu(props) {
    

    return (
        <MenuSidebar>
            <MenuDiv>
                <ImageHolder>
                <Image src="/Menu/makeUp.svg" width={13} height={24}/>
                </ImageHolder>
                <MenuParagraph>Kozmetik</MenuParagraph>
                <ImageHolder>
               <Image src="/Menu/Arrow.svg" width={8} height={14}/>
               </ImageHolder>
            </MenuDiv>
            <MenuDiv>
                <ImageHolder>
                <Image src="/Menu/shoe.svg" width={30} height={16}/>
                </ImageHolder>
                <MenuParagraph>Spor ve outdoor</MenuParagraph>
                <ImageHolder>
               <Image src="/Menu/Arrow.svg" width={8} height={14}/>
               </ImageHolder>
            </MenuDiv>
            <MenuDiv>
                <ImageHolder>
                <Image src="/Menu/care.svg" width={24} height={23}/>
                </ImageHolder>
                <MenuParagraph>Kişisel bakım</MenuParagraph>
                <ImageHolder>
               <Image src="/Menu/Arrow.svg" width={8} height={14}/>
               </ImageHolder>
            </MenuDiv>
            <MenuDiv>
                <ImageHolder>
                <Image src="/Menu/kitchen.svg" width={24} height={28}/>
                </ImageHolder>
                <MenuParagraph>Mutfak</MenuParagraph>
                <ImageHolder>
               <Image src="/Menu/Arrow.svg" width={8} height={14}/>
               </ImageHolder>
            </MenuDiv>
            <MenuDiv>
                <ImageHolder>
                <Image src="/Menu/toy.svg" width={24} height={23}/>
                </ImageHolder>
                <MenuParagraph>Oyuncaq</MenuParagraph>
                <ImageHolder>
               <Image src="/Menu/Arrow.svg" width={8} height={14}/>
               </ImageHolder>
            </MenuDiv>
            
            <MenuDiv>
                <ImageHolder>
                <Image src="/Menu/Book.svg" width={18} height={24}/>
                </ImageHolder>
                <MenuParagraph>Kitap</MenuParagraph>
                <ImageHolder>
               <Image src="/Menu/Arrow.svg" width={8} height={14}/>
               </ImageHolder>
            </MenuDiv>
            <MenuDiv>
                <ImageHolder>
                <Image src="/Menu/house.svg" width={18} height={24}/>
                </ImageHolder>
                <MenuParagraph>Ev ve Yaşam</MenuParagraph>
                <ImageHolder>
               <Image src="/Menu/Arrow.svg" width={8} height={14}/>
               </ImageHolder>
            </MenuDiv>
            <MenuDiv>
                <ImageHolder>
                <Image src="/Menu/electronic.svg" width={28} height={27}/>
                </ImageHolder>
                <MenuParagraph>Elektronik</MenuParagraph>
                <ImageHolder>
               <Image src="/Menu/Arrow.svg" width={8} height={14}/>
               </ImageHolder>
            </MenuDiv>
            <MenuDiv>
                <ImageHolder>
                <Image src="/Menu/Car.svg" width={31} height={20}/>
                </ImageHolder>
                <MenuParagraph>Araç</MenuParagraph>
                <ImageHolder>
               <Image src="/Menu/Arrow.svg" width={8} height={14}/>
               </ImageHolder>
            </MenuDiv>
            
        </MenuSidebar>
    )
}

