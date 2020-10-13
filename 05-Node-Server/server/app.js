let express = require('express'); //1
let app = express(); //2
let test = require('./controllers/testcontroller');

let sequelize = require('./db');

app.use(express.json());

app.use('/test', test);

app.get('/api/test', function(req, res){
    res.send("This is data from the /api/test endpoint. It's from the server.");
});

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
