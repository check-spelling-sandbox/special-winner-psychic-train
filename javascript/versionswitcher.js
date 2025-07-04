
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

jQuery( window ).load( function() {
  var location = window.location;
  // if ( location.hostname === 'neo4j.com' ) {
    // jQuery.getScript(window.docMeta.unversionedDocBaseUri + '/versions.js', function() {
      versionSwitcher( jQuery );
    // })
  // }
} );

/**
 * Utility to browse different versions of the documentation. Requires the versions.js file loaded, which lists the
 * available (relevant) versions of a particular publication.
 */
function versionSwitcher( $ )
{
  var MAX_STABLE_COUNT = 2;
  var DOCS_BASE_URL = window.docMeta.commonDocsBaseUri;
  var THIS_DOC_BASE_URI = window.docMeta.unversionedDocBaseUri;

  var currentVersion = window.docMeta.version;
  var currentPage = window.neo4jPageId;

  loadVersions();

  /**
   * Load an array of version into a div element and check if the current page actually exists in these versions.
   * Non-existing entries will be unlinked. Current version will be marked as such.
   */
  function loadVersions() {
    // var $navHeader = $( '#navheader' );
    var $navHeader = $( 'header' );
    var $additionalVersions = $( '<ul class="dropdown-menu dropdown-menu-right" role="menu" aria-labelledby="dropdownMenu1"/>' );
    $.each( window.docMeta.availableDocVersions, function( index, version ) {
      if ( version === currentVersion ) {
        return;
      }
      else {
        addVersion( version, $additionalVersions );
      }
    } );

    var $dropdown = $( '<div id="additional-versions"><div class="dropdown"><a class="dropdown-toggle"id="dropdownMenu1" data-toggle="dropdown">Versions <i class="fa fa-caret-down"></i></a></div></div>' );
    $dropdown.children().first().append( $additionalVersions );
    $navHeader.append( $dropdown );
  }

  function addVersion( version, $container ) {
    var $optionWrapper = $( '<li />' );
    var $newOption = $( '<a role="menuitem">' + version + '</a>' ).appendTo( $optionWrapper );
    var url = THIS_DOC_BASE_URI + version + '/' + currentPage;
    $container.append( $optionWrapper );
    checkUrlExistence( url, function() {
        $newOption.attr( 'href', url );
        $newOption.attr( 'title', 'See this page in version ' + version + '.' );
      }, function() {
        $newOption.attr( 'title', 'This page does not exist in version ' + version + '.' );
        $optionWrapper.addClass( 'disabled' );
      }
    );
  }

  /**
   * Check if a specific URL exists. The success and failure functions will be automatically called on finish.
   */
  function checkUrlExistence( url, success, failure ) {
    var settings = {
      'type' : 'HEAD',
      'async' : true,
      'url' : url
    };
    if ( success )
      settings.success = success;
    if ( failure )
      settings.error = failure;
    $.ajax( settings );
  }
}
// vim: set ts=2 sw=2:


}
/*
     FILE ARCHIVED ON 01:13:30 Apr 05, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:02:07 Jul 04, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
*/