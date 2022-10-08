
import React, { useState } from 'react'
import { CatagoryContainer, ListItem, Ul } from './HeaderCatagory.styled'
import MenuIcon from '@mui/icons-material/Menu';
import SubMenu from '../../SubMenu/SubMenu';
import { useRouter } from 'next/router';
export function HeaderCatagory(props) {
    const  [show, setShow] = useState(false)
const changeShow = ()=>{
    setShow(!show)
}

    return (
        <CatagoryContainer>
        <div>
            <MenuIcon style={{color: 'red'}} onClick={changeShow} />
            {
                show? (
                    <SubMenu/>
                ): null
            }
        </div>
        <Ul>
            <ListItem>Kadin</ListItem>
            <ListItem>Erkek</ListItem>
            <ListItem>Çocuk</ListItem>
            <ListItem>Ayakkabi & Çanta</ListItem>
            <ListItem>Saat & Aksesuar</ListItem>
            <ListItem>Spor & Outdoor</ListItem>
            <ListItem>Kitap & Hobi</ListItem>
            <ListItem>Oto & Bahçe</ListItem>
            <ListItem>Elektronik</ListItem>
            <ListItem>Süpermarket</ListItem>
            <ListItem> Süper Fırsatlar</ListItem>
            <ListItem>Kampanyalar</ListItem>
            <ListItem>Indirimler</ListItem>
            <ListItem>Blog</ListItem>
            <ListItem>Markalar</ListItem>
        </Ul>
            
        </CatagoryContainer>
    )
}
