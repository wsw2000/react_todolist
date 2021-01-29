import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
  componentDidMount(){
    console.log(this.props.tab_index);
  }
  componentDidUpdate(){
    console.log(this.props.tab_index);
  }
  render() {
    const { todos,deleteTodo,updateTodo,tab_index } = this.props
    let arr = []
    if(tab_index == 0){
      arr = todos
    }else if(tab_index == 1){
      arr = todos.filter(item => !item.done)
    }else {
      arr = todos.filter(item => item.done)
    }
    return (
      <ul className="todo-main">
        { 
          arr.map(todo => {
            return (
              <Item key={todo.id} {...todo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
            )
          }) 
        }
      </ul>
    )
  }
}
