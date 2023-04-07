import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export const getItems = createAsyncThunk("getItems/fetch", async (_, thunkAPI) => {
  try {
    const items = await fetch("http://localhost:4000/items");
    return await items.json();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const addItems = createAsyncThunk("addItems/fetch", async (data, thunkAPI) => {
   try {
    const formData = new FormData();
    
    formData.append("img" , data.image)
    formData.append("name" , data.itemName)
    formData.append("description", data.description)
    formData.append("starting_price", data.startingPrice)  
    formData.append("blitzPrice" ,data.blitzPrice)
    formData.append("category" , data.category)
    console.log(data.image);    

    const item = await fetch("http://localhost:4000/items", {
        method: "POST",
        body: formData
    })
    return await item.json()
   } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
   }
})

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reduser: {},
  extraReducers: (builder) => {
    builder.addCase(getItems.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(getItems.rejected, (state, action) => {
        state.loading = false; 
        state.error = action.payload;
    })
    .addCase(getItems.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null
        state.items = action.payload;
    })
  },
});

export default itemsSlice.reducer;
