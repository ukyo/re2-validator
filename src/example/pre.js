var Module = {};

Module["instantiateWasm"] = function (info, callback) {
  var start = performance.now();
  instantiateCachedURL(wasmCacheVersion, "re2.wasm", info).then(function (instance) {
    callback(instance);
    console.log(performance.now() - start);
  });
  return {};
};