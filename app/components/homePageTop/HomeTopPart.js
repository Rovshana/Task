import React from 'react'
import { useState } from 'react'
import { Button, Count, FirstELement, MainDiv, Number, Option, Select } from './HomePageTop.styled'
import Image from 'next/image'
export function HomeTopPart(props) {
    const [order, setOrder] = useState("Sıralama seçin")
    const handleFilters = (e)=>{
        const value = e.target.value;
        setOrder({
            ...order,
            [e.target.name]:value, 
        })}
    return (
        <MainDiv>
            <FirstELement>
            <Image src="/Navbar_Svgs/logo.svg" width={15}height={16} alt=".."/>
            <Count>Ürün sayı:</Count>
            <Number>23244</Number>
            </FirstELement>
            <div>
                <Button>Tumu</Button>
                <Button>Yeni gelenler</Button>
                <Button>İndirimler</Button>
                <Button>Çok satanlar</Button>
                
            </div>
            <div>
            
                    <Select  name="order" onChange={handleFilters}>
                        <Option disabled selected>Sıralama seçin</Option>
                        <Option>Önerilen sıralama</Option>
                        <Option>En düşük fiyat</Option>
                        <Option>En yüksek fiyat</Option>
                        <Option>En yeniler</Option>
                        <Option>En çok satanlar</Option>
                        <Option>En çok beğenilenler</Option>
                        <Option>En çok değerlendirilenler</Option>
                    </Select>
            </div>
            
        </MainDiv>
    )
}
