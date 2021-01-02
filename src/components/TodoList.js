import React from 'react';
import {connect} from 'react-redux';
import TodoItem from './TodoItem';

function TodoList(props){
  console.log(props);
  return(
   <div>
     {props.items.map(el=><TodoItem todo={el}/>)} 
   </div>   
  )
}
const mapStateToProps=state=>{
  return {
    items:state.TodoReducer
  }
}
export default connect(mapStateToProps)(TodoList);