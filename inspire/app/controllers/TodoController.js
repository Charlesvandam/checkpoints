import { todoService } from "../services/TodoService.js";
import { AppState } from "../AppState.js";
import { api } from "../utils/Axios.js";
import { Pop } from "../utils/Pop.js";


export class TodoController{
    constructor(){
        console.log('Todo Controller is working!!');
       AppState.on('identity', this.getTodo)
       AppState.on('myTodos', this.drawTodos)
      
    }
    async getTodo(){
        try {
            console.log('getting todos')
            await todoService.getTodo()
        } catch (error) {
console.error('Could not get todos', error);
Pop.error(error, "Could not get todos ")

            
            
        }
    }
    async drawTodos(){
        console.log('drawing Todos');
        const myTodos = AppState.myTodos
        let todosListContent = ''
        document.body.style.backgroundImage = `url(${api.images})`
    
    }
    async saveTodos(){
        console.log('Saving Todos');
        
    }
}