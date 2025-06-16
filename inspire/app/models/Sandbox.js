import { AppState } from "../AppState.js"
import { Todo } from "./Todo.js"
import { api } from "../utils/Axios.js"




export class Image {
    constructor(data){
        this.id = data.id
        this.imgUrl = data.imgUrl || data.api/image
    }
  }