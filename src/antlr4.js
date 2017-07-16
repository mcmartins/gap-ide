/*global $, brackets, define, require, exports, module*/

(function () {

  "use strict";

  var GAPLint = require("gap-lint").GAPLint;

  function validate(text, callback) {
    console.log(GAPLint.validate(text).getErrors());
    return callback(false, GAPLint.validate(text).getErrors());
  }

  function init(domainManager) {
    if (!domainManager.hasDomain("GAPLint")) {
      domainManager.registerDomain("GAPLint", {major: 0, minor: 1});
    }

    domainManager.registerCommand(
      "GAPLint",
      "validate",
      validate,
      true,
      "Runs gap linter",
      ["text"],
      [{
        name: "result",
        type: "string",
        description: "The result of the execution"
      }]
    );
  }

  exports.init = init;
}());