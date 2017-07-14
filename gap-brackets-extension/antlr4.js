(function () {

    "use strict";

    var GAPLint = require("dist/index").GapLint;

    function validate(text, callback) {
        console.log(GAPLint.validate(text).getErrors());
        return callback(false, GAPLint.validate(text).getErrors());
    }

    function init(domainManager) {
        if (!domainManager.hasDomain("GAPLinter")) {
            domainManager.registerDomain("GAPLinter", {major: 0, minor: 1});
        }

        domainManager.registerCommand(
            "GAPLinter",
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