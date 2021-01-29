import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state = { isMouse : false }
  handleMouse = (flag)=>{
    this.setState({ isMouse :flag})
  }

  //删除
  handleDelete = (id) =>{
    if(window.confirm('确认删除么？')){
      this.props.deleteTodo(id)
    }
  }
  //改变done
  handleCheck = (id,event) =>{
    this.props.updateTodo(id,event.target.checked)
  }
  render() {
    const { id,name,done } = this.props
    return (
      <li 
      style={{backgroundColor:this.state.isMouse ? 'pink' : '#fff'}} 
      onMouseEnter={()=>this.handleMouse(true)} 
      onMouseLeave={()=>this.handleMouse(false)}>
        <label>
          <input 
          type="checkbox" 
          checked={done}
          onChange={(event)=>this.handleCheck(id,event)}/>
          <span>{name}</span>
        </label>
        <button 
        className="btn btn-danger" 
        style={{ display: this.state.isMouse ? 'block':'none' }}
        onClick={()=>this.handleDelete(id)}
        >删除</button>
      </li>
    )
  }
}
