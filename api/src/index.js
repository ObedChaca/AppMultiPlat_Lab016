const express = require('express');
const app = express();
const morgan = require('morgan');

app.set('port',3000);
app.set('json spaces', 2);

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/api/hospitals',require('./routes/hospitals'));


app.listen(3000,() => {
    console.log(`Server on port ${app.get('port')}`);
});