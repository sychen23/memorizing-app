$(document).ready(function(){

  Parse.$ = jQuery;
  Parse.initialize('Qud6XC8J8PtKl4QQZDoi1bg4s5wqzewRlgjdJjwR', 'iBdSj2kUv4I9O6ZrfQydAAb3c0zVldhCB8pxRhwr');

  var TextModule = Parse.Object.extend("TextModule");
  var query = new Parse.Query(TextModule);

  query.get(<?php echo '"'.$id.'"';?>, {
    success: function(textModule) {
      var title  = textModule.get("title");
      var details = textModule.get("details");
      var text = textModule.get("text");
      $("#title").html(title);
      $("#details").html(details);
      $("#text").html(text);
    },
    error: function(object, error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });


});
