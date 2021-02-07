import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  addTodo,
  delTodo,
  updateTodo,
  allChange,
  addTodoAsync
} from '../../redux/actions/todolist'
import ClearDone from '../clearDone';

class TodoList extends Component {
  state = {
    MouseI: -1,
    tab_index: 0,
    footerList: ['all', 'active', 'Completed']

  }
  handleMouse = (MouseI) => {
    this.setState({ MouseI })
  }
  //添加todo
  addTodo = (e) => {
    const { keyCode, target } = e
    console.log(keyCode === 13);
    if (keyCode !== 13) {
      return
    }  //13是enter的标识符
    const todoObj = { id: Date.now(), name: target.value, done: false }
    // this.props.addTodo(todoObj)
    this.props.addTodoAsync(todoObj,200)  //异步rudux  在actions添加
    target.value = ''
  }
  //删除todo
  deleteTodo = (id) => {
    if(window.confirm('确认删除么？')){
      this.props.delTodo(id)
    }
  }
  //更新todo
  updateTodo = (id, done) => {
    this.props.updateTodo({id,done})
  }
  allChange = (done) =>{
    this.props.allChange(done)
  }
  
  changeIndex = (tab_index) => {
    this.setState({ tab_index })
  }

  filter_TodoLists = () =>{
    switch (this.state.tab_index) {
      case 1 : return this.props.todolists.filter(item => !item.done);
      case 2 : return this.props.todolists.filter(item => item.done);
      default : return this.props.todolists;
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return this.props.todolists
  }
  //更新的生命周期
  componentDidUpdate(prevProps, prevState,todos){
    localStorage.setItem('react-todolist',JSON.stringify(todos))
  }
  render() {
    const { tab_index } = this.state
    const { todolists,allChange } = this.props
    const doneLenth = todolists.reduce((pre,current) => pre + (current.done ? 1 : 0) ,0)  //已完成的
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <div className="todo-header">
            <input type="text"
              onKeyUp={(e) => this.addTodo(e)}
              placeholder="请输入你的任务名称，按回车键确认" />
          </div>
          <ul className="todo-main">
            {
              this.filter_TodoLists().map((item,index) => {
                return (
                  <li
                    key={item.id}
                    style={{ backgroundColor: this.state.MouseI === index ? 'pink' : '#fff' }}
                    onMouseEnter={() => this.handleMouse(index)}
                    onMouseLeave={() => this.handleMouse(-1)}
                  >
                    <label>
                      <input
                        type="checkbox"
                        checked={item.done}
                        onChange={(event)=>this.updateTodo(item.id,event.target.checked)}
                      />
                      <span>{item.name}</span>
                    </label>
                   {this.state.MouseI === index && <button
                      className="btn btn-danger"
                      onClick={() => this.deleteTodo(item.id)}
                    >删除</button>}
                  </li>
                )
              })
            }
          </ul>
          <div className="todo-footer">
            <label>
              <input type="checkbox"
              checked={doneLenth === todolists.length && todolists.length !== 0 ? true : false}
              onChange={(event) => allChange(event.target.checked)} 
              /> 全选
        </label>
            <span>
              <span>已完成 {doneLenth}</span> / 全部{todolists.length}
            </span>
            {
              this.state.footerList.map((item, i) => {
                return (
                  <span
                    className={`btn btn1 ${tab_index === i ? 'current' : ''}`}
                    key={i}
                    onClick={() => this.changeIndex(i)}
                  >{item}</span>
                )
              })
            }
            <ClearDone></ClearDone>
          </div>
        </div>
      </div>
    )
  }
}

//使用connect()()创建并暴露一个TodoList的容器组件
export default connect(
  (state) => {
    return {
      todolists: state.todolist   // 导入reducer的名称
    }
  },
  //简写的action, 默认dispatch
  { addTodo, delTodo, updateTodo, allChange,addTodoAsync}
)(TodoList)



