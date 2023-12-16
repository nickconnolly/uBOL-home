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

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["script","AdDefend"],["script","/getAdUnitPath|\\.then\\(eval\\)|DisplayAcceptableAdIfAdblocked|,eval\\)\\)\\)\\;|\\.join\\(\\'\\'\\)\\}\\;/"],["script","/==undefined.*body/"],["script","style"],["script","/h=decodeURIComponent|popundersPerIP/"],["script","Promise"],["script","Number.isSafeInteger"],["script","/style:last-of-type|:empty|APKM\\..+?\\.innerHTML/"],["script","Reflect"],["script","document.write"],["script","self == top"],["script","/popunder|isAdBlock|admvn.src/i"],["script","deblocker"],["script","exdynsrv"],["script","/onerror|adsbygoogle|notice|while/i"],["script","/adb/i"],["script","FingerprintJS"],["script","/check_if_blocking|XMLHttpRequest|adkiller/"],["script","/document\\.createElement|\\.banner-in/"],["script","/block-adb|-0x|adblock/"],["script","ExoLoader"],["script","/?key.*open/","condition","key"],["script","adblock"],["script","homad"],["script","alert"],["script","/adblock|popunder/"],["script","htmls"],["script","/window\\.location|Adblock/"],["script","window.open"],["script","break;case $"],["script","Adblock"],["script","onerror"],["script","toast"],["script","break;case $."],["style","text-decoration"],["script","push"],["script","clicky"],["#text","AD:"],["script","checkifscript"],["script","/popMagic|pop1stp/"],["script","popunder"],["script","googlesyndication"],["script","/adblock|location\\.replace/"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","KCgpPT57bGV0IGU"],["script","adBlockDetected"],["script","queue.addFile"],["script","/ConsoleBan|alert|AdBlocker/"],["script","AdBlocker"],["script","fetch"],["script","adb_detected"],["script","adb"],["script","await fetch"],["script","innerHTML"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","popUnder"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","【PR】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/^Advertisement$/"],["script","zfgloaded"],["script","ai_adb"],["script","HTMLAllCollection"],["script","liedetector"],["script","popWin"],["script","/window\\.open|window\\.location\\.href|document\\.addEventListener|\\$\\(document\\)\\.ready.*show/"],["script","end_click"],["script","ad blocker"],["script","closeAd"],["script","/modal|popupads/"],["script","/adconfig/i"],["script","AdblockDetector"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","ad_block"],["script","app_checkext"],["script","shown_at"],["script","clientHeight"],["script","/url_key|adHtml/"],["script","pop.target"],["script","showadblock"],["script","axios"],["script","ad block"],["script","/typeof [a-z]\\.cmd\\.unshift/","condition","cmd.unshift"],["script","admiral"],["script","charAt"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","/$.*open/"],["script","Brave"],["script","egoTab"],["script","abDetectorPro"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","/\\[\\'push\\'\\]/"],["script","/adblock/i"],["script","/$.*adUnits/"],["script","decodeURIComponent"],["script","RegExp"],["script","adbl"],["script","doOpen"],["script","adsBlocked"],["script","chkADB"],["script","AaDetector"],["script","AdBlock"],["script","antiAdBlockerHandler"],["script","Symbol.iterator"],["script","catch"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","detectAdBlock"],["script","popup"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","AdbModel"],["script","document.head.appendChild"],["script","Number"],["script","ad-block-activated"],["script","insertBefore"],["script","pop.doEvent"],["script","constructor"],["script","/adbl/i"],["script","detect"],["script","btnHtml"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","vglnk"],["script","/RegExp\\(\\'/","condition","RegExp"],["script","fetch(","condition","/^\\s+\\(function/"],["script","usingAdPoweredPlugin"]];

const hostnamesMap = new Map([["giga.de",0],["teltarif.de",1],["100percentfedup.com",2],["thegatewaypundit.com",2],["skidrowreloaded.com",4],["rule34hentai.net",4],["imgkings.com",4],["watchparksandrecreation.net",4],["ultrahorny.com",4],["mp4upload.com",4],["srt.am",4],["clik.pw",4],["mangoporn.net",4],["mitly.us",4],["anime-loads.org",4],["linkrex.net",4],["cpmlink.net",4],["pics4you.net",4],["hoca4u.com",4],["porndish.com",4],["linclik.com",4],["hindimean.com",4],["dlhd.sx",4],["jpopsingles.eu",4],["clasico.tv",4],["imx.to",4],["peliculasmx.net",4],["shrt10.com",4],["megapastes.com",4],["nzbstars.com",4],["fembed.com",4],["topvideosgay.com",4],["extremotvplay.com",4],["pirlotvonline.org",4],["payskip.org",4],["javhay.net",4],["gaypornmasters.com",4],["cutpaid.com",4],["hitomi.la",4],["4horlover.com",4],["leechpremium.link",4],["tabooporns.com",4],["skidrowfull.com",4],["scat.gold",4],["sinvida.me",[4,16]],["mega-mkv.com",4],["mkv-pastes.com",4],["fileone.tv",4],["short.es",4],["watchaccordingtojimonline.com",4],["watchdowntonabbeyonline.com",4],["watchelementaryonline.com",4],["watcheronline.net",4],["watchgleeonline.com",4],["watchlostonline.net",4],["watchmonkonline.com",4],["watchprettylittleliarsonline.com",4],["watchrulesofengagementonline.com",4],["watchthekingofqueens.com",4],["watchthemiddleonline.com",4],["milfzr.com",4],["videostreaming.rocks",4],["onifile.com",4],["latinomegahd.net",4],["compucalitv.com",4],["gamovideo.com",4],["elil.cc",4],["sportea.online",4],["watchkobestreams.info",4],["ovagames.com",4],["crisanimex.com",4],["blizzboygames.net",4],["zpaste.net",4],["zplayer.live",4],["faucethero.com",4],["pandafiles.com",4],["hqcelebcorner.net",4],["upbaam.com",4],["deltabit.co",4],["acefile.co",4],["kimochi.info",4],["ucptt.com",4],["supertelevisionhd.com",4],["birdurls.com",4],["javporn.best",4],["shahiid-anime.net",4],["avseesee.com",4],["get-to.link",4],["vidorg.net",4],["camchickscaps.com",4],["animeshouse.net",4],["mangahere.onl",4],["blog-peliculas.com",4],["owllink.net",4],["upstream.to",4],["hexupload.net",4],["xanimeporn.com",4],["forex-trnd.com",4],["forex-golds.com",4],["wickedspot.org",4],["gomo.to",4],["sokobj.com",4],["smplace.com",4],["tfp.is",4],["underhentai.net",4],["satoshi-win.xyz",4],["songsio.com",4],["dogemate.com",4],["newtorrentgame.com",4],["shurt.pw",4],["legendas.dev",4],["legendei.net",4],["investnewsbrazil.com",4],["smoner.com",4],["javcl.com",4],["javtiful.com",4],["skidrowcpy.com",4],["adblockplustape.com",4],["streamnoads.com",[4,16]],["tapeantiads.com",4],["tapeblocker.com",4],["tapenoads.com",4],["tapewithadblock.org",[4,137]],["shinden.pl",4],["rojitadirecta.blogspot.com",4],["hiphopa.net",4],["freepornhdonlinegay.com",4],["freeomovie.to",4],["85videos.com",4],["gaydelicious.com",4],["hhkungfu.tv",4],["vstplugs.com",4],["animeblkom.net",4],["konstantinova.net",4],["1bit.space",4],["1bitspace.com",4],["pervertgirlsvideos.com",4],["iklandb.com",4],["animefire.net",4],["thepiratebay0.org",4],["wordcounter.icu",4],["blkom.com",4],["cashurl.in",4],["softairbay.com",4],["jackstreams.com",4],["hoodsite.com",4],["hdstreamss.club",4],["illink.net",4],["yadixv.com",4],["gamesrepacks.com",4],["hentais.tube",4],["hentaitube.online",4],["kaplog.com",4],["egyanime.com",4],["srts.me",4],["movi.pk",4],["kutmoney.com",4],["verdragonball.online",4],["cablegratis.online",4],["filmovi.ws",4],["ovamusic.com",4],["haho.moe",4],["xxvideoss.org",4],["123movies4u.site",4],["anroll.net",4],["bajarjuegospcgratis.com",4],["balkanportal.net",4],["bestporncomix.com",4],["celebrity-leaks.net",4],["comicsmanics.com",4],["desivdo.com",4],["directupload.net",4],["doctormalay.com",4],["dvdfullestrenos.com",4],["ebookhunter.net",4],["electro-torrent.pl",4],["femdom-joi.com",4],["film1k.com",4],["filmesonlinex.org",4],["gambarbogel.xyz",4],["gaysex69.net",4],["hentaistream.co",4],["hollymoviehd.cc",4],["javhun.com",4],["jorpetz.com",4],["kinemania.tv",4],["masahub.com",4],["myonvideo.com",4],["nuoga.eu",4],["olarixas.xyz",4],["palimas.org",4],["pirateiro.com",4],["pornez.net",4],["pornhd720p.com",4],["pornobr.ninja",4],["pornofaps.com",4],["pornotorrent.com.br",4],["putlocker5movies.org",4],["sakurafile.com",4],["sexofilm.co",4],["tensei-shitara-slime-datta-ken.com",4],["thebussybandit.com",4],["torrage.info",4],["video.az",4],["vikv.net",4],["viveseries.com",4],["vstorrent.org",4],["webcamrips.com",4],["yourdailypornvideos.ws",4],["highlanderhelp.com",4],["suicidepics.com",4],["myyouporn.com",4],["mundowuxia.com",4],["tumanga.net",4],["embedstream.me",4],["nolive.me",4],["worldcupstream.pm",4],["ccurl.net",4],["links.worldfree4u-lol.online",4],["ebookbb.com",4],["scnlog.me",4],["anidl.org",4],["videowood.tv",4],["hwnaturkya.com",4],["filmymaza.blogspot.com",4],["hatsukimanga.com",4],["hentaitk.net",4],["olympicstreams.me",4],["gtlink.co",4],["hiperdex.com",4],["sextgem.com",4],["xxxwebdlxxx.top",4],["gledajcrtace.xyz",4],["adz7short.space",4],["hxfile.co",4],["bestgirlsexy.com",4],["theicongenerator.com",4],["tvglobe.me",4],["unblockweb.me",4],["oncast.xyz",4],["hitprn.com",4],["password69.com",4],["freebunker.com",4],["javsex.to",4],["picdollar.com",4],["mediapemersatubangsa.com",4],["javhoho.com",4],["85tube.com",4],["swzz.xyz",4],["egyshare.cc",4],["dofusports.xyz",4],["bestnhl.com",4],["charexempire.com",4],["olweb.tv",4],["tv247.us",4],["messitv.net",4],["dragontranslation.com",4],["plugintorrent.com",4],["tutele.sx",4],["itdmusics.com",4],["itopmusic.org",4],["animelek.me",4],["coin-free.com",[4,26]],["yeshd.net",4],["pornstreams.co",4],["tvs-widget.com",4],["141jav.com",4],["560pmovie.com",4],["60fps.xyz",4],["aazzz.xyz",4],["a2zcrackworld.com",4],["adricami.com",4],["aeblender.com",4],["ahdafnews.blogspot.com",4],["akuma.moe",4],["androidadult.com",4],["animespire.net",4],["animestotais.xyz",4],["animeyt.es",4],["aotonline.org",4],["askim-bg.com",4],["avcrempie.com",4],["backfirstwo.com",4],["balkanteka.net",4],["belowporn.com",4],["bet36.es",4],["blackcockadventure.com",4],["blackcockchurch.org",4],["blackporncrazy.com",4],["blizzpaste.com",4],["blogtrabalhista.com",4],["blurayufr.xyz",4],["bobsvagene.club",4],["brupload.net",4],["camgirlcum.com",4],["camgirls.casa",4],["castingx.net",4],["cgpelis.net",4],["coolcast2.com",4],["countylocalnews.com",4],["cuevana3.fan",4],["cumception.com",4],["curvaweb.com",4],["datawav.club",4],["daughtertraining.com",4],["derleta.com",4],["desixx.net",4],["deutschepornos.me",4],["dixva.com",4],["ekasiwap.com",4],["erovoice.us",4],["estrenosdoramas.net",4],["everia.club",4],["fapptime.com",4],["filmesonlinexhd.biz",[4,33]],["filmovitica.com",4],["filthy.family",4],["flyfaucet.com",4],["forumchat.club",4],["freemoviesonline.biz",4],["freeporncomic.net",4],["freeproxy.io",4],["freeuse.me",4],["fsicomics.com",4],["gamepcfull.com",4],["gameronix.com",4],["gamesfullx.com",4],["gamesmountain.com",4],["girlscanner.org",4],["giurgiuveanul.ro",4],["gostosa.cf",4],["hayhd.net",4],["hdsaprevodom.com",4],["hesgoal.tv",4],["hopepaste.download",4],["hornylips.com",4],["huren.best",4],["igfap.com",4],["influencersgonewild.org",4],["infosgj.free.fr",4],["itunesfre.com",4],["iwatchfriendsonline.net",[4,70]],["javf.net",4],["javleak.com",4],["jiofiles.org",4],["jp-films.com",4],["jpop80ss3.blogspot.com",4],["kantotinyo.com",4],["keralatvbox.com",4],["kimochi.tv",4],["ladangreceh.xyz",4],["lightdlmovies.blogspot.com",4],["lovesomecommunity.com",4],["mangaboat.com",4],["mangagenki.me",4],["mangaweb.xyz",4],["masaporn.xyz",4],["maturegrannyfuck.com",4],["mdy48tn97.com",4],["megapornpics.com",4],["meusanimes.net",4],["milfmoza.com",4],["mimaletamusical.blogspot.com",4],["modb.xyz",4],["monaskuliner.ac.id",4],["moredesi.com",4],["movieswbb.com",4],["multicanaistv.com",4],["narutoget.info",4],["naughtypiss.com",4],["nerdiess.com",4],["notformembersonly.com",4],["novelpdf.xyz",4],["novelssites.com",4],["nsfwr34.com",4],["nu6i-bg-net.com",4],["nudebabesin3d.com",4],["ohjav.com",4],["ojearnovelas.com",4],["okanime.xyz",4],["oldbox.cloud",4],["on9.stream",4],["onepiece-mangaonline.com",4],["onlyfullporn.video",4],["originporn.com",4],["paste3.org",4],["peeplink.in",4],["pervyvideos.com",4],["phim12h.com",4],["pickteenz.com",4],["picsxxxporn.com",4],["pinayscandalz.com",4],["piratefast.xyz",4],["playtube.co.za",4],["pmvzone.com",4],["pornfetishbdsm.com",4],["pornfits.com",4],["pornobr.club",4],["pornoflux.com",4],["porntn.com",4],["portugues-fcr.blogspot.com",4],["poseyoung.com",4],["pover.org",4],["pubfilmz.com",4],["publicsexamateurs.com",4],["r18.best",4],["ragnaru.net",4],["rapbeh.net",4],["rapload.org",4],["rapelust.com",4],["read-onepiece.net",4],["retro-fucking.com",4],["rockdilla.com",4],["rojadirectatvenvivo.com",4],["rule34.club",4],["scatfap.com",4],["scatkings.com",4],["scripts-webmasters.net",4],["serijefilmovi.com",4],["sexcomics.me",4],["sexdicted.com",4],["sexgay18.com",4],["sextubebbw.com",4],["sgpics.net",4],["shemale6.com",4],["showmanga.blog.fc2.com",4],["silverpic.com",4],["slut.mom",4],["socceron.name",4],["sportskart.xyz",4],["streamcenter.pro",4],["stream.lc",4],["subtitleporn.com",4],["sxnaar.com",4],["taboosex.club",4],["teamos.xyz",4],["teen-wave.com",4],["teenporncrazy.com",4],["tgo-tv.co",4],["thaihotmodels.com",4],["theblueclit.com",4],["thelastdisaster.vip",4],["thesexcloud.com",4],["tightsexteens.com",4],["top16.net",4],["torrents.vip",4],["torrsexvid.com",4],["tpb-proxy.xyz",4],["turbovid.me",4],["tvseries.video",4],["ufcfight.online",4],["vidtapes.com",4],["vidz7.com",4],["visifilmai.org",4],["w-hentai.com",4],["watchbrooklynnine-nine.com",4],["watchjavidol.com",4],["wincest.xyz",4],["witanime.best",4],["worldmovies.store",4],["wpdeployit.com",4],["xn--xvideos-espaol-1nb.com",4],["xsober.com",4],["xxgasm.com",4],["xxxfree.watch",4],["xxxxvideo.uno",4],["yayanimes.net",4],["youjax.com",4],["ytstv.me",4],["ytstvmovies.xyz",4],["ytsyifymovie.com",4],["zitss.xyz",4],["yodbox.com",4],["stream25.xyz",4],["virpe.cc",4],["pastemytxt.com",4],["hispasexy.org",4],["allstreaming.online",4],["crunchyscan.fr",4],["streambee.to",4],["streamers.watch",4],["bdnewszh.com",4],["embed4u.xyz",4],["novamovie.net",4],["masahub.net",4],["allplayer.tk",4],["hindimovies.to",4],["bitsearch.to",4],["vfxmed.com",4],["streamoupload.xyz",4],["depvailon.com",4],["shadowrangers.live",4],["movgotv.net",4],["linksfy.co",4],["tojav.net",4],["freeomovie.co.in",4],["amateurblog.tv",4],["fashionblog.tv",4],["latinblog.tv",4],["silverblog.tv",4],["tokyoblog.tv",4],["xblog.tv",4],["hentaiworld.tv",4],["streamgo.to",4],["vikistream.com",4],["pornstarsyfamosas.es",4],["subtitles.cam",4],["adclickersbot.com",4],["uniqueten.net",4],["ultraten.net",4],["bestclaimtrx.xyz",4],["proxyninja.org",4],["moviewatch.com.pk",4],["xxx18.uno",4],["extrafreetv.com",4],["gocast2.com",4],["watchtvchh.xyz",4],["actusports.eu",4],["pxxbay.com",4],["wwwsct.com",4],["adslink.pw",4],["footyhunter3.xyz",4],["zerion.cc",4],["uhdgames.xyz",4],["streamservicehd.click",4],["papahd.club",4],["papahd1.xyz",4],["eplayer.click",4],["tonnestreamz.xyz",4],["asenshu.com",4],["pahaplayers.click",4],["koora-online.live",4],["pornxbit.com",4],["pornxday.com",4],["nozomi.la",4],["tutelehd3.xyz",4],["ihdstreams.xyz",4],["onlinesaprevodom.net",4],["manga-oni.com",4],["nflstreams.me",4],["eyeshot.live",4],["ak47sports.com",4],["crackstreamshd.click",4],["footyhunter.lol",4],["gameshdlive.xyz",4],["tvpclive.com",4],["volokit2.com",4],["worldstreams.click",4],["onionstream.live",4],["sportbar.live",4],["nicesss.com",4],["iwatchtheoffice.com",4],["ytstvmovies.co",4],["smallencode.me",4],["millionscast.com",4],["jimdofree.com",4],["xpornium.net",4],["kunmanga.com",4],["4archive.org",4],["deepgoretube.site",4],["streamvid.net",[4,22]],["manhwahentai.me",4],["streamkiste.tv",4],["safego.cc",4],["nopay.info",4],["eroxxx.us",4],["linkebr.com",4],["nukedfans.com",4],["nicekkk.com",4],["gemstreams.com",4],["lulustream.com",4],["luluvdo.com",4],["nopay2.info",[4,112]],["3dporndude.com",4],["fastreams.live",4],["vladrustov.sx",4],["niaomea.me",4],["diskusscan.com",4],["soccerinhd.com",4],["gameshdlive.net",4],["kaoskrew.org",4],["bestporn4free.com",4],["yourupload.com",4],["wqstreams.tk",4],["trannyteca.com",4],["moviepilot.de",5],["apkmirror.com",[7,45]],["yts.mx",9],["upornia.com",11],["pinsystem.co.uk",12],["tinyppt.com",12],["downfile.site",12],["expertvn.com",12],["trangchu.news",12],["3dmodelshare.org",12],["nulleb.com",12],["reset-scans.com",12],["reset-scans.us",12],["thecustomrom.com",12],["bingotingo.com",12],["ghior.com",12],["3dmili.com",12],["techacode.com",12],["karanpc.com",12],["plc247.com",12],["loaninsurehub.com",12],["freepasses.org",12],["porninblack.com",12],["tomarnarede.pt",12],["basketballbuzz.ca",12],["dribbblegraphics.com",12],["next-episode.net",14],["eporner.com",15],["exeo.app",16],["megaup.net",16],["searchenginereports.net",17],["oko.sh",18],["bigbtc.win",19],["cryptofun.space",19],["sexo5k.com",20],["truyen-hentai.com",20],["theshedend.com",22],["zeroupload.com",22],["securenetsystems.net",22],["miniwebtool.com",22],["bchtechnologies.com",22],["spiegel.de",23],["appnee.com",24],["doods.pro",25],["ds2play.com",25],["btcbitco.in",26],["btcsatoshi.net",26],["cempakajaya.com",26],["crypto4yu.com",26],["gainl.ink",26],["manofadan.com",26],["readbitcoin.org",26],["wiour.com",26],["kienthucrangmieng.com",26],["tremamnon.com",26],["btc25.org",26],["tron-free.com",26],["bitsmagic.fun",26],["ourcoincash.xyz",26],["hynews.biz",26],["carsmania.net",27],["carstopia.net",27],["coinsvalue.net",27],["cookinguide.net",27],["freeoseocheck.com",27],["makeupguide.net",27],["smutty.com",28],["down.dataaps.com",28],["filmweb.pl",28],["123enjoy.net",29],["kiemlua.com",30],["makefreecallsonline.com",31],["androjungle.com",31],["bookszone.in",31],["drakescans.com",31],["shortix.co",31],["msonglyrics.com",31],["mphealth.online",31],["app-sorteos.com",31],["appsbull.com",31],["diudemy.com",31],["maqal360.com",31],["bokugents.com",31],["btvplus.bg",31],["aylink.co",32],["ak.sv",33],["atglinks.com",33],["filebox.click",33],["isaidub3.co",33],["playertv.net",33],["unblocked.id",35],["wouterplanet.com",36],["tech24us.com",37],["freethemesy.com",37],["djxmaza.in",38],["miuiflash.com",38],["thecubexguide.com",38],["besthdgayporn.com",39],["freeroms.com",40],["soap2day-online.com",40],["beatsnoop.com",41],["fetchpik.com",41],["iisfvirtual.in",41],["starxinvestor.com",41],["hackerranksolution.in",41],["austiblox.net",42],["btcbunch.com",43],["teachoo.com",44],["genshinlab.com",45],["fourfourtwo.co.kr",45],["interfootball.co.kr",45],["a-ha.io",45],["cboard.net",45],["mobilitytv.co.kr",45],["mememedia.co.kr",45],["newautopost.co.kr",45],["tvreport.co.kr",45],["tenbizt.com",45],["jjang0u.com",45],["joongdo.co.kr",45],["viva100.com",45],["thephoblographer.com",45],["newdaily.co.kr",45],["dogdrip.net",45],["golf-live.at",45],["gamingdeputy.com",45],["thesaurus.net",45],["dotkeypress.kr",45],["viewcash.co.kr",45],["tripplus.co.kr",45],["enterdiary.com",45],["mtodayauto.com",45],["hotplacehunter.co.kr",45],["mystylezip.com",45],["majorgeeks.com",45],["poro.gg",45],["maple.gg",45],["lolchess.gg",45],["dak.gg",45],["meconomynews.com",45],["brandbrief.co.kr",45],["dfast.kr",45],["youtu.co",45],["mlbpark.donga.com",45],["capress.kr",45],["carandmore.co.kr",45],["maxmovie.kr",45],["motorgraph.com",45],["newsbell.co.kr",45],["tminews.co.kr",45],["thehousemagazine.kr",45],["hardreset.info",45],["metabattle.com",45],["cryptowidgets.net",46],["webhostingpost.com",47],["tophostingapp.com",47],["digitalmarktrend.com",47],["topsporter.net",48],["sportshub.to",48],["7xm.xyz",49],["fastupload.io",49],["azmath.info",49],["claimclicks.com",50],["thebullspen.com",50],["tii.la",51],["easymc.io",52],["yunjiema.top",52],["hacoos.com",53],["bondagevalley.cc",54],["zefoy.com",55],["vidello.net",56],["resizer.myct.jp",57],["gametohkenranbu.sakuraweb.com",58],["jisakuhibi.jp",59],["rank1-media.com",59],["lifematome.blog",60],["fm.sekkaku.net",61],["free-avx.jp",62],["dvdrev.com",63],["betweenjpandkr.blog",64],["nft-media.net",65],["ghacks.net",66],["songspk2.info",67],["truyentranhfull.net",68],["nectareousoverelate.com",71],["suaurl.com",72],["khoaiphim.com",73],["haafedk2.com",74],["fordownloader.com",74],["jovemnerd.com.br",75],["nicomanga.com",76],["totalcsgo.com",77],["vivamax.asia",78],["manysex.com",79],["gaminginfos.com",80],["tinxahoivn.com",81],["forums-fastunlock.com",82],["automoto.it",83],["sekaikomik.bio",84],["codelivly.com",85],["ophim.vip",86],["touguatize.monster",87],["client.falixnodes.net",88],["novelhall.com",89],["hes-goal.net",90],["allmusic.com",91],["androidpolice.com",91],["calculator-online.net",91],["cattime.com",91],["cbr.com",91],["cbssports.com",91],["chaptercheats.com",91],["collider.com",91],["comingsoon.net",91],["dogtime.com",91],["dualshockers.com",91],["freeconvert.com",91],["gamerant.com",91],["gfinityesports.com",91],["givemesport.com",91],["howtogeek.com",91],["insider-gaming.com",91],["liveandletsfly.com",91],["makeuseof.com",91],["milestomemories.com",91],["momtastic.com",91],["movieweb.com",91],["musicfeeds.com.au",91],["nj.com",91],["nordot.app",91],["nypost.com",91],["pagesix.com",91],["qtoptens.com",91],["realgm.com",91],["screenrant.com",91],["sherdog.com",91],["superherohype.com",91],["thefashionspot.com",91],["thegamer.com",91],["timesnews.net",91],["xda-developers.com",91],["cheatsheet.com",92],["pwinsider.com",92],["bagi.co.in",93],["keran.co",93],["biblestudytools.com",94],["christianheadlines.com",94],["ibelieve.com",94],["kuponigo.com",95],["kimcilonly.site",96],["kimcilonly.link",96],["cryptoearns.com",97],["inxxx.com",98],["ipaspot.app",99],["embedwish.com",100],["filelions.live",100],["leakslove.net",100],["jenismac.com",101],["vxetable.cn",102],["backfirstwo.site",103],["jewelavid.com",103],["nizarstream.com",103],["snapwordz.com",104],["toolxox.com",104],["rl6mans.com",104],["idol69.net",104],["plumbersforums.net",105],["123movies800.online",106],["gulio.site",107],["mediaset.es",108],["izlekolik.net",109],["donghuaworld.com",110],["letsdopuzzles.com",111],["tainio-mania.online",112],["hes-goals.io",113],["answerpython.com",114],["gsm-solution.com",114],["h-donghua.com",114],["hindisubbedacademy.com",114],["pkgovjobz.com",114],["ripexbooster.xyz",114],["serial4.com",114],["serial412.blogspot.com",114],["sigmalinks.in",114],["tutorgaming.com",114],["rediff.com",115],["iconicblogger.com",116],["dzapk.com",117],["darknessporn.com",118],["familyporner.com",118],["freepublicporn.com",118],["pisshamster.com",118],["punishworld.com",118],["xanimu.com",118],["pig69.com",119],["cosplay18.pics",119],["javhdo.net",120],["eroticmoviesonline.me",121],["teleclub.xyz",122],["sugarona.com",123],["nishankhatri.xyz",123],["highkeyfinance.com",123],["ecamrips.com",124],["showcamrips.com",124],["9animetv.to",125],["jornadaperfecta.com",126],["loseart.com",127],["sousou-no-frieren.com",128],["veev.to",129],["intro-hd.net",130],["monacomatin.mc",130],["nodo313.net",130],["unite-guide.com",131],["appimagehub.com",132],["gnome-look.org",132],["store.kde.org",132],["linux-apps.com",132],["opendesktop.org",132],["pling.com",132],["xfce-look.org",132],["botcomics.com",133],["cefirates.com",133],["chandlerorchards.com",133],["comicleaks.com",133],["marketdata.app",133],["monumentmetals.com",133],["tapmyback.com",133],["ping.gg",133],["revistaferramental.com.br",133],["hawpar.com",133],["alpacafinance.org",[133,134]],["nookgaming.com",133],["enkeleksamen.no",133],["kvest.ee",133],["creatordrop.com",133],["panpots.com",133],["cybernetman.com",133],["bitdomain.biz",133],["gerardbosch.xyz",133],["fort-shop.kiev.ua",133],["accuretawealth.com",133],["resourceya.com",133],["tracktheta.com",133],["tt.live",134],["future-fortune.com",134],["abhijith.page",134],["madrigalmaps.com",134],["adventuretix.com",134],["panprices.com",135],["intercity.technology",135],["freelancer.taxmachine.be",135],["adria.gg",135],["fjlaboratories.com",135],["proboards.com",136],["winclassic.net",136],["infinityscans.xyz",138],["perchance.org",139]]);

const entitiesMap = new Map([["1337x",[3,4]],["vidlox",4],["torlock",4],["f1stream",4],["fbstream",4],["mlbstream",4],["motogpstream",4],["nbastream",4],["nflstream",4],["nhlstream",4],["plylive",4],["plyvdo",4],["rugbystreams",4],["socceronline",4],["tennisstreams",4],["tvply",4],["ufcstream",4],["vipleague",4],["xmoviesforyou",4],["mkvcage",4],["pahe",[4,8]],["psarips",4],["yts",4],["ouo",4],["watch-series",4],["watchseries",4],["linkshorts",4],["imgsen",4],["imgsto",4],["streamcdn",4],["daddylive",4],["divxtotal",4],["divxtotal1",4],["pelisplus",4],["strikeout",4],["plyjam",4],["vipbox",4],["grantorrent",4],["2ddl",4],["peliculas24",4],["rojadirectaenvivo",4],["torrentz2eu",4],["movies123",4],["piratebay",4],["elixx",4],["file4go",4],["starmusiq",4],["mirrorace",4],["viprow",[4,16]],["asianclub",4],["javmost",4],["mixdrop",4],["mixdroop",4],["123movieshub",4],["thepiratebay",4],["mangovideo",4],["movierulzlink",4],["newmovierulz",4],["zooqle",4],["atomohd",4],["atomixhq",4],["pctfenix",4],["pctnew",4],["shortearn",4],["keepvid",4],["canalesportivo",4],["desiremovies",4],["uploadbuzz",4],["5movies",4],["xclusivejams",4],["tmearn",4],["leechall",4],["beinmatch",[4,21]],["shorten",4],["projectfreetv",4],["safetxt",4],["clickndownload",4],["clicknupload",4],["remaxhd",4],["miniurl",4],["thisav",4],["rnbxclusive0",4],["rnbxclusive1",4],["rnbxclusive",4],["skymovieshd",4],["adblockeronstape",4],["adblockstreamtape",4],["adblockstrtape",4],["adblockstrtech",4],["antiadtape",4],["noblocktape",4],["shavetape",4],["stapadblockuser",4],["stape",4],["stapewithadblock",4],["strcloud",4],["streamadblocker",4],["streamadblockplus",4],["streamta",4],["streamtape",4],["streamtapeadblockuser",4],["strtape",4],["strtapeadblock",4],["strtapeadblocker",4],["strtapewithadblock",4],["strtpe",4],["khatrimazafull",4],["khatrimazaful",4],["aniplay",4],["animesanka",4],["racaty",4],["animepahe",4],["crackstreams",4],["shortzzy",4],["rojadirecta",4],["shorttey",4],["filmyzilla",4],["estrenosflix",4],["estrenosflux",4],["estrenosgo",4],["proxybit",4],["3hiidude",4],["hiidudemoviez",4],["vexmoviex",4],["adcorto",4],["moviessources",4],["streamsport",4],["tormalayalam",4],["vidclouds",4],["animixplay",4],["moviesmeta",4],["streamhub",4],["123movieshd",4],["findav",4],["findporn",4],["youdbox",4],["keralahd",4],["toonanime",4],["123moviesme",4],["moviezwaphd",4],["7hitmovies",4],["vipboxtv",4],["buffstreams",4],["movieplex",4],["mrunblock",4],["swatchseries",4],["unblocknow",4],["ask4movie",4],["keeplinks",4],["1tamilmv",4],["usagoals",4],["ytmp3eu",4],["1stream",4],["gotxx",4],["mlsbd",4],["flixmaza",4],["g3g",4],["9xmovie",4],["flizmovies",4],["freetvsports",4],["hdmoviesfair",4],["hdmoviesflix",4],["incest",4],["incestflix",4],["moviesverse",4],["onlyfams",4],["pornhoarder",4],["shadowrangers",4],["shahi4u",4],["shahid4uu",4],["sshhaa",4],["tabooflix",4],["themoviesflix",4],["u4m",4],["softarchive",4],["123-movies",4],["4stream",4],["dvdplay",4],["yts-subs",4],["rintor",4],["alexsports",4],["enjoy4k",4],["nocensor",4],["adblockeronstreamtape",4],["sports-stream",4],["2umovies",4],["aagmaal",4],["bhaai",4],["mmsbee",4],["daddylivehd",4],["tutelehd",4],["adblocktape",4],["moviesflix",4],["alexsportz",4],["alexsportss",4],["kimcartoon",6],["soap2day",8],["hqq",10],["waaw",10],["teluguflix",12],["pixhost",13],["dood",25],["doodstream",25],["dooood",25],["shrinke",28],["shrinkme",28],["eplayvid",29],["poplinks",31],["cricstream",33],["dropgalaxy",33],["o2tvseries",33],["o2tvseriesz",33],["kickass",34],["watchomovies",40],["actvid",69],["mydverse",114]]);

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
    const reNodeName = safe.patternToRegex(nodeName, 'i', true);
    const rePattern = safe.patternToRegex(pattern, 'gms');
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 3);
    const shouldLog = scriptletGlobals.has('canDebug') && extraArgs.log || 0;
    const reCondition = safe.patternToRegex(extraArgs.condition || '', 'ms');
    const stop = (takeRecord = true) => {
        if ( takeRecord ) {
            handleMutations(observer.takeRecords());
        }
        observer.disconnect();
        if ( shouldLog !== 0 ) {
            safe.uboLog(`replace-node-text-core.fn: quitting "${pattern}" => "${replacement}"`);
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
        if ( shouldLog !== 0 ) {
            safe.uboLog('replace-node-text.fn before:\n', before);
            safe.uboLog('replace-node-text.fn after:\n', after);
        }
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
        if ( shouldLog !== 0 ) {
            safe.uboLog(`replace-node-text-core.fn ${count} nodes present before installing mutation observer`);
        }
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
