import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
const primeUrl="https://apis.ccbp.in/prime-deals";
export const fetchPrimeProducts=createAsyncThunk('primeProducts/fetchPrimeProducts',
    async()=>{
      const token=Cookies.get('token');
      const response=await axios(primeUrl,{
        headers:{
            Authorization:`Bearer ${token}`
        }
      })
      //console.log("Hello")
      console.log(response)
      return response.data.prime_deals
    }
)
const primeProductSlice=createSlice({
    name:'primeProducts',
    initialState:{
        status:'idle',
        items:[],
        errormsg:''
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchPrimeProducts.pending,(state)=>{
            state.status='loading'
        })
        .addCase(fetchPrimeProducts.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            state.items=action.payload
        })
        .addCase(fetchPrimeProducts.rejected,(state)=>{
            state.status='failed',
            state.errormsg=action.console.error.message;
            
        })
    }

})

export default primeProductSlice.reducer;