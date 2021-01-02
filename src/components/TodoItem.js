import React from 'react';
import {connect}from 'react-redux';
import { DeleteItem,CompleteItem, EditItem } from '../actions/Actions';
import EditCard from './EditCard';
import {Button} from 'react-bootstrap';

const TodoItem=props=>{
    return(
     <div>
        <p className={props.todo.complete?'done':undefined}>{props.todo.text} </p>
        <div className='bt'>
        <Button onClick={()=>props.delete(props.todo.id)}>Delete</Button>
        <Button onClick={()=>props.complete(props.todo.id)}>{props.todo.complete ?'undo':'Complete'}</Button>
        <EditCard oldTodo={props.todo}/>
        </div>
     </div>
    )
}
const mapDispatchToProps=dispatch=>{return {
    delete: id=>dispatch(DeleteItem(id)),
    complete:id=>dispatch(CompleteItem(id)),
}}

export default connect(null,mapDispatchToProps)(TodoItem);