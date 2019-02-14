var config = {
    apiKey: "AIzaSyDMyu454hQSUzQO5_YynSBr6Ec2lc35Hp4",
    authDomain: "p-to-p-6d1ab.firebaseapp.com",
    databaseURL: "https://p-to-p-6d1ab.firebaseio.com",
    projectId: "p-to-p-6d1ab",
    storageBucket: "p-to-p-6d1ab.appspot.com",
    messagingSenderId: "1025663182708"
  };
  var goToChat;//Declared outside due to scoping issues.
$(document).ready(
    function(){

console.log("adasd");
// document.getElementById("connectctBtn").onclick() = function(){
//     var email = $(this).parent().parent().attr('id');
//     console.log("fsdf"+email);
//     
// goToChat(email);
// }
// $("#connectBtn").on('click', function(){
//     console.log("adasd");

//     var email = $(this).parent().parent().attr('id');
//     console.log("fsdf"+email);
//     goToChat(email);
// })
    goToChat = function() {
        var joinMail = $(this).parent().parent().attr('id');

        user = firebase.auth().currentUser.uid;
        
        var ref=firebase.database().ref('Users/' + user);

    


    ref.on('value',function (snapshot){
        userMail=snapshot.val().email;
        var joined = userMail + joinMail;
        firebase.database().ref().child('Chat').child(user).push();
        let sd = window.location.href;
        window.location.href = sd.replace("main","index");
    })
}

    
})