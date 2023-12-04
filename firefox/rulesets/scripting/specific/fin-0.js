/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2019-present Raymond Hill

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

// ruleset: fin-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = ["div[id*=\"AdContainer\"]","#block-annonsblockx6,\n#block-bilwebbenmobileteaser,\n#block-googleaddesktopinsider,\n#block-marknadenmobileteaser,\n#block-stickyannons,\n#block-views-block-bilwebben-block-1,\n#block-views-block-company-ads-block-1,\n.editorial-ad,\ndiv[id|=\"block-googleadmaincontent\"]",".mobileads",".elementor-location-header .topp","#petition_page_top_ad","#div-ad-below-message,\n.pageWidth > div[style=\"min-height:90px;text-align:center;margin:auto;\"],\n.sidebar > div[style=\"min-height:250px;text-align:center;margin:auto;\"]","[href^=\"https://tc.tradetracker.net/\"],\ndiv.text-center.col-sm-6 > a[rel$=\"nofollow\"]","#block-local-offers-widget-front,\n.optionset-imported-ads,\n.revive-block,\n.view-imported-ad-ams",".ad.right-col-box,\n.banner-slot-box,\n[class^=\"banner-slot-preroll\"]",".text-link[href*=\"&utm_medium=banner&utm_campaign=\"],\n.text-link[href^=\"https://clk.tradedoubler.com/\"]",".ad-slot,\n.mobile-leaderboard-container,\n.resize-container","div[id^=\"dfp__\"]",".ad-container","a[href*=\"bannerTrack\"]","#outstream,\n.pnad-container",".td-post-content > .social-share ~ *",".bc--grey-neutral-50,\n.card-article-ads","#topBanner","a[href*=\"tema.fi\"]",".affilistaukset,\n.leovegas,\n[class^=\"mstila\"],\na[href^=\"https://ads.expekt.se/\"],\na[href^=\"https://ads.mrgreen.com/\"],\na[href^=\"https://promo.leovegas.com/\"],\na[href^=\"https://stake.com/\"],\na[href^=\"https://www.expekt.com/\"],\na[href^=\"https://www.leovegas.com/\"],\ndiv[class=\"artikkeli_body\"] > p:first-of-type > a[href$=\".gif\"],\ndiv[class=\"artikkeli_body\"] a[href*=\"-Expekt-\"],\np img.alignnone[src$=\".png\"][alt=\"\"][width=\"2560\"][height^=\"20\"]","div[id|=\"almad\"]","a[aria-label=\"Mainostaja\"],\na[aria-label=\"Mainostajan linkki\"]","#billboard,\n#logopal,\n.flexibox,\n.shopster,\ndiv[class*=\"adbox\"],\ndiv[style=\"background: rgb(246, 66, 100) none repeat scroll 0% 0%; color: rgb(255, 255, 255); padding: 20px;\"]","#ipsLayout_mainArea > center,\n.ipsLayout_sidebarright,\n[data-nbenhadv]","#findance_desktop-top,\ndiv[id^=\"adslot_content\"],\ndiv[id^=\"adslot_sidebar\"]","#page-body > div[style=\"width:728px; margin:0 auto; padding:10px 0;\"]",".futis-sticky-footer[data-futis-trackbid]",".adv-link",".advr_box,\n.mvp-side-widget.widget_text,\n.pum-overlay,\n.wp_rss_retriever + div[style^=\"margin-top:\"],\n.wp_rss_retriever[style^=\"background:\"],\n[class^=\"top-banner-\"],\n[data-advadstrackid],\n[href=\"https://bonuspanda.com/fi/\"],\n[href=\"https://casinogorilla.com/fi/nettikasinot/\"],\n[href=\"https://pussit.com\"],\n[href=\"https://www.halvinlaina.fi\"],\n[href=\"https://yrityslaina.com\"]","#gp-natives,\n.ad-separatator,\n.carousel-cell--native,\n.content-continues-after-ad,\n.golfliitto-articles__commercial,\n.main-native,\n.native-carousel,\n.search-results > .section--ad__mob,\n.section--ad__panorama,\n.section--ad__rectangle,\n.section-native-list,\nbody.bbpress > .content-wrapper .section--ad",".td_block_template_1.td-a-rec-id-custom-spot.td-a-rec.td-block,\na[href$=\"koronaavastaan.fi/?ref=metrotuotanto\"]",".td-a-rec-id-sidebar","A[href=\"http://www.satshop.fi\"]",".boxi","div[class|=\"g g\"]","#cmorelink,\n.inline-txtad,\ndiv[class=\"block block-block\"]",".adv,\n.adv_content,\n.adv_side",".custom_banners_big_linkbefore-content,\n.custom_banners_big_linkwidget,\n[class^=\"custom_banners_big_linkcontent\"],\n[id^=\"_ning_zone_\"]","#mini-panel-autodoc_150x50,\n.gam-holder",".kiekk-footer-sticky[data-kiekk-trackbid]","[style^=\"text-align:center;margin-left:auto !important;margin-right:auto !important;height: 420px; margin-top:60px\"]",".oxy-modal-backdrop",".block-mainos","#secondary #block_widget-4,\n.bannerma,\n.code-block",".banners","a[href*=\"adsrv\"],\ndiv[class=\"main-bottom\"]",".addme","[href^=\"https://www.kasinokaverit.com/\"],\n[href^=\"https://www.lainaovi.fi/\"]",".lead-collector-cta",".strossle > div[class*=\"post-ad\"]",".md\\:bg-gray-200.md\\:max-w-full.md\\:px-4.md\\:py-4","#ad-300x150,\n#ad-300x300,\ndiv[class=\"ad230x90\"]",".ads",".pnadg-container","[href$=\"/pitkavetovihjeet/\"]",".mvp-post-ad-wrap","div[aria-label=\"Siirtymisruutu\"] ~ div[data-max-width=\"2400\"] + div[class]","#bottom-offer","#banneri_yla,\n.banner.content",".advert",".paid-content-wrapper",".widget_ads_carousel,\n.widget_hintaopasbestprice,\nSECTION[id*=\"hintaopaspopular\"]","[href=\"https://www.kasinokaverit.com/ilmaiskierroksia-nettikasinoilla/\"],\n[href=\"https://www.nainen.com/lainoja-kilpailuttamalla-saastat-aikaa-ja-rahaa/\"]",".homepage-adspot","#banner_area,\n.lazyLoadInhouseBanner,\n.topBannerMinHeight,\n[class*=\"pt\"][class*=\"pb\"][style*=\"border-top:1px solid #b3b3b3\"]","#homeBottomBoxBanner,\n#homeTopBoxBanner,\n#huge_banner,\n#largeViewHouseBanner,\n.huge-banner,\n.inh_banner_nl,\n.leftAdvDiv,\n.listing:not([data-id]):not(.tricky_link_listing),\n.quick-search__banner",".itemlist > li:not(.block_list_li)","[class=\"center\"][style=\"padding-top:15px;\"]","div.nc_r_banner","#smallViewHouseBanner","#offer,\n#tulos-etu",".samBannerUnit,\n.samCodeUnit,\n.td-header-sp-recs",".js-notices.notices--block.notices","#nav + div[style=\"text-align:center;min-height:280px\"]","a[href^=\"https://pelaajat.com/out/\"] > img,\na[href^=\"https://www.freelaskutus.fi/\"]","#adiniframe_oikealaita_container,\n#bookingnostokuvasarjassa,\n#mainos .ilmoitus,\n#pm_mp_kotisivu,\n[id^=\"pm_mp_tekstissa\"]",".adv_ads_ad_unit","center","a[href*=\"banner\"]",".banner-slot-preroll","[href^=\"http://ads.leovegas.com/\"],\n[href^=\"http://www.primeslots.com/\"],\ndiv#panorama_container,\ndiv[style=\"font-size:14px;line-height:21px;padding-top:6px;\"],\ndiv[style=\"padding-bottom:10px;margin-bottom:6px;border-top:1px solid gray;margin-top:6px;\"] + [type=\"text/javascript\"] + div,\ndiv[style=\"padding-bottom:10px;margin-bottom:6px;border-top:1px solid gray;margin-top:6px;\"] + table[width=\"468\"] + div,\nscript[src^=\"http://adserving.unibet.com/ad.aspx\"] + div[style=\"padding-bottom:10px;margin-bottom:6px;border-top:1px solid gray;margin-top:6px;\"],\ntable[width=\"468\"]","[href$=\"/nettikasinot/\"],\n[href$=\"/nettikasinot/\"] + .dropdown-toggle","[data-bottom-floater]","a[href^=\"https://on.vallila.fi/\"],\np a[href^=\"https://related.iittala.com/\"]",".adf-placement-top",".annons",".panorama-wrapper",".advertisement","#mvp-leader-wrap,\n.clever-core-ads,\n.uutis-footer-sticky[data-uutis-trackbid]","#text-8,\n#text-9","#secondary a[href^=\"https://diamondbeverages.fi/\"],\n#secondary a[href^=\"https://wihuri.metrotukku.fi/\"]",".advertising",".service-ad-panel",".teaser-ad__background",".ticker--promo-10,\ndiv[class] > a[href^=\"https://tilaa.sanoma.fi/\"]","[data-info-container-text^=\"MAINOS\"]","div[class$=\"nativead\"]",".teivo-sidebar","[href=\"/tilaa-lehti\"]",".vaihtuvamainos,\ndiv[class=\"w-full md:w-2/5 pt-6 md:pt-0 pl-0 md:pl-8\"]",".ugaam-archive-ad-wrapper",".box--full.grid__container.clearfix,\n.magazineorderwidget__content",".sidebar-block > a[href^=\"http://pubads.g.doubleclick.net/gampad/clk\"],\n[href*=\"paratiisi.fi\"]","#front_after_menu,\n.latest_sima,\n.soliloquy-link,\n.widget.sima","#tilt-ad-top-stay-away",".widget_nativearticles",".frontpage-banner,\n.native-comms","[class*=\"ad__component\"],\n[class^=\"Ad__AdRoot\"]",".ads-parade-wrapper,\na[href^=\"https://www.arvopaperi.fi/kumppanisisallot/\"][target=\"_self\"]:not(section > a)","[class*=\"p2m385-\"]",".head.the-wrap,\n[id|=\"bunyad-widget-ads\"]",".pb[lazied]","#pb_bottom,\n.box_dt,\n[href^=\"/clk\"]",".pb_t","div[class*=\"advertorial\"]",".teaser--ad",".front-page-ad-padding,\n.front-page-advertisement","#cm-banner","#rt-sidebar-b",".advs",".ad-wrapper,\n.widget_caravanlehti-ad,\nmain section.block-notices","[id^=\"afscontainer\"]","div[class=\"flex flex-wrap md:flex-nowrap lg:flex-nowrap gap-x-4\"][style=\"min-height:500px;\"]",".poppartners","div[data-recommendation-type=\"ad\"]","div.min-h-\\[450px\\]",".px-4.py-2.border-b.border-gray-200.bg-white.w-full","div[style=\"min-height:450px;\"]",".wrepper.mx-auto > .row[style=\"margin-bottom:20px\"]","div[class^=\"AdStyles__Wrapper\"],\ndiv[class^=\"OrderMagazinestyles__Container\"]","[data-banner-horseshoe]",".ni_holder",".js-fragment-web-lazy_carousel","._ning_outer","[id|=\"adni_widgets\"]",".compareGoogleCell","#div-leeadsFullpageAd,\n.article-ad-container,\n.commercial-row","div[id^=\"article-ad\"]",".dls-loaded",".bg-elisa-dark,\n.bg-viaplay-dark-gray","div[class^=\"ad\"]",".page-notes > .note--highlight","#annonsspalt,\n#leaderboard,\n.annonspekare",".sponsoredrow",".alp-advert",".thirstylinkimg","[href^=\"https://online.adservicemedia.dk/cgi-bin/click.pl\"]","#ad_global_below_navbar",".Advertisement__Box,\n.Advertisement__Box--with-padding,\n.Advertisement__Top,\n.FrontPageSpots__Ad",".banner-wrapper,\n.banner_middle",".in-list-ad-containers",".detailLeaderboard",".map-ad,\n[class*=\"adBox\"],\ndiv[class^=\"AdBlock_adContainer\"]",".widget_custom_html","div[id|=\"inline-banner-mobi\"]",".elementor-element-228d8bca,\n.elementor-element-24aa8e2,\n.elementor-element-9e2ec43,\n.elementor-widget-container > [href^=\"https://northernmarketing.fi/\"]",".gofollow","#adContainer,\n#ad_topScroller,\n#bigVideoAd_content,\n#eventad,\n#sky2_1,\n#sky2_2,\n.ad_video,\n.itsanad,\n.rwd.colthin > div,\n.sponsor,\n.videoAd,\ndiv[class^=\"ad_Bumper\"],\nsection.artistyle3.rightbox:nth-of-type(1)",".is-advertorial,\ndiv[id|=\"div-gpt-ad\"]",".adsbygoogle + script + br",".content.single-banner,\n.top.panorama.banner,\na[rel=\"lightbox[palvelut]\"]",".td-a-rec-id-content_inline,\n.ylapala",".bg-advertorial,\n.dre-item--feature-advertorial","#sp-alabanneri,\n.autoboksi.moduletable",".jattiboksi.moduletable",".banneritem","[data-test-id=\"ad\"]","#banner-top",".any-commercial","#googlejs,\ndiv[class*=\"sub-container\"]","[id|=\"hv-wrapper-top\"],\na[href^=\"/ohjaus.php\"],\ndiv[class=\"hv-wrapper-left-item\"],\ndiv[class=\"hv-wrapper-right-item\"]",".outsider-ads",".header-container__ad-container,\n.page-index__adholder,\ntr.rahalaitos__desktop.rahalaitos",".default-banner-size",".ab-test-metered-softwall,\n.aldente-wrapper,\n.for-no-subscription.html-is-seuraa-myynti-bf.html-is-seuraa-myynti,\n.hs-advertorial,\n.hs-ticker-sales,\n.ticker--promo-20,\n[id^=\"aldente-mobi\"],\na.block[href*=\"/mainos\"],\narticle[class*=\"bg-native-ad\"],\ndiv[class*=\"-ad-block\"],\ndiv[class*=\"ad-container\"]",".grid--dfp-slots,\n.sidebar-block a[href^=\"https://seura.fi/mainos/\"]",".pane-sbase-cts-native-native-front","#paraati-ad-grid,\n.-ad1.-ad.sidebar__column-item,\n.right-now-widget__item--commercial","div[data-lazy-ad-unit-id]",".alennuskoodi-column-embed,\n.article-list a[href] > .article-sponsored,\n.card.eo-embed-container,\n.center.category-list-embed,\n.commercial-list-item,\n.etua-widget-container,\n.etuovi-react-embed,\n.front-sponsored-ad,\n.leiki-container-markkinapaikka2.leiki-container,\n.parade-ad-container,\n.recommendation-carousel-svod.recommendation-carousel,\n.slider-content,\n.telkku-ads,\n[class|=\"almad-mobile-parade\"],\ndiv.footer-wrapper__item.is-visible.LazyLoad,\ndiv[class=\"iframe-container\"]","div[class=\"footer-ylempi\"]","[class^=\"mainospaikka\"]",".button-mainos,\n.footer-1.footer.footer-widgets",".structItem--thread[data-author=\"Mainos\"]","#text-7,\naside.jimmx","a.block[href^=\"https://www.admanager.fi/\"],\ndiv.sadblob-loading","section.sbs-articleitems[data-module_position_id=\"814\"]",".c-box-space:not(.c-box)","#ipsLayout_sidebar .ipsBox:not([data-blocktitle=\"Member Subscriptions\"]),\n.ipsSpacer_both,\n[data-role=\"sidebarAd\"] + br","[href=\"https://www.nettikasinovertailu.info/\"]",".collab,\n.collaboration,\n.emp-ad","[src^=\"https://kaasujalka.fi/assets/banners\"]",".ad-mob_description,\n.placeholder",".wp-block-otavamedia-google-ad-slot","#native-list-wrapper,\n#native_text_wrapper,\n.native.feed_box_container","#puff-container,\ndiv[class=\"lyta-lazy-load\"]","#outstream-container","#sidebar .simple-image > [href]:not([href^=\"https://kamera-lehti.fi\"]),\n#sidebar .widget[id|=\"custom_html\"]",".kaupallinen-general,\n.ksnote","a[href=\"https://www.kielletytkirjat.com/\"],\na[href^=\"https://revoltnoir.com\"],\ndiv[id^=\"ads\"]",".elementor-element-2770b68,\n.elementor-element-3e26be8,\n.elementor-element-44ffbd5,\n.elementor-element-54b7f6f,\n.elementor-element-abfd7ba",".breaking-news-container,\na[href=\"https://punamustamedia.portal.worldoftulo.com/v2/shop/dtabkaiku\"]","aside > div[class] > a[href*=\"/kumppanisisallot/\"]",".blogi__nosto,\n.kl-sima--blocks > [href^=\"https://www.kauppalehti.fi/kumppanisisallot/\"]","#search-top-wide-ad,\n#specific-bottom-rectangle-ad,\n#specific-bottom-wide-ad,\n#specific-openinghours-rectangle-ad,\n#specific-top-wide-ad",".kiint-adlabel,\n.kiint-widget",".bannerlink","app-ad",".banner","#traktorpool-ad",".promo",".article-continues,\n.card--is-sponsored","#nmbc,\n.artikkelim-jatkuu,\n.headerau,\n.ktbanner,\n.thirstylink","#kaikki-tarjoukset,\n.sbbyks",".campaign-teaser-show,\n.gtm-banner,\n.wg-banner","#middle,\ndiv[class*=\"banner\"]",".fusion-carousel",".g-1","#content1-container",".tilaa-tasta,\n.ylabanner1",".box-banner a[href^=\"/redirect/\"],\n.fullwidth-imagebanner,\n.hasordercontent.orange-bg,\n.mainbanner",".adremark,\n.popup-overlay",".header-widget [href^=\"https://aslinkhub.com/\"]","div[class^=\"FeedList__AdWrapper-\"]",".middle-ad-container",".ennensisaltoa,\n.lmbanner",".type-banner",".article-blocks-2022-divider:not(.article-block--2022 + .article-blocks-2022-divider),\n.asuntorauma-promo,\n.page-section--commercial,\n.palvelupankki-banner,\naside[class=\"sidebar\"] > [class^=\"advertisement ad advertisement\"] + [class^=\"advertisement ad advertisement\"] + section[class^=\"article-list\"]:last-of-type,\ndiv[class^=\"advertisement\"]","#kokosisaltoid","div#sponsor","div[class*=\"ArticleTeaserGroup_nativeAd\"]",".header_banner,\n.textwidget","div[class|=\"ad-section\"]","div.structItem.is-prefix53","a[href=\"https://mailapro.fi/\"],\na[href=\"https://urheilutuet.fi/\"],\na[href=\"https://vesikourut.fi/\"],\namp-layout[amp-access^=\"popups.\"][role=\"button\"]","aside > div[class] > a[href=\"/kumppanisisaltoa\"]","div[class^=\"NativeAdSpotlight__Component\"],\ndiv[class^=\"pageFeed__topAdSlot\"]","div[class*=\"feed__adSlot\"]",".aprofit,\n.section--native-left,\n.teaser--partner,\n.teaser-top-banner--partner,\n[data-set=\"main-ad\"]",".NoAdBlocker_main",".Index_native-ads",".Article_native-ads,\n.in-text-ad-slot-wrapper","a[data-ga-teaser-name=\"PartnerContentTeaser\"],\nbody:not(.is-style-kumppanisisallot) :is(aside, section) a[href^=\"https://www.mikrobitti.fi/kumppanisisallot/\"]",".elementor-widget-container > a[href^=\"https://sortter.fi/\"]","#header_ad33,\n#ostoHint,\n.banner-ad,\n.execphpwidget,\n.header_ad, important,\n.headermob_ad,\n.single-content-all > div[style^=\"float:left\"][style*=\"width:100%\"][style*=\"text-align:center\"][style*=\"margin-bottom:17px\"],\n.singlehinta.header_ad,\n.textwidget > div[style=\"width:300px; height:600px;\"],\n.tops-bar,\nbody.category > div .header_ad,\ndiv[class^=\"article_ad\"]",".block--monsterfi-ads,\n.epiq-landing-row--frontpage-leaderboard-ad","#tori.article-car-list,\n.category-kumppaniartikkeli.moottori_kumppani.smallfeature,\n.container.g-bg.ads.sidebar.item,\n.kumppaniartikkeli-sidebar.smallfeature,\n.narive-ad,\ndiv[class|=\"ad-rotation\"]",".ad-panorama,\na[href*=\"revads\"],\ndiv[class$=\"ad-giant\"]",".avod-web-player-pause,\n.visit-advertiser-link",".component-adincontent.component,\n.component-soniaincontent,\n.leaderboard,\n.sonia-container",".ppas,\ndiv[data-testid=\"endorsement\"]",".add-banner",".promotional_banner_root","#banneriwrapper,\n.mobilead",".mob_panorama",".panorama","div[style^=\"min-height:\"][style$=\";text-align:center\"]","div[style^=\"min-height:\"]",".node__content .block[class$=\"kampanja\"],\n.topbar,\ndiv[id^=\"block-credigo\"]",".building-campaign-element,\n[analytics-impression=\"insurance_link_impression\"],\n[analytics-impression=\"product_broadband_impression\"],\nenergy-promotion-building","[analytics-impression=\"energy-promotion_listing-page_impression\"]",".advertoriaalit",".mainos-top","#sidebar [href=\"https://www.loytotex.fi/tarjoukset\"],\n.CMAC_AdChangerWidget.widget",".online-ad-container,\n.online-teaser--advertorial","[aria-label=\"Linkki mainokseen\"]:not([href^=\"https://kauppa.palloliitto.fi/\"])","div[style=\"min-height:552px;\"]",".preroll-text,\n.text-ad-container",".ad","a[href=\"/category/mainos/\"]",".omamainos-PIR",".ad-assigned.panoraamabanneri",".after-ad,\n.before-ad,\n.jattiboksi,\n.natiivimainos,\n.paraati",".widget_media_image > a[href=\"http://dimex.fi\"]",".proje-widget,\n.uusi-ylabanneri","div[class=\"wpb_wrapper\"]","section.sbs-articleitems[data-module_position_id=\"640\"]",".block-radiovoima-advertisements",".FrontPage_native-ads","div#kauppa_hot,\ndiv[id^=\"banner\"],\nimg#js_ad",".ad-info-bar,\n.front-page-box-ad,\n.lomakone-results-skyscrapers,\ndiv[id|=\"lomakone-resultads\"]","#adslot_bottom,\n#adslot_search,\n#topslot,\n.adslot_right,\n[href=\"https://www.suomi24.fi/lainaa/yhdista-lainat/\"]",".ad-container-wide",".category-mainos,\ndiv[id|=\"retki\"][style]","body.home div[style^=\"margin-left: auto; margin-right: auto; text-align: center;\"] + .wp-block-separator,\ndiv[style^=\"margin-left: auto; margin-right: auto; text-align: center;\"] .is-external-link",".top-banner",".riist-content","a[href*=\"subaction=bannerredirect\"]:not(a[href*=\"-rv-tilaus\"])",".RuutuPlayer__Error-sc-1o2b3la-0",".panoraama_etus","article[data-section=\"kaupallinen yhteistyö\"]",".article-item.column-mainospaikka",".section--full-size-ad-carousel","body.page:not(.home) .g.g-3",".view-2019-ajankohtaiset-tarjoukset,\n.view-banneripaikka-etusivuoikea1","#auto-grid-container-5c470b0150cba",".has-ads,\na[href^=\"http://www.lainanvalittaja.fi/\"],\na[href^=\"https://autonvaraosat24.fi/\"],\na[href^=\"https://www.autodoc.fi/\"],\ndiv[id$=\"paraati\"],\ndiv[id|=\"banner\"]","#layout-banner-right",".banner_wide,\n.site-footer__banners",".ad_class,\n.om-adcoin-ad","div[class=\"site-header__top-container header-top-banner\"]",".ast,\n.editorial-slots,\ndiv[class*=\"Ad__AdWrapper\"],\ndiv[class^=\"HomePage__HeaderAd\"],\ndiv[id^=\"viihdes24_desktop-sidebar\"]",".bannerTop.S24_banner","div[class*=\"FooterAdWrapper\"],\ndiv[class*=\"HeaderAdWrapper\"],\ndiv[class*=\"__AdWrapper\"],\ndiv[class^=\"RightSidePanel__AdContainer\"]",".asp,\ndiv[class^=\"Vaalikone__HeaderAdWrapper\"]",".artikkelimainos,\n.headermainos,\n.natiivilinkit",".ad-banner-lift",".mainos_banner1,\n.widget > a[href^=\"https://www.nettikirjakauppa.com/\"]","body:not(.is-style-kumppanisisallot) a[href^=\"https://www.talouselama.fi/kumppanisisallot/\"]:not(section > a)",".bannerarea",".sidebar-banners","a[href=\"https://sinitaivas.com/kauppa/\"]",".siteHeader-widgetArea,\n.widget [href^=\"https://www.autodoc.fi/\"],\n.widget [href^=\"https://www.topautoosat.fi/\"]",".commercial-bottom.commercial,\n.commercial_wrapper,\n.node-promoted.node-teaser,\n.paragraph--type-ad","[class|=\"adform\"]",".CategoryPriceGuide_price-guide,\n.NativeAdHolder_native-ad-holder,\n.PriceGuide_price-guide,\ndiv.Article_nettix-embed-container","a[href^=\"/tyopaikat/kumppanisisalto-tyopaikat/\"],\naside > div[class] > a[href^=\"https://www.tekniikkatalous.fi/kumppanisisallot\"],\ndiv#skyscraper-height-div > div > aside > div > div > a[href^=\"https://studio.tekniikkatalous.fi/\"],\ndiv#skyscraper-height-div > div > section > div > a[href^=\"/kumppaniblogit/\"],\ndiv[class][width=\"980\"],\nsection > div > a[href^=\"https://www.tekniikkatalous.fi/kumppanisisallot/\"]",".ad-blocks",".advertisement-banner-row","div[class|=\"ProductRecommendationCarousel__CarouselContainer\"]",".bannerit-banneripalkki","div[id^=\"ad-slot-\"]","[class*=\"block-boxes-ad-300x250\"]","#header-standard-container,\n[data-testid^=\"div-gpt-ad-\"]","#front_big_event,\n#front_big_event > span","div[id^=\"Nostemedia_Desktop\"]","[class^=\"mainos\"]:not(:only-child)",".ctaad","[data-mobile-ad-unit-id]","aside > div[class] > a[href^=\"https://www.tivi.fi/kumppanisisallot/\"],\nsection > div[class] > a[href^=\"https://www.tivi.fi/kumppanisisallot/\"]","#banner_panorama_bottom,\n#footer_partner_links,\ndiv#banner_panorama_topmost,\ndiv#panorama_top,\ndiv#panorama_topmost","div[class*=\"adViewPage_maxWidthWrap\"]:not(div[class^=\"adViewPage_adWrap\"])",".appnexus-container",".billboard","[class=\"tsv3-c-common-article__contentad notloaded\"],\n[data-readpeakurl^=\"https://app.readpeak.com/ads/\"],\ndiv[class*=\"tsv3-c-common-smart noad-hideaction\"]",".slideshow","#main > .ads","#right-sidebar,\n.adsanity-single,\n.top-bar",".cat-kaupallinen-yhteistyo","#auto-grid-container-5c40764673d19","[data-test=\"mainTeaserColumn\"][href^=\"https://www.uusisuomi.fi/kumppanisisallot/\"],\naside [data-test=\"tabs\"] [href^=\"https://www.uusisuomi.fi/kumppanisisallot\"],\naside [href^=\"https://track.adform.net/\"],\naside [href^=\"https://www.ilmarinen.fi/\"]",".partner-blog-list,\n.side-list.commercial-blog-studio,\na[class*=\"commercial-blog-card\"]","div#etuoviVVAdPrototype",".widget_block","img[src^=\"https://ads.v2.fi/\"]:not([src$=\"discomainos.png\"], [src$=\"facebookmainos.jpg\"], [src$=\"instamainos.jpg\"], [src$=\"twittermainos.jpg\"], [src$=\"youtubemainos.jpg\"])","#bodyarea td[width=\"100%\"][valign=\"top\"] + td[valign=\"top\"]","div.display-ad",".online-promotion-bar",".AutomaticDfpWidget,\n.DfpWidget",".type-advertorial",".sdaelem.td-block-span12,\n.vausda","#block-isalennuskoodit",".ads_carousel-2.widget",".page-ad__location,\n.vu-adlabel,\n.vu-content-injected-middle,\narticle.rp-lift.featured-post,\nsection[id^=\"front-page-parade\"],\nsection[id^=\"front_page_parade\"]","[id|=\"gpt-slot-billboard\"]",".banner-mainos,\n.mobiiliylabanner,\ndiv[class*=\"artikkeliad\"],\ndiv[class*=\"artikkelimainos\"]",".d-md-block.d-lg-block.d-none,\n.kumppani-artikkelit,\ndiv[class*=\"native-article\"] > div[class=\"ezrichtext-field\"] > p > a[href^=\"https://danskebank.fi/\"],\ndiv[class^=\"banner\"] > a[href=\"https://www.viisasraha.fi/Taloushaltuun\"]",".td-a-rec,\n.td-post-content .code-block,\n[href^=\"https://in.matsmart.fi/t/\"],\n[href^=\"https://track.adtraction.com/\"],\ndiv[id|=\"nm-300x300\"]",".article-sponsored,\na[class=\"article-item articlestream-item unloaded\"][data-sponsored=\"1\"],\nsection[class^=\"sbsads\"] + section[class^=\"sbs-articleitems full-size-list\"][data-module_position_id=\"612\"]",".voima-banneri-etusivulla",".wnd-free-stripe-link",".widget_media_image",".mobile-top-ad",".adBanner",".advertisement-slot,\n.commercial",".bfastmag-a-d-v,\na[href=\"https://ostalohjalta.fi\"],\na[href=\"https://ostavihdista.fi\"]",".ad[class*=\"panorama\"],\n.ad[class*=\"paraati\"],\n.ad[class*=\"ylaboksi\"],\n.tarranurkka,\na[href^=\"/artikkeli-kaupallinen-\"]",".b-area-ad-sidebar,\n.b-otavamedia-ads,\n.gb-otavamedia-ad,\n.s-area-ad-header,\n.wrap-top-ad,\ndiv[class$=\"kaupallinen-yhteistyo\"]","#fel-ad-banner","a[href=\"https://www.jurinet.fi\"]","[data-id=\"adsense\"]",".ad2",".jp_adsense_ad_container",".ad-article",".tdm-pricing-wrap,\n.tdm_block_pricing,\n.wpforo-ad,\na[href^=\"https://affmore.com/\"],\na[href^=\"https://record.njordaffiliates.com/\"]","#hise-items-container","div[id^=\"open_\"]","kc-ad","#text-81,\n#text-82",".konsolifin-vaakamainos","#partners-container-big,\n.kotikokki_ensighten_ad","#ticker",".ads-desktop,\n.ads-mobile","div.centered.motot-well-inverse.well[style^=\"padding-\"]","#ads-sidebar-top,\n#featured > figure[class] > a[href],\n#left-float > figure[class].wp-block-image > a[href][target][rel] > img[class][src],\n.ad.content-center,\n.content-center.header-nav-ad,\n.premium_container,\n.related-posts + figure[class].wp-block-image > a[href][target][rel] > img[class][src],\n.sidebar-element > .wp-block-image,\n.social-post + div + figure[class].wp-block-image > a[href][target][rel] > img[class][src],\n.wp-block-image > figure[class] > a[href],\nsection.post-single > figure[class].wp-block-image > a[href][target][rel] > img[class][src]",".tdc-element-style.td-pb-row.wpb_row.tdi_4.vc_row",".cb-banneri-uusi","[href=\"http://www.vertaa.fi/lentoliput/\"]",".all-adds","#PowerRectangle,\n#PowerSkyscraper,\n[href^=\"https://tc.tradetracker%2Enet/\"],\na[rel^=\"sponsored\"]","footer > .container.tdt-ad-wrap","#p0,\ndiv#main-content > div:first-of-type[style=\"overflow:visible\"],\nul#picture_legend + div[style=\"overflow:visible\"]","#fb-root + div > div[style=\"background-color: #fff; margin: 0 auto; padding: 20px; display: table; min-width: 300px; max-width: 100%; font-family: 'Open Sans', sans-serif; font-size: 14px;\"],\n.ad300x300","#div-ff2-top","a[href*=\"mst-yhtiot\"]","#custom_html-63,\n#text-32,\n[href=\"https://pt-media.org/pikakasinot/\"],\n[href^=\"https://kasinopartio.com/\"]","#mw-data-after-content > div,\na#top ~ #siteNotice.mw-body-content"];

