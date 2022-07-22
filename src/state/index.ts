import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
// import farmsReducer from './farms'
// import poolsReducer from './pools'
// import referralsReducer from './referrals'
import presaleReducer from './presale'


const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
   //  farms: farmsReducer,
   //  pools: poolsReducer,
   //  referrals: referralsReducer,
    presale: presaleReducer
  },
})


/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
 */
 export type AppDispatch = typeof store.dispatch
 export const useAppDispatch = () => useDispatch<AppDispatch>()
 
 export default store