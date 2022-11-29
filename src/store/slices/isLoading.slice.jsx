import { createSlice } from '@reduxjs/toolkit';

export const isloading = createSlice({
    name: 'isLoading',
    initialState: false ,
    reducers: {
       setIsLoading : (state , action) =>{
        return  action.payload
       }
    }
})

export const { setIsLoading} = isloading.actions;

export default isloading.reducer;
