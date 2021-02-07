import React, { Component } from 'react'
import TodoList from './containers/todoList'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <TodoList></TodoList>
      </div>
    )
  }
}
