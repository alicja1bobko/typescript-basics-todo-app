import { Category } from "../types/types.js";
export class TaskClass {
    constructor(title, done, category = Category.GENERAL) {
        this.title = title;
        this.done = done;
        this.category = category;
        this.createdAt = new Date();
        console.log("constructor!");
    }
    logCreationDate(extra) {
        console.log(`task zostal stworzony ${this.createdAt} ${extra || ""}`);
    }
}
