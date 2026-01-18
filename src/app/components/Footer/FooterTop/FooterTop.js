import React from 'react'
import Image from 'next/image'
import NavMenu from '../../NavMenu/NavMenu'
import st from './FooterTop.module.scss'
import logo from '../../../../../public/Icons/Logo_name.svg'
import {NavList} from '../const/const'
import cn from 'classnames'

const FooterTop = () => {
  return (
     <div className={st.top}>
      <Image src={logo} width={144} height={46} alt = {'logo footer'}/>
      <NavMenu NavList={NavList} className={st.menuContainer}/>
      </div>
  )
}

export default FooterTop
