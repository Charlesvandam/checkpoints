import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Jot } from './models/Jot.js'
class ObservableAppState extends EventEmitter {

  /**@type {Jot[]}*/

  jots = [
    new Jot(
      {
        title: 'Meal prep',
        color: 'Blue',
        body: 'I need to pick up food at grocery store to meal prep tomorrow. ',
        listedAt: '10/10/2018',

      }
    ),
    new Jot(
      {
        title: 'Trash',
        color: 'Green',
        body: 'Reminder trash day is tomorrow. ',
        listedAt: '11/10/2019',

      }
    ),
    new Jot(
      {
        title: 'Broken Phone',
        color: 'Red',
        body: 'Get my phone fixed. ',
        listedAt: '02/18/2024',

      }
    ),

  ]

  activeJot = null

}


export const AppState = createObservableProxy(new ObservableAppState())