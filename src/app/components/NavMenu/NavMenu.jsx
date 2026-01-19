import React from 'react'
import Link from 'next/link'
import cn from 'classnames'
import styles from './NavMenu.module.scss'
import data from './const/const'

const NavMenu = ({NavList=data, className}) => {
  return (
    <div className={cn(styles.text, className )}>
     { NavList.map(({name, id, link})=> <Link key={id} href={link}>{name}</Link>)}
     
    </div>
  )
}

export default NavMenu
