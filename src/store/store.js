import { combineReducers, createStore} from "redux"
import authReducer from "./redusers/authReducer"
import cardReducer from "./redusers/cardReducer"

const store = createStore(combineReducers({authReducer, cardReducer}))

export default store