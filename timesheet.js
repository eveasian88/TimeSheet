// Initialize Firebase
var config = {
    apiKey: "AIzaSyAiNGy92AxI5S1c-C6ZH8mlDxc34aqWy6M",
    authDomain: "demofirebaseproject-86cbb.firebaseapp.com",
    databaseURL: "https://demofirebaseproject-86cbb.firebaseio.com",
    projectId: "demofirebaseproject-86cbb",
    storageBucket: "demofirebaseproject-86cbb.appspot.com",
    messagingSenderId: "90144993220"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

  //initial values
  var name = "";
  var role = "";
  var startDate = "";
  var monthsWorked = "";
  var monthlyRate = "";
  var totalBill = "";

  // capture button click
$("#add-user").on("click", function(event) {
// don't refresh page
event.preventDefault();

name = $("#name-input").val().trim();
role = $("#role-input").val().trim();
startDate = $("#startdate-input").val().trim();
monthlyRate = $("#rate-input").val().trim();

    database.ref().push({
        name: name,
        role: role,
        startDate: startDate,
        monthlyRate: monthlyRate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

    //firebase watcher + initial loader HINT
DataTransfer.ref().on("child_added", function(childSnapshot) {

    console.log("childSnapshot", childSnapshot.val());

    console.log(childSnapshot.val().name);
    console.log(childSnapshot.val().role);
    console.log(childSnapshot.val().startDate);
    console.log(childSnapshot.val().monthlyRate);
})

});

