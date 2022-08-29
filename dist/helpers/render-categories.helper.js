import { Category } from "../types/types.js";
const handleCategoryChange = (category) => {
    if (category === Category.GENERAL) {
        console.log("zmiana na general");
    }
    else if (category === Category.GYM) {
        alert("silka");
    }
    else if (category === Category.HOBBY) {
        document.body.style.background = "red";
    }
    else if (category === Category.WORK) {
        console.log("zmiana na work");
        alert("praca popłaca");
        document.body.style.background = "green";
    }
    else if (category === Category.SOCIAL) {
        document.body.style.background = "yellow";
    }
    else {
        const never = category;
        console.log(never);
    }
};
export const renderCategories = (categories, categoriesContainerElement, inputChangeCallback) => {
    categories.forEach((category) => {
        const categoryElement = document.createElement("li");
        const radioInputElement = document.createElement("input");
        radioInputElement.type = "radio";
        radioInputElement.name = "category";
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        radioInputElement.addEventListener("change", () => {
            inputChangeCallback(category);
            handleCategoryChange(category);
        });
        const labelElement = document.createElement("label");
        labelElement.setAttribute("for", `category-${category}`);
        labelElement.innerText = category;
        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(labelElement);
        categoriesContainerElement.appendChild(categoryElement);
    });
};
