// Purpose: convert given information into HTML and return the value

export const employeeHTMLer = (employee) => {
    return `
    <section class="employee">
        <header class="employee__name">
            <h1>${employee.firstName} ${employee.lastName}</h1>
        </header>
        <div class="employee__computer">
            Currently using a ${employee.computer.year} ${employee.computer.model}.
        </div>
        <div class="employee__department">
            Works in the ${employee.department.name} department.
        </div>
        <div class="employee__location">
            Works at the ${employee.location.city} office.
        </div>
        <div class="employee__customers">
            <h5>Has worked for the following customers:</h5>
            <ul>
                ${employee.customers.map(customerObject => `<li class="employee__customers__name">${customerObject.customer.name}</li>`).join("")}
            </ul>
        </div>
    </section>
    `;
};