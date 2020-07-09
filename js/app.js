let submitButton = document.getElementById("submitBtn");

const handleForm = (event) => {
    let message = document.getElementById("message").value;
    if (message) {
        document.querySelector(".message-content").innerHTML = message;
        document.getElementById("message").value = "";
        
    } else {
        event.preventDefault()
        document.querySelector(".feedback").classList.add("show");  
        setTimeout(() => {
            document.querySelector(".feedback").classList.remove("show");
        }, 2000)
        
    };
};

submitButton.addEventListener("click", handleForm);
