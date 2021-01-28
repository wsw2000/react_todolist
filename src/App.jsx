import React,{Component}  from 'react'
import Hello from './components/hello'
export default class App extends Component{
  render(){
    return(
      <div>
        <div style={{color:'red',fontSize:'100px'}}>hello react</div>
        <Hello/>
      </div>
    )
  }
}

