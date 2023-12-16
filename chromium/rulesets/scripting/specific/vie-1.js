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

// ruleset: vie-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = [".qc",".banners",".qx_135",".float-ck-center-lt","#custom_html-42","#mp-preload-popup-overlay",".separator",".cash-fish,\n.cash-fish-pc,\n.preload-pc,\n.top-mobile-banner","#popup-giua-man-hinh",".ad-container",".float-ck",".banner-sticky-footer-wrapper","#ads-for-all","#catfish","#chilladv,\n#headermbads,\n#headerpcads,\n#mobiads,\n#pcads","#hide_float_right",".preload","div[style^=\"position: fixed; bottom: 0px;\"]","#quang-cao",".toogle-ads",".ads-container",".banner_list,\n.item-more,\n.nc_sidebar_home,\n.widget-sidebar-block","#backgroundPopupp,\n#popupContact","#wap_bottombannerr,\n.grid-match[style]",".v4j-header > a[target=\"_blank\"]",".code-block",".alldiv ~ div[class]","a[rel=\"nofollow\"]",".below_ads","#overlay",".adsMobile,\n.adsShowPc,\n.offer-rating.widget-offers__list",".dcmm-button-player.row",".ads-menu",".offer__btn",".banner-top",".float-ck1,\n.module_ahlaejaba","#bottomFixedDiv,\n#js_pup_navigation,\n#wAdList,\ntr[id^=\"word_\"]","#player + div[id]",".catfish-ck",".jw-logo","#qc_clgt",".advertisement","#fbox-background,\n.gnarty-offads","#mobile-ads",".ads","a[href^=\"/cgi-bin/to.cgi\"]",".popup-container",".ai-close-fit","#BaoMoi_HalfPage,\n[id=\"__next\"] > div:has(#BaoMoi_Masthead)",".bm_B > div,\ndiv.ad-banner-list,\ndiv.bm_Ii",".monkey-content-duoicanbiet,\n.monkey-section-tinnoibat,\ndiv.monkey-qc",".list-dat-cuoc",".aHrefAff,\n.adsInPlayer,\n.bet-list,\n.buttonFabet,\n.top-bet-list",".oddsCompany","#wap_bottombanner","div[id^=\"AdLayer\"],\ndiv[id^=\"ad_\"]",".menu-mobile.hot-menu",".container-banner,\n.modal-ads,\ndiv[class^=\"slide-bar\"]",".sticky",".btn-betting,\n.datCuocBTN,\n.modelAds,\n.nhacaiuytin,\n.text-running",".footer-banner",".widget.widget_text",".block-bookmaker.block.most-view",".banner-preload","#text-14,\n.hocwp-ads",".bannerBox,\n.footerBanner,\ncenter > [href*=\"tlink.vn\"]",".adsv","a[rel=\"noopener noreferrer\"]",".widget-wrap.widget_text","#custom_html-7",".div_box_adv",".ad-botton,\n.topbanner","div.box-aside","#login-ads,\n.wt-ads,\n.wt-ads2",".ad-pin-right-bottom",".adv",".top-right",".line-ads","#home_header","#iklan-atas-wrapper","div[class^=\"banner-mobile\"]",".pc-catfixx",".pc_catfix_adv",".ad-manager-forum-list-bottom,\n.ad-manager-forum-list-top,\n.ad-manager-header,\n.ad-manager-thread-view-bottom,\n.ad-manager-thread-view-top,\n.google-auto-placed,\ndiv[style=\"margin:6px 0px 6px 0px\"]","#layerLogo","#topbanner",".btn_small_fix_container",".ads-home-feed",".left-slider",".text-center.adsense","#sideAdsLeft,\n#sideAdsRight",".banner-bot-mobile,\n.banner-top-mobile",".catfishLoader","#latest-censored-videos > .row > div.pb-3.col:nth-of-type(1),\n.v3sb-box",".cat-fish.a-play,\n.overlay","#hide_top,\n#top_content,\n.ads-embed,\n.float-ck-center-lt1,\n.separator_mb,\n.separator_pc,\n.topbaner,\n.topbaner_mb","#ads_preload",".anhbn-qc",".ezo_ad,\n.ezoic-ad",".advbox","div[style=\"padding: 0px; margin: 10px 0 0 0 ; width: 100%;text-align: center;min-height: 280px;\"],\ndiv[style=\"width: 100%; min-height: 240px; text-align: center;\"],\ndiv[style=\"width: 100%; min-height: 90px; text-align: center;\"],\ndiv[style=\"width: 100%;text-align: center;min-height: 280px;\"]","#link-view > center:nth-of-type(1)","[id^=\"bdaia-widget-html\"]:has(.widget-inner > [href*=\"premiumvns.com\"])",".dwpb-action,\n.fixtop",".adsHOC_wrapper__i5MTn,\n.homePage_adsHomeLeft__3_ruz.adsHOC_wrapper__Se0cN,\n.style_wrapperAll__jFIbb,\n.style_wrapperAll__oHfiq,\n.style_wrapper__2LeQp,\n.style_wrapper__YEwSi,\n.textlinkBox_notwrap__scC4g.textlinkBox_wrapper__1C2P9,\n.textlinkBox_wrapper,\np[style=\"color: rgb(174, 174, 174); margin-top: 10px; margin-bottom: 20px;\"]","#countdown,\n.bottom_cnt_ad,\n.tp_ads_incontent,\ndiv.ad_separator","#myModal,\ndiv[id^=\"adsphim-\"]",".ff-banner",".player-midpoint-progress","div[class*=\"ads\"]","#mp-adbk,\n#mp-adx-b32",".mp-adz",".fixed_bottom",".adv_phim","[class^=\"box_adv_ele\"]","#tdi_129",".container div:not(.top) > div.mrb5.mrt5.text-center > a,\n.mrb5.text-center.container",".my-banner",".pcs-modal","#IMAPointernctPlayer,\n#PL_R01,\n#PL_R02,\n.adv_home_300_250,\n.nqc-zone","#adsTopInPageBanner,\n.adsContainer","#popup",".pcCatfish","#itro_opaco","#sticky","div[style^=\"position:fixed;inset:0px;z-index:100000;\"]","#video_player ~ div[id]",".ads_popup",".show.ads-sticky","#mobile_content_bottom,\n.BanerTop100,\n.adv-300-right",".adpia_banner",".popUpBannerBox",".popmake","#mobile_content_top,\n#p-GMH",".player-vast-blocker","#sponsor-balloon",".box_option,\n.event_loader_e,\n.fix_bottom,\n.popup_center",".uniad-player + div[style]","#catfish-banner,\n.center-screen.backdrop,\n.ibetlogo,\n.topless","#itro_popup","#float_content_right",".preload-banner",".sticky-footer",".sgpb-popup-dialog-main-div-wrapper,\n.sgpb-popup-overlay",".ads-bottom-margin,\n.ads_blocks_advice,\n.bs-callout[style=\"min-height: 400px; margin-top:0px;\"]",".top-banner","#adsposttop","#adrighttop",".adbox","#tut4ktream_idAdLink",".code-block-4","#pc-preload-modal,\n.quang-cao","#scriptDiv",".adsbygoogle",".no-auto-popup,\n.qc-adskeeper",".add-logo-ads",".stream-item","#footer-widget-area,\n.e3lan.e3lan-top",".box,\n.pum",".truct-catfish,\n.truct-widget","#ad_info_top","#sticky-footer",".footer-info","#banner_preload,\n.doc-truyen-ads-d1,\n.doc-truyen-ads-d2","#hivideo","[class*=\"_banner\"]","#preload-zing,\n#uniad-head,\n.uniad-head",".sda-catfish",".happy-under-player,\n.vailo-sticky,\n.vailo-under-navbar-mobile","a[target=\"_blank\"][rel=\"dofollow\"]",".item-qc",".Header_topBanner__1xD-2,\n.styles_bannerInArticleWrapper__rPPJH,\n.styles_topBanner__NL_gW","#BigBanner,\n.ads_position",".ads_txt",".row > div > center","div[class^=\"adbox\"]","#article > .pt-3.text-centers,\n.text-muted","#balloon",".banner-masthead",".button-action-float-banner",".adsphim-mobile-popup",".wtt-ads","#ouibounce-modal",".a--d-wrapper","div.container:nth-of-type(5)","#adstop2,\n.col-lg-4.hidden-xs.d-flex.flex-column.address-wrap,\n.float-right",".adv-side-bar,\n.banner-adv-wrapper,\n.banner-adv-wrapper2,\n.item-qc1",".container.mt-1.d-none.d-lg-block,\n.menu-item-object-custom,\na.rlw-extra-i.py-3.flex-grow-1",".modal-backdrop.show",".show.fade.modal",".marquee-container","#quangcaopc",".align-items-center.justify-content-between.d-flex.col-12 > .d-lg-none.d-block",".sub-menu.d-none.d-lg-flex","div[id^=\"dnn_\"]",".company","#invideo_wrapper,\n.Ads,\n.mobile-catfixx,\ndiv[style^=\"position: fixed; top: 60px\"]","#antiblocker,\n#antiblocker_underplayer",".click-ads",".close-button","#popup_banner_beta","#ballon-right,\n.most-view:nth-child(2)",".ab1","#js-read__body + .mt-3,\n#tpads-pc-top-page,\n.nh-read__alert,\n.px-3.nh-read__body > .text-center.pb-3,\n.text-center.pb-3.nh-read__pagination,\ndiv.text-center.pt-3:nth-of-type(1),\ndiv.text-center.pt-3:nth-of-type(2)","#div-ub-metruyencv_net,\n.tpm-unit",".widget_custom_html.widget.widget_text",".box_odds",".fixed","#top_oddd",".hd-tube-desktop,\n.hd-tube-mobile",".entry > a[target=\"_blank\"],\n.wpbcap-laptopvang,\n[href*=\"hnmac.vn\"],\n[href*=\"laptopvang.com\"],\n[href*=\"macbookgiasi.vn\"],\n[href*=\"macone.vn\"],\n[href*=\"minhtuanmobile.com\"],\n[href*=\"vender.vn\"],\ndiv.\\35 fb1ed6025b0b.widget:nth-of-type(3)",".partner-me","#container-ads,\n#hide_catfish","#btn-skip,\n.MuiDialog-root,\n.css-ylxsn9.MuiStack-root,\n.vjs-banner-bar,\n[href=\"https://8xbet259.com/\"]",".captain-sb,\n.mct_-bet,\n.vb-pr-box",".mmo,\n.mmo-inner",".box-host",".ft-box","#m-bet","div[class*=\"size-\"]",".ibs-bet",".show.fade",".bz-8nLeK,\n.jw-icon[aria-label=\"ĐẶT CƯỢC UY TÍN\"]","#app-web + .container[style=\"margin-bottom: 30px\"],\n.item.item-betnow,\n.sv-link.btn-bet-top",".fade.show",".button-ads-header,\n.main-carousel-wrapper,\n.top-bookies,\n.tvc-link-ads-full",".bet-btn-8423,\n.btn_betnow_632132,\n.btn_fb,\n.btn_soikeo_74324,\n.highlight,\n.images_fixed,\n.popup,\n[href=\"/top-bet.html\"]",".btn-bottom-right-append-player",".banner-bottom-append-custom,\n.button-in-player-box,\n.footer-button-sign-in.hide-desk,\n.hide-desk.wrap-content > .wrap-btn-action,\n.menu-right-slide",".mct_-bet-bot",".btn-odds",".ads-menu-item,\n.dcmm-button-player-item",".divdatcuoc",".widget",".show-ads-banner",".btno-group.d-none.d-lg-flex,\n.container > .mt-1,\n.container > .mt-3,\n.d-lg-block,\n.justify-content-between.d-lg-none.d-flex.btno-group,\n.menu-item > a[rel=\"nofollow\"],\n.topButton,\n.widget_offer,\nheader > .container","div[id^=\"float\"],\ndiv[id^=\"hide_float\"]","#accordion",".bbMediaWrapper-inner > .samCodeUnit,\n.js-replyNewMessageContainer.block-body > div.samCodeUnit > .samItem,\n.p-footer,\n.samVideoOverlay",".ad599div,\n.bets-now-button,\n.bets-now-ct,\n.pc_header,\na[data-wpel-link=\"external\"]","#closeAds",".v4j-header > center",".adspopupgiua,\n.adspopupleft,\n.adspopupright,\n.float-ckgiua",".sponsor-balloon","#ad-floating-right,\n.ad-floating-left","#menubentrai,\n.gnartyx-offads","[href*=\"cellphones.com.vn\"]",".textwidget","#right_float,\n[id$=\"float_banner\"]",".head--banner",".expand-static-banner,\n.static-banner",".link-gold,\n[id^=\"banner\"]",".col-xl-3.col-lg-6.d-md-block.d-none,\n.lazyloaded.mx-auto.d-block.text-center.mb-20,\n.quangcao-down > p,\n.text-down","a[rel=\"nofollow sponsored\"]","#footer_fixed_ads",".cp-modal-popup-container,\n.simple-banner",".parent.special",".banner",".ad-floater,\n.popunder-link,\n.promotion-popup,\n.video-ad-layer","#ad_global_below_navbar",".other-ads-container,\n.show-load-ad","#pc-top-banner","#custom_html-2,\n#custom_html-4",".b-player",".kqbackground.vien ~ a[target=\"_blank\"]",".baloon,\n.col-sm-10.kqcenter","#sticker",".info-footer:nth-child(4)",".ads-wrapper,\n.preload-backdrop",".mobile-catfix",".fancybox-container,\n.flex-wrap-banner,\n.movie-banner,\n.mv-banner,\n.ws-banner","#js-read-body > .text-center.pb-3,\n.text-center.pb-3.nh-read__pagination > .mb-1 > .text-muted,\n[href=\"https://metruyencv.info/goout/lazada\"],\nsection.nh-section:nth-of-type(5)",".single-box,\n[href^=\"//dooloust.net/\"]",".banner_top","#pc-catfix,\n.lightbox-player-pc,\ndiv[id^=\"preload-\"],\nlixi88-ads-left,\nmb_catfish_1xbet,\nmobile-catfix,\npreload-11bet,\nsobet-ads-right","#headwrap > .computer,\n#headwrap > .mobile,\n.pc-catfix",".i9bet","#pm_quangcao",".ad-script,\n.elementor-widget-container > .widget_custom_html","[href^=\"https://gotrackecom.info\"]","#desktopPopupBanner,\n.ads-floatingads,\n.banner-item,\n.top-nha-cai","#_AM_POPUP_FRAME",".fixed-bottom,\n.popup-banners",".firstmessfloadright.samItem,\n.my_nonresponsive_ads,\n.my_responsive_ads,\n.samBannerUnit,\n.samTextUnit",".t_logo","#catfish-adv,\n#overlay-pop,\n.mobile-catfish,\n.pc-catfish",".btn-bet-top,\n.item-betnow",".elementor-widget-image",".box-rating","#ads_large_detail,\n#banner_top,\n#box_qua_tang_vne,\n#raovat,\n#sis_popup,\n#supper_masthead,\n.article_ads,\n.article_ads_300x250,\n.banner_mobile_300x250,\n.section_ads_300x250","div[class*=\"qca\"]",".container > .right-box",".content_middle_rightbar",".banner-link,\n.block-catfish.text-center.d-lg-none.d-block,\n.container > ul,\n.container.mt-1,\n.logo-cnt > .d-lg-none.d-block,\n.menu-cuoc-one88,\n.mt-5.d-lg-none.d-block.pb-2.text-center,\n.offer,\n.pl-lg-0.col-xl-4,\n.row.d-none,\n.sk_balloon,\n.widget-offers__list,\na.btn-odds[rel=\"nofollow\"],\ndiv.d-lg-none.d-block:nth-of-type(3)","#match-child-1",".match-detail__offer",".menu-top-nha-cai",".menu-cuoc-8xbet","#catfish_content","#ads-catfish","#idAdLink",".adsShowMobile",".adLogoPlayer",".PanelScroller.Notices","[id^=\"catfish\"]",".black-layout > div:nth-child(2),\n.popup_u,\ndiv[style^=\"position: absolute;top: 0;\"]","div#bnads",".homePageAds","[id^=\"Balloon_\"]",".btn-betnow,\ndiv.vebo-sp.container:nth-of-type(7)",".quangcaomobile",".sticky_bottom","#bar_float_r,\n.quangcaomb","body > [style*=\"position: fixed;\"]",".catfix","#header-ads,\n.catfish-img","#top-banner-pc",".container > .row > center",".footer-fixed-br-container","#menu-main-menu > .menu-bongdainfo.menu-item.nav-item.tt-bdif,\n#menu-main-menu > .menu-nha-cai-uy-tin.menu-item.nav-item.style-2 > .nav-link,\n.c-int.d-lg-none.d-block,\n.container > .row > .col-12,\n.justify-content-center.d-flex > .btn-primary.btn,\n.matches__item--footer,\n.mt-1.d-lg-flex.d-none.sub-menu,\na.d-lg-none.d-block:nth-of-type(2)",".d-lg-none.d-block.p-1.text-center","._9xtpcl.c4je67d.c1qs0lzc.c1hrlkpu.cc2icwl.c1i0iccj.cfd18df,\n._9xtpcl.e1e6v8dt,\n.llnefd1,\n.lpp0nsn,\n.luq51lg.a13wihj","div.text-center:nth-of-type(7),\ndiv[style=\"min-height: 250px\"]","#menu-item-52424,\n.btn-od,\n.style-1.ml-2.d-none.d-lg-block.menu-item.menu-item-type-custom.menu-item-object-custom.menu-item-52424","div[data-value=\"1\"]","[data-clm=\"ccccc2\"],\n[data-id=\"ap3poapup\"]",".movies-list-wrap > center,\n[href^=\"https://www.toprevenuegate.com/q7rbxxz1v\"]","#bnc1","#bnc0",".widget_media_image.widget_block.widget,\nimg.wp-image-1283,\nimg.wp-image-1285",".xx-ads",".d-lg-flex.d-none.p-0.company.flex-1.table,\n.grid-match__footer,\na.d-lg-none.d-block:nth-of-type(1)","#mobileCatfishz","#qc-kpgame","#ad-container","#ads,\n#overlay-close,\n#play","#position_full_top_banner_pc",".gc-header__wrapper + div[style]",".button-dangkyngay",".afw-topbanner","#adm-slot-7234","#banner3double","div[id^=\"adsWeb\"]",".BT-Ads,\n.qc-inner,\ndiv.qc_TC_Chap_Middle,\ndiv[id^=\"qc_M_\"],\ndiv[style*=\"position: fixed;\"]",".bgadmtoptotal",".bannertop",".top-right-col-ads",".my_responsive_add,\n.titleBar + *,\n[class1=\"my_responsive_add\"]","#background_bg_link,\n#subRightAbove,\n.module3",".admicro",".top-header",".top_page","#subiz_wrapper,\n.ad-embed",".features-r","#bannerMasthead,\n#desktop-home-top-page,\n#dta_inpage_wrapper,\n#dtads_inpage_wrapper,\n#mobile-home-middle-1,\n#mobile-home-middle-2,\n#mobile-home-top-page,\n#mobile-top-page",".widget_media_image.widget",".banner-cs",".banner-top-main,\n.baohaiquan_bottom_970x250",".top-advertisment",".ads-gg-top,\n.container + .col-xs-12.content_wrap,\n.content > .content > .content,\n.wrap-single > .pagination.text-center","._ning_outer","#Adsv,\n.right-banner > a[title]",".__ads_click","#BannerAdv","#gallery-2,\n.hd-cate-wrap,\n.home-qc-wrap,\n.home-sec-right .widget_media_image,\n.noname-left",".columns-widget .col-right",".chapter-content .min-h-\\[275px\\]",".Advs_adv-components__1nBNS.Advs_adv-300x250__2eyhC.Advs_no-content__RWwW2,\n.HotTagGlobal_fixed-height__1f50i",".box_ads_d",".exp_qc_share",".c-banner",".sidebar > div[style]","#div-ub-docbao","div[id^=\"adsbg\"]","#widget-12",".banr-Rt,\n.banrpstn","#myElementz,\n.bannerinfooter",".LRBanner",".bg_allpopupss,\n.bgal_popndungalal,\n.bn1,\n.bn2,\n.box_baiviet_dexuat,\n.box_quangcao_mobile_320x50,\n.box_text_qc","#tubia","[id^=\"admzone\"]",".ads-right1,\n.adv-row",".adx-zone,\n.underlay",".khw-ads-wrapper.clearfix","#qcRight,\n.banner-advertisements",".banner-bottom-menu,\n.popup-bg,\n.showpop,\n[href*=\"bit.ly\"]",".qc-benphai,\n.qc-bentrai","#adrightsecondx,\n#adrightspecial,\n#adrightspeciallinks,\n#adsrighttop,\n#adsuggestion","#modal-ads-olm",".advertTop,\n.hsdn > li:has(.adsbygoogle),\n.module_plugins",".ads-sponsor,\n.khw-adk14-wrapper","[id^=\"adv\"]",".quang_cao_chan_trang_pc,\n.quang_cao_pc_right_hoc_tap",".ads_shortcode",".admicro_top","#adop_bfd,\n.adsbypubpower,\nins[class*=\"adsby\"]",".sponsor-zone","div[id^=\"ads_\"]","#top-adv",".bannerchuyenmuc,\n.baseHtml.noticeContent,\n.show-qc-home,\n.show_qc","#popup_center","div[style=\"text-align:center;margin-top:0px;margin-bottom:0px;\"]",".box-banner",".banner-ads-home,\n.banner-in,\n.warp-banner-vip","div[class^=\"adv-\"]",".ads-970x280","#mobi-top,\n#pc-top,\n.d-flex.justify-content-between > div > div.d-flex.justify-content-around.mt-4","#myCarousel,\n.banner-boder-zoom",".modal-di__button-wrapper,\n.sam-slot",".ads-general-banner",".LeftFloatBanner,\n.RightFloatBanner,\n.ads_top_left",".block:has(.block-container > .block-body > a[href]),\n.block:has(.block-container > .block-body > ins)",".asd-headt,\n.detail-tab > .container,\n.detail__foru,\n.super-masthead,\n[class*=\"box-home\"],\n[data-marked-zoneid=\"tn_detail_danhchoban\"],\n[data-marked-zoneid=\"tn_detail_quantam\"],\n[id^=\"dablewidget_\"],\nzone","div[class$=\"_ads\"],\ndiv[data-id=\"2\"]",".ads_660x90,\n[class^=\"ads_\"]",".c-banner-item","div[id^=\"adsMobile\"]",".fyi",".ads-common-box",".p-body-pageContent > table[style=\"width:100%;display:inline-block;background: #fff;\"]",".in-article-promo,\n.jsx-3569995709,\n.micro,\n.middle-comment-promotion,\n.pro-container,\n.promo-container,\ndiv[style=\"width:300px;height:250px\"],\ndiv[style=\"width:300px;height:600px\"],\ndiv[style=\"width:320px;height:100px\"]",".container .desktopjszone,\n.mobilejszone","#header-ads-full,\n.ads-responsive,\n[id^=\"ads-\"]","#LeaderBoardTop,\n#admbackground,\n#adsMainFooter,\n.Mobile_Masthead_TTO_Wrapper,\n.adm-bot,\n.box-qad,\n.section__r-vietlot,\n.wrapper-ads-mb",".clearfix.adregion,\n.visible-md.header-banners",".bannerqc,\n[class^=\"sticky-top\"],\n[href*=\"/default/template/\"],\n[href*=\"hungthinhcorp.com.vn\"],\n[href*=\"vietcombank.com.vn\"]",".Flagrow-Ads-under-header",".vfs_banner","#headerProxy,\n.rightleftads","#vmcad_sponsor_middle_content,\n.box-adv,\n.mb-20.col-right-ads,\n.vmcadszone",".zone--ad","section.mar20:nth-of-type(2),\nsection.mar20:nth-of-type(4)","#banner-dai-bottom,\n#banner-dai-top",".v-element > .v-responsive,\ndiv.message--post",".sys-ads",".bf-3-primary-column-size.bs-vc-sidebar-column.vc_col-sm-3.vc_column_container.bs-vc-column.wpb_column > .wpb_wrapper.bs-vc-wrapper",".wrapper-adv","#banner1ab,\n#banner2ab",".ad_by_yellowpages,\n.banner_add","#Zingnews_SiteHeader,\n.znews-banner","#adx,\n.catfish-bottom,\n.catfish-top,\ndiv.banner-catfish-bottom",".most-view:first-child","#ads_location,\n.block.ad",".odds-button,\n.odds-button2",".click-ads ~ p,\n.overlay-close,\ndiv.mrb10",".a-header,\n.apu,\n.header"];

