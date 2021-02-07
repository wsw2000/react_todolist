import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearTodo } from '../../redux/actions/todolist';
class clearDone extends Component {
  render() {
    const {name,clearTodo} = this.props
    return (
      <button 
      className="btn btn1 btn-danger"
      onClick={clearTodo}>{name}</button>
    );
  }
}

//使用connect()()创建并暴露一个TodoList的容器组件
export default connect(
  (state) => {
    return {
      todolists: state.todolist,   // 导入reducer的名称
      name : state.myName
    }
  },
  //简写的action, 默认dispatch
  { clearTodo }
)(clearDone)