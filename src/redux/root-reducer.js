import { combineReducers } from 'redux'
import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducers'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'root', 
  storage,
  whitelist: ['cart']
}

const roodReducer =  combineReducers({
  user: userReducer,
  cart: cartReducer
})



export default persistReducer(persistConfig, roodReducer)
