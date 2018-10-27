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
  $("#add-user").on("click", )

function createTable() {

    mytable = $('<table></table>').attr({ lasc "table" });
    var rows = new Number($("#rowcount").val());
    var cols = new Number($("#columncount").val());
    var tr = [];
    for (var i = 0; i < rows; i++) {
        var row = $('<tr></tr>').attr({ class: ["class1", "class2", "class3"].join(' ') }).appendTo(mytable);
        for (var j = 0; j < cols; j++) {
            $('<td></td>').text("text1").appendTo(row);
        }

    }
    console.log("TTTTT:" + mytable.html());
    mytable.appendTo("#box");

}
$(".submit").on("click", createTable);