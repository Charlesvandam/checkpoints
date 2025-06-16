import { AppState } from "../AppState.js";
import { Todo } from "../models/Todo.js"
import { api } from "../utils/Axios.js"
import { SandboxController } from "../controllers/SandboxController.js";


class TodoService{
    
async getTodo(){
    const response = await api.get("api/todos")
    console.log('Got Todos', response.data);
    const myTodos = response.data.map(pojo => new Todo(pojo))
    console.log('MyTodos', myTodos);
    AppState.myTodos = myTodos
}
async saveTodo(){
    console.log('Saved Todo');
    
    
}
}
export const todoService = new TodoService()