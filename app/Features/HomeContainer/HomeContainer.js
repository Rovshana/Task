import React from 'react'
import Cards from '../../components/ClothesCards/Cards'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import Layout from '../../components/Layout/Layout'

export function HomeContainer(props) {
    

    return (
        < div>
           <Layout>
            
    <div className='container'>
        <div className='col-9'>
       <Cards/>
       </div>
       </div>
       </Layout>
            
       
        </div>
    )
}
