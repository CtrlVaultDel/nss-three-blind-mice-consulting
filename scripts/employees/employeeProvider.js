// Purpose: Communication between application and employees information within the local API

let employees = [];

// Fetch employees from the local API & attach each employeeObject's computer information
export const getEmployees = () => {
    return fetch('http://localhost:8088/employees?_expand=computer')
    .then(response => response.json())
    .then((parsedEmployees) => employees = parsedEmployees);
};

// Allow the local employees variable to be exported
export const useEmployees = () => employees.slice();