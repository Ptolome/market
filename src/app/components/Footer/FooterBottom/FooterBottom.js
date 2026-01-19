'use client'
import React from 'react'
import Image from 'next/image'
import st from './FooterBottom.module.scss'
import logo from '../../../../../public/Icons/footer_bottom_logo.svg'
import cn from 'classnames'
import SocialList from '../../socialList/SocialList'
import { useBreakpoints } from '@/app/lib/hooks/useBreakpoints'

const FooterBottom = () => {
  const {isRetinaMobile}= useBreakpoints()
  return (
     <div className={cn(st.bottom)}>
     { !isRetinaMobile && <Image src={logo} width={45} height={18} alt = {'data'}/>}
      <SocialList className={st.iconsMobile}/>
      </div>
  )
}

export default FooterBottom
