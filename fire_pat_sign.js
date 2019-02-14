  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDvvnPLQMzF3JOdg-ddsdV5sah6FpEpOsY",
    authDomain: "doctalkfinal-ce5b5.firebaseapp.com",
    databaseURL: "https://doctalkfinal-ce5b5.firebaseio.com",
    projectId: "doctalkfinal-ce5b5",
    storageBucket: "doctalkfinal-ce5b5.appspot.com",
    messagingSenderId: "1039956260614"
  };
  firebase.initializeApp(config);
  function writePatientData(email,psw,name,state,phno,address) {
    var firebaseRef = firebase.database().ref();
    user=firebase.auth().currentUser.uid;
    console.log(user);
    firebaseRef.child('patient').child(user).set({
        email:email,
        password: psw,
        fname:name,
        residence:address,
        stateOfResidence:state,
        contact:phno
        },
        function(error) {
            if (error) {
              alert("Data could not be saved." + error);
            } else {
                window.location.assign("patient_home.html");
            }
          });
    
    }

  var emailField = document.getElementById("email");
  var pswField = document.getElementById("password");
  var nameField = document.getElementById("f-name");
//   var regnoField = document.getElementById("med-reg-no");
  var addressField = document.getElementById("address");
  var stateField = document.getElementById("stateslist");
  var phField = document.getElementById("phone-no");
  var btSignup = document.getElementById("btSign");

  btSignup.addEventListener("click",e => {
    const email=emailField.value;
    const psw=pswField.value;
    const name = nameField.value;
    const address = addressField.value;
    const state = stateField.options[stateField.selectedIndex].value;
    const phno = phField.value;
    if(email==""||psw==""||name==""||address==""||state==""){}
    else
    {
        const auth=firebase.auth();
        const promise=auth.createUserWithEmailAndPassword(email,psw);
        (promise.then(function (){writePatientData(email,psw,name,state,phno,address);}).catch(e => alert(e.message)));
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
    window.location.href = s.replace("patient_signup", "patient_login");
}
