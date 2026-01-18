import React from 'react'
import Image from 'next/image'
import NavMenu from '../../NavMenu/NavMenu'
import st from './FooterBottom.module.scss'
import logo from '../../../../../public/Icons/footer_bottom_logo.svg'
import {SocialList} from '../const/const'
import cn from 'classnames'
import Link from 'next/link'

const FooterBottom = () => {
  return (
     <div className={cn(st.bottom)}>
      <Image src={logo} width={45} height={18} alt = {'data'}/>
       <div className={st.socialContainer}> 
        {SocialList.map(({id, name, link}) => (
          <Link href={link} key={id} className={st.socialItem}>
            <div className={st.imageWrapper}>
              <Image src={name} alt={`Social icon ${id}`} fill className={st.image}/>
            </div>
          </Link>
        ))}
      </div>
      </div>
  )
}

export default FooterBottom
