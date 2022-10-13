import React from 'react'
import { Button, Center, ListElement, Ul, Main, ProductImage } from './Category.styled';
import Image from 'next/Image'
import { useRouter } from 'next/router';

export function Category(props) {
    const route = useRouter()

    return (
        <Main className='container'>
            <div className='col-7'>
            <div>
                <Button>Kadin</Button>
                <Button>Erkek</Button>
                <Button>Cocuk</Button>
                </div>
                <Center>
                <Ul>
                    <ListElement>Giyim</ListElement>
                    <ListElement>Elbise</ListElement>
                    <ListElement>T-shirt</ListElement>
                    <ListElement>Bluz</ListElement>
                    <ListElement>Gömlek</ListElement>
            </Ul>

            <Ul>
                <ListElement>Spor & Outdoor </ListElement>
                <ListElement>SweetShirt</ListElement>
                <ListElement>T-shirt</ListElement>
                <ListElement>Eşofman </ListElement>
                <ListElement>Koşu ayyakabisi</ListElement>
            </Ul>
            <Ul>
                <ListElement>Ayakkabı</ListElement>
                <ListElement>Topuklu Ayakkabı</ListElement>
                <ListElement>Sneaker</ListElement>
                <ListElement>Bot & Çizme</ListElement>
                <ListElement>Günlük Ayakkabı</ListElement>
                <ListElement>Babet</ListElement>
                <ListElement>Ev Terliği & Botu</ListElement>
            </Ul>

            <Ul>
                <ListElement> Aksesuar & Çanta</ListElement>
                <ListElement>Çanta</ListElement>
                <ListElement>Güneş Gözlüğü</ListElement>
                <ListElement>Takı</ListElement>
                <ListElement>Atkı & Bere & Eldiven</ListElement>
            </Ul>
                </Center>
        
                <Center>
                <Ul>
                    <ListElement> Kozmetik & Kişisel </ListElement>
                    <ListElement>Parfüm & Deodorant</ListElement>
                    <ListElement>Cilt Bakım</ListElement>
                    <ListElement>Göz Makyajı</ListElement>
                    <ListElement>Güneş Ürünleri</ListElement>
            </Ul>

            <Ul>
                <ListElement>Lüks & Designer </ListElement>
                <ListElement>SweetShirt</ListElement>
                <ListElement>T-shirt</ListElement>
                <ListElement>Eşofman </ListElement>
                <ListElement>Koşu ayyakabisi</ListElement>
            </Ul>
            <Ul>
                <ListElement>İç Giyim </ListElement>
                <ListElement>Topuklu Ayakkabı</ListElement>
                <ListElement>Sneaker</ListElement>
                <ListElement>Bot & Çizme</ListElement>
                <ListElement>Günlük Ayakkabı</ListElement>
                <ListElement>Babet</ListElement>
                <ListElement>Ev Terliği & Botu</ListElement>
            </Ul>

            <Ul>
                <ListElement>Kazak & Hırk</ListElement>
                <ListElement>Çanta</ListElement>
                <ListElement>Güneş Gözlüğü</ListElement>
                <ListElement>Takı</ListElement>
                <ListElement>Atkı & Bere & Eldiven</ListElement>
            </Ul>
                </Center>
              
          



            </div>
            
            <ProductImage className='col-3'>
     <Image src="/category/shirt.svg" width={308} height={508} alt=" shirt" onClick={()=>route.push('/')}/>
            </ProductImage>
        </Main>
    )
}
