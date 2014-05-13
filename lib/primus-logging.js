'use strict';



function plugin(primus){

  var log = console.log.bind(console);

  primus.on('reconnect', function reconnect() {
    log('Reconnect', 'Starting the reconnect attempt, hopefully we get a connection!');
  });

  primus.on('online', function online() {
    log('Online', 'We have regained control over our internet connection.');
  });

  primus.on('offline', function offline() {
    log('Offline', 'We lost our internet connection.');
  });

  primus.on('open', function open() {
    log('Open', 'The connection has been established.');
  });

  primus.on('error', function error(err) {
    log('Erorr', 'An unknown error has occured <code>'+ err.message +'</code>');
  });

  primus.on('data', function incoming(data) {
    log('Received data', 'string' === typeof data ? data : '<pre><code>'+ JSON.stringify(data, null, 2) +'</code></pre>');
  });

  primus.on('end', function end() {
    log('End', 'The connection has ended.');
  });

  primus.on('close', function end() {
    log('close', 'We\'ve lost the connection to the server.');
  });
}



module.exports = plugin;