const hostnamesMap = new Map([["*",0],["bongda365.asia",1],["keoso.club",[1,20,21]],["bongdatructuyen28.com",[1,56]],["soikeoz.net",[1,200]],["hentaivn.autos",2],["cliphot69.biz",[3,4]],["phevkl.biz",[3,5,6]],["hh3dhay.com",[3,84]],["khoaiphim.com",[3,95,96]],["phimtn.com",[3,8,140]],["xem8z.com",[3,182]],["xemhay24h.com",[3,10,183,184]],["phimhay.in",3],["mobiblog.lol",3],["hdphim18.net",[3,261]],["phimmois.org",[3,5]],["phimvuihd.org",3],["cliphotvn.pro",3],["phimtuoitho.tv",[3,326]],["vietphims.tv",[3,329]],["phim18hd.biz",7],["phim18vn.biz",7],["phim18hd.me",7],["247phim.cc",[8,9,10]],["anivn.club",[8,18]],["animevietsub.boctem.com",8],["phimdinhcao.com",[8,129,130,131]],["phimhoathinh3d.com",[8,13]],["hhhtq.net",[8,167]],["mephimgi.net",[8,9]],["phimdinhcao.net",[8,129,130,131]],["phimlongtieng.net",[8,129,130,131,133,276]],["vkooll.net",[8,111]],["vuaphimmoi.net",[8,13,39,111,291]],["motchillz.org",[8,9,39]],["fimfast.pro",[8,9,90]],["hh3d.tv",[8,13]],["hoathinhtq.tv",[8,13]],["xemphimchill.xyz",[8,9,13,131]],["ephoto360.com",[9,77]],["phimmoiv2.com",[9,13,137]],["thiepmung.com",9],["phimmoi.io",[9,211,212]],["phimmoizz.org",[9,111,304]],["ophim.vip",[9,111,137,334]],["dailyphimz.com",10],["listnhacai1.com",[10,103]],["phim18vipb.com",10],["phimplay24h.com",[10,139]],["sexphim1.com",[10,150]],["sieudamtv.com",[10,121,151]],["kenhgamez.info",10],["rphang.me",[10,238]],["gunnylau360.net",10],["gunnymienphi.net",10],["mythethao.net",[10,273]],["thiendia1.net",[10,283]],["vkoolsss.net",[10,29,38,288]],["vuonhoalan.net",[10,292]],["checkgaigoi.one",10],["phim33.tv",[10,324]],["phe3x.xyz",10],["phimno4.xyz",[10,442]],["biphims.cc",11],["biphims.co",11],["biphim.io",[11,27,208]],["motphimhan.cc",12],["phimmoiaz.cc",13],["hhtrungquoc.com",[13,85]],["phimbocn.com",[13,124]],["motchillw.net",13],["hhtq.top",[13,206,315]],["hhtqvietsub.top",[13,135,206,316]],["animevip.tv",[13,206]],["hhninja1.tv",13],["animeweb.vip",13],["hhtq.vip",[13,85]],["phimmoichill79.cc",14],["tuoinung.cc",15],["vn1.yeusex.cc",16],["huphimtv.com",[16,44,90,91,92]],["sexviet1.vip",16],["animehay.city",17],["heovktgame.club",19],["phuongtrinhhoahoc.com",[20,144,145]],["ketqua247vn.org",20],["bongda21h.co",[22,23]],["phym18.org",[22,54,305]],["phimsexhay669.co",24],["phimvietsub.co",25],["gocphimvn.vip",[25,332]],["mobile.sexnhanh.co",26],["subnhanhvl.co",[27,28,29]],["phimmoi4s.com",[27,136]],["stream.tructiepnba.com",[27,159]],["tuulautruyen.com",[27,81]],["xemtivi4k.com",[27,185]],["subnhanh.im",[27,28,29]],["vidian.me",[27,240]],["ketqua9.net",[27,264,265]],["truyenchu.com.vn",[27,366]],["nghean24h.vn",27],["vbfast.xyz",27],["tructiepdabong5.co",[29,30,31,32,33]],["mitomf.tv",[29,54,188,189,190,191,192,193,194,195,230,320,323]],["tutientruyen.xyz",[29,200]],["vaoroi13.online",[31,32,232,233,301,302]],["xoivo2.online",[31,233,234,302]],["xoilac87.net",[33,54,188,190,191,193,194,195,221,293,294,295,296,297]],["123nhadatviet.com",34],["bongda365g.com",[34,39,52]],["123nhadatviet.net",34],["tuoitre.vn",[34,423]],["tuoitrenews.vn",34],["4rkinggame.com",35],["live.7mvn2.com",36],["abysscdn.com",37],["freeplayervideo.com",37],["player-cdn.com",37],["ahaphimz.com",38],["vphims.net",38],["api.anime3s.com",39],["p.thoctv.com",39],["vebo8.link",[39,188,214,215,216,217,218,219,220,221]],["player.4shares.live",39],["watch.4shares.live",[39,222]],["rakhoi10.live",[39,58,59,60,228]],["rakhoi9.live",[39,58,59,60,228]],["mephimtv.net",[39,270]],["ssplay.net",[39,281]],["play.vnupload.net",39],["tvhaym.org",[39,200,284]],["xoilac14.org",[39,217,218,219,220,224,309]],["mphimmoi1.xyz",[39,44,92,122,441]],["anime47.com",[40,41]],["doctruyen3qvn.com",41],["toptruyenne.com",41],["animetvn2.com",[42,43]],["animet.net",[42,245]],["appvn.com",44],["javtopxx.com",[44,94]],["linkerpt.com",[44,102]],["tinnhac.com",44],["xemphimvuis.com",[44,92]],["film365.in",[44,201,202]],["ghienphim8.net",[44,211,256,257,258]],["ophimhdvn3.net",[44,269,274]],["phimgichill.net",[44,269,274,275]],["soikeo365.net",[44,280]],["vieclam123.net",44],["xemphimviet1.net",[44,257,258]],["cungthi.online",[44,153]],["antt.vn",44],["bongda24h.vn",44],["kienthuc.net.vn",[44,396]],["nhadautu.vn",44],["saostar.vn",[44,406]],["vietnamplus.vn",[44,430]],["vlxx.xxx",[44,63,107,440]],["asianbookie.com",45],["asideway.com",46],["audiotruyenfull.com",47],["baomoi.com",48],["m.baomoi.com",49],["baonga.com",50],["bongda12h365.com",51],["bongdainfoz.com",[53,54]],["tvhayhd.com",[54,164]],["cakhia.de",[54,187,188,189,190,191,192,193,194,195]],["vebot.live",[54,60,188,190,191,192,194,195,221,230,235]],["90phutx.tv",[54,190,191,195,294,295,297,319,320]],["xoilaczzz.tv",[54,230,295,296,297,331]],["bongdalu6.com",55],["cakhia20.com",[57,58,59,60]],["cakhia22.live",[57,58,59,60]],["cakhia25.live",[57,58,59,60]],["caheo7.tv",[57,58,59,60]],["hoatieu.vn",[58,146,175,387]],["canhrau.com",61],["topthuthuat.com",61],["chillphim1.com",[62,63]],["zuiphim.com",63],["chouc.com",64],["clbgamesvn.com",65],["coccoc.com",66],["contuhoc.com",67],["cryptoviet.com",68],["dexuat.com",69],["diadiem.com",70],["doctruyenchufull.com",71],["doisongphapluat.com",72],["dtruyen.com",73],["dubaotiente.com",[74,75]],["ducvietonline.de",75],["bongda.com.vn",[75,351]],["giadinhonline.vn",[75,369]],["taichinhdoanhnghiep.net.vn",[75,257]],["nongnghiep.vn",[75,369]],["vietnamnet.vn",[75,429]],["ebookbkmt.com",76],["fsharetv.com",78],["gaingon18.com",79],["game4v.com",80],["gianhangsach.com",[81,82]],["animevietsub.fan",[81,196]],["forum.gocmod.com",83],["truyensieuhay.com",[85,162]],["hoahoc247.com",86],["hoidap247.com",87],["homedy.com",88],["hotruyen.com",89],["phim18zz.com",[92,122]],["hdphimhay1.xyz",92],["javtiful.com",93],["phimcuon.com",[96,128]],["tvhay2.net",[96,284,285]],["lacaigi.com",97],["laptrinhcanban.com",98],["lichngaytot.com",99],["lichvannien365.com",100],["link1s.com",101],["lmssplus.com",104],["loigiaihay.com",105],["luotphimtv1.com",106],["webphim2.com",[106,180]],["cdnwp.icu",106],["luotphim1.net",106],["luotphim2.net",106],["luotphimtv.vip",106],["mehoathinh3.com",[107,108]],["phimmoi2.com",[107,108,134,135]],["vuighe2.com",[108,177,178]],["mmo4me.com",109],["baodauthau.vn",[109,342]],["motphimtvi.com",[110,111]],["motchilli.net",[110,111]],["phimmoichillh.net",[111,277]],["mphim14.com",[112,113]],["phimmoinay.tv",[113,167,200]],["muabanraovat.com",114],["muaxegiatot.com",115],["nettruyenus.com",116],["nhattruyenmin.com",116],["nhattruyenplus.com",116],["nhattruyenup.com",116],["nettruyenx.com",117],["tin2.news25link.com",118],["nhaccuatui.com",119],["ophimhay.com",[120,121]],["phim202.com",123],["player.phimbocn.com",[125,126]],["cliphotvn.2tenz.top",[125,126]],["bestx.stream",126],["hls.playerfb.xyz",126],["phimchat2.com",127],["saytruyenmoi.com",127],["phimbo88vn.net",127],["truyentuan.com",[130,163]],["tenovi.net",130],["phimhaymoi.com",132],["phimlongtieng.com",133],["hhchina.tv",[135,244,316]],["phimnhua.com",138],["phimyeuthichz.com",[141,142]],["boophim.net",[141,249,250]],["lxmanga.net",[141,142,268]],["chillphimmoi.org",[141,250]],["phimnet.vip",[141,202,335]],["truyensextv.com",[142,161]],["truyensextv.me",[142,161]],["truyensextv.org",142],["photoshoponlinemienphi.com",143],["tructiepbongda29.com",145],["thanhnien.vn",[145,412]],["quantrimang.com",[146,147,148]],["vndoc.com",[148,175]],["khoahoc.tv",148],["download.com.vn",148],["download.vn",[148,182,373]],["gamevui.vn",[148,182,373,382]],["meta.vn",148],["sexhay2023.com",149],["sieutamphim.com",152],["tailieungon.com",153],["tailieuvang.com",153],["giavang.net",153],["romgoc.net",153],["tctruyen.com",154],["tctruyen.net",154],["thoctv.com",155],["thuthuatjb.com",156],["thuthuattienich.com",157],["toithuthuat.com",158],["truyenqqvn.com",160],["tvso1.com",165],["bongdaso66.net",[165,248]],["blog.abit.vn",[165,188,221,338]],["tvzinghd.com",[166,167]],["vailonxx.com",168],["vatlypt.com",169],["vesotantai.com",170],["vietcetera.com",171],["vietgiaitri.com",172],["vietjack.com",173],["vietyo.com",174],["vtruyen.com",176],["xem1080.com",178],["webhoctienganh.com",179],["webtretho.com",181],["mephimnhe1.net",[183,269]],["xosodaiphat.com",186],["90phut9.live",[188,218,219,220,223,224]],["khomuc9.live",[188,221,225]],["live4.thapcam.live",[188,215,218,221,229,230]],["vebotv.net",[189,216,218,219,220,286]],["vebo4.org",[189,216,218,219,220]],["hayghe.fan",197],["protruyen.fun",[198,199,200]],["protruyen.xyz",[198,200,444]],["phimtho.net",200],["chillhay-net.pro",200],["metruyencv.info",[203,204]],["metruyencv.net",[204,271]],["motphim1.info",[205,206]],["phimhaytv.info",207],["heovl.io",209],["javhd.shop",209],["vlxx.studio",209],["maclife.io",210],["gavang1.link",213],["mannhan2.live",226],["mn.mediastation.live",227],["vaoroi365.live",[231,232,233,234]],["chotlo.me",236],["ngaytho.me",237],["thethao12h.me",239],["javhay.media",241],["sieukhung.name",242],["3dchill.net",[243,244]],["bantincongnghe.net",246],["blogkiienthuc.net",247],["chodansinh.net",251],["daominhha.net",252],["dongphim3s.net",[253,254]],["bichill.one",254],["dongchill.tv",254],["gamenoob.net",255],["thichxemphim1.net",[257,282]],["baoxaydung.com.vn",257],["oj.husc.edu.vn",257],["tienphong.vn",[257,342,416,417]],["toquoc.vn",257],["gockhuat.net",259],["gocphimk.net",260],["iphimchilla.net",262],["vn.javbabe.net",263],["ketqua3.net",264],["laptrinhvb.net",266],["linkneverdie.net",267],["mitub.net",272],["phimmoichillg.net",277],["qthang.net",278],["sachmoi.net",279],["zophim.net",281],["phimvietsub.pro",[284,311]],["vietmoz.net",287],["vnexpress.net",289],["vtipster.net",290],["phimbathu.one",298],["phimbom.online",299],["tut4ktream.online",300],["btcvn.org",303],["vn.phym18.org",306],["traderviet.org",307],["xemtivingon.org",308],["keonhacai5.top",[308,317]],["sex.ngonvcl.pro",310],["phim.sex24h.pro",310],["phim.sexabc.pro",310],["tuoi69.pro",312],["filemoon.sx",313],["phim.heo69.top",314],["viet69.tube",318],["buomtv.tv",321],["hhhkungfu.tv",322],["phimdacap.tv",325],["vieclam.tv",[327,328]],["xskt.com.vn",328],["vlxyz.tv",330],["khiphach.vip",333],["2banh.vn",336],["2game.vn",337],["afamily.vn",339],["sport5.vn",339],["m.afamily.vn",340],["autodaily.vn",341],["xehay.vn",[341,437]],["blogtruyen.vn",343],["cafebiz.vn",344],["cafef.vn",345],["ttvn.toquoc.vn",345],["careerlink.vn",346],["chap.vn",347],["24h.com.vn",348],["autopro.com.vn",349],["baohaugiang.com.vn",350],["congan.com.vn",352],["daklak24h.com.vn",353],["dantri.com.vn",354],["ecci.com.vn",355],["fptshop.com.vn",356],["haiquanonline.com.vn",357],["nld.com.vn",358],["tamlinh247.com.vn",359],["tapchikientruc.com.vn",360],["thanhtra.com.vn",361],["thoidai.com.vn",362],["petrotimes.vn",362],["thuongtruong.com.vn",363],["thuysanvietnam.com.vn",364],["trithuc24h.com.vn",365],["voh.com.vn",367],["congluan.vn",[368,369]],["congly.vn",370],["thitruongtaichinhtiente.vn",[370,415]],["danviet.vn",371],["docnhanh.vn",372],["kienthucykhoa.edu.vn",374],["eva.vn",375],["fshare.vn",376],["game24h.vn",377],["game8.vn",378],["gameio.vn",379],["gamek.vn",380],["soha.vn",380],["gametv.vn",381],["genk.vn",383],["giaoducthoidai.vn",384],["vnews.gov.vn",385],["plus.gtv.vn",386],["hoc24.vn",388],["hosocongty.vn",389],["kenh14.vn",390],["kinhtedothi.vn",391],["minhngoc.net.vn",391],["vn-z.vn",391],["lazi.vn",392],["lucloi.vn",393],["muare.vn",394],["myeva.vn",395],["phunumoi.net.vn",397],["nhipcaudautu.vn",397],["nhacdj.vn",398],["nhatrangclub.vn",399],["olug.vn",400],["phapluatplus.vn",401],["qdnd.vn",402],["realty.vn",403],["reatimes.vn",404],["rung.vn",405],["sharecode.vn",407],["softonic.vn",408],["startalk.vn",409],["stockbiz.vn",410],["techrum.vn",411],["thethao247.vn",413],["thethaovanhoa.vn",414],["tinnhanhchungkhoan.vn",417],["tiin.vn",418],["timdaily.vn",419],["tinhte.vn",420],["tintucvietnam.vn",421],["truyenfull.vn",422],["tuyengiao.vn",424],["tvphapluat.vn",425],["v4u.vn",426],["vietfones.vn",427],["vietnamgsm.vn",428],["vietq.vn",431],["viettelstore.vn",432],["voz.vn",433],["vtc.vn",434],["vungoctuan.vn",435],["webthethao.vn",436],["yellowpages.vn",438],["znews.vn",439],["plvb.xyz",443],["truyen18.xyz",445]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["livescore.com",[0]],["msn.com",[0]],["dm.de",[0]],["medium.com",[0]]]);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
