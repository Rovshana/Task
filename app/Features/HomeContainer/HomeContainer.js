import React from 'react'
import Cards from '../../components/ClothesCards/Cards'
import Sidebar  from '../../components/Sidebar/Sidebar'
import Layout from '../../components/Layout/Layout'
import { HomeTopPart } from '../../components/homePageTop/HomeTopPart'

export function HomeContainer(props) {
    

    return (
    <>
         
            
    <div className='container'>
        <HomeTopPart/>
        <div className='row'>
        <div className='col-3'>
            <Sidebar/>
        </div>
       
        <div className='col-9'>
       <Cards/>
       </div>
       </div>
      
       </div>
    
            
       
        
        </>
    )
}
