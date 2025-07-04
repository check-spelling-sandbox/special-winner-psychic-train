
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

/**
 * JavaScript for navigation in multi-page editions of Neo4j documentation.
 */

function isElementInViewport (el) {
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}

$(document).ready(function() {
    var $title = $(
            'h1,h2,h3,h4'
            ).first();
    var $navtitle = $('.nav-title');
    var visible = isElementInViewport($title);
    if (visible) {
        $navtitle.hide();
    }
    $navtitle.removeClass('hidden');

    function showHide(nowVisible) {
        if ($(window).width() >= 768 && visible !== nowVisible) {
            $navtitle.fadeToggle();
            visible = !visible;
        }
    }
    var timeoutId = null;
    addEventListener("scroll", function() {
        if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(showHide, 200, isElementInViewport($title));
    }, true);

    setNavIconColor();
});

function setNavIconColor() {
    var color = null;
    $('.nav-previous > a, .nav-next > a').hover(function (){
        $me = $(this);
        $me.children('span.fa').css('border-color', $me.css('color'));
    }, function(){
        $(this).children('span.fa').css('border-color', "");
    });
}

// Highlight the current chapter/section in the TOC
function highlightToc() {
    var toc = document.querySelector('nav.toc > ul.toc');
    var allAnchors = toc.getElementsByTagName('a');
    var thisAnchor;
    var urlDissimilarity = 1000;
    for (i=0; i < allAnchors.length; i++) {
        var candidate = allAnchors.item(i).href;
        var test = document.URL.replace(candidate);
        // console.log('candidate:', candidate, 'test:', test, 'urlDissimilarity:', test.length);
        if (test.length < urlDissimilarity && test !== document.URL) {
            urlDissimilarity = test.length;
            thisAnchor = allAnchors.item(i);
        }
    };

    // console.log("[XXX] RESULT:", thisAnchor, "dissimilarity:", urlDissimilarity);

    if (thisAnchor !== undefined) {
        thisAnchor.parentElement.classList.add('active-nested-section');
        var topLevel = thisAnchor;
        while (topLevel.parentElement !== toc) {
            // console.log("traversing up:", topLevel);
            topLevel = topLevel.parentElement;
        }
        if (thisAnchor !== topLevel) {
            // console.log("highlighting:", topLevel);
            topLevel.classList.add('active-toplevel-section');
        }
    }
}

// Highlight the active publication in the docs library header
function highlightLibraryHeader() {
    var thisName = window.docMeta.name
    var thisEntry;
    $('header > ul.documentation-library').children('li').children('a').each(
        function (key, value) {
            var href = $(this).attr('href');
            if (href.includes(thisName)) {
                $(this).css({
                    color: '#428bca',
                    backgroundColor: 'rgb(66, 139, 202, 0.05)',
                    borderBottom: '2px solid #428bca',
                    padding: '4px',
                    marginBottom: '-6px'
                });
            }
            // console.log('href:', href, 'thisUrl:', thisUrl, 'thisName:', thisName);
        }
    );
    enableTocToggle();
}

function enableTocToggle() {
    var state = {
        expanded: {
            cssClass: 'fa-minus-square-o',
            title: 'Collapse table of contents'
        },
        collapsed: {
            cssClass: 'fa-plus-square-o',
            title: 'Expand table of contents'
        },
    };
    var toc = $('nav.toc');
    var tocTitle = document.querySelector('div.toc-title');
    var tocToggler = document.createElement('i');
    tocToggler.classList.add('fa', state.collapsed.cssClass);
    tocToggler.setAttribute('title', state.collapsed.title);
    tocToggler.setAttribute('aria-hidden', 'true');
    tocTitle.appendChild(tocToggler);
    var isExpanded = toc.offsetParent !== null;
    tocToggler.addEventListener("click", function() {
        isExpanded = !isExpanded;
        if (isExpanded) {
            toc.slideUp();
            tocToggler.classList.replace(state.expanded.cssClass, state.collapsed.cssClass);
            tocToggler.setAttribute('title', state.collapsed.title);
        } else {
            toc.slideDown();
            tocToggler.classList.replace(state.collapsed.cssClass, state.expanded.cssClass);
            tocToggler.setAttribute('title', state.expanded.title);
        }
    });
}


}
/*
     FILE ARCHIVED ON 01:13:30 Apr 05, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:01:55 Jul 04, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.516
  exclusion.robots: 0.027
  exclusion.robots.policy: 0.017
  esindex: 0.009
  cdx.remote: 6.092
  LoadShardBlock: 63.555 (3)
  PetaboxLoader3.datanode: 85.149 (4)
  load_resource: 198.844
  PetaboxLoader3.resolve: 171.041
*/