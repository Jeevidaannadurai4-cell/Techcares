const supportData = {
    login: [
        "Can't Login",
        "Check your registered username/email and password. If correct, use the password-reset option. If the problem continues, contact human support."
    ],

    password: [
        "Forgot Password",
        "Select Forgot Password, enter your registered email/phone, and follow the official reset instructions."
    ],

    wrong: [
        "Password Not Working",
        "Check that Caps Lock is off and that you are using the correct account. Avoid repeated attempts and use password recovery if needed."
    ],

    locked: [
        "Account Locked",
        "Your account may be temporarily locked after repeated unsuccessful attempts. Follow the official account-recovery process."
    ],

    otp: [
        "OTP Not Received",
        "Check your network connection and registered phone/email. Wait briefly and request a new OTP if available. Never share your OTP."
    ],

    still: [
        "Still Can't Login",
        "If password recovery did not solve the issue, keep the non-sensitive error message and contact human support."
    ]
};


// Show automated support response
function showResponse(type) {

    const responseBox = document.getElementById("response");
    const responseTitle = document.getElementById("responseTitle");
    const responseText = document.getElementById("responseText");

    if (!supportData[type]) {
        return;
    }

    responseTitle.textContent = supportData[type][0];
    responseText.textContent = supportData[type][1];

    responseBox.classList.add("show");

    responseBox.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


// FAQ open / close
function toggleFAQ(element) {
    element.classList.toggle("open");
}


// Chatbox open / close
function toggleChat() {

    const chatBox = document.getElementById("chatbox");

    chatBox.classList.toggle("show");
}


// Chatbot response
function sendMessage() {

    const input = document.getElementById("chatInput");
    const replyBox = document.getElementById("chatReply");

    const question = input.value.toLowerCase().trim();

    if (question === "") {
        replyBox.textContent = "Please describe your login problem.";
        return;
    }

    let answer =
        "Please select one of the login support categories above.";

    if (
        question.includes("forgot") ||
        question.includes("password")
    ) {
        answer = supportData.password[1];

    } else if (question.includes("otp")) {
        answer = supportData.otp[1];

    } else if (question.includes("lock")) {
        answer = supportData.locked[1];

    } else if (
        question.includes("login") ||
        question.includes("sign in")
    ) {
        answer = supportData.login[1];
    }

    replyBox.textContent = answer;
}