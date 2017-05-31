var re2_buffer = new Uint8Array(1024);

module.exports['validate'] = function(s) {
  var size = stringToUTF8Array(s, re2_buffer, 0, 1024);
  return Module['_validate'](re2_buffer.subarray(0, size));
};

module.exports['ready'] = new Promise(function(resolve) {
  var intervalId = setInterval(function() {
    if (!Module['_validate']) return;
    clearInterval(intervalId);
    resolve();
  }, 1);
});