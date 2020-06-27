const dotenv = require('dotenv');
const app = require('./app/app');

dotenv.config();

// RUNNING THE SERVER
function run () {
    const url = `http://${process.env.HOST}:${process.env.PORT}`;
    app.listen(process.env.PORT);
    console.log('server on ', url);
    console.log(new Date());
}

run();