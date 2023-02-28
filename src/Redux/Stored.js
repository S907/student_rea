import {configureStore} from '@reduxjs/toolkit'
import { AuthSlice } from './AuthSlice'
import { CrudSlice } from './CrudSlice'


export const store=configureStore({
    reducer:{
        setRegister: AuthSlice.reducer,
        crud: CrudSlice.reducer
    }
})