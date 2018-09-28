var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var todos = require("../models/todo.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  todos.all(function(data) {
    var hbsObject = {
      todo: data
    };
    console.log("hbsObject: " + hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/todos", function(req, res) {
  todos.create([
    "task", "completed"
  ], [
    req.body.task, req.body.completed
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/todos/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  todos.update({
    completed: req.body.completed
  }, condition, function(result) {
      res.status(200).end();
  });
});

router.delete("/api/todos/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  todos.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
