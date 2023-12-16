/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

/* jshint esversion:11 */

'use strict';

// ruleset: swe-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"body.modal-open\",\"action\":[\"remove-class\",\"modal-open\"]}"],["{\"selector\":\".sjofa-top-takeover, .sjofa-artikel-pano\",\"tasks\":[[\"upward\",\"section\"]]}"],["{\"selector\":\".slide-entry-excerpt\",\"tasks\":[[\"has-text\",\"/annons:/i\"],[\"upward\",\".avia-content-slider\"]]}"],["{\"selector\":\".label\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\".highlighted-article-block\"]]}"],["{\"selector\":\".slick-slide\",\"tasks\":[[\"has-text\",\"/casino/i\"]]}"],["{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"spath\",\" + .textwidget\"]]}","{\"selector\":\"body\",\"action\":[\"remove-class\",\"unselectable\"]}"],["{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Spel och dobbel\"],[\"spath\",\" ~ p\"]]}"],["{\"selector\":\".smallNewsCategory\",\"tasks\":[[\"has-text\",\"/sponsr/i\"],[\"upward\",\".smallNewsLink\"]]}","{\"selector\":\"img[src*=\\\"/images/annonser/\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"div[class^=\\\"u-text\\\"], h2\",\"tasks\":[[\"has-text\",\"/^Reklam$/\"],[\"upward\",\"section\"]]}"],["{\"selector\":\"body\",\"action\":[\"remove-class\",\"modal-open\"]}"],["{\"selector\":\"a.js_commercial-text--link-text\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"upward\",\".jwplayer_video-videoArea\"]]}","{\"selector\":\"div.wings-gray-200\",\"tasks\":[[\"has-text\",\"Annons\"]]}","{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"ANNONS:\"]]}"],["{\"selector\":\"article.grid\",\"tasks\":[[\"has-text\",\"/annonssamarbete/i\"]]}"],["{\"selector\":\".badge\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\"li\"]]}"],["{\"selector\":\".container\",\"tasks\":[[\"has-text\",\"Senaste nyheterna om spelbolag:\"]]}","{\"selector\":\"div.section-body-plus\",\"tasks\":[[\"has-text\",\"/bonus|casino/i\"]]}"],["{\"selector\":\"#main-wrapper + div, #redux-page-container > div\",\"tasks\":[[\"has-text\",\"/använder cookies/i\"]]}","{\"selector\":\"div[role=\\\"presentation\\\"] + div\",\"tasks\":[[\"has-text\",\"/förhandsvisning/i\"]]}"],["{\"selector\":\".label-sponsor\",\"tasks\":[[\"upward\",\".panel\"]]}"],["{\"selector\":\".bbSize\",\"tasks\":[[\"has-text\",\"Sponsormeddelande\"],[\"upward\",\".bbRelatedBox\"]]}","{\"selector\":\"div[class^=\\\"card-info\\\"]\",\"tasks\":[[\"has-text\",\"/spons/i\"],[\"upward\",\".card\"]]}"],["{\"selector\":\"a[target]\",\"tasks\":[[\"upward\",\".frontlinks tr\"]]}"],["{\"selector\":\".sponsored-notification\",\"tasks\":[[\"upward\",\"[id^=\\\"post-\\\"]\"]]}"],["{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/^i samarbete med/i\"],[\"upward\",2]]}"],["{\"selector\":\"div[class*=\\\"section-preview\\\"]\",\"tasks\":[[\"has-text\",\"/betalt samarbete/i\"],[\"upward\",4]]}"],["{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"/poker|casino|kasino|betting/i\"],[\"upward\",\"li\"]]}"],["{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/casino/i\"],[\"upward\",\"li\"]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"Annons\"],[\"upward\",\".n2-ss-slide\"]]}"],["{\"selector\":\".vc_row_inner\",\"tasks\":[[\"has-text\",\"casino\"]]}"],["{\"selector\":\".nyhetsochreseartiklar .views-row\",\"tasks\":[[\"has-text\",\"/casino/i\"]]}"],["{\"selector\":\".et_pb_module\",\"tasks\":[[\"matches-css\",{\"name\":\"content\",\"pseudo\":\"before\",\"value\":\"^\\\"Annons:\\\"$\"}]]}"],["{\"selector\":\"#root > div:first-child\",\"tasks\":[[\"matches-css\",{\"name\":\"position\",\"value\":\"^fixed$\"}]]}","{\"selector\":\"[id*=\\\"_panorama\\\"], [id*=\\\"_mobil\\\"]\",\"tasks\":[[\"upward\",\"div[display=\\\"block\\\"]\"]]}","{\"selector\":\"[id*=\\\"_panorama\\\"], [id*=\\\"_outsider\\\"], [id*=\\\"_insider\\\"], [id*=\\\"_mobil\\\"]\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"/^Annons/\"],[\"upward\",\"a\"]]}","{\"selector\":\"div[class*=\\\"AdWrapper\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".holidAds\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/^Annons$/\"],[\"upward\",1],[\"spath\",\" + .textwidget\"]]}"],["{\"selector\":\"#tv-schedule section\",\"tasks\":[[\"has-text\",\"ANNONS\"]]}","{\"selector\":\"body\",\"action\":[\"remove-class\",\"takeover-loading\"]}"],["{\"selector\":\".article-tag-header\",\"tasks\":[[\"has-text\",\"/Annons/i\"],[\"upward\",\"article\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/^/$/\"],[\"spath\",\" p\"],[\"has-text\",\"Artikeln innehåller annonslänkar\"],[\"upward\",\"a\"]]}","{\"selector\":\"#main > div > div > div\",\"tasks\":[[\"has\",{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"/^annons/i\"]]}]]}","{\"selector\":\"[data-ad-subtype]\",\"tasks\":[[\"upward\",1],[\"matches-css\",{\"name\":\"min-height\",\"value\":\"[0-9]+\"}]]}","{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Kommersiell text, innehåller annonslänkar\"]]}","{\"selector\":\"a[href^=\\\"https://kampanj.\\\"]\",\"tasks\":[[\"upward\",1],[\"spath\",\":not(section):not(div[class^=\\\"article-wrapper\\\"])\"]]}","{\"selector\":\"article[class^=\\\"article-wrapper\\\"] ~ div\",\"tasks\":[[\"has-text\",\"ANNONS\"]]}","{\"selector\":\"aside > div\",\"tasks\":[[\"has\",{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"/^annons/i\"]]}]]}","{\"selector\":\"main > section > div:first-child\",\"tasks\":[[\"matches-css\",{\"name\":\"box-shadow\",\"value\":\"^rgba\\\\(0, 0, 0, 0\\\\.2\\\\) 0px 0px 24px 0px$\"}]]}","{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"/^PRESENTERAS AV$/\"],[\"upward\",1]]}","{\"selector\":\"section > div\",\"tasks\":[[\"has\",{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"/^annons/i\"]]}]]}","{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/^annons/i\"],[\"upward\",\"a\"]]}","{\"selector\":\"strong\",\"tasks\":[[\"has-text\",\"/ANNONS/i\"],[\"upward\",\"p\"]]}"],["{\"selector\":\"section.elementor-section\",\"tasks\":[[\"has-text\",\"Huvudsponsorer & partners\"]]}"],["{\"selector\":\"article\",\"tasks\":[[\"matches-css\",{\"name\":\"content\",\"pseudo\":\"after\",\"value\":[\"Annonssamarbete\",\"i\"]}]]}","{\"selector\":\"div[class^=\\\"css-\\\"]\",\"tasks\":[[\"matches-css\",{\"name\":\"content\",\"value\":[\"Annons\",\"i\"]}],[\"upward\",\"article\"]]}","{\"selector\":\"div[class^=\\\"css-\\\"]\",\"tasks\":[[\"matches-css\",{\"name\":\"min-height\",\"value\":\"420px|400px|320px|312px\"}]]}"],["{\"selector\":\".block-title\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"Reklamsamarbete\"],[\"upward\",\".td_block_wrap\"],[\"spath\",\" + rs-module-wrap\"]]}","{\"selector\":\".block-title\",\"tasks\":[[\"has-text\",\"Reklamsamarbete\"],[\"upward\",\".td_block_wrap\"]]}","{\"selector\":\".td-adspot-title-span\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\"a[href*=\\\"reklamsamarbete\\\"]\",\"tasks\":[[\"upward\",\".td_block_wrap\"]]}"],["{\"selector\":\".mvp-cd-cat\",\"tasks\":[[\"has-text\",\"/i samarbete med/i\"],[\"upward\",\".mvp-blog-story-wrap\"]]}"],["{\"selector\":\".strossle-widget\",\"tasks\":[[\"upward\",\"div[style^=\\\"min-height\\\"]\"]]}"],["{\"selector\":\"html\",\"action\":[\"remove-class\",\"smartbanner-show\"]}"],["{\"selector\":\".unslider-wrap.unslider-carousel > li\",\"tasks\":[[\"has\",{\"selector\":\".preamble-category\",\"tasks\":[[\"has-text\",\"/^annons/i\"]]}]]}"],["{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"Prenumerera!\"],[\"upward\",\"div:not([id]):not([class])\"]]}"],["{\"selector\":\"a\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"/betting|utan registrering|casino/i\"],[\"upward\",\"article, .slide-item\"]]}"],["{\"selector\":\".elementor-heading-title\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\"section.elementor-section\"],[\"spath\",\" + section\"]]}","{\"selector\":\".elementor-heading-title\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\"section.elementor-section\"]]}"],["{\"selector\":\".text-sm\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\".border-b\"]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"ANNONS\"],[\"upward\",\".et_pb_text\"]]}"],["{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Annons\"],[\"upward\",2]]}"],["{\"selector\":\".label\",\"tasks\":[[\"has-text\",\"/sponsrad/i\"],[\"upward\",\"a\"]]}"],["{\"selector\":\".post-item__tag\",\"tasks\":[[\"has-text\",\"/spons/i\"],[\"upward\",\"li.post-item\"]]}"],["{\"selector\":\".label\",\"tasks\":[[\"has-text\",\"/sponsra/i\"],[\"upward\",\".post-teaser\"]]}"],["{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"/spons/i\"],[\"upward\",\".widget_text\"]]}"],["{\"selector\":\"article\",\"action\":[\"remove-class\",\"closed\"]}"],["{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"/sponsrad/i\"],[\"upward\",\".list\"]]}"],["{\"selector\":\".colorized\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\"a\"]]}","{\"selector\":\".elevated-button\",\"tasks\":[[\"has-text\",\"/^Cookie/\"],[\"upward\",\".container\"]]}","{\"selector\":\".label\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",1]]}","{\"selector\":\".sponsored-chip\",\"tasks\":[[\"matches-css\",{\"name\":\"display\",\"value\":\"^block$\"}],[\"upward\",\"a\"]]}","{\"selector\":\"img[src*=\\\"/borskollen_newsletter\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"body > .elementor > .elementor-section:first-child\",\"tasks\":[[\"has-text\",\"Annons\"]]}"],["{\"selector\":\"a.click-track\",\"action\":[\"remove-class\",\"click-track\"]}","{\"selector\":\"a.click-track-attachment-preview\",\"action\":[\"remove-class\",\"click-track-attachment-preview\"]}"],["{\"selector\":\"aside .textwidget\",\"tasks\":[[\"has-text\",\"/sponsr|samarbetspartners/i\"]]}"],["{\"selector\":\".card-partner\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".post_sponsrad_label\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"ANNONS\"],[\"upward\",\"article:not([id])\"]]}"],["{\"selector\":\"#sponsrade-lankar\",\"tasks\":[[\"upward\",\"aside\"],[\"spath\",\" + aside.widget_block\"]]}"],["{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"/samarbete/i\"],[\"upward\",\".post-wrap\"]]}"],["{\"selector\":\"strong\",\"tasks\":[[\"has-text\",\"/^senaste nytt från våra partners/i\"],[\"upward\",\".card--muted\"]]}"],["{\"selector\":\"small\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\".elementor-column\"]]}"],["{\"selector\":\".text-text-secondary, span.font-bold\",\"tasks\":[[\"has-text\",\"ANNONS\"],[\"upward\",2]]}","{\"selector\":\"a[href*=\\\"/ps-partner\\\"]\",\"tasks\":[[\"upward\",\"section.cat-post-widget\"]]}"],["{\"selector\":\".list-article__item-inscription\",\"tasks\":[[\"has-text\",\"/sponsrat innehåll/i\"],[\"upward\",\".list-article__item\"]]}"],["{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"/^annons/i\"]]}"],["{\"selector\":\"div[data-advadstrackid]\",\"tasks\":[[\"upward\",\".x-bar-footer\"]]}","{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"Advertorial\"],[\"upward\",1]]}"],["{\"selector\":\"div[data-losjs^=\\\"borka\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"video\",\"action\":[\"remove-attr\",\"data-auto-play\"]}"],["{\"selector\":\".rightdiv p\",\"tasks\":[[\"has-text\",\"/casino|kasino|lån|betting|odds|lotto/i\"]]}"],["{\"selector\":\"li\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\".content-label\",\"tasks\":[[\"has-text\",\"/annons/i\"]]}]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"/hämtar annons/i\"],[\"upward\",\"div.items-center\"]]}"],["{\"selector\":\".label-sponsored\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"upward\",\"#latest-slider a\"]]}","{\"selector\":\"strong\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"/samarbete|sponsrat/i\"],[\"upward\",\"li\"]]}"],["{\"selector\":\".aside-list--heading\",\"tasks\":[[\"has-text\",\"/^sponsra/i\"],[\"upward\",\".aside-list\"]]}","{\"selector\":\".code-block\",\"tasks\":[[\"has-text\",\"/annons/i\"]]}"],["{\"selector\":\"section.c-native_banner\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"em\",\"tasks\":[[\"has-text\",\"Annonser\"],[\"upward\",2]]}"],["{\"selector\":\".adaptive\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"article.elementor-grid-item\",\"tasks\":[[\"has-text\",\"reklamsamarbete\"]]}"],["{\"selector\":\"a\",\"action\":[\"remove-attr\",\"data-t-label\"]}","{\"selector\":\"a\",\"action\":[\"remove-attr\",\"data-t-type\"]}","{\"selector\":\"strong\",\"tasks\":[[\"has-text\",\"/^annons:/i\"],[\"upward\",\"p\"]]}"],["{\"selector\":\".video-player\",\"action\":[\"remove-attr\",\"data-ad-config\"]}"],["{\"selector\":\"article\",\"tasks\":[[\"has-text\",\"/annons:/i\"]]}"],["{\"selector\":\"f-internallinks-new\",\"tasks\":[[\"has-text\",\"Annons\"]]}"],["{\"selector\":\"a[target=\\\"_blank\\\"]:not([href^=\\\"/\\\"], [href*=\\\"filatelisten.se\\\"])\",\"tasks\":[[\"upward\",\"section\"]]}"],["{\"selector\":\".news\",\"tasks\":[[\"has-text\",\"casino\"]]}","{\"selector\":\"em\",\"tasks\":[[\"has-text\",\"/sponsrad/i\"],[\"upward\",\".row.news\"]]}"],["{\"selector\":\".tdm-descr\",\"tasks\":[[\"has-text\",\"/casino/i\"]]}"],["{\"selector\":\".feat-cat\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\"a\"]]}"],["{\"selector\":\".fisher-pinned-post-title.sponsored\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"/lån|casino|kasino/i\"],[\"upward\",\"p\"]]}"],["{\"selector\":\".featurette, .vicky-post-whitebox, .vicky-fancybar-inner\",\"tasks\":[[\"has-text\",\"/sponsrad/i\"]]}","{\"selector\":\".vicky-category-label\",\"tasks\":[[\"has-text\",\"/sponsrad/i\"],[\"upward\",\".vicky-heading-container\"]]}"],["{\"selector\":\".vicky-category-label\",\"tasks\":[[\"has-text\",\"/spons/i\"],[\"upward\",\".carousel-caption\"]]}","{\"selector\":\".vicky-video-infobox-label\",\"tasks\":[[\"has-text\",\"/spons/i\"],[\"upward\",\".featurette\"]]}","{\"selector\":\"div[class*=\\\"vicky-whitebox\\\"]\",\"tasks\":[[\"has-text\",\"/spons/i\"],[\"upward\",\"a\"]]}"],["{\"selector\":\".ticker-title\",\"tasks\":[[\"has-text\",\"/partner/i\"],[\"spath\",\" + .mh-section\"]]}","{\"selector\":\".ticker-title\",\"tasks\":[[\"has-text\",\"/partner/i\"]]}"],["{\"selector\":\".c-announcement\",\"tasks\":[[\"has-text\",\"/annons/i\"]]}"],["{\"selector\":\".notice__tag_sponsored, .notice__tag\",\"tasks\":[[\"has-text\",\"/sponsrat/i\"],[\"upward\",1]]}"],["{\"selector\":\"article\",\"tasks\":[[\"has-text\",\"/är en annons/i\"]]}"],["{\"selector\":\".category\",\"tasks\":[[\"has-text\",\"/spons/i\"],[\"upward\",\"article\"]]}"],["{\"selector\":\".elementor-heading-title\",\"tasks\":[[\"has-text\",\"/annons från/i\"],[\"upward\",4]]}"],["{\"selector\":\".mark\",\"tasks\":[[\"has-text\",\"/spons/i\"],[\"upward\",\".post\"]]}"],["{\"selector\":\".wp-block-column > h2\",\"tasks\":[[\"has-text\",\"/annonser/i\"],[\"spath\",\" ~ p\"]]}","{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/annonserat innehåll/i\"],[\"upward\",\".td_block_wrap\"]]}"],["{\"selector\":\".fp-carousel .fpci-kicker\",\"tasks\":[[\"has-text\",\"/^sponsr/i\"],[\"upward\",\".fpc-item\"]]}"],["{\"selector\":\"h4\",\"tasks\":[[\"has-text\",\"/sponsrade länkar/i\"],[\"upward\",\".link-list\"]]}"],["{\"selector\":\"#grtvbelt_Sponsored\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\".ad_interscroller\",\"tasks\":[[\"upward\",\".wrapper\"]]}","{\"selector\":\".colHomePlayer:has([data-slotads=\\\"videoad\\\"])\",\"action\":[\"remove\",\"\"]}","{\"selector\":\"video\",\"action\":[\"remove-attr\",\"data-autoplay\"]}"],["{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"Annons\"],[\"upward\",1]]}"],["{\"selector\":\"[id^=\\\"adPlacement\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"div.g:has(a[href*=\\\".com.se/\\\"])\",\"tasks\":[[\"has-text\",\"/återförsäljare|rea|garanti|lågt pris|nöjd|priser|shop|bra pris|kläder|skor|outlet|frakt|butik|betala/i\"]]}","{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Annons\"],[\"upward\",\"#topstuff\"]]}"],["{\"selector\":\"a\",\"action\":[\"remove-attr\",\"data-jsarwt\"]}","{\"selector\":\"a[href][onmousedown]\",\"action\":[\"remove-attr\",\"onmousedown\"]}","{\"selector\":\"a[href][ping]\",\"action\":[\"remove-attr\",\"ping\"]}"],["{\"selector\":\".cpt-collab-text-ct1\",\"tasks\":[[\"has-text\",\"/samarbete|annons/i\"],[\"upward\",\".cpt-alm-main\"]]}"],["{\"selector\":\"p[style^=\\\"text-transform\\\"]\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"spath\",\" + .wp-block-kadence-posts\"]]}","{\"selector\":\"p[style^=\\\"text-transform\\\"]\",\"tasks\":[[\"has-text\",\"/annons/i\"]]}"],["{\"selector\":\"small, span\",\"tasks\":[[\"has-text\",\"/sponsrad/i\"],[\"upward\",\"article, li, a\"]]}","{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/annons från/i\"],[\"upward\",\"div[class^=\\\"ArticleContent_articlePage\\\"]\"]]}"],["{\"selector\":\".toolboxheader\",\"tasks\":[[\"has-text\",\"/aktuella samarbeten/i\"],[\"spath\",\" ~ a.more\"]]}"],["{\"selector\":\"div[id^=\\\"hitta_mobile_\\\"].placeholder\",\"tasks\":[[\"upward\",\"div[class^=\\\"height\\\"], div[class^=\\\"style_breakout\\\"]\"]]}"],["{\"selector\":\"small\",\"tasks\":[[\"has-text\",\"/annons/i\"]]}"],["{\"selector\":\"strong\",\"tasks\":[[\"has-text\",\"/samarbete/i\"],[\"upward\",\"li.item\"]]}"],["{\"selector\":\"a[href*=\\\"casino\\\"], a[href*=\\\"speltips\\\"]\",\"tasks\":[[\"upward\",\".widget\"]]}","{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"Speltips\"],[\"upward\",\".widget\"]]}"],["{\"selector\":\".code-block-label\",\"tasks\":[[\"has-text\",\"Annons:\"]]}","{\"selector\":\"strong\",\"tasks\":[[\"has-text\",\"Annons:\"],[\"upward\",\".code-block\"]]}"],["{\"selector\":\"body\",\"action\":[\"remove-class\",\"advert-take-over-active\"]}"],["{\"selector\":\".article\",\"tasks\":[[\"has-text\",\"/sponsrad artikel/i\"]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"Annons:\"],[\"upward\",1]]}"],["{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\"aside\"]]}"],["{\"selector\":\"div[id^=\\\"ad-panorama\\\"]\",\"tasks\":[[\"upward\",\".elementor-section\"]]}"],["{\"selector\":\".elementor-heading-title\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\".elementor-column\"]]}"],["{\"selector\":\".sidebar-block\",\"tasks\":[[\"has-text\",\"/annons|sponsor/i\"]]}"],["{\"selector\":\"#storknapp\",\"tasks\":[[\"has-text\",\"/^till kampanj/i\"],[\"upward\",\"article\"]]}"],["{\"selector\":\"body\",\"action\":[\"remove-class\",\"mega-loading\"]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"/annonser:/i\"],[\"upward\",\".widget_block\"]]}"],["{\"selector\":\".cookieBarWrapper\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"[class*=\\\"carousel_sponsored\\\"]\",\"tasks\":[[\"upward\",\"[class*=\\\"carousel_item\\\"]\"]]}","{\"selector\":\"[class*=\\\"sponsorLabel\\\"]\",\"tasks\":[[\"upward\",\"[class*=\\\"mosaic_item_wrapper\\\"]\"]]}"],["{\"selector\":\".content > .wrap\",\"tasks\":[[\"has-text\",\"/affiliate-samarbete/i\"]]}"],["{\"selector\":\"iframe[allow]\",\"action\":[\"remove-attr\",\"allow\"]}"],["{\"selector\":\".postCard\",\"tasks\":[[\"has-text\",\"/bonusar|casino|betting|spelbranschen/i\"]]}"],["{\"selector\":\"a[href*=\\\"casino\\\"], a[href*=\\\"betting\\\"], a[href*=\\\"poker\\\"]\",\"tasks\":[[\"upward\",\".elementor-widget\"]]}","{\"selector\":\"article.feed-item\",\"tasks\":[[\"has-text\",\"/låna pengar|casino|betting/i\"]]}"],["{\"selector\":\".fusion-post-content-container\",\"tasks\":[[\"has-text\",\"/^annons/i\"],[\"upward\",\"article\"]]}"],["{\"selector\":\"div[data-variants*=\\\"article-panorama\\\"]\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"/^Annons$/\"],[\"upward\",1]]}","{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"/^kommersiellt innehåll/i\"],[\"upward\",\"article\"]]}","{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"/^kommersiellt innehåll|^annons$/i\"],[\"upward\",\"a\"]]}"],["{\"selector\":\"img[src$=\\\"a_top.png.webp\\\"], a[href*=\\\"casino\\\"]\",\"tasks\":[[\"upward\",\"section.elementor-section\"]]}"],["{\"selector\":\"a[href=\\\"https://loppi.se/promotion\\\"]\",\"tasks\":[[\"upward\",\".page__section\"]]}"],["{\"selector\":\"strong\",\"tasks\":[[\"has-text\",\"Detta är en annons\"],[\"upward\",\".inner\"]]}"],["{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/sponsr/i\"],[\"upward\",\"article\"]]}"],["{\"selector\":\".td-post-category\",\"tasks\":[[\"has-text\",\"/spons/i\"],[\"upward\",2]]}","{\"selector\":\".td-pulldown-size\",\"tasks\":[[\"has-text\",\"/spons/i\"],[\"upward\",3]]}"],["{\"selector\":\".widget_media_image\",\"tasks\":[[\"has-text\",\"/annons/i\"]]}"],["{\"selector\":\"div\",\"action\":[\"remove-class\",\"with-ads\"]}"],["{\"selector\":\"noscript\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"mdp-deblocker-js-disabled\"]]}","{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"body * :not\"]]}"],["{\"selector\":\".text-center, div[style^=\\\"text-align\\\"]\",\"tasks\":[[\"has-text\",\"ANNONS\"]]}","{\"selector\":\"a[onclick^=\\\"ANAL\\\"]\",\"action\":[\"remove-attr\",\"onclick\"]}"],["{\"selector\":\".advert\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"upward\",\".slick-item\"]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"/i samarbete med/i\"],[\"upward\",\".post\"]]}"],["{\"selector\":\"#cruncho_now_iframe\",\"action\":[\"remove\",\"\"]}","{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\".image-component-unprocessed\"]]}"],["{\"selector\":\".excerpt\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\"article\"]]}","{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\".sidebar-widget\"]]}"],["{\"selector\":\".inner_article\",\"tasks\":[[\"has-text\",\"/sponsrat|annons/i\"]]}","{\"selector\":\"strong\",\"tasks\":[[\"has-text\",\"ANNONS:\"]]}"],["{\"selector\":\".textwidget\",\"tasks\":[[\"has-text\",\"Annons\"]]}"],["{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"spath\",\" + .textwidget\"]]}"],["{\"selector\":\"#nativendo-mainfeed\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"span:not(.post-content)\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\".post\"]]}"],["{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/sponsrat/i\"],[\"upward\",\".td_block_wrap\"]]}"],["{\"selector\":\"article.post\",\"tasks\":[[\"has-text\",\"/annons från/i\"]]}"],["{\"selector\":\"article\",\"tasks\":[[\"has-text\",\"/sponsrat innehåll/i\"]]}","{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"/samarbetslänkar/i\"],[\"upward\",\".article-inner\"]]}"],["{\"selector\":\".adsbygoogle, a[href*=\\\"casino\\\"]\",\"tasks\":[[\"upward\",\".elementor-section\"]]}"],["{\"selector\":\"h5\",\"tasks\":[[\"has-text\",\"ANNONS:\"],[\"upward\",1]]}"],["{\"selector\":\".category_badge[href=\\\"/lana-pengar/\\\"]\",\"tasks\":[[\"upward\",\".col_item\"]]}","{\"selector\":\".text_sidebar_section\",\"tasks\":[[\"has-text\",\"casino\"]]}","{\"selector\":\"a[href*=\\\"casino\\\"], a[href*=\\\"spelansvar\\\"]\",\"tasks\":[[\"upward\",\".cat_item\"]]}"],["{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"/^annons/i\"],[\"upward\",\".section\"]]}"],["{\"selector\":\".item-list__item\",\"tasks\":[[\"has-text\",\"/annons från/i\"]]}"],["{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/^sponsrad$/i\"],[\"upward\",\"[data-cy=\\\"deal-carousel\\\"]\"]]}"],["{\"selector\":\"#RAD_D_station_top, #RAD_D_home_top, #RAD_D_home_inhouse, #RAD_D_search_top\",\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Annons\"],[\"upward\",\".widget_media_image\"]]}"],["{\"selector\":\"div[class=\\\"\\\"], .sticky\",\"tasks\":[[\"has-text\",\"/annons/i\"]]}","{\"selector\":\"script[src*=\\\"richmediastudio.com\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Samarbete:\"],[\"upward\",\".item.hentry, .owl-item, article\"]]}","{\"selector\":\"aside\",\"tasks\":[[\"has-text\",\"Annonser:\"]]}"],["{\"selector\":\".category-tag\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\".ArticleListItem\"]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"SPONSR\"],[\"upward\",\".elementor-widget-jet-listing-grid\"]]}"],["{\"selector\":\"a[target=\\\"_blank\\\"]\",\"tasks\":[[\"upward\",2]]}","{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"/^Annons$/\"],[\"spath\",\" + div\"]]}"],["{\"selector\":\"strong\",\"tasks\":[[\"has-text\",\"casino\"],[\"upward\",\"li.sidebar-widget\"]]}"],["{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"/annonser/i\"],[\"upward\",\".view-nya-lankar-front\"]]}"],["{\"selector\":\"a[href*=\\\"casino\\\"]\",\"tasks\":[[\"upward\",\".mh-posts-stacked-wrap\"]]}"],["{\"selector\":\"h4\",\"tasks\":[[\"has-text\",\"veckans produkt\"],[\"upward\",3]]}"],["{\"selector\":\"img[src*=\\\"/Biz.png\\\"]\",\"tasks\":[[\"upward\",\".elementor-widget-image\"],[\"spath\",\" ~ .elementor-widget-html\"]]}"],["{\"selector\":\".cd-card-bar\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\".cd-sidebar-item, .cd-news-card\"]]}"],["{\"selector\":\"a[target=\\\"_blank\\\"]\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"upward\",\"li.Notice\"]]}","{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/sponsr/i\"],[\"upward\",\".article\"]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"ANNONS\"]]}"],["{\"selector\":\".label\",\"tasks\":[[\"has-text\",\"/samarbete|annons|reklam|presenteras av/i\"],[\"upward\",\"a\"]]}","{\"selector\":\"[onclick^=\\\"ga(\\\"]\",\"action\":[\"remove-attr\",\"onclick\"]}"],["{\"selector\":\"center\",\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",1]]}"],["{\"selector\":\".pill\",\"tasks\":[[\"has-text\",\"/spons/i\"],[\"upward\",\".grid-item, .pinned, .articleFlow-item\"]]}"],["{\"selector\":\".carousel-item-link\",\"tasks\":[[\"has-text\",\"Annons:\"]]}"],["{\"selector\":\"h4\",\"tasks\":[[\"has-text\",\"/spons/i\"],[\"upward\",\".td-pb-row [class*=\\\"td-pb-span\\\"]\"]]}"],["{\"selector\":\".ra-widget-article-tag\",\"tasks\":[[\"has-text\",\"/partner/i\"],[\"upward\",\".ra-widget-panel\"]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"/i annonssamarbete med/i\"],[\"upward\",\".flex.overflow-hidden\"]]}"],["{\"selector\":\"body\",\"action\":[\"remove-class\",\"cli-barmodal-open\"]}"],["{\"selector\":\".kategori\",\"tasks\":[[\"has-text\",\"Annons\"],[\"upward\",\"section.widget_text\"]]}"],["{\"selector\":\"[class*=\\\"tot-content-preview-container\\\"]:has(a[href*=\\\"casino\\\"], a[href*=\\\"kasino\\\"], a[href*=\\\"betting\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"div\",\"tasks\":[[\"matches-css\",{\"name\":\"visibility\",\"value\":\"^hidden$\"}],[\"has-text\",\"ANNONS\"]]}"],["{\"selector\":\"strong\",\"tasks\":[[\"has-text\",\"/reklam/i\"],[\"upward\",\".post_feed_post\"]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"Sponsrat av\"],[\"upward\",\"div[data-curated-shelf-id]\"]]}"],["{\"selector\":\"button\",\"tasks\":[[\"has-text\",\"Besök annonsör\"]]}"],["{\"selector\":\".jet-listing-dynamic-field__content\",\"tasks\":[[\"has-text\",\"/annonssamarbete|reklamsamarbete/i\"],[\"upward\",\".jet-listing-grid__item\"]]}"],["{\"selector\":\".front-cta\",\"tasks\":[[\"has-text\",\"/sponsrat innehåll/i\"]]}"],["{\"selector\":\".betart-marker\",\"tasks\":[[\"matches-css\",{\"name\":\"content\",\"pseudo\":\"after\",\"value\":[\"Annons\",\"i\"]}],[\"upward\",\".documentpush-group\"]]}"],["{\"selector\":\"h2, h5, .kicker\",\"tasks\":[[\"has-text\",\"ANNONS\"],[\"upward\",\"article, div.row\"]]}"],["{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"/sponsra/i\"],[\"upward\",3]]}","{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"SPONSR\"],[\"upward\",3]]}"],["{\"selector\":\"button\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"/annons/i\"],[\"upward\",\".owl-item\"]]}"],["{\"selector\":\".leftinfo\",\"tasks\":[[\"has-text\",\"/Externa artiklar:|Länktips:/\"]]}"],["{\"selector\":\".fusion-text\",\"tasks\":[[\"has-text\",\"Online casino\"]]}"],["{\"selector\":\".sidebox\",\"tasks\":[[\"has-text\",\"/Externa länkar|Artiklar/\"]]}"],["{\"selector\":\".label--black\",\"tasks\":[[\"has-text\",\"/sponsrat/i\"],[\"upward\",\"article\"]]}"]];

