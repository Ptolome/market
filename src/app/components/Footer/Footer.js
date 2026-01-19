'use client'
import { useBreakpoints } from '@/app/lib/hooks/useBreakpoints'
import st from './Footer.module.scss'
import FooterBottom from './FooterBottom/FooterBottom'
import FooterTop from './FooterTop/FooterTop'
import Image from 'next/image'
import footer_log_mobile from '../../../../public/Images/footer-logo-mobile.png'


const Footer = () => {
  const {isRetinaMobile}=useBreakpoints()
  return (
    <div className={st.Footer}>
      <div className={st.container}>
        <FooterTop/>
        <FooterBottom/>
      </div>
      {isRetinaMobile && (
        <div className={st.logo}><Image src={footer_log_mobile} width={248} height={18} alt='logo'/>
        </div>)}
    </div>
  )
}

export default Footer
