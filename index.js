let express = require('express');
let bodyParser = require('body-parser');
let app = express();
app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/status', async (req, res, next) => {
    console.log('inside get status check method')
    res.send('Hello, I am working!!');
});

app.post('/add', async (req, res, next)=> {
     console.log(req.body);
    if (req.body == null || undefined || req.body.first_number == null || undefined) {
        console.log("first number value empty");
        res.status(400).send("Bad Request: First Number Missing");
        return;
    }
    if (req.body == null || undefined || req.body.second_number == null || undefined) {
        console.log("first number value empty");
        res.status(400).send("Bad Request: Second Number Missing");
        return;
    }
    let firstNum = req.body.first_number;
    let secondNum = req.body.second_number;
    console.log("firstNum", firstNum);
    console.log("secondNum", secondNum);
    let value = firstNum + secondNum;
    res.status(200).send(`Sum is ${value}`);
    return;
});
let server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at example.com", host, port)
});
 