const hostnamesMap = new Map([["sjofart.ax",1],["bandyfeber.com",2],["borsvarlden.com",3],["dagenstv.com",4],["discoveringtheplanet.com",5],["fotbollsresultat.com",6],["fotbolltransfers.com",7],["hejauppsala.com",8],["hockeymagasinet.com",9],["mabra.com",[10,11]],["allas.se",10],["elle.se",[10,74]],["femina.se",10],["hant.se",10],["motherhood.se",[10,11]],["residencemagazine.se",10],["svenskdam.se",10],["nouw.com",12],["sportbloggare.com",13],["studocu.com",14],["svampguiden.com",15],["sweclockers.com",16],["varmepumpsforum.com",17],["gynning.net",18],["vovve.net",19],["bulletin.nu",20],["byggkontakt.nu",21],["fuska.nu",22],["gmfk.nu",23],["hockeybladet.nu",24],["indien.nu",25],["jarnvagar.nu",26],["klt.nu",27],["barometern.se",27],["blt.se",27],["bt.se",27],["kalmarposten.se",27],["kristianstadsbladet.se",27],["meraosterlen.se",27],["nsk.se",27],["olandsbladet.se",27],["smp.se",27],["sydostran.se",27],["trelleborgsallehanda.se",27],["ut.se",27],["vaxjobladet.se",27],["vxonews.se",27],["ystadsallehanda.se",27],["temperatur.nu",28],["tidningen.nu",29],["tv.nu",30],["affarsvarlden.se",31],["aftonbladet.se",32],["aktieskolan.se",33],["aktuellhallbarhet.se",34],["byggindustrin.se",34],["dagensmedia.se",34],["dagensmedicin.se",34],["dagenssamhalle.se",34],["dagligvarunytt.se",34],["fastighetsnytt.se",34],["market.se",34],["privataaffarer.se",34],["resume.se",34],["aktuellsakerhet.se",35],["aktuelltfokus.se",36],["allabolag.se",37],["allsvenskan.se",38],["superettan.se",38],["alltforforaldrar.se",39],["alltomarbetsmiljo.se",40],["alltomhif.se",41],["alltomnorrtalje.se",42],["arbetaren.se",43],["arjeplognytt.se",44],["aurumforum.se",45],["autonytt.se",46],["baraenkakatill.se",47],["barnistan.se",48],["bilresaieuropa.se",49],["bioenergitidningen.se",50],["kvalitetsmagasinet.se",50],["miljo-utveckling.se",50],["telekomidag.se",50],["vdtidningen.se",50],["boneo.se",51],["borskollen.se",52],["butikstrender.se",53],["byggahus.se",54],["byggipedia.se",55],["cafe.se",56],["kingmagazine.se",56],["campingsverige.se",57],["conpot.se",58],["cornucopia.se",59],["cyclingplus.se",60],["halsafitness.se",60],["yogaworld.se",60],["dagensjuridik.se",61],["dagenslogistik.se",62],["dagensps.se",63],["dalarnasaffarer.se",64],["jamtlandsaffarer.se",64],["naringslivetvgl.se",64],["stockholmsaffarer.se",64],["datormagazin.se",65],["densistavilan.se",66],["devote.se",67],["di.se",68],["dn.se",68],["digitalavykort.se",69],["digitalfotoforalla.se",70],["iform.se",70],["pctidningen.se",70],["varldenshistoria.se",70],["dinvinguide.se",71],["djungeltrumman.se",72],["ehandel.se",73],["esportare.se",75],["etc.se",76],["evergreengarden.se",77],["expressen.se",78],["www.expressen.se",79],["familjeliv.se",80],["feber.se",81],["tjock.se",81],["filatelisten.se",82],["filmtipset.se",83],["finanstid.se",84],["firstclassmagazine.se",85],["fiskejournalen.se",86],["fl-net.se",87],["folkhalsasverige.se",88],["foretagsverige.se",89],["forskningsverige.se",89],["grillbibeln.se",89],["hallbarhetsverige.se",89],["kampenmotcancer.se",89],["motorbibeln.se",89],["tillvaxtsverige.se",89],["forvaltarforum.se",90],["fotbolldirekt.se",91],["hockeysverige.se",91],["innebandymagazinet.se",91],["fotbollskanalen.se",92],["fotbollskane.se",93],["fotbollsthlm.se",93],["fragbite.se",94],["framtidensronneby.se",95],["freeride.se",96],["futsalmagasinet.se",97],["fz.se",98],["gaffa.se",99],["gamereactor.se",100],["godare.se",[101,102]],["livsstil.se",[102,131]],["google.se",103],["www.google.se",104],["goon.se",105],["hejaolika.se",106],["hemnet.se",107],["hippson.se",108],["hitta.se",109],["horisontmagasin.se",110],["husbil.se",111],["husvagn.se",111],["ibnytt.se",112],["influens.se",113],["ingenjorsjobb.se",114],["inredningsarkitektur.se",115],["verktyg.internetmedicin.se",116],["it-finans.se",117],["it-hallbarhet.se",117],["it-halsa.se",117],["it-kanalen.se",117],["it-pedagogen.se",117],["it-retail.se",117],["javligtgott.se",118],["karlskogavaxer.se",119],["kiacarclub.se",120],["kimura.se",121],["klart.se",122],["kobe.se",123],["kokaihop.se",124],["koket.se",125],["komponentkoll.se",126],["kritiker.se",127],["lajvo.se",128],["listor.se",129],["livinguppsala.se",130],["lokalti.se",132],["loppi.se",133],["lundgiants.se",134],["m3.se",135],["macworld.se",135],["pcforalla.se",135],["maklarvarlden.se",136],["maltermagasin.se",137],["nyadagbladet.se",137],["matinspo.se",138],["medibok.se",139],["mestmotor.se",140],["metromode.se",141],["minimalisterna.se",142],["mitti.se",143],["modernalivet.se",144],["moviezine.se",145],["mygatemagazine.se",146],["newsvoice.se",147],["ng.se",148],["nordfront.se",149],["nordichardware.se",150],["nyfiknainvesterare.se",151],["nyheteridag.se",152],["oskarshamns-nytt.se",153],["padeldirekt.se",154],["passagen.se",155],["placera.se",156],["podtail.se",157],["pricerunner.se",158],["radio.se",159],["rollinghomes.se",160],["samnytt.se",161],["senses.se",162],["shortcut.se",163],["signprint.se",164],["siljannews.se",165],["sillyseason.se",166],["so-rummet.se",167],["spelochfilm.se",168],["sporthalsa.se",169],["streamat.se",170],["sverigespringer.se",171],["swedroid.se",172],["tabyallehanda.se",173],["tekniknytt.se",174],["tekniksmart.se",175],["teknikveckan.se",176],["99.teknikveckan.se",177],["tennisportalen.se",178],["thelocal.se",179],["tidningenbalans.se",180],["tidningenridsport.se",181],["tidningenskriva.se",182],["totallyorebro.se",183],["totallystockholm.se",183],["travronden.se",184],["trendenser.se",185],["tripadvisor.se",186],["tv4play.se",187],["underbaraclaras.se",188],["upptack-sverige.se",189],["utsidan.se",190],["vasterastidning.se",191],["villalivet.se",192],["vimedbarn.se",193],["viseniorer.se",194],["vm-fotboll.se",195],["vmj.se",196],["welma.se",197]]);

const entitiesMap = new Map([["nyafilmer",0]]);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
