require('dotenv').config();

const express = require('express'); //1
const app = express(); //2
const test = require('./controllers/testcontroller');
const authTest = require('./controllers/authtestcontroller')

const user = require('./controllers/usercontroller')
const sequelize = require('./db')

app.use(express.json());
app.use(require('./middleware/headers')); 

/****************************
 * EXPOSED ROUTES
****************************/

app.use('/test', test);

app.get('/api/test', function(req, res){
    res.send("This is data from the /api/test endpoint. It's from the server.");
});

app.use('/api/user', user);

/****************************
 * PROTECTED ROUTES
****************************/

app.use(require('./middleware/validate-session'));
app.use('/authtest', authTest)

//3 alternative statement for api/user
//app.use('/api/user', require('./controller/usercontrollers'));

sequelize.authenticate()
	.then(async () => {
		console.log('DB CONNECTED');
		return sequelize.sync();
	})
	.catch(() => {
		console.log('Server Crashed');
	})
app.listen(3000, () => {
	console.log('App listening on port 3000');
});
