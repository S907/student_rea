import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Helper/Helper";


const initialState={
    status:'idle',
}

export const register= createAsyncThunk(
    'register',
    async (formData)=>{
        console.log('12',formData);
        let res = await axiosInstance.post('register', formData);
        console.log('thunk', res);
        let resData = res?.data;
        return resData;
    }

)

export const login = createAsyncThunk(
    'login',
    async (formData)=>{
        let res = await axiosInstance.post(`login`, formData);
        let resData= res?.data
        console.log('26',resData);
        return resData;
    }
)

export const update = createAsyncThunk(
    'update',
    async (formData)=>{
        let res = await axiosInstance.post(`${formData?.id}`, formData);
        let resData= res?.data
        return resData;
    }
)



export const AuthSlice = createSlice({
    name:'registration',
    initialState,
    reducers:{},

    extrareducers:(builder)=>{
        builder
        .addCase(register.pending, (state,action)=>{
            state.status = 'loading'
        })
        .addCase(register.fulfilled, (state,{payload})=>{
            state.status = 'idle';
            if(payload?.type === 'success'){

            }
        })
        .addCase(register.pending, (state,action)=>{
            state.status ='idle';
        })


        //login
        .addCase(login.pending,(state,action)=>{
            state.status = 'loading';
        })
        .addCase(login.fulfilled, (state,{payload})=>{
            state.status ='idle';
            if(payload?.type === 'success'){

            }
        })
        .addCase(login.rejected,(state, action)=>{
            state.status='idle';
        })
        
    }
})

export const{}=AuthSlice.actions;