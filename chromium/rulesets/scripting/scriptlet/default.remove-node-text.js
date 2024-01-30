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

// ruleset: default

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_removeNodeText = function() {

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["script","AdDefend"],["script","/getAdUnitPath|\\.then\\(eval\\)|DisplayAcceptableAdIfAdblocked|,eval\\)\\)\\)\\;|\\.join\\(\\'\\'\\)\\}\\;/"],["script","/==undefined.*body/"],["script","style"],["script","Promise"],["script","Number.isSafeInteger"],["script","Reflect"],["script","document.write"],["script","self == top"],["script","/popunder|isAdBlock|admvn.src/i"],["script","deblocker"],["script","exdynsrv"],["script","/<.*>.*\\x40/"],["script","/adb/i"],["script","adsbygoogle"],["script","FingerprintJS"],["script","/h=decodeURIComponent|popundersPerIP/"],["script","/adblock.php"],["script","/document\\.createElement|\\.banner-in/"],["script","/\\badblock\\b/"],["script","/block-adb|-0x|adblock/"],["script","myreadCookie"],["script","ExoLoader"],["script","/?key.*open/","condition","key"],["script","adblock"],["script","homad"],["script","alert"],["script","/adblock|popunder/"],["script","fetch"],["script","window.open"],["script",";break;case $."],["script","googlesyndication"],["script","queue.addFile"],["script","htmls"],["script","/\\/detected\\.html|Adblock/"],["script","toast"],["script","/window\\.open|window\\.location\\.href|document\\.addEventListener|\\$\\(document\\)\\.ready.*show/"],["script","AdbModel"],["script","antiAdBlockerHandler"],["script","onerror"],["script","/checkAdBlocker|AdblockRegixFinder/"],["script","catch"],["script","adb_detected"],["script","Adblock"],["script","break;case $."],["style","text-decoration"],["script","push"],["script","AdBlocker"],["script","clicky"],["script","charCodeAt"],["script","checkifscript"],["script","popMagic"],["script","/popMagic|pop1stp/"],["script","popunder"],["script","/adblock|location\\.replace/"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","KCgpPT57bGV0IGU"],["script","error-report.com"],["script","serve"],["script","/ConsoleBan|alert|AdBlocker/"],["script","adb"],["script","await fetch"],["script","innerHTML"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","popUnder"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","【PR】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/^Advertisement$/"],["script","navigator.brave"],["script","zfgloaded"],["script","ai_adb"],["script","HTMLAllCollection"],["script","liedetector"],["script","popWin"],["script","end_click"],["script","ad blocker"],["script","closeAd"],["script","/modal|popupads/"],["script","/adconfig/i"],["script","AdblockDetector"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","ad_block"],["script","app_checkext"],["script","shown_at"],["script","clientHeight"],["script","/url_key|adHtml/"],["script","pop.target"],["script","showadblock"],["script","axios"],["script","ad block"],["script","\"v4ac1eiZr0\""],["script","admiral"],["script","/charAt|XMLHttpRequest/"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","/$.*open/"],["script","Brave"],["script","egoTab"],["script","abDetectorPro"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","/\\[\\'push\\'\\]/"],["script","/adblock/i"],["script","/$.*adUnits/"],["script","decodeURIComponent"],["script","RegExp"],["script","adbl"],["script","doOpen"],["script","adsBlocked"],["script","chkADB"],["script","AaDetector"],["script","AdBlock"],["script","Symbol.iterator"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","detectAdBlock"],["script","popup"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","document.head.appendChild"],["script","Number"],["script","ad-block-activated"],["script","insertBefore"],["script","pop.doEvent"],["script","constructor"],["script","/adbl/i"],["script","detect"],["script","btnHtml"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","vglnk"],["script","/RegExp\\(\\'/","condition","RegExp"],["script",".slice(0, -1); }"],["script","(Math.PI).toFixed(10).slice(0, -1);"],["script","AdblockRegixFinder"],["script","/(?<=if\\((\\s){0,}!window\\.(\\s){0,}[shouldExist\\d+]{1,}\\) {)([^;]+)/gms"],["script","/document\\[`(.+?)`\\]\\.innerHTML = window\\..*;/gms"],["script","/document.*.innerHTML =window\\..*;/gms"],["script","/document\\[\"body\"\\]\\.innerHTML\\s*=\\s*([^;]+);/g"],["script","NREUM"]];

const hostnamesMap = new Map([["giga.de",0],["kino.de",0],["teltarif.de",1],["aupetitparieur.com",2],["allthingsvegas.com",2],["100percentfedup.com",2],["beforeitsnews.com",2],["concomber.com",2],["conservativebrief.com",2],["conservativefiringline.com",2],["dailylol.com",2],["funnyand.com",2],["letocard.fr",2],["mamieastuce.com",2],["meilleurpronostic.fr",2],["patriotnationpress.com",2],["toptenz.net",2],["vitamiiin.com",2],["writerscafe.org",2],["populist.press",2],["dailytruthreport.com",2],["livinggospeldaily.com",2],["first-names-meanings.com",2],["welovetrump.com",2],["thehayride.com",2],["thelibertydaily.com",2],["thepoke.co.uk",2],["thepolitistick.com",2],["theblacksphere.net",2],["shark-tank.com",2],["naturalblaze.com",2],["greatamericanrepublic.com",2],["dailysurge.com",2],["truthlion.com",2],["flagandcross.com",2],["westword.com",2],["republicbrief.com",2],["freedomfirstnetwork.com",2],["phoenixnewtimes.com",2],["designbump.com",2],["clashdaily.com",2],["madworldnews.com",2],["reviveusa.com",2],["sonsoflibertymedia.com",2],["thedesigninspiration.com",2],["videogamesblogger.com",2],["protrumpnews.com",2],["thepalmierireport.com",2],["kresy.pl",2],["thepatriotjournal.com",2],["gellerreport.com",2],["thegatewaypundit.com",2],["wltreport.com",2],["miaminewtimes.com",2],["politicalsignal.com",2],["rightwingnews.com",2],["bigleaguepolitics.com",2],["comicallyincorrect.com",2],["moviepilot.de",4],["yts.mx",7],["upornia.com",9],["pinsystem.co.uk",10],["tinyppt.com",10],["downfile.site",10],["expertvn.com",10],["trangchu.news",10],["bharathwick.com",10],["descargaspcpro.net",10],["dx-tv.com",10],["rt3dmodels.com",10],["plc4me.com",10],["blisseyhusbands.com",10],["mhdsportstv.com",10],["madaradex.org",10],["learnmany.in",10],["loaninsurehub.com",10],["appkamods.com",10],["techacode.com",10],["3dmodelshare.org",10],["nulleb.com",10],["reset-scans.us",10],["coursesghar.com",10],["thecustomrom.com",10],["bingotingo.com",10],["ghior.com",10],["3dmili.com",10],["karanpc.com",10],["plc247.com",10],["hiraethtranslation.com",10],["javindo.eu.org",10],["chindohot.site",10],["freepasses.org",10],["tomarnarede.pt",10],["basketballbuzz.ca",10],["dribbblegraphics.com",10],["kemiox.com",10],["checkersmenu.us",10],["teksnologi.com",10],["dollareuro.live",10],["next-episode.net",12],["eporner.com",13],["germancarforum.com",14],["cybercityhelp.in",14],["sinvida.me",[15,16]],["streamnoads.com",[15,16,44]],["bowfile.com",15],["cloudvideo.tv",[15,44]],["coloredmanga.com",15],["embedstream.me",[15,16,44]],["exeo.app",15],["hiphopa.net",[15,16]],["megaup.net",15],["tv247.us",[15,16]],["uploadhaven.com",15],["userscloud.com",[15,44]],["mdfx9dc8n.net",16],["mdzsmutpcvykb.net",16],["123movies4u.site",16],["1337xporn.com",16],["141jav.com",16],["1bit.space",16],["1bitspace.com",16],["38dh2.top",16],["3dporndude.com",16],["4archive.org",16],["4horlover.com",16],["560pmovie.com",16],["60fps.xyz",16],["85tube.com",16],["85videos.com",16],["8xlinks.click",16],["a2zcrackworld.com",16],["aazzz.xyz",16],["acefile.co",16],["actusports.eu",16],["adblockplustape.com",16],["adclickersbot.com",16],["adricami.com",16],["adslink.pw",16],["adultstvlive.com",16],["adz7short.space",16],["aeblender.com",16],["ahdafnews.blogspot.com",16],["ak47sports.com",16],["akuma.moe",16],["allplayer.tk",16],["allstreaming.online",16],["amadoras.cf",16],["amadorasdanet.shop",16],["amateurblog.tv",16],["androidadult.com",16],["anhsexjav.xyz",16],["anidl.org",16],["anime-loads.org",16],["animeblkom.net",16],["animefire.net",16],["animelek.me",16],["animeshouse.net",16],["animespire.net",16],["animestotais.xyz",16],["animeyt.es",16],["anroll.net",16],["anymoviess.xyz",16],["aotonline.org",16],["asenshu.com",16],["asialiveaction.com",16],["asianclipdedhd.net",16],["askim-bg.com",16],["asumsikedaishop.com",16],["avcrempie.com",16],["avseesee.com",16],["backfirstwo.com",16],["bajarjuegospcgratis.com",16],["balkanportal.net",16],["balkanteka.net",16],["bdnewszh.com",[16,44]],["belowporn.com",16],["bestclaimtrx.xyz",16],["bestgirlsexy.com",16],["bestnhl.com",16],["bestporn4free.com",16],["bestporncomix.com",16],["bet36.es",16],["bikinitryon.net",16],["birdurls.com",16],["bitsearch.to",16],["blackcockadventure.com",16],["blackcockchurch.org",16],["blackporncrazy.com",16],["blizzboygames.net",16],["blizzpaste.com",16],["blkom.com",16],["blog-peliculas.com",16],["blogtrabalhista.com",16],["blurayufr.xyz",16],["bobsvagene.club",16],["bolly4umovies.click",16],["bonusharian.pro",16],["brilian-news.id",16],["brupload.net",16],["bucitana.com",16],["cablegratis.online",16],["camchickscaps.com",16],["camgirlcum.com",16],["camgirls.casa",16],["cashurl.in",16],["castingx.net",16],["ccurl.net",[16,44]],["celebrity-leaks.net",16],["cgpelis.net",16],["charexempire.com",16],["clasico.tv",16],["clik.pw",16],["coin-free.com",[16,33]],["coins100s.fun",16],["comicsmanics.com",16],["compucalitv.com",16],["coolcast2.com",16],["cosplaytab.com",16],["countylocalnews.com",16],["cpmlink.net",16],["crackstreamshd.click",16],["crespomods.com",16],["crisanimex.com",16],["crunchyscan.fr",16],["cuevana3.fan",16],["cuevana3hd.com",16],["cumception.com",16],["curvaweb.com",16],["cutpaid.com",16],["datawav.club",16],["daughtertraining.com",16],["deepgoretube.site",16],["deltabit.co",16],["depvailon.com",16],["derleta.com",16],["desivdo.com",16],["desixx.net",16],["detikkebumen.com",16],["deutschepornos.me",16],["diasoft.xyz",16],["directupload.net",16],["diskusscan.com",16],["dixva.com",16],["dlhd.sx",16],["doctormalay.com",16],["dofusports.xyz",16],["dogemate.com",16],["doods.cam",16],["doodskin.lat",16],["downloadrips.com",16],["downvod.com",16],["dphunters.mom",16],["dragontranslation.com",16],["duddes.xyz",16],["dvdfullestrenos.com",16],["ebookbb.com",16],["ebookhunter.net",16],["egyanime.com",16],["egygost.com",16],["egyshare.cc",16],["ekasiwap.com",16],["electro-torrent.pl",16],["elil.cc",16],["embed4u.xyz",16],["eplayer.click",16],["erovoice.us",16],["eroxxx.us",16],["estrenosdoramas.net",16],["everia.club",16],["everythinginherenet.blogspot.com",16],["extrafreetv.com",16],["extremotvplay.com",16],["fapinporn.com",16],["fapptime.com",16],["fashionblog.tv",16],["fastreams.live",16],["faucethero.com",16],["fembed.com",16],["femdom-joi.com",16],["fileone.tv",16],["film1k.com",16],["filmeonline2023.net",16],["filmesonlinex.org",16],["filmesonlinexhd.biz",[16,44]],["filmovi.ws",[16,44]],["filmovitica.com",16],["filmymaza.blogspot.com",16],["filthy.family",16],["fixfinder.click",16],["flostreams.xyz",16],["flyfaucet.com",16],["footyhunter.lol",16],["footyhunter3.xyz",[16,44]],["forex-golds.com",16],["forex-trnd.com",16],["forumchat.club",16],["forumlovers.club",16],["freemoviesonline.biz",16],["freeomovie.co.in",16],["freeomovie.to",16],["freeporncomic.net",16],["freepornhdonlinegay.com",16],["freeproxy.io",16],["freeuse.me",16],["freeusexporn.com",16],["fsicomics.com",16],["gambarbogel.xyz",16],["gamepcfull.com",16],["gameronix.com",16],["gamesfullx.com",16],["gameshdlive.net",16],["gameshdlive.xyz",[16,44]],["gamesmountain.com",16],["gamesrepacks.com",16],["gamingguru.fr",16],["gamovideo.com",16],["garota.cf",16],["gaydelicious.com",16],["gaypornmasters.com",16],["gaysex69.net",16],["gemstreams.com",16],["get-to.link",16],["girlscanner.org",16],["giurgiuveanul.ro",16],["gledajcrtace.xyz",16],["gocast2.com",16],["gomo.to",16],["gostosa.cf",16],["gtlink.co",16],["gwiazdypornosow.pl",16],["haho.moe",16],["hatsukimanga.com",16],["hayhd.net",16],["hdsaprevodom.com",16],["hdstreamss.club",16],["hentais.tube",16],["hentaistream.co",16],["hentaitk.net",16],["hentaitube.online",16],["hentaiworld.tv",16],["hesgoal.tv",16],["hexupload.net",16],["hhkungfu.tv",16],["highlanderhelp.com",16],["hindimean.com",16],["hindimovies.to",[16,44]],["hiperdex.com",16],["hispasexy.org",16],["hitomi.la",16],["hitprn.com",16],["hoca4u.com",16],["hollymoviehd.cc",16],["hoodsite.com",16],["hopepaste.download",16],["hornylips.com",16],["hotgranny.live",16],["hotmama.live",16],["hqcelebcorner.net",16],["huren.best",16],["hwnaturkya.com",[16,44]],["hxfile.co",[16,44]],["igfap.com",16],["ihdstreams.xyz",16],["iklandb.com",16],["illink.net",16],["imgkings.com",16],["imgsex.xyz",16],["imx.to",16],["influencersgonewild.org",16],["infosgj.free.fr",16],["investnewsbrazil.com",16],["itdmusics.com",16],["itopmusic.org",16],["itsuseful.site",16],["itunesfre.com",16],["iwatchfriendsonline.net",[16,80]],["jackstreams.com",16],["jatimupdate24.com",16],["javcl.com",16],["javf.net",16],["javhay.net",16],["javhoho.com",16],["javhun.com",16],["javleak.com",16],["javporn.best",16],["javsex.to",16],["javtiful.com",16],["jimdofree.com",16],["jiofiles.org",16],["jorpetz.com",16],["journalyc.online",16],["jp-films.com",16],["jpop80ss3.blogspot.com",16],["jpopsingles.eu",16],["kantotflix.net",16],["kantotinyo.com",16],["kaoskrew.org",16],["kaplog.com",16],["keralatvbox.com",16],["kimochi.info",16],["kimochi.tv",16],["kinemania.tv",16],["konstantinova.net",16],["koora-online.live",16],["kunmanga.com",16],["kutmoney.com",16],["kwithsub.com",16],["ladangreceh.xyz",16],["lat69.me",16],["latinblog.tv",16],["latinomegahd.net",16],["lazyfaucet.com",16],["leechpremium.link",16],["legendas.dev",16],["legendei.net",16],["lightdlmovies.blogspot.com",16],["lighterlegend.com",16],["linclik.com",16],["linkebr.com",16],["linkrex.net",16],["links.worldfree4u-lol.online",16],["linksfy.co",16],["lody.ink",16],["lovesomecommunity.com",16],["lulustream.com",[16,44]],["luluvdo.com",[16,44]],["luzcameraeacao.shop",16],["manga-oni.com",16],["mangaboat.com",16],["mangagenki.me",16],["mangahere.onl",16],["mangaweb.xyz",16],["mangoporn.net",16],["manhwahentai.me",16],["masahub.com",16],["masahub.net",16],["maturegrannyfuck.com",16],["mdy48tn97.com",16],["mediapemersatubangsa.com",16],["mega-mkv.com",16],["megapastes.com",16],["megapornpics.com",16],["messitv.net",16],["meusanimes.net",16],["milfmoza.com",16],["milfzr.com",16],["millionscast.com",16],["mimaletamusical.blogspot.com",16],["mitly.us",16],["mkv-pastes.com",16],["modb.xyz",16],["monaskuliner.ac.id",16],["moredesi.com",16],["movgotv.net",16],["movi.pk",16],["movieswbb.com",16],["moviewatch.com.pk",[16,44]],["mp4upload.com",16],["mrskin.live",16],["multicanaistv.com",16],["mundowuxia.com",16],["myeasymusic.ir",16],["myonvideo.com",16],["myyouporn.com",16],["narutoget.info",16],["naughtypiss.com",16],["nerdiess.com",16],["new-fs.eu",16],["newtorrentgame.com",16],["nflstreams.me",16],["niaomea.me",[16,44]],["nicekkk.com",16],["nicesss.com",16],["nolive.me",[16,44]],["nopay.info",16],["nopay2.info",[16,121]],["notformembersonly.com",16],["novamovie.net",16],["novelpdf.xyz",16],["novelssites.com",[16,44]],["novelup.top",16],["nsfwr34.com",16],["nu6i-bg-net.com",16],["nudebabesin3d.com",16],["nukedfans.com",16],["nuoga.eu",16],["nzbstars.com",16],["ohjav.com",16],["ojearnovelas.com",16],["okanime.xyz",16],["olarixas.xyz",16],["oldbox.cloud",16],["olweb.tv",16],["olympicstreams.me",16],["on9.stream",16],["oncast.xyz",16],["onepiece-mangaonline.com",16],["onifile.com",16],["onionstream.live",16],["onlinesaprevodom.net",16],["onlyfullporn.video",16],["onplustv.live",16],["originporn.com",16],["ovagames.com",16],["ovamusic.com",16],["owllink.net",16],["packsporn.com",16],["pahaplayers.click",16],["palimas.org",16],["pandafiles.com",16],["papahd.club",16],["papahd1.xyz",16],["password69.com",16],["paste3.org",16],["pastemytxt.com",16],["payskip.org",16],["peeplink.in",16],["peliculasmx.net",16],["pervertgirlsvideos.com",16],["pervyvideos.com",16],["phim12h.com",16],["picdollar.com",16],["pickteenz.com",16],["pics4you.net",16],["picsxxxporn.com",16],["pinayscandalz.com",16],["pinkueiga.net",16],["piratefast.xyz",16],["piratehaven.xyz",16],["pirateiro.com",16],["pirlotvonline.org",16],["playtube.co.za",16],["plugintorrent.com",16],["pmvzone.com",16],["porndish.com",16],["pornez.net",16],["pornfetishbdsm.com",16],["pornfits.com",16],["pornhd720p.com",16],["pornobr.club",16],["pornobr.ninja",16],["pornodominicano.net",16],["pornofaps.com",16],["pornoflux.com",16],["pornotorrent.com.br",16],["pornredit.com",16],["pornstarsyfamosas.es",16],["pornstreams.co",16],["porntn.com",16],["pornxbit.com",16],["pornxday.com",16],["portaldasnovinhas.shop",16],["portugues-fcr.blogspot.com",16],["poscishd.online",16],["poscitesch.com",[16,44]],["poseyoung.com",16],["pover.org",16],["proxyninja.org",16],["pubfilmz.com",16],["publicsexamateurs.com",16],["punanihub.com",16],["putlocker5movies.org",16],["pxxbay.com",16],["r18.best",16],["ragnaru.net",16],["rapbeh.net",16],["rapelust.com",16],["rapload.org",16],["read-onepiece.net",16],["retro-fucking.com",16],["retrotv.org",16],["robaldowns.com",16],["rockdilla.com",16],["rojadirectatvenvivo.com",16],["rojitadirecta.blogspot.com",16],["romancetv.site",16],["rule34.club",16],["rule34hentai.net",16],["rumahbokep-id.com",16],["safego.cc",16],["sakurafile.com",16],["satoshi-win.xyz",16],["scat.gold",16],["scatfap.com",16],["scatkings.com",16],["scnlog.me",16],["scripts-webmasters.net",16],["serie-turche.com",16],["serijefilmovi.com",16],["sexcomics.me",16],["sexdicted.com",16],["sexgay18.com",16],["sexofilm.co",16],["sextgem.com",16],["sextubebbw.com",16],["sgpics.net",16],["shadowrangers.live",16],["shahee4u.cam",16],["shahiid-anime.net",16],["shemale6.com",16],["shinden.pl",16],["short.es",16],["showmanga.blog.fc2.com",16],["shrt10.com",16],["shurt.pw",16],["sideplusleaks.net",16],["silverblog.tv",16],["silverpic.com",16],["sinhalasub.life",16],["sinsitio.site",16],["skidrowcpy.com",16],["skidrowfull.com",16],["skidrowreloaded.com",16],["slut.mom",16],["smallencode.me",16],["smoner.com",16],["smplace.com",16],["soccerinhd.com",16],["socceron.name",16],["softairbay.com",16],["sokobj.com",16],["songsio.com",16],["souexatasmais.com",16],["sportbar.live",16],["sportea.online",16],["sportskart.xyz",16],["sportstream1.cfd",16],["srt.am",16],["srts.me",16],["stakes100.xyz",16],["stbemuiptv.com",16],["stockingfetishvideo.com",16],["stream.lc",16],["stream25.xyz",16],["streambee.to",16],["streamcenter.pro",16],["streamers.watch",16],["streamgo.to",16],["streamkiste.tv",16],["streamoporn.xyz",16],["streamoupload.xyz",16],["streamservicehd.click",16],["streamvid.net",[16,24]],["subtitleporn.com",16],["subtitles.cam",16],["suicidepics.com",16],["supertelevisionhd.com",16],["supexfeeds.com",16],["swzz.xyz",16],["sxnaar.com",16],["tabooporns.com",16],["taboosex.club",16],["tapeantiads.com",16],["tapeblocker.com",16],["tapenoads.com",16],["tapewithadblock.org",[16,143]],["teamos.xyz",16],["teen-wave.com",16],["teenporncrazy.com",16],["telegramgroups.xyz",16],["telenovelasweb.com",16],["tensei-shitara-slime-datta-ken.com",16],["tfp.is",16],["tgo-tv.co",[16,44]],["thaihotmodels.com",16],["theblueclit.com",16],["thebussybandit.com",16],["theicongenerator.com",16],["thelastdisaster.vip",16],["thepiratebay0.org",16],["thepiratebay10.info",16],["thesexcloud.com",16],["thothub.today",16],["tightsexteens.com",16],["tojav.net",16],["tokyoblog.tv",16],["tonnestreamz.xyz",16],["top16.net",16],["topvideosgay.com",16],["torrage.info",16],["torrents.vip",16],["torrsexvid.com",16],["tpb-proxy.xyz",16],["trannyteca.com",16],["trendytalker.com",16],["tumanga.net",16],["turbogvideos.com",16],["turbovid.me",16],["turkishseriestv.org",16],["turksub24.net",16],["tutele.sx",16],["tutelehd3.xyz",16],["tvglobe.me",16],["tvpclive.com",16],["tvs-widget.com",16],["tvseries.video",16],["ucptt.com",16],["ufaucet.online",16],["ufcfight.online",16],["uhdgames.xyz",16],["ultrahorny.com",16],["ultraten.net",16],["unblockweb.me",16],["underhentai.net",16],["uniqueten.net",16],["upbaam.com",16],["upstream.to",16],["valeriabelen.com",16],["verdragonball.online",16],["vfxmed.com",16],["video.az",16],["videostreaming.rocks",16],["videowood.tv",16],["vidorg.net",16],["vidtapes.com",16],["vidz7.com",16],["vikistream.com",16],["vikv.net",16],["virpe.cc",16],["visifilmai.org",16],["viveseries.com",16],["vladrustov.sx",16],["volokit2.com",16],["vstorrent.org",16],["w-hentai.com",16],["watchaccordingtojimonline.com",16],["watchbrooklynnine-nine.com",16],["watchdowntonabbeyonline.com",16],["watchelementaryonline.com",16],["watcheronline.net",16],["watchgleeonline.com",16],["watchjavidol.com",16],["watchkobestreams.info",16],["watchlostonline.net",16],["watchlouieonline.com",16],["watchmonkonline.com",16],["watchparksandrecreation.net",16],["watchprettylittleliarsonline.com",16],["watchrulesofengagementonline.com",16],["watchthekingofqueens.com",16],["watchthemiddleonline.com",16],["watchtvchh.xyz",16],["webcamrips.com",16],["wickedspot.org",16],["wincest.xyz",16],["witanime.best",16],["wolverdon.fun",16],["wolverdonx.com",16],["wordcounter.icu",16],["worldcupstream.pm",16],["worldmovies.store",16],["worldstreams.click",16],["wpdeployit.com",16],["wqstreams.tk",16],["wwwsct.com",16],["xanimeporn.com",16],["xblog.tv",16],["xn--verseriesespaollatino-obc.online",16],["xn--xvideos-espaol-1nb.com",16],["xpornium.net",16],["xsober.com",16],["xvip.lat",16],["xxgasm.com",16],["xxvideoss.org",16],["xxx18.uno",16],["xxxdominicana.com",16],["xxxfree.watch",16],["xxxmax.net",16],["xxxwebdlxxx.top",16],["xxxxvideo.uno",16],["y2b.wiki",16],["yabai.si",16],["yadixv.com",16],["yayanimes.net",16],["yeshd.net",16],["yodbox.com",16],["youjax.com",16],["youpits.xyz",16],["yourdailypornvideos.ws",16],["yourupload.com",16],["ytstv.me",16],["ytstvmovies.co",16],["ytstvmovies.xyz",16],["ytsyify.co",16],["ytsyifymovie.com",16],["zerion.cc",16],["zerocoin.top",16],["zitss.xyz",16],["zpaste.net",16],["zplayer.live",16],["oko.sh",18],["washingtonpost.com",19],["bigbtc.win",20],["cryptofun.space",20],["gosexpod.com",21],["sexo5k.com",22],["truyen-hentai.com",22],["theshedend.com",24],["rsadnetworkinfo.com",24],["rsinsuranceinfo.com",24],["rsfinanceinfo.com",24],["rsgamer.app",24],["rssoftwareinfo.com",24],["rshostinginfo.com",24],["rseducationinfo.com",24],["zeroupload.com",24],["securenetsystems.net",24],["miniwebtool.com",24],["bchtechnologies.com",24],["spiegel.de",25],["appnee.com",26],["d0o0d.com",27],["do0od.com",27],["doods.pro",27],["ds2play.com",27],["ds2video.com",27],["onlyfaucet.com",28],["claimclicks.com",28],["thebullspen.com",28],["livecamrips.com",29],["smutty.com",29],["down.dataaps.com",29],["filmweb.pl",29],["infinityscans.xyz",30],["infinityscans.net",30],["iisfvirtual.in",31],["starxinvestor.com",31],["beatsnoop.com",31],["fetchpik.com",31],["hackerranksolution.in",31],["webhostingpost.com",[32,44]],["tophostingapp.com",32],["digitalmarktrend.com",32],["btcbitco.in",33],["btcsatoshi.net",33],["cempakajaya.com",33],["crypto4yu.com",33],["gainl.ink",33],["manofadan.com",33],["readbitcoin.org",33],["wiour.com",33],["kienthucrangmieng.com",33],["tremamnon.com",33],["btc25.org",33],["tron-free.com",33],["bitsmagic.fun",33],["ourcoincash.xyz",33],["hynews.biz",33],["blog.cryptowidgets.net",34],["blog.insurancegold.in",34],["blog.wiki-topia.com",34],["blog.coinsvalue.net",34],["blog.cookinguide.net",34],["blog.freeoseocheck.com",34],["aylink.co",35],["suaurl.com",36],["sugarona.com",37],["nishankhatri.xyz",37],["highkeyfinance.com",37],["amanguides.com",37],["tinys.click",38],["answerpython.com",38],["gsm-solution.com",38],["h-donghua.com",38],["hindisubbedacademy.com",38],["pkgovjobz.com",38],["ripexbooster.xyz",38],["serial4.com",38],["serial412.blogspot.com",38],["sigmalinks.in",38],["tutorgaming.com",38],["appsbull.com",39],["diudemy.com",39],["maqal360.com",39],["mphealth.online",39],["makefreecallsonline.com",39],["androjungle.com",39],["bookszone.in",39],["drakescans.com",39],["shortix.co",39],["msonglyrics.com",39],["app-sorteos.com",39],["bokugents.com",39],["btvplus.bg",39],["coingraph.us",40],["impact24.us",40],["iconicblogger.com",41],["tii.la",42],["kiemlua.com",43],["123moviefree4u.com",44],["194.163.183.129",44],["6movies.net",44],["adsh.cc",44],["afilmyhouse.blogspot.com",44],["ak.sv",44],["animefenix.com",44],["animefrenzy.net",44],["animeshouse.info",44],["animesultra.com",44],["api.webs.moe",44],["apkmody.io",44],["atglinks.com",44],["attvideo.com",44],["avimobilemovies.net",44],["backfirstwo.site",[44,112]],["cinema.cimatna.com",44],["crazyblog.in",44],["dembed1.com",44],["dembed2.com",44],["divicast.com",44],["egynow.cam",44],["embed.meomeo.pw",44],["fanproj.net",44],["filebox.click",44],["filmeserialeonline.org",44],["filmyzilla2021.xyz",44],["filmyzilla2022.com",44],["filmyzillafullmovie.waystohunt.info",44],["flexyhit.com",44],["foreverwallpapers.com",44],["french-streams.cc",44],["fslinks.org",44],["fstream365.com",44],["gdrivez.xyz",44],["hinatasoul.com",44],["hitmovies4u.com",44],["hotstar.news",44],["isaidub3.co",44],["membed.net",44],["mgnetu.com",44],["moviesdanet.com",44],["moviewatchonline.com.pk",44],["mp3juice.info",44],["mp3juices.cc",44],["neomovies.net",44],["newsrade.com",44],["nollyverse.com",44],["oii.io",44],["pepperlive.info",44],["playertv.net",44],["putlocker68.com",44],["s.to",44],["sharkfish.xyz",44],["skidrowcodex.net",44],["sports-stream.site",44],["stream4free.live",44],["tamilmobilemovies.in",44],["thewatchseries.live",44],["tnmusic.in",44],["travelplanspro.com",44],["tusfiles.com",44],["unlimitmovies.com",44],["uploadflix.org",44],["vid-guard.com",44],["vidsaver.net",44],["vidspeeds.com",44],["viralitytoday.com",44],["voiranime.stream",44],["watchdoctorwhoonline.com",44],["webseriesclub.com",44],["ylink.bid",44],["ytix.xyz",44],["unblocked.id",46],["listendata.com",47],["7xm.xyz",47],["fastupload.io",47],["azmath.info",47],["wouterplanet.com",48],["androidacy.com",49],["jytechs.in",50],["djxmaza.in",50],["miuiflash.com",50],["thecubexguide.com",50],["veryfreeporn.com",51],["besthdgayporn.com",52],["freeroms.com",53],["soap2day-online.com",53],["austiblox.net",54],["btcbunch.com",55],["teachoo.com",56],["genshinlab.com",57],["fourfourtwo.co.kr",57],["interfootball.co.kr",57],["a-ha.io",57],["cboard.net",57],["mobilitytv.co.kr",57],["mememedia.co.kr",57],["newautopost.co.kr",57],["tvreport.co.kr",57],["tenbizt.com",57],["jjang0u.com",57],["joongdo.co.kr",57],["viva100.com",57],["thephoblographer.com",57],["newdaily.co.kr",57],["dogdrip.net",57],["golf-live.at",57],["gamingdeputy.com",57],["thesaurus.net",57],["tweaksforgeeks.com",57],["alle-tests.nl",57],["apkmirror.com",57],["dotkeypress.kr",57],["viewcash.co.kr",57],["tripplus.co.kr",57],["enterdiary.com",57],["mtodayauto.com",57],["hotplacehunter.co.kr",57],["mystylezip.com",57],["majorgeeks.com",57],["poro.gg",57],["maple.gg",57],["lolchess.gg",57],["dak.gg",57],["meconomynews.com",57],["brandbrief.co.kr",57],["dfast.kr",57],["youtu.co",57],["mlbpark.donga.com",57],["capress.kr",57],["carandmore.co.kr",57],["maxmovie.kr",57],["motorgraph.com",57],["newsbell.co.kr",57],["tminews.co.kr",57],["thehousemagazine.kr",57],["hardreset.info",57],["metabattle.com",57],["maketecheasier.com",57],["motorbikecatalog.com",57],["heraldcorp.com",57],["allthetests.com",58],["issuya.com",58],["topstarnews.net",58],["udvl.com",59],["topsporter.net",60],["sportshub.to",60],["easymc.io",61],["yunjiema.top",61],["hacoos.com",62],["bondagevalley.cc",63],["zefoy.com",64],["vidello.net",65],["resizer.myct.jp",66],["gametohkenranbu.sakuraweb.com",67],["jisakuhibi.jp",68],["rank1-media.com",68],["lifematome.blog",69],["fm.sekkaku.net",70],["free-avx.jp",71],["dvdrev.com",72],["betweenjpandkr.blog",73],["nft-media.net",74],["ghacks.net",75],["leak.sx",76],["pornleaks.in",76],["songspk2.info",77],["truyentranhfull.net",78],["nectareousoverelate.com",81],["khoaiphim.com",82],["haafedk2.com",83],["fordownloader.com",83],["jovemnerd.com.br",84],["nicomanga.com",85],["totalcsgo.com",86],["vivamax.asia",87],["manysex.com",88],["gaminginfos.com",89],["tinxahoivn.com",90],["forums-fastunlock.com",91],["automoto.it",92],["sekaikomik.bio",93],["codelivly.com",94],["ophim.vip",95],["touguatize.monster",96],["client.falixnodes.net",97],["novelhall.com",98],["hes-goal.net",99],["abc17news.com",100],["adoredbyalex.com",100],["agrodigital.com",100],["al.com",100],["allaboutthetea.com",100],["allmovie.com",100],["allmusic.com",100],["allthingsthrifty.com",100],["androidpolice.com",100],["antyradio.pl",100],["artforum.com",100],["artnews.com",100],["avherald.com",100],["awkward.com",100],["awkwardmom.com",100],["bailiwickexpress.com",100],["barnsleychronicle.com",100],["becomingpeculiar.com",100],["blogher.com",100],["briefeguru.de",100],["carmagazine.co.uk",100],["cattime.com",100],["cbr.com",100],["cbssports.com",100],["chaptercheats.com",100],["cleveland.com",100],["collider.com",100],["comingsoon.net",100],["commercialobserver.com",100],["competentedigitale.ro",100],["crafty.house",100],["dailyvoice.com",100],["decider.com",100],["didyouknowfacts.com",100],["dogtime.com",100],["dualshockers.com",100],["dustyoldthing.com",100],["faithhub.net",100],["femestella.com",100],["footwearnews.com",100],["freeconvert.com",100],["frogsandsnailsandpuppydogtail.com",100],["fsm-media.com",100],["gamerant.com",100],["gfinityesports.com",100],["givemesport.com",100],["gulflive.com",100],["helloflo.com",100],["howtogeek.com",100],["insider-gaming.com",100],["insurancejournal.com",100],["jasminemaria.com",100],["kion546.com",100],["lehighvalleylive.com",100],["lettyskitchen.com",100],["liveandletsfly.com",100],["lizzieinlace.com",100],["localnews8.com",100],["lonestarlive.com",100],["madeeveryday.com",100],["maidenhead-advertiser.co.uk",100],["makeuseof.com",100],["mardomreport.net",100],["masslive.com",100],["milestomemories.com",100],["mlive.com",100],["modernmom.com",100],["momtastic.com",100],["mostlymorgan.com",100],["movieweb.com",100],["musicfeeds.com.au",100],["nationalreview.com",100],["nj.com",100],["nordot.app",100],["nothingbutnewcastle.com",100],["nsjonline.com",100],["nypost.com",100],["oakvillenews.org",100],["observer.com",100],["oregonlive.com",100],["pagesix.com",100],["pennlive.com",100],["pinkonthecheek.com",100],["puckermom.com",100],["qtoptens.com",100],["realgm.com",100],["robbreport.com",100],["royalmailchat.co.uk",100],["samchui.com",100],["sandrarose.com",100],["screenrant.com",100],["sheknows.com",100],["sherdog.com",100],["sidereel.com",100],["silive.com",100],["simpleflying.com",100],["spacenews.com",100],["superherohype.com",100],["syracuse.com",100],["thebeautysection.com",100],["thecelticblog.com",100],["thecurvyfashionista.com",100],["thefashionspot.com",100],["thegamer.com",100],["thegamescabin.com",100],["thenonconsumeradvocate.com",100],["timesnews.net",100],["toyotaklub.org.pl",100],["travelingformiles.com",100],["tutsnode.org",100],["tvline.com",100],["viralviralvideos.com",100],["wimp.com",100],["woojr.com",100],["xda-developers.com",100],["cheatsheet.com",101],["pwinsider.com",101],["bagi.co.in",102],["keran.co",102],["biblestudytools.com",103],["christianheadlines.com",103],["ibelieve.com",103],["kuponigo.com",104],["kimcilonly.site",105],["kimcilonly.link",105],["cryptoearns.com",106],["inxxx.com",107],["ipaspot.app",108],["embedwish.com",109],["filelions.live",109],["leakslove.net",109],["jenismac.com",110],["vxetable.cn",111],["jewelavid.com",112],["nizarstream.com",112],["snapwordz.com",113],["toolxox.com",113],["rl6mans.com",113],["idol69.net",113],["plumbersforums.net",114],["123movies57.online",115],["gulio.site",116],["mediaset.es",117],["izlekolik.net",118],["donghuaworld.com",119],["letsdopuzzles.com",120],["tainio-mania.online",121],["hes-goals.io",122],["pkbiosfix.com",122],["casi3.xyz",122],["rediff.com",123],["dzapk.com",124],["darknessporn.com",125],["familyporner.com",125],["freepublicporn.com",125],["pisshamster.com",125],["punishworld.com",125],["xanimu.com",125],["pig69.com",126],["cosplay18.pics",126],["javhdo.net",127],["eroticmoviesonline.me",128],["teleclub.xyz",129],["ecamrips.com",130],["showcamrips.com",130],["9animetv.to",131],["jornadaperfecta.com",132],["loseart.com",133],["sousou-no-frieren.com",134],["veev.to",135],["intro-hd.net",136],["monacomatin.mc",136],["nodo313.net",136],["unite-guide.com",137],["appimagehub.com",138],["gnome-look.org",138],["store.kde.org",138],["linux-apps.com",138],["opendesktop.org",138],["pling.com",138],["xfce-look.org",138],["botcomics.com",139],["cefirates.com",139],["chandlerorchards.com",139],["comicleaks.com",139],["marketdata.app",139],["monumentmetals.com",139],["tapmyback.com",139],["ping.gg",139],["revistaferramental.com.br",139],["hawpar.com",139],["alpacafinance.org",[139,140]],["nookgaming.com",139],["enkeleksamen.no",139],["kvest.ee",139],["creatordrop.com",139],["panpots.com",139],["cybernetman.com",139],["bitdomain.biz",139],["gerardbosch.xyz",139],["fort-shop.kiev.ua",139],["accuretawealth.com",139],["resourceya.com",139],["tracktheta.com",139],["tt.live",140],["future-fortune.com",140],["abhijith.page",140],["madrigalmaps.com",140],["adventuretix.com",140],["panprices.com",141],["intercity.technology",141],["freelancer.taxmachine.be",141],["adria.gg",141],["fjlaboratories.com",141],["proboards.com",142],["winclassic.net",142],["www.chip.de",[144,145]],["bitcotasks.com",146],["perchance.org",[147,148,149,150]],["abema.tv",151]]);

const entitiesMap = new Map([["1337x",[3,16]],["kimcartoon",5],["pahe",[6,16]],["soap2day",6],["hqq",8],["waaw",8],["teluguflix",10],["pixhost",11],["viprow",[15,16,44]],["cloudvideotv",[15,44]],["vidsrc",[15,44]],["123-movies",16],["123movieshd",16],["123movieshub",16],["123moviesme",16],["1stream",16],["1tamilmv",16],["2ddl",16],["2umovies",16],["3hiidude",16],["4stream",16],["5movies",16],["7hitmovies",16],["9xmovie",16],["aagmaal",[16,44]],["adblockeronstape",16],["adblockeronstreamtape",16],["adblockstreamtape",16],["adblockstrtape",16],["adblockstrtech",16],["adblocktape",16],["adcorto",16],["alexsports",16],["alexsportss",16],["alexsportz",16],["animepahe",16],["animesanka",16],["animixplay",16],["aniplay",16],["antiadtape",16],["asianclub",16],["ask4movie",16],["atomixhq",[16,44]],["atomohd",16],["beinmatch",[16,23]],["bhaai",16],["buffstreams",16],["canalesportivo",16],["clickndownload",16],["clicknupload",16],["crackstreams",[16,44]],["daddylive",[16,44]],["daddylivehd",[16,44]],["desiremovies",16],["devlib",16],["divxtotal",16],["divxtotal1",16],["dvdplay",[16,44]],["elixx",16],["enjoy4k",16],["estrenosflix",16],["estrenosflux",16],["estrenosgo",16],["f1stream",16],["fbstream",16],["file4go",16],["filmyzilla",[16,44]],["findav",16],["findporn",16],["flixmaza",16],["flizmovies",16],["freetvsports",16],["fullymaza",16],["g3g",16],["gotxx",16],["grantorrent",16],["hdmoviesfair",[16,44]],["hdmoviesflix",16],["hiidudemoviez",16],["imgsen",16],["imgsto",16],["incest",16],["incestflix",16],["javmost",16],["keeplinks",16],["keepvid",16],["keralahd",16],["khatrimazaful",16],["khatrimazafull",16],["leechall",16],["linkshorts",16],["mangovideo",16],["masaporn",16],["miniurl",16],["mirrorace",16],["mixdroop",16],["mixdrop",16],["mkvcage",16],["mlbstream",16],["mlsbd",16],["mmsbee",16],["motogpstream",16],["movieplex",16],["movierulzlink",16],["movies123",16],["moviesflix",16],["moviesmeta",[16,44]],["moviessources",16],["moviesverse",16],["moviezwaphd",16],["mrunblock",16],["nbastream",16],["newmovierulz",16],["nflstream",16],["nhlstream",16],["noblocktape",16],["nocensor",16],["onlyfams",16],["ouo",16],["pctfenix",[16,44]],["pctnew",[16,44]],["peliculas24",16],["pelisplus",16],["piratebay",16],["plyjam",16],["plylive",16],["plyvdo",16],["pornhoarder",16],["prbay",16],["projectfreetv",16],["proxybit",16],["psarips",16],["racaty",16],["remaxhd",16],["rintor",16],["rnbxclusive",16],["rnbxclusive0",16],["rnbxclusive1",16],["rojadirecta",16],["rojadirectaenvivo",16],["rugbystreams",16],["safetxt",16],["shadowrangers",16],["shahi4u",16],["shahid4u1",16],["shahid4uu",16],["shavetape",16],["shortearn",16],["shorten",16],["shorttey",16],["shortzzy",16],["skymovieshd",16],["socceronline",16],["softarchive",16],["sports-stream",16],["sshhaa",16],["stapadblockuser",16],["stape",16],["stapewithadblock",16],["starmusiq",16],["strcloud",16],["streamadblocker",[16,44]],["streamadblockplus",16],["streamcdn",16],["streamhub",16],["streamsport",16],["streamta",16],["streamtape",16],["streamtapeadblockuser",16],["strikeout",16],["strtape",16],["strtapeadblock",16],["strtapeadblocker",16],["strtapewithadblock",16],["strtpe",16],["swatchseries",16],["tabooflix",16],["tennisstreams",16],["themoviesflix",16],["thepiratebay",16],["thisav",16],["tmearn",16],["toonanime",16],["torlock",16],["tormalayalam",16],["torrentz2eu",16],["tutelehd",16],["tvply",16],["u4m",16],["ufcstream",16],["unblocknow",16],["uploadbuzz",16],["usagoals",16],["vexmoviex",16],["vidclouds",16],["vidlox",16],["vipbox",[16,44]],["vipboxtv",[16,44]],["vipleague",16],["watch-series",16],["watchseries",16],["xclusivejams",16],["xmoviesforyou",16],["youdbox",16],["ytmp3eu",16],["yts-subs",16],["yts",16],["zooqle",16],["dutchycorp",17],["dood",[27,44]],["doodstream",27],["dooood",[27,44]],["shrinke",29],["shrinkme",29],["mydverse",38],["poplinks",39],["123movies",44],["123moviesla",44],["123movieweb",44],["2embed",44],["4hiidude",44],["720pstream",44],["9xmovies",44],["adshort",44],["allmovieshub",44],["asianplay",44],["atishmkv",44],["cricstream",44],["crictime",44],["databasegdriveplayer",44],["dloader",44],["easylinks",44],["extralinks",44],["extramovies",44],["faselhd",44],["filemoon",44],["filmy",44],["filmyhit",44],["filmywap",44],["fmovies",44],["fsapi",44],["gdplayer",44],["gdriveplayer",44],["goload",44],["gomoviefree",44],["gomovies",44],["gowatchseries",44],["hdmoviz",44],["hindilinks4u",44],["hurawatch",44],["isaidub",44],["isaidubhd",44],["jalshamoviezhd",44],["jiorockers",44],["linkshub",44],["linksme",44],["livecricket",44],["madrasdub",44],["mkvcinemas",44],["mobilemovies",44],["movies2watch",44],["moviesda1",44],["moviespapa",44],["mp4moviez",44],["mydownloadtube",44],["nsw2u",44],["nuroflix",44],["o2tvseries",44],["o2tvseriesz",44],["pirlotv",44],["poscitech",44],["primewire",44],["serienstream",44],["sflix",44],["shahed4u",44],["shaheed4u",44],["speedostream",44],["sportcast",44],["sportskart",44],["streamingcommunity",44],["tamilarasan",44],["tamilfreemp3songs",44],["tamilprinthd",44],["torrentdosfilmes",44],["uploadrar",44],["uqload",44],["vidcloud9",44],["vido",44],["vidoo",44],["vudeo",44],["vumoo",44],["watchomovies",[44,53]],["yesmovies",44],["kickass",45],["cine-calidad",51],["actvid",79]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function removeNodeText(
    nodeName,
    condition,
    ...extraArgs
) {
    replaceNodeTextFn(nodeName, '', '', 'condition', condition || '', ...extraArgs);
}

function replaceNodeTextFn(
    nodeName = '',
    pattern = '',
    replacement = ''
) {
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('replace-node-text.fn', ...Array.from(arguments));
    const reNodeName = safe.patternToRegex(nodeName, 'i', true);
    const rePattern = safe.patternToRegex(pattern, 'gms');
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 3);
    const reCondition = safe.patternToRegex(extraArgs.condition || '', 'ms');
    const stop = (takeRecord = true) => {
        if ( takeRecord ) {
            handleMutations(observer.takeRecords());
        }
        observer.disconnect();
        if ( safe.logLevel > 1 ) {
            safe.uboLog(logPrefix, 'Quitting');
        }
    };
    let sedCount = extraArgs.sedCount || 0;
    const handleNode = node => {
        const before = node.textContent;
        reCondition.lastIndex = 0;
        if ( safe.RegExp_test.call(reCondition, before) === false ) { return true; }
        rePattern.lastIndex = 0;
        if ( safe.RegExp_test.call(rePattern, before) === false ) { return true; }
        rePattern.lastIndex = 0;
        const after = pattern !== ''
            ? before.replace(rePattern, replacement)
            : replacement;
        node.textContent = after;
        if ( safe.logLevel > 1 ) {
            safe.uboLog(logPrefix, `Text before:\n${before.trim()}`);
        }
        safe.uboLog(logPrefix, `Text after:\n${after.trim()}`);
        return sedCount === 0 || (sedCount -= 1) !== 0;
    };
    const handleMutations = mutations => {
        for ( const mutation of mutations ) {
            for ( const node of mutation.addedNodes ) {
                if ( reNodeName.test(node.nodeName) === false ) { continue; }
                if ( handleNode(node) ) { continue; }
                stop(false); return;
            }
        }
    };
    const observer = new MutationObserver(handleMutations);
    observer.observe(document, { childList: true, subtree: true });
    if ( document.documentElement ) {
        const treeWalker = document.createTreeWalker(
            document.documentElement,
            NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT
        );
        let count = 0;
        for (;;) {
            const node = treeWalker.nextNode();
            count += 1;
            if ( node === null ) { break; }
            if ( reNodeName.test(node.nodeName) === false ) { continue; }
            if ( handleNode(node) ) { continue; }
            stop(); break;
        }
        safe.uboLog(logPrefix, `${count} nodes present before installing mutation observer`);
    }
    if ( extraArgs.stay ) { return; }
    runAt(( ) => {
        const quitAfter = extraArgs.quitAfter || 0;
        if ( quitAfter !== 0 ) {
            setTimeout(( ) => { stop(); }, quitAfter);
        } else {
            stop();
        }
    }, 'interactive');
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
    if ( scriptletGlobals.safeSelf ) {
        return scriptletGlobals.safeSelf;
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
        'Object': Object,
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
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
        // Properties
        logLevel: 0,
        // Methods
        makeLogPrefix(...args) {
            return this.sendToLogger && `[${args.join(' \u205D ')}]` || '';
        },
        uboLog(...args) {
            if ( this.sendToLogger === undefined ) { return; }
            if ( args === undefined || args[0] === '' ) { return; }
            return this.sendToLogger('info', ...args);
            
        },
        uboErr(...args) {
            if ( this.sendToLogger === undefined ) { return; }
            if ( args === undefined || args[0] === '' ) { return; }
            return this.sendToLogger('error', ...args);
        },
        escapeRegexChars(s) {
            return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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
                    re: new this.RegExp(this.escapeRegexChars(pattern),
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
                const reStr = this.escapeRegexChars(pattern);
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
            return this.Object_fromEntries(entries);
        },
    };
    scriptletGlobals.safeSelf = safe;
    if ( scriptletGlobals.bcSecret === undefined ) { return safe; }
    // This is executed only when the logger is opened
    const bc = new self.BroadcastChannel(scriptletGlobals.bcSecret);
    let bcBuffer = [];
    safe.logLevel = scriptletGlobals.logLevel || 1;
    safe.sendToLogger = (type, ...args) => {
        if ( args.length === 0 ) { return; }
        const text = `[${document.location.hostname || document.location.href}]${args.join(' ')}`;
        if ( bcBuffer === undefined ) {
            return bc.postMessage({ what: 'messageToLogger', type, text });
        }
        bcBuffer.push({ type, text });
    };
    bc.onmessage = ev => {
        const msg = ev.data;
        switch ( msg ) {
        case 'iamready!':
            if ( bcBuffer === undefined ) { break; }
            bcBuffer.forEach(({ type, text }) =>
                bc.postMessage({ what: 'messageToLogger', type, text })
            );
            bcBuffer = undefined;
            break;
        case 'setScriptletLogLevelToOne':
            safe.logLevel = 1;
            break;
        case 'setScriptletLogLevelToTwo':
            safe.logLevel = 2;
            break;
        }
    };
    bc.postMessage('areyouready?');
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
    try { removeNodeText(...argsList[i]); }
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

const targetWorld = 'ISOLATED';

// Not Firefox
if ( typeof wrappedJSObject !== 'object' || targetWorld === 'ISOLATED' ) {
    return uBOL_removeNodeText();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_removeNodeText = cloneInto([
            [ '(', uBOL_removeNodeText.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_removeNodeText);
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
    delete page.uBOL_removeNodeText;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
