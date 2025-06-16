import { AuthController } from "./Auth/AuthController.js"
import { TodoController } from "./controllers/TodoController.js"
import { SandboxController } from "./controllers/SandboxController.js"
class App {
authController = new AuthController()
todoController = new TodoController()

sandboxController = new SandboxController()
}

window['app'] = new App()


