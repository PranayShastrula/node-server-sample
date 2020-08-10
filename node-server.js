let express = require('express');
let app = express();

app.get('/hello', function(req, res){
console.log('inside get')
res.send('Hello Friends!!');
});

let server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at 127.0.0.1", host, port);
 });