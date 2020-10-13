//Express boilerplate
const Express = require('express'); //Brings in the express object. 

const applicationControllers = require("./controllers/index");//brings in the controllers from it's index compilation

const expressApplicationObject = new Express(); //creates a new instance of the express object. 

expressApplicationObject.use(Express.json()); //Uses a feature of the express object which jsonifies out incoming data

expressApplicationObject.use('/test', applicationControllers.test); //routes the call through the controllers. applicationControllers.test is the callback. 

expressApplicationObject.get('/', (request, response) => {
    console.log('[server]: Root GET request recieved');
    console.log('TYPE:', request.method);
    console.log('URL:', request.url);
    console.log('[server]: Response being dispatched ->');
    response.send('Root Route Hit, hello from the todo server');
});

expressApplicationObject.post('/challenge', (request, response) => {
    let name = request.body.name;
    let age = request.body.age;
    if(age >= 18){
        response.send(`${name}, you are an adult.`);
    }else{
        response.send(`${name}, you will be an adult soon!`); 
    }
})
//Challenge: receive a post request at the route '/challenge'
//Should take two values inside of the body:
    //name -> string for a name
    //age -> a num for the age'
//Respond with a this message:
    //if user is 18 or older, the message will be: 
        //"<name>, you are an adult"
    //else
        //"<name>, you will be an adult soon!""
        //JSON in a request is a STRING. 


expressApplicationObject.listen(9001, () => {
    console.log("[server]: App is listening on port 9001");
});

