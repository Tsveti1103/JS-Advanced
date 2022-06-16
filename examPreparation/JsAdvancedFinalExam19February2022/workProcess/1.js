function solve() {

    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const birth = document.getElementById("birth");
    const position = document.getElementById("position");
    const salary = document.getElementById("salary");
    const tbody = document.getElementById("tbody");
    const addSalary = document.getElementById("sum");

    document.getElementById("add-worker").addEventListener("click", (ev) => {
        if (fname.value !== "" && lname.value !== "" && email.value !== "" && birth.value !== "" && position.value !== "" && salary.value !== "") {
            console.log("tyk")
            addWorker(ev, fname.value, lname.value, email.value, birth.value, position.value, salary.value);
            clearInputFileds();
        }
    });


    function addWorker(ev, fname, lname, email, birth, position, salary) {
        ev.preventDefault();
        const tr = e("tr");
        e("td", `${fname}`, tr);
        e("td", `${lname}`, tr);
        e("td", `${email}`, tr);
        e("td", `${birth}`, tr);
        e("td", `${position}`, tr);
        e("td", `${salary}`, tr);

        const td = e("td", "", tr);
        let firedBtn = e("button", "Fired", td);
        firedBtn.setAttribute("class", "fired");
        let editBtn = e("button", "Edit", td);
        editBtn.setAttribute("class", "edit")

        tbody.appendChild(tr);

        const currentSalary = Number(addSalary.textContent);
        addSalary.textContent = (Number(salary) + currentSalary).toFixed(2);

        editBtn.addEventListener("click", (ev) => editWorker(ev, fname, lname, email, birth, position, salary));

        firedBtn.addEventListener("click", (ev) => firedWorker(ev, salary));

    }

    function firedWorker(ev, salary) {

        ev.preventDefault();
        ev.target.parentNode.parentNode.remove();
        reduceSalary(salary);
    }

    function editWorker(ev, _fname, _lname, _email, _birth, _position, _salary) {

        ev.preventDefault();
        ev.target.parentNode.parentNode.remove();

        fname.value = _fname;
        lname.value = _lname;
        email.value = _email;
        birth.value = _birth;
        position.value = _position;
        salary.value = _salary;

        reduceSalary(_salary);

    }

    function reduceSalary(salary) {
        const currentSalary = Number(addSalary.textContent);
        addSalary.textContent = Math.abs((Number(salary) - currentSalary)).toFixed(2);
    }


    function clearInputFileds() {
        fname.value = "";
        lname.value = "";
        email.value = "";
        birth.value = "";
        position.value = "";
        salary.value = "";
    }

    function e(type, content, parent) {
        const element = document.createElement(type);
        element.textContent = content;

        if (parent) {
            parent.appendChild(element);
        }
        return element;
    }

}
solve()