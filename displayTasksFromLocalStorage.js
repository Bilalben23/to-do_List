function displayTasksFromLocalStorage() {
    for (let i = 0; i < + localStorage.getItem("taskCounter"); i++) {
        let createDiv = document.createElement("div");
        let createInput = document.createElement("input");
        createInput.type = "checkbox";
        let createP = document.createElement("p");
        createP.innerHTML = localStorage.getItem(`task${
            i + 1
        }`);

        let isChecked = JSON.parse(localStorage.getItem("checkedInputs"));
        console.log(isChecked);

        if (isChecked[i]) {
            inputTask.checked = true;
            console.log("checked");
        } else {
            inputTask.checked = false;
            console.log("not checked");


        }


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
            }`;
            localStorage.removeItem(`task${ + this.className
            }`);
        });

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
        });
    }


}
