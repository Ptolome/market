// src/app/lib/utils/helpers.js
import {image1,image2,image3,image4} from '../../../../public/Images'
const pictures={
  1:image1,
  2:image2,
  3:image3,
  4:image4
}
export const generateRandomBid = () => {
  return parseFloat((Math.random() * (5 - 0.5) + 0.5).toFixed(2));
};

export const generateRandomEndTime = () => {
  const days = Math.floor(Math.random() * 7) + 1;
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + days);
  return futureDate.toISOString();
};

export const getRandomImage = () => {
  const imageCount =4 ;
  const randomIndex = Math.floor(Math.random() * imageCount) + 1;
  return pictures[randomIndex];
};

export const formatTimeRemaining = (endTime) => {
  const now = new Date();
  const end = new Date(endTime);
  const diff = end.getTime() - now.getTime();
  
  if (diff <= 0) return 'Ended';
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
  return `${days}d ${hours}h`;
};