var config = {
  apiKey: "********",
  authDomain: "p-to-p-6d1ab.firebaseapp.com",
  databaseURL: "https://p-to-p-6d1ab.firebaseio.com",
  projectId: "p-to-p-6d1ab",
  storageBucket: "p-to-p-6d1ab.appspot.com",
  messagingSenderId: "1025663182708"
};
firebase.initializeApp(config);

  var btLogOut = document.getElementById("logout");

  btLogOut.addEventListener("click",e => {
    firebase.auth().signOut().then(function() {
        console.log('Signed Out');
        window.location.replace("login.html");
      }, function(error) {
        console.error('Sign Out Error', error);
      });
});


