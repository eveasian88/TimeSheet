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


// capture button click
$("#add-user").on("click", function (event) {
    // don't refresh page
    event.preventDefault();

    var empName = $("#name-input").val().trim();
    var empRole = $("#role-input").val().trim();
    var empStart = $("#startdate-input").val().trim(), "MM/DD/YYYY").format("X");
    var empRate = $("#rate-input").val().trim();

// temporary object for holding employee data
    var newEmp = {
    name: empName,
    role: empRole,
    start: empStart,
    rate: empRate
};

// uploads employee data to the database
database.ref().push(newEmp);

// logs everything to console
console.log(newEmp.name);
console.log(newEmp.role);
console.log(newEmp.start);
console.log(newEmp.rate);

alert("Employee successfully added");

// clears all of the text-boxes
$("#employee-name-input").val("");
$("#role-input").val("");
$("#start-input").val("");
$("#rate-input").val("");
});

database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
    // store everything into a variable.
    var empName = childSnapshot.val().name;
    var empRole = childSnapshot.val().role;
    var empStart = childSnapshot.val().start;
    var empRate = childSnapshot.val().rate;
  
    // employee info
    console.log(empName);
    console.log(empRole);
    console.log(empStart);
    console.log(empRate);


    var empStartPretty = moment.unix(empStart).format("MM/DD/YYYY");

 // to calculate the months worked
 var empMonths = moment().diff(moment(empStart, "X"), "months");
 console.log(empMonths);

 // calculate the total billed rate
 var empBilled = empMonths * empRate;
 console.log(empBilled);

 // create the new row
 var newRow = $("<tr>").append(
   $("<td>").text(empName),
   $("<td>").text(empRole),
   $("<td>").text(empStartPretty),
   $("<td>").text(empMonths),
   $("<td>").text(empRate),
   $("<td>").text(empBilled)
 );

 // append the new row to the table
 $("#employee-table > tbody").append(newRow);
});

