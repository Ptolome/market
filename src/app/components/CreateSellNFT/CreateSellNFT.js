import React from 'react'
import st from './CreateSellNFT.module.scss'
import Button from '@/app/lib/UI/ButtonMain/Button'
import stone from '../../../../public/Images/stone.png'
import Image from 'next/image'
import cn from 'classnames'

const CreateSellNFT = () => {
  return (
    <div className={cn(st.container, 'container')} > 
        <div className={st.leftColumn}>
            <div className={st.title}>Create and Sell NFTs</div>
            <div className={st.subtitle}>World’s Largest NFT Place</div>
            <div className={st.buttons}>
            <Button variant='secondary' className={st.buttonLeft}>Explore More</Button>
            <Button className={st.buttonRight}>Sell Artwork</Button>
            </div>
        </div>
        <div className={st.rightColumn}>
            <Image src={stone} alt = 'sotone' className={st.image}/>
        </div>
    </div>
  )
}

export default CreateSellNFT
