import React, { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DropDownItem, DropdownWithInput } from "../tools";

function Sidebar(props) {
  const [open, setOpen] = useState(false);
  const [gender, setGender] = useState(false);
  const [age, setAge] = useState(false)
  const [size, setSize] = useState(false)

  //   const [order, setOrder] = useState("Sıralama seçin")
  //   const handleFilters = (e)=>{
  //       const value = e.target.value;
  //       setOrder({
  //           ...order,
  //           [e.target.name]:value,
  //       })}

  return (
    <>
      <div>
        <div className="menuTriggerDiv">
          <p className="menuTrigger" onClick={() => setOpen(!open)}>
            İlgili Kategoriler
          </p>

          {open ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        </div>
        {open ? (
          <div className="dropdownMenu">
            <ul style={{ padding: 0 }}>
              <DropDownItem text={"Kazak"} count={3} />
              <DropDownItem text={"Pantalon"} count={41} />
              <DropDownItem text={"Jean"} count={31} />
              <DropDownItem text={"Kaban"} count={19} />
              <DropDownItem text={"T-shirt"} count={15} />
              <DropDownItem text={"Elbise"} count={1} />
            </ul>
            <span className="line"></span>
          </div>
        ) : (
          ""
        )}
         <div className='menuTriggerDiv'>
                            <p className='menuTrigger' onClick={()=>setGender(!gender)}>Cinsiyet</p> 
                              { open? <ExpandMoreIcon/> :<ExpandLessIcon/> }
                        </div>
                        {
                            gender?(
                                <div className="dropdownMenu">
                            <ul style={{ padding: 0 }} >
                            <DropdownWithInput value={"Kadin"} text={"Kadın"} count={5}/>
                            <DropdownWithInput value={"Eadin"} text={"Erkek"} count={41}/>
                            <DropdownWithInput value={"Çocuk"} text={"Çocuk"} count={5}/>
                            </ul>

                        </div>
                            ): " "
                        }
                         <span className="line"></span>
         <div className='menuTriggerDiv'>
                            <p className='menuTrigger' onClick={()=>setSize(!size)}>Beden</p> 
                              { size? <ExpandMoreIcon/> :<ExpandLessIcon/> }
                        </div>
                        {
                            size?(
                                <div className="dropdownMenu">
                            <ul style={{ padding: 0 }} >
                            <DropdownWithInput value={"Xs"} text={"Xs"} count={45}/>
                            <DropdownWithInput value={"S"} text={"S"} count={41}/>
                            <DropdownWithInput value={"M"} text={"M"} count={5}/>
                            <DropdownWithInput value={"L"} text={"L"} count={15}/>
                            <DropdownWithInput value={"XL"} text={"XL"} count={35}/>
                            <DropdownWithInput value={"XLL"} text={"XLL"} count={54}/>
                            </ul>

                        </div>
                            ): " "
                        }
                         <span className="line"></span>
         <div className='menuTriggerDiv'>
                            <p className='menuTrigger' onClick={()=>setAge(!age)}>Yaş oranı</p> 
                              { age? <ExpandMoreIcon/> :<ExpandLessIcon/> }
                        </div>
                        {
                            age?(
                                <div className="dropdownMenu">
                            <ul style={{ padding: 0 }} >
                            <DropdownWithInput value={"3-6ay"} text={"3-6 AY"} count={5}/>
                            <DropdownWithInput value={"6-9ay"} text={"3-9 AY"} count={41}/>
                            <DropdownWithInput value={"9-2ay"} text={"9-12 AY"} count={53}/>
                            <DropdownWithInput value={"18-24ay"} text={"18-24 AY"} count={59}/>
                            <DropdownWithInput value={"c"} text={"c"} count={10}/>
                            </ul>

                        </div>
                            ): " "
                        }
                         <span className="line"></span>
      </div>
    </>
  );
}

export default Sidebar;
