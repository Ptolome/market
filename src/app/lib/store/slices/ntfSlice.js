import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchNFTsFromAPI } from '../../utils/api';

// Асинхронный Thunk для загрузки NFT
export const fetchNFTs = createAsyncThunk('nft/fetchNFTs', async () => {
  const response = await fetchNFTsFromAPI();
  console.log(response)
  return response;
});

const nftSlice = createSlice({
  name: 'nft',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNFTs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNFTs.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchNFTs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch NFTs';
      });
  },
});

export default nftSlice.reducer;