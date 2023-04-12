import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  auctions: [],
  loading: false,
  error: null,
};
export const addAuction = createAsyncThunk(
  "addAuction/fetch",
  async (data, thunkAPI) => {
    try {
      const auct = await fetch("http://localhost:4000/auction/add", {
        method: "POST",
        body: data,
      });
      return await auct.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAuc = createAsyncThunk("getAuc/fetch", async (_, thunkAPI) => {
  try {
    const items = await fetch("http://localhost:4000/auctions");
    return await items.json();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const payAuc = createAsyncThunk(
  "payAuc/fetch",
  async (data, thunkAPI) => {
    try {
      const item = await fetch("http://localhost:4000/auction/" + data.id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${thunkAPI.getState().authSlice.token}`,
        },
        body: JSON.stringify({ amount: data.price }),     
      });
      return await item.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const auctionSlise = createSlice({
  name: "auction",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addAuction.pending, (state, action) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(addAuction.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(addAuction.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.auctions = action.payload;
      })
      .addCase(getAuc.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAuc.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getAuc.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.auctions = action.payload;
      });
  },
});
export default auctionSlise.reducer;
