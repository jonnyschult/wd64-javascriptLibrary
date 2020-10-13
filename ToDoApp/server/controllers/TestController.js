// Controller with one get request that responds with a message that says "Hello from the test controller"

const { Router } = require('express'); //imports via destructuring  a particular feature of the express object. 

const testControllerRouter = Router(); // a variable to hold that feature. 

testControllerRouter.get('/', (request, response) =>{ //handles a get request by sending a message back. 
    let message = "Hello from the test controller!";
    response.send(message);
});

module.exports = testControllerRouter; //exports the testController. 