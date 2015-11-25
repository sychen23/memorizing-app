$(document).ready(function() {

   $("#create").click(function(event) {
     /* Creates a new text module when user clicks to submit form. */

    event.preventDefault();
    Parse.$ = jQuery;
    Parse.initialize('Qud6XC8J8PtKl4QQZDoi1bg4s5wqzewRlgjdJjwR', 'iBdSj2kUv4I9O6ZrfQydAAb3c0zVldhCB8pxRhwr');

    //instantiate a new TextModule object
  	var TextModule = Parse.Object.extend("TextModule");
  	var textModule = new TextModule();

    //grab user input values for new text module
  	var title = $("#title").val();
    var details = $("#details").val();
  	var text = $("#text").val();

    //set values of text module for database object
  	textModule.set("title", title);
    textModule.set("details", details);
  	textModule.set("text", text);

    //make sure user input is okay
    if ($("#title").val().length > 0) {
      if (details.length > 0) {
        textModule.save(null, {
            success: function(moduleData) {
              /* Saves the new TextModule object. */

              swal({
                title: "Memorization Module Created!",
                type: "success",
                showCancelButton: false,
                confirmButtonClass: "btn-success",
                confirmButtonText: "OK",
                closeOnConfirm: true
              },
              function() {
                /* transition to memorization page of new text module */

                var memorizeLink = "text-module.html?id=" + textModule.id;
                var myNewmemorizeLink = encodeURI(memorizeLink);
                window.location.href = memorizeLink;
              });
            },
            error: function(projectData, error) {
              alert(error.message);
            }
        });
      } else {
        //alert if author field is empty
        swal({
          title: "Who wrote this work? Is it anonymous?",
          confirmButtonClass: "btn-default",
          confirmButtonText: "OK",
          closeOnConfirm: true
        });
      }
    } else {
      //alert if title field is empty
      swal({
        title: "What's the name of this work? Is it untitled?",
        confirmButtonClass: "btn-default",
        confirmButtonText: "OK",
        closeOnConfirm: true
      });
    }
  });
});
