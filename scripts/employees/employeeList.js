// Purpose: To list the employees and their related computers onto the DOM

// Imports
import { getEmployees, useEmployees } from "./employeeProvider.js";
import { getCustomers, useCustomers } from "../customers/customerProvider.js";
import { employeeHTMLer } from "./employee.js";

// Selectors
const targetElement = document.querySelector('.employeeContainer');

// Functions
export const employeeList = () => {
    getEmployees()
    .then(getCustomers)
    .then(() => {
        // Store employee & related computer information in employees variable
        const employees = useEmployees();
        const customers = useCustomers();
        employees.forEach(employee => employee.customers = customers.filter((customer) => customer.employeeId == employee.id))
        console.log("employees",employees);
        
        // Convert information to HTML and push to the DOM
        targetElement.innerHTML = (employees.map(employee => employeeHTMLer(employee)).join(""))
    });
};

