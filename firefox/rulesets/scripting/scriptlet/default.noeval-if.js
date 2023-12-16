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
const uBOL_noEvalIf = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["blocker"],["replace"],["ExoLoader"],["adsBlocked"],["ppu"],["/chp_?ad/"],["setInterval"],["chp_ad"],["tmohentai"],["ads"],["debugger"],["show"],["AdBlock"],["popUnderStage"],["fab_alert"],["adsbygoogle"],["_0x"],["deblocker"],["popunder"],["adb"],["/07c225f3\\.online|content-loader\\.com|css-load\\.com|html-load\\.com/"],["interactionCount"],["/fairAdblock|chp_adblock|adsbygoogle\\.js/"],["String.fromCharCode"],["fairAdblock"],["isFairAdBlocker"],["UserCustomPop"],["p=p.replace"]];

const hostnamesMap = new Map([["audiotools.pro",0],["magesy.blog",0],["magesypro.pro",0],["audioztools.com",0],["claimlite.club",0],["orgyxxxhub.com",1],["flash-firmware.blogspot.com",1],["healthfirstweb.com",1],["vocalley.com",1],["yogablogfit.com",1],["howifx.com",1],["en.financerites.com",1],["taodung.com",1],["mangaesp.co",1],["client.pylexnodes.net",1],["3movs.com",2],["jpopsingles.eu",3],["getintoway.com",3],["afronudes.com",3],["allcelebspics.com",3],["alttyab.net",3],["androjungle.com",3],["anonym-ads.xyz",3],["arkadmin.fr",3],["azoranov.com",3],["bacasitus.com",3],["barranquillaestereo.com",3],["bazaarwedding.com",3],["blogbhaiya.com",3],["brasilsimulatormods.com",3],["cambrevenements.com",3],["cartoonstvonline.com",3],["codecap.org",3],["comparili.net",3],["deephub.cyou",3],["descargasalinstante.com",3],["diaobe.net",3],["filegajah.com",3],["filmestorrent.tv",3],["flicksnchill.com",3],["franceprefecture.fr",3],["freecricket.net",3],["gcpainters.com",3],["germanvibes.org",3],["getmaths.co.uk",3],["gewinnspiele-markt.com",3],["hamzag.com",3],["hannibalfm.net",3],["hornyconfessions.com",3],["ilcamminodiluce.it",3],["joguinhosgratis.com",3],["joziporn.com",3],["justpaste.top",3],["katoikos.world",3],["kozyrom.com",3],["kumiste.com",3],["mbc2.live",3],["mctechsolutions.in",3],["measam.com",3],["medibok.se",3],["megafire.net",3],["mirrorpoi.com",3],["mirrorpoi.my.id",3],["mockuphunts.com",3],["moroccantea.uk",3],["mortaltech.com",3],["multivideodownloader.com",3],["nauci-engleski.com",3],["nauci-njemacki.com",3],["nekopoi.my.id",3],["nuketree.com",3],["nullpro.tech",3],["pa1n.xyz",3],["playertv.net",3],["pornhubtrending.net",3],["premiumthemes.shop",3],["programsolve.com",3],["radio-deejay.com",3],["ranaaclanhungary.com",3],["rasoi.me",3],["riprendiamocicatania.com",3],["seriesperu.com",3],["shmapp.ca",3],["shorthttp.online",3],["sub2unlocker.com",3],["romviet.com",[3,5]],["saygrupmekanik.com",3],["skillmineopportunities.com",3],["teczpert.com",3],["totalsportek.app",3],["tromcap.com",3],["tv0800.com",3],["tv3monde.com",3],["uiiumovies.net",3],["ustrendynews.com",3],["vidoza.xyz",3],["watchnow.fun",3],["weashare.com",3],["webdexscans.com",3],["xvideostrending.org",3],["yelitzonpc.com",3],["ymknow.xyz",3],["zimabadko.com",3],["zegtrends.com",5],["kiemlua.com",5],["link1s.com",5],["bloggingguidance.com",5],["onroid.com",5],["coinsrev.com",5],["110tutorials.com",5],["247beatz.ng",5],["247footballnow.com",5],["27-sidefire-blog.com",5],["2best.club",5],["2iptv.com",5],["3dyasan.com",5],["3fnews.com",5],["4fingermusic.com",5],["4gousya.net",5],["4horlover.com",5],["4spaces.org",5],["519.best",5],["51sec.org",5],["60fps.xyz",5],["80-talet.se",5],["9ketsuki.info",5],["adisann.com",5],["adsurfle.com",5],["adsy.pw",5],["advertafrica.net",5],["africue.com",5],["aghasolution.com",5],["aiyumangascanlation.com",5],["alanyapower.com",5],["albania.co.il",5],["albinofamily.com",5],["allcalidad.app",5],["allcivilstandard.com",5],["almofed.com",5],["altcryp.com",5],["altyazitube18.pw",5],["altyazitube19.pw",5],["amnaymag.com",5],["amritadrino.com",[5,22]],["amtil.com.au",5],["andani.net",5],["androidadult.com",5],["angolopsicologia.com",5],["anime4mega.net",5],["anime4mega-descargas.net",5],["anime7.download",5],["anime-torrent.com",5],["animecenterbr.com",5],["animetwixtor.com",5],["animexin.vip",5],["anmup.com.np",5],["anodee.com",5],["anonyviet.com",5],["anothergraphic.org",5],["aoseugosto.com",5],["apenasmaisumyaoi.com",5],["apkdink.com",5],["apostoliclive.com",5],["aprenderquechua.com",5],["arabstd.com",5],["articlebase.pk",5],["articlemela.xyz",5],["articlesmania.me",5],["articlespost.xyz",5],["ascalonscans.com",5],["asiansexdiarys.com",5],["askcerebrum.com",5],["askushowto.com",5],["aspirapolveremigliori.it",5],["astroages.com",5],["atgstudy.com",5],["atlantisscan.com",5],["atozmovies.xyz",5],["audiotrip.org",5],["auroraconeyisland.xyz",5],["autodime.com",5],["automat.systems",5],["avitter.net",5],["ayatoon.com",5],["ayuka.link",5],["azamericasat.net",5],["azdly.com",5],["azlyrics.online",5],["azores.co.il",5],["azrom.net",5],["babehubonlyfansly.com",5],["backyardpapa.com",5],["balkanteka.net",5],["bandstand.ph",5],["batman.city",5],["bcanotesnepal.com",5],["bcsnoticias.mx",5],["bdokan.com",5],["bdstarshop.com",5],["beaddiagrams.com",5],["bearchasingart.com",5],["beatree.cn",5],["beisbolinvernal.com",5],["bengalxpress.in",5],["bestcrack.xyz",5],["bettingexchange.it",5],["bi-girl.net",5],["bibliotecadecorte.com",5],["bibliotecahermetica.com.br",5],["bidersnotu.com",5],["bif24.pl",5],["biftutech.com",5],["bigdata-social.com",5],["bishalghale.com.np",5],["bitcotasks.com",5],["bitlikutu.com",5],["bittukitech.in",5],["bitview.cloud",5],["bitzite.com",[5,17]],["blog.motionisland.com",5],["blog24.me",5],["blogk.com",5],["bloooog.it",5],["bloxyscripts.com",5],["bluebuddies.com",5],["bluecoreinside.com",5],["blurayufr.xyz",5],["bogowieslowianscy.pl",5],["bookandcource.co",5],["bookpraiser.com",5],["boredgiant.com",5],["botinnifit.com",5],["boundlessnecromancer.com",5],["boxingvideo.org",5],["boxofficebusiness.in",5],["boystube.link",5],["brian70.tw",5],["bright-b.com",5],["brightpets.org",5],["brokensilenze.net",5],["brulosophy.com",5],["brushednickel.biz",5],["bsmaurya.com",5],["bugswave.com",5],["businesstrend.jp",5],["byswiizen.fr",5],["cafenau.com",5],["calmarkcovers.com",5],["calvyn.com",5],["camcam.cc",5],["camnang24h.net",5],["canadanouvelles.com",5],["canaltdt.es",5],["captionpost.com",5],["carryflix.icu",5],["cashkar.in",5],["casperhd.com",5],["catatanonline.com",5],["celebritablog.com",5],["cembarut.com.tr",5],["certificateland.com",5],["chachocool.com",5],["chakrirkhabar247.in",5],["championpeoples.com",5],["change-ta-vie-coaching.com",5],["charlottepilgrimagetour.com",5],["charpatra.com",5],["chataigpt.org",5],["chatgbt.one",5],["chatgptfree.ai",5],["cheatermad.com",5],["cheese-cake.net",5],["check-imei.info",5],["chieflyoffer.com",5],["chihouban.com",5],["chineseanime.org",5],["christiantrendy.com",5],["cimbusinessevents.com.au",5],["cinema-sketch.com",5],["cienagamagdalena.com",5],["cizzyscripts.com",5],["claimclicks.com",5],["claydscap.com",5],["clockskin.us",5],["cloud9obits.com",5],["cocorip.net",5],["code-source.net",5],["codeandkey.com",5],["codeastro.com",5],["codeitworld.com",5],["codewebit.top",5],["coinadpro.club",5],["coingraph.us",5],["coleccionmovie.com",5],["comeletspray.com",5],["comoinstalar.me",5],["compota-soft.work",5],["conoscereilrischioclinico.it",5],["consigliatodanoi.it",5],["constructionplacement.org",5],["cola16.app",5],["correction-livre-scolaire.fr",5],["crackthemes.com",5],["crackwatch.eu",5],["craigretailers.co.uk",5],["crazydeals.live",5],["crazyashwin.com",5],["creebhills.com",5],["creepyscans.com",5],["cronachesalerno.it",5],["cryptomanga.online",5],["cryptonor.xyz",5],["cryptonworld.space",5],["cta-fansite.com",5],["culture-informatique.net",5],["cyprus.co.il",5],["daemon-hentai.com",5],["daij1n.info",5],["dailytechupdates.in",5],["dailyweb.pl",5],["davidsonbuilders.com",5],["dabangbastar.com",5],["daybuy.tw",5],["deathonnews.com",5],["delvein.tech",5],["demonyslowianskie.pl",5],["depressionhurts.us",5],["derusblog.com",5],["descargaranimes.com",5],["descargaseriestv.com",5],["design4months.com",5],["desirenovel.com",5],["desktopsolution.org",5],["destakenewsgospel.com",5],["destinationsjourney.com",5],["detikbangka.com",5],["dev-dark-blog.pantheonsite.io",5],["devopslanka.com",5],["dewfuneralhomenews.com",5],["dhankasamaj.com",5],["diamondfansub.com",5],["diencobacninh.com",5],["digitalseoninja.com",5],["dignityobituary.com",5],["diplomaexamcorner.com",5],["dir-tech.com",5],["diskizone.com",5],["diversanews.com",5],["djsofchhattisgarh.in",5],["dma-upd.org",5],["dominican-republic.co.il",5],["donghuaworld.com",5],["doublemindtech.com",5],["downloadbatch.me",5],["downloader.is",5],["downloadtanku.org",5],["dpscomputing.com",5],["easyjapanesee.com",5],["easytodoit.com",5],["ecommercewebsite.store",5],["eczpastpapers.net",5],["editions-actu.org",5],["editorsadda.com",5],["edjerba.com",5],["egram.com.ng",5],["elcriticodelatele.com",5],["elcultura.pl",5],["elearning-cpge.com",5],["eleceedmanhwa.me",5],["embraceinnerchaos.com",5],["emperorscan.com",5],["empleo.com.uy",5],["encuentratutarea.com",5],["encurtareidog.top",5],["eng-news.com",5],["english-topics.com",5],["english101.co.za",5],["entenpost.com",5],["epicpdf.com",5],["epsilonakdemy.com",5],["eramuslim.com",5],["erreguete.gal",5],["ervik.as",5],["esportsmonk.com",5],["et-invest.de",5],["ethiopia.co.il",5],["evlenmekisteyenbayanlar.net",5],["ewybory.eu",5],["exam-results.in",5],["exeking.top",5],["expertskeys.com",5],["f1gplive.xyz",5],["faaduindia.com",5],["fapfapgames.com",5],["fapkingsxxx.com",5],["faqwiki.us",5],["farolilloteam.es",5],["fattelodasolo.it",5],["fchopin.net",5],["felicetommasino.com",5],["femisoku.net",5],["ferdroid.net",5],["fessesdenfer.com",5],["fhedits.in",5],["fhmemorial.com",5],["finalnews24.com",5],["financeandinsurance.xyz",5],["financeyogi.net",5],["financid.com",5],["finclub.in",5],["findheman.com",5],["findnewjobz.com",5],["fine-wings.com",5],["firescans.xyz",5],["fitnessscenz.com",5],["fitnesshealtharticles.com",5],["flashssh.net",5],["flexamens.com",5],["flowsnet.com",5],["fmhublog.xyz",5],["folkmord.se",5],["foodgustoso.it",5],["footoks.online",5],["forex-yours.com",5],["foxaholic.com",5],["francaisfacile.net",5],["free.7hd.club",5],["freebiesmockup.com",5],["freecoursesonline.me",5],["freedom3d.art",5],["freefiremaxofficial.com",5],["freefireupdate.com",5],["freegetcoins.com",5],["freelancerartistry.com",5],["freemovies-download.com",5],["freepasses.org",5],["freetohell.com",5],["freetubetv.net",5],["freescorespiano.com",5],["freewoodworking.ca",5],["fresherbaba.com",5],["freshersgold.com",5],["frpgods.com",5],["ftuapps.dev",5],["fumettologica.it",5],["funeral-memorial.com",5],["funeralmemorialnews.com",5],["gabrielcoding.com",5],["gadgetxplore.com",5],["gadgetspidy.com",5],["gamenv.net",5],["gamefi-mag.com",5],["gamers-haven.org",5],["games-manuals.com",5],["gamerxyt.com",5],["gamevcore.com",5],["gaminglariat.com",5],["gamingsearchjournal.com",5],["gatagata.net",5],["ganzoscan.com",5],["gazetazachodnia.eu",5],["gdrivemovies.xyz",5],["geekering.com",5],["gemiadamlari.org",5],["gentiluomodigitale.it",5],["gesund-vital.online",5],["getsuicidegirlsfree.com",5],["ghostsfreaks.com",5],["gisvacancy.com",5],["giuseppegravante.com",5],["gkbooks.in",5],["gksansar.com",5],["globelempire.com",5],["gogetapast.com.br",5],["gogueducation.com",5],["gokerja.net",5],["golf.rapidmice.com",5],["gomov.bio",5],["goodriviu.com",5],["googlearth.selva.name",5],["gotocam.net",5],["grasta.net",5],["greasygaming.com",5],["greattopten.com",5],["groovyfreestuff.com",5],["gsdn.live",5],["gsmfreezone.com",5],["gtavi.pl",5],["gwiazdatalkie.com",5],["habuteru.com",5],["hadakanonude.com",5],["hairjob.wpx.jp",5],["happy-otalife.com",5],["harbigol.com",5],["haveyaseenjapan.com",5],["hdhub4one.pics",5],["healthbeautybee.com",5],["healthfatal.com",5],["hechos.net",5],["heutewelt.com",5],["highdefdiscnews.com",5],["hilaw.vn",5],["hindishri.com",5],["historichorizons.com",5],["hobbykafe.com",5],["hockeyfantasytools.com",5],["hojii.net",5],["hookupnovel.com",5],["hopsion-consulting.com",5],["hostingreviews24.com",5],["hotspringsofbc.ca",5],["howtoblogformoney.net",5],["hungarianhardstyle.hu",5],["hyderone.com",5],["hypelifemagazine.com",5],["ideatechy.com",5],["idesign.wiki",5],["idevfast.com",5],["idevice.me",5],["idpvn.com",5],["iggtech.com",5],["ignoustudhelp.in",5],["ikarianews.gr",5],["ilbassoadige.it",5],["ilbolerodiravel.org",5],["inertz.org",5],["infojabarloker.com",5],["infulo.com",5],["inra.bg",5],["insideeducation.co.za",5],["insidememorial.com",5],["insider-gaming.com",5],["insurancepost.xyz",5],["intelligence-console.com",5],["interculturalita.it",5],["inulledthemes.com",5],["inventionsdaily.com",5],["iptvxtreamcodes.com",5],["isabihowto.com.ng",5],["italiadascoprire.net",5],["itmaniatv.com",5],["itopmusic.com",5],["itopmusicx.com",5],["itz-fast.com",5],["iwb.jp",5],["jackofalltradesmasterofsome.com",5],["jaktsidan.se",5],["japannihon.com",5],["javhdworld.com",5],["jcutrer.com",5],["jk-market.com",5],["jkhentai.co",5],["jobsbd.xyz",5],["jobslampung.net",5],["jra.jpn.org",5],["jungyun.net",5],["juninhoscripts.com.br",5],["juventusfc.hu",5],["kacikcelebrytow.com",5],["kana-mari-shokudo.com",5],["kanaeblog.net",5],["kandisvarlden.com",5],["karaoke4download.com",5],["kawaguchimaeda.com",5],["kaystls.site",5],["kenkou-maintenance.com",5],["kenta2222.com",5],["khabarbyte.com",5],["kickcharm.com",5],["kinisuru.com",5],["kits4beats.com",5],["kllproject.lv",5],["know-how-tree.com",5],["kobitacocktail.com",5],["kodewebsite.com",5],["kokosovoulje.com",5],["korogashi-san.org",5],["krx18.com",5],["kupiiline.com",5],["kurobatch.com",5],["kurosuen.live",5],["labstory.in",5],["ladypopularblog.com",5],["lamorgues.com",5],["lapagan.org",5],["lapaginadealberto.com",5],["lascelebrite.com",5],["latinlucha.es",5],["law101.org.za",5],["learnedclub.com",5],["learnodo-newtonic.com",5],["learnospot.com",5],["learnslovak.online",5],["lebois-racing.com",5],["leechyscripts.net",5],["legendaryrttextures.com",5],["lendrive.web.id",5],["letrasgratis.com.ar",5],["levismodding.co.uk",5],["lglbmm.com",5],["lheritierblog.com",5],["ligaset.com",5],["limcasports.xyz",5],["limontorrent.com",5],["limontorrents.com",5],["linkskibe.com",5],["linkvoom.com",5],["linux-talks.com",5],["linuxexplain.com",5],["lionsfan.net",5],["literarysomnia.com",5],["littlepandatranslations.com",5],["livefootballempire.com",5],["lk21org.com",5],["loanpapa.in",5],["logofootball.net",5],["lookism.me",5],["lordfix.xyz",5],["lotus-tours.com.hk",5],["lshistoria.com",5],["ltpcalculator.in",5],["luchaonline.com",5],["luciferdonghua.in",5],["luckymood777.com",5],["lustesthd.lat",5],["lycee-maroc.com",5],["macrocreator.com",5],["madevarquitectos.com",5],["maketoss.com",5],["mamtamusic.in",5],["mangcapquangvnpt.com",5],["mantrazscan.com",5],["marketedgeofficial.com",5],["marketing-business-revenus-internet.fr",5],["marketrevolution.eu",5],["masashi-blog418.com",5],["mastakongo.info",5],["maths101.co.za",5],["matshortener.xyz",5],["mediascelebres.com",5],["medytour.com",5],["meteoregioneabruzzo.it",5],["mhscans.com",5],["michiganrugcleaning.cleaning",5],["midis.com.ar",5],["millihabercim.com",5],["minddesignclub.org",5],["minecraftwild.com",5],["minhasdelicias.com",5],["mitaku.net",5],["mixmods.com.br",5],["mmorpgplay.com.br",5],["mockupcity.com",5],["mockupgratis.com",5],["modyster.com",5],["monaco.co.il",5],["morinaga-office.net",5],["mosttechs.com",5],["motofan-r.com",5],["moviemod.online",5],["movieping.com",5],["mscdroidlabs.es",5],["mtech4you.com",5],["multimovies.tech",5],["mundovideoshd.com",5],["murtonroofing.com",5],["musicforchoir.com",5],["musictip.net",5],["mxcity.mx",5],["mxpacgroup.com",5],["my-ford-focus.de",5],["myglamwish.com",5],["myicloud.info",5],["mylinkat.com",5],["mylivewallpapers.com",5],["mypace.sasapurin.com",5],["myqqjd.com",5],["mytectutor.com",5],["myunity.dev",5],["myviptuto.com",5],["nagpurupdates.com",5],["naijagists.com",5],["naijdate.com",5],["najboljicajevi.com",5],["nakiny.com",5],["nameart.in",5],["nartag.com",5],["naturalmentesalute.org",5],["naturomicsworld.com",5],["naveedplace.com",5],["navinsamachar.com",5],["neet.wasa6.com",5],["neifredomar.com",5],["nemumemo.com",5],["nepaljobvacancy.com",5],["neservicee.com",5],["netsentertainment.net",5],["neuna.net",5],["newbookmarkingsite.com",5],["newfreelancespot.com",5],["news-geinou100.com",5],["newsobituary.com",5],["newstechone.com",5],["nghetruyenma.net",5],["nichetechy.com",5],["nin10news.com",5],["nicetube.one",5],["niteshyadav.in",5],["noanyi.com",5],["noblessetranslations.com",5],["nocsummer.com.br",5],["nodenspace.com",5],["nopay.info",5],["notandor.cn",5],["note1s.com",5],["notesformsc.org",5],["noteshacker.com",5],["novelread.co",5],["nsfwr34.com",5],["nswdownload.com",5],["nswrom.com",5],["ntucgm.com",5],["nudeslegion.com",5],["nukedfans.com",5],["nukedpacks.site",5],["nulledmug.com",5],["nyangames.altervista.org",5],["nylonstockingsex.net",5],["obituary-deathnews.com",5],["obituaryupdates.com",5],["odekake-spots.com",5],["officialpanda.com",5],["ofwork.net",5],["omeuemprego.online",5],["omusubi-56rin.com",5],["onehack.us",5],["onestringlab.com",5],["onlinetechsamadhan.com",5],["onlyhgames.com",5],["onneddy.com",5],["onyxfeed.com",5],["oatuu.org",5],["openstartup.tm",5],["opiniones-empresas.com",5],["oracleerpappsguide.com",5],["orenoraresne.com",5],["oromedicine.com",5],["orunk.com",5],["otakuliah.com",5],["oteknologi.com",5],["ovnihoje.com",5],["pabryyt.one",5],["palofw-lab.com",5],["pandaatlanta.com",5],["pantube.top",5],["papafoot.click",5],["papahd.club",5],["parisporn.org",5],["parking-map.info",5],["pasokau.com",5],["passionatecarbloggers.com",5],["passportaction.com",5],["pc-guru.it",5],["pcgamedownload.net",5],["pdfstandards.net",5],["pepar.net",5],["personefamose.it",5],["petitestef.com",5],["pflege-info.net",5],["phonefirmware.com",5],["phoenix-manga.com",5],["physics101.co.za",5],["piratemods.com",5],["piximfix.com",5],["plantatreenow.com",5],["plc4free.com",5],["pliroforiki-edu.gr",5],["plutoscripts.xyz",5],["poapan.xyz",5],["pogga.org",5],["porlalibreportal.com",5],["pornfeel.com",5],["portaldoaz.org",5],["portaldosreceptores.org",5],["postblog.xyz",5],["prague-blog.co.il",5],["praveeneditz.com",5],["premierftp.com",5],["prensa.click",5],["pressemedie.dk",5],["pressurewasherpumpdiagram.com",5],["pricemint.in",5],["primemovies.pl",5],["prismmarketingco.com",5],["proapkdown.com",5],["projuktirkotha.com",5],["promiblogs.de",5],["promimedien.com",5],["psicotestuned.info",5],["psychology-spot.com",5],["publicidadtulua.com",5],["pupuweb.com",5],["putlog.net",5],["quatvn.club",5],["questionprimordiale.fr",5],["quicktelecast.com",5],["radiantsong.com",5],["ralli.ee",5],["ranjeet.best",5],["ranourano.xyz",5],["raulmalea.ro",5],["rbs.ta36.com",5],["rbscripts.net",5],["rctechsworld.in",5],["readfast.in",5],["realfreelancer.com",5],["recipenp.com",5],["redbubbletools.com",5],["redfaucet.site",5],["reeell.com",5],["renierassociatigroup.com",5],["reportbangla.com",5],["reprezentacija.rs",5],["retire49.com",5],["rightdark-scan.com",5],["rinconpsicologia.com",5],["ritacandida.com",5],["rocdacier.com",5],["rollingwheel.xyz",5],["romaierioggi.it",5],["romaniasoft.ro",5],["roshy.tv",5],["rseducationinfo.com",5],["rsfinanceinfo.com",5],["rsinsuranceinfo.com",5],["rssoftwareinfo.com",5],["rubyskitchenrecipes.uk",5],["rumanicandle.online",5],["ruyamanga.com",5],["rv-ecommerce.com",5],["rwong.net",5],["ryanmoore.marketing",5],["ryansharich.com",5],["s1os.icu",5],["s4msecurity.com",5],["s920221683.online.de",5],["sabishiidesu.com",5],["saekita.com",5],["samanarthishabd.in",5],["samovies.net",5],["samrudhiglobal.com",5],["satcesc.com",5],["savegame.pro",5],["sawwiz.com",5],["scansatlanticos.com",5],["schildempire.com",5],["scholarshiplist.org",5],["scontianastro.com",5],["scrap-blog.com",5],["scriptsomg.com",5],["seogroup.bookmarking.info",5],["server-tutorials.net",5],["serverxfans.com",5],["shadagetech.com",5],["shanurdu.com",5],["shittokuadult.net",5],["shogaisha-shuro.com",5],["shogaisha-techo.com",5],["shorttrick.in",5],["shrinklinker.com",5],["shrinkus.tk",5],["siirtolayhaber.com",5],["sim-kichi.monster",5],["sivackidrum.net",5],["sk8therapy.fr",5],["skardu.pk",5],["slawoslaw.pl",5],["slowianietworza.pl",5],["smallseotools.ai",5],["soccermlbstream.xyz",5],["socebd.com",5],["sociallyindian.com",5],["softcobra.com",5],["softrop.com",5],["sohohindi.com",5],["south-park-tv.biz",5],["sp500-up.com",5],["space-faucet.com",5],["spacestation-online.com",5],["spardhanews.com",5],["speak-english.net",5],["speculationis.com",5],["spinoff.link",5],["sport-97.com",5],["stablediffusionxl.com",5],["stahnivideo.cz",5],["stakes100.xyz",5],["starsgtech.in",5],["startupjobsportal.com",5],["stireazilei.eu",5],["stock-rom.com",5],["streamseeds24.com",5],["strefa.biz",5],["studybullet.com",5],["sukuyou.com",5],["sundberg.ws",5],["super-ethanol.com",5],["superpackpormega.com",5],["surgicaltechie.com",5],["swietaslowianskie.pl",5],["sysguides.com",5],["system32.ink",5],["ta3arof.net",5],["tabonitobrasil.tv",5],["taisha-diet.com",5],["talentstareducation.com",5],["tamilanzone.com",5],["tamilhit.tech",5],["tamilnaadi.com",5],["tatsublog.com",5],["tbazzar.com",5],["team-octavi.com",5],["team-rcv.xyz",5],["teamkong.tk",5],["teamupinternational.com",5],["techacrobat.com",5],["techbytesblog.com",5],["techdriod.com",5],["techedubyte.com",5],["techkeshri.com",5],["technewsrooms.com",5],["technicalviral.com",5],["technorozen.com",5],["techoreview.com",5],["techprakash.com",5],["techsbucket.com",5],["techstwo.com",5],["techyhigher.com",5],["techyrick.com",5],["tecnoscann.com",5],["tehnar.net.ua",5],["tehnotone.com",5],["telephone-soudan.com",5],["teluguhitsandflops.com",5],["temporeale.info",5],["tenbaiquest.com",5],["testious.com",5],["thaript.com",5],["the-loop.xyz",5],["theapothecarydiariesmanga.com",5],["thebigblogs.com",5],["theworldobits.com",5],["thebreakermanga.online",5],["thecannalysts.blog",5],["theconomy.me",5],["thegamearcade.com",5],["theinternettaughtme.com",5],["thejoblives.com",5],["theliveupdate.com",5],["thenewsglobe.net",5],["theprofoundreport.com",5],["thesleak.com",5],["thesportsupa.com",5],["thewambugu.com",5],["throwsmallstone.com",5],["tirumalatirupatiyatra.in",5],["today-obits.com",5],["todays-obits.com",5],["toeflgratis.com",5],["tokoasrimotedanpayet.my.id",5],["toorco.com",5],["top10trends.net",5],["topsworldnews.com",5],["toptenknowledge.com",5],["torrentdofilmeshd.net",5],["towerofgod.top",5],["tr3fit.xyz",5],["trendflatt.com",5],["trendohunts.com",5],["trgtkls.org",5],["tukangsapu.net",5],["tunabagel.net",5],["turkeymenus.com",5],["turkishseriestv.net",5],["tutorialesdecalidad.com",5],["tutorialsduniya.com",5],["uciteljica.net",5],["udemyking.com",5],["uiuxsource.com",5],["ukigmoch.com",5],["unityassets4free.com",5],["uozzart.com",5],["uploadbank.com",5],["usahealthandlifestyle.com",5],["ustimz.com",5],["ustvgo.live",5],["uur-tech.net",5],["vamsivfx.com",5],["vanderheide.online",5],["veganab.co",5],["vibezhub.com.ng",5],["viciante.com.br",5],["villettt.kitchen",5],["virabux.com",5],["vitadacelebrita.com",5],["vivrebordeaux.fr",5],["vmorecloud.com",5],["voidtruth.com",5],["vstplugin.net",5],["warungkomik.com",5],["webacademix.com",5],["webcamfuengirola.com",5],["webcras.com",5],["webhostingoffer.org",5],["webrash.com",5],["websiteglowgh.com",5],["whats-new.cyou",5],["wheelofgold.com",5],["wholenotism.com",5],["worldgyan18.com",5],["worldtop2.com",5],["worldwidestandard.net",5],["wp.solar",5],["writeprofit.org",5],["xiaomitools.com",5],["xmoviepro.xyz",5],["xn--nbkw38mlu2a.com",5],["yakisurume.com",5],["yakyufan-asobiba.com",5],["yawm.online",5],["ycongnghe.com",5],["yestech.xyz",5],["ynk-blog.com",5],["youlife24.com",5],["youpit.xyz",5],["youpits.xyz",5],["your-local-pest-control.com",5],["yourdesignmagazine.com",5],["yuatools.com",5],["yuki0918kw.com",5],["yumekomik.com",5],["yurudori.com",5],["zerogptai.org",5],["znanemediablog.com",5],["mdbekjwqa.pw",6],["azmath.info",7],["downfile.site",7],["downphanmem.com",7],["expertvn.com",7],["memangbau.com",7],["trangchu.news",7],["adultcomixxx.com",7],["tmohentai.com",8],["phpscripttr.com",9],["descargaspcpro.net",9],["dotadostube.com",9],["taradinhos.com",9],["tech5s.co",9],["game-2u.com",9],["toramemoblog.com",9],["gplastra.com",9],["okleak.com",9],["subindojav.cc",9],["afly.pro",9],["ithinkilikeyou.net",9],["milanreports.com",9],["towerofgod.me",9],["crotpedia.net",9],["papahd.co",9],["drakescans.com",9],["watchfacebook.com",9],["web1s.asia",9],["bokugents.com",9],["newzjunky.com",9],["yourlifeupdated.net",9],["lscomic.com",9],["tv.durbinlive.com",9],["freeltc.online",9],["pornleaks.in",9],["dudestream.com",9],["areascans.net",9],["hentaihaven.xxx",10],["aeonax.com",10],["telemporio4.blogspot.com",10],["embed.streamx.me",10],["techoreels.com",10],["maccanismi.it",11],["gamesrepacks.com",11],["techhelpbd.com",11],["broflix.club",11],["pokemundo.com",11],["unofficialtwrp.com",11],["lewebde.com",11],["cazztv.xyz",11],["apkdelisi.net",11],["app.covemarkets.com",11],["kimcilonly.top",11],["hentaistream.com",13],["nudeselfiespics.com",13],["hentaivideos.net",13],["danc.uk",14],["booksrack.net",15],["cubehosting.me",16],["ergasiakanea.eu",17],["surfsees.com",17],["conghuongtu.net",17],["downloadlyir.com",17],["ipamod.com",17],["filemooon.top",18],["techacode.com",19],["sideplusleaks.com",19],["genshinlab.com",20],["a-ha.io",20],["cboard.net",20],["mobilitytv.co.kr",20],["mememedia.co.kr",20],["newautopost.co.kr",20],["tvreport.co.kr",20],["tenbizt.com",20],["jjang0u.com",20],["joongdo.co.kr",20],["viva100.com",20],["thephoblographer.com",20],["newdaily.co.kr",20],["dogdrip.net",20],["golf-live.at",20],["gamingdeputy.com",20],["thesaurus.net",20],["apkmirror.com",20],["dotkeypress.kr",20],["viewcash.co.kr",20],["tripplus.co.kr",20],["enterdiary.com",20],["mtodayauto.com",20],["hotplacehunter.co.kr",20],["mystylezip.com",20],["majorgeeks.com",20],["poro.gg",20],["maple.gg",20],["lolchess.gg",20],["dak.gg",20],["meconomynews.com",20],["brandbrief.co.kr",20],["dfast.kr",20],["youtu.co",20],["mlbpark.donga.com",20],["capress.kr",20],["carandmore.co.kr",20],["maxmovie.kr",20],["motorgraph.com",20],["newsbell.co.kr",20],["tminews.co.kr",20],["thehousemagazine.kr",20],["hardreset.info",20],["metabattle.com",20],["autosport.com",21],["motorsport.com",21],["wikitraveltips.com",22],["cdn.gledaitv.live",23],["mgnetu.com",24],["pepperlive.info",24],["iptv-list.live",25],["unitystr.com",25],["kurakura21.space",26],["cmpa.mg.gov.br",27]]);