const hostnamesMap = new Map([["*",0],["alandstidningen.ax",1],["nyan.ax",2],["sjofart.ax",3],["adressit.com",4],["keskustelu.afterdawn.com",5],["aijaa.com",6],["aland.com",7],["alypaa.com",[8,9]],["pelikone.fi",[9,267,268]],["ampparit.com",[10,11,12]],["golfpiste.com",[11,29]],["muropaketti.com",[11,61]],["nettiauto.com",[11,63]],["nettikaravaani.com",11],["nettikone.com",11],["nettimarkkina.com",11],["nettimokki.com",11],["nettimoto.com",11],["nettivaraosa.com",11],["nettivene.com",11],["nettivuokraus.com",11],["alibi.fi",[11,101,102]],["anna.fi",[11,105]],["eralehti.fi",11],["hymy.fi",[11,102,175]],["kaksplus.fi",[11,87,105,192,193]],["kipparilehti.fi",11],["kotiliesi.fi",[11,193,211]],["koululainen.fi",11],["rakennusmaailma.fi",[11,241,278]],["seura.fi",11],["suomenkuvalehti.fi",[11,193,299]],["tekniikanmaailma.fi",[11,239,241,278,315]],["venelehti.fi",[11,352]],["luukku.com",[12,58]],["iijokiseutu.fi",[12,177]],["kaleva.fi",[12,177,195,196]],["kirkkojakaupunki.fi",12],["koillissanomat.fi",[12,177]],["kuntalehti.fi",12],["lapinkansa.fi",[12,177,196,218]],["mtvuutiset.fi",[12,248,249]],["pohjoisenpolut.fi",[12,177]],["pyhajokiseutu.fi",[12,177]],["raahenseutu.fi",[12,177]],["rantalakeus.fi",[12,177]],["seiska.fi",[12,290]],["siikajokilaakso.fi",[12,177]],["styleroom.fi",12],["keskustelu.suomi24.fi",[12,303]],["viinilehti.fi",12],["arcticinsider.com",13],["arvokisat.com",[14,15]],["herkkusuut.com",[14,15]],["huuhkajat.com",14],["laliiga.com",[14,15,48]],["leijonat.com",[14,15,48,53,54]],["nainen.com",[14,15,62]],["nhlsuomi.com",[14,15]],["suomif1.com",[14,15,48,81,82]],["suomifutis.com",[14,15,81,82]],["suomikiekko.com",[14,15,53,81,82]],["suomikoris.com",[14,15,81]],["suomiurheilu.com",[14,15,54,81]],["susijengi.com",[14,15]],["tinderinparhaat.com",[14,84]],["valioliiga.com",[14,15,82]],["viikonloppu.com",[14,15,47,89]],["metropoli.net",[14,382]],["sketsi.net",[14,15,390]],["eurheilu.org",[14,15]],["askelterveyteen.com",16],["myanimals.com",16],["aitiydenihme.fi",16],["mielenihmeet.fi",16],["autotalli.com",17],["brbikers.com",18],["elmotv.com",19],["etuovi.com",20],["mikrobitti.fi",[20,109,242]],["rantapallo.fi",[20,280]],["talouselama.fi",[20,109,308]],["facebook.com",21],["feissarimokat.com",22],["fillaritori.com",23],["findance.com",24],["foorumimme.com",25],["juttelu.com",25],["munfoorumi.com",25],["foorumi.eu",25],["keskustelu.info",25],["munpalsta.net",25],["futisfani.com",[26,27,28]],["kiekkofani.com",[27,28,39,40]],["penkkiurheilu.com",[27,28,40]],["uutisankka.com",[27,28,87,88]],["kiinteistoposti.fi",[27,205]],["projektiuutiset.fi",[27,274]],["halloota.com",30],["hardelli.com",31],["huoltovalikko.com",32],["ilmastointilaitteet.com",33],["jaakiekonmmkisat.com",34],["jalkapallonmmkisat.com",34],["ruuhkavuodet.fi",34],["jatkoaika.com",35],["kalamies.com",[36,37]],["edgeski.fi",[36,133,134]],["foregolf.fi",[36,134]],["rodeosnow.fi",[36,134]],["kalastus.com",38],["kodinkoneopas.com",41],["koeajolle.com",[42,43]],["inssinosingot.fi",[42,182]],["koneporssi.com",44],["konekuriiri.fi",44],["kukasoitti.com",45],["kuvaton.com",[46,47]],["kuvake.net",[46,381]],["leffatykki.com",[49,50,51,52]],["pelaajat.com",[49,74]],["animelehti.fi",[49,104]],["como.fi",[49,50,122,123,124,125,126,127]],["episodi.fi",[49,50,104,123,124,125,139]],["fum.fi",[49,91,123,124]],["inferno.fi",[49,50,104,123,124]],["pelaaja.fi",[49,50,123,126,266]],["rumba.fi",[49,50,104,123,124,125,127]],["soundi.fi",[49,104,123,124,125,127]],["tilt.fi",[49,50,91,104,124,125,127,328]],["lumipallo.fi",52],["listafriikki.com",55],["tanssiin.fi",[55,144,311]],["outlook.live.com",56],["lottoarvonta.com",57],["maastohiihto.com",[59,60]],["jaatama.fi",59],["retkilehti.fi",[59,283,284]],["riistalehti.fi",[59,284,286]],["m.nettiauto.com",64],["m.nettikaravaani.com",64],["m.nettikone.com",64],["m.nettimarkkina.com",[64,66]],["m.nettimokki.com",[64,66]],["m.nettimoto.com",64],["m.nettivaraosa.com",64],["m.nettivene.com",64],["m.nettivuokraus.com",64],["www.nettiauto.com",65],["www.nettikaravaani.com",65],["www.nettikone.com",65],["www.nettimarkkina.com",[65,67]],["www.nettimokki.com",[65,68]],["www.nettimoto.com",[65,69]],["www.nettivaraosa.com",65],["www.nettivene.com",65],["www.nettivuokraus.com",65],["nopeustesti.com",70],["pakkotoisto.com",71],["keskustelu.pakkotoisto.com",72],["palkkavertailu.com",73],["pienimatkaopas.com",75],["rahakirstu.com",76],["sammysatv.com",[77,78]],["karjalainen.fi",[77,201]],["ap-cdn.sanomagames.com",79],["sportti.com",80],["terveydenasialla.com",83],["tvmatsit.com",[85,86]],["ehandel.fi",[85,136]],["hardware.fi",[87,159]],["metsalehti.fi",[87,238]],["viisitahtea.com",90],["vuokraovi.com",[91,92]],["finnkino.fi",[91,150]],["aamulehti.fi",[93,94]],["hs.fi",[93,94,174]],["is.fi",[93,185]],["jamsanseutu.fi",[93,94]],["janakkalansanomat.fi",[93,94]],["kankaanpaanseutu.fi",[93,94]],["kmvlehti.fi",[93,94]],["merikarvialehti.fi",[93,94]],["nokianuutiset.fi",[93,94]],["rannikkoseutu.fi",[93,94]],["satakunnankansa.fi",[93,94]],["suurkeuruu.fi",[93,94]],["sydansatakunta.fi",[93,94]],["tyrvaansanomat.fi",[93,94]],["valkeakoskensanomat.fi",[93,94]],["aamuposti.fi",95],["esaimaa.fi",[95,140]],["ess.fi",[95,141]],["forssanlehti.fi",95],["hameensanomat.fi",95],["hankasalmensanomat.fi",95],["heinavedenlehti.fi",95],["helsinginuutiset.fi",95],["iisalmensanomat.fi",95],["ita-savo.fi",[95,140]],["itahame.fi",95],["joroistenlehti.fi",95],["joutsenolehti.fi",95],["juvanlehti.fi",95],["kaakonkulma.fi",95],["kangasniemenlehti.fi",95],["karkkilantienoo.fi",95],["keski-hame.fi",95],["keski-uusimaa.fi",95],["keskilaakso.fi",95],["koillis-savo.fi",95],["kouvolansanomat.fi",[95,140]],["ksml.fi",95],["kymensanomat.fi",[95,140,141]],["lansi-savo.fi",[95,140]],["lansi-uusimaa.fi",95],["lansisaimaa.fi",95],["lansivayla.fi",95],["lappeenrannanuutiset.fi",95],["laukaa-konnevesi.fi",95],["lopenlehti.fi",95],["loviisansanomat.fi",95],["luoteis-uusimaa.fi",95],["luumaenlehti.fi",95],["mantsalanuutiset.fi",95],["mattijaliisa.fi",95],["miilu.fi",95],["mikkelinkaupunkilehti.fi",95],["nurmijarvenuutiset.fi",95],["pieksamaenlehti.fi",95],["pielavesi-keitele.fi",95],["pitajalainen.fi",95],["pitajanuutiset.fi",95],["pyhtaanlehti.fi",95],["sampolehti.fi",95],["savonsanomat.fi",95],["seinajoensanomat.fi",95],["seutuneloset.fi",95],["sipoonsanomat.fi",95],["sisa-savolehti.fi",95],["sisasuomenlehti.fi",95],["sjl.fi",95],["soisalonseutu.fi",95],["tamperelainen.fi",95],["tollotin.fi",95],["turkulainen.fi",95],["uusilahti.fi",95],["uusimaa.fi",95],["uutis-jousi.fi",95],["uutisvuoksi.fi",[95,140]],["vantaansanomat.fi",[95,346]],["viikkosavo.fi",95],["viispiikkinen.fi",95],["viitasaarenseutu.fi",95],["warkaudenlehti.fi",95],["puruvesi.net",95],["aamuset.fi",96],["akaanseutu.fi",[97,98]],["lvs.fi",[97,98,228]],["orivedensanomat.fi",[97,228,263]],["pirkkalainen.fi",[97,228,270]],["shl.fi",[97,98,228]],["ylojarvenuutiset.fi",[98,228]],["aksa.fi",99],["alfatvuutiset.fi",100],["alueviesti.fi",103],["apteekkari.fi",106],["apu.fi",107],["eeva.fi",107],["lily.fi",[107,223]],["meillakotona.fi",[107,223,236,237]],["terve.fi",[107,223,237,319]],["arvopaperi.fi",[108,109]],["kauppalehti.fi",[109,202]],["mediuutiset.fi",[109,202,235]],["tekniikkatalous.fi",[109,316]],["tivi.fi",[109,329]],["uusisuomi.fi",[109,340]],["audiovideo.fi",110],["auto1.fi",[111,112,113]],["ilmainensanakirja.fi",[112,113]],["testeri.fi",[112,113]],["blogit.fi",113],["autobild.fi",114],["avainlehti.fi",115],["avecmedia.fi",116],["bittiraha.fi",117],["bomber.fi",118],["boy.fi",119],["caravan-lehti.fi",120],["cdon.fi",121],["dailyfinland.fi",128],["demokraatti.fi",129],["digi-kuva.fi",130],["download.fi",131],["duunitori.fi",132],["edukas.fi",135],["enontekionsanomat.fi",[137,138]],["haapavesi-lehti.fi",137],["inarilainen.fi",[137,138]],["kainuunsanomat.fi",[137,138]],["kalajokilaakso.fi",137],["kalajokiseutu.fi",137],["keskipohjanmaa.fi",137],["kittilalehti.fi",[137,138]],["kotikulmilta.fi",137],["kotilappi.fi",[137,138]],["kuhmolainen.fi",[137,138]],["kuusamonseutu.fi",137],["lestijoki.fi",137],["luoteis-lappi.fi",[137,138]],["meantornionlaakso.fi",137],["nivala-lehti.fi",137],["perhonjokilaakso.fi",137],["pietarsaarensanomat.fi",137],["saariselansanomat.fi",[137,138]],["selanne-lehti.fi",137],["sompio.fi",[137,138]],["sotkamolehti.fi",[137,138]],["ylakainuu.fi",[137,138]],["etn.fi",142],["f1-forum.fi",143],["feedi.fi",144],["fiksukuluttaja.fi",[145,146]],["lehtikeidas.fi",[146,222]],["fillarifoorumi.fi",147],["finder.fi",148],["findit.fi",149],["flashscore.fi",151],["fonecta.fi",152],["fontanka.fi",153],["foreca.fi",154],["fuengirola.fi",[155,156]],["kaaoszine.fi",[156,190]],["paakallo.fi",[156,208]],["puheenaiheet.fi",[156,275]],["mesta.net",156],["gamereactor.fi",157],["gogolf.fi",158],["hattulaan.fi",160],["reska.fi",160],["hauskimmat.fi",161],["hbl.fi",162],["ostnyland.fi",162],["vastranyland.fi",[162,349]],["heili.fi",[163,164]],["outokummunseutu.fi",164],["pielisjokiseutu.fi",164],["pogostansanomat.fi",164],["prsanomat.fi",164],["ylakarjala.fi",164],["helsinkitimes.fi",165],["hevosurheilu.fi",166],["hidastaelamaa.fi",167],["hifimaailma.fi",168],["high.fi",169],["hinta.fi",170],["hintaopas.fi",171],["hintaseuranta.fi",172],["historianet.fi",173],["tieku.fi",173],["hyvaterveys.fi",176],["ilkkapohjalainen.fi",178],["iltalehti.fi",179],["iltapulu.fi",180],["impe.fi",181],["bbs.io-tech.fi",183],["www.io-tech.fi",184],["iskelma.fi",186],["m.jaatama.fi",187],["juoksufoorumi.fi",188],["jvg.fi",189],["kaasujalka.fi",191],["keskustelu.kaksplus.fi",194],["kamera-lehti.fi",197],["kangasalansanomat.fi",198],["kansalainen.fi",199],["kansantahto.fi",200],["keskustelu.kauppalehti.fi",203],["kauppojen-aukioloajat.fi",204],["kilipailut.fi",206],["kinuskikissa.fi",207],["klangi.fi",208],["suomenautolehti.fi",[208,298]],["koneviesti.fi",[209,210]],["maaseuduntulevaisuus.fi",[210,230]],["kotimaatutuksi.fi",[212,213]],["lomamatkalle.fi",[213,225]],["kotimikro.fi",214],["kuljetusnet.fi",215],["kulutusluottovertailu.fi",216],["kuntatekniikka.fi",217],["lapuansanomat.fi",219],["lauttakyla.fi",220],["lbaanijakuva.fi",221],["livetaajuus.fi",224],["lounaspori.fi",226],["ls24.fi",227],["maalampofoorumi.fi",229],["maaseutumedia.fi",231],["markkinointiuutiset.fi",232],["matkapuhelinfoorumi.fi",233],["mediaviikko.fi",234],["metsastysjakalastus.fi",[239,240,241]],["misssuomi.fi",243],["mobiili.fi",244],["monster.fi",245],["moottori.fi",246],["motouutiset.fi",247],["mtv.fi",248],["app.mtvuutiset.fi",250],["mutsimedia.fi",251],["myheritage.fi",252],["napsu.fi",253],["navigatormagazine.fi",[254,255]],["promaintlehti.fi",255],["netti-tv.fi",[256,257]],["synonyymit.fi",257],["nettitrendi.fi",258],["asunnot.oikotie.fi",[259,260]],["toimitilat.oikotie.fi",260],["olutposti.fi",261],["omalahio.fi",262],["osterbottenstidning.fi",264],["sydin.fi",264],["vasabladet.fi",[264,347]],["palloliitto.fi",265],["suomela.fi",[268,296]],["teknavi.fi",[268,314]],["pelit.fi",269],["pkank.fi",271],["pointti.fi",272],["pottupellossa.fi",273],["radionova.fi",276],["radiovoima.fi",277],["rakentaja.fi",279],["ratkojat.fi",281],["redfoxsanakirja.fi",282],["riimihaku.fi",285],["ristinvoitto.fi",287],["ruutu.fi",288],["satakunnanviikko.fi",289],["seurakuntalainen.fi",291],["seutumajakka.fi",292],["sijoittaja.fi",293],["sijoitustieto.fi",294],["somerolehti.fi",295],["suomen118.fi",297],["suomenmaa.fi",300],["suomi24.fi",301],["chat.suomi24.fi",302],["www.suomi24.fi",304],["suomimobiili.fi",305],["superlehti.fi",306],["svl.fi",307],["taloustaito.fi",309],["talviopas.fi",310],["turisti-info.fi",310],["teatteritanssi.fi",312],["tehylehti.fi",313],["tennis.fi",317],["tervareitti.fi",318],["terveyskauneus.fi",320],["ticketmaster.fi",321],["tiedonantaja.fi",322],["tiendeo.fi",323],["tiketti.fi",324],["tilannehuone.fi",[325,326]],["irc-galleria.net",[325,376]],["tilisanomat.fi",327],["tori.fi",330],["autot.tori.fi",331],["m.tori.fi",332],["traktorpool.fi",333],["ts.fi",334],["tulikulma.fi",335],["turuntienoo.fi",336],["ulvilanseutu.fi",337],["urjalansanomat.fi",338],["uudenkaupunginsanomat.fi",339],["puheenvuoro.uusisuomi.fi",341],["vapaavuoro.uusisuomi.fi",[341,342]],["uusiteknologia.fi",343],["v2.fi",344],["vagarena.fi",345],["sevendays.vasabladet.fi",348],["vau.fi",350],["vauva.fi",351],["verkkouutiset.fi",353],["vertaa.fi",354],["viikkopk.fi",355],["viisasraha.fi",356],["viranomaisuutiset.fi",357],["voice.fi",358],["voima.fi",359],["webnode.fi",360],["wizhdsports.fi",361],["x2.fi",362],["xracing.fi",363],["yhteishyva.fi",364],["ykkoslohja.fi",365],["ylasatakunta.fi",366],["yrittajat.fi",367],["fel.gg",368],["murha.info",369],["piipaa.info",370],["2pos.life",371],["aasiakas.net",372],["deitti.net",373],["gekkonen.net",374],["huuto.net",375],["kilokalori.net",377],["kokemakelainen.net",378],["konsolifin.net",379],["kotikokki.net",380],["motot.net",383],["mvlehti.net",384],["pallomeri.net",385],["esports.pallomeri.net",386],["polttoaine.net",387],["puskaradio.net",388],["riemurasia.net",389],["vapaasana.swedishforum.net",391],["vuodatus.net",392],["futisforum2.org",393],["moottoripyora.org",394],["pt-media.org",395],["taisto.org",396]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["nettimokki.com",[0]]]);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
