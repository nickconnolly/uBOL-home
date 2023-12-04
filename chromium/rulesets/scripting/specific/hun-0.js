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

// ruleset: hun-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = ["[src*=\"/banner/\"]","[id*=\"float\"]","div:has(> .ai-attributes + script + ins)","#article_end_popup,\n.banner.boxed","#a1,\n#a2","#onetrust-banner-sdk","#eu-cookie-law,\n#facebook-likebox-8,\n.wpcnt","[class*=\"advert\"]","#facebook-sharebar,\n#webaruhaz-ajanlo,\n.-contentTop,\n.a2blckLayer,\n.ctsGadx,\n.hashtags,\n.wrap,\nTD[id*=\"l_sponsor\"],\n[class*=\"adv_\"]","[class*=\"adtext\"]",".fb-exit-popup-container","#fanback","#permission-bar,\n.fu-container,\n.sample,\n[href*=\"hirdetes\"],\na[href*=\"adf.ly\"],\na[style=\"text-decoration:none;\"],\ntable[bgcolor=\"darkgray\"]",".content-list.content-body > .recommendation-holder,\n.content-text > .recommendation-holder,\n.left-column.col-md-8.col-sm-12 > .recommendation-holder,\n.right-column.text-center.hidden-sm.hidden-xs.col-md-4 > .recommendation-holder:nth-of-type(1),\n.right-column.text-center.hidden-sm.hidden-xs.col-md-4 > .recommendation-holder:nth-of-type(2),\n.top-column.col-xs-12 > .recommendation-holder,\ni > .recommendation-holder:nth-of-type(1),\ni > .recommendation-holder:nth-of-type(2)",".tqWLsnEEqeEw-bg,\n[style=\"z-index: 999999; background: rgba(0, 0, 0, 0.85098); display: block;\"]","[style=\"background: rgb(255, 255, 255); max-width: 720px; z-index: 9999999; opacity: 1; visibility: visible;\"]","[data-zadtype=\"billboard\"],\ndiv.mobileArticleAds,\ndiv.right-rail:has(div.ad-wrapper),\nfigure:has(a[href*=\"ignshop.hu\"])","DIV[id*=\"banner\"]","[class*=\"banner\"]","[app=\"tibrr-cookie-consent\"],\n[class^=\"k\"][class*=\"-container\"][class*=\"-2\"][class$=\"-hide\"]",".bpkad","A[href^=\"http://goo.gl\"]","[class*=\"reklam\"]","[id*=\"reklam\"]",".code-block:has(script + ins)","[class*=\"pea_cook\"]","[style=\"width:300px;height:250px;\"],\nscript[data-cfasync=\"false\"]","[class*=\"advertisement\"]","[class^=\"ad-\"]","#text-3","#kpopup","#sliding-popup","[id^=\"block-views-block-banners-\"]","[id*=\"banner\"]","[id*=\"etarget\"]","[class^=\"ads\"]","[id^=\"adchange\"]","#alsobox","#cookieinfo","DIV[id*=\"col_2\"]","[id*=\"advertisment\"]","#sutik",".bannergroup","#_iph_cp_popup,\n#cookie-bar,\n#cookie-notice,\n#cookie-window,\n#cookiebar,\n#hirdetes,\n#hirdetesek,\n.cc-banner,\n.cc-banner-wrapper,\n.cc-window,\n.cc_banner,\n.cc_banner-wrapper,\n.cc_window,\n.hird,\n.hirdetesek,\n.leet_product_banner_container,\n[class*=\"overlayBg\"],\nins[id^=\"aswift_\"]",".hirdetes","#cookie-law,\n.banner_middle",".ads_show_ad_title",".banner-wrapper",".banner-container","#overlay_readers_letter,\n#stickyHomePageRecommender,\n#webPushPopup,\n.a-hirstartRecommender,\n.m-donationBottomLine,\n.spklw-post-attr[data-type=\"ad\"],\n.widget-mini-article","[id*=\"-banner-\"],\narticle:has(a[href*=\"hirdetes\"]),\ndiv.item:has(a[href*=\"hirdetes\"])","#text-5,\n#text-6","#galsoreklam,\n#oldalreklam,\n[href=\"https://777blog.hu/reklamblokkolo-kikapcsolasa/\"],\ndiv#rechtangle.widget:nth-of-type(5)",".AdW","#cookieconsent","#cookieBox,\n#cookieBox_bg,\n.whiteBox:has(.goAdverticum)","#cookies-alert,\n[class^=\"zone_\"]","#g0,\n.az-layer,\n.big_badge,\n.floating-help-wrapper","[class*=\"ads\"]","#ajanlo",".flyout,\ndiv#mymodal:has(#form-popup)",".ez-egy-dc-doboz:has(> .double_click_doboz),\n[style^=\"min-height: 128px; background: url(\\\"https://static.agroinform.hu/static/site/img/hirdetes_up.png\\\") no-repeat center bottom -1px;\"]","#alapjarat_cikk_fekvo_1,\ndiv.header + .clearfix + .clearfix","#block-block-16,\n#block-block-22,\n#block-views-ajanlo-block,\n#sticky_footer",".mailingActionC",".ui-widget-overlay","[aria-describedby=\"cookies-dialog\"]","div.cikk_zona,\ndiv.rightside > iframe",".sidebar1 > div:first-child,\n[id^=\"hird_\"]",".mask,\n.showLink.reveal","[class*=\" adH\"]","#cookie-disclaimer,\n.brandbox",".tamogatoi,\n.wp-caption","#facebookPopUp,\n#facebookPopUpBackground,\n#szechenyi-container,\n.plus-wrapper","#_cikk_jobbhasab_2,\n#_cikk_jobbhasab_3,\n#_fooldali_header_alatti_banner,\n#_fooldali_header_banner,\n#_fooldali_jobbhasab_2,\n#_fooldali_jobbhasab_3,\n#custom_html-18,\n#custom_html-19,\n#custom_html-2,\n#custom_html-20,\n#custom_html-21,\n#custom_html-23,\n#custom_html-26,\n#custom_html-7,\n#custom_html-8","#custom_html-10","[class*=\"Advert\"]","[class*=\"etarget\"],\n[class*=\"szamlatabla\"]","[class*=\"hirdetes\"]","#CybotCookiebotDialog",".ads","#adds","p + center:has(iframe[data-src*=\"facebook\"]),\nscript + ins + h5",".cookie-notice-container","#article-2,\n#block-block-30,\n#block-block-60,\n.region-content-1-1 > div:last-child,\n.region-content-1-1 > div:nth-child(-1n+3),\n.region-content-1-3 > div:nth-child(-1n+2),\n.region-content-1-3 > div:nth-last-child(-1n+5),\n.view-banner-blokkok",".addd,\n.bannpos,\n[aria-label=\"cookieconsent\"],\ndiv:has(> .fb-like)","#cookie","#popupajanlo","#total,\n.category-section.ad,\n.minisite","app-article-subscription-box,\napp-newsletter-modal","main + .ok-prerender","iframe[src=\"https://tunderszepek.baon.hu/tunderszepek-banner\"]",".widget_media_image",".pea_cook_wrapper","[class*=\"adcikk\"]",".hidden-xs:has(> .lablec_alatt),\n.hidden-xs:has(> .weboldal_felett),\n.tapeta.fixed,\n[data-ai],\nblockquote","[id*=\"sponsor\"]","#karrier,\n.modal,\n.modal-dialog",".modal-backdrop","#footerLogos,\n#pe_confirm,\n#qc-cmp2-ui,\n#underArticleAdvertisement,\n[id*=\"-ad-\"][data-x=\"1\"],\n[id^=\"div-gpt-ad-\"] + [class$=\"widget\"],\n[style=\"width:100%;text-align: center; margin-bottom:15px;\"],\na[href*=\"gemius\"],\nbody > .extraContentSection:nth-of-type(-1n+3)","#articleOfferFlag","#pe_confirm_optin_6,\n#qc-cmp2-container","#ad-cikk1,\n#ad-cikk2,\n#ad-fekvo1,\n#ad-fekvo2,\n#ad-jobb1,\n#ad-jobb2,\ndiv:has(> div[id^=\"div-gpt-ad-\"])","#pe_confirm_optin_1","#taft,\n.living-earth,\n.meropixel-hide,\n.share,\nDIV[class*=\"_ad\"],\nDIV[class*=\"adv\"],\nDIV[class*=\"blh-billboard-ad\"],\nDIV[id*=\"wAdBox\"],\n[class*=\"follow_promo_figure\"],\n[id*=\"cp_popup\"]","[class*=\"adbox\"]","[id*=\"Banner\"]","DIV[class*=\"etarget\"]","#fbox-background","#lightview1,\n[class*=\"popupBanner\"]","#cookie_policy,\n#lw_bg1,\ndiv[style^=\"height:\"]","#newASZFLayer","#onetrust-consent-sdk,\n.o-banner--hirdetes",".real-estate-wrapper",".cookie__wrapper,\n.subscription-box,\nA[href=\"/jatek\"],\nA[href=\"/nyarimagazin\"],\n[class*=\"__ad\"],\n[class*=\"adContainer\"],\na[target=\"_blank\"][class=\"videa-wrapper\"],\niframe[src*=\"koponyeg.hu\"]",".newsletter-box","#wpgtr_stickyads_textcss_container,\n.extpp-container,\n.otw-sidebar:has(a[href=\"https://bpiautosok.hu/tamogatonk-a-te-ceged-jelenj-meg-nalunk-a-youtube-on-es-a-bpiautosok-hu-n/\"]),\n.widget.widget_text:has(.adsbygoogle),\nbody > center:first-child,\nbody > center:first-child + br,\ncenter:has(> a[href=\"https://bpiautosok.hu/mediaajanlat\"]),\ncenter:has(> a[href=\"https://bpiautosok.hu/mediaajanlat\"]) + br,\ncenter:has(> font),\nfont + center","#onesignal-bell-container,\n#onesignal-slidedown-container","#custom_html-11,\n#custom_html-6,\n#media_image-17,\ndiv[style=\"margin-top:20px;\"]","#upprev_box","div.bpkad","#full-desktop,\n#full-mobile,\nheader + div[style^=\"margin:\"]","#cooker_container,\n.banner_main_page_wrapper","#cadre_alert_cookies,\n#pa-push-notification-subscription,\n#sp-right > .sp-column > .sp-module.hidden-mobile,\n.banneritem","[class^=\"adsense\"]",".advert,\n.occsz-banner",".cookie-box-cnt,\n.infobar-cnt","#cookie-policy-content,\n#web-push-popup,\n.ad-article-comment,\n.ad-article-end,\n.ad-article-inside,\n.ad-article-inside-automatic,\n.ad-article-under-lead,\n.ad-content-top,\n.ad-header-after > *,\n.ad-header-after-article,\n.share-article","[class*=\"-adv\"]","#CookieAcceptLayer,\n#bdism1,\n#cikkajanlo,\n[class*=\"adv-\"]",".art-sidebar1,\n.art-sidebar2","#fadeandscale_background,\n#fadeandscale_wrapper",".enews-article-content .endless-shared-area",".sb-right > div:first-child","#cookie-law-info-bar","#banner_sav","#headerBanner,\n.col-md-4.blog-sidebar:nth-child(even),\n.slidingBanner,\n.tablet-advert,\n.totop,\n.widgetDefault",".billboard","#billboard,\n[class*=\"prbox\"],\n[id^=\"linkbox_article\"]",".region-header.region",".jquery-modal.blocker.current",".cikk-halfpage.t-article-container_sidebar > div:first-child,\n.menu-sponsor_link,\n.rovat-halfpage.t-rovat-container_sidebar > div:first-child,\n.tctk,\n[id*=\"szponzoracio\"],\niframe",".cikk-vegi-ajanlo-reklamok","[id*=\"hirdetes\"]","#interstitial",".adbd-layer","body > section:not(.site-header):not(#toreskar):last-of-type","[class=\"td-a-rec td-a-rec-id-content_top  tdi_62 td_block_template_1\"],\n[class=\"td-a-rec td-a-rec-id-header  tdi_53 td_block_template_1\"]","[id*=\"_ad\"]","[class*=\"ad_\"]","[id*=\"ad_\"]",".detailRightAds,\n.min700height-desktop,\n.rltd_container [id^=\"rltd-ad-\"],\n.row:has(> #onet-ad-top),\n[class*=\"ad-\"],\n[class^=\"ads \"],\n[id^=\"ad-\"],\n[style=\"min-height: 300px;\"],\na[title=\"Hirdetés\"],\ndiv.wrapAds,\ndiv.wrapRectangle:has(#ad-cikk)",".ibb-banner-decor","[id^=\"ad_\"]","div[class*=\"contentBanner\"],\ndiv[style=\"text-align: center; margin-bottom:10px; position: relative;\"]",".sgpb-popup-dialog-main-div-wrapper",".penci-wrap-gprd-law,\n.sgpb-popup-overlay",".rckaexclude",".super","div.cookieLayer,\ndiv.supportModal","IFRAME","#article-recommend-popup,\n.article-page + .b-section,\n.article-page > .b-section,\n.article-reaction-holder + .b-section,\n.cookie-popup,\n.overlay-popup,\n.pull-left .b-section,\n.share.jssocials + .b-section,\n.top-section + .b-section","[class*=\"_adv \"]",".popupunderlay,\n[class*=\"adPlace\"],\n[class^=\"goAdverticum\"]","[class*=\"adzone\"],\ndiv[id*=\"elementor-popup-modal-\"]","#catapult-cookie-bar","#darklayer,\n.views-field-nothing,\n[class*=\"_ad \"],\n[id*=\"_ad-\"]","#femina-shop-ajanlo-slider,\n.cikk-torzs [data-miniapp-id]:has(.femina-shop-ajanlo-slider-hirdetes),\n.cikk-torzs [data-miniapp-id]:has(.lapozgato-ajanlo),\n.doboz_harmados,\n.szelso-jobb > div:has(> a),\n[class*=\"kepeslinkes\"]","DIV[class*=\"reklam\"]",".crp_related,\ndiv[id^=\"forbesad\"],\np + [class*=\"-bekezdes-utan-\"]",".foot-logos.col-md,\n[href=\"https://www.barion.com/hu/vasarlok/arak-vasarloknak/\"],\na[href=\"http://consumer.huawei.com/hu/phones/mate10series/\"]","div:has(> [style*=\"calc\"])","#accept-container","[class*=\"banners\"],\n[href*=\"hirdetesek\"]",".etarget",".facebook-layer-box","#content-container > div > a:not([class*=\"MailListItem-\"]),\n[class*=\"magnum\"]","[class^=\"container-\"][class*=\"adZone\"]",".grey-popup-layer","#background_ad_top","#right > .xabrew300.box",".partners",".spleft,\n.spright","[class$=\"responsive-300px-600px\"],\na[onclick*=\"/muvelet/hozzaferes/kapcsolodas.php?id=\"],\nbody > style,\ndiv:has(> h4 + div[style*=\"calc\"])","#thanks > .hlist.nohead,\n.xabrecontainer,\na[onclick*=\"$.ajax\"],\ndiv#center:has(div > div > p > a[style=\"color: #b42223;\"]),\ndiv[class*=\"xabre-responsive\"]:not([class*=\"-980px-139px\"])",".roadblockcont",".act_hun,\n.adt_hun","[id^=\"ibb-\"][class*=\"banner\"]",".leavingPopupLayer","#partnerek","[id^=\"zone\"]","#adryf,\n.rltdwidget,\n[href^=\"https://www.webminute.hu\"],\n[id*=\"aswift\"],\ndiv.reklam_jobbra,\ndiv[style*=\"text-align\"]:has(> a > img),\ntd.txtcenter:has(> script + ins),\ntd[style=\"width: 10px;\"]:empty","#cookiekezeles","#banner,\nDIV[class*=\"Advert\"]","[class*=\"contentBanner\"]",".accept-cookies","div[id^=\"jqueryFloating\"]","#cookie_bar,\n#infobar","#banner2016kormanyhu,\n[id*=\"banner_1_29_\"]",".catch-click",".banner-widget-container",".mc-modal:has(iframe),\n[class^=\"moove-gdpr-\"],\n[id^=\"um-\"]:has(.fb-page.fb_iframe_widget)",".Ad,\n[id*=\"Ad_\"]",".Clear,\nDIV[id*=\"AdContainer\"]","#top > .p-0.container","#ajanlo_box_ah,\n#lightwindow_overlay","#player,\n#superbox",".szkozepkis","#kapubanner,\n[id*=\"_ads\"],\n[id^=\"cookieconsent\"]",".box_remote,\n.fbcont2,\n.fbfollow,\n.fbshare,\n.h-sideboard_2,\n.kalkulator","[id*=\"hirdet\"]","#cookiewarnbar","#nyeremenyModal,\n[class=\"modal-backdrop fade show\"],\n[id*=\"popup\"],\ndiv.row:has(> div.ads)",".hover_bkgr_fricc:has(.facebookPopupCloseButton),\nDIV[id*=\"Banner\"],\nDIV[id*=\"zone-wallbanner-header\"]","#gyuri1,\n#gyuri2","[class*=\"billboard\"]","#cookieAlertBox,\n.banner_container,\n.banner_widget,\n.frame:has(> span[style^=\"font-size: 11px;\"]),\n.sy-box","[class*=\"-ad-container\"]","P[class*=\"banner\"]","[id^=\"advert\"]","DIV[class*=\"banner\"]","DIV[class=\"module noheading\"],\nEMBED","#tetszett","[data-adblockonly]","#cucc,\n#layerbanner","#custom_html-3","#euro-event,\n#league-selector + .row + .row:has(.banner),\n#sponsors,\n.gdpr-cookie-notice","[class*=\"_ad\"]","#lebegodoboz,\n#szupertorony,\n[id*=\"-reklam\"],\n[id*=\"fancybox\"],\n[id^=\"hirdetes_jobb\"] + div,\n[id^=\"hirdetes_jobb_2\"] + div + div,\n[id^=\"szuperbanner_\"]","[id^=\"hirdetes\"]","#webpushSelctorFormId,\n.adcaption,\n.article-menu.panelgap,\n.article-otherelements-container content,\n.articlebox.clear.sidebar-ajanlat,\n.block-ms-box2,\n.cimlap-ajanlat.elem-1180.cimlap-grid-elem,\n.hosting,\n.hvg_push,\n.jobline-palyakezdo-feed,\n.selectWidget,\n.support-stripe,\n[class*=\"adtype-\"],\n[class=\"articleitem clear smallimage imgleft\"],\n[class=\"site-scarab-bottom open\"]","[class*=\"adsense\"]","[id*=\"-ad-\"]",".parallax_bottom,\n.parallax_top","DIV[class*=\"ad_\"]","#announcement,\n#cikktoolbaradomany,\n#cookiealert,\n#sidebar > table,\n.cikkszovegaction,\n.cikkszovegakcio,\n.kommentadomany,\nDIV[id*=\"hirdetes\"],\nbody > div > a[target=\"_blank\"]","[class*=\"hird-\"],\n[class*=\"hird_\"],\na[data-bs-content*=\"(hirdetés)\"]",".banner",".article-cards-inlist-ad,\n.article-text > p,\n.footer-banner-row,\n.iho-adzone,\n.social-icon","[class*=\" ad\"]",".topAdv",".shopline-box,\n.travelo-box",".cikk-vegi-ajanlo-reklamok-container","[class*=\"ad-container\"]","#ad_null_position,\n#also_bannerek,\n#index_shopline","#ot2015,\n#rightcoltd,\n#site_header","#main div[class*=\"banner\"],\n#sidebar > div[class*=\"banner\"],\ndiv.read div[class*=\"banner\"]",".notification-popup","#_ao-cmp-ui,\n#sitemodal:has(.fb-button),\ndiv[data-qa=\"oil-Layer\"]","#bottompopup","#leftPoszter-section,\n#salePoszter,\n.home-section-banner,\n.u-hide\\@mobile.flag-wrapper--fill.flag-wrapper.grid-col-lg-1-4.grid-col-md-1-2.grid-col-1.article-list__item","div[class=\"tl-state-root tve-leads-ribbon tve-trigger-hide tve-tl-anim tve-leads-track-ribbon-1 tl-anim-slide_top tve-leads-triggered\"]","#cookie-law-info-again","#joylike,\n[class*=\"Adverticum\"],\n[class^=\"adIn\"],\n[class^=\"adPlace\"]","#cookie_container","[data*=\"banner\"]","#header","#cookieSpan,\ndiv.bottom_sticky_banner","#cookie-consent-dialog","#above_article_banner,\n#advertisements,\n#below_content_banner,\n#left_banners,\n#right_banners,\n#social,\n#wide_banners,\n.article_banner,\ndiv.subscribe_module,\ndiv[class=\"fb-like fb_iframe_widget\"]",".cookies-message-container","#cookieAcceptanceContainer","[id*=\"advert\"]","#nap_ajanlata,\n.tamogatott,\n.vippr,\nDIV[id*=\"billboard\"],\nDIV[id*=\"linkbox\"],\n[class*=\"banner-\"],\n[class*=\"offer prbox\"],\n[class*=\"pr--\"],\n[class^=\"pr-\"],\n[class^=\"prbox\"],\ndiv.endless-shared-area",".qc-cmp2-container","#spu-103927,\n[class^=\"spu\"]","#vshu-box,\n.integralt_felso_zona,\n.recommendationzone,\n[id*=\"adsense\"]","div[class*=\"banner\"]","div:has(> a + h6)",".kapu,\n.mini_slider_div0","[class*=\"Banner\"]","div.accept-cookies","[name*=\"banner\"]",".adbg",".category > #prodstop1,\n.single-post > #prodstop1","#current_promotions_block,\n#skin-left,\n#skin-right,\n.box-general.clearfix,\n.discount.clearfix.nonLpk,\n.fullwidth.current_promotions_block","#beuszoAjanlo,\n#cikkalatti,\n#floating-recommendation,\n#mc-holder,\n#ovasar,\n#pr-box,\n#right-ecom,\n#top,\n.col-visible-xl.r-side.col-xl-4,\n.email-under-article,\n.frip-inline:has([data-module-name=\"inline-article\"]),\n.hird300,\n.kiskepes,\n.magnum,\n.panorama-wrapper,\n.pr-item,\n.spar,\n.szoveges,\n[data-module-name=\"hirlevel\"],\n[data-module-name=\"ingatlanbazar\"],\n[data-module-name=\"koponyeg\"],\n[data-module-name=\"videa\"],\n[id^=\"szponz-\"],\n[size=\"300x600\"],\ndiv[class$=\"widget\"]","#ac",".newsletter-layer,\ndiv.article-recommendation-zones","#accept-cookie","#page-top","div.lol:has(> a[onclick=\"getValue()\"]),\ndiv.widget:has(> div.textwidget > p > script)",".cikkhirdetes,\n.sticky1hirdet","[class*=\"adserver\"]","[class*=\"-ad\"]","#navi_btm + div,\nimg[src^=\"https://logout.hu/muvelet/hozzaferes/kapcsolodas.php\"]",".nobanner,\n[class^=\"banner_\"],\n[id^=\"banner_\"]","#exposeMask","#page_PopupContainer",".goAds,\n.visible-lg.container,\ndiv[class=\"container-full\"][style=\"background:#fff\"]:has(.topadv)","#eucookielaw,\n.ad-magnum,\n.ad-verticalfull,\n[class*=\"simpleads\"]","#block-block-12,\n#block-block-19,\ndiv.gdprBoxContainer,\ndiv.promo-bar",".modal[role=\"dialog\"],\napp-facebook-popup,\napp-newsletter-popup","[class*=\"articleBanner\"]","#cboxOverlay,\n#colorbox","#cookie-msg","#floatingBox,\n.ui-floating-message,\n.wsp-wrap,\n[class*=\"tBanner\"]",".banner_row,\n.proposer,\n.read_vs,\n.rightbanner",".cookie-bar,\n.mrc-bnr-plchldr,\n.popup-wrap,\n[class^=\"banner\"]",".sticky",".article-textlinkbox","#ad-image-big,\n#fadeandscale,\n#portfolioEzekIsErdekelhetnek,\n#recipeAndRelateds > h2.noprint,\n#sidebar_ads_box_2,\n.billboard-cikk,\n.hir-fekvo,\nDIV[class=\"billboard fr\"],\nDIV[class=\"fej-elso-sor cf\"],\nDIV[id*=\"-ad-\"],\n[class*=\"ads_box\"]",".allow-cookie-stripe","#app-advice,\n#app-commission,\n.x-marketing",".cim-reklam,\n.widget_text.widget.widget_custom_html",".om-holder","[class*=\"box ajanlo\"],\n[id*=\"ctnet\"]","#page-forum #center > div:has(h4 + [onclick*=\"https://mobilarena.hu/muvelet/hozzaferes/kapcsolodas.php\"]),\n.adbox","#sticky,\n.b336","[align=\"center\"] > a[href*=\"banner\"],\n[class^=\"ui-dialog\"]",".topHorizontalBanner,\n[src^=\"/public/img/efi/\"]","#mobilinstruments,\n#stickyfooter,\n.cikkajanlo,\n.totalcar,\n[id*=\"billboard\"],\na[href^=\"https://bit.ly/\"]","#custom_html-4,\n#primary-sidebar,\n.right","#sidebar",".banner-bottom",".ckwrap,\n.list-item.has-banner",".code-block:has(> div + ins.adsbygoogle + script)","#didyou,\n#wallpaper_left,\n#wallpaper_right,\n.bet365_connect,\n[class*=\"_szponzor_\"]","[class^=\"ad_\"]",".ad,\n[class*=\"adlabel\"],\n[class*=\"leftlogo\"],\n[id*=\"adserver\"]","div#show_news_box,\ndiv.cookie-message","#tab-widget",".m-fbPopup",".m-breakingLayer:has(a[href*=\"nlc.hu/balkonfanatik\"]),\n.m-pcPromoArticlePointsLayer,\n.m-pcPromoFooterLayer,\n.rubAd,\ndiv.m-articleStickySocial,\ndiv.m-breakingLayer","[data-placeholder-caption=\"hirdetés\"]",".noprint,\nDIV[class*=\"ad-container\"]","#cookie-consent",".colorbox-cookiepolicy","#datasheetNavHelp","#slidebox,\n.highlighted-banner","#detect + .wrapper","[class*=\"ad-warning\"],\n[class=\"ad-blocked\"],\n[class=\"p-t-10 ad-blocked\"]",".col-xl-8 + aside.col-xl-4.col-visible-xl,\n.mw-allow-notification-dialog,\nsection.spar","div.facebook-layer-box","[class^=\"ad\"]","#zone-halfpage,\n#zone-roaddblock,\n.centercol.sponsor","#zone-titleheader,\n.slidein.popup.closeablenotification.scripted,\n.zone[data-zoneid]","#cookieconsentbar,\n#subscribepopuppanelalign",".banner-content,\na[href*=\"banner_click\"]","#kutu","#recommend,\n.frame-center,\n[class^=\"f10\"],\n[class^=\"grbox\"]","[class^=\"ads-\"]",".justClassBanner","#cikkertesito-reg-form,\n.banner.clearfix,\n.inner","#pushpushgo-container,\n.ad-container,\n.ads-container,\n.ph-flexi-box-wrap,\n.ui-dialog[aria-describedby=\"newsletter-modal\"],\n.ui-widget-overlay.ui-front,\n[aria-describedby=\"dialog-welcome\"],\n[class*=\"adbreak\"],\n[class*=\"c_banner\"],\n[class*=\"placeholder\"],\n[class=\"ph ph-responsive-wrap\"],\n[data-analytics-value]","#popup",".articleMetadata,\n.container.css-table > div:not(.container),\n.edgebox-widget.show,\n.introjs-helperLayer,\n.introjs-overlay,\n.introjs-tooltip,\n.port-adbd,\n[class*=\"_spon\"],\n[class=\"advert fix-advert\"]","#BlockCikkajanlo,\n#mymodal2,\n.footer--partners,\nDIV[id*=\"adocean\"],\n[data-qa=\"oil-Layer\"],\n[data-qa=\"oil-full\"]",".lead_alatti_txt,\n.mfor_cikk_beuszo,\n.news-page > div[style*=\"background: #FFF900;\"]:first-child","#newsletter_footer,\n#twister-banner,\n.cookie-layer","#fb_like_modal",".popup","#page-forum #center > div:has(h4 + [onclick*=\"https://prohardver.hu/muvelet/hozzaferes/kapcsolodas.php\"]),\n#top > div:first-child","[class*=\"banner \"],\n[id^=\"overlay\"]","[aria-describedby=\"newsletter-modal\"],\n[class*=\"adv--\"]","#wallpaper,\n.wallpaper-link","#psCookieNotification,\ndiv.ad-sm-text",".std0,\nIMG[src=\"images/hirdetes.gif\"]","#gdprCookieWrap,\n[class*=\"AdWrap\"],\n[id*=\"AdWrap\"]","#enableCookieDiv","[id*=\"ctnet_ad_\"],\ndiv[class*=\"ad \"]","#fhr-cookie-bar,\n#fragment,\n[class*=\"-ad-\"]","#text-9,\ndiv.sprtrvs-ad,\ndiv.tt-shortcode-1,\ndiv.tt-shortcode-2","#menusimple2 + div,\ndiv[style=\"width:100%;height:14px;text-align:left;font-size:9px;letter-spacing:3px;color:#5F5F5F;border-bottom:1px solid #CCC;margin: 10px 0 5px 0;\"],\nscript[async] + [data-widget-id]","#push-notification,\n.kezdo-kereso,\n[box-name=\"Hirdetés\"],\n[class*=\"Adv\"],\n[class*=\"peelgame\"],\n[class^=\"adact\"],\n[class^=\"adx_\"],\n[id*=\"Advert\"],\n[id*=\"peelgame\"],\ndiv.container.banner-container.left,\ndiv.container.banner-container.right,\ndiv.container.banner-container.wide > *","#google-display","[src*=\"hirdetes_\"]",".cikk-hir,\n[class*=\"googlebox\"],\ndiv[class*=\"adserver\"],\ndiv[id*=\"kirakat\"],\ndiv[id*=\"rightad\"]","[class=\"wp-container wp-top\"]","div.fb_shares",".modal_popup","[src^=\"/uploads/images/banners/\"]",".active.popup-screen,\n.popup-box,\n.stream-item,\n[id^=\"stream-item-\"],\n[id^=\"tie-block\"]:has(.stream-title)",".rightContent + [style]","#cookie-policy-bar,\n#hatterkep,\n#rovatpromo,\n.adslabel,\n[class^=\"ads_\"],\n[class^=\"ads_\"] + .clear,\niframe[class*=\"my-fbrecommend\"]","#ecom_pr,\n.ad-wrap-100,\n.jobb_300","#magnum","[class*=\"google-cikk\"]","[style=\"height: 250px\"]","#app-cookie-policy","div.banner",".kiemelttartalombox_feher","div[id*=\"hirdetes\"]",".border-top.p-4.bg-8.cookie-alert__inner",".spu-bg,\n.spu-box,\n[style=\"margin: 8px 0; clear: both;\"]","[id*=\"_bnr\"]",".sgpb-theme-3-overlay.sgpb-popup-overlay-1402.sgpb-popup-overlay,\nimg[class*=\"sgpb-\"]",".cross-site-programmatic-zones",".cikk-torzs-content-container > .kep_szeles.kep,\n.hasznaltautok-iframe-cikk-torzs,\n.header-tk-ajanlo,\n.joautok-iframe-cikk-torzs,\n.microsite,\n.szelso-jobb-lead_container,\n.totalkarWidget,\n[class*=\"adblokk\"]","#ads,\n[id*=\"adocean\"]",".ooono_promo","div.qc-cmp-ui-container",".adsense","#popunder_featured,\n.banner_box",".leftSide > .bnr,\n.rightSide > .bnr,\n.row:has(.mainTopBnr)","#blanket,\n#popUpDiv",".hird-cont",".banner-commercial,\n.reklamnagy",".page-rightside-advert,\ndiv[id*=\"advert-container\"]","[class*=\"szovegkozi\"],\n[id*=\"reklam_\"]",".adszoveg,\n[class*=\"ad_container\"],\n[class*=\"guestbox\"],\ndiv[class*=\"microsite\"],\ndiv[id*=\"microsite\"]","#backdrop,\n#best-cars-layer,\n#beta-message-invite,\n.centerHead,\n[class*=\"Etarget\"],\n[class*=\"Hirdetes\"],\n[class*=\"advert \"],\n[class*=\"szponzor\"]","[style^=\"bottom: 0px; left: 0px; position: fixed; width:\"],\ndiv[class*=\"-ad\"],\ndiv[class*=\"hird-\"],\ndiv[class*=\"hirdetes\"],\ndiv[class=\"fej_felett cf\"],\ndiv[id*=\"etarget\"]","#sitemessage",".top-video-container-banner","div[id*=\"Banner\"]","[class^=\"adv\"]","[style=\"z-index: 999999; background: rgba(0, 0, 0, 0.901961); display: block;\"]",".no_banner",".footprint_cookie","[id*=\"_ajanlatunk_\"],\ndiv.floating_share","[id*=\"AdFrame\"]","[class=\"wc_content wc_contentwide\"],\n[id*=\"AdZone\"]","div.penci-wrap-gprd-law,\ndiv.sgpb-popup-dialog-main-div-theme-wrapper-1,\ndiv.sgpb-popup-overlay-42657,\ndiv.sgpb-popup-overlay-42658","[id*=\"sense-\"]","#advert",".logopic2 + .fll,\n.overlay,\n.pupopadbox,\n[class=\"cikkbanner hirdbox mh40 listafriss\"],\n[style=\"margin-left:auto;margin-right:auto;width:980px;text-align:center\"]","#sidebad,\n#spu-main,\n#text-html-widget-6,\n[class*=\"PostAd\"],\n[class=\"e3lan e3lan-top\"],\n[id*=\"-bg\"]",".Cookie--bottom,\ndiv[id^=\"ga_g\"]","[href^=\"https://rosszlanyok.hu/\"],\n[style]:has(.adslot_1)","#adserving-tag-hb,\n#pa_sticky_ad_box_middle_left,\niframe[id^=\"postbid_if_\"]",".hover_bkgr_fricc","#RedUserNotification","#zadost,\n.cookies",".wrapper > .slider",".widget.widget_text",".back","#article > section > div:not(.article_content)","#st-2,\n.cookie-consent,\ndiv[id*=\"banner\"]","#Promolecek,\n.header-1,\n[class*=\"Reklam\"],\ndiv[id*=\"Reklam\"],\ndiv[id*=\"anner\"]",".myftp-widget,\n[id^=\"fancybox-\"],\n[id^=\"myftp\"]"];

