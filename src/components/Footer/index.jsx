import React, { Component } from 'react'
import './index.css'
export default class index extends Component {

  allChange = (checked) =>{
    console.log(checked);
    this.props.allChangeD(checked)
  }
  render() {
    const { todos,clearDoneTodo } = this.props
    //已完成的个数
    const doneLenth = todos.reduce((pretodo,curtodo) => pretodo + (curtodo.done ? 1 : 0),0)
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" 
          checked={doneLenth == todos.length && todos.length != 0 ? true : false} 
          onChange={(event)=>this.allChange(event.target.checked)}/>
        </label>
        <span>
          <span>已完成 {doneLenth}</span> / 全部{todos.length}
          </span>
        <button className="btn btn-danger" onClick={clearDoneTodo}>清除已完成任务</button>
      </div>
    )
  }
}
