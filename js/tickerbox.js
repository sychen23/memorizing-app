function getUrlParameters(parameter, staticURL, decode){
  var currLocation = (staticURL.length)? staticURL : window.location.search,
      parArr = currLocation.split("?")[1].split("&"),
      returnBool = true;
  for(var i = 0; i < parArr.length; i++){
        parr = parArr[i].split("=");
        if(parr[0] == parameter){
            return (decode) ? decodeURIComponent(parr[1]) : parr[1];
            returnBool = true;
        } else{
            returnBool = false;
        }
  }
  if(!returnBool) return false;
}
var idParameter = getUrlParameters("id", "", true);
var currentLineNum = 0;
$(document).ready(function() {
  $("#viewAllLines").hide();
  $("#prevLine").hide();
  $("#nextLine").hide();  
  $("#line-by-line").click(function(event){
    event.preventDefault();
    loop_divs();
    display_box(0);
    currentLineNum = 0;
    $("#line-by-line").hide();
    $("#prevLine").hide();
    $("#nextLine").show();
    $("#viewAllLines").show();    
  });
  $("#prevLine").click(function(event){
    event.preventDefault();
    currentLineNum -= 1;
    $("#nextLine").show();
    if (currentLineNum <= 0) {
      $("#prevLine").hide();
    }
    display_box(currentLineNum);
  });
  $("#nextLine").click(function(event){
    event.preventDefault();
    currentLineNum += 1;
    $("#prevLine").show();
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