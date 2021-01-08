// Purpose: To list the employees and their related computers onto the DOM

// Imports
import { getEmployees, useEmployees } from "./employeeProvider.js";
import { getComputers, useComputers } from "../computers/computerProvider.js";
import { employeeHTMLer } from "./employee.js";

// Selectors
const targetElement = document.querySelector('.employeeInfo');

// Component Variables
let employees = [];
let computers = [];

// Functions
export const employeeList = () => {
    getEmployees()
    .then(() => {
        employees = useEmployees();

        console.log(employees.map(employee => employeeHtmler(employee)).join(""))
    })
}

