$(document).ready(function(){
   $("#create").click(function(event){ 
    event.preventDefault();
    Parse.$ = jQuery;
    Parse.initialize('Qud6XC8J8PtKl4QQZDoi1bg4s5wqzewRlgjdJjwR', 'iBdSj2kUv4I9O6ZrfQydAAb3c0zVldhCB8pxRhwr');

    var newObjectID = 0; /* creates a new object id to be sent to the memoreyes.php file */

  	var TextModule = Parse.Object.extend("TextModule");
  	var textModule = new TextModule();
  	var title = $("#title").val();
    var details = $("#details").val();
  	var text = $("#text").val();
  	textModule.set("title", title);
    textModule.set("details", details);
  	textModule.set("text", text);
    if ($("#title").val().length > 0) {
      if (details.length > 0) {
        textModule.save(null, {
            success: function(moduleData) {
              swal({
                title: "Memorization Module Created!",
                type: "success",
                showCancelButton: false,
                confirmButtonClass: "btn-success",
                confirmButtonText: "OK",
                closeOnConfirm: true
              },
              function() {
                newObjectID = textModule.id;
                var memorizeLink = "memoreyes.php?id="+newObjectID;
                var myNewmemorizeLink = encodeURI(memorizeLink);
                window.location.href = memorizeLink;
              });
              
            },
            error: function(projectData, error) {
              alert(error.message);
            }
        });
      }
      else {
        swal({
          title: "Write details!",
          confirmButtonClass: "btn-default",
          confirmButtonText: "OK",
          closeOnConfirm: true
        });
      }
    }
    else {
        swal({
          title: "Write a title!",
          confirmButtonClass: "btn-default",
          confirmButtonText: "OK",
          closeOnConfirm: true
        });
    }

    

  });
});
