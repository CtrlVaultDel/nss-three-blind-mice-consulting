// Purpose: To list the customers and their related information onto the DOM

// Imports
import { getRelations, useRelations } from "./customerProvider.js";
import { getCustomers, useCustomers } from "./customerProvider.js";
import { customerHTMLer } from "./customer.js";

// Selectors
const targetElement = document.querySelector('.customerContainer');

// Functions
export const customerList = () => {
    getCustomers()
    .then(getRelations)
    .then(() => {
        // Store relevant information
        const customers = useCustomers();
        const relations = useRelations();
        console.log(customers);

        customers.forEach(customer => 
            customer.employees = relations.filter((relation) => 
                relation.customerId == customer.id))
        
        console.log("customers",customers);
        
        // Convert information to HTML and push to the DOM
        targetElement.innerHTML = (customers.map(customer => 
            customerHTMLer(customer)).join(""))
    });
};