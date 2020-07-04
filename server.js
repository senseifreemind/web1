const express = require('express')
const app = express()
app.use(express.static(__dirname + '/'));
const normalizePort = require('normalize-port');

var device = require('express-device');//for determining mobile or desktop user
app.use(device.capture());//^

var port= normalizePort(process.env.PORT || 8080)
app.set('port', port)

var cons = require('consolidate');
app.set('views', __dirname + '/views');
app.engine('html', cons.swig)
app.set('view engine', 'html');
//app.set('view engine', 'ejs') I need to move this web app to use EJS instead of HTML


device.enableViewRouting(app);//sned user to the mobile site if they are on tablet or phone

app.get('/',function(req,res) {
  res.render('index.html');
});


app.listen(port, function () {
  console.log('App listening on port '+ port)
})