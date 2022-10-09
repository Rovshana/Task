  export function DropDownItem (props){
    return(
<li className='dropdownItem'>
    <p>{props.text}</p>
    <span>{props.count}</span>
    
</li>

    )
 }
 export function DropdownWithInput(props){

    return(
        <li className="dropdownGender">
    <input type="checkbox" value={props.value}/>
    <p>{props.text}</p>
    <span>{props.count}</span>
    </li>
    )

 }