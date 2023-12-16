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

// ruleset: tur-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".rek-0\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"#sol > #embed:has(iframe) ~ #video-onu2\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"|/video/\"],[\"spath\",\"body > .play-button-outer ~ .pppx\"]]}"],["{\"selector\":\"#js-hook-for-observer-tabs-wrapper > .detail-head-wrapper:not([id]) > h4.detail-head-separator\",\"tasks\":[[\"has-text\",\"/^SPONSORLU BAĞLANTILAR$/\"]]}"],["{\"selector\":\"body > .shadow1 > .header_big_advert\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".bilesen > .w_baslik\",\"tasks\":[[\"has\",{\"selector\":\"> .yazi_golge\",\"tasks\":[[\"has-text\",\"Sponsorlu Bağlantılar\"]]}]]}"],["{\"selector\":\".owl-dots > div.owl-dot\",\"tasks\":[[\"has-text\",\"/^R$/\"]]}"],["{\"selector\":\".sidebar > .ai_widget\",\"tasks\":[[\"has\",{\"selector\":\"> .modul-title > h3.m-title\",\"tasks\":[[\"has-text\",\"Sponsorlu\"]]}]]}"],["{\"selector\":\".manset-list > ul > li\",\"tasks\":[[\"has\",{\"selector\":\"> a\",\"tasks\":[[\"has-text\",\"/^R$/\"]]}]]}"],["{\"selector\":\"section > div[class]:has(> div[id*=\\\"_728X90_\\\"][style^=\\\"background-color:\\\"]:only-child)\",\"action\":[\"remove\",\"\"]}","{\"selector\":\"section > div[id*=\\\"_300X250_\\\"][style^=\\\"background-color:\\\"]\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"#details > center\",\"tasks\":[[\"has-text\",\"Sponsor\"]]}"],["{\"selector\":\"#PopularSicakFirsatTopicsContent > div[class=\\\"populersatir\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> a > .populerbaslik > span\",\"tasks\":[[\"has-text\",\"/^\\\\(ilandır\\\\)$/\"]]}]]}","{\"selector\":\"td[bgcolor=\\\"d0d0d0\\\"] > table[width=\\\"100%\\\"] > tbody > tr[bgcolor=\\\"#FFFFFF\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"td[class]\",\"tasks\":[[\"has-text\",\"Reklam\"]]}]]}"],["{\"selector\":\"#interstitial-close-link-source\",\"action\":[\"remove\",\"\"]}","{\"selector\":\".ad-banner\",\"action\":[\"remove\",\"\"]}","{\"selector\":\".ad-doubleclickwebinterstital\",\"action\":[\"remove\",\"\"]}","{\"selector\":\".ui-autocomplete > li:has(> div[style^=\\\"color:\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".swiper-wrapper > div.swiper-slide:has(> a[data-url^=\\\"https://ensonhaber.me/\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".col-md-sidebar > .widget > .pm-section-head\",\"tasks\":[[\"has\",{\"selector\":\"> h2\",\"tasks\":[[\"has-text\",\"/^Advertisment$/\"]]}]]}"],["{\"selector\":\".slick-dots > li:has(> a[href^=\\\"https://www.haber7.com/advertorial/\\\"])\",\"action\":[\"remove\",\"\"]}","{\"selector\":\"a[href^=\\\"https://www.haber7.com/advertorial/\\\"].headline-slider-item\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".owl-stage > div.owl-item:has(> article > a[href^=\\\"/guncel/\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"body > div.container > div.header_big_advert\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".mansetSlider li:has(img[src*=\\\"//haberkibris.com/banner2/\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".swiper > div.swiper-wrapper > div.swiper-slide:has(> a[href^=\\\"/reklam/ads/\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".col-xs-4 > div[align=\\\"center\\\"]\",\"tasks\":[[\"has-text\",\"Reklam\"]]}"],["{\"selector\":\".haberDetayIcerik p > img[loading=\\\"lazy\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".native-kutu\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".swiper-wrapper > .swiper-slide:has(*:is(img[src^=\\\"/sahifeler/rkl/\\\"], .adsbygoogle))\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".col-lg-8 > .panel-info > .panel-body > .panel > .panel-body > a[target=\\\"_blank\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/^\\\\/$/\"],[\"spath\",\".container > div.row:has(> div[class^=\\\"col-\\\"] > div.banner)\"]]}"],["{\"selector\":\".side2 > .box1 > .title-red\",\"tasks\":[[\"has\",{\"selector\":\"> .red-inside > .red-title\",\"tasks\":[[\"has-text\",\"/^Reklam$/\"]]}]]}"],["{\"selector\":\"#s-spotmanset-dots > .row > li:has(> a[href=\\\"https://www.dermansut.com.tr/\\\"])\",\"action\":[\"remove\",\"\"]}","{\"selector\":\"#s-spotmanset-dots > .row > li:has(> a[href=\\\"https://www.letstr.com/\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".recipe-cards-area > div > div#arsiv-native\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".sidebar > .widget > .adsbygoogle\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"div.bg-white\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"/^Reklam$/\"]]}]]}"],["{\"selector\":\".theiaStickySidebar > .sidebarWidget\",\"tasks\":[[\"has\",{\"selector\":\"> .heading > .title\",\"tasks\":[[\"has-text\",\"Sponsor Bağlantı\"]]}]]}"],["{\"selector\":\".begenilen_anasayfa > ul > li.kitem > div[id^=\\\"div-gpt-ad\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"tbody > tr > td[height=\\\"90\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> script\",\"tasks\":[[\"has-text\",\"google_ad_client\"]]}]]}"],["{\"selector\":\".splide__list > li.splide__slide:has(> div.s-gcm-br)\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"div[class*=\\\" \\\"] > div[class] > div[style^=\\\"height:\\\"] + div[class]\",\"tasks\":[[\"has-text\",\"/^Reklam$/\"],[\"upward\",2]]}"],["{\"selector\":\"div[data-testid=\\\"mesh-container-content\\\"] > div[id^=\\\"comp-\\\"] > iframe[aria-label=\\\"Google AdSense\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".classifiedOtherDetails > div.uiBox\",\"tasks\":[[\"has\",{\"selector\":\"> div > h3\",\"tasks\":[[\"has-text\",\"Sponsorlu\"]]}]]}"],["{\"selector\":\".swiper-wrapper > div.swiper-slide:has(> a[href^=\\\"https://dimpa.renault.com.tr/\\\"])\",\"action\":[\"remove\",\"\"]}","{\"selector\":\".swiper-wrapper > div.swiper-slide:has(> img[src*=\\\"banner\\\"] + a[href])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".swiper-wrapper > div.swiper-slide:has(> a[title=\\\"advert\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".well > div.panel-heading\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"REKLAM\"]]}]]}"],["{\"selector\":\".sidebar-content > .sidebar-top > p\",\"tasks\":[[\"has-text\",\"/^Reklam$/\"],[\"upward\",1]]}"],["{\"selector\":\".CloudWrapper > div[align=\\\"center\\\"] > span.previous_results_class > center > .adsbygoogle\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".swiper-wrapper > div:has(> a > figure.manset-reklam)\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".right-wrapper > div.grid-margin\",\"tasks\":[[\"has\",{\"selector\":\"> div.card > div.card-header\",\"tasks\":[[\"has-text\",\"Sponsor\"]]}]]}"],["{\"selector\":\".samOverlay_30\",\"tasks\":[[\"has\",{\"selector\":\"> div.overlay > div.overlay-title\",\"tasks\":[[\"has-text\",\"Reklam\"]]}]]}"],["{\"selector\":\"#sidebar > div.widget\",\"tasks\":[[\"has\",{\"selector\":\"> div.widget-header > h3.widget-title\",\"tasks\":[[\"has-text\",\"Sponsor\"]]}]]}"],["{\"selector\":\".box-news > .row > .col-md-4 > .banner\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".sidebar > div.widget-container\",\"tasks\":[[\"has-text\",\"Reklam\"]]}"],["{\"selector\":\"div[id^=\\\"edit\\\"] > div[style*=\\\"stylevar\\\"] > table > tbody > tr > .thead\",\"tasks\":[[\"has-text\",\"/^Reklamlar$/\"],[\"upward\",3]]}"],["{\"selector\":\"body > #cboxOverlay\",\"tasks\":[[\"has\",{\"selector\":\"+ #colorbox:has(#popup-reklam)\"}]]}"],["{\"selector\":\"#leftC > .filmborder\",\"tasks\":[[\"has\",{\"selector\":\"> .filmcontent > .tam > a\",\"tasks\":[[\"has-text\",\"Sponsor Reklam\"]]}]]}"],["{\"selector\":\"#usttekiReklam\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"video#SlotBar > source[src^=\\\"/reklams/\\\"]\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".thead\",\"tasks\":[[\"has-text\",\"Reklam\"],[\"upward\",2]]}","{\"selector\":\"div[style=\\\"padding:0px 10px 0px 10px\\\"] > div[id=\\\"posts\\\"] > table[class=\\\"tborder\\\"][width=\\\"100%\\\"][align=\\\"center\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"td.thead\",\"tasks\":[[\"has-text\",\"Sponsorlu Baglantilar\"]]}]]}"],["{\"selector\":\".home-swiper > div.swiper-wrapper > div.swiper-slide:has(a[href*=\\\"&utm_\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".banner300Soru\",\"tasks\":[[\"upward\",\"div\"]]}"],["{\"selector\":\".col-12 > .content-items.grid > .col-12 > div[id^=\\\"ENGAGEYA_WIDGET_\\\"]\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\".col-12 > .content-items.grid > .col-6 > .widget-336x280\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\".grid > .col-12 > .swiper-container ~ div[class=\\\"txt:center panel\\\"] > a[href][onclick^=\\\"gtag('event', 'Click'\\\"] > img\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".nav > div[align=\\\"center\\\"] > div[style] > table.tborder\",\"tasks\":[[\"has\",{\"selector\":\"> tbody > tr > td.tcat\",\"tasks\":[[\"has-text\",\"Sponsorlar\"]]}]]}","{\"selector\":\".nav div[id=\\\"pagenav_menu\\\"] + div[style]\",\"tasks\":[[\"has\",{\"selector\":\"> table.tborder > tbody > tr > td.thead > b\",\"tasks\":[[\"has-text\",\"Reklam\"]]}]]}"],["{\"selector\":\"body > main > div[class] > .rPanel\",\"tasks\":[[\"has\",{\"selector\":\"> .head\",\"tasks\":[[\"has-text\",\"/^Reklam $/\"]]}]]}"],["{\"selector\":\".sidebar > div[id^=\\\"custom_html-\\\"] > .textwidget > .thb-ad\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"#sidebar-right > div.widget\",\"tasks\":[[\"has\",{\"selector\":\"> div.sidebarnav > h3 > div[style]\",\"tasks\":[[\"has-text\",\"Reklam\"]]}]]}"],["{\"selector\":\".module > div.module-inner div.bannergroup\",\"tasks\":[[\"upward\",\".module\"]]}"],["{\"selector\":\".col-4 > div[style^=\\\"height\\\"] > [id^=\\\"div-gpt-ad\\\"]\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\".s-pagination li:has(> a[href^=\\\"https://pubads.g.doubleclick.net/\\\"])\",\"action\":[\"remove\",\"\"]}","{\"selector\":\".swiper-wrapper > div.swiper-slide:has(> a[href^=\\\"https://pubads.g.doubleclick.net/\\\"])\",\"action\":[\"remove\",\"\"]}","{\"selector\":\"div[style^=\\\"height:\\\"] > [id^=\\\"div-gpt-ad\\\"]\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\"div[style^=\\\"height:\\\"] > div[id^=\\\"ENGAGEYA_WIDGET_\\\"]\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\"div[style^=\\\"width:\\\"] > [id^=\\\"div-gpt-ad\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".page-wrapper > .container > .row > div[class=\\\"col-12 col-md-6 col-lg-4 view-20\\\"] > .advers-box\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".swiper-reklam\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".display-none\",\"tasks\":[[\"has\",{\"selector\":\"> figure.news-box > figcaption > a[href] > span.txt\",\"tasks\":[[\"has-text\",\"Reklam\"]]}]]}"],["{\"selector\":\".solbar > .sol-kutu\",\"tasks\":[[\"has\",{\"selector\":\"> .m-baslik > p > b\",\"tasks\":[[\"has-text\",\"/^SPONSOR REKLAMLAR$/\"]]}]]}"],["{\"selector\":\".p-body-sidebar > div.block\",\"tasks\":[[\"has\",{\"selector\":\"> div.block-container > h3.block-minorHeader\",\"tasks\":[[\"has-text\",\"Reklam\"]]}]]}"],["{\"selector\":\"#sidebar > .sidebar-box > h4 > span\",\"tasks\":[[\"has-text\",\"/^REKLAM$/\"],[\"upward\",2]]}"],["{\"selector\":\"#orta > .karisikOyunlarr > div > .adsbygoogle\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".main-headline div.headline-new > .swiper-slide:has(> a[href^=\\\"https\\\"][target=\\\"_blank\\\"] > picture > img)\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"#s-manset-dots > ul > li:has(> a[href^=\\\"/service/advertclick?\\\"])\",\"action\":[\"remove\",\"\"]}","{\"selector\":\"#s-manset-list div.slick-track > a.item-rkm\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".swiper-wrapper > div.swiper-slide:has(a[href^=\\\"https://tinyurl.com/\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".owl-stage > .owl-item:has(> .item > a[target=\\\"_blank\\\"]:not([href^=\\\"https://www.yeniakit.com.tr/\\\"]))\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"td[valign=\\\"top\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"table[cellspacing=\\\"1\\\"] b\",\"tasks\":[[\"has-text\",\"Reklamlar\"]]}]]}"]];

