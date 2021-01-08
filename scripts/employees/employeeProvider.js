// Purpose: Communication between application and employees information within the local API

let employees = [];

export const getEmployees = () => {
    fetch('http://localhost:8088/employees')
    .then(response = () => response.json())
    .then((parsedEmployees) => employees = parsedEmployees);
};

export const useEmployees = () => employees.slice();
