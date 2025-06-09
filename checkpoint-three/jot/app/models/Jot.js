import { generateId } from "../utils/GenerateId.js"


export class Jot {
    constructor(data) {
        this.title = data.title
        this.id = generateId()
        this.time = data.time
        this.date = data.date
        this.color = data.color
        this.body = data.body
        this.listedAt = data.listedAt


    }
}