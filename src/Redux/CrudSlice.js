import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axiosInstance from "../Helper/Helper";

const initialState ={
    status:"idle",
    studentList:[]
}

export const listing = createAsyncThunk(
    "allStudent",
    async(formDataObj)=>{
        let res = await axiosInstance.get(`/allStudent`, formDataObj);
        let resData=res?.data;
        console.log(resData);
        return resData;
    }
)

export const add = createAsyncThunk(
    "student",
  
    async (formData) => {
      let res = await axiosInstance.post(`student`, formData);
  
      let resData = res?.data;
  
      return resData;
    }
  );
  

export const CrudSlice = createSlice({
    name:"CRUD",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(listing.pending,(state,action)=>{
            state.status="loading";
        })
        .addCase(listing.fulfilled,(state,{payload})=>{
            state.studentList = payload.data
            
        })
        .addCase(listing.rejected,(state,action)=>{
            action.status='idle';
        })

        // add part
        .addCase(add.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(add.fulfilled, (state, {payload}) => {
            state.status = "idle";
            // if (payload?.type === "success") {
            // //   state.isloggedIn=true
              
            // //   localStorage.setItem("token", payload?.token);
            // //   localStorage.setItem("setting", "pst");
            //   // toast.success(payload?.message, {
            //   //   type: "success",
            //   //   hideProgressBar: true,
            //   //   autoClose: 2500,
            //   // }); 8u+
            // }
          })
          .addCase(add.rejected, (state, action) => {
            state.status = "idle";
          })
    }
})



export const{}=CrudSlice.actions