const hostnamesMap = new Map([["buzz",2],["arabam.com",3],["avrupabulten.com",4],["bakirkoydenhaber.com",5],["basarisiralamalari.com",6],["bilgenc.com",7],["bomba32.com",8],["cimri.com",9],["doeda.com",10],["forum.donanimhaber.com",11],["eksisozluk1923.com",12],["eksisozluk1999.com",12],["ensonhaber.com",13],["fullhdfilmdeposu.com",14],["haber7.com",15],["haberdairesi.com",16],["haberetanik.com",17],["haberkibris.com",18],["hakimiyet.com",19],["istikbalgazetesi.com",20],["kibrisgercek.com",21],["kimkazandi.com",22],["konhaber.com",23],["kriptoparapiyasasi.com",24],["lifebursa.com",25],["lordiz.com",26],["medyabar.com",27],["nefisyemektarifleri.com",28],["ogznet.com",29],["onedio.com",30],["otokokpit.com",31],["oyunkolu.com",32],["oyunkuzusu.com",33],["paratic.com",34],["poki.com",35],["popkedi.com",36],["sahibinden.com",37],["sehrivangazetesi.com",[38,39]],["wanhaber.com",39],["siberdeyiz.com",40],["technoprogram.com",41],["telesikayet.com",42],["timeturk.com",43],["trwebtoon.com",44],["forum.turkmmo.com",45],["upslut.com",46],["yeniduzen.com",47],["yeniwindows.com",48],["ytpara.com",49],["yesilcamtv.eu",50],["hentaizm.fun",51],["altin.in",52],["hdfilmcehennem.live",53],["agaclar.net",54],["birgun.net",55],["fenokulu.net",56],["memurlar.net",57],["opelim.net",58],["r10.net",59],["shiftdelete.net",60],["unyetv.net",61],["21yyte.org",62],["aksam.com.tr",63],["aspor.com.tr",64],["cumhuriyet.com.tr",65],["fotomac.com.tr",66],["freemagazine.com.tr",67],["forum.gamer.com.tr",68],["maisonfrancaise.com.tr",69],["oyunu.com.tr",70],["sabah.com.tr",71],["sesgazetesi.com.tr",72],["takvim.com.tr",73],["yeniakit.com.tr",74],["gazeteoku.tv",75]]);

const entitiesMap = new Map([["dafflix",0],["webteizle",1]]);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
