function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    if (username === "" || password === "") {
        errorMessage.textContent = "Please enter both username and password.";
        return;
    }

    var hashedPassword = hashPassword(password);

    if (username === "user" && hashedPassword === "technohacks") {
        errorMessage.textContent = "Login successful!";
    } else {
        errorMessage.textContent = "Invalid username or password.";
    }
}

function hashPassword(password) {
    return password; 
}
