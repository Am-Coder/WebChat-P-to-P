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
  var flag=0;
  var emailField = document.getElementById("email");
  var pswField = document.getElementById("password");
  const btLogin = document.getElementById("btlogin");




firebase.auth().onAuthStateChanged(firebaseUser =>  {
    if(firebaseUser){
        console.log(firebaseUser);
    }else{
        console.log("not logged in");
    }
})

function login(){
    const email=emailField.value;
    const psw=pswField.value;
    const auth=firebase.auth();
    const promise=auth.signInWithEmailAndPassword(email,psw);
    (promise.then(function (){window.location.assign("main.html");}).catch(e=> {window.flag=1; alert(e.message);
                                       }));

}



