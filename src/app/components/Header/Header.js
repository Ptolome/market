'use client'

import NavMenu from '../NavMenu/NavMenu';
import Button from '@/app/lib/UI/ButtonMain/Button';
import Image from 'next/image';
import logo from '../../../../public/Icons/Logo.svg'
import NavList from './const/const'

import styles from './Header.module.scss';
import cn from 'classnames'
import { useScrolled } from '@/app/lib/hooks/useScrolled';

export default function Header() {
 const isScrolled = useScrolled()
  return (
    <header className={cn(styles.header, {[styles.scrolled]:isScrolled})}>
      <div className="container">
        <div className={styles.headerContent}>
          <Image src={logo} width={53} height={53} alt='logo'></Image>
          <NavMenu NavList={NavList} className={styles.menuContainer}/>
          <Button className={styles.walletButton}>CONNECT WALLET</Button>
        </div>
      </div>
    </header>
  );
}