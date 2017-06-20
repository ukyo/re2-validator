var Module = {};

if (typeof __dirname === "string") {
  Module["wasmBinaryFile"] = __dirname + "/re2.wasm";
} else {
  Module["instantiateWasm"] = function (info, callback) {
    var start = performance.now();
    instantiateCachedURL(wasmCacheVersion, "./dist/re2.wasm", info).then(function(instance) {
      callback(instance);
      console.log(performance.now() - start);
    });
    return {};
  };
}
