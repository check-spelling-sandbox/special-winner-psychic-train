
var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE
// Modified by the Neo4j team.

"use strict";

CodeMirror.colorize = (function() {

  var isBlock = /^(p|li|div|h\\d|pre|blockquote|td)$/;

  function textContent(node, out) {
    if (node.nodeType == 3) return out.push(node.nodeValue);
    for (var ch = node.firstChild; ch; ch = ch.nextSibling) {
      textContent(ch, out);
      if (isBlock.test(node.nodeType)) out.push("\n");
    }
  }

  return function() {
    var collection = document.body.getElementsByTagName("code");

    for (var i = 0; i < collection.length; ++i) {
      var theme = " cm-s-default";
      var node = collection[i];
      var mode = node.getAttribute("data-lang");
      if (!mode) continue;
      if (mode === "cypher") {
        theme = " cm-s-neo";
      } else if (mode === "cypher-noexec") {
        mode = "cypher";
        theme = " cm-s-neo";
      } else if (mode === "java") {
        mode = "text/x-java";
      } else if (mode === "csharp") {
        mode = "text/x-csharp";
      } else if (mode === "sql") {
        mode = "text/x-sql";
      } else if (mode  === "properties") {
        mode = "text/x-properties";
      } else if (mode === "json") {
        mode = "application/json";
      }

      var text = [];
      textContent(node, text);
      node.innerHTML = "";
      CodeMirror.runMode(text.join(""), mode, node);

      node.className += theme;
    }
  };
})();


}
/*
     FILE ARCHIVED ON 22:56:47 May 30, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:01:19 Jul 04, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
*/