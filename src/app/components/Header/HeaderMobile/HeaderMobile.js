import {lazy,Suspense, useState} from 'react'
import Button from "@/app/lib/UI/ButtonMain/Button"
import Image from "next/image"
import { Logo_black, burger_menu, x_black } from "../../../../../public/Icons"
import styles from './HeaderMobile.module.scss'
import SocialList from '../../socialList/SocialList'
import iconList from './const/const'
import NavMenu from '../../NavMenu/NavMenu'



const MobileModal = lazy(() => import('@/app/lib/UI/MobileModal/MobileModal'));

const HeaderMobile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

 return (
        <>
            <div className={styles.container}>
                <Button variant="default">
                    <Image src={Logo_black} alt='logotype in menu'/>
                </Button>
                <Button variant="default" onClick={() => setIsModalOpen(true)}>
                    <Image src={burger_menu} alt='burger menu' />
                </Button>
            </div>

            {isModalOpen && (
                <Suspense fallback={<div>Загрузка ...</div>}>
                    <MobileModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        showCloseButton={false}
                        hideHeader={true}
                        title=""
                        className={styles.mobileModal}
                    >
                        <div className={styles.modalContentWrapper}>
                            <div className={styles.modalHeader}>
                                <Button variant="default" className={styles.logoButton}>
                                    <Image src={Logo_black} alt='logotype in menu'/>
                                </Button>
                                <Button 
                                    variant="default" 
                                    onClick={() => setIsModalOpen(false)}
                                    className={styles.closeButton}
                                >
                                    <Image src={x_black} alt='exit menu' />
                                </Button>
                            </div>
                            
                            <div className={styles.modalBody}>
                                <div className={styles.navigation}>
                                     <NavMenu className={styles.socialLinks}/>
                                    <SocialList dataList={iconList} className={styles.icons}/>
                                </div>
                            </div>
                            
                            <div className={styles.buttonWrapper}>
                                <Button className={styles.connectButton}>CONNECT WALLET</Button>
                            </div>
                        </div>
                    </MobileModal>
                </Suspense>
            )}
        </>
    )
}

export default HeaderMobile
