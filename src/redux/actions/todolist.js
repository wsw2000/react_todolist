
import { 
  ADD_TODO,
  DEL_TODO,
  UPDATE_TODO,
  CLEAR_TODO,
  ALL_CHANGE
} from '../constant';

export const addTodo = (data) => ({type:ADD_TODO,data})
export const delTodo = (data) => ({type:DEL_TODO,data})
export const updateTodo = (data) => ({type:UPDATE_TODO,data})
export const clearTodo = (data) => ({type:CLEAR_TODO,data})
export const allChange = (data) => ({type:ALL_CHANGE,data})





