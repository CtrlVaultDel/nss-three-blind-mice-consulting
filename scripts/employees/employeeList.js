// Purpose: To list the employees and their related computers onto the DOM

// Imports
import { getEmployees, useEmployees } from "./employeeProvider.js";
import { employeeHTMLer } from "./employee.js";

// Selectors
const targetElement = document.querySelector('.employeeContainer');

// Functions
export const employeeList = () => {
    getEmployees()
    .then(() => {
        // Store employee & related computer information in employees variable
        const employees = useEmployees();

        // Convert information to HTML and push to the DOM
        targetElement.innerHTML = (employees.map(employee => employeeHTMLer(employee)).join(""))
    });
};

