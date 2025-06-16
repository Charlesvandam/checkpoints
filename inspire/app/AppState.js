import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Todo } from './models/Todo.js'
import { Identity } from './Auth/Identity.js'
import { Weather } from './models/Weather.js'
import { Quote } from './models/Quote.js'
import { Image } from './models/Sandbox.js'
class ObservableAppState extends EventEmitter {

  /** @type {Todo[]} */
  myTodos = []
 
  /** @type {Identity} */
  identity = null
   /** @type {Weather | null} */
  weather = null
  /** @type {Quote} */

  /** @type {Image} */
  sandboxImage = null
}

export const AppState = createObservableProxy(new ObservableAppState())