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
    </section>
    `;
};