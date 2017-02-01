const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const PORT = 8080;

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'));

app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    let method = req.body._method
    delete req.body._method
    return method
  }
}))



app.listen(PORT, function() {
  console.log('Started connection on port ' + PORT);
  // db.sequelize.sync();
});


module.exports = app;
