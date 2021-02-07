
import React, { Component } from 'react'
import './index.css'
export default class Header extends Component {

  handleKeyUp = (e) =>{
    const { keyCode,target } = e
    const { addTodo } = this.props
    if(keyCode !== 13) return
    if(keyCode === 13 && target.value.trim() === ''){
      window.alert('不能为空')
      return
    }  //13是enter的标识符
    addTodo(target.value)
    target.value = ''
  }

  render() {
    return (
      <div className="todo-header">
        <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}
