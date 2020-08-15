let express = require('express');
let app = express();

app.get('/hello', function(req, res){
console.log('inside get')
res.send('Hello Friends!!');
});

let server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at example.com", host, port)
 })
