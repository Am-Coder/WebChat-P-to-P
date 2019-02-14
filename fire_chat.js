var config = {
    apiKey: "AIzaSyDvvnPLQMzF3JOdg-ddsdV5sah6FpEpOsY",
    authDomain: "doctalkfinal-ce5b5.firebaseapp.com",
    databaseURL: "https://doctalkfinal-ce5b5.firebaseio.com",
    projectId: "doctalkfinal-ce5b5",
    storageBucket: "doctalkfinal-ce5b5.appspot.com",
    messagingSenderId: "1039956260614"
  };
  firebase.initializeApp(config);

  function goToChat(a){
      user = firebase.auth().currentUser.uid;
    if(a==0) {
        var ref=firebase.database().ref('doctor/' + user);
        let sd = window.location.href;
        window.location.href = sd.replace("doctor_home","index");
    }
    else {
        var ref=firebase.database().ref('patient/' + user);
        let sp = window.location.href;
        window.location.href = sp.replace("patient_home","index");
    }

    ref.on('value',function (snapshot){
        console.log(snapshot.val().email);
    })
}

function goToDialogflow() {
    let s = window.location.href;
    window.location.href = s.replace("patient_home","trydialogflow");
}
