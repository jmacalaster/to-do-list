// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-completed").on("click", function(event) {
      var id = $(this).data("id");
      var newCompleted = $(this).data("newcompleted");
  
      var newCompletedState = {
        completed: newCompleted
      };
  
      // Send the PUT request.
      $.ajax("/api/todos/" + id, {
        type: "PUT",
        data: newCompletedState
      }).then(
        function() {
          console.log("changed completed to", newCompleted);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newTask = {
        task: $("#ca").val().trim(),
        completed: $("[name=completed]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/todos", {
        type: "POST",
        data: newTask
      }).then(
        function() {
          console.log("created new task");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-task").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/todos/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted task", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  