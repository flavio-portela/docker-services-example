const express = require('express');

const app = express();

app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.static('public'));

app.get('/*', function(req, res){
    res.render('index');
});

app.listen(4000, function(){
    console.log('UI is running on port 4000');
});