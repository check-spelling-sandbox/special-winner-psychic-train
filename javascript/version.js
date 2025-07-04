
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

window.docMeta = (function () {
  var version = '3.4';
  var name = 'operations-manual';
  var href = window.location.href;
  return {
    name: name,
    version: version,
    availableDocVersions: ["3.4", "3.5", "4.0"],
    thisPubBaseUri: href.substring(0, href.indexOf(name) + name.length) + '/' + version,
    unversionedDocBaseUri: href.substring(0, href.indexOf(name) + name.length) + '/',
    commonDocsBaseUri: href.substring(0, href.indexOf(name) - 1)
  }
})();

(function () {
  var baseUri = window.docMeta.unversionedDocBaseUri + window.location.pathname.split(window.docMeta.name + '/')[1].split('/')[0] + '/';
  var docPath = window.location.href.replace(baseUri, '');
  window.neo4jPageId = docPath;
})();
// vim: set sw=2 ts=2:


}
/*
     FILE ARCHIVED ON 01:13:30 Apr 05, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:02:19 Jul 04, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
*/