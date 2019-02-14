function doctorSignIn() {
  let s = window.location.href;
  window.location.href = s.replace("first", "doctor_login");
}