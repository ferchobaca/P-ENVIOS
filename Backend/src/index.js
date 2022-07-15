const express = require ('express')
const port = (process.env.port || 3030);
const app = express();
const cors = require('cors');
const morgan = require('morgan');

app.use(cors());
app.use(morgan());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set ('port', port );
app.listen(app.get('port'));
console.log('Hola soy tu servidor de confianza');

app.use('/api', require('./route/route'))
console.log('Server ok ' + port);
