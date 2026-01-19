'use client'

import NavMenu from '../NavMenu/NavMenu';
import Button from '@/app/lib/UI/ButtonMain/Button';
import Image from 'next/image';
import logo from '../../../../public/Icons/Logo.svg'
import NavList from '../NavMenu/const/const'

import styles from './Header.module.scss';
import cn from 'classnames'
import { useScrolled } from '@/app/lib/hooks/useScrolled';
import { useBreakpoints } from '@/app/lib/hooks/useBreakpoints';
import HeaderMobile from './HeaderMobile/HeaderMobile';

export default function Header() {
 const isScrolled = useScrolled()
 const {isRetinaMobile} = useBreakpoints() 

  return (
    <header className={cn(styles.header, {[styles.scrolled]:isScrolled})}>
      <div className={styles.container}>
        {isRetinaMobile ? <HeaderMobile/>:
          <div className={styles.headerContent}>
          <Image src={logo} width={53} height={53} alt='logo'></Image>
          <NavMenu NavList={NavList} className={styles.menuContainer}/>
          <Button className={styles.walletButton}>CONNECT WALLET</Button>
        </div>}
      </div>
    </header>
  );
}