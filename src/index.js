const app = require('./server');


//Listeneng the server 
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
  } )