import React from 'react'
import '../styles/Taniltsuulga.css'
import {MenuList1} from '../helpers/MenuList1'
import MenuItem1 from './MenuItem1'
import '../styles/Taniltsuulga.css'

const Taniltsuulga = () => {
  return (
    <div className='menu1'>
        <h1 className='menuTitle1'>Бидний хийсэн ажил</h1>
        <div className='menuList1'>
            {MenuList1.map((menuItem1, key)=>{
                return(
                        <MenuItem1
                            key={key}  
                            image={menuItem1.image} 
                            name={menuItem1.name} 
                            desc={menuItem1.desc}/>
                )
            })}
        </div>
    </div>
  )
}

export default Taniltsuulga