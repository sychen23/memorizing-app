$(document).ready(function() {

  Parse.$ = jQuery;
  Parse.initialize('Qud6XC8J8PtKl4QQZDoi1bg4s5wqzewRlgjdJjwR', 'iBdSj2kUv4I9O6ZrfQydAAb3c0zVldhCB8pxRhwr');

  var TextModule = Parse.Object.extend("TextModule");
  var query = new Parse.Query(TextModule);
  query.find({
    success: function(results) {
      /* Finds all the text modules and displays three at a time. */

      for (var i = 0; i < results.length; i++) {

        //find the values for each text module from Parse
        var textModule = results[i];
        var title  = textModule.get("title");
        var details = textModule.get("details");
        var text = textModule.get("text");

        //create the wrapper for the text module
        var moduleSection = document.createElement("section");
        moduleSection.setAttribute('class', '4u');
        moduleSection.setAttribute('style', 'margin-bottom:20px;');
        moduleSection.setAttribute('id', 'moduleSection' + i);

        //make the image child for the text module
        var moduleImageA = document.createElement("a");
        moduleImageA.setAttribute('class','image featured');
        var moduleImage = document.createElement("img");
        moduleImage.setAttribute('src', 'images/picture' + ((i % 3) + 1) + ".jpg");

        //make the details and button child for the text module
        var moduleBox = document.createElement("div");
        moduleBox.setAttribute('class', 'box');
        moduleBox.innerHTML = "<p id='title" + i + "'>" + title + "</p>";
        var detailsBox = document.createElement("div");
        detailsBox.setAttribute('class', 'details');
        if (text.length <= 100) {
          detailsBox.innerHTML = "<p id='text" + i + "'>" + text + "</p>";
        } else {
          detailsBox.innerHTML = "<p id='text" + i + "'>" + text.substring(0,100) + "...</p>";
        }
        var memorizeButton = document.createElement("a");
        memorizeButton.setAttribute('href', 'text-module.php?id=' + textModule.id);
        memorizeButton.setAttribute('class', 'button');
        memorizeButton.innerHTML = "Memorize Now";

        //append children into text module wrapper
        moduleImageA.appendChild(moduleImage);
        moduleSection.appendChild(moduleImageA);
        moduleBox.appendChild(detailsBox);
        moduleBox.appendChild(memorizeButton);
        moduleSection.appendChild(moduleBox);
        document.getElementById("moduleSectionWrapper").appendChild(moduleSection);
      }
      var tripletIndex = 0;
      displayModules(tripletIndex);
      $("#prevModules").hide();


      $("#nextModules").click(function(event) {
        /* Display next triplet of modules after user click. */

        event.preventDefault();
        tripletIndex += 1;
          $("#prevModules").show();
          if (tripletIndex * 3 >= results.length - 3) {
            $("#nextModules").hide();
          }
        displayModules(tripletIndex);
      });


      $("#prevModules").click(function(event) {
        /* Display previous triplet of modules after user click. */

        event.preventDefault();
        tripletIndex -= 1;
        $("#nextModules").show();
          if (tripletIndex <= 0) {
            $("#prevModules").hide();
          }
        displayModules(tripletIndex);
      });


      function displayModules(tripletIndex) {
        /* Displays triplet of modules. */

        var firstModule = tripletIndex * 3;
        for (var x = 0; x < results.length; x++) {
          if (x == firstModule || x == firstModule + 1 || x == firstModule + 2) {
              document.getElementById("moduleSection" + x).setAttribute("style", "display:inline-block;");
          } else {
              document.getElementById("moduleSection" + x).setAttribute("style", "display:none;");
          }
        }
      }
    },
    error: function(error) {
      alert("Error in retrieving modules from Parse: " + error.message);
    }
  });
});
