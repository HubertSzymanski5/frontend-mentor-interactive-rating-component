let currentMark = undefined;

const configureMarkButtons = () => {
    const clickOnMarkButtonListener = (event) => {

        const markBtn = event.currentTarget;
        const value = markBtn.dataset.value;

        if (currentMark === value) return;
        if (currentMark !== undefined) {
            markButtons[currentMark - 1].classList.remove("selected");
        }
        currentMark = value;

        markBtn.classList.add("selected");
    }

    const markButtons = document.getElementsByClassName("mark");
    for (let markButton of markButtons) {
        markButton.addEventListener("click", clickOnMarkButtonListener);
    }
}

const configureSubmitButton = () => {
    const submit = () => {
        console.log(currentMark);
    }

    const submitButton = document.querySelector("button.submit");
    submitButton.addEventListener("click", submit);
}

const configureFormButtons = () => {
    configureMarkButtons();
    configureSubmitButton();
}

configureFormButtons();
