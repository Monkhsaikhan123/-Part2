import React from 'react'
import '../styles/UserMenu.css'
import {MenuList} from '../helpers/MenuList'
import MenuItem from '../components/MenuItem'

const UserMenu = () => {
  return (
    <div className='menu'>
        <div className='menuList'>
            {MenuList.map((menuItem, key)=> {
                return (
                    <MenuItem 
                        key={key} 
                        image={menuItem.image} 
                        name={menuItem.name} 
                        desc={menuItem.desc}/>
                    )
                })}
        </div>
    </div>
  )
}

export default UserMenu