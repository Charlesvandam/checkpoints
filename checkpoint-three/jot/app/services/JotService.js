import { AppState } from "../AppState.js"
import { Jot } from "../models/Jot.js"

class JotService {
    constructor() {

    }
    creatJot(data) {
        let jot = new Jot(data)
        AppState.jots.push(jot)
        AppState.activeJot = jot
        return jot
    }
}

export const jotService = new JotService()











