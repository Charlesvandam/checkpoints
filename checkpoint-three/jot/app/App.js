import { ExampleController } from './controllers/ExampleController.js';
import { JotController } from './controllers/JotController.js';

class App {

  ExampleController = new ExampleController() // ☑️ you can remove this - example only

  coolBananas = new JotController()

}

window['app'] = new App()


