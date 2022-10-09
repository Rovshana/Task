import React, { useState } from 'react'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

 function Sidebar(props) {

    const [open, setOpen] = useState(false)
//   const [order, setOrder] = useState("Sıralama seçin")
//   const handleFilters = (e)=>{
//       const value = e.target.value;
//       setOrder({
//           ...order,
//           [e.target.name]:value, 
//       })}


    return (
        <>
        {/* <Select  name="order" onChange={handleFilters}>
                        <Option disabled selected>Sıralama seçin</Option>
                        <Option>Önerilen sıralama</Option>
                        <Option>En düşük fiyat</Option>
                        <Option>En yüksek fiyat</Option>
                        <Option>En yeniler</Option>
                        <Option>En çok satanlar</Option>
                        <Option>En çok beğenilenler</Option>
                        <Option>En çok değerlendirilenler</Option>
                    </Select> */}
                    <div>
                        <div className='menuTriggerDiv'>
                            <p className='menuTrigger' onClick={()=>setOpen(!open)}>İlgili Kategoriler</p> 

                        { open? <ExpandMoreIcon/> :<ExpandLessIcon/> }
                        </div>
                        {
                            open?(
                                <div className='dropdownMenu'>
                            <ul>
                                <DropDownItem text={"Kazak"} count={3}/>
                                <DropDownItem text={"Pantalon"} count={41}/>
                                <DropDownItem text={"Jean"} count={31}/>
                                <DropDownItem text={"Kaban"} count={19}/>
                                <DropDownItem text={"T-shirt"} count={15}/>
                                <DropDownItem text={"Elbise"} count={1}/>
                            </ul>
                            <span className='line'></span>

                        </div>
                            ) : ""
                        }

                    </div>
                   
                    
        </>
    )
}
 function DropDownItem (props){
    return(
<li className='dropdownItem'>
    <p>{props.text}</p>
    <span>{props.count}</span>
</li>

    )
 }




export default Sidebar