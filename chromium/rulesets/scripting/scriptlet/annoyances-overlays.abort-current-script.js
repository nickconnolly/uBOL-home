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
const uBOL_abortCurrentScript = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["$","advBlock"],["$","showAd"],["document.createElement","/admiral|String\\.fromCharCode\\(97,( )*?100,( )*?109,( )*?105,( )*?114,( )*?97,( )*?108\\)|a%64%6d%69%72%61%6c|adm%69%72%61l/"],["document.createElement","googletag"],["window.document.getElementById","s65c"],["getComputedStyle","adsbygoogle"],["setTimeout","none"],["onload","adsbygoogle"],["document.getElementById","').style.display='block';"],["RegExp","AdvBot"],["$","AdBlock"],["$","!document.getElementById(btoa"],["navigator.userAgent","AdBlockOn"],["document.write","ag_adBlockerDetected"],["document.createElement","adblockInfo"],["document.getElementById","blocking = true"],["document.addEventListener","adjs"],["$","can_show_ads"],["EventTarget.prototype.addEventListener","adblockalert_status"],["_lcpdfr","renderedAnnoyance"],["document.getElementById","ad blocker"],["document.createElement","pagead2.googlesyndication.com"],["document.addEventListener","/abisuq/"],["onload","ad.offsetWidth"],["atob","-10000px"],["document.getElementById",".style.display"],["document.getElementById","flex"],["document.getElementById","adblock"],["document.getElementById",".style.display="],["$","ad"],["$","Please disable \"ad blocker\""],["$","Adblock"],["document.getElementById","adback"],["document.querySelector","getBoundingClientRect"],["EventTarget.prototype.addEventListener","window.getComputedStyle"],["JSON.parse","Adblock"],["document.getElementById","/window\\.onclick/"],["document.getElementById","/!document\\.getElementById[\\s\\S]*?innerHTML[\\s\\S]*?insertBefore/"],["jQuery","donateBoxId"],["$popup","magnificPopup"],["$","#mod-popup"],["jQuery","covid19_modal"],["$","#saveBig"],["$","modal_newsletter"],["$","FBF.modalWindow.show"],["askPermission",""],["jQuery","surveyCookieName"],["DS_Popup_1"],["$","#myModal"],["document.onselectstart"],["document.oncontextmenu"],["$","contextmenu"],["disableselect","reEnable"],["$","hidden"],["document.getElementById","advert-tester"],["document.oncopy"],["jQuery","#sign-up-popup"],["jQuery","overlay"],["document.onkeydown"],["document.getElementById","ad-blocker"],["document.getElementById",".ab_detected"],["jQuery","tweaker"],["jQuery","undefined"],["jQuery","ads"],["document.getElementById","block"],["document.addEventListener","alert"],["document.ondragstart","document.oncontextmenu"],["jQuery","document"],["document.getElementById","tester"],["document.getElementById","undefined"],["jQuery","restriction"],["document.oncontextmenu","document.onselectstart"],["message","clickIE"],["preventSelection"],["jQuery","contextmenu"],["jQuery","Drupal"],["$","blur"],["reEnable","killcopy"],["$","load"],["document.addEventListener","copy"],["document.getElementsByTagName","null"],["eval","abd"],["jQuery","ai_adb"],["document.getElementById","none"],["$","undefined"],["document.addEventListener"],["document.oncontextmenu","key"],["addEventListener","which"],["window.addEventListener","ctrlKey"],["document.createElement","adblock"],["document.getElementById","banner"],["document.getElementById","dataLayer"],["jQuery","disable_hot_keys"],["onload"],["$","offsetHeight"],["disableSelection"],["jQuery","ai_check"],["onload","contextmenu"],["document.ondragstart"],["$","copy"],["document.getElementById","adblockerdetected"],["$","juicyads"],["$","showEmailNewsletterModal"],["$","btoa"],["disableSelection","reEnable"],["$",".height"],["eval","isNaN"],["document.addEventListener","contribute"],["addEventListener","ctrlKey"],["setTimeout","newsletterPopup"],["window.oncontextmenu"],["document.onmousedown"],["event","stopPropagation"],["soclInit"],["onload","setTimeout"],["document.addEventListener","preventDefault"],["setTimeout","offsetHeight"],["disable_copy"],["disable_hot_keys"],["jQuery","copy"],["addEventListener","adsbygoogle.length"],["check","debugger"],["document.addEventListener","document.onselectstart"],["matchMedia"],["$","adBlock"],["jQuery","keydown"],["jQuery","oncontextmenu"],["String.prototype.charCodeAt","ai_"],["jQuery","preventDefault"],["$","/getScript|error:/"],["addEventListener","keydown"],["nocontextmenu"],["document.getElementById","cookie"],["document.getElementById","isMoz"],["console.clear"],["oncontextmenu","keydown"],["document.oncontextmenu","nocontextmenu"],["document.onselectstart","disableselect"],["document.querySelector","adblock"],["$","fade"],["jQuery","stopPropagation"],["update_visit_count"],["$","test"],["$","Promise"],["showAdblockerModal"],["stopPrntScr"],["$","keydown"],["console.log","devtools"],["setInterval","playAlert"],["console.clear","contextmenu"],["devtoolsDetector"],["shortcut"],["console.log","document.referer"],["document.addEventListener","onkeydown"],["disableEnterKey"],["document.getElementsByTagName","unselectable"],["document.onkeypress"],["document.addEventListener","contextmenu"],["wccp_pro_iscontenteditable"],["document.body.oncontextmenu"],["nocontext"],["runPageBugger"],["eval","contextmenu"],["ab_tests"],["jQuery","userAgent"],["reEnable"],["jQuery","wccp_pro"],["clear_body_at_all_for_extentions"],["RegExp","googlebot"],["globalThis","DisableDevtool"],["document.querySelectorAll","adblock"],["checkAdblockBait"],["RegExp","debugger"],["oncontextmenu"],["navigator","devtools"],["setInterval","stateObject"],["setTimeout","debugger"],["jQuery","keyCode"],["$","debugger"],["jQuery","devtool"],["RegExp","contextmenu"],["AudiosL10n"],["document.createElement","admiral"],["document.getElementsByTagName","admiral"],["jQuery","adsbygoogle"]];

