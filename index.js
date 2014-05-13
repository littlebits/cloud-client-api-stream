/* global Primus */
'use strict';

var cloud_stream = new Primus('ws://api-stream-stage.littlebitscloud.cc/primus');
window.cloud_stream = cloud_stream;




cloud_stream.subscribe = function subscribe_to(bit_id){
  return primus.write({ name: 'subscribe', value: 'bit:' + bit_id });
};

cloud_stream.unsubscribe = function subscribe_to(bit_id){
  return primus.write({ name: 'unsubscribe', value: 'bit:' + bit_id });
};



require('./lib/primus-logging')(cloud_stream);

module.exports = cloud_stream;