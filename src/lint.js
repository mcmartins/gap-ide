/*global $, brackets, define, require, exports, module*/

define(function (require, exports, module) {
  "use strict";

  var ExtensionUtils = brackets.getModule("utils/ExtensionUtils"), 
    NodeDomain = brackets.getModule("utils/NodeDomain"), 
    GAPLint = new NodeDomain("GAPLint", ExtensionUtils.getModulePath(module, "antlr4")), 
    CodeInspection = brackets.getModule("language/CodeInspection");

  function scanFileAsync(fullText, fullPath) {
    var deferred = new $.Deferred();

    GAPLint.exec("validate", fullText)
      .fail(function (err) {
        return deferred.reject(err);
      })
      .done(function (errors) {
        var results = [];
        for (var i = 0, len = errors.length; i < len; i += 1) {
          var error = errors[i];
          var severity = (error.type === "warning") ? CodeInspection.Type.WARNING : CodeInspection.Type.ERROR;

          results.push({
            pos: {
              line: error.line,
              ch: error.column
            },
            message: error.message,
            type: severity
          });
        }

        return deferred.resolve({errors: results});
      });

    return deferred.promise();
  }

  CodeInspection.register("gap", {
    name: "GAP Lint",
    scanFileAsync: scanFileAsync
  });

});
