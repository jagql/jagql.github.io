(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{171:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),a("p",[t._v("This is the main entry point for your API. The goal is to configure @jagql/framework and load all the resources.")]),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),a("p",[t._v("Handlers are like your controllers - they need to, at very least, provide the functionality described in the "),a("router-link",{attrs:{to:"./handlers.html"}},[t._v("handler documentation")]),t._v(". The following example covers how you implement "),a("a",{attrs:{href:"https://github.com/holidayextras/jsonapi-store-elasticsearch",target:"_blank",rel:"noopener noreferrer"}},[t._v("jsonapi-store-elasticsearch"),a("OutboundLink")],1),t._v(".")],1),t._v(" "),t._m(9)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"suggested-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#suggested-structure","aria-hidden":"true"}},[this._v("#")]),this._v(" Suggested Structure")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("code",[t._v("server.js")]),t._v(" is the main entry point.")]),t._v(" "),a("li",[t._v("Think of the "),a("code",[t._v("resources")]),t._v(" folder as your "),a("code",[t._v("routes")]),t._v(".")]),t._v(" "),a("li",[t._v("Think of the "),a("code",[t._v("handlers")]),t._v(" folder as your "),a("code",[t._v("controllers")]),t._v(".")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("├── handlers\n│   ├── articleHandler.js\n│   ├── commentHandler.js\n│   ├── peopleHandler.js\n│   ├── photoHandler.js\n│   └── tagHandler.js\n├── resources\n│   ├── articles.js\n│   ├── comments.js\n│   ├── people.js\n│   ├── photos.js\n│   └── tags.js\n└── server.js          \n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"example-server-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-server-js","aria-hidden":"true"}},[this._v("#")]),this._v(" Example server.js")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" jagql "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"@jagql/framework"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fs "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"fs"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" path "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"path"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\njagql"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setConfig")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// Put your config here!")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Load all the resources")]),t._v("\nfs"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("readdirSync")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("join")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"/resources"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("filter")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filename"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token operator"}},[t._v("^")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("z"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("\\"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js$"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("test")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filename"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("map")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filename"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("join")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"/resources/"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" filename"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("forEach")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("require"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\njagql"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("start")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"example-resource"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-resource","aria-hidden":"true"}},[this._v("#")]),this._v(" Example resource")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The idea is to stick to having one resource per file and stick to pure config. Each file should do nothing more than define a resource. Handlers should be referenced from the "),s("code",[this._v("../handlers")]),this._v(" folder, which enables us to easily abstract functionality by sharing features amongst handlers. Resource files are effectively defining your routing layer.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" photosHandler "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"../handlers/photosHandler.js"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\njagql"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("define")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  resource"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"photos"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  handlers"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" photosHandler"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  attributes"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" jagql"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Joi"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    url"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" jagql"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Joi"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("uri")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    height"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" jagql"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Joi"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("number")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("min")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("max")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("10000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("precision")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    width"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" jagql"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Joi"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("number")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("min")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("max")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("10000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("precision")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"example-handler"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-handler","aria-hidden":"true"}},[this._v("#")]),this._v(" Example handler")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" EsHandler "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"jsonapi-store-elasticsearch"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// You might want to pull this out further to share it")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// amongst other handlers")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" specificEsCluster "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("EsHandler")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  host"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"localhost:9200"')]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" specificEsCluster"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// // If you want to intercept calls to extend existing behaviour:")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// var baseCreate = specificEsCluster.create;")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// specificEsCluster.create = function(request, newResource, callback) {")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//   // tweak something?")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//   baseCreate.call(specificEsCluster, request, newResource, function(err, result) {")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//     // tweak something else?")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//     return callback(err, result);")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//   });")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// };")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// // If you want to partially override behaviour to")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// // provide a more efficient solution:")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// efficientHandler.search = function(request, callback) {")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//   // do your own thing, invoke the callback when done")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// };")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="suggested_structure.md";s.default=e.exports}}]);