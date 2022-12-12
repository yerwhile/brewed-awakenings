import { getEmployees, getOrders } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target;

        if(itemClicked.id.startsWith("employee")) {
            const [,employeeId] = itemClicked.id.split("--");
            let orderCount = 0;
            for(const employee of employees) {
                if(employee.id === parseInt(employeeId)) {
                    for(const order of orders) {
                        if(order.employeeId === employee.id) {
                            orderCount += 1;
                        }
                    }
                    window.alert(`${employee.name} sold ${orderCount} products`)
                }
            }
        }
    }
)

const employees = getEmployees()
const orders = getOrders()



export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

