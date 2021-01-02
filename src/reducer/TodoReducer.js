import {AddTodo,DeleteTodo,CompleteTodo, EditTodo} from'../actions/Types';
import {v4 as uuidv4} from 'uuid';

const items=[
 {id:uuidv4(),text:'Learn Redux',complete:false},
 {id:uuidv4(),text:'Do checkpoint',complete:false},
 {id:uuidv4(),text:'Do the shopping',complete:false}
]
const TodoReducer=(state=items,action)=>{
switch(action.type){
    case AddTodo:
        return [...state,action.payload]
    case DeleteTodo:
        return state.filter(el=>el.id !== action.payload)
    case CompleteTodo:
        return state.map(el=>el.id === action.payload?{...el,complete:!el.complete}:el)
    case EditTodo:
        return state.map((el)=>el.id=== action.payload.id ? action.payload :el)
    default:
      return state
}
}
export default TodoReducer;