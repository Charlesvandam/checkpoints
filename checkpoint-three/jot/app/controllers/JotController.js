import { AppState } from "../AppState.js";
import { jotService } from "../services/JotService.js";

export class JotController {
    constructor() {
        console.log("😅");
    }

    drawJots() {
        const jots = AppState.jots
        console.table(jots)
    }

    selectJot() {
        console.log('🧀📝')
    }
}