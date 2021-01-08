// Purpose: To list the customers and their related information onto the DOM

// Imports
import { getEmployees, useEmployees } from "../employees/employeeProvider.js";
import { getCustomers, useCustomers } from "./customerProvider.js";
import { customerHTMLer } from "./customer.js";

// Selectors
const targetElement = document.querySelector('.customerContainer');

// Functions
export const customerList = () => {
    getEmployees()
    .then(getCustomers)
    .then(() => {
        // Store relevant information
        const employees = useEmployees();
        const customers = useCustomers();

        customers.forEach(customer => customer.employees = employees.filter((employee) => employee.id == customer.employeeId))
        
        console.log("customers",customers);
        
        // Convert information to HTML and push to the DOM
        targetElement.innerHTML = (customer.map(customer => customerHTMLer(customer)).join(""))
    });
};