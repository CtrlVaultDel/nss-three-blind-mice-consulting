// Purpose: convert given information into HTML and return the value

export const customerHTMLer = (customer) => {
    return `
    <section class="customer">
        <header class="customer__name">
            <h1>${customer.name}</h1>
        </header>
            <h5>Has worked for the following employees:</h5>
        <div class="customer__employees">
            <ul>
                ${customer.employees.map(employeeObject => `<li class="customer__employees__name">${employeeObject.customer.name}</li>`).join("")}
            </ul>
        </div>
    </section>
    `;
};