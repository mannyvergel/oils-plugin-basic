module.exports = function basicPlugin(web, next) {
  console.log('Hello plugin! This is a basic plugin.');

  web.on('initServer', function() {
  	console.log('Called on initialise server');

  	web.get('/hello-plugin', function(req, res) {
  		res.send('Hello Plugin');
  	})
  })

  web.on('beforeRender', function(view, options, callback, req, res) {
  	console.log('Called on before render of ' + view);
  })
  next();
}