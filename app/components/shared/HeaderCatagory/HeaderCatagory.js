
import React, { useState } from 'react'
import { CatagoryContainer, ListItem, Ul } from './HeaderCatagory.styled'
import MenuIcon from '@mui/icons-material/Menu';
import SubMenu from '../../SubMenu/SubMenu';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useRouter } from 'next/router';
import { MenuContainer } from '../../SubMenu/SubMenu.styled';
import {Menu} from '../../Menu/Menu'
export  function HeaderCatagory(props) {
    const  [show, setShow] = useState(false)
    const [modal, setModal] = useState(false)
const changeShow = ()=>{
    setShow(!show)
}

    return (
        <CatagoryContainer>
        <div style={{display:"flex",flexDirection:"column"}}>
            {
           !modal ? <MenuIcon style={{color: 'red'}} onClick={()=>setModal(!modal)}  /> : <CloseOutlinedIcon style={{color: 'red'}} onClick={()=>setModal(!modal)}/>
            
            }{
                modal? <Menu/>: ""
            }
            
        </div>
        
        <div style={{display:"flex",flexDirection:"column"}}>
        <Ul onClick={()=>setShow(!show)} >
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
        {
            show?(
                <SubMenu/>
                ): " "
            }
            </div>
            
        </CatagoryContainer>
    )
}


