
var click = 0;

function startTime() {
  var start = new Date().getTime();

  var end = new Date().getTime();
  var time = end - start;
  document.getElementById("txt").innerHTML = ('Execution time: ' + time);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

  function Move () {
    document.getElementById("moves").innerHTML = "Moves:" + click;
  }

  function Reset () {
    var i;
    for(i = 1; i < 26; i++){
      document.getElementById(i).style.background = "black";
    }
    click = 0;
    Move();
  }

  function Rando () {
    var i;
    var j;
    Reset();
    for(i=0 ; i<10 ; i++) {
      j = Math.floor(Math.random() * 25);
      Flip(j);
    }
    click = 0;
    Move();
  }

  function Flip (num) {
    var up = num - 5; //error
    var down = num + 5;
    var left = num - 1; //error
    var right = num + 1;

    Toggle(num);
    if (num != "5" && num != "10" && num != "15" && num != "20" && num != "25")
      { Toggle(right); }
    if (num != "1" && num != "6" && num != "11" && num != "16" && num != "21")
      { Toggle(left); }
    if (num != "1" && num != "2" && num != "3" && num != "4" && num != "5")
      { Toggle(up); }
    if (num != "21" && num != "22" && num != "23" && num != "24" && num != "25")
      { Toggle(down); }
    click++;
  }

  function Toggle(num) {

      if(document.getElementById(num).style.background == "white") {
        document.getElementById(num).style.background = "black";
      }
      else {
        document.getElementById(num).style.background = "white";
      }
  }
