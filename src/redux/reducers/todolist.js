import {
  ADD_TODO,
  DEL_TODO,
  UPDATE_TODO,
  CLEAR_TODO,
  ALL_CHANGE
} from '../constant';

const todos = JSON.parse(localStorage.getItem('react-todolist')) || []

const todolist = ( preData = todos,action ) =>{
  const { type, data} = action
  switch (type) {
    case ADD_TODO:
      return [data,...preData]
    case DEL_TODO:
      return preData.filter(item => item.id !== data)
    case UPDATE_TODO :
      const { id,done } = data
      return preData.map(item =>{
        if(item.id === id){
          return {...item,done : done}
        }
        return item
      });
    case CLEAR_TODO :
      return preData.filter(item => !item.done)
    case ALL_CHANGE :
      return preData.map(item =>{
        return {...item,done : data}
      });
    default: return preData
  }
}

export default todolist