// src/app/components/WeeklyTopNFT/index.jsx
'use client';

import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNFTs } from '../../lib/store/slices/ntfSlice';
import NFTCard from './NFTCard';
import { motion } from 'framer-motion';
import styles from './WeeklyTopNFT.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { arrowLeft, arrowRight } from '../../../../public/Icons';
import Image from 'next/image';
import cn from 'classnames'

export default function WeeklyTopNFT() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.nft);
  const swiperRef = useRef(null);

  useEffect(() => {
    dispatch(fetchNFTs());
  }, [dispatch]);

  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  if (loading) return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Weekly - Top NFT</h2>
        <div className={styles.loading}>Loading NFTs...</div>
      </div>
    </section>
  );

  if (error) return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Weekly - Top NFT</h2>
        <div className={styles.error}>Error loading NFTs. Please try again later.</div>
      </div>
    </section>
  );

  return (
    <section className={styles.section}>
      
        <h2 className={styles.title}>Weekly - Top NFT</h2>

        <Swiper
          ref={swiperRef}
          slidesPerView='auto'
          spaceBetween={30}
          className={styles.fullWidthSwiper}
          loop={true}
          height={'auto'}
        >
          {items.map((nft, index) => (
            <SwiperSlide key={nft.id} className={styles.slide}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <NFTCard nft={nft} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
          
        <div className={styles.navigation}>
          <div className={styles.buttonsContainer}>
          <button 
            onClick={handlePrevClick}
            className={cn(styles.navButton, styles.left)}
            aria-label="Previous slide"
          >
            <Image src={arrowLeft} width={24} height={24} alt='button prev'/>
          </button>
          <div className={styles.stick}></div>
          <button 
            onClick={handleNextClick}
            className={cn(styles.navButton, styles.right)}
            aria-label="Next slide"
          >
           <Image src={arrowRight} width={24} height={24} alt='button next'/>
          </button>
        </div>
        </div>

    </section>
  );
}