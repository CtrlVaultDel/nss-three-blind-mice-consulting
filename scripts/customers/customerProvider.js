// Purpose: Communication between application and customer information within the local API

let customers = [];

// Fetch employees from the local API & attach each employeeObject's computer information
export const getCustomers = () => {
    return fetch('http://localhost:8088/employeeCustomers?_expand=customer')
    .then(response => response.json())
    .then((parsedCustomers) => customers = parsedCustomers);
};

// Allow the local employees variable to be exported
export const useCustomers = () => customers.slice();