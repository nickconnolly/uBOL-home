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

const argsList = [["script","AdDefend"],["script","/getAdUnitPath|\\.then\\(eval\\)|DisplayAcceptableAdIfAdblocked|,eval\\)\\)\\)\\;|\\.join\\(\\'\\'\\)\\}\\;/"],["script","/==undefined.*body/"],["script","style"],["script","Promise"],["script","Number.isSafeInteger"],["script","Reflect"],["script","document.write"],["script","self == top"],["script","/popunder|isAdBlock|admvn.src/i"],["script","deblocker"],["script","exdynsrv"],["script","/<.*>.*\\x40/"],["script","/adb/i"],["script","adsbygoogle"],["script","FingerprintJS"],["script","/h=decodeURIComponent|popundersPerIP/"],["script","/adblock.php"],["script","/document\\.createElement|\\.banner-in/"],["script","/block-adb|-0x|adblock/"],["script","ExoLoader"],["script","/?key.*open/","condition","key"],["script","adblock"],["script","homad"],["script","alert"],["script","/adblock|popunder/"],["script","fetch"],["script","window.open"],["script",";break;case $."],["script","googlesyndication"],["script","queue.addFile"],["script","htmls"],["script","/\\/detected\\.html|Adblock/"],["script","toast"],["script","/window\\.open|window\\.location\\.href|document\\.addEventListener|\\$\\(document\\)\\.ready.*show/"],["script","AdbModel"],["script","antiAdBlockerHandler"],["script","onerror"],["script","/checkAdBlocker|AdblockRegixFinder/"],["script","catch"],["script","adb_detected"],["script","Adblock"],["script","break;case $."],["style","text-decoration"],["script","push"],["script","AdBlocker"],["script","clicky"],["script","charCodeAt"],["script","checkifscript"],["script","popMagic"],["script","/popMagic|pop1stp/"],["script","popunder"],["script","/adblock|location\\.replace/"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","KCgpPT57bGV0IGU"],["script","error-report.com"],["script","serve"],["script","/ConsoleBan|alert|AdBlocker/"],["script","adb"],["script","await fetch"],["script","innerHTML"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","popUnder"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","【PR】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/^Advertisement$/"],["script","zfgloaded"],["script","ai_adb"],["script","HTMLAllCollection"],["script","liedetector"],["script","popWin"],["script","end_click"],["script","ad blocker"],["script","closeAd"],["script","/modal|popupads/"],["script","/adconfig/i"],["script","AdblockDetector"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","ad_block"],["script","app_checkext"],["script","shown_at"],["script","clientHeight"],["script","/url_key|adHtml/"],["script","pop.target"],["script","showadblock"],["script","axios"],["script","ad block"],["script","\"v4ac1eiZr0\""],["script","admiral"],["script","/charAt|XMLHttpRequest/"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","/$.*open/"],["script","Brave"],["script","egoTab"],["script","abDetectorPro"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","/\\[\\'push\\'\\]/"],["script","/adblock/i"],["script","/$.*adUnits/"],["script","decodeURIComponent"],["script","RegExp"],["script","adbl"],["script","doOpen"],["script","adsBlocked"],["script","chkADB"],["script","AaDetector"],["script","AdBlock"],["script","Symbol.iterator"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","detectAdBlock"],["script","popup"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","document.head.appendChild"],["script","Number"],["script","ad-block-activated"],["script","insertBefore"],["script","pop.doEvent"],["script","constructor"],["script","/adbl/i"],["script","detect"],["script","btnHtml"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","vglnk"],["script","/RegExp\\(\\'/","condition","RegExp"],["script",".slice(0, -1); }"],["script","(Math.PI).toFixed(10).slice(0, -1);"],["script","AdblockRegixFinder"],["script","/(?<=if\\((\\s){0,}!window\\.(\\s){0,}[shouldExist\\d+]{1,}\\) {)([^;]+)/gms"],["script","/document\\[`(.+?)`\\]\\.innerHTML = window\\..*;/gms"],["script","/document.*.innerHTML =window\\..*;/gms"],["script","/document\\[\"body\"\\]\\.innerHTML\\s*=\\s*([^;]+);/g"],["script","NREUM"]];

const hostnamesMap = new Map([["giga.de",0],["kino.de",0],["teltarif.de",1],["aupetitparieur.com",2],["allthingsvegas.com",2],["100percentfedup.com",2],["beforeitsnews.com",2],["concomber.com",2],["conservativebrief.com",2],["conservativefiringline.com",2],["dailylol.com",2],["funnyand.com",2],["letocard.fr",2],["mamieastuce.com",2],["meilleurpronostic.fr",2],["patriotnationpress.com",2],["toptenz.net",2],["vitamiiin.com",2],["writerscafe.org",2],["populist.press",2],["dailytruthreport.com",2],["livinggospeldaily.com",2],["first-names-meanings.com",2],["welovetrump.com",2],["thehayride.com",2],["thelibertydaily.com",2],["thepoke.co.uk",2],["thepolitistick.com",2],["theblacksphere.net",2],["shark-tank.com",2],["naturalblaze.com",2],["greatamericanrepublic.com",2],["dailysurge.com",2],["truthlion.com",2],["flagandcross.com",2],["westword.com",2],["republicbrief.com",2],["freedomfirstnetwork.com",2],["phoenixnewtimes.com",2],["designbump.com",2],["clashdaily.com",2],["madworldnews.com",2],["reviveusa.com",2],["sonsoflibertymedia.com",2],["thedesigninspiration.com",2],["videogamesblogger.com",2],["protrumpnews.com",2],["thepalmierireport.com",2],["kresy.pl",2],["thepatriotjournal.com",2],["gellerreport.com",2],["thegatewaypundit.com",2],["wltreport.com",2],["miaminewtimes.com",2],["politicalsignal.com",2],["rightwingnews.com",2],["bigleaguepolitics.com",2],["comicallyincorrect.com",2],["moviepilot.de",4],["yts.mx",7],["upornia.com",9],["pinsystem.co.uk",10],["tinyppt.com",10],["downfile.site",10],["expertvn.com",10],["trangchu.news",10],["bharathwick.com",10],["descargaspcpro.net",10],["dx-tv.com",10],["rt3dmodels.com",10],["plc4me.com",10],["blisseyhusbands.com",10],["mhdsportstv.com",10],["madaradex.org",10],["learnmany.in",10],["loaninsurehub.com",10],["appkamods.com",10],["techacode.com",10],["3dmodelshare.org",10],["nulleb.com",10],["reset-scans.us",10],["coursesghar.com",10],["thecustomrom.com",10],["bingotingo.com",10],["ghior.com",10],["3dmili.com",10],["karanpc.com",10],["plc247.com",10],["hiraethtranslation.com",10],["javindo.eu.org",10],["chindohot.site",10],["freepasses.org",10],["tomarnarede.pt",10],["basketballbuzz.ca",10],["dribbblegraphics.com",10],["kemiox.com",10],["checkersmenu.us",10],["teksnologi.com",10],["dollareuro.live",10],["next-episode.net",12],["eporner.com",13],["germancarforum.com",14],["cybercityhelp.in",14],["sinvida.me",[15,16]],["streamnoads.com",[15,16,42]],["bowfile.com",15],["cloudvideo.tv",[15,42]],["coloredmanga.com",15],["embedstream.me",[15,16,42]],["exeo.app",15],["hiphopa.net",[15,16]],["megaup.net",15],["tv247.us",[15,16]],["uploadhaven.com",15],["userscloud.com",[15,42]],["mdfx9dc8n.net",16],["mdzsmutpcvykb.net",16],["123movies4u.site",16],["1337xporn.com",16],["141jav.com",16],["1bit.space",16],["1bitspace.com",16],["38dh2.top",16],["3dporndude.com",16],["4archive.org",16],["4horlover.com",16],["560pmovie.com",16],["60fps.xyz",16],["85tube.com",16],["85videos.com",16],["8xlinks.click",16],["a2zcrackworld.com",16],["aazzz.xyz",16],["acefile.co",16],["actusports.eu",16],["adblockplustape.com",16],["adclickersbot.com",16],["adricami.com",16],["adslink.pw",16],["adultstvlive.com",16],["adz7short.space",16],["aeblender.com",16],["ahdafnews.blogspot.com",16],["ak47sports.com",16],["akuma.moe",16],["allplayer.tk",16],["allstreaming.online",16],["amadoras.cf",16],["amadorasdanet.shop",16],["amateurblog.tv",16],["androidadult.com",16],["anhsexjav.xyz",16],["anidl.org",16],["anime-loads.org",16],["animeblkom.net",16],["animefire.net",16],["animelek.me",16],["animeshouse.net",16],["animespire.net",16],["animestotais.xyz",16],["animeyt.es",16],["anroll.net",16],["anymoviess.xyz",16],["aotonline.org",16],["asenshu.com",16],["asialiveaction.com",16],["asianclipdedhd.net",16],["askim-bg.com",16],["asumsikedaishop.com",16],["avcrempie.com",16],["avseesee.com",16],["backfirstwo.com",16],["bajarjuegospcgratis.com",16],["balkanportal.net",16],["balkanteka.net",16],["bdnewszh.com",[16,42]],["belowporn.com",16],["bestclaimtrx.xyz",16],["bestgirlsexy.com",16],["bestnhl.com",16],["bestporn4free.com",16],["bestporncomix.com",16],["bet36.es",16],["bikinitryon.net",16],["birdurls.com",16],["bitsearch.to",16],["blackcockadventure.com",16],["blackcockchurch.org",16],["blackporncrazy.com",16],["blizzboygames.net",16],["blizzpaste.com",16],["blkom.com",16],["blog-peliculas.com",16],["blogtrabalhista.com",16],["blurayufr.xyz",16],["bobsvagene.club",16],["bolly4umovies.click",16],["bonusharian.pro",16],["brilian-news.id",16],["brupload.net",16],["bucitana.com",16],["cablegratis.online",16],["camchickscaps.com",16],["camgirlcum.com",16],["camgirls.casa",16],["cashurl.in",16],["castingx.net",16],["ccurl.net",[16,42]],["celebrity-leaks.net",16],["cgpelis.net",16],["charexempire.com",16],["clasico.tv",16],["clik.pw",16],["coin-free.com",[16,31]],["coins100s.fun",16],["comicsmanics.com",16],["compucalitv.com",16],["coolcast2.com",16],["cosplaytab.com",16],["countylocalnews.com",16],["cpmlink.net",16],["crackstreamshd.click",16],["crespomods.com",16],["crisanimex.com",16],["crunchyscan.fr",16],["cuevana3.fan",16],["cuevana3hd.com",16],["cumception.com",16],["curvaweb.com",16],["cutpaid.com",16],["datawav.club",16],["daughtertraining.com",16],["deepgoretube.site",16],["deltabit.co",16],["depvailon.com",16],["derleta.com",16],["desivdo.com",16],["desixx.net",16],["detikkebumen.com",16],["deutschepornos.me",16],["diasoft.xyz",16],["directupload.net",16],["diskusscan.com",16],["dixva.com",16],["dlhd.sx",16],["doctormalay.com",16],["dofusports.xyz",16],["dogemate.com",16],["doods.cam",16],["doodskin.lat",16],["downloadrips.com",16],["downvod.com",16],["dphunters.mom",16],["dragontranslation.com",16],["duddes.xyz",16],["dvdfullestrenos.com",16],["ebookbb.com",16],["ebookhunter.net",16],["egyanime.com",16],["egygost.com",16],["egyshare.cc",16],["ekasiwap.com",16],["electro-torrent.pl",16],["elil.cc",16],["embed4u.xyz",16],["eplayer.click",16],["erovoice.us",16],["eroxxx.us",16],["estrenosdoramas.net",16],["everia.club",16],["everythinginherenet.blogspot.com",16],["extrafreetv.com",16],["extremotvplay.com",16],["fapinporn.com",16],["fapptime.com",16],["fashionblog.tv",16],["fastreams.live",16],["faucethero.com",16],["fembed.com",16],["femdom-joi.com",16],["fileone.tv",16],["film1k.com",16],["filmeonline2023.net",16],["filmesonlinex.org",16],["filmesonlinexhd.biz",[16,42]],["filmovi.ws",[16,42]],["filmovitica.com",16],["filmymaza.blogspot.com",16],["filthy.family",16],["fixfinder.click",16],["flostreams.xyz",16],["flyfaucet.com",16],["footyhunter.lol",16],["footyhunter3.xyz",[16,42]],["forex-golds.com",16],["forex-trnd.com",16],["forumchat.club",16],["forumlovers.club",16],["freemoviesonline.biz",16],["freeomovie.co.in",16],["freeomovie.to",16],["freeporncomic.net",16],["freepornhdonlinegay.com",16],["freeproxy.io",16],["freeuse.me",16],["freeusexporn.com",16],["fsicomics.com",16],["gambarbogel.xyz",16],["gamepcfull.com",16],["gameronix.com",16],["gamesfullx.com",16],["gameshdlive.net",16],["gameshdlive.xyz",[16,42]],["gamesmountain.com",16],["gamesrepacks.com",16],["gamingguru.fr",16],["gamovideo.com",16],["garota.cf",16],["gaydelicious.com",16],["gaypornmasters.com",16],["gaysex69.net",16],["gemstreams.com",16],["get-to.link",16],["girlscanner.org",16],["giurgiuveanul.ro",16],["gledajcrtace.xyz",16],["gocast2.com",16],["gomo.to",16],["gostosa.cf",16],["gtlink.co",16],["gwiazdypornosow.pl",16],["haho.moe",16],["hatsukimanga.com",16],["hayhd.net",16],["hdsaprevodom.com",16],["hdstreamss.club",16],["hentais.tube",16],["hentaistream.co",16],["hentaitk.net",16],["hentaitube.online",16],["hentaiworld.tv",16],["hesgoal.tv",16],["hexupload.net",16],["hhkungfu.tv",16],["highlanderhelp.com",16],["hindimean.com",16],["hindimovies.to",[16,42]],["hiperdex.com",16],["hispasexy.org",16],["hitomi.la",16],["hitprn.com",16],["hoca4u.com",16],["hollymoviehd.cc",16],["hoodsite.com",16],["hopepaste.download",16],["hornylips.com",16],["hotgranny.live",16],["hotmama.live",16],["hqcelebcorner.net",16],["huren.best",16],["hwnaturkya.com",[16,42]],["hxfile.co",[16,42]],["igfap.com",16],["ihdstreams.xyz",16],["iklandb.com",16],["illink.net",16],["imgkings.com",16],["imgsex.xyz",16],["imx.to",16],["influencersgonewild.org",16],["infosgj.free.fr",16],["investnewsbrazil.com",16],["itdmusics.com",16],["itopmusic.org",16],["itsuseful.site",16],["itunesfre.com",16],["iwatchfriendsonline.net",[16,77]],["jackstreams.com",16],["jatimupdate24.com",16],["javcl.com",16],["javf.net",16],["javhay.net",16],["javhoho.com",16],["javhun.com",16],["javleak.com",16],["javporn.best",16],["javsex.to",16],["javtiful.com",16],["jimdofree.com",16],["jiofiles.org",16],["jorpetz.com",16],["journalyc.online",16],["jp-films.com",16],["jpop80ss3.blogspot.com",16],["jpopsingles.eu",16],["kantotflix.net",16],["kantotinyo.com",16],["kaoskrew.org",16],["kaplog.com",16],["keralatvbox.com",16],["kimochi.info",16],["kimochi.tv",16],["kinemania.tv",16],["konstantinova.net",16],["koora-online.live",16],["kunmanga.com",16],["kutmoney.com",16],["kwithsub.com",16],["ladangreceh.xyz",16],["lat69.me",16],["latinblog.tv",16],["latinomegahd.net",16],["lazyfaucet.com",16],["leechpremium.link",16],["legendas.dev",16],["legendei.net",16],["lightdlmovies.blogspot.com",16],["lighterlegend.com",16],["linclik.com",16],["linkebr.com",16],["linkrex.net",16],["links.worldfree4u-lol.online",16],["linksfy.co",16],["lody.ink",16],["lovesomecommunity.com",16],["lulustream.com",[16,42]],["luluvdo.com",[16,42]],["luzcameraeacao.shop",16],["manga-oni.com",16],["mangaboat.com",16],["mangagenki.me",16],["mangahere.onl",16],["mangaweb.xyz",16],["mangoporn.net",16],["manhwahentai.me",16],["masahub.com",16],["masahub.net",16],["maturegrannyfuck.com",16],["mdy48tn97.com",16],["mediapemersatubangsa.com",16],["mega-mkv.com",16],["megapastes.com",16],["megapornpics.com",16],["messitv.net",16],["meusanimes.net",16],["milfmoza.com",16],["milfzr.com",16],["millionscast.com",16],["mimaletamusical.blogspot.com",16],["mitly.us",16],["mkv-pastes.com",16],["modb.xyz",16],["monaskuliner.ac.id",16],["moredesi.com",16],["movgotv.net",16],["movi.pk",16],["movieswbb.com",16],["moviewatch.com.pk",[16,42]],["mp4upload.com",16],["mrskin.live",16],["multicanaistv.com",16],["mundowuxia.com",16],["myeasymusic.ir",16],["myonvideo.com",16],["myyouporn.com",16],["narutoget.info",16],["naughtypiss.com",16],["nerdiess.com",16],["new-fs.eu",16],["newtorrentgame.com",16],["nflstreams.me",16],["niaomea.me",[16,42]],["nicekkk.com",16],["nicesss.com",16],["nolive.me",[16,42]],["nopay.info",16],["nopay2.info",[16,118]],["notformembersonly.com",16],["novamovie.net",16],["novelpdf.xyz",16],["novelssites.com",[16,42]],["novelup.top",16],["nsfwr34.com",16],["nu6i-bg-net.com",16],["nudebabesin3d.com",16],["nukedfans.com",16],["nuoga.eu",16],["nzbstars.com",16],["ohjav.com",16],["ojearnovelas.com",16],["okanime.xyz",16],["olarixas.xyz",16],["oldbox.cloud",16],["olweb.tv",16],["olympicstreams.me",16],["on9.stream",16],["oncast.xyz",16],["onepiece-mangaonline.com",16],["onifile.com",16],["onionstream.live",16],["onlinesaprevodom.net",16],["onlyfullporn.video",16],["onplustv.live",16],["originporn.com",16],["ovagames.com",16],["ovamusic.com",16],["owllink.net",16],["packsporn.com",16],["pahaplayers.click",16],["palimas.org",16],["pandafiles.com",16],["papahd.club",16],["papahd1.xyz",16],["password69.com",16],["paste3.org",16],["pastemytxt.com",16],["payskip.org",16],["peeplink.in",16],["peliculasmx.net",16],["pervertgirlsvideos.com",16],["pervyvideos.com",16],["phim12h.com",16],["picdollar.com",16],["pickteenz.com",16],["pics4you.net",16],["picsxxxporn.com",16],["pinayscandalz.com",16],["pinkueiga.net",16],["piratefast.xyz",16],["piratehaven.xyz",16],["pirateiro.com",16],["pirlotvonline.org",16],["playtube.co.za",16],["plugintorrent.com",16],["pmvzone.com",16],["porndish.com",16],["pornez.net",16],["pornfetishbdsm.com",16],["pornfits.com",16],["pornhd720p.com",16],["pornobr.club",16],["pornobr.ninja",16],["pornodominicano.net",16],["pornofaps.com",16],["pornoflux.com",16],["pornotorrent.com.br",16],["pornredit.com",16],["pornstarsyfamosas.es",16],["pornstreams.co",16],["porntn.com",16],["pornxbit.com",16],["pornxday.com",16],["portaldasnovinhas.shop",16],["portugues-fcr.blogspot.com",16],["poscishd.online",16],["poscitesch.com",[16,42]],["poseyoung.com",16],["pover.org",16],["proxyninja.org",16],["pubfilmz.com",16],["publicsexamateurs.com",16],["punanihub.com",16],["putlocker5movies.org",16],["pxxbay.com",16],["r18.best",16],["ragnaru.net",16],["rapbeh.net",16],["rapelust.com",16],["rapload.org",16],["read-onepiece.net",16],["retro-fucking.com",16],["retrotv.org",16],["robaldowns.com",16],["rockdilla.com",16],["rojadirectatvenvivo.com",16],["rojitadirecta.blogspot.com",16],["romancetv.site",16],["rule34.club",16],["rule34hentai.net",16],["rumahbokep-id.com",16],["safego.cc",16],["sakurafile.com",16],["satoshi-win.xyz",16],["scat.gold",16],["scatfap.com",16],["scatkings.com",16],["scnlog.me",16],["scripts-webmasters.net",16],["serie-turche.com",16],["serijefilmovi.com",16],["sexcomics.me",16],["sexdicted.com",16],["sexgay18.com",16],["sexofilm.co",16],["sextgem.com",16],["sextubebbw.com",16],["sgpics.net",16],["shadowrangers.live",16],["shahee4u.cam",16],["shahiid-anime.net",16],["shemale6.com",16],["shinden.pl",16],["short.es",16],["showmanga.blog.fc2.com",16],["shrt10.com",16],["shurt.pw",16],["sideplusleaks.net",16],["silverblog.tv",16],["silverpic.com",16],["sinhalasub.life",16],["sinsitio.site",16],["skidrowcpy.com",16],["skidrowfull.com",16],["skidrowreloaded.com",16],["slut.mom",16],["smallencode.me",16],["smoner.com",16],["smplace.com",16],["soccerinhd.com",16],["socceron.name",16],["softairbay.com",16],["sokobj.com",16],["songsio.com",16],["souexatasmais.com",16],["sportbar.live",16],["sportea.online",16],["sportskart.xyz",16],["sportstream1.cfd",16],["srt.am",16],["srts.me",16],["stakes100.xyz",16],["stbemuiptv.com",16],["stockingfetishvideo.com",16],["stream.lc",16],["stream25.xyz",16],["streambee.to",16],["streamcenter.pro",16],["streamers.watch",16],["streamgo.to",16],["streamkiste.tv",16],["streamoporn.xyz",16],["streamoupload.xyz",16],["streamservicehd.click",16],["streamvid.net",[16,22]],["subtitleporn.com",16],["subtitles.cam",16],["suicidepics.com",16],["supertelevisionhd.com",16],["supexfeeds.com",16],["swzz.xyz",16],["sxnaar.com",16],["tabooporns.com",16],["taboosex.club",16],["tapeantiads.com",16],["tapeblocker.com",16],["tapenoads.com",16],["tapewithadblock.org",[16,140]],["teamos.xyz",16],["teen-wave.com",16],["teenporncrazy.com",16],["telegramgroups.xyz",16],["telenovelasweb.com",16],["tensei-shitara-slime-datta-ken.com",16],["tfp.is",16],["tgo-tv.co",[16,42]],["thaihotmodels.com",16],["theblueclit.com",16],["thebussybandit.com",16],["theicongenerator.com",16],["thelastdisaster.vip",16],["thepiratebay0.org",16],["thepiratebay10.info",16],["thesexcloud.com",16],["thothub.today",16],["tightsexteens.com",16],["tojav.net",16],["tokyoblog.tv",16],["tonnestreamz.xyz",16],["top16.net",16],["topvideosgay.com",16],["torrage.info",16],["torrents.vip",16],["torrsexvid.com",16],["tpb-proxy.xyz",16],["trannyteca.com",16],["trendytalker.com",16],["tumanga.net",16],["turbogvideos.com",16],["turbovid.me",16],["turkishseriestv.org",16],["turksub24.net",16],["tutele.sx",16],["tutelehd3.xyz",16],["tvglobe.me",16],["tvpclive.com",16],["tvs-widget.com",16],["tvseries.video",16],["ucptt.com",16],["ufaucet.online",16],["ufcfight.online",16],["uhdgames.xyz",16],["ultrahorny.com",16],["ultraten.net",16],["unblockweb.me",16],["underhentai.net",16],["uniqueten.net",16],["upbaam.com",16],["upstream.to",16],["valeriabelen.com",16],["verdragonball.online",16],["vfxmed.com",16],["video.az",16],["videostreaming.rocks",16],["videowood.tv",16],["vidorg.net",16],["vidtapes.com",16],["vidz7.com",16],["vikistream.com",16],["vikv.net",16],["virpe.cc",16],["visifilmai.org",16],["viveseries.com",16],["vladrustov.sx",16],["volokit2.com",16],["vstorrent.org",16],["w-hentai.com",16],["watchaccordingtojimonline.com",16],["watchbrooklynnine-nine.com",16],["watchdowntonabbeyonline.com",16],["watchelementaryonline.com",16],["watcheronline.net",16],["watchgleeonline.com",16],["watchjavidol.com",16],["watchkobestreams.info",16],["watchlostonline.net",16],["watchlouieonline.com",16],["watchmonkonline.com",16],["watchparksandrecreation.net",16],["watchprettylittleliarsonline.com",16],["watchrulesofengagementonline.com",16],["watchthekingofqueens.com",16],["watchthemiddleonline.com",16],["watchtvchh.xyz",16],["webcamrips.com",16],["wickedspot.org",16],["wincest.xyz",16],["witanime.best",16],["wolverdon.fun",16],["wolverdonx.com",16],["wordcounter.icu",16],["worldcupstream.pm",16],["worldmovies.store",16],["worldstreams.click",16],["wpdeployit.com",16],["wqstreams.tk",16],["wwwsct.com",16],["xanimeporn.com",16],["xblog.tv",16],["xn--verseriesespaollatino-obc.online",16],["xn--xvideos-espaol-1nb.com",16],["xpornium.net",16],["xsober.com",16],["xvip.lat",16],["xxgasm.com",16],["xxvideoss.org",16],["xxx18.uno",16],["xxxdominicana.com",16],["xxxfree.watch",16],["xxxmax.net",16],["xxxwebdlxxx.top",16],["xxxxvideo.uno",16],["y2b.wiki",16],["yabai.si",16],["yadixv.com",16],["yayanimes.net",16],["yeshd.net",16],["yodbox.com",16],["youjax.com",16],["youpits.xyz",16],["yourdailypornvideos.ws",16],["yourupload.com",16],["ytstv.me",16],["ytstvmovies.co",16],["ytstvmovies.xyz",16],["ytsyify.co",16],["ytsyifymovie.com",16],["zerion.cc",16],["zerocoin.top",16],["zitss.xyz",16],["zpaste.net",16],["zplayer.live",16],["oko.sh",18],["bigbtc.win",19],["cryptofun.space",19],["sexo5k.com",20],["truyen-hentai.com",20],["theshedend.com",22],["rsadnetworkinfo.com",22],["rsinsuranceinfo.com",22],["rsfinanceinfo.com",22],["rsgamer.app",22],["rssoftwareinfo.com",22],["rshostinginfo.com",22],["rseducationinfo.com",22],["zeroupload.com",22],["securenetsystems.net",22],["miniwebtool.com",22],["bchtechnologies.com",22],["spiegel.de",23],["appnee.com",24],["d0o0d.com",25],["do0od.com",25],["doods.pro",25],["ds2play.com",25],["ds2video.com",25],["onlyfaucet.com",26],["claimclicks.com",26],["thebullspen.com",26],["livecamrips.com",27],["smutty.com",27],["down.dataaps.com",27],["filmweb.pl",27],["infinityscans.xyz",28],["infinityscans.net",28],["iisfvirtual.in",29],["starxinvestor.com",29],["beatsnoop.com",29],["fetchpik.com",29],["hackerranksolution.in",29],["webhostingpost.com",[30,42]],["tophostingapp.com",30],["digitalmarktrend.com",30],["btcbitco.in",31],["btcsatoshi.net",31],["cempakajaya.com",31],["crypto4yu.com",31],["gainl.ink",31],["manofadan.com",31],["readbitcoin.org",31],["wiour.com",31],["kienthucrangmieng.com",31],["tremamnon.com",31],["btc25.org",31],["tron-free.com",31],["bitsmagic.fun",31],["ourcoincash.xyz",31],["hynews.biz",31],["blog.cryptowidgets.net",32],["blog.insurancegold.in",32],["blog.wiki-topia.com",32],["blog.coinsvalue.net",32],["blog.cookinguide.net",32],["blog.freeoseocheck.com",32],["aylink.co",33],["suaurl.com",34],["sugarona.com",35],["nishankhatri.xyz",35],["highkeyfinance.com",35],["amanguides.com",35],["tinys.click",36],["answerpython.com",36],["gsm-solution.com",36],["h-donghua.com",36],["hindisubbedacademy.com",36],["pkgovjobz.com",36],["ripexbooster.xyz",36],["serial4.com",36],["serial412.blogspot.com",36],["sigmalinks.in",36],["tutorgaming.com",36],["appsbull.com",37],["diudemy.com",37],["maqal360.com",37],["mphealth.online",37],["makefreecallsonline.com",37],["androjungle.com",37],["bookszone.in",37],["drakescans.com",37],["shortix.co",37],["msonglyrics.com",37],["app-sorteos.com",37],["bokugents.com",37],["btvplus.bg",37],["coingraph.us",38],["impact24.us",38],["iconicblogger.com",39],["tii.la",40],["kiemlua.com",41],["123moviefree4u.com",42],["194.163.183.129",42],["6movies.net",42],["adsh.cc",42],["afilmyhouse.blogspot.com",42],["ak.sv",42],["animefenix.com",42],["animefrenzy.net",42],["animeshouse.info",42],["animesultra.com",42],["api.webs.moe",42],["apkmody.io",42],["atglinks.com",42],["attvideo.com",42],["avimobilemovies.net",42],["backfirstwo.site",[42,109]],["cinema.cimatna.com",42],["crazyblog.in",42],["dembed1.com",42],["dembed2.com",42],["divicast.com",42],["egynow.cam",42],["embed.meomeo.pw",42],["fanproj.net",42],["filebox.click",42],["filmeserialeonline.org",42],["filmyzilla2021.xyz",42],["filmyzilla2022.com",42],["filmyzillafullmovie.waystohunt.info",42],["flexyhit.com",42],["foreverwallpapers.com",42],["french-streams.cc",42],["fslinks.org",42],["fstream365.com",42],["gdrivez.xyz",42],["hinatasoul.com",42],["hitmovies4u.com",42],["hotstar.news",42],["isaidub3.co",42],["membed.net",42],["mgnetu.com",42],["moviesdanet.com",42],["moviewatchonline.com.pk",42],["mp3juice.info",42],["mp3juices.cc",42],["neomovies.net",42],["newsrade.com",42],["nollyverse.com",42],["oii.io",42],["pepperlive.info",42],["playertv.net",42],["putlocker68.com",42],["s.to",42],["sharkfish.xyz",42],["skidrowcodex.net",42],["sports-stream.site",42],["stream4free.live",42],["tamilmobilemovies.in",42],["thewatchseries.live",42],["tnmusic.in",42],["travelplanspro.com",42],["tusfiles.com",42],["unlimitmovies.com",42],["uploadflix.org",42],["vid-guard.com",42],["vidsaver.net",42],["vidspeeds.com",42],["viralitytoday.com",42],["voiranime.stream",42],["watchdoctorwhoonline.com",42],["webseriesclub.com",42],["ylink.bid",42],["ytix.xyz",42],["unblocked.id",44],["listendata.com",45],["7xm.xyz",45],["fastupload.io",45],["azmath.info",45],["wouterplanet.com",46],["androidacy.com",47],["jytechs.in",48],["djxmaza.in",48],["miuiflash.com",48],["thecubexguide.com",48],["veryfreeporn.com",49],["besthdgayporn.com",50],["freeroms.com",51],["soap2day-online.com",51],["austiblox.net",52],["btcbunch.com",53],["teachoo.com",54],["genshinlab.com",55],["fourfourtwo.co.kr",55],["interfootball.co.kr",55],["a-ha.io",55],["cboard.net",55],["mobilitytv.co.kr",55],["mememedia.co.kr",55],["newautopost.co.kr",55],["tvreport.co.kr",55],["tenbizt.com",55],["jjang0u.com",55],["joongdo.co.kr",55],["viva100.com",55],["thephoblographer.com",55],["newdaily.co.kr",55],["dogdrip.net",55],["golf-live.at",55],["gamingdeputy.com",55],["thesaurus.net",55],["tweaksforgeeks.com",55],["alle-tests.nl",55],["apkmirror.com",55],["dotkeypress.kr",55],["viewcash.co.kr",55],["tripplus.co.kr",55],["enterdiary.com",55],["mtodayauto.com",55],["hotplacehunter.co.kr",55],["mystylezip.com",55],["majorgeeks.com",55],["poro.gg",55],["maple.gg",55],["lolchess.gg",55],["dak.gg",55],["meconomynews.com",55],["brandbrief.co.kr",55],["dfast.kr",55],["youtu.co",55],["mlbpark.donga.com",55],["capress.kr",55],["carandmore.co.kr",55],["maxmovie.kr",55],["motorgraph.com",55],["newsbell.co.kr",55],["tminews.co.kr",55],["thehousemagazine.kr",55],["hardreset.info",55],["metabattle.com",55],["maketecheasier.com",55],["motorbikecatalog.com",55],["heraldcorp.com",55],["allthetests.com",56],["issuya.com",56],["topstarnews.net",56],["udvl.com",57],["topsporter.net",58],["sportshub.to",58],["easymc.io",59],["yunjiema.top",59],["hacoos.com",60],["bondagevalley.cc",61],["zefoy.com",62],["vidello.net",63],["resizer.myct.jp",64],["gametohkenranbu.sakuraweb.com",65],["jisakuhibi.jp",66],["rank1-media.com",66],["lifematome.blog",67],["fm.sekkaku.net",68],["free-avx.jp",69],["dvdrev.com",70],["betweenjpandkr.blog",71],["nft-media.net",72],["ghacks.net",73],["songspk2.info",74],["truyentranhfull.net",75],["nectareousoverelate.com",78],["khoaiphim.com",79],["haafedk2.com",80],["fordownloader.com",80],["jovemnerd.com.br",81],["nicomanga.com",82],["totalcsgo.com",83],["vivamax.asia",84],["manysex.com",85],["gaminginfos.com",86],["tinxahoivn.com",87],["forums-fastunlock.com",88],["automoto.it",89],["sekaikomik.bio",90],["codelivly.com",91],["ophim.vip",92],["touguatize.monster",93],["client.falixnodes.net",94],["novelhall.com",95],["hes-goal.net",96],["abc17news.com",97],["adoredbyalex.com",97],["agrodigital.com",97],["al.com",97],["allaboutthetea.com",97],["allmovie.com",97],["allmusic.com",97],["allthingsthrifty.com",97],["androidpolice.com",97],["antyradio.pl",97],["artforum.com",97],["artnews.com",97],["avherald.com",97],["awkward.com",97],["awkwardmom.com",97],["bailiwickexpress.com",97],["barnsleychronicle.com",97],["becomingpeculiar.com",97],["blogher.com",97],["briefeguru.de",97],["carmagazine.co.uk",97],["cattime.com",97],["cbr.com",97],["cbssports.com",97],["chaptercheats.com",97],["cleveland.com",97],["collider.com",97],["comingsoon.net",97],["commercialobserver.com",97],["competentedigitale.ro",97],["crafty.house",97],["dailyvoice.com",97],["decider.com",97],["didyouknowfacts.com",97],["dogtime.com",97],["dualshockers.com",97],["dustyoldthing.com",97],["faithhub.net",97],["femestella.com",97],["footwearnews.com",97],["freeconvert.com",97],["frogsandsnailsandpuppydogtail.com",97],["fsm-media.com",97],["gamerant.com",97],["gfinityesports.com",97],["givemesport.com",97],["gulflive.com",97],["helloflo.com",97],["howtogeek.com",97],["insider-gaming.com",97],["insurancejournal.com",97],["jasminemaria.com",97],["kion546.com",97],["lehighvalleylive.com",97],["lettyskitchen.com",97],["liveandletsfly.com",97],["lizzieinlace.com",97],["localnews8.com",97],["lonestarlive.com",97],["madeeveryday.com",97],["maidenhead-advertiser.co.uk",97],["makeuseof.com",97],["mardomreport.net",97],["masslive.com",97],["milestomemories.com",97],["mlive.com",97],["modernmom.com",97],["momtastic.com",97],["mostlymorgan.com",97],["movieweb.com",97],["musicfeeds.com.au",97],["nationalreview.com",97],["nj.com",97],["nordot.app",97],["nothingbutnewcastle.com",97],["nsjonline.com",97],["nypost.com",97],["oakvillenews.org",97],["observer.com",97],["oregonlive.com",97],["pagesix.com",97],["pennlive.com",97],["pinkonthecheek.com",97],["puckermom.com",97],["qtoptens.com",97],["realgm.com",97],["robbreport.com",97],["royalmailchat.co.uk",97],["samchui.com",97],["sandrarose.com",97],["screenrant.com",97],["sheknows.com",97],["sherdog.com",97],["sidereel.com",97],["silive.com",97],["simpleflying.com",97],["spacenews.com",97],["superherohype.com",97],["syracuse.com",97],["thebeautysection.com",97],["thecelticblog.com",97],["thecurvyfashionista.com",97],["thefashionspot.com",97],["thegamer.com",97],["thegamescabin.com",97],["thenonconsumeradvocate.com",97],["timesnews.net",97],["toyotaklub.org.pl",97],["travelingformiles.com",97],["tutsnode.org",97],["tvline.com",97],["viralviralvideos.com",97],["wimp.com",97],["woojr.com",97],["xda-developers.com",97],["cheatsheet.com",98],["pwinsider.com",98],["bagi.co.in",99],["keran.co",99],["biblestudytools.com",100],["christianheadlines.com",100],["ibelieve.com",100],["kuponigo.com",101],["kimcilonly.site",102],["kimcilonly.link",102],["cryptoearns.com",103],["inxxx.com",104],["ipaspot.app",105],["embedwish.com",106],["filelions.live",106],["leakslove.net",106],["jenismac.com",107],["vxetable.cn",108],["jewelavid.com",109],["nizarstream.com",109],["snapwordz.com",110],["toolxox.com",110],["rl6mans.com",110],["idol69.net",110],["plumbersforums.net",111],["123movies57.online",112],["gulio.site",113],["mediaset.es",114],["izlekolik.net",115],["donghuaworld.com",116],["letsdopuzzles.com",117],["tainio-mania.online",118],["hes-goals.io",119],["pkbiosfix.com",119],["casi3.xyz",119],["rediff.com",120],["dzapk.com",121],["darknessporn.com",122],["familyporner.com",122],["freepublicporn.com",122],["pisshamster.com",122],["punishworld.com",122],["xanimu.com",122],["pig69.com",123],["cosplay18.pics",123],["javhdo.net",124],["eroticmoviesonline.me",125],["teleclub.xyz",126],["ecamrips.com",127],["showcamrips.com",127],["9animetv.to",128],["jornadaperfecta.com",129],["loseart.com",130],["sousou-no-frieren.com",131],["veev.to",132],["intro-hd.net",133],["monacomatin.mc",133],["nodo313.net",133],["unite-guide.com",134],["appimagehub.com",135],["gnome-look.org",135],["store.kde.org",135],["linux-apps.com",135],["opendesktop.org",135],["pling.com",135],["xfce-look.org",135],["botcomics.com",136],["cefirates.com",136],["chandlerorchards.com",136],["comicleaks.com",136],["marketdata.app",136],["monumentmetals.com",136],["tapmyback.com",136],["ping.gg",136],["revistaferramental.com.br",136],["hawpar.com",136],["alpacafinance.org",[136,137]],["nookgaming.com",136],["enkeleksamen.no",136],["kvest.ee",136],["creatordrop.com",136],["panpots.com",136],["cybernetman.com",136],["bitdomain.biz",136],["gerardbosch.xyz",136],["fort-shop.kiev.ua",136],["accuretawealth.com",136],["resourceya.com",136],["tracktheta.com",136],["tt.live",137],["future-fortune.com",137],["abhijith.page",137],["madrigalmaps.com",137],["adventuretix.com",137],["panprices.com",138],["intercity.technology",138],["freelancer.taxmachine.be",138],["adria.gg",138],["fjlaboratories.com",138],["proboards.com",139],["winclassic.net",139],["www.chip.de",[141,142]],["bitcotasks.com",143],["perchance.org",[144,145,146,147]],["abema.tv",148]]);

const entitiesMap = new Map([["1337x",[3,16]],["kimcartoon",5],["pahe",[6,16]],["soap2day",6],["hqq",8],["waaw",8],["teluguflix",10],["pixhost",11],["viprow",[15,16,42]],["cloudvideotv",[15,42]],["vidsrc",[15,42]],["123-movies",16],["123movieshd",16],["123movieshub",16],["123moviesme",16],["1stream",16],["1tamilmv",16],["2ddl",16],["2umovies",16],["3hiidude",16],["4stream",16],["5movies",16],["7hitmovies",16],["9xmovie",16],["aagmaal",[16,42]],["adblockeronstape",16],["adblockeronstreamtape",16],["adblockstreamtape",16],["adblockstrtape",16],["adblockstrtech",16],["adblocktape",16],["adcorto",16],["alexsports",16],["alexsportss",16],["alexsportz",16],["animepahe",16],["animesanka",16],["animixplay",16],["aniplay",16],["antiadtape",16],["asianclub",16],["ask4movie",16],["atomixhq",[16,42]],["atomohd",16],["beinmatch",[16,21]],["bhaai",16],["buffstreams",16],["canalesportivo",16],["clickndownload",16],["clicknupload",16],["crackstreams",[16,42]],["daddylive",[16,42]],["daddylivehd",[16,42]],["desiremovies",16],["devlib",16],["divxtotal",16],["divxtotal1",16],["dvdplay",[16,42]],["elixx",16],["enjoy4k",16],["estrenosflix",16],["estrenosflux",16],["estrenosgo",16],["f1stream",16],["fbstream",16],["file4go",16],["filmyzilla",[16,42]],["findav",16],["findporn",16],["flixmaza",16],["flizmovies",16],["freetvsports",16],["fullymaza",16],["g3g",16],["gotxx",16],["grantorrent",16],["hdmoviesfair",[16,42]],["hdmoviesflix",16],["hiidudemoviez",16],["imgsen",16],["imgsto",16],["incest",16],["incestflix",16],["javmost",16],["keeplinks",16],["keepvid",16],["keralahd",16],["khatrimazaful",16],["khatrimazafull",16],["leechall",16],["linkshorts",16],["mangovideo",16],["masaporn",16],["miniurl",16],["mirrorace",16],["mixdroop",16],["mixdrop",16],["mkvcage",16],["mlbstream",16],["mlsbd",16],["mmsbee",16],["motogpstream",16],["movieplex",16],["movierulzlink",16],["movies123",16],["moviesflix",16],["moviesmeta",[16,42]],["moviessources",16],["moviesverse",16],["moviezwaphd",16],["mrunblock",16],["nbastream",16],["newmovierulz",16],["nflstream",16],["nhlstream",16],["noblocktape",16],["nocensor",16],["onlyfams",16],["ouo",16],["pctfenix",[16,42]],["pctnew",[16,42]],["peliculas24",16],["pelisplus",16],["piratebay",16],["plyjam",16],["plylive",16],["plyvdo",16],["pornhoarder",16],["prbay",16],["projectfreetv",16],["proxybit",16],["psarips",16],["racaty",16],["remaxhd",16],["rintor",16],["rnbxclusive",16],["rnbxclusive0",16],["rnbxclusive1",16],["rojadirecta",16],["rojadirectaenvivo",16],["rugbystreams",16],["safetxt",16],["shadowrangers",16],["shahi4u",16],["shahid4u1",16],["shahid4uu",16],["shavetape",16],["shortearn",16],["shorten",16],["shorttey",16],["shortzzy",16],["skymovieshd",16],["socceronline",16],["softarchive",16],["sports-stream",16],["sshhaa",16],["stapadblockuser",16],["stape",16],["stapewithadblock",16],["starmusiq",16],["strcloud",16],["streamadblocker",[16,42]],["streamadblockplus",16],["streamcdn",16],["streamhub",16],["streamsport",16],["streamta",16],["streamtape",16],["streamtapeadblockuser",16],["strikeout",16],["strtape",16],["strtapeadblock",16],["strtapeadblocker",16],["strtapewithadblock",16],["strtpe",16],["swatchseries",16],["tabooflix",16],["tennisstreams",16],["themoviesflix",16],["thepiratebay",16],["thisav",16],["tmearn",16],["toonanime",16],["torlock",16],["tormalayalam",16],["torrentz2eu",16],["tutelehd",16],["tvply",16],["u4m",16],["ufcstream",16],["unblocknow",16],["uploadbuzz",16],["usagoals",16],["vexmoviex",16],["vidclouds",16],["vidlox",16],["vipbox",[16,42]],["vipboxtv",[16,42]],["vipleague",16],["watch-series",16],["watchseries",16],["xclusivejams",16],["xmoviesforyou",16],["youdbox",16],["ytmp3eu",16],["yts-subs",16],["yts",16],["zooqle",16],["dutchycorp",17],["dood",[25,42]],["doodstream",25],["dooood",[25,42]],["shrinke",27],["shrinkme",27],["mydverse",36],["poplinks",37],["123movies",42],["123moviesla",42],["123movieweb",42],["2embed",42],["4hiidude",42],["720pstream",42],["9xmovies",42],["adshort",42],["allmovieshub",42],["asianplay",42],["atishmkv",42],["cricstream",42],["crictime",42],["databasegdriveplayer",42],["dloader",42],["easylinks",42],["extralinks",42],["extramovies",42],["faselhd",42],["filemoon",42],["filmy",42],["filmyhit",42],["filmywap",42],["fmovies",42],["fsapi",42],["gdplayer",42],["gdriveplayer",42],["goload",42],["gomoviefree",42],["gomovies",42],["gowatchseries",42],["hdmoviz",42],["hindilinks4u",42],["hurawatch",42],["isaidub",42],["isaidubhd",42],["jalshamoviezhd",42],["jiorockers",42],["linkshub",42],["linksme",42],["livecricket",42],["madrasdub",42],["mkvcinemas",42],["mobilemovies",42],["movies2watch",42],["moviesda1",42],["moviespapa",42],["mp4moviez",42],["mydownloadtube",42],["nsw2u",42],["nuroflix",42],["o2tvseries",42],["o2tvseriesz",42],["pirlotv",42],["poscitech",42],["primewire",42],["serienstream",42],["sflix",42],["shahed4u",42],["shaheed4u",42],["speedostream",42],["sportcast",42],["sportskart",42],["streamingcommunity",42],["tamilarasan",42],["tamilfreemp3songs",42],["tamilprinthd",42],["torrentdosfilmes",42],["uploadrar",42],["uqload",42],["vidcloud9",42],["vido",42],["vidoo",42],["vudeo",42],["vumoo",42],["watchomovies",[42,51]],["yesmovies",42],["kickass",43],["cine-calidad",49],["actvid",76]]);

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
