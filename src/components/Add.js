import React, { Component } from 'react';
import {connect} from 'react-redux';
import {AddItem} from '../actions/Actions';
import {v4 as uuidv4} from 'uuid';
import {Button} from 'react-bootstrap'

class Add extends Component{
constructor(props){
 super(props);
 this.state={
     text:'',
 }}
handleChanche=e=>{
  this.setState({text:e.target.value})
}
add=()=>{this.props.addNewTodo({
  text:this.state.text,
  id:uuidv4(),
  complete:false
})
this.setState({text:''})
}

render(){
  return(
    <div className='Add'>
       <h2>Todo App</h2>
      <input placeholder='add new todo..' onChange={this.handleChanche} value={this.state.text}></input> {' '}
      <Button onClick={this.add}>Add 
      </Button> 
    </div>  
  )  
}} 
const mapDispatchToProps=dispatch=>{
  return{
    addNewTodo:todo=>dispatch(AddItem(todo))
  }}
  const mapStateToProps=state=>{
    return {
      edit:state.EditReducer
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Add);