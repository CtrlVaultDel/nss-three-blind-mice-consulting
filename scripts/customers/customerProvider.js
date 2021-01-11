// Purpose: Communication between application and customer information within the local API

let relations = [];
let customers = [];

export const getRelations = () => {
    return fetch('http://localhost:8088/employeeCustomers?_expand=customer&_expand=employee')
    .then(response => response.json())
    .then((parsedRelations) => relations = parsedRelations);
};

export const useRelations = () => relations.slice();

export const getCustomers = () => {
    return fetch('http://localhost:8088/customers')
    .then(response => response.json())
    .then((parsedCustomers) => customers = parsedCustomers);
};

export const useCustomers = () => customers.slice();