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
var formatDate =moment(startDate).format("YYYYMMDD");


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
$("#add-user").on("click", function (event) {
    // don't refresh page
    event.preventDefault();

    name = $("#name-input").val().trim();
    role = $("#role-input").val().trim();
    startDate = $("#startdate-input").val().trim();
    monthlyRate = $("#rate-input").val().trim();


    database.ref().push({
        name: name,
        role: role,
        startDate: formatDate,
        monthlyRate: monthlyRate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

    firebase watcher + initial loader HINT
    DataTransfer.ref().on("child_added", function (childSnapshot) {

        console.log("childSnapshot", childSnapshot.val());

        console.log(childSnapshot.val().name);
        console.log(childSnapshot.val().role);
        console.log(childSnapshot.val().startDate);
        console.log(childSnapshot.val().monthlyRate);

    })

    var randomDate = "11/19/2016";
    var formated = "MM/DD/YYYY";
    var convertedDate = moment(randomDate, formated);

// console.log to confirm the code changes we made worked.
console.log(convertedDate.format("dddd"));
console.log(convertedDate.format("hh:mm:ss"));

// to determine the time in years, months, days between today and the randomDate
console.log(convertedDate).diff(moment(), "year");
// to determine the number of days between the randomDate and 02/14/2001
var newDate = moment("02/14/2001", formated);
console.log(convertedDate.diff(newDate, "days"));
// to convert the randomDate to unix time (be sure to look up what unix time even is!!!)

// to determine what day of the week and what week of the year this randomDate falls on.


console.log(moment().format("DD/MM/YY hh:mm A"));


});

