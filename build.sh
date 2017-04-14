#! /bin/sh

emcc -Ire2 --bind -o dist/re2.js  re2_binding.cc re2/obj/libre2.a -s WASM=1 --llvm-lto 1 --llvm-opts 3 -s NO_FILESYSTEM=1  -s EXPORTED_RUNTIME_METHODS="[]" --closure 1 -Oz --post-js post.js
echo "\nexport const re2 = this.re2;" >> dist/re2.js