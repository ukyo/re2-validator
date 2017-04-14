this['re2'] = {};
var re2_buffer = new Uint8Array(1024);
this['re2']['validate'] = function(s) {
  var size = stringToUTF8Array(s, re2_buffer, 0, 1024);
  return Module['_validate'](re2_buffer);
};
