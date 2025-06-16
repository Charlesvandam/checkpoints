import { api } from "../utils/Axios.js";
import { AppState } from "../AppState.js";
import { sandboxService } from "../services/SandboxService.js";
import { setHTML,setText } from "../utils/Writer.js";

export class SandboxController{
    constructor(){
console.log('Sandbox controller is ready');

    }

async getimages(){
   
}
get ActiveTemplate(){
    return `
    `
}

} 

function displayClock() {
    let display = new data().toLocaleTimeString([], {hour: 'numeric', minute:'2-digit'})
    setText('clock', display)
 setTimeout(displayClock,1000)}
 function _drawWeather() {
  let weather = AppState.weather
  SandboxService.tempatureConverter()
  // @ts-ignore
  setHTML('weather', weather.WeatherTemplate)
}