const hostnamesMap = new Map([["minigames.mail.ru",0],["mmminigames.mail.ru",1],["ksdk.com",2],["boredpanda.com",2],["sidereel.com",[2,129]],["primagames.com",2],["antyradio.pl",2],["nypost.com",2],["allmusic.com",[2,10]],["visualcapitalist.com",2],["kxly.com",2],["thethings.com",2],["applevalleynewsnow.com",2],["minecraft-schematics.com",2],["koamnewsnow.com",2],["insider-gaming.com",2],["ktvz.com",2],["movieweb.com",2],["collider.com",2],["pocket-lint.com",2],["hotcars.com",2],["topspeed.com",2],["thegamer.com",2],["makeuseof.com",2],["screenrant.com",2],["cbr.com",2],["kare11.com",2],["calculator-online.net",2],["givemesport.com",2],["milestomemories.com",2],["epicstream.com",2],["radiozet.pl",2],["charlieintel.com",2],["momtastic.com",2],["stealthoptional.com",[2,3]],["sherdog.com",2],["timesofisrael.com",2],["gfinityesports.com",2],["teknolojioku.com",2],["siliconera.com",2],["c-span.org",2],["news8000.com",2],["twinfinite.net",2],["pwinsider.com",2],["pastes.io",2],["cheatsheet.com",2],["sportscasting.com",2],["wnd.com",2],["deseret.com",2],["pocketnow.com",2],["10play.com.au",2],["knowyourmeme.com",[2,182]],["titantv.com",2],["hfboards.com",2],["comingsoon.net",2],["playstationlifestyle.net",2],["worldpopulationreview.com",2],["nationalreview.com",[2,182]],["wrestlezone.com",[2,182]],["dualshockers.com",2],["thethaiger.com",2],["worldtravelguide.net",2],["sportskeeda.com",2],["gamerjournalist.com",2],["voetbalzone.nl",2],["theurbanlist.com",2],["golf.com",2],["xda-developers.com",[2,182]],["metv.com",2],["nbcnews.com",2],["wegotthiscovered.com",2],["savvytime.com",[2,182]],["nbcsportsedge.com",2],["haber3.com",2],["androidpolice.com",2],["news.com.au",2],["forums.radioreference.com",2],["boston.com",[2,182]],["reviewgeek.com",2],["technicpack.net",[2,182]],["theblaze.com",2],["morfix.co.il",2],["factinate.com",2],["phonearena.com",2],["stripes.com",2],["progameguides.com",2],["weatherbug.com",2],["patheos.com",2],["online-tech-tips.com",2],["digitaltrends.com",2],["helpdeskgeek.com",2],["britannica.com",[2,182]],["superherohype.com",2],["news24.com",2],["pgatour.com",2],["wral.com",2],["gamepur.com",2],["fin24.com",2],["geekzone.co.nz",2],["upi.com",2],["thewindowsclub.com",2],["androidcure.com",2],["secondnexus.com",2],["health24.com",2],["wokesloth.com",2],["sport24.co.za",2],["onmsft.com",2],["cultofmac.com",2],["washingtontimes.com",2],["howtogeek.com",2],["247sports.com",2],["sporcle.com",2],["fresnobee.com",2],["fajnegotowanie.pl",2],["esportstales.com",2],["tiger-algebra.com",2],["blackenterprise.com",2],["crooksandliars.com",2],["cmacapps.com",2],["cwtv.com",2],["feral-heart.com",2],["gamerevolution.com",2],["gktoday.in",2],["informazionefiscale.it",2],["inquirer.net",[2,182]],["interestingengineering.com",2],["leitesculinaria.com",2],["nofilmschool.com",[2,182]],["obsev.com",2],["pleated-jeans.com",2],["post-gazette.com",2],["practicalclinicalskills.com",2],["ranker.com",2],["sanfoundry.com",2],["simpleflying.com",2],["thegatewaypundit.com",2],["timelessleaf.com",2],["viraliq.com",2],["winhelponline.com",2],["gamerant.com",3],["pcguide.com",3],["qtoptens.com",3],["mangasee123.com",3],["turk-debrid.net",4],["steamcollector.com",[5,170]],["gohatori.com",6],["chaynikam.info",7],["winiso.pl",8],["8muses.com",9],["babiato.co",11],["rangerboard.com",11],["multics.eu",11],["smokingmeatforums.com",[11,103]],["blackhatworld.com",12],["derivative-calculator.net",13],["ebookdz.com",14],["flightsim.to",15],["givee.club",16],["gputracker.eu",17],["ispot.tv",18],["lcpdfr.com",[19,10]],["liveonsat.com",20],["tt1069.com",20],["lowcygier.pl",21],["mangacanblog.com",22],["oglaszamy24.pl",23],["oneman.gr",24],["picmix.com",25],["pixiz.com",26],["portfolio.hu",27],["rocket-league.com",28],["rutab.net",29],["savevideo.me",30],["sharree.com",[31,105]],["techobest.com",32],["textstudio.co",33],["topbestalternatives.com",34],["getemoji.com",35],["topbusiness24.ru",36],["mydomsam.ru",36],["hubuhu.ru",36],["moysadinfo.ru",36],["mybusinessplus.ru",36],["dukand.ru",36],["mydizayn.ru",36],["polzadom.ru",36],["umnodachnik.ru",36],["delnyesovety.ru",36],["soverhenie.ru",36],["mirinteresa.ru",36],["uskorit.ru",36],["dskyar.ru",36],["biscand.ru",36],["smartid24.ru",36],["stroysaminfo.ru",36],["topsovety.ru",36],["sotsvetiya.ru",36],["imdaily.ru",36],["turizmnaok.ru",36],["zdorovyobrazzhizni.ru",36],["kinomann.ru",36],["techinfolife.ru",36],["dommoysad.ru",36],["rteinfo.ru",36],["psisovety.ru",36],["kvilit.ru",36],["speshit.ru",36],["ollss.ru",36],["notebookcheck-hu.com",37],["notebookcheck-tr.com",37],["notebookcheck-ru.com",37],["palestinechronicle.com",38],["granadadigital.es",39],["shopxp.com.br",40],["staradvertiser.com",41],["iprovpn.com",42],["universalfreecourse.com",43],["downloadfreecourse.com",43],["firsatbufirsat.com",44],["liga.net",45],["developer.nvidia.com",46],["loksado.com",47],["training.javatpoint.com",48],["mimaletadepeliculas.blogspot.com",49],["clk.sh",[49,50]],["shrinkearn.com",[49,50]],["luoghidavedere.it",49],["practicetestgeeks.com",[49,50]],["gagetmatome.com",49],["verdadeiroolhar.pt",49],["librospreuniversitariospdf.blogspot.com",[49,51,58,93]],["mt-milcom.blogspot.com",[49,50]],["interviewgig.com",49],["artesacro.org",49],["dailynewsview.com",49],["dailynews.us.com",49],["e-sushi.fr",49],["evasion-online.com",49],["exclusifvoyages.com",49],["f1fastlap.blogspot.com",[49,50]],["naukridisha.in",49],["nydailyquote.com",49],["ouasafat.com",49],["reflectim.fr",[49,50]],["top.howfn.com",49],["kangmartho.com",49],["gnt24365.net",[49,50]],["tvstreampf.xyz",[49,98]],["pvstreams.com",[49,50,58,74]],["7misr4day.com",[49,50]],["fmhikayeleri.com",50],["tinyppt.com",50],["hindi-gk.com",50],["androidmtk.com",50],["badayak.com",50],["runningnews.gr",[50,52]],["kirannewsagency.com",50],["starsunfolded.com",50],["satcesc.com",50],["them4ufree.info",50],["baattv.com",50],["psychologiazycia.com",[50,52]],["tunovelaligera.com",[50,79]],["yeane.org",50],["mtbtutoriales.com",50],["answersafrica.com",50],["felico.pl",50],["legionprogramas.org",50],["serwis-zamkow.com",50],["hebrew4christians.com",50],["jpopsingles.eu",[50,58]],["ghanatvon.com",50],["kusonime.com",[50,58,87]],["otakudesu.org",[50,88]],["idmod.xyz",50],["indcit.com",50],["androidmakale.com",50],["mongri.net",50],["download.ipeenk.com",50],["doranobi-fansub.id",[50,92]],["alexeiportableapp.blogspot.com",50],["oparana.com.br",50],["lolle21.com",50],["mangaid.click",50],["manianomikata.com",50],["tfp.is",50],["dassen-azara4.com",50],["pentruea.com",50],["neyrologos.gr",50],["freerapidleechlist.blogspot.com",50],["ggeguide.com",50],["tanya-tanya.com",[50,104]],["lalawin.com",50],["audioreview.m1001.coreserver.jp",[50,104]],["seikatsu-hyakka.com",50],["elizabeth-mitchell.org",[50,108]],["blasianluvforever.com",50],["movieston.com",[50,74]],["eduardo-monica.com",50],["fmzm.xyz",50],["j-island.net",50],["msubplix.com",50],["upstream.to",50],["ilclubdellericette.it",50],["daum.net",50],["newsforbolly.org",50],["cablegratis.online",50],["dztechphone.com",50],["funivie.org",50],["goodbakery.ru",[50,74]],["ifdreamscametrue.com",[50,119]],["juegosdetiempolibre.org",50],["musicindustryhowto.com",[50,85,98]],["sdelatotoplenie.ru",[50,55]],["sachonthi.com",50],["zdravenportal.eu",[50,122]],["thezealots.org",50],["deportealdia.live",50],["hulnews.top",50],["truyenbanquyen.com",50],["globaledu.jp",50],["lataifas.ro",[50,126]],["blisseyhusband.in",[50,74]],["openfinanza.it",[50,98]],["followmikewynn.com",50],["starbene.it",50],["bimiacg.net",50],["diaforetiko.gr",50],["tchadcarriere.com",50],["info-beihilfe.de",50],["zgywyd.cn",50],["mercenaryenrollment.com",50],["wawlist.com",[50,58]],["cristelageorgescu.ro",50],["crunchyscan.fr",50],["www-daftarharga.blogspot.com",50],["koszalincity.pl",[50,58]],["theghostinmymachine.com",50],["ilovevaldinon.it",50],["aileen-novel.online",[50,118]],["bumigemilang.com",[50,118]],["bingotingo.com",50],["stream.bunkr.is",50],["blueraindrops.com",50],["sekaikomik.live",50],["privivkainfo.ru",50],["apps2app.com",50],["bestjavporn.com",50],["mm9841.cc",50],["myoplay.club",50],["bpcj.or.jp",50],["cdramalove.com",50],["outidesigoto.com",50],["xemphimaz.com",50],["gourmetscans.net",[50,158]],["awebstories.com",50],["zgbk.com",50],["clujust.ro",[50,98]],["stockpokeronline.com",50],["indianhealthyrecipes.com",[50,58]],["stiridinromania.ro",50],["kooora4lives.net",50],["kooora4livs.com",50],["ferroviando.com.br",[50,165,166,167]],["counciloflove.com",[50,165,166,167]],["infokik.com",[50,165,166,167]],["kulinarnastronamocy.pl",[50,165,166,167]],["jafekri.com",[50,165,166,167]],["paidiatreio.gr",[50,79]],["workhouses.org.uk",50],["dollarvr.com",[50,98]],["newsme.gr",[50,98]],["daily-tohoku.news",[50,95]],["descopera.ro",50],["velicu.eu",50],["arenavalceana.ro",[50,74]],["firmwarefile.com",50],["asianexpress.co.uk",50],["best4hack.blogspot.com",50],["certificationexamanswers.890m.com",50],["cookhero.gr",50],["creative-chemistry.org.uk",50],["deutschaj.com",50],["divineyogaschool.blogspot.com",50],["fabioambrosi.it",50],["flory4all.com",50],["fv2freegifts.org",50],["geniusjw.com",50],["ideas0419.com",50],["jeyran.net",50],["ktm2day.com",50],["letsdownloads.com",50],["limametti.com",50],["luyenthithukhoa.vn",50],["otakukan.com",50],["ribbelmonster.de",50],["untitle.org",50],["uptimeside.webnode.gr",50],["usmleexperiences.review",50],["zoommastory.com",50],["urbanbrush.net",50],["audiotools.in",50],["raindropteamfan.com",50],["manhwahentai.me",50],["ph.ontools.net",50],["scarysymptoms.com",[50,158]],["musicallyvideos.com",50],["evz.ro",51],["visionias.net",51],["safetxt.net",51],["javbest.xyz",51],["javbix.com",51],["javgrab.com",51],["goalup.live",51],["hatsukimanga.com",51],["47news.jp",51],["japanxxxmovie.com",51],["sexpox.com",51],["ibomma.pw",51],["aepos.ap.gov.in",51],["ssphim.net",[51,58]],["10000recipe.com",51],["mcocguideblog.com",52],["singingdalong.blogspot.com",52],["tecnotutoshd.net",52],["multifilemirror.com",53],["eca-anime.net",54],["braziljournal.com",55],["nekopoi.web.id",55],["world4.eu",[55,117,118]],["flyertalk.com",10],["searchenginewatch.com",56],["oggiscuola.com",57],["sabishiidesu.com",58],["banglainsider.com",[58,77]],["animesanka.com",58],["lendagames.com",58],["vinaurl.blogspot.com",[58,123]],["utorrentgamesps2.blogspot.com",58],["articlesmania.me",58],["aksensei.com",58],["dropgalaxy.com",58],["allcryptoz.net",58],["crewbase.net",58],["crewus.net",58],["shinbhu.net",58],["shinchu.net",58],["thumb8.net",58],["thumb9.net",58],["topcryptoz.net",58],["uniqueten.net",58],["ultraten.net",58],["krunkercentral.com",58],["desijugar.net",58],["adslink.pw",58],["genesistls.com",[58,98]],["senpaiediciones.com",[58,98]],["icourse163.org",58],["kashmirobserver.net",59],["cathouseonthekings.com",60],["winaero.com",61],["centrumher.eu",62],["japancamerahunter.com",63],["airlinercafe.com",63],["thegraillords.net",64],["worldscientific.com",64],["videohelp.com",64],["upsrtconline.co.in",65],["qualityfilehosting.com",66],["booksmedicos.org",67],["forum.politz.com.br",68],["siliconinvestor.com",69],["space-engineers.de",69],["coffeeforums.co.uk",69],["anime2you.de",69],["majorgeeks.com",69],["jobsbotswana.info",70],["npnews24.com",71],["fordogtrainers.pl",[72,73]],["polskacanada.com",74],["fantricks.com",74],["blog.kwick.de",74],["selfstudyhistory.com",[74,98]],["yeuphimmoik.com",74],["repack-games.com",74],["delicateseliterare.ro",74],["wpplugins.tips",74],["verselemzes.hu",[74,177]],["sqlserveregitimleri.com",74],["gezimanya.com",75],["athletic.net",76],["playonlinux.com",78],["bitblokes.de",80],["bold.dk",81],["pureinfotech.com",82],["almasdarnews.com",82],["casertace.net",82],["civildigital.com",82],["lesmoutonsenrages.fr",82],["venusarchives.com",82],["verpornocomic.com",82],["balticlivecam.com",83],["molineuxmix.co.uk",84],["yaledailynews.com",84],["canondrivers.org",[85,86]],["forum.nlmod.net",89],["includehelp.com",90],["u.gg",91],["routenote.com",93],["themosvagas.com.br",[93,130]],["mt07-forum.de",94],["auto-treff.com",94],["telefon-treff.de",94],["dodge-forum.eu",94],["altranotizia.it",95],["hearthstone-decks.net",96],["full-anime.fr",27],["nonton78.com",97],["sbfast.com",97],["vupload.com",97],["opportunitydesk.org",98],["selfstudyanthro.com",98],["renditepassive.net",98],["androidtvbox.eu",98],["flinsetyadi.com",[98,104]],["rawneix.in",[98,154,155]],["the-masters-voice.com",[98,104]],["activationkeys.co",98],["pandurul.ro",99],["masrawy.com",100],["milfzr.com",101],["phrasemix.com",102],["pitesti24.ro",104],["samsungtechwin.com",104],["cours-de-droit.net",104],["iptv4best.com",104],["blogvisaodemercado.pt",104],["kapitalis.com",104],["tiempo.hn",104],["winmeen.com",104],["ibps.in",104],["visse.com.br",104],["javsubtitle.co",104],["licensekeys.org",104],["mediahiburan.my",104],["tipssehatcantik.com",104],["anime-drama.jp",104],["jbjbgame.com",104],["viatasisanatate.com",104],["ziarulargesul.ro",104],["globaldefensecorp.com",104],["gossipnextdoor.com",104],["coffeeapps.ir",104],["media.framu.world",104],["immobiliaremia.com",104],["colegiosconcertados.info",104],["bigdatauni.com",104],["rukim.id",104],["visefierbinti.ro",104],["cyberkrafttraining.com",104],["theaircurrent.com",104],["nocturnetls.net",104],["clockks.com",104],["ananda-yoga.ro",104],["poolpiscina.com",104],["infodifesa.it",104],["getective.com",104],["formatatmak.com",104],["drkrok.com",104],["alphagirlreviews.com",104],["kitchennovel.com",104],["voxvalachorum.ro",104],["cracksone.com",104],["day-hoc.org",104],["onlineonderdelenshop.nl",104],["primicia.com.ve",104],["tech-recipes.com",104],["postcourier.com.pg",104],["afrikmag.com",104],["maduras.vip",104],["aprendeinglessila.com",104],["kicknews.today",104],["koalasplayground.com",104],["hellokpop.com",104],["hayatbilgileri.com",104],["moneyexcel.com",104],["placementstore.com",104],["neuroteam-metz.de",104],["codedosa.com",104],["liveyourmaths.com",104],["newspao.gr",104],["ieltsliz.com",104],["programasvirtualespc.net",104],["tempatwisataseru.com",104],["wikiofcelebs.com",104],["jornaljoca.com.br",104],["arcanescans.com",104],["moneyguru.co",105],["abola.pt",31],["unixhow.com",106],["wikihow.com",107],["analizy.pl",109],["phimmedia.info",110],["zeeebatch.blogspot.com",111],["sokolow-mlp.pl",111],["japan-fans.com",111],["ohmygirl.ml",112],["cissamagazine.com.br",113],["phoronix.com",114],["observatoriodocinema.uol.com.br",115],["salidzini.lv",116],["portalcriatividade.com.br",[117,160]],["kitguru.net",120],["lvturbo.com",121],["sbbrisk.com",121],["sbface.com",121],["sbspeed.com",121],["streamsb.net",121],["itscybertech.com",121],["whatfontis.com",124],["tritinia.com",125],["sportnews.to",[125,133]],["psihologiadeazi.ro",125],["dubznetwork.com",[125,156]],["lowkeytech.com",127],["ubuntudde.com",127],["techsini.com",128],["allmovie.com",129],["appofmirror.com",131],["developpez.com",132],["scatch176duplicities.com",134],["voe-unblock.com",134],["phimdinhcao.com",135],["picallow.com",136],["freestreams-live1.com",136],["links.extralinks.casa",137],["ssuathletics.com",138],["titulky.com",139],["dongphimmoiz.com",140],["investorvillage.com",141],["grandoldteam.com",142],["gamingsinners.com",142],["elitepvpers.com",143],["geeksforgeeks.org",144],["acupoffrench.com",145],["novelza.com",145],["novelpia.com",[146,147,148]],["viewsb.com",149],["dizipal210.com",[149,150]],["dizipal211.com",[149,150]],["dizipal222.com",[149,150]],["dizipal223.com",[149,150]],["dizipal229.com",[149,150]],["dizipal232.com",[149,150]],["dizipal233.com",[149,150]],["dizipal234.com",[149,150]],["dizipal235.com",[149,150]],["dizipal236.com",[149,150]],["dizipal237.com",[149,150]],["dizipal238.com",[149,150]],["dizipal239.com",[149,150]],["dizipal240.com",[149,150]],["dizipal241.com",[149,150]],["dizipal242.com",[149,150]],["dizipal243.com",[149,150]],["dizipal244.com",[149,150]],["dizipal246.com",[149,150]],["dizipal247.com",[149,150]],["dizipal248.com",[149,150]],["dizipal249.com",[149,150]],["nsfwzone.xyz",149],["dlmovies.link",149],["top1iq.com",151],["unlimitedfiles.xyz",152],["aztravels.net",153],["downfile.site",153],["memangbau.com",153],["trangchu.news",153],["revenue.land",154],["eplayer.click",156],["olacast.live",156],["ntuplay.xyz",156],["fucktube4k.com",157],["knightnoscanlation.com",157],["maxstream.video",159],["smokelearned.net",161],["nhentaihaven.org",162],["slideshare.net",163],["hidemywp.co",164],["bolugundem.com",165],["memoryhackers.org",168],["turkbettv154.com",169],["mgsm.pl",171],["camcaps.to",172],["vtplayer.net",172],["phimlongtieng.net",[173,174,175,176]],["weakstream.org",178],["jk-market.com",179],["vtbe.to",180],["vtube.network",180],["film4e.com",181],["zamundatv.com",181],["cattime.com",182],["dogtime.com",182],["download.mokeedev.com",182],["freep.com",182],["ijr.com",182],["order-order.com",182],["techlicious.com",182],["thedraftnetwork.com",182],["legacy.com",183],["cyanlabs.net",184]]);

