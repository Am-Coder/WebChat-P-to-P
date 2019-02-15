  // Initialize Firebase
  var config = {
    apiKey: "******",
    authDomain: "doctalkfinal-ce5b5.firebaseapp.com",
    databaseURL: "https://doctalkfinal-ce5b5.firebaseio.com",
    projectId: "doctalkfinal-ce5b5",
    storageBucket: "doctalkfinal-ce5b5.appspot.com",
    messagingSenderId: "1039956260614"
  };
  firebase.initializeApp(config);
  var emailField = document.getElementById("email");




function forgot(){
    var auth = firebase.auth();
    var emailAddress = emailField.value;

    auth.sendPasswordResetEmail(emailAddress).then(function() {
        alert("Mail Sent Successfully");
        window.location.assign("login.html");
    }).catch(function(error) {
        alert("There were some errors. Check if you have blocked the external mails and try again.");
        console.log(error);
    });
}