const hostnamesMap = new Map([["trollfesz.cc",[0,1]],["privatbankar.hu",[0,348]],["harmonikum.co",2],["carstyling.com",3],["dictzone.com",4],["eredmenyek.com",5],["gumiszoba.com",6],["hazipatika.com",[7,8,9,10]],["delmagyar.hu",[7,33,76,78,89,137,138]],["kisalfold.hu",[7,17,78,89,137,262,263]],["mindenkilapja.hu",7],["sg.hu",[7,357]],["mobilarena.hu",[9,171,172,181,183,184,307]],["24.hu",[10,48,49]],["hirkosar.com",11],["hosszupuskasub.com",[11,12]],["humormagazin.com",13],["hungliaonline.com",[14,15]],["vilagunk.hu",[15,407]],["hu.ign.com",16],["ingatlan.com",17],["data.hu",[17,135]],["harmonet.hu",[17,78,205]],["klubradio.hu",17],["portfolio.hu",[17,247,347]],["ingatlanmagazin.com",18],["revizoronline.com",[18,33]],["444.hu",[18,50]],["autopro.hu",[18,80,81]],["bitport.hu",[18,33,96]],["blogstar.hu",[18,109]],["dimo.hu",18],["donna.hu",[18,33]],["epresso.hu",18],["eropolis.hu",18],["es.hu",[18,33,160]],["est.hu",[18,162]],["femina.hu",[18,34,78,167]],["figyelo.hu",[18,105]],["galamus.hu",18],["gondola.hu",[18,33,189]],["gportal.hu",18],["gyoricegregiszter.hu",18],["gyorplusz.hu",[18,134]],["hir6.hu",18],["hirstart.hu",[18,78]],["hrportal.hu",[18,65,224]],["ingatlanok.hu",18],["intima.hu",18],["jogiforum.hu",18],["kalohirek.hu",[18,33,254]],["kamaszpanasz.hu",[18,255,256]],["kapos.hu",18],["kaposvarmost.hu",18],["komment.hu",[18,33,78]],["lifemagazin.hu",[18,33,280]],["lovebox.hu",18],["magyarhirlap.hu",[18,33,181,290]],["mainap.hu",18],["mfor.hu",[18,300]],["mixonline.hu",18],["mmonline.hu",18],["mno.hu",[18,105,106,149,306]],["moly.hu",[18,308]],["napi.hu",[18,33,78,144,311]],["napiszar.hu",18],["nemzetisport.hu",[18,33,153,239,302,317,318]],["nice.hu",[18,320]],["noinetcafe.hu",18],["noplaza.hu",18],["novagyok.hu",[18,33]],["nyest.hu",[18,326]],["origo.hu",[18,33,76,278,332,333]],["partyponty.hu",[18,33]],["prim.hu",18],["retikul.hu",[18,356]],["ricsajok.hu",18],["samsungsport.hu",18],["sporthirado.hu",[18,33]],["szoftverbazis.hu",[18,277,375,376]],["tech.hu",[18,33]],["valasz.hu",18],["vidget.hu",18],["weborvos.hu",[18,227]],["wellnesscafe.hu",[18,106,412]],["kronika.ro",18],["sportoldal.ro",18],["szatmar.ro",[18,428]],["deres.tv",18],["karpathir.com",19],["kekfeny.com",20],["ketkes.com",21],["magyarszo.com",[22,23]],["puruttya.hu",22],["napinemszar.hu",[23,313]],["najlepsie-clanky.com",[24,25]],["5percblog.hu",[24,51]],["napiszar.com",26],["napiuzlet.com",27],["nemkutya.com",[28,29]],["joy.hu",[28,253]],["paleomedicina.com",30],["pannonrtv.com",[31,32]],["elemzeskozpont.hu",31],["femcafe.hu",[31,78,128,166]],["pdafanclub.com",33],["bacsmegye.hu",[33,88]],["betegvagyok.hu",33],["bien.hu",[33,46,78,95]],["divany.hu",[33,78,141,142,143,144,145,146]],["duen.hu",33],["egeszsegkalauz.hu",[33,100,103,151,152]],["eletmod.hu",[33,34,78,157,158]],["eron.hu",33],["geeks.hu",33],["hajdupress.hu",[33,78,199]],["hirposta.hu",33],["index.hu",[33,78,142,145,241,242,243,244]],["ipon.hu",[33,250]],["kezilabda.hu",33],["kiskegyed.hu",[33,58,100,152,188,264]],["kreativ.hu",[33,270,271]],["life.hu",[33,76,107,175,276,277,278,279]],["multiplay.hu",33],["pirulapatika.hu",33],["revizoronline.hu",33],["romnet.hu",[33,78,143]],["startlap.hu",[33,231,364]],["stylemagazin.hu",[33,368]],["trademagazin.hu",33],["velvet.hu",[33,78,144,145,241,243,389,400]],["kakukk.ro",33],["svedasztal.com",[34,35]],["autonavigator.hu",[34,76,77,78,79]],["szervuszausztria.hu",[34,35]],["ecoline.hu",[35,148]],["teltlanyok.com",36],["5mp.eu",37],["autobazar.eu",38],["eudomain.eu",39],["netbulvar.eu",40],["tarhely.eu",41],["utajovobe.eu",42],["hu",[43,44]],["liked.hu",[44,282]],["112press.hu",45],["168.hu",[46,47]],["player.hu",[46,344]],["twice.hu",46],["hiros.hu",[48,216]],["777blog.hu",52],["888.hu",[53,54]],["ripost.hu",[54,115]],["ado.hu",55],["adoforum.hu",56],["adozona.hu",[57,58]],["eduline.hu",[58,76,148,149,150]],["agrarszektor.hu",[59,60]],["hellovidek.hu",[59,209]],["infostart.hu",[59,247,248]],["penzcentrum.hu",[59,340]],["agroinform.hu",61],["alapjarat.hu",62],["alfahir.hu",63],["alza.hu",64],["americantourister.hu",[65,66]],["raketa.hu",[65,354]],["androgeek.hu",67],["angol-magyar-szotar.hu",68],["aranyoldalak.hu",[69,70]],["telefonkonyv.hu",70],["arukereso.hu",71],["atlatszo.hu",72],["atv.hu",73],["automotor.hu",[74,75]],["budapestkornyeke.hu",[75,118,119,120,121]],["blog.hu",[76,104,105,106,107]],["hasznaltauto.hu",[76,79,206]],["olcsobbat.hu",[76,143,328]],["cegbongeszo.hu",[78,106,124]],["hajokonyha.hu",78],["heol.hu",[78,89]],["hwsw.hu",[78,137,235]],["itmania.hu",[78,157]],["kitekinto.hu",[78,93,143]],["koponyeg.hu",[78,231,266,267]],["ma.hu",[78,157,158,272]],["motorrevu.hu",78],["noitema.hu",78],["onlinecegjegyzek.hu",78],["sonline.hu",[78,89,360]],["storyonline.hu",[78,367]],["szabadfold.hu",[78,369]],["szoljon.hu",[78,89,377]],["totalcar.hu",[78,145,146,241,242,387,388,389]],["travelo.hu",[78,333,391]],["vezess.hu",[78,106,322,401]],["offline.hu",[80,165]],["telekom.hu",[80,379]],["autosjog.hu",[82,83]],["helyitipp.hu",[83,210]],["napjainkportal.hu",[83,316]],["autoszektor.hu",84],["azonnali.hu",85],["babanet.hu",[86,87]],["szepsegbroker.hu",[86,345,373]],["bama.hu",89],["baon.hu",[89,91]],["beol.hu",[89,94]],["boon.hu",89],["duol.hu",89],["feol.hu",89],["haon.hu",[89,106,202,203]],["kemma.hu",89],["nool.hu",89],["szon.hu",89],["teol.hu",89],["vaol.hu",89],["veol.hu",89],["zaol.hu",89],["bankmonitor.hu",90],["bebiztositva.hu",[92,93]],["bkv.hu",[97,98]],["mandiner.hu",[98,113,292]],["blikk.hu",[99,100,101]],["glamour.hu",[100,101,152,187,188]],["blikkruzs.blikk.hu",[102,103]],["freemail.hu",[105,174,175,176]],["mon.hu",[106,202]],["metazin.hu",107],["blogspot.hu",108],["tudtade.blogstar.hu",110],["bonuszbrigad.hu",111],["bookline.hu",112],["borsonline.hu",[113,114,115]],["iho.hu",[115,237,238]],["magyarnemzet.hu",[115,291]],["vg.hu",[115,402]],["bpiautosok.hu",[116,117]],["pestisracok.hu",[117,341]],["likenews.hu",[119,120]],["starity.hu",[119,363]],["kekvillogo.hu",[120,121]],["budapestpark.hu",122],["cartourmagazin.hu",123],["ceginformacio.hu",125],["civishir.hu",126],["computerworld.hu",127],["gamestar.hu",127],["pcworld.hu",127],["puliwood.hu",127],["csaladinet.hu",[128,129]],["csongradihirek.hu",130],["csupasport.hu",[131,132]],["mindmegette.hu",[131,301,302]],["cyberpress.hu",[133,134]],["itthonrolhaza.hu",[134,252]],["dehir.hu",136],["demokrata.hu",139],["dijnet.hu",140],["linkcenter.hu",[143,283]],["transindex.ro",[143,239,270,429]],["totalbike.hu",[145,146,387]],["e-cars.hu",147],["magyarnarancs.hu",148],["sportorvos.hu",[149,362]],["egeszsegtukor.hu",153],["vehir.hu",[153,318,399]],["elelmiszer.hu",154],["elemi.hu",[155,156]],["topark.hu",[155,386]],["epiteszforum.hu",159],["gyakorikerdesek.hu",[160,191,192]],["esport1.hu",161],["evamagazin.hu",163],["f1vilag.hu",[164,165]],["forbes.hu",[165,169]],["filmoldal.hu",168],["fototrend.hu",[170,171,172]],["gamepod.hu",[171,172,180,181,182,183,184]],["hardverapro.hu",[171,172,182,183,204]],["itcafe.hu",[171,172,181,182,183,184]],["prohardver.hu",[171,172,181,182,183,184,352]],["logout.hu",[172,181,182,183,184,285]],["fovarosi-hirhatar.hu",173],["zene.hu",174],["unilife.hu",[175,277]],["accounts.freemail.hu",177],["fressnapf.hu",178],["gamekapocs.hu",179],["gentleman.hu",185],["gepigeny.hu",186],["gphirek.hu",190],["hoxa.hu",[192,223]],["gyaloglo.hu",193],["gyartastrend.hu",[194,195,196]],["pharmaonline.hu",[194,342]],["medicalonline.hu",[195,296]],["gyorihir.hu",197],["gyulaihirlap.hu",198],["hang.hu",[200,201]],["magyarhang.org",201],["hatarido-szamitas.hu",207],["haziallat.hu",208],["hestore.hu",211],["hetek.hu",212],["hirado.hu",213],["hircsarda.hu",214],["hirextra.hu",215],["indavideo.hu",[215,240]],["hirtv.hu",217],["hoc.hu",218],["hogyankell.hu",219],["holtankoljak.hu",[220,221]],["kapcsolat.hu",220],["nepszava.hu",[220,319]],["hotdog.hu",222],["huaweiblog.hu",225],["mlzphoto.hu",[225,304]],["napidroid.hu",[225,312]],["hunbasket.hu",226],["kosarsport.hu",226],["hunhir.hu",227],["hupont.hu",[228,229]],["webbeteg.hu",[229,267,410]],["hvg.hu",[230,231,232]],["tutitippek.hu",231],["vilagszam.hu",[232,406]],["m.hvg.hu",233],["hvo.hu",234],["idokep.hu",236],["ize.hu",237],["napiszex.hu",[237,314,315]],["sztarklikk.hu",237],["tvgo.hu",237],["ncore.pro",237],["ilovebalaton.hu",239],["forum.index.hu",245],["infoajka.hu",246],["infobekescsaba.hu",246],["infocegled.hu",246],["infocelldomolk.hu",246],["infodebrecen.hu",246],["infodombovar.hu",246],["infodunaujvaros.hu",246],["infoesztergom.hu",246],["infofehervar.hu",246],["infogyor.hu",246],["infohodmezovasarhely.hu",246],["infokarcag.hu",246],["infokeszthely.hu",246],["infokiskunfelegyhaza.hu",246],["infomiskolc.hu",246],["infomovar.hu",246],["infonograd.hu",246],["infopapa.hu",246],["inforabakoz.hu",246],["infosarvar.hu",246],["infosporon.hu",246],["infoszentendre.hu",246],["infoszigetkoz.hu",246],["infoszombathely.hu",246],["infotamasi.hu",246],["infotatabanya.hu",246],["infoveszprem.hu",246],["infozalaegerszeg.hu",246],["internet-marketing.hu",249],["ite.hu",251],["mozinezo.hu",256],["muhelynet.hu",[256,287]],["kapu.hu",257],["kektura.hu",258],["keol.hu",259],["kfc.hu",260],["kh.hu",261],["gloria.tv",262],["kiszamolo.hu",265],["koroshircentrum.hu",268],["kossuth.hu",269],["marmalade.hu",270],["nol.hu",[270,325]],["turizmusonline.hu",270],["kulturpart.hu",272],["lakberendezes.hu",273],["leet.hu",274],["libri.hu",275],["ok.hu",279],["reblog.hu",279],["videa.hu",[279,403,404]],["lifestory.hu",281],["litera.hu",284],["superiorhirek.hu",284],["love.hu",286],["lumenet.hu",[287,288]],["mafab.hu",289],["manus.hu",293],["mavcsoport.hu",294],["sorozataddict.hu",294],["mediacenter.hu",295],["menetrendek.hu",297],["merce.hu",298],["meska.hu",299],["mkbnetbankar.hu",303],["mme.hu",305],["mozishop.hu",305],["mult-kor.hu",309],["myonlineradio.hu",310],["telex.hu",314],["nkmenergia.hu",321],["nlc.hu",[322,323]],["noizz.hu",324],["webforditas.hu",[326,411]],["obi.hu",327],["onroad.hu",329],["onvideo.hu",330],["oprend.hu",331],["otvenentul.hu",334],["hir.ma",[334,417]],["pcforum.hu",[335,336,337]],["prog.hu",[335,337,351]],["pcguru.hu",338],["pecsma.hu",339],["piacesprofit.hu",343],["politaktika.hu",345],["hu.jooble.org",[345,426]],["port.hu",346],["profession.hu",349],["profitline.hu",350],["propeller.hu",[351,353]],["rendszerigeny.hu",355],["sielok.hu",358],["simple.hu",359],["sorozatwiki.hu",361],["kereso.startlap.hu",365],["stop.hu",366],["szamoldki.hu",370],["szeged.hu",371],["szeged365.hu",372],["szeretlekmagyarorszag.hu",374],["sztaki.hu",376],["telefonguru.hu",378],["terhesferfi.hu",380],["termalfurdo.hu",381],["terminal.hu",382],["thaimatrac.hu",383],["titkokszigete.hu",384],["tlap.hu",385],["traffihunter.hu",390],["turmixvilag.hu",392],["twn.hu",393],["ugytudjuk.hu",394],["usernet.hu",395],["valaszonline.hu",396],["vasarnap.hu",397],["vatera.hu",398],["videaloop.hu",404],["videoklinika.hu",405],["vilagszammagazin.hu",406],["vs.hu",408],["wasabi.hu",409],["widescreen.hu",413],["wikiszotar.hu",414],["feliratok.info",415],["kuruc.info",416],["szekelyfold.ma",418],["filmvilag.me",419],["mozinet.me",420],["online-filmek.me",421],["androbit.net",422],["calculat.org",423],["feliratok.org",424],["hogyan.org",425],["maszol.ro",427],["nepszava.us",430]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
