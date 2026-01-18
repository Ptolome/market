'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

import herro from '../../../../public/Images/hero-header.png'
import arrow from '../../../../public/Icons/arrow-spiral.svg'
import Button from '@/app/lib/UI/ButtonMain/Button';
import styles from './Hero.module.scss';
import cn from 'classnames'
const HeroSection = () => {
  const imageVariants = {
    hidden: { 
      x: 100, 
      opacity: 0,
    },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const arrowVariants = {
    hidden: { 
      opacity: 0,
      rotate: 3
    },
    visible: { 
      opacity: 1,
      transition: {
        delay: 1.2,
        duration: 0.4,
        rotate: 3
      }
    }
  };
  const titleVariants = {
    hidden: { 
      opacity: 0,
    },
    visible: { 
      opacity: 1,
      transition: {
        delay: 0,
        duration: 0.4,
      }
    }
  };
   const descriptionVariants = {
    hidden: { 
      opacity: 0,
    },
    visible: { 
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.4,
      }
    }
  };
  const buttonsVariants = {
    hidden: { 
      opacity: 0,
    },
    visible: { 
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 0.4,
      }
    }
  };

  const statisticVariants = {
    hidden: { 
      opacity: 0,
    },
    visible: { 
      opacity: 1,
      transition: {
        delay: 0.6,
        duration: 0.4,
      }
    }
  };

  const stats = [
    { id:1, value: '430K+', label: 'Art Works' },
    { id:2, value: '159K+', label: 'Creators' },
    { id:3, value: '87K+', label: 'Collections' },
  ];

  return (
    <section className={styles.hero}>
      <div className={cn(styles.container, 'container')}>
        
        <div className={styles.leftSection}>
                    
          <motion.h1
            variants={titleVariants}
            initial="hidden"
            animate="visible"
             className={styles.title}>
            Discover And Create NFTs
          </motion.h1>
          
          <motion.p
          variants={descriptionVariants}
          initial="hidden"
          animate="visible"
          className={styles.description}>
            Discover, Create and Sell NFTs On Our NFT Marketplace With Over 
            Thousands Of NFTs And Get a <span className={styles.highlight}>$20 bonus</span>.
          </motion.p>
          
          <motion.div 
          variants={buttonsVariants}
          initial="hidden"
          animate="visible"
          className={styles.buttons}>
            <Button className={styles.walletButton}>EXPLORE MORE</Button>
            <Button className={styles.walletButton} variant='secondary'>
              CREATE NFT
            </Button>
          </motion.div>
          
          <motion.div 
          variants={statisticVariants}
          initial="hidden"
          animate="visible"className={styles.stats}>
            {stats.map(({id,value,label}) => (
              <div key={id} className={styles.statItem}>
                <div className={styles.statValue}>{value}</div>
                <div className={styles.statLabel}>{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className={styles.rightSection}>
          <motion.div 
            className={styles.imageContainer}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <Image
              src={herro}
              alt="NFT Artwork"
              width={780}
              height={543}
              className={styles.nftImage}
              priority
            />
            
            <motion.div 
              className={styles.arrowContainer}
              variants={arrowVariants}
              initial="hidden"
              animate="visible"
              
            >
            <Image
              src={arrow}
              alt="NFT Artwork"
              className={styles.arrow}
               
            />
            
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;