const formRun = function() {
    const input = document.getElementById("email");
    const text = document.getElementById("text");
    const firstInput = JSON.parse(localStorage.getItem("contact"));
        if (firstInput) {
            console.log(firstInput.email);
            console.log(firstInput.message);
        }

    let inputText, textContent;

    input.addEventListener("input", (event) => {
        inputText = event.currentTarget.value;
        console.log(inputText);
    });

    text.addEventListener("input", (event) => {
        textContent = event.currentTarget.value;
        console.log(textContent);
    })

    const feedbackFormState = {
        email: inputContent,
        message: textContent
    }
    
    localStorage.setItem("contact", JSON.stringify(feedbackFormState));

}

module.exports = formRun;