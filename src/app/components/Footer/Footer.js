import st from './Footer.module.scss'
import FooterBottom from './FooterBottom/FooterBottom'
import FooterTop from './FooterTop/FooterTop'


const Footer = () => {
  return (
    <div className={st.Footer}>
      <div className='container'>
        <FooterTop/>
        <FooterBottom/>
      </div>
    </div>
  )
}

export default Footer
