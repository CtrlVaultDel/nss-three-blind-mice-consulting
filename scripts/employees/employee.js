// Purpose: convert given information into HTML and return the value

export const employeeHTMLer = (employee) => {
    return `
    <section class="employee">
        <div class="employee__name">Name: ${employee.firstName} ${employee.lastName}</div>
        <div class="employee__age">Age: ${employee.age}</div>
    </section>
    `
}