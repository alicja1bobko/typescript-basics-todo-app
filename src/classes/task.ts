import { Category } from "../types/types.js";

export class TaskClass {
  title: string;
  done: boolean;
  category?: Category;
  private createdAt: Date;

  constructor(title: string, done: boolean, category: Category = Category.GENERAL) {
    this.title = title;
    this.done = done;
    this.category = category;
    this.createdAt = new Date();
    console.log("constructor!");
  }

  logCreationDate(extra: string) {
    console.log(`task zostal stworzony ${this.createdAt} ${extra || ""}`);
  }
}