const entitiesMap = new Map([["shrink",1],["an1me",3],["papafoot",3],["file-upload",4],["24pdd",5],["audiotools",5],["autosport",5],["eventiavversinews",5],["flixhub",5],["freevstplugins",5],["haryanaalert",5],["itdmusic",5],["javboys",5],["keroseed",5],["magesypro",5],["mcrypto",5],["nishankhatri",5],["poplinks",5],["azsoft",7],["mlwbd",9],["katmoviefix",9],["layardrama21",9],["sdmoviespoint",9],["bfstrms",10],["crackstreams",10],["pasteit",12]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function noEvalIf(
    needle = ''
) {
    if ( typeof needle !== 'string' ) { return; }
    const safe = safeSelf();
    const reNeedle = safe.patternToRegex(needle);
    window.eval = new Proxy(window.eval, {  // jshint ignore: line
        apply: function(target, thisArg, args) {
            const a = args[0];
            if ( reNeedle.test(a.toString()) ) { return; }
            return target.apply(thisArg, args);
        }
    });
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
    try { noEvalIf(...argsList[i]); }
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
    return uBOL_noEvalIf();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_noEvalIf = cloneInto([
            [ '(', uBOL_noEvalIf.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_noEvalIf);
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
    delete page.uBOL_noEvalIf;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
