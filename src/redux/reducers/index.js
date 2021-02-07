
//引入combineReducers，用于汇总多个reducer
import {combineReducers} from 'redux'

import todolist from './todolist';
import ceshi from './ceshi';


//汇总所有的reducer变为一个总的reducer
export default combineReducers({
	todolist,
	ceshi
})