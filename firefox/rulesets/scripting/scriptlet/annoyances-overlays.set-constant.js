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
/* global cloneInto */

'use strict';

// ruleset: annoyances-overlays

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_setConstant = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["Object.prototype.renderTo","undefined"],["Object.prototype.blockId","undefined"],["Object.prototype.hasShadowDomSupport","undefined"],["Object.prototype.BannerDirect","undefined"],["Object.prototype.registerPlacement","undefined"],["Object.prototype.isAdblockEnable","noopFunc"],["Object.prototype.renderDirect","undefined"],["admiral","noopFunc"],["loadAdmiral","noopFunc"],["ezAardvarkDetected","false"],["google_ad_modifications","{}"],["ANN.ads.adblocked","false"],["inxBX.failed","false"],["isadblocking","false"],["checkAdBlock","noopFunc"],["hasAdblock","false"],["ads.adBlockDetected","false"],["penci_adlbock","undefined"],["blockingAds","false"],["nerverblock_callback","noopFunc"],["showAds","true"],["isAdblockEnabled","false"],["popUpInfo","noopFunc"],["jsData.adsEnabled","false"],["brighteonSpecial","true"],["adblockV1","true"],["adblocker_is_off","true"],["TfmediaExtFolEngineLoaded","true"],["Object.prototype.rellect_adblock_detector","false"],["cmnnrunads","true"],["isAdblockEnable","false"],["canRunAds","true"],["adsAllowed2","true"],["cwAdblockDisabled1","true"],["cwAdblockDisabled2","true"],["adsbygoogle.loaded","true"],["VMG.Components.Adblock","false"],["detect","undefined"],["google_jobrunner","noopFunc"],["isAdBlockActive","false"],["adBlockerDetected","false"],["google_ad_block","false"],["googlefc","null"],["adblock","false"],["adv_openx_oas_ads","true"],["icy_veins_blocked","false"],["cr","0"],["gn","true"],["window.google_ad_status","1"],["alert","undefined"],["niceAdsCheck","true"],["google_ad_status","1"],["adning_no_adblock","true"],["jQuery.adblock","false"],["AdBlocker","false"],["mb.advertisingShouldBeEnabled","false"],["checkAdblockBait","noopFunc"],["MP.lib.adBlockEnabled","noopFunc"],["adBlockEnabled","false"],["adblockDetector","noopFunc"],["isAdBlockEnabled","false"],["pqdxwidthqt","false"],["googlefc.getAdBlockerStatus","noopFunc"],["adsOk","true"],["flatPM_adbDetect","noopFunc"],["XenForo.rellect.AdBlockDetector","noopFunc"],["ab","false"],["data.ad_free","true"],["use_adblock","false"],["adBlockDetected","false"],["sugabuAdsLoaded","true"],["SD_IS_BLOCKING","false"],["sd_adBlockDetector","{}"],["SD_BLOCKTHROUGH","true"],["ConcertAds","true"],["window.adsEnabled","true"],["_ABE","undefined"],["Adblock","false"],["foolish_script_is_here","noopFunc"],["showBanner600","true"],["window.canRunAds","true"],["ab.isTrig","false"],["adsbygoogle.push.length","1"],["_ads","true"],["__tnt.advertisements","noopFunc"],["advanced_ads_pro.adblocker_active","false"],["ads","true"],["AdBlockSELECTOR","undefined"],["Object.prototype.adPlayerId",""],["QiyiPlayerProphetData.a.data","{}"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["aoAdBlockDetected","false"],["adBlockerReady","false"],["adFilters","undefined"],["Object.prototype.cABNoCheck","undefined"],["window.abc","false"],["__NUXT__.state.services.features.shoppingExtensionPopupArticle","undefined"],["openOverlaySignup","noopFunc"],["GEMG.ConversionModule","noopFunc"],["mainBottomBanner","noopFunc"],["app.enablePopup","false"],["wp_subscribe_popup","noopFunc"],["initExitIntent","noopFunc"],["window.Unauthorized2","undefined"],["window.PageBottomBanners.initUnauthBanner","noopFunc"],["_sharedData.is_whitelisted_crawl_bot","true"],["history.state","undefined"],["Notification.requestPermission","noopFunc"],["firebase.messaging","noopFunc"],["Object.prototype.PushSubscription",""],["PushSubscription","undefined"],["PushManager","undefined"],["navigator.geolocation","{}"],["arrJsConfig.enablePushNotification","0"],["smartech","noopFunc"],["show_dimissable_registration","false"],["PASSER_videoPAS_apres","0"],["warning_widget.check_ad_block_status","noopFunc"],["killads","true"],["adsAreBlocked","false"],["nebula.session.flags.adblock","undefined"],["_adBlockCheck","true"],["webkitRequestFileSystem","noopFunc"],["valid_user","true"],["Drupal.behaviors.detectAdblockers","noopFunc"],["disableSelection","noopFunc"],["ADBdetected","noopFunc"],["BIA.ADBLOCKER","false"],["samDetected","true"],["adBlockFunction","trueFunc"],["checkAds","trueFunc"],["google_jobrunner","true"],["isAdblockDisabled","true"],["checkPrivacyWall","noopFunc"],["document.oncontextmenu","null"],["nocontext","noopFunc"],["adsAreShown","true"],["abd","false"],["detector_active","true"],["aoezone_adchecker","true"],["pageService.initDownloadProtection","noopFunc"],["detectPrivateMode","noopFunc"],["webkitRequestFileSystem","undefined"],["adsbygoogle","null"],["ads_not_blocked","true"],["ytInitialPlayerResponse.auxiliaryUi.messageRenderers.upsellDialogRenderer","undefined"],["hideBannerBlockedMessage","true"],["bAdBlocker","false"],["blurred","false"],["document.oncontextmenu","undefined"],["alert","trueFunc"],["TGMP_OBJ_CACHE.tritonsee_client.playAttemptsCount","trueFunc"],["better_ads_adblock","0"],["console.clear","trueFunc"],["console.debug","trueFunc"],["adBlock","false"],["adsEnabled","true"],["ads_enabled","true"],["better_ads_adblock","null"],["f12lock","false"],["document.onselectstart","null"],["console.clear","undefined"],["document.onkeyup","null"],["document.ondragstart","null"],["commonUtil.openToast","null"],["NS_TVER_EQ.checkEndEQ","trueFunc"],["mps._queue.abdetect","null"],["fuckAdBlock","trueFunc"],["abp","false"],["document.onselectstart","noopFunc"],["document.onkeydown","noopFunc"],["getSelection","undefined"],["document.onkeydown","null"],["console.clear","noopFunc"],["document.oncontextmenu","noopFunc"],["x5engine.utils.imCodeProtection","null"],["ansFrontendGlobals.settings.signupWallType","undefined"],["onload","null"],["document.ondragstart","noopFunc"],["document.onmousedown","noopFunc"],["disableselect","trueFunc"],["document.onkeypress","null"],["document.oncontextmenu",""],["document.onselectstart",""],["document.onkeydown",""],["document.onmousedown",""],["document.onclick",""],["document.body.onmouseup","null"],["document.oncopy","null"],["document.onkeydown","trueFunc"],["document.body.oncut","null"],["document.body.oncopy","null"],["console.log","noopFunc"],["document.ondragstart","trueFunc"],["document.onselectstart","trueFunc"],["jsData.hasVideoMeteringUnlogEnabled","undefined"],["lepopup_abd_enabled",""],["Object.prototype.preroll","[]"],["document.oncontextmenu","trueFunc"],["devtoolsDetector","undefined"],["Object.prototype.bgOverlay","noopFunc"],["Object.prototype.fixedContentPos","noopFunc"],["console.dir","noopFunc"],["navigator.userAgent",""],["devtoolIsOpening","noopFunc"],["devtoolIsOpening","undefined"],["securityTool.disableRightClick","noopFunc"],["securityTool.disableF12","noopFunc"],["securityTool.disableCtrlP","noopFunc"],["securityTool.disableCtrlS","noopFunc"],["securityTool.disablePrintScreen","noopFunc"],["securityTool.disablePrintThisPage","noopFunc"],["securityTool.disableElementForPrintThisPage","noopFunc"],["mousehandler","noopFunc"],["checkAds","noopFunc"],["stopPrntScr","noopFunc"],["disableSelection","undefined"],["traffective","true"],["flashvars.autoplay",""],["document.body.oncopy","null","3"],["document.body.onselectstart","null","3"],["document.body.oncontextmenu","null","3"],["Time_Start","0"],["DD","trueFunc"],["document.oncontextmenu","null","3"],["Object.prototype._detectLoop","noopFunc"],["forbiddenList","[]"],["document.onkeypress","trueFunc"],["document.oncontextmenu","true"],["Object.prototype._detectLoop","undefined"],["devtoolsDetector","{}"],["SteadyWidgetSettings.adblockActive","false"],["devtoolsOpen","false"],["devtoolsDetector","noopFunc"],["DisDevTool","undefined"],["document.oncopy","noopFunc"],["initials.urls.bannerCheckUrl",""],["mtGlobal.disabledAds","true"],["devtoolsDetector.launch","noopFunc"],["maxUnauthenicatedArticleViews","null"],["placeAdsHandler","noopFunc"]];

