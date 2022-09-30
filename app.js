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
        if (!currentMark) return;

        document.querySelector(".rating-card").classList.add("hidden");
        document.querySelector(".thanks-card").classList.remove("hidden");

        document.querySelector(".selection-info").textContent = `You selected ${currentMark} out of 5`;
    }

    const submitButton = document.querySelector("button.submit");
    submitButton.addEventListener("click", submit);
}

const configureFormButtons = () => {
    configureMarkButtons();
    configureSubmitButton();
}

configureFormButtons();
