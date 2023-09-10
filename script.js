let displayTask = document.querySelector(".dispalyTasks");
let inputTask = document.getElementById("task");


document.querySelector(".task button").addEventListener("click", function () {
    if (!(inputTask.value).trim() == "") {
        addTask()
        inputTask.style.border = "3px solid green";
        inputTask.style.borderLeft = "10px solid green";


    } else {
        inputTask.style.border = "3px solid red";
        inputTask.style.borderLeft = "10px solid red";
    }
})

if (!localStorage.getItem("taskCounter")) {
    localStorage.setItem("taskCounter", 0)
    document.querySelector("h3 span").innerHTML = `: ${
        localStorage.getItem("taskCounter")
    }`
} else {
    document.querySelector("h3 span").innerHTML = `: ${
        localStorage.getItem("taskCounter")
    }`
}

function addTask() { // create elements:
    let createDiv = document.createElement("div");
    let createInput = document.createElement("input");
    createInput.type = "checkbox";
    let createP = document.createElement("p");
    createP.innerHTML = inputTask.value.trim();
    let createButton = document.createElement("button");
    createButton.type = "button";
    createButton.innerHTML = "remove";

    // add created elements:
    createDiv.appendChild(createInput);
    createDiv.appendChild(createP);
    createDiv.appendChild(createButton);
    displayTask.appendChild(createDiv);

    // style button:
    createButton.style.padding = "10px";

    // add functionality to remove button:
    createButton.addEventListener('click', function () {
        displayTask.removeChild(createDiv);
        localStorage.setItem("taskCounter", + localStorage.getItem("taskCounter") - 1);
        document.querySelector("h3 span").innerHTML = `: ${
            localStorage.getItem("taskCounter")
        }`
        localStorage.removeItem(`task${ + this.className
        }`)
    })

    createInput.addEventListener("click", function () {
        if (this.checked) {
            createDiv.style.background = "green";
            createButton.style.visibility = "hidden";
            createDiv.style.opacity = 0.5;
        } else {
            createDiv.style.background = "initial";
            createDiv.style.opacity = 1;
            createButton.style.visibility = "visible";
        }
    })

    localStorage.setItem("taskCounter", + localStorage.getItem("taskCounter") + 1)
    createButton.className = localStorage.getItem("taskCounter");
    localStorage.setItem(`task${ + localStorage.getItem("taskCounter")
    }`, inputTask.value)
    localStorage.setItem("taskCounter", + localStorage.getItem("taskCounter"))
    document.querySelector("h3 span").innerHTML = `: ${
        localStorage.getItem("taskCounter")
    }`;
    inputTask.value = null;
}

document.onload = displayTasksFromLocalStorage()

function displayTasksFromLocalStorage() {
    for (let i = 0; i < + localStorage.getItem("taskCounter"); i++) {
        let createDiv = document.createElement("div");
        let createInput = document.createElement("input");
        createInput.type = "checkbox";
        let createP = document.createElement("p");
        createP.innerHTML = localStorage.getItem(`task${
            i + 1
        }`);


        let createButton = document.createElement("button");
        createButton.type = "button";
        createButton.innerHTML = "remove";
        createButton.className = i + 1;

        // add created elements:
        createDiv.appendChild(createInput);
        createDiv.appendChild(createP);
        createDiv.appendChild(createButton);
        displayTask.appendChild(createDiv);

        // style button:
        createButton.style.padding = "10px";

        createButton.addEventListener('click', function () {
            displayTask.removeChild(createDiv);
            localStorage.setItem("taskCounter", + localStorage.getItem("taskCounter") - 1);
            document.querySelector("h3 span").innerHTML = `: ${
                localStorage.getItem("taskCounter")
            }`
            localStorage.removeItem(`task${ + this.className
            }`)
        })

        let isChecked = JSON.parse(localStorage.getItem("checkedInputs"));
        console.log(isChecked)

        if (isChecked[i]) {
            createInput.checked = true;
            createDiv.style.background = "green";
            createButton.style.visibility = "hidden";
            createDiv.style.opacity = 0.5;

            console.log("checked")
        } else {
            createInput.checked = false;
            console.log("not checked")
        } createInput.addEventListener("click", function () {
            if (this.checked) {
                createDiv.style.background = "green";
                createButton.style.visibility = "hidden";
                createDiv.style.opacity = 0.5;
            } else {
                createDiv.style.background = "initial";
                createDiv.style.opacity = 1;
                createButton.style.visibility = "visible";
            }
        })
    }
}



function checkedInputs() {
    let checkedInputs = document.querySelectorAll("input[type=checkbox]");
    let checked = []
    let howChecked = 0;
    for (let checkbox of checkedInputs) {
        if (checkbox.checked) {
            checked.push(true)
            howChecked++;
        } else {
            checked.push(false)
        }
    }
    localStorage.setItem("checkedInputs", JSON.stringify(checked));
let ps = document.querySelector(".doneTasks").que

}

displayTask.addEventListener("click", checkedInputs);
