function get(name){
   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
      return decodeURIComponent(name[1]);
}

var idParameter = get('id');
var currentLineNum = 0;
$(document).ready(function() {
  $("#viewAllLines").hide();
  document.getElementById("prevLine").setAttribute("style", "visibility:hidden;");
  $("#nextLine").hide();
  $("#line-by-line").click(function(event){
    event.preventDefault();
    loop_divs();
    display_box(0);
    currentLineNum = 0;
    document.getElementById("ticker").setAttribute("style", "height:100px;margin-bottom:100px;");
    $("#line-by-line").hide();
    document.getElementById("prevLine").setAttribute("style", "visibility:hidden;");
    $("#nextLine").show();
    $("#viewAllLines").show();
  });
  $("#prevLine").click(function(event){
    event.preventDefault();
    currentLineNum -= 1;
    $("#nextLine").show();
    if (currentLineNum <= 0) {
      document.getElementById("prevLine").setAttribute("style", "visibility:hidden;");
    }
    display_box(currentLineNum);
  });
  $("#nextLine").click(function(event){
    event.preventDefault();
    currentLineNum += 1;
    document.getElementById("prevLine").setAttribute("style", "visibility:visible;");
    if (currentLineNum >= divArray.length - 1) {
      $("#nextLine").hide();
    }
    display_box(currentLineNum);
  });
  $("#viewAllLines").click(function(event){
    event.preventDefault();
    display_all();
    $("#line-by-line").show();
    $("#viewAllLines").hide();
    document.getElementById("prevLine").setAttribute("style", "display:none;");
    document.getElementById("nextLine").setAttribute("style", "display:none;");
    document.getElementById("ticker").setAttribute("style", "height:" + (divArray.length - 1) * 120 + "px;margin-bottom:100px;");
  });
    function display_box(i) {
      for (var x = 0; x < divArray.length; x++) {
        if (x == i) {
          document.getElementById(divArray[x]).setAttribute("style", "display:block;");
        } else {
          document.getElementById(divArray[x]).setAttribute("style", "display:none;");
        }
      }
    }
    function display_all() {
      for (var x = 0; x < divArray.length; x++) {
          document.getElementById(divArray[x]).setAttribute("style", "display:block;");
      }
    }

});

  var divArray = [];
  function loop_divs() {
    var moduleId = idParameter;
    var containerDiv = document.getElementById("ticker"); //contains the divs
    var innerDivs = containerDiv.getElementsByTagName("div");
    for (var i = 0; i < innerDivs.length; i++) {
      if (innerDivs[i].id.substring(0, moduleId.length) == moduleId) {
        if (divArray.indexOf(innerDivs[i].id) == -1) {
          divArray.push(innerDivs[i].id);
        }
       }
    }
  }
