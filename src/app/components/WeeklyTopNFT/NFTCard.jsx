// src/app/components/WeeklyTopNFT/NFTCard.jsx
'use client';

import { formatTimeRemaining } from '../../lib/utils/helpers';
import { motion } from 'framer-motion';
import styles from './NFTCard.module.scss';
import Image from 'next/image';
import Button from '@/app/lib/UI/ButtonMain/Button';


export default function NFTCard({ nft }) {
  return (
    <motion.div 
      className={styles.card}
      whileHover={{ y: -5 }}
    >
      <div className={styles.imageContainer}>
        <Image src={nft.imageUrl} alt='picture' className={styles.image}/> 
        <div className={styles.timeInfo}>
            <p className={styles.value}>{formatTimeRemaining(nft.endTime)}</p>
          </div>
      </div>
      
      <div className={styles.cardContent}>
        <h3 className={styles.nftName}>{nft.name}</h3>
        
        <div className={styles.details}>
          <div className={styles.bidInfo}>
            <p className={styles.label}>Current bid</p>
            <p className={styles.value}>{nft.currentBid} ETH</p>
          </div>
          <Button className={styles.button}>PLACE BID</Button>
         
        </div>
        
        
      </div>
    </motion.div>
  );
}