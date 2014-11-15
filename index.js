module.exports = function basicPlugin(pluginConf, web, next) {
  console.log('Hello plugin! This is a basic plugin.');

  web.app.get('/hello-plugin', function(req, res) {
      res.send('Hello Plugin');
    })

  web.on('beforeRender', function(view, options, callback, req, res) {
    console.log('Called on before render of ' + view);
  })
  next();
}