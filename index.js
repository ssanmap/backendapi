const server = require('./server');
const {MONGO_URI, PORT} = require('./config');
const mongoose = require('mongoose');

mongoose.connect(MONGO_URI, { useNewUrlParser:true}).then( ()=> {

    server.listen(PORT, ()=> {
        console.log(`Coding on POrt ${PORT}`);
    })
    
}).catch()

