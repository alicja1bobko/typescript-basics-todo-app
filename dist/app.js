import { Category } from "./types/types.js";
import renderTasks from "./helpers/render-tasks.helper.js";
import { renderCategories } from "./helpers/render-categories.helper.js";
import { TaskClass } from "./classes/task.js";
const tasksContainerElement = document.querySelector(".tasks");
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory;
const categories = [Category.GENERAL, Category.GYM, Category.HOBBY, Category.SOCIAL, Category.WORK];
const tasks = [
    new TaskClass("Wyrzucić śmieci", false, Category.HOBBY),
    new TaskClass("ppójść na siłkę", true, Category.GYM),
    new TaskClass("nakarmić koty", false)
];
const addTask = (task) => {
    tasks.push(task);
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addButtonElement.addEventListener("click", (e) => {
    e.preventDefault();
    // const selectedRadioElement: HTMLInputElement = document.querySelector("input[type='radio']:checked");
    const newTask = new TaskClass(taskNameInputElement.value, false, selectedCategory);
    addTask(newTask);
    newTask.logCreationDate("!!!");
    renderTasks(tasks, tasksContainerElement);
});
const task = ["zrobić klate", Category.GYM, false];
const taskName = task[0];
const taskCategory = task[1];
const taskDoneStatus = task[2];
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
renderTasks(tasks, tasksContainerElement);
const taskClassInstance = new TaskClass("zadanie z constructora", false, Category.GYM);
taskClassInstance.logCreationDate('!');
console.log(taskClassInstance);
