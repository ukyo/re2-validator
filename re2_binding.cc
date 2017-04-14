#include "re2/re2/re2.h"
#include <emscripten/bind.h>

using namespace emscripten;
using std::string;

bool validate(const string& str) {
  RE2 re(str, RE2::Quiet);
  return re.ok();
}

EMSCRIPTEN_BINDINGS(_re2_) {
  function("_validate", &validate);
  // enum_<RE2::Options>("Options")
  // .value("DefaultOptions", RE2::DefaultOptions)
  // .value("Latin1", RE2::Latin1)
  // .value("POSIX", RE2::POSIX)
  // .value("Quiet", RE2::Quiet)
  // ;

  // class_<RE2>("RE2")
  // .constructor<const string&, const RE2::Options&>()
  // .function("ok", &RE2::ok)
  // .function("pattern", &RE2::pattern)
  // .function("error", &RE2::error)
  // ;
}