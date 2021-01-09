// Purpose: To list the employees and their related information onto the DOM

// Imports
import { getEmployees, useEmployees } from "./employeeProvider.js";
import { getRelations, useRelations } from "../customers/customerProvider.js";
import { employeeHTMLer } from "./employee.js";

// Selectors
const targetElement = document.querySelector('.employeeContainer');

// Functions
export const employeeList = () => {
    getEmployees()
    .then(getRelations)
    .then(() => {
        // Store relevant information
        const employees = useEmployees();
        const relations = useRelations();

        employees.forEach(employee => 
            employee.customers = relations.filter((relation) => 
                relation.employeeId == employee.id))
        
        // Convert information to HTML and push to the DOM
        targetElement.innerHTML = (employees.map(employee => 
            employeeHTMLer(employee)).join(""))
    });
};