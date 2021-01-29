import React, { Component } from 'react'
import './App.css'
import Header from '../src/components/Header'
import List from '../src/components/List'
import Footer from '../src/components/Footer'

export default class App extends Component {
  state ={
    todos: [
    ]
  }
  //添加todo
  addTodo = (todoName) =>{
    const { todos } = this.state
    const todoObj = {
      id:Date.now(),
      name:todoName,
      done:false
    }
    const newtodoObj = [todoObj,...todos]
    this.setState({
      todos : newtodoObj
    })
  }
  //删除todo
  deleteTodo = (id) =>{
    const todos = this.state.todos.filter(item =>{
      return item.id != id
    })
    // const index = this.state.todos.findIndex(item => item.id == id)
    // console.log(index);
    // this.state.todos.splice(index,1)
    this.setState({todos})
  }
  //更新todo
  updateTodo = (id,done) =>{
    // const todos = this.state.todos.map(item =>{
    //   if(item.id == id){
    //     return {...item,done:done}
    //   }else{
    //     return item
    //   }
    // })
    this.state.todos.forEach(item=>{
      if(item.id == id){
        item.done = done
      }
    })
    this.setState({todos:this.state.todos})
  }
  //清除已完成的
  clearDoneTodo = () =>{
    const todos = this.state.todos.filter(item =>!item.done)
    this.setState({todos})
  }
  //全选
  allChangeD = (done) =>{
    this.state.todos.forEach(item => item.done = done)
    this.setState({todos:this.state.todos})
  }
  componentDidMount(){
    setTimeout(()=>{
      const todos = localStorage.getItem('react-todolist') || []
      if(todos.length == 0) return
      this.setState({todos : JSON.parse(todos)})
    },1000)
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    //我们是否要添加新的 items 到列表?
    // 捕捉滚动位置，以便我们可以稍后调整滚动.
    return this.state.todos
  }
  更新的生命周期
  componentDidUpdate(prevProps, prevState,todos){
    localStorage.setItem('react-todolist',JSON.stringify(todos))
  }
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={this.state.todos} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo}/>
          <Footer todos={this.state.todos} clearDoneTodo={this.clearDoneTodo} allChangeD={this.allChangeD}/>
        </div>
      </div>
    )
  }
}

