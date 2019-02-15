var config = {
    apiKey: "*********",
    authDomain: "p-to-p-6d1ab.firebaseapp.com",
    databaseURL: "https://p-to-p-6d1ab.firebaseio.com",
    projectId: "p-to-p-6d1ab",
    storageBucket: "p-to-p-6d1ab.appspot.com",
    messagingSenderId: "1025663182708"
  };
  var sum;
  var goToChat;//Declared outside due to scoping issues.
$(document).ready(
    
    function(){
console.log("adasd");

    goToChat = function() {
        var joinMail = $(this).parent().parent().attr('id');
        console.log(joinMail);

        user = firebase.auth().currentUser.uid;
        
        var ref=firebase.database().ref('Users/' + user);

    
        console.log("Hi Hi Hi");


    ref.on('value',function (snapshot){
        userMail=snapshot.val().email;
        var joined = userMail + joinMail;
        console.log(joinMail);
        sum = 0;
        for(i=0;i<joined.length;i++){
            sum = sum + joined.charCodeAt(i);
        }
        console.log(sum);
        // console.log(joined);

            url='index.html?var='+encodeURIComponent(sum);
            window.location.assign(url);

    })
}

    
})