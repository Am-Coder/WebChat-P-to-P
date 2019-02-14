function cancelSignUp() {
    alert("Are you sure?");
    window.location.assign("login.html");
}

function checkPassword() {
    let p = document.querySelector("psw").value;
    let r = document.querySelector("psw-repeat").value;
    console.log(p+" "+r);
}

function signUp() {
    let s = window.location.href;
    window.location.href = s.replace("patient_signup", "patient_home");
}