const hostnamesMap = new Map([["www.kinopoisk.ru",0],["rg.ru",[0,108]],["kufar.by",0],["24smi.org",1],["echo.msk.ru",[2,3,110]],["dzen.ru",4],["my.mail.ru",5],["sports.ru",6],["svg.com",7],["syracuse.com",7],["allmovie.com",7],["racinggames.gg",7],["si.com",7],["ksdk.com",7],["slashgear.com",7],["sidereel.com",7],["primagames.com",7],["delmarvanow.com",7],["gfinityesports.com",7],["kooora.com",7],["realclearpolitics.com",7],["calculator-online.net",7],["givemesport.com",7],["reuters.com",7],["ranker.com",7],["milestomemories.com",7],["epicstream.com",7],["worldhistory.org",7],["radiozet.pl",7],["momtastic.com",7],["recordnet.com",7],["citizen-times.com",7],["tennessean.com",7],["clarionledger.com",7],["phillyburbs.com",7],["usatoday.com",[7,16]],["wrestlinginc.com",7],["videogamer.com",7],["motorbiscuit.com",7],["grandprix247.com",7],["familyminded.com",7],["xcalibrscans.com",7],["cbsnews.com",7],["finviz.com",7],["ign.com",7],["workandmoney.com",7],["today.com",7],["rottentomatoes.com",[7,167]],["walterfootball.com",7],["dotesports.com",7],["boredpanda.com",7],["cleveland.com",7],["cbssports.com",8],["scitechdaily.com",9],["thewindowsclub.com",9],["cheatnetwork.eu",10],["crackwatcher.com",10],["animenewsnetwork.com",11],["posti.mail.ee",12],["inbox.lv",12],["workingdays.org",13],["stash.sussy.moe",14],["android.com.pl",15],["fosslinux.com",17],["nexusmods.com",18],["1001tracklists.com",20],["autogaleria.pl",21],["basicweb.ru",22],["brainly.com",23],["brighteon.com",24],["cda.pl",25],["chefkoch.de",26],["chip.de",27],["civicx.com",28],["comnuan.com",29],["corriere.it",30],["creatur.io",31],["drnasserelbatal.com",31],["file.fm",31],["files.fm",31],["gamehag.com",31],["onlinehashcrack.com",31],["scantrad.net",31],["timebucks.com",31],["uderent.com",31],["ctrlv.cz",32],["cx30-forum.de",[33,34]],["telefon-treff.de",[33,34]],["cyberpedia.su",35],["kukuo.tw",35],["studopedia.info",35],["infopedia.su",35],["studopedia.net",35],["studopedia.su",35],["studopedia.org",35],["studopedia.ru",35],["studopedia.com.ua",35],["lektsii.org",35],["mydocx.ru",35],["dallasobserver.com",36],["digilibraries.com",37],["dniwolne.eu",38],["jeshoots.com",38],["webcamtaxi.com",38],["doodlr.io",39],["evades.io",40],["everyeye.it",41],["foxnews.com",42],["gameblog.fr",43],["lapumia.org",43],["gazzetta.it",44],["icy-veins.com",45],["inoreader.com",[46,47]],["investing.com",48],["it-actual.ru",49],["lowcygier.pl",50],["malaysiastock.biz",51],["marriedgames.com.br",52],["megagames.com",53],["metasrc.com",54],["meteoblue.com",55],["mgsm.pl",56],["minijuegos.com",57],["miniwebtool.com",58],["mrexcel.com",59],["nu.nl",60],["how-to-pc.info",61],["easy-learn-tech.info",61],["one-click-tutorials.info",61],["solvetube.site",61],["getintopc.com",61],["preguntandroid.com",62],["iteramos.com",62],["pyrogram.org",63],["qiwihelp.net",64],["r3owners.net",65],["remont-aud.net",66],["salon.com",[67,68]],["satelliteguys.us",69],["signupgenius.com",70],["ingles.com",[71,72,73]],["spanishdict.com",[71,72,73]],["starsandstripesfc.com",74],["polygon.com",74],["strangermeetup.com",[75,157]],["thec64community.online",76],["thehindu.com",77],["titulky.com",[78,79]],["ucoin.net",80],["venea.net",81],["vimm.net",82],["wikihow.com",83],["wvnews.com",84],["xgp.pl",85],["yorumbudur.com",86],["yusepjaelani.blogspot.com",87],["sports.iqiyi.com",88],["m.iqiyi.com",88],["www.iqiyi.com",[89,90,91]],["theharborside.org",92],["fleetstar.com",92],["resources.harneys.com",92],["zeomega.com",92],["marketing.rsvpportal.com",92],["westernstatescat.com",92],["freedomiot.ai",92],["unifilabs.com",92],["weather.com",93],["m.rp5.ru",94],["m.rp5.by",94],["m.rp5.kz",94],["m.rp5.co.uk",94],["m.rp5.md",94],["rp5.ru",95],["rp5.ua",95],["rp5.by",95],["rp5.kz",95],["rp5.co.uk",95],["rp5.md",95],["hdrezka320rtq.org",96],["rezka-ua.tv",96],["hdrezkabmmshq.org",96],["hdrezkafh28d9.org",96],["hdrezkasmakyy.org",96],["hdrezkafhs83u.org",96],["hdrezkahs920s.org",96],["hdrezka.in",96],["hdrezkat5ee2w.org",96],["hdrezkagdvv2b.net",96],["hdrezka66yhfg.net",96],["hdrezka77ftyy.net",96],["hdrezka.rest",96],["hdrezkaffsg67.net",96],["hdrezkafjk2he.net",96],["hdrezkahf22hh.net",96],["hdrezkahdg24s.net",96],["hdrezkabbdh4d.net",96],["hdrezkajjfhr5.net",96],["27p6qp79zyr1.net",96],["hdrezka19139.org",96],["hdrezkap3g.org",96],["hdrezkapez.org",96],["hdrezkapoi.org",96],["hdrezkarty.org",96],["hdrezkacvb.org",96],["hdrezka.ag",96],["upivi.com",96],["hdrezka.me",96],["ikinopoisk.com",96],["kinopub.me",96],["3ivi.com",96],["rezkify.com",96],["aghdrezka.com",96],["hdrezka.re",96],["bestofkinopoisk.com",96],["rezkance.com",96],["rezkery.com",96],["rezkily.com",96],["ezhdrezka.com",96],["akinopoisk.com",96],["hdrezkaonline.com",96],["drhdrezka.com",96],["mrhdrezka.com",96],["hdrezka.sh",96],["ehdrezka.com",96],["nukinopoisk.com",96],["livekinopoisk.com",96],["betahdrezka.com",96],["cokinopoisk.com",96],["hdrezka-ag.com",96],["hdrezka.club",96],["hdrezka.cm",96],["hdrezka.co",96],["hdrezka.name",96],["hdrezka.site",96],["hdrezka.today",96],["hdrezka.tv",96],["hdrezka.website",96],["hdrezkaag.net",96],["hdrezkaweb.com",96],["hdrezkayou.com",96],["instahdrezka.com",96],["myhdrezka.com",96],["freehdrezka.com",96],["rezka.ag",96],["tryhdrezka.com",96],["cnet.com",97],["edurev.in",98],["defenseone.com",99],["govexec.com",99],["nextgov.com",99],["route-fifty.com",99],["ktmmobile.com",100],["startech.com.bd",101],["onlinecourses.ooo",102],["juracademy.de",103],["vk.com",[104,105]],["instagram.com",106],["smocca.jp",107],["community.oneplus.com",108],["lnc.nc",108],["superfilmes.ph",108],["meduza.global.ssl.fastly.net",108],["meduza.io",108],["yenisafak.com",108],["offidocs.com",108],["onedio.com",108],["hpplus.jp",108],["fullfilmcibaba1.com",108],["joom.com",108],["nbc.com",108],["maximum.ru",108],["ch3plus.com",108],["dropmefiles.com",108],["reddit.com",108],["life.ru",108],["macwelt.de",109],["pcwelt.de",109],["itemsatis.com",111],["dailymail.co.uk",112],["auchan.ua",113],["quizangel.com",114],["binge.buzz",115],["magicvalley.com",116],["brutal.io",[15,229]],["impots.gouv.fr",117],["realcleardefense.com",118],["xclient.info",119],["bejson.com",119],["gardenista.com",120],["gearside.com",121],["nytimes.com",[122,123]],["newyorker.com",123],["tvtropes.org",124],["justtrucks.com.au",125],["cittadinanza.biz",126],["glistranieri.it",126],["viralinindia.net",[126,136]],["ideapod.com",[126,136]],["privivkainfo.ru",126],["awebstories.com",[126,216]],["ancient.eu",127],["intramed.net",43],["protest.eu",128],["northwestfirearms.com",129],["techkings.org",129],["spookshow.net",130],["fosshub.com",131],["pokemonforever.com",132],["carsguide.com.au",133],["humo.be",134],["apksecured.com",135],["intergate.info",135],["alphapolis.co.jp",[135,161]],["chronologia.pl",[135,161]],["reportergazeta.pl",[135,161,164]],["odiarioonline.com.br",[135,173]],["nordkorea-info.de",135],["geotips.net",[135,178]],["televisiongratishd.com",[135,173,182]],["noweconomy.live",135],["naaree.com",[135,173]],["cda-hd.cc",135],["hqq.to",[135,174,190]],["tv-tokyo.co.jp",135],["arti-definisi-pengertian.info",135],["webwereld.nl",137],["palemoon.org",138],["wheel-size.com",139],["aoezone.net",140],["radioony.fm",141],["mexiconewsdaily.com",142],["technologyreview.com",143],["bdcraft.net",144],["wired.co.uk",145],["gq-magazine.co.uk",145],["glamourmagazine.co.uk",145],["youtube.com",146],["buienradar.nl",147],["watson.de",148],["clk.ink",149],["zerodot1.gitlab.io",[150,151]],["1009thecat.com",152],["1013katy.com",152],["1013themix.com",152],["1015jackfm.com",152],["1015khits.com",152],["1015thefox.com",152],["1017thebeach.com",152],["1017theteam.com",152],["1019hot.com",152],["1019online.com",152],["1019thekeg.com",152],["101thefox.net",152],["101wkqx.com",152],["1021nashicon.com",152],["1021thefox.com",152],["1023thewolf.com",152],["1025jackfm.com",152],["1027thevibe.com",152],["1029nashicon.com",152],["102thebear.com",152],["1031nowfm.com",152],["1031radiom.com",152],["1035memphis.com",152],["1035thegame.com",152],["1035wrbo.com",152],["1037nash.com",152],["1039bobfm.com",152],["1039wvbo.com",152],["1041wdlt.com",152],["1043thebridge.com",152],["1043thebridge.net",152],["1043thevibe.com",152],["1045thedan.com",152],["1045thezone.com",152],["1045wjjk.com",152],["1047krez.com",152],["1049nashicon.com",152],["1049thehits.com",152],["104thehawk.com",152],["1050talk.com",152],["1053classichits.com",152],["1053hotfm.com",152],["1053thebear.com",152],["1053thepoint.com",152],["1053thepoint.net",152],["1053wow.com",152],["1055kbuck.com",152],["1055thecat.com",152],["1057kokz.com",152],["1057nowfm.com",152],["1057thebear.com",152],["1057thex.com",152],["1057thexrocks.com",152],["1061theunderground.com",152],["1063spinfm.com",152],["1063thevibe.com",152],["1063wovo.com",152],["1065theticket.com",152],["1067thekrewe.com",152],["106x.com",152],["1070wnct.com",152],["1071bobfm.com",152],["1071thepeak.com",152],["1071thepoint.com",152],["1073wsjy.com",152],["1075nowfm.com",152],["1075thegame.com",152],["1077lakefm.com",152],["1077thebone.com",152],["1077theisland.com",152],["1079nashicon.com",152],["107countrypsk.com",152],["107nashicon.com",152],["1090kaay.com",152],["1220wkrs.com",152],["1230espnsports.com",152],["1230theteam.com",152],["1280wnam.com",152],["1290wlby.com",152],["1320thefan.com",152],["1340wmsa.com",152],["1430wcmy.com",152],["1450kven.com",152],["1480kyos.com",152],["1490wosh.com",152],["1510kga.com",152],["1590walg.com",152],["1620thezone.com",152],["1700thechamp.com",152],["2hoursmattpinfield.com",152],["600wrqx.com",152],["600wsom.com",152],["610knml.com",152],["630wpro.com",152],["640wxsm.com",152],["660wxqw.com",152],["680thefan.com",152],["770kkob.com",152],["790business.com",152],["790wpic.com",152],["810whb.com",152],["860kkat.com",152],["860utahsbigtalker.com",152],["900theticket.com",152],["921theticket.com",152],["923krst.com",152],["923thewolf.com",152],["925nashicon.com",152],["925thebear.com",152],["925thewolf.com",152],["927bobfm.com",152],["929peakfm.com",152],["929thewave.com",152],["929wbpm.com",152],["92kqrs.com",152],["92profm.com",152],["92qnashville.com",152],["931nashicon.com",152],["931thebeat.com",152],["933nashicon.com",152],["935nashfm.com",152],["935wrqn.com",152],["937nashicon.com",152],["937nowfm.com",152],["937themountain.com",152],["939northpoleradio.com",152],["939theville.com",152],["939xindy.com",152],["93q.com",152],["93wkct.com",152],["93x.com",152],["940wfaw.com",152],["941ksky.com",152],["941thebear.com",152],["941thehits.com",152],["945thedrive.com",152],["945thehawkradio.com",152],["947qdr.com",152],["947wls.com",152],["949kcmo.com",152],["949radiojondeek.com",152],["949starcountry.com",152],["949theoutlaw.com",152],["94rockradio.net",152],["951nashfm.com",152],["951kbby.com",152],["953hlf.com",152],["953thebeach.com",152],["953thescore.com",152],["955bobfm.com",152],["955glo.com",152],["955nashicon.com",152],["955thefan.com",152],["955thevibe.com",152],["957kboy.com",152],["957kpur.com",152],["957nashicon.com",152],["957thevibe.com",152],["957thewolfonline.com",152],["959therocket.com",152],["95sx.com",152],["95wiil.com",152],["95x.com",152],["961bbb.com",152],["961jamz.com",152],["961sox.com",152],["961wsox.com",152],["963nashicon.com",152],["963thezone.com",152],["963wdvd.com",152],["967shinefm.com",152],["969lacaliente.com",152],["969thewolf.com",152],["96key.com",152],["96kzel.com",152],["973eagle.com",152],["973nashfm.com",152],["975kabx.com",152],["975thevibe.com",152],["975wabd.com",152],["979nashfm.com",152],["979espnradio.com",152],["979nashicon.com",152],["979wvok.com",152],["979x.com",152],["97bht.com",152],["97rock.com",152],["980waav.com",152],["980wxlm.com",152],["981thebeat.com",152],["981themax.com",152],["981thevalley.com",152],["983nashicon.com",152],["983thekeg.com",152],["983vibe.com",152],["983wlcs.com",152],["985kissfm.net",152],["989magicfm.com",152],["989thebridge.com",152],["98theticket.com",152],["993kjoy.com",152],["995thejock.com",152],["995thewolf.com",152],["997cyk.com",152],["997cyk.org",152],["997kmjj.com",152],["997themix.com",152],["997wpro.com",152],["997wtn.com",152],["999thebuzz.com",152],["999thefoxrocks.com",152],["999thehawk.com",152],["99x.com",152],["kjmo.com",152],["nashfm100.com",152],["nashfm923krst.com",152],["nashfm1033.com",152],["nashfm1055.com",152],["nashfm929.com",152],["nashfm931.com",152],["nashfm941.com",152],["nashfm949.com",152],["nashfm981.com",152],["nashfmwisconsin.com",152],["nashicon989.com",152],["v100rocks.com",152],["albanymagic.com",152],["alice1077.com",152],["allthehitsb951.com",152],["alt1019.com",152],["alt1049albany.com",152],["alt2k.com",152],["alt923.com",152],["alt98.com",152],["am630.net",152],["amarillosrockstation.com",152],["americanpatriotmedia.com",152],["annarbors107one.com",152],["atlantasrockstation.com",152],["atlsportsx.com",152],["b106fm.com",152],["b1073.com",152],["b95.com",152],["b979.net",152],["b98.com",152],["b985slo.com",152],["b987.com",152],["bakersfieldespn.com",152],["bakersfieldespnsports.com",152],["beach985.com",152],["beachboogieandblues.com",152],["bear104.com",152],["big1013.com",152],["bigcheese1079.com",152],["bigcountry1073.com",152],["bigdawg985.com",152],["bigdog1067.com",152],["bigfrog101.com",152],["bigfroggy1053.com",152],["bigtalk1490.com",152],["blairgarner.com",152],["blazin1023.com",152],["blazin923.com",152],["bloomingtonhits.com",152],["bobfmspringfield.com",152],["bowlinggreensam.com",152],["bull973.com",152],["bxr.com",152],["caperadio1550.com",152],["catcountry.com",152],["catcountry96.com",152],["catcountryvermont.com",152],["cbssports1430.com",152],["cbssportserie.com",152],["cbssportsharrisburg.com",152],["cbssportsradio1430.com",152],["chicothunderheads.com",152],["christmas989.com",152],["ckrv.com",152],["classicfox.com",152],["classichits1033.com",152],["classichitsmy1059.com",152],["classichitswnyq.com",152],["classy100.com",152],["coast1013.com",152],["coast973.com",152],["country105fm.net",152],["countrycountdownusa.com",152],["countrylegends1059.com",152],["countrymi.com",152],["coyote1025.com",152],["cumulusdigital.com",152],["digitalsolutions201.com",152],["e93fm.com",152],["eagle97.com",152],["eagle993.com",152],["easy991.com",152],["ed.fm",152],["elizabethtownradio.com",152],["energy939indy.com",152],["espn1320columbia.com",152],["espn910.com",152],["espnhonolulu.com",152],["espnlouisville.com",152],["espnlv.com",152],["espnradio1280.com",152],["espnradio927.com",152],["espnradio941.com",152],["espnsyracuse.com",152],["espnur.com",152],["espnwestpalm.com",152],["espnwilmington.com",152],["fly92.com",152],["fly923.com",152],["fm102milwaukee.com",152],["fm102one.com",152],["fonzfm.com",152],["forevereaston.com",152],["forevermediayork.com",152],["fox969.com",152],["foxcincinnati.com",152],["foxsportsredding.com",152],["froggy1003.com",152],["froggy101fm.com",152],["froggy981.com",152],["froggy99.net",152],["froggycountry.net",152],["froggyland.com",152],["fuego1029.com",152],["fun1013.com",152],["fun969fm.com",152],["generations1023.com",152],["glory985.com",152],["go106.com",152],["goradioheartland.com",152],["gospel900.com",152],["gulf104.com",152],["heaven1460.com",152],["heaven983.com",152],["hitkicker997.com",152],["hitpage.com",152],["hits931fm.com",152],["hits96.com",152],["hits965.com",152],["hot1005.com",152],["hot100blono.com",152],["hot100nrv.com",152],["hot101.com",152],["hot102.net",152],["hot1033.com",152],["hot1039.com",152],["hot1047fm.com",152],["hot1057.com",152],["hot1063.com",152],["hot1067fm.com",152],["hot1067pa.com",152],["hot1077radio.com",152],["hot92and100.com",152],["hot933hits.com",152],["hot941.com",152],["hot967fm.com",152],["hvradionet.com",152],["i973hits.com",152],["ilovethehits.com",152],["indysmix.com",152],["jammin999fm.com",152],["jamz963.com",152],["jox2fm.com",152],["joxfm.com",152],["k100country.com",152],["k104online.com",152],["k105country.com",152],["k92radio.com",152],["k983.com",152],["kabc.com",152],["kaok.com",152],["kaperadio1550.com",152],["katm.com",152],["katt.com",152],["kbcy.com",152],["kber.com",152],["kboi.com",152],["kbul.com",152],["kbull93.com",152],["kcchiefsradio.com",152],["kcheradio.com",152],["kcmotalkradio.com",152],["kcmxam.com",152],["kennradio.com",152],["kernradio.com",152],["kesn1033.com",152],["key101fm.com",152],["kfru.com",152],["kftx.com",152],["kgfm.com",152],["kgfw.com",152],["kggo.com",152],["kgmo.com",152],["kgoradio.com",152],["khay.com",152],["khfm.com",152],["khfm.org",152],["khit1075.com",152],["khop.com",152],["khvl.com",152],["kiimfm.com",152],["kiss-1031.com",152],["kix1029.com",152],["kix106.com",152],["kix96.com",152],["kizn.com",152],["kjjy.com",152],["kjoy.com",152],["kkcy.com",152],["kkfm.com",152],["kkgb.com",152],["kkgl.com",152],["kkoh.com",152],["klif.com",152],["klik1240.com",152],["klin.com",152],["klur.com",152],["kmaj.com",152],["kmaj1440.com",152],["kmez1029.com",152],["kmjnow.com",152],["knbr.com",152],["knek.com",152],["kobfm.com",152],["kpla.com",152],["kpur107.com",152],["kqfc.com",152],["kqky.com",152],["kqms.com",152],["kqxy.com",152],["krbe.com",152],["krmd.com",152],["krny.com",152],["krrq.com",152],["krush925.com",152],["kruz1033.com",152],["ksam1017.com",152],["kscrhits.com",152],["kscs.com",152],["ksfo.com",152],["kshasta.com",152],["ksks.com",152],["ksmb.com",152],["ktcx.com",152],["ktik.com",152],["ktop1490.com",152],["ktucam.com",152],["kubaradio.com",152],["kubb.com",152],["kugn.com",152],["kuzz.com",152],["kuzzradio.com",152],["kvor.com",152],["kwin.com",152],["kwwr.com",152],["kxel.com",152],["kxzz1580am.com",152],["kyis.com",152],["kykz.com",152],["kzwafm.com",152],["la103.com",152],["laindomable.com",152],["laleync.com",152],["lanuevaomaha.com",152],["lite102.com",152],["literock105fm.com",152],["love105fm.com",152],["lvfoxsports.com",152],["magic1029fm.com",152],["magic1039fm.com",152],["magic1069.com",152],["magic1073.com",152],["magic1073fm.com",152],["magic93fm.com",152],["magic943fm.com",152],["magic979wtrg.com",152],["magic995abq.com",152],["majic97monroe.com",152],["majicspace.com",152],["maverick1023.com",152],["max94one.com",152],["maxrocks.net",152],["mega979.com",152],["mgeradio.com",152],["milwaukeesparty.com",152],["mix103.com",152],["mix1077albany.com",152],["mix965.net",152],["modernrock987.com",152],["montanassuperstation.com",152],["movin993.com",152],["muskegonnashicon.com",152],["my1059.com",152],["my961.com",152],["myblono.com",152],["mycolumbiabasin.com",152],["myfroggy95.com",152],["mykiss973.com",152],["mymagic106.com",152],["mymix1051.com",152],["mymix1061.com",152],["mymix961.com",152],["mystar98.com",152],["nashcountrydaily.com",152],["nashdetroit.com",152],["nashfm1007.com",152],["nashfm1011.com",152],["nashfm1017.com",152],["nashfm1025.com",152],["nashfm1027.com",152],["nashfm1061.com",152],["nashfm1065.com",152],["nashfm923.com",152],["nashfm937.com",152],["nashfm943.com",152],["nashfm951.com",152],["nashfm973.com",152],["nashfm991.com",152],["nashfmgreenbay.com",152],["nashfmsjo.com",152],["nashnightslive.net",152],["nashpensacola.com",152],["ncsportsradio.com",152],["nepasespnradio.com",152],["neuhoffmedia.com",152],["neuhoffmedialafayette.com",152],["newcountry963.com",152],["newsradio1029.com",152],["newsradio1440.com",152],["newsradioflorida.com",152],["newsradiokkob.com",152],["newsserver1.com",152],["newsserver2.com",152],["newsserver3.com",152],["newstalk1030.com",152],["newstalk1290koil.com",152],["newstalk730.com",152],["newstalk987.com",152],["newstalkwsba.com",152],["newswebradiocompany.net",152],["now937.com",152],["nrgmedia.com",152],["nrq.com",152],["og979.com",152],["okiecountry1017.com",152],["oldiesz104.com",152],["ottawaradio.net",152],["pensacolasjet.com",152],["peorias923.com",152],["picklefm.com",152],["pikefm.com",152],["planet1067.com",152],["pmbbroadcasting.com",152],["pmbradio.com",152],["power1021.com",152],["power103.com",152],["power1057.com",152],["power1069fm.com",152],["power923.com",152],["power94radio.com",152],["power955.com",152],["powerhits95.com",152],["powerslc.com",152],["praise1025fm.com",152],["purerock96.com",152],["q1005.com",152],["q1031fm.com",152],["q105.fm",152],["q1055.com",152],["q1061.com",152],["q106dot5.com",152],["q973radio.com",152],["q97country.com",152],["q98fm.com",152],["q997atlanta.com",152],["q99fm.com",152],["radio1039ny.com",152],["radiorockriver.com",152],["radiowoodstock.com",152],["realcountry1280whvr.com",152],["realcountryhv.com",152],["red1031.com",152],["red945.com",152],["rewind1019.com",152],["rickandsasha.com",152],["rock101.net",152],["rock1015.com",152],["rock103albany.com",152],["rock103rocks.com",152],["rock106.net",152],["rock107fm.com",152],["rock108.com",152],["rock945vt.com",152],["rockdaily.com",152],["rocknews.com",152],["rockofsavannah.com",152],["rockofsavannah.net",152],["softrock941.com",152],["southernillinoisnow.com",152],["southernsportstoday.com",152],["sportsanimal920.com",152],["sportsanimalabq.com",152],["sportscapitoldc.com",152],["sportshubtriad.com",152],["sportsradio1270.com",152],["sportsradio1440.com",152],["sportsradio1560.com",152],["sportsradio590am.com",152],["sportsradio740.com",152],["sportsradio967.com",152],["sportsradio970.com",152],["sportsradiobeaumont.com",152],["sportsradioberks.com",152],["sportsradiownml.com",152],["star98.net",152],["starfm1023.com",152],["starsplash.com",152],["stevegormanrocks.com",152],["sunny1031.com",152],["sunny1069fm.com",152],["sunny923.com",152],["sunny983.com",152],["sunnymuskegon.com",152],["supertalk1570.com",152],["sweet985.com",152],["talk104fm.com",152],["talk995.com",152],["talkradio1007.com",152],["tbhpod.com",152],["teammyrtlebeach.com",152],["test107.com",152],["thebear925.com",152],["thebigjab.com",152],["thebigstation93blx.com",152],["theblairgarnershow.com",152],["theconclave.com",152],["thefan1075.com",152],["thefanfm.com",152],["thegame541.com",152],["thehippo.com",152],["thehot1039.com",152],["thenewhotfm.com",152],["thenewpulsefm.com",152],["thepointontheweb.com",152],["therebelrocks.com",152],["therocket951.com",152],["therockstationz93.com",152],["thescore1260.com",152],["thesportsanimal.com",152],["theticket.com",152],["theticket1007.com",152],["theticket102.com",152],["theticket1590.com",152],["theticketmi.com",152],["thetybentlishow.com",152],["thevalley981.com",152],["thewolf1051.com",152],["thewolf951.com",152],["thisisqmusic.com",152],["thunder1073.com",152],["triadsports.com",152],["tuligaradio.com",152],["umpsports.com",152],["v100fm.com",152],["v1033.com",152],["vermilioncountyfirst.com",152],["vermillioncountyfirst.com",152],["w3dcountry.com",152],["w4country.com",152],["wa1a.com",152],["wabcradio.com",152],["walk975.com",152],["walkradio.com",152],["warm1033.com",152],["warm98.com",152],["waysam.com",152],["wbap.com",152],["wbbw.com",152],["wbmq.net",152],["wbnq.com",152],["wbpm929.com",152],["wbpmfm.com",152],["wbwn.com",152],["wcbm.com",152],["wceiradio.com",152],["wcfx.com",152],["wchv.com",152],["wclg.com",152],["wcoapensacola.com",152],["wcpqfm.com",152],["wcpt820.com",152],["wcpt820.net",152],["wcpt820am.com",152],["wcpt820am.net",152],["wcptam.com",152],["wcptam.net",152],["wcptamfm.com",152],["wcptamfm.net",152],["wcptamfm.org",152],["wcpyfm.com",152],["wctk.com",152],["wddoam.com",152],["wden.com",152],["wdml.com",152],["wdst.com",152],["wdst.org",152],["wdzz.com",152],["wedg.com",152],["werkfm.net",152],["werkradio.com",152],["wfasam.com",152],["wfav951.com",152],["wfmd.com",152],["wfms.com",152],["wfnc640am.com",152],["wfre.com",152],["wftw.com",152],["wgh1310.com",152],["wghsolidgold.com",152],["wglx.com",152],["wgni.com",152],["wgow.com",152],["wgowam.com",152],["wgrr.com",152],["whdg.com",152],["wheelz1045.com",152],["whli.com",152],["whrpfm.com",152],["whtt.com",152],["whud.com",152],["wild1029.com",152],["wild1049hd.com",152],["wild1061.com",152],["wild993fm.com",152],["wildcatsradio1290.com",152],["wink104.com",152],["winxfm.com",152],["wiog.com",152],["wiov.com",152],["wiov985.com",152],["wivk.com",152],["wivr1017.com",152],["wizn.com",152],["wjbc.com",152],["wjcw.com",152],["wjez.com",152],["wjjr.net",152],["wjoxam.com",152],["wjr.com",152],["wkav.com",152],["wkbethepoint.com",152],["wkga975.com",152],["wkhx.com",152],["wkmoradio.com",152],["wkol.com",152],["wkrs.com",152],["wkrufm.com",152],["wksm.com",152],["wkydeportes.com",152],["wlaq1410.com",152],["wlav.com",152],["wlbc.com",152],["wlevradio.com",152],["wlkwradio.com",152],["wlok.com",152],["wlsam.com",152],["wlum.com",152],["wlup.com",152],["wlwi.com",152],["wmac-am.com",152],["wmal.com",152],["wmqa.com",152],["wncv.com",152],["wogb.fm",152],["woko.com",152],["womg.com",152],["woodstockbroadcasting.com",152],["woodstockcommunication.com",152],["woodstockradio.net",152],["woodstocktv.net",152],["wovo1063.com",152],["wovofm.com",152],["wqut.com",152],["wqvealbany.com",152],["wrganews.com",152],["wrgm.com",152],["wrlo.com",152],["wrr101.com",152],["wrul.com",152],["wsba910.com",152],["wsfl.com",152],["wsjssports.com",152],["wskz.com",152],["wsyb1380am.com",152],["wtka.com",152],["wtma.com",152],["wtrxsports.com",152],["wttlradio.com",152],["wuuqradio.com",152],["wvel.com",152],["wvli927.com",152],["wvlkam.com",152],["wvnn.com",152],["wwck.com",152],["wwki.com",152],["wwqq101.com",152],["wxfx.com",152],["wxkr.com",152],["wxpkfm.com",152],["wynn1063.com",152],["wzpl.com",152],["wzyp.com",152],["wzzl.com",152],["x1051kc.com",152],["x95radio.com",152],["xs961.com",152],["xtrasports1300.com",152],["y-103.com",152],["y101hits.com",152],["y102montgomery.com",152],["y1065.com",152],["yesfm.net",152],["z1023online.com",152],["z1029.com",152],["z1075.com",152],["z937.com",152],["z93jamz.com",152],["z96.com",152],["z971.com",152],["zone1150.com",152],["zrock103.com",152],["zrockfm.com",152],["windows101tricks.com",153],["waaw.tv",154],["hqq.tv",[154,155]],["fontsfree.pro",156],["radarbox.com",158],["adslayuda.com",159],["avdelphi.com",160],["ds2play.com",162],["vidembed.me",162],["mzzcloud.life",162],["videobot.stream",162],["justswallows.net",162],["onscreensvideo.com",162],["katerionews.com",162],["telenovelas-turcas.com.es",162],["kmo.to",162],["jeniusplay.com",[162,230]],["4x4earth.com",69],["jootc.com",[163,164]],["photobank.mainichi.co.jp",165],["tbs.co.jp",166],["sovetromantica.com",168],["longecity.org",169],["magnet-novels.com",170],["torrentlawyer.com",[170,175,179,180]],["fruit01.xyz",171],["lyricstranslate.com",172],["hardcoregames.ca",173],["allsmo.com",173],["themosvagas.com.br",173],["urbharat.xyz",173],["sportnews.to",[173,182]],["2embed.ru",174],["sbasian.pro",174],["miraculous.to",[174,193]],["vtplayer.net",174],["pepperlive.info",174],["unbiasedsenseevent.com",174],["maxt.church",174],["cool-etv.net",174],["vgembed.com",[174,224]],["photopea.com",174],["szkolawohyn.pl",175],["virpe.cc",175],["gmarket.co.kr",[175,180]],["paesifantasma.it",176],["talpo.it",176],["quora.com",177],["youmath.it",181],["renditepassive.net",[183,184,185,186,187]],["360doc.com",188],["logonews.cn",189],["thetodaypost.com",[190,195,199]],["cloudcomputingtopics.net",190],["0123movies.ch",[190,195,199,228]],["epn.bz",66],["affbank.com",31],["gardenia.net",[191,192]],["novelpia.com",[194,195]],["blueraindrops.com",197],["animecruzers.com",198],["descargatepelis.com",199],["news.ntv.co.jp",199],["bestjavporn.com",200],["mm9841.cc",200],["ggwash.org",[201,202]],["cinegrabber.com",205],["layarkacaxxi.icu",206],["readawrite.com",[207,208,209,210,211,212,213]],["dropgalaxy.com",214],["morosedog.gitlab.io",215],["indianhealthyrecipes.com",217],["tarnkappe.info",218],["heavyfetish.com",219],["joysound.com",[220,221,222]],["colors.sonicthehedgehog.com",[222,225]],["leakedzone.com",226],["mehoathinh2.com",227],["powerline.io",229],["moviesapi.club",231],["bestx.stream",231],["watchx.top",231],["enduro-mtb.com",232],["kukaj.io",233],["animesaga.in",234],["animesuge.to",235],["aniwave.to",235],["thejakartapost.com",236],["fullxh.com",237],["megaxh.com",237],["unlockxh4.com",237],["xhadult2.com",237],["xhadult3.com",237],["xhadult4.com",237],["xhadult5.com",237],["xhamster46.com",237],["xhday.com",237],["xhday1.com",237],["xhmoon5.com",237],["xhplanet1.com",237],["xhplanet2.com",237],["xhreal2.com",237],["xhreal3.com",237],["xhtab2.com",237],["xhvictory.com",237],["xhwebsite.com",237],["xhwebsite2.com",237],["xhwide1.com",237],["xhwide8.com",237],["marinetraffic.com",238],["ymovies.vip",239],["aniwatch.to",239],["megacloud.tv",239],["stbnetu.xyz",239],["netuplayer.top",239],["androidpolice.com",240],["makeuseof.com",240],["movieweb.com",240],["xda-developers.com",240],["digminecraft.com",241]]);

