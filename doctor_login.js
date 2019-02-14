// function login() {
//     let u = document.getElementById("email").value;
//     let p = document.getElementById("password").value;
    
//     if(validateEmail(u)===true) {
//         if(u=="admin@svnit.ac.in" && p=="admin") {
//             alert("Login Successful!");
//             let s = window.location.href;
//             window.location.href = s.replace("doctor_login", "doctor_home");
//         }
//         else{
//             window.alert("Username and/or Password are incorrect!");
//         }
//     }
// }

function validateEmail(emailValue) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
        return true;
    }
    alert("You have entered an Invalid E-mail ID");
    return false;
}