const entitiesMap = new Map([["notebookcheck",37],["marapcana",50],["europixhd",[50,58]],["topeuropix",[50,58]],["dramacute",[50,95]],["depedlps",50],["mangatoon",50],["123movies",[50,104]],["gomovies",50],["fmovies",[50,104]],["otakudesu",50],["yoyofilmeys",50],["mangaku",51],["dramaqu",51],["tvzingvn",97],["zingtvhd",97],["zingvntv",97],["sbflix",97]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function abortCurrentScript(...args) {
    runAtHtmlElementFn(( ) => {
        abortCurrentScriptCore(...args);
    });
}

function abortCurrentScriptCore(
    target = '',
    needle = '',
    context = ''
) {
    if ( typeof target !== 'string' ) { return; }
    if ( target === '' ) { return; }
    const safe = safeSelf();
    const reNeedle = safe.patternToRegex(needle);
    const reContext = safe.patternToRegex(context);
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 3);
    const thisScript = document.currentScript;
    const chain = target.split('.');
    let owner = window;
    let prop;
    for (;;) {
        prop = chain.shift();
        if ( chain.length === 0 ) { break; }
        if ( prop in owner === false ) { break; }
        owner = owner[prop];
        if ( owner instanceof Object === false ) { return; }
    }
    let value;
    let desc = Object.getOwnPropertyDescriptor(owner, prop);
    if (
        desc instanceof Object === false ||
        desc.get instanceof Function === false
    ) {
        value = owner[prop];
        desc = undefined;
    }
    const log = shouldLog(extraArgs);
    const debug = shouldDebug(extraArgs);
    const exceptionToken = getExceptionToken();
    const scriptTexts = new WeakMap();
    const getScriptText = elem => {
        let text = elem.textContent;
        if ( text.trim() !== '' ) { return text; }
        if ( scriptTexts.has(elem) ) { return scriptTexts.get(elem); }
        const [ , mime, content ] =
            /^data:([^,]*),(.+)$/.exec(elem.src.trim()) ||
            [ '', '', '' ];
        try {
            switch ( true ) {
            case mime.endsWith(';base64'):
                text = self.atob(content);
                break;
            default:
                text = self.decodeURIComponent(content);
                break;
            }
        } catch(ex) {
        }
        scriptTexts.set(elem, text);
        return text;
    };
    const validate = ( ) => {
        const e = document.currentScript;
        if ( e instanceof HTMLScriptElement === false ) { return; }
        if ( e === thisScript ) { return; }
        if ( context !== '' && reContext.test(e.src) === false ) {
            if ( debug === 'nomatch' || debug === 'all' ) { debugger; }  // jshint ignore: line
            return;
        }
        if ( log && e.src !== '' ) { safe.uboLog(`matched src: ${e.src}`); }
        const scriptText = getScriptText(e);
        if ( reNeedle.test(scriptText) === false ) {
            if ( debug === 'nomatch' || debug === 'all' ) { debugger; }  // jshint ignore: line
            return;
        }
        if ( log ) { safe.uboLog(`matched script text: ${scriptText}`); }
        if ( debug === 'match' || debug === 'all' ) { debugger; }  // jshint ignore: line
        throw new ReferenceError(exceptionToken);
    };
    if ( debug === 'install' ) { debugger; }  // jshint ignore: line
    try {
        Object.defineProperty(owner, prop, {
            get: function() {
                validate();
                return desc instanceof Object
                    ? desc.get.call(owner)
                    : value;
            },
            set: function(a) {
                validate();
                if ( desc instanceof Object ) {
                    desc.set.call(owner, a);
                } else {
                    value = a;
                }
            }
        });
    } catch(ex) {
        if ( log ) { safe.uboLog(ex); }
    }
}

function runAtHtmlElementFn(fn) {
    if ( document.documentElement ) {
        fn();
        return;
    }
    const observer = new MutationObserver(( ) => {
        observer.disconnect();
        fn();
    });
    observer.observe(document, { childList: true });
}

function getExceptionToken() {
    const safe = safeSelf();
    const token =
        String.fromCharCode(Date.now() % 26 + 97) +
        safe.Math_floor(safe.Math_random() * 982451653 + 982451653).toString(36);
    const oe = self.onerror;
    self.onerror = function(msg, ...args) {
        if ( typeof msg === 'string' && msg.includes(token) ) { return true; }
        if ( oe instanceof Function ) {
            return oe.call(this, msg, ...args);
        }
    }.bind();
    return token;
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
                    pattern,
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            return {
                pattern,
                re: new this.RegExp(pattern.replace(
                    /[.*+?^${}()|[\]\\]/g, '\\$&'),
                    options.flags
                ),
                expect,
            };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            return this.RegExp_test.call(details.re, haystack) === details.expect;
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

function shouldDebug(details) {
    if ( details instanceof Object === false ) { return false; }
    return scriptletGlobals.has('canDebug') && details.debug;
}

function shouldLog(details) {
    if ( details instanceof Object === false ) { return false; }
    return scriptletGlobals.has('canDebug') && details.log;
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
    try { abortCurrentScript(...argsList[i]); }
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
    return uBOL_abortCurrentScript();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_abortCurrentScript = cloneInto([
            [ '(', uBOL_abortCurrentScript.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_abortCurrentScript);
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
    delete page.uBOL_abortCurrentScript;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
