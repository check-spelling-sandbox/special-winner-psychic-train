
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

function tabTheSource($content) {
    var storedLanguage = getCodeExampleLanguage();
    var LANGUAGES = {
        'dotnet': 'C#',
        'java': 'Java',
        'javascript': 'JavaScript',
        'python': 'Python'
    };
    var $UL = $('<ul class="nav nav-tabs" role="tablist"/>');
    var $LI = $('<li role="presentation"/>');
    var $A = $('<a role="tab" data-toggle="tab" style="text-decoration:none;"/>');
    var $WRAPPER = $('<div class="tab-content content"/>');
    var snippets = [];
    var languageEventElements = {};

    var focusSelectedExample = function(e) {
        var target = $(e.target);
        var beforeTop = target.offset().top - $(window).scrollTop();
        setTimeout(function(){
            var newTop = target.offset().top - beforeTop;
            $('html,body').scrollTop(newTop);
        }, 1);
    }

    var selectTab = function (e) {
        var language = $(e.target).data('lang');
        var $elements = languageEventElements[language];
        for (var j = 0; j < $elements.length; j++) {
            $elements[j].tab('show');
        }
        if (storageAvailable('sessionStorage')) {
            sessionStorage.setItem('code_example_language', language);
        }
    }

    $('div.tabbed-example', $content).each(function () {
        var $exampleBlock = $(this);
        var title = $exampleBlock.children('div.example-title', this).first().text();
        var languages = [];
        var $languageBlocks = {};
        $(this).children('div.tabbed-example-contents').children('div.listingblock,div.informalexample[class*="include-with"]').each(function () {
            var $this = $(this);
            var language = undefined;
            if ($this.hasClass('listingblock')) {
                language = $('code', this).data('lang');
            } else {
                for (var key in LANGUAGES) {
                    if ($this.hasClass('include-with-' + key)) {
                        language = key;
                        break;
                    }
                }
            }
            languages.push(language);
            $languageBlocks[language] = $(this);
        });
        if (languages.length > 1) {
            snippets.push({
                '$exampleBlock': $exampleBlock,
                'languages': languages,
                '$languageBlocks': $languageBlocks
            });
        }
    });

    var idNum = 0;
    for (var ix = 0; ix < snippets.length; ix++) {
        var snippet = snippets[ix];
        var languages = snippet.languages;
        languages.sort();
        var $languageBlocks = snippet.$languageBlocks;
        var $exampleBlock = snippet.$exampleBlock;
        var idBase = 'tabbed-example-' + idNum++;
        var $wrapper = $WRAPPER.clone();
        var $ul = $UL.clone();

        for (var i = 0; i < languages.length; i++) {
            var language = languages[i];
            var $content = $($languageBlocks[language]);
            var id;
            if ($content.attr('id')) {
                id = $content.attr('id');
            } else {
                id = idBase + '-' + language;
                $content.attr('id', id);
            }
            $content.addClass('tab-pane').css('position', 'relative');
            var $li = $LI.clone();
            var $a = $A.clone();

            $a.attr('href', '#' + id).text(LANGUAGES[language]).data('lang', language).on('shown.bs.tab', selectTab).on('click', focusSelectedExample);

            if (language in languageEventElements) {
                languageEventElements[language].push($a);
            } else {
                languageEventElements[language] = [$a];
            }
            $wrapper.append($content);

            if (storedLanguage) {
                if (language === storedLanguage) {
                    $li.addClass('active');
                    $content.addClass('active');
                }
            } else if (i === 0) {
                $li.addClass('active');
                $content.addClass('active');
            }

            $li.append($a);
            $ul.append($li);
        }
        $exampleBlock.children('div.example-title', this).first().after($ul);
        $exampleBlock.append($wrapper);
    }
}

function storageAvailable(type) {
    try {
        var storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return false;
    }
}

function getCodeExampleLanguage() {
    return storageAvailable('sessionStorage') ? sessionStorage.getItem('code_example_language') || false : false;
}


}
/*
     FILE ARCHIVED ON 01:13:30 Apr 05, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:01:40 Jul 04, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.707
  exclusion.robots: 0.037
  exclusion.robots.policy: 0.022
  esindex: 0.013
  cdx.remote: 16.673
  LoadShardBlock: 209.817 (3)
  PetaboxLoader3.datanode: 229.442 (4)
  load_resource: 37.257
*/