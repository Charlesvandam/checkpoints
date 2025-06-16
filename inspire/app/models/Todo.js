import { AuthController } from "../Auth/AuthController.js"
import { TodoController } from "../controllers/TodoController.js"


export class Todo {
    constructor(data) {
        this.completed = data.completed
        this.description = data.description
        this.creatorId = data.creatorId
        this.id = data.id
    }
    get todosTemplate() {
    return `
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-end align-items-center h-100">
      <div class="col-md-4">
        <div class="card" id="list1" style="border-radius: .75rem; background-color: #eff1f2;">
          <div class="card-body py-4 px-4 px-md-5">

            <p class="h1 text-center mt-3 mb-4 pb-3 text-success">
              <i class="fas fa-check-square me-1"></i>
              <u>Todo List</u>
            </p>
            <span>qty# 1</span>
            <div class="pb-2">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-row align-items-center">
                    <input type="text" class="form-control form-control-" id="todo-form"
                      placeholder="Add new Todo...">
                    <a href="#!" data-mdb-tooltip-init title="Set due date"><i
                        class="fas fa-calendar-alt fa-lg me-3"></i></a>
                    <div>
                      <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-success">Add</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr class="my-4">


            <ul class="list-group list-group-horizontal rounded-0 bg-transparent">
              <li
                class="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                <div class="form-check">
                  <input class="form-check-input me-0" type="checkbox" value="" id="flexCheckChecked1"
                    aria-label="..." checked />
                </div>
              </li>
              <li
                class="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                <p class="lead fw-normal mb-0"> ${this.description} </p>
              </li>
              <li class="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                <div class="d-flex flex-row justify-content-end mb-1">
                  <a href="#!" class="text-info" data-mdb-tooltip-init title="Edit todo"><i
                      class="fas fa-pencil-alt me-3"></i></a>
                  <a href="#!" class="text-danger" data-mdb-tooltip-init title="Delete todo"><i
                      class="fas fa-trash-alt"></i></a>
                </div>
                <div class="text-end text-muted">
                  <a href="#!" class="text-muted" data-mdb-tooltip-init title="Created date">
                    <p class="small mb-0"><i class="fas fa-info-circle me-2"></i>${this.completed}</p>
                  </a>
                </div>
              </li>
            </ul>
            <ul class="list-group list-group-horizontal rounded-0">
              <li
                class="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
              </li>
              
</section>
    `
    }
}