/*global brackets, define, require, exports, module*/

define(function (require, exports, module) {
  "use strict";

  var LanguageManager = brackets.getModule("language/LanguageManager"),
    CodeMirror = brackets.getModule("thirdparty/CodeMirror2/lib/codemirror"),
    gapBuiltin = JSON.parse(require("text!src/builtin.json")),
    builtin = createFunctionsRegularExpression(gapBuiltin.functions),
    keywords = createKeywordsRegularExpression(gapBuiltin.keywords),
    all = /(?:.)/,
    comment = /(?:#.*$)/,
    blockLiterals = /(?:""")/,
    literals = /(?:")/,
    numbers = /(?:\d*\.?\d+(?![\w@\\]))/,
    variables = /(?:\\[(),.]?|[\w@]+)/,
    properties = /(?:\+|-|\*|\/|\^|~|!\.|=|<>|<|<=|>|>=|!\[|:=|\.|\.\.|->|,|;|!{|\[|]|{|}|\(|\)|:)/,
    indentTokens = /(?:\bfunction\b|\bif\b|\brepeat\b|\bwhile\b)/,
    dedentTokens = /(?:\bend;?\b|\bod;?\b|\bfi;?\b)/,
    partiallyDedentTokens = /(?:\belse?\b|\belif\b)/;

  function createFunctionsRegularExpression(words) {
    return new RegExp(words.join("(?!\\\\[(),.]?|[\\w@]+)|") + "(?!\\\\[(),.]?|[\\w@]+)", "m");
  }

  function createKeywordsRegularExpression(words) {
    return new RegExp("\\b" + words.join("\\b|\\b") + "\\b", "m");
  }

  CodeMirror.defineSimpleMode("gap", {
    start: [
      {regex: indentTokens, token: "keyword", indent: true},
      {regex: dedentTokens, token: "keyword", dedent: true},
      {regex: partiallyDedentTokens, token: "keyword", dedent: true, indent: true},
      {regex: comment, token: "comment"},
      {regex: blockLiterals, token: "string", next: "string2"},
      {regex: literals, token: "string", next: "string"},
      {regex: builtin, token: "builtin"},
      {regex: properties, token: "property"},
      {regex: numbers, token: "number"},
      {regex: keywords, token: "keyword"},
      {regex: variables, token: "variable"},
      {regex: all, token: null}
    ],
    string: [
      {regex: /(?:[^\\""]|\\.)*?"/, token: "string", next: "start"},
      {regex: /.*/, token: "string"}
    ],
    string2: [
      {regex: /(?:[^\\"]|\\.)*?"""/, token: "string", next: "start"},
      {regex: /.*/, token: "string"}
    ],
    meta: {lineComment: "#", electricInput: all, dontIndentStates: ["comment"]}
  });

  CodeMirror.defineMIME("text/x-gap", "gap");

  LanguageManager.defineLanguage("gap", {
    name: "GAP",
    mode: "gap",
    fileExtensions: ["g", "gi", "gd"],
    lineComment: ["#"]
  });

});
