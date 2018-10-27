 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyBb_VvgidrYsaUud7zcbTIDCthA_EfNwPo",
    authDomain: "demoproject-40b0e.firebaseapp.com",
    databaseURL: "https://demoproject-40b0e.firebaseio.com",
    projectId: "demoproject-40b0e",
    storageBucket: "demoproject-40b0e.appspot.com",
    messagingSenderId: "100672990588"
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
// DataTransfer.ref().on("child_added", function(childSnapshot) {

//     console.log("childSnapshot", childSnapshot.val());

//     console.log(childSnapshot.val().name);
//     console.log(childSnapshot.val().role);
//     console.log(childSnapshot.val().startDate);
//     console.log(childSnapshot.val().monthlyRate);
// })/timesheet.js

});

