import {AddTodo,DeleteTodo,CompleteTodo,EditTodo} from './Types';

export const AddItem=newTodo=>{return{
    type:AddTodo,
    payload:newTodo
}
}
export const DeleteItem=id=>{return{
    type:DeleteTodo,
    payload:id
}}
export const CompleteItem=id=>{return{
    type:CompleteTodo,
    payload:id
}}
export const EditItem=newTodo=>{return{
    type:EditTodo,
    payload:newTodo
}}