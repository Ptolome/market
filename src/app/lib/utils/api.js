// src/app/lib/utils/api.js
import axios from 'axios';
import { generateRandomBid, generateRandomEndTime, getRandomImage } from './helpers';


export const fetchNFTsFromAPI = async () => {
  try {
    console.log('Fetching NFTs from API...');
    const response = await axios.get('https://api.coingecko.com/api/v3/nfts/list');
    const apiNFTs = response.data;
    
    return apiNFTs.slice(0, 10).map(nft => ({
      id: nft.id,
      name: nft.name,
      currentBid: generateRandomBid(),
      endTime: generateRandomEndTime(),
      imageUrl: getRandomImage(),
    }));
  } catch (error) {
    console.error('Error fetching NFTs:', error.message);
    throw error;
  }
};