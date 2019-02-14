  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDMyu454hQSUzQO5_YynSBr6Ec2lc35Hp4",
    authDomain: "p-to-p-6d1ab.firebaseapp.com",
    databaseURL: "https://p-to-p-6d1ab.firebaseio.com",
    projectId: "p-to-p-6d1ab",
    storageBucket: "p-to-p-6d1ab.appspot.com",
    messagingSenderId: "1025663182708"
  };
  firebase.initializeApp(config);

  function writeData(email,psw,name) {
    var firebaseRef = firebase.database().ref();
    user=firebase.auth().currentUser.uid;
    console.log(user);
    firebaseRef.child('Users').child(user).set({
      email:email,
      password:psw,
      fname:name,
        },
        function(error) {
          if (error) {
            alert("Data could not be saved." + error);
          } else {
              window.location.assign("main.html");
          }
        });

    }

  var emailField = document.getElementById("email");
  var pswField = document.getElementById("password");
  var nameField = document.getElementById("f-name");
  var btSignup = document.getElementById("btSign");

  btSignup.addEventListener("click",e => {
    const email=emailField.value;
    const psw=pswField.value;
    const name = nameField.value;
 if(email==""||psw==""||name=="")
{

}
else{
    const auth=firebase.auth();
    const promise=auth.createUserWithEmailAndPassword(email,psw);
    (promise.then(function (){writeData(email,psw,name);}).catch(e => alert(e.message)));
}
});


firebase.auth().onAuthStateChanged(firebaseUser =>  {
    if(firebaseUser){
        console.log(firebaseUser.uid);
    }else{
        console.log("not logged in");
    }
})

function cancelSignUp() {
  alert("Are you sure?");
  let s = window.location.href;
  window.location.href = s.replace("doctor_signup", "doctor_login");
}
