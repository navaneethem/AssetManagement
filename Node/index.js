const bodyParser = require('body-parser');
const express= require('express');
const cors = require('cors');

const db  = require('./config/database');
db.authenticate().then(() =>{
    console.log("Database connected");
})
.catch(err => {
    console.log("Error::" + err);
})

const app= express();
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended:true, limit: '50mb'}));
app.use(cors('*'));

app.use('/',require('./routes/routes'));

const PORT=process.env.PORT || 5000;
db.sync().then(() => {
    app.listen(PORT, console.log(`Server started on port ${PORT}`));

})
.catch(err => console.log('Error::'+ err));
