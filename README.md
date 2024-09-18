# Lessons Learned
Order matters. When sending back a response from an endpoint, the status() function must be first in order to return the correct status code.

`res.status(201).json(newTodo); // returns status code 201` <br>
`res.json(newTodo).status(201); // returns status code 200`

## Notes
Course had no mention to use the `body-parser` library to handle POST requests. 
