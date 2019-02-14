// Initialize Firebase
var config = {
    apiKey: "AIzaSyDMyu454hQSUzQO5_YynSBr6Ec2lc35Hp4",
    authDomain: "p-to-p-6d1ab.firebaseapp.com",
    databaseURL: "https://p-to-p-6d1ab.firebaseio.com",
    projectId: "p-to-p-6d1ab",
    storageBucket: "p-to-p-6d1ab.appspot.com",
    messagingSenderId: "1025663182708"
  };
//   firebase.initializeApp(config);
  $(document.getElementById("usersCollection")).ready(function(){
            firebase.database().ref('Users/').on('child_added', function(snapshot){
                var data = "<div id ="+ snapshot.child('email').val() +"><div id = 'fname'>" + snapshot.child('fname').val() + "</div><br><div id = 'email'>" + snapshot.child('email').val() + "</div><div id='connector'><button id='connectBtn' onclick='goToChat()'>Connect</button></div></div>";

                $("#usersCollection").html($("#usersCollection").html() + data);
            });
    });