const entitiesMap = new Map([["18comic",19],["earnload",149],["hindipix",[154,155]],["doods",162],["videovard",162],["123movies",174],["brainly",196],["ask4movie",[203,204]],["bluemediafile",223],["vidplay",235],["hamsterix",237],["xhamster",237],["xhamster1",237],["xhamster10",237],["xhamster11",237],["xhamster12",237],["xhamster13",237],["xhamster14",237],["xhamster15",237],["xhamster16",237],["xhamster17",237],["xhamster18",237],["xhamster19",237],["xhamster20",237],["xhamster2",237],["xhamster3",237],["xhamster4",237],["xhamster5",237],["xhamster7",237],["xhamster8",237]]);

const exceptionsMap = new Map([["m.rp5.ru",[95]],["m.rp5.by",[95]],["m.rp5.kz",[95]],["m.rp5.co.uk",[95]],["m.rp5.md",[95]]]);

/******************************************************************************/

function setConstant(
    ...args
) {
    setConstantCore(false, ...args);
}

function setConstantCore(
    trusted = false,
    chain = '',
    cValue = ''
) {
    if ( chain === '' ) { return; }
    const safe = safeSelf();
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 3);
    function setConstant(chain, cValue) {
        const trappedProp = (( ) => {
            const pos = chain.lastIndexOf('.');
            if ( pos === -1 ) { return chain; }
            return chain.slice(pos+1);
        })();
        if ( trappedProp === '' ) { return; }
        const thisScript = document.currentScript;
        const cloakFunc = fn => {
            safe.Object_defineProperty(fn, 'name', { value: trappedProp });
            const proxy = new Proxy(fn, {
                defineProperty(target, prop) {
                    if ( prop !== 'toString' ) {
                        return Reflect.defineProperty(...arguments);
                    }
                    return true;
                },
                deleteProperty(target, prop) {
                    if ( prop !== 'toString' ) {
                        return Reflect.deleteProperty(...arguments);
                    }
                    return true;
                },
                get(target, prop) {
                    if ( prop === 'toString' ) {
                        return function() {
                            return `function ${trappedProp}() { [native code] }`;
                        }.bind(null);
                    }
                    return Reflect.get(...arguments);
                },
            });
            return proxy;
        };
        if ( cValue === 'undefined' ) {
            cValue = undefined;
        } else if ( cValue === 'false' ) {
            cValue = false;
        } else if ( cValue === 'true' ) {
            cValue = true;
        } else if ( cValue === 'null' ) {
            cValue = null;
        } else if ( cValue === "''" || cValue === '' ) {
            cValue = '';
        } else if ( cValue === '[]' || cValue === 'emptyArr' ) {
            cValue = [];
        } else if ( cValue === '{}' || cValue === 'emptyObj' ) {
            cValue = {};
        } else if ( cValue === 'noopFunc' ) {
            cValue = cloakFunc(function(){});
        } else if ( cValue === 'trueFunc' ) {
            cValue = cloakFunc(function(){ return true; });
        } else if ( cValue === 'falseFunc' ) {
            cValue = cloakFunc(function(){ return false; });
        } else if ( /^-?\d+$/.test(cValue) ) {
            cValue = parseInt(cValue);
            if ( isNaN(cValue) ) { return; }
            if ( Math.abs(cValue) > 0x7FFF ) { return; }
        } else if ( trusted ) {
            if ( cValue.startsWith('{') && cValue.endsWith('}') ) {
                try { cValue = safe.JSON_parse(cValue).value; } catch(ex) { return; }
            }
        } else {
            return;
        }
        if ( extraArgs.as !== undefined ) {
            const value = cValue;
            if ( extraArgs.as === 'function' ) {
                cValue = ( ) => value;
            } else if ( extraArgs.as === 'callback' ) {
                cValue = ( ) => (( ) => value);
            } else if ( extraArgs.as === 'resolved' ) {
                cValue = Promise.resolve(value);
            } else if ( extraArgs.as === 'rejected' ) {
                cValue = Promise.reject(value);
            }
        }
        let aborted = false;
        const mustAbort = function(v) {
            if ( trusted ) { return false; }
            if ( aborted ) { return true; }
            aborted =
                (v !== undefined && v !== null) &&
                (cValue !== undefined && cValue !== null) &&
                (typeof v !== typeof cValue);
            return aborted;
        };
        // https://github.com/uBlockOrigin/uBlock-issues/issues/156
        //   Support multiple trappers for the same property.
        const trapProp = function(owner, prop, configurable, handler) {
            if ( handler.init(configurable ? owner[prop] : cValue) === false ) { return; }
            const odesc = Object.getOwnPropertyDescriptor(owner, prop);
            let prevGetter, prevSetter;
            if ( odesc instanceof Object ) {
                owner[prop] = cValue;
                if ( odesc.get instanceof Function ) {
                    prevGetter = odesc.get;
                }
                if ( odesc.set instanceof Function ) {
                    prevSetter = odesc.set;
                }
            }
            try {
                safe.Object_defineProperty(owner, prop, {
                    configurable,
                    get() {
                        if ( prevGetter !== undefined ) {
                            prevGetter();
                        }
                        return handler.getter(); // cValue
                    },
                    set(a) {
                        if ( prevSetter !== undefined ) {
                            prevSetter(a);
                        }
                        handler.setter(a);
                    }
                });
            } catch(ex) {
            }
        };
        const trapChain = function(owner, chain) {
            const pos = chain.indexOf('.');
            if ( pos === -1 ) {
                trapProp(owner, chain, false, {
                    v: undefined,
                    init: function(v) {
                        if ( mustAbort(v) ) { return false; }
                        this.v = v;
                        return true;
                    },
                    getter: function() {
                        return document.currentScript === thisScript
                            ? this.v
                            : cValue;
                    },
                    setter: function(a) {
                        if ( mustAbort(a) === false ) { return; }
                        cValue = a;
                    }
                });
                return;
            }
            const prop = chain.slice(0, pos);
            const v = owner[prop];
            chain = chain.slice(pos + 1);
            if ( v instanceof Object || typeof v === 'object' && v !== null ) {
                trapChain(v, chain);
                return;
            }
            trapProp(owner, prop, true, {
                v: undefined,
                init: function(v) {
                    this.v = v;
                    return true;
                },
                getter: function() {
                    return this.v;
                },
                setter: function(a) {
                    this.v = a;
                    if ( a instanceof Object ) {
                        trapChain(a, chain);
                    }
                }
            });
        };
        trapChain(window, chain);
    }
    runAt(( ) => {
        setConstant(chain, cValue);
    }, extraArgs.runAt);
}

function runAt(fn, when) {
    const intFromReadyState = state => {
        const targets = {
            'loading': 1,
            'interactive': 2, 'end': 2, '2': 2,
            'complete': 3, 'idle': 3, '3': 3,
        };
        const tokens = Array.isArray(state) ? state : [ state ];
        for ( const token of tokens ) {
            const prop = `${token}`;
            if ( targets.hasOwnProperty(prop) === false ) { continue; }
            return targets[prop];
        }
        return 0;
    };
    const runAt = intFromReadyState(when);
    if ( intFromReadyState(document.readyState) >= runAt ) {
        fn(); return;
    }
    const onStateChange = ( ) => {
        if ( intFromReadyState(document.readyState) < runAt ) { return; }
        fn();
        safe.removeEventListener.apply(document, args);
    };
    const safe = safeSelf();
    const args = [ 'readystatechange', onStateChange, { capture: true } ];
    safe.addEventListener.apply(document, args);
}

function safeSelf() {
    if ( scriptletGlobals.has('safeSelf') ) {
        return scriptletGlobals.get('safeSelf');
    }
    const self = globalThis;
    const safe = {
        'Array_from': Array.from,
        'Error': self.Error,
        'Function_toStringFn': self.Function.prototype.toString,
        'Function_toString': thisArg => safe.Function_toStringFn.call(thisArg),
        'Math_floor': Math.floor,
        'Math_max': Math.max,
        'Math_min': Math.min,
        'Math_random': Math.random,
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
        'XMLHttpRequest': self.XMLHttpRequest,
        'addEventListener': self.EventTarget.prototype.addEventListener,
        'removeEventListener': self.EventTarget.prototype.removeEventListener,
        'fetch': self.fetch,
        'JSON': self.JSON,
        'JSON_parseFn': self.JSON.parse,
        'JSON_stringifyFn': self.JSON.stringify,
        'JSON_parse': (...args) => safe.JSON_parseFn.call(safe.JSON, ...args),
        'JSON_stringify': (...args) => safe.JSON_stringifyFn.call(safe.JSON, ...args),
        'log': console.log.bind(console),
        uboLog(...args) {
            if ( scriptletGlobals.has('canDebug') === false ) { return; }
            if ( args.length === 0 ) { return; }
            if ( `${args[0]}` === '' ) { return; }
            this.log('[uBO]', ...args);
        },
        initPattern(pattern, options = {}) {
            if ( pattern === '' ) {
                return { matchAll: true };
            }
            const expect = (options.canNegate !== true || pattern.startsWith('!') === false);
            if ( expect === false ) {
                pattern = pattern.slice(1);
            }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match !== null ) {
                return {
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            if ( options.flags !== undefined ) {
                return {
                    re: new this.RegExp(pattern.replace(
                        /[.*+?^${}()|[\]\\]/g, '\\$&'),
                        options.flags
                    ),
                    expect,
                };
            }
            return { pattern, expect };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            if ( details.re ) {
                return this.RegExp_test.call(details.re, haystack) === details.expect;
            }
            return haystack.includes(details.pattern) === details.expect;
        },
        patternToRegex(pattern, flags = undefined, verbatim = false) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                const reStr = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                return new RegExp(verbatim ? `^${reStr}$` : reStr, flags);
            }
            try {
                return new RegExp(match[1], match[2] || undefined);
            }
            catch(ex) {
            }
            return /^/;
        },
        getExtraArgs(args, offset = 0) {
            const entries = args.slice(offset).reduce((out, v, i, a) => {
                if ( (i & 1) === 0 ) {
                    const rawValue = a[i+1];
                    const value = /^\d+$/.test(rawValue)
                        ? parseInt(rawValue, 10)
                        : rawValue;
                    out.push([ a[i], value ]);
                }
                return out;
            }, []);
            return Object.fromEntries(entries);
        },
    };
    scriptletGlobals.set('safeSelf', safe);
    return safe;
}

/******************************************************************************/

const hnParts = [];
try { hnParts.push(...document.location.hostname.split('.')); }
catch(ex) { }
const hnpartslen = hnParts.length;
if ( hnpartslen === 0 ) { return; }

const todoIndices = new Set();
const tonotdoIndices = [];

// Exceptions
if ( exceptionsMap.size !== 0 ) {
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        const excepted = exceptionsMap.get(hn);
        if ( excepted ) { tonotdoIndices.push(...excepted); }
    }
    exceptionsMap.clear();
}

// Hostname-based
if ( hostnamesMap.size !== 0 ) {
    const collectArgIndices = hn => {
        let argsIndices = hostnamesMap.get(hn);
        if ( argsIndices === undefined ) { return; }
        if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
        for ( const argsIndex of argsIndices ) {
            if ( tonotdoIndices.includes(argsIndex) ) { continue; }
            todoIndices.add(argsIndex);
        }
    };
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        collectArgIndices(hn);
    }
    collectArgIndices('*');
    hostnamesMap.clear();
}

// Entity-based
if ( entitiesMap.size !== 0 ) {
    const n = hnpartslen - 1;
    for ( let i = 0; i < n; i++ ) {
        for ( let j = n; j > i; j-- ) {
            const en = hnParts.slice(i,j).join('.');
            let argsIndices = entitiesMap.get(en);
            if ( argsIndices === undefined ) { continue; }
            if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
            for ( const argsIndex of argsIndices ) {
                if ( tonotdoIndices.includes(argsIndex) ) { continue; }
                todoIndices.add(argsIndex);
            }
        }
    }
    entitiesMap.clear();
}

// Apply scriplets
for ( const i of todoIndices ) {
    try { setConstant(...argsList[i]); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

// Inject code

// https://bugzilla.mozilla.org/show_bug.cgi?id=1736575
//   'MAIN' world not yet supported in Firefox, so we inject the code into
//   'MAIN' ourself when environment in Firefox.

const targetWorld = 'MAIN';

// Not Firefox
if ( typeof wrappedJSObject !== 'object' || targetWorld === 'ISOLATED' ) {
    return uBOL_setConstant();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_setConstant = cloneInto([
            [ '(', uBOL_setConstant.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_setConstant);
        url = page.URL.createObjectURL(blob);
        const doc = page.document;
        script = doc.createElement('script');
        script.async = false;
        script.src = url;
        (doc.head || doc.documentElement || doc).append(script);
    } catch (ex) {
        console.error(ex);
    }
    if ( url ) {
        if ( script ) { script.remove(); }
        page.URL.revokeObjectURL(url);
    }
    delete page.uBOL_setConstant;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
