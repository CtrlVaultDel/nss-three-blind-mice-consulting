// Selectors
const pageElement = document.querySelector('.mainContainer');
const employeeInfo = document.querySelector('.employeeContainer');
const customerInfo = document.querySelector('.customerContainer');

pageElement.addEventListener("click", event => {
    console.log(employeeInfo.target)
    if(event.target.id === "seeEmployees")
    {
        customerInfo.classList.add("hide");
        employeeInfo.classList.remove("hide");
    }
    else if(event.target.id === "seeCustomers")
    {
        employeeInfo.classList.add("hide");
        customerInfo.classList.remove("hide");
    }
});