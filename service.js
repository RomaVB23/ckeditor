const express = require('express');

const bodyparser = require('body-parser');
const multiparty = require('connect-multiparty');

const MultipartyMiddleware = multiparty({uploadDir: './images'})
const morgan = require('morgan');

const PORT = process.env.PORT || 9000;
const app = express();

app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

app.get('/', (req, res)=> {
    res.status(200).json({
        message: "Testing my Server"
    })
})

app.post('/uploads', MultipartyMiddleware, (req, res)=>{
    console.log(req.files.upload);
})
app.listen(PORT, console.log(`Server has successfuly Started at : ${PORT}`));
