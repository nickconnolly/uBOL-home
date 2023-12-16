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

// ruleset: irn-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = ["a[href^=\"https://arongroups.co/\"],\na[href^=\"https://arongroups.site/\"]",".banner-cafe,\n.center-talgh","div.adv",".col-xs-12.col-md-6.main-sidebar > center,\ncenter:nth-of-type(2)","div.panel:has(> div#collapse_Linkestan),\ndiv[style=\"text-align:right; margin:10px;\"]:has(> a[href=\"http://ads.aftab.cc\"])","[href^=\"/advertisements/\"]",".widget_custom_html.widget.container-wrapper.widget_text",".ads-title,\n.stream-item-above-post.stream-item,\n.stream-item-mag.mag-box",".ads-post",".link-paeen",".adcontainer,\n.enhanced-text-widget.widget_text.vc-widget.widget.w-nt.h-ni,\n.insert-post-ads,\n.widget_better_rss_widget.widget.primary-sidebar-widget.w-t.h-ni,\n.xjehomzgnw","div.container-ads,\ndiv.left-ads",".ads-text-sid,\n.pt-3.text-center.py-2.bg-all-box,\n.text-center.py-3.bg-all-box","#text-25",".main-zxc","#footer_js_d1,\n.banner-container,\n.col-sm-3 > .block > .img:not(:has(a[href*=\"aftabir.com\"]))","#left2","#ads",".yn-bnr","#pos-article-display-66259",".ag-agah",".ads_place,\n.app_introduce","#toshare-dl-link",".announce,\n.dsp-ad,\n.promote-puls,\ndiv[type=\"aparat\"]:has(> .link)",".side-ads",".baner",".header-ad",".top-ad",".mks_ads_widget",".webgardi",".bottom-ad","a[href*=\"nobitex.ir\"]","#kaprila_linktable",".box[class^=\"asan\"],\n.content-box,\n.text-asan,\narticle.post.game:not(:has(.button, .post-cat))",".right-sidebar > p > a > img[title=\"رپورتاژ\"]",".advRemove,\n.click1000_allcontent,\n.webgardi_main > #txtadv5 > a[href*=\"asriran.com/fa/ads/redirect/\"]","figure.size-full.wp-block-image","aside > div.sec_right > div.menu_box > div.margin > ul > li:has(> a[href*=\"bargozideha.com/reportage/\"]),\ndiv[style]:has(> iframe[src=\"/ddd.html\"])",".alert-dismissible,\ndiv.text-center.col-md-3 > .paddingAll10.panel-success.panel","#middlead",".medicaldirectory-sidebar:nth-of-type(5) > .claims.sidebar-content > .cbp-l-project-details-title > span",".pix_of_day,\ndiv[style=\"margin-top:4px;overflow:hidden;\"],\ndiv[style=\"margin-top:5px;margin-bottom:3px; overflow:hidden;\"]","#bil_fix_top_pc,\n#headerbar,\n.c-ads-banner,\n.content-slider,\n.countclick,\n.hamsan-container,\n.m-banner-r,\ndiv[class^=\"pcfadv\"]",".ads_link8,\n.blog-home-ads-blog,\n.blog_center_bar > center > a[href*=\"eramblog.com/action/static_ads\"],\n.hamsandiv",".col-md-3 > .panel > .tarh-forosh,\n.col-md-3 > .panel > center,\n.leftads",".parent_txt_adv_container2","figcaption","#custom_html-51",".mtn-ads-content-sticky,\nimg[alt=\"ad banner\"]",".widget_custom_html.widget.primary-sidebar-widget.w-t.h-ni.widget_text",".widget_text.widget.primary-sidebar-widget.w-t.h-i","[href*=\"/banners/click/\"]",".weblink",".bd-adsbar,\n.delta-content-ads,\n.delta-top-content-ads",".digiBannerArea,\n.homeMainBanner,\n.todaysNewsList__sidebar",".mb-4:has(.mr-auto.text-caption.ai-center),\n.radius-large-lg:has([class*=\"SponsoredBrandCarousel\"]),\n[class*=\"ProductContent\"]:has(.mr-auto.text-caption.ai-center)","a:has(> img.ads_pic),\na:has(> img.shbanner),\na[href=\"https://farsisaz.com/\"][target=\"_blank\"][rel=\"noopener\"],\ndiv.ADS_wrapper,\ndiv.shbanner_cover,\ndiv.widget_content:has(> ul.blog_list)","#home-2-col > .bs-vc-wrapper > .vc_col-sm-3.vc_column_container.bs-vc-column.wpb_column,\n.widget_nav_menu.widget.primary-sidebar-widget.w-t.h-ni","[href^=\"/advertisements/triggered/\"]",".zxc",".custom-ad-one,\n.zxc-m","aside.lefts_sides:has(> div.txt_letfs > ul.ads_txtcv),\ndiv.adsfix_box:has(> div[id^=\"mediaad\"])","div.popup-ads","div.ads","a[href^=\"https://zaya.io/\"]",".ads","div.medicaldirectory-sidebar:nth-of-type(6) > .claims.sidebar-content > .cbp-l-project-details-title > span",".sidebar-home:has(.ads_0)",".advs-wrapper",".backlink,\n.shopping_list,\n.talfighat-BS,\n.tiny_linky_boxes,\n[href*=\"/advertisements/triggered/\"]","div.chatlist-parts > div.chatlist-top > ul.ads-dialog-box",".adv",".adv-ttl","div.textwidget > div.ads","#middle a > img[title*=\"تبلیغات\"],\n#sidebar a:not([href*=\"elmevarzesh.com/\"]) > img[width=\"300\"][height=\"200\"],\n.col-md-8 a:not([href*=\"elmevarzesh.com/\"]) > img[width=\"728\"][height=\"90\"]",".stream-item-widget",".widget-ad-image","a[href^=\"https://eramblog.com/direct_link/?ads=\"][rel=\"nofollow\"][target=\"_blank\"],\ndiv.blog-home-ads-blog,\ndiv.main_content[style=\"border-radius:10px;\"]:has(> div[style=\"padding: 10px; text-align:center; font-size:13px;\"]),\ndiv[class^=\"ads_link\"]",".centernews_soc,\n.left_pos_mod > .l_box.imgs,\n.newstopads,\n.r_box:has(p)",".text-ads","#ynpos-10831,\n.ezp30-ads,\n.fix-ez",".advertisement",".kpl_linktable",".clearfix.boxed-content-wrapper img[alt=\"Advertising\"],\n.top-banner-ads",".news_slider_sec2,\n.webgardi_adv",".header-adv,\n.others_media,\n.sticky_notify2,\n.zxc-stik",".txt-adv-box",".zxc-visible-fixed",".ads-dashed-banner,\n.cas-pubg.cas,\n.gtm-farsroid-ads,\n.site-middle-banners,\n.swiper-wrapper > .swiper-slide:not(:has(a[href*=\"farsroid.com/\"]))",".download-link-ads-below",".inline-news-box,\n.talfighat-row,\n.ul-talfigh-con",".results__a","div.ads-content","section.player-container div.filimo-logo-filimo","div.ad-cat:not(div.ad-custom-size)","#fix-advertise,\n#image-advertise,\n#top-banners,\n.content-ads",".bottom-ads,\n.card-ads",".tads","#ads-main-home,\n.ads-img","div.post:has(a[href^=\"https://www.tarhdokan.com/\"]),\nul#tabligh,\nul#tablighc",".sticky-ad","div.box:has(> div.ads),\ndiv.container > div.ads","aside.sidebar .widget:has(a.external)",".primary-sidebar-widget:has(a[rel*=\"sponsored\"])",".secondary-sidebar-widget:has(a[rel*=\"sponsored\"])","div[class^=\"cr-banner-\"]",".q2am-page-advert","div.CenterBlock:has(> div.Tadsb2)","#floating-region-zone,\n.ads-div-block",".sin-part","#banners-position-14,\n#slideshow[class=\"rounded\"]",".ads-box","#NR-Ads,\n.listing-item-blog:has(a[href*=\"/author/ads/\"])","script[id^=\"wccp_\"]",".col-xs-36.col-sm-4.col-md-4.col-lg-4,\n.hidden-xs.col-sm-4.col-md-4.col-lg-4","#block-3,\n#block-4,\n.stream-item-top-wrapper,\nli:has([href^=\"https://jalebamooz.com/reportage/\"])",".widget_custom_html,\naside:nth-of-type(2)","#table10,\n#table10 > tbody > tr > .textBoldColor,\n#table4 > tbody > tr > td > table > tbody > tr > td > center,\n.bgleftmenu > div > div,\ntable#table9.bgtable:nth-of-type(13)","div.white-block:nth-of-type(2)","[href^=\"/nf/sponsor/\"]","[class^=\"zxc\"]",".sticky_notify",".news-bottom-link","#ads_f,\n#banners_120_top_1,\n#block-block-120,\n.track-click",".peyvand,\n[href*=\"/advertisements/\"]",".inline_ads",".ads.box","#box358,\n#top-ad",".zxc_home",".mrauto,\n.position-g5",".mobile-fixed-banner","a[href^=\"/advertisements/triggered/\"]",".ads-placment",".advertisement-in-topic,\n.banner-wrapper,\n.bannercontainer,\n.homepage-content",".msg_ad_explain,\n.msg_ad_pictorial,\n.msg_ad_subject","a[href^=\"https://bit.ly/\"]","#custom_html-4,\n#text-31,\n#text-35,\n.adbar","div.ads_fix_top,\ndiv.text_ads_box","#text-13,\n.adwrap-widget","#ads-container",".adsfix_box",".alert-new,\n.text-center.mt-3.py-3.bg-all-box",".mdiaad,\nsection.sidebox:nth-of-type(4)",".widget_text.widget",".sponsors","#sponsor_wrapper,\ndiv.banner_v",".srjtbaungo","section.adBox:has(> div.row > div > a[rel$=\"sponsored\"])","section.ads","div#Abox-mobo","#ads__bottom_of_the_header",".news-col-2 .related-news",".opanel-ads",".ads-banner","#advertise,\n#promotion",".Dr.D2.Cu.o",".stream-item-above-post","#text-5",".banner_sidebar,\n.box-ads-single,\n.box-custom.box_other,\ndiv.box-tag-single:nth-of-type(2)","bloglinkdumpblock,\nbloglinksblock","div.all_adv_mrg,\ndiv.box:has(img[alt=\"icon_ads\"]),\ndiv.fixed_box_adv,\ndiv.padding_news_right_adv","div#forum-native-ad,\ndiv.ad-wrapper,\ndiv.up-ad:has(div.ad-wrapper)",".advertorial",".ADS_header_all","#header-ad1,\n#p30konkor-ads-p a[rel=\"follow\"],\n#p30konkor-ads-p div:has(p > a[rel]):not(:has(a[href*=\"p30konkor.com\"]))",".post-ads",".sidebar-ads",".ad_global_header","#ad_global_below_navbar","#ads-120,\n.block-ads,\n.block-ads2,\n.block-ads4","div[class^=\"topadvers\"]",".adv_img,\n.agahi-view",".widget_whmcs_ads_widget.widget,\n.wpb_content_element.sidebar.wpb_widgetised_column",".topbanners",".multi-ads-container","div.tab.sidebar-box:nth-of-type(2) > .sidebar-box-content,\ndiv.tab.sidebar-box:nth-of-type(2) > h3",".ads_box",".aa-container",".download-dialog","div.advertop",".ads.big_post,\n.cat","#block-block-22.ads",".bannermiddle,\n.mybannerimg",".adv-box",".adloc-is-banner,\n.widget_better-ads",".advertising","#middle-ads",".fara-main","a[href=\"https://academy-eris.com/\"],\na[href=\"https://sahamir-ac.com/\"],\na[href=\"https://sarafer.com/\"],\na[href=\"https://veriacco.com/\"]","#header-banner-4,\n#rt-backlinks-pos,\n.mb-3.top-1.sticky-top,\n.w-100.justify-content-center.d-flex","div.adsLoader",".bannersHome","#header-ads",".bannergroup",".ads2",".ush_image_2",".GSAdsLR,\n.OpenTable5",".adv_top,\ndiv[style=\"margin-bottom:10px\"]:has(> .txt_adv_content)",".bannergroupsam-full-width",".cyt-ad-content,\n.homebar a[href=\"https://setare.com/%d8%aa%d8%a8%d9%84%db%8c%d8%ba%d8%a7%d8%aa/\"] > img,\n.pb0.stickyscroll_widget","#block-views-ad-link-block-2,\n#block-views-shabake2-clone-of-ad-link-block,\n.field-name-ads-under-summery,\n.popup-box-wrapper","#g-top,\n.ads2col,\n.flexbanneritem",".qxsbniv",".header_adv",".side_adv",".top_adv",".b_box","#inline_agahi_z0,\n.generalBoxStyle[data-element-name=\"FRONT_M\"],\n.generalBoxStyle[data-element-name=\"SHARE_NEWS\"],\n.mauto_div,\n.mnb_wrapper,\n.noagahi.otherMedia",".banner9,\n.bannerLarge","#PopAlert,\n#RightPan,\n#advBan,\n.AdvertiseD2Ban,\n.DTOPBan,\n.adv_text",".ads-link",".middle-ads",".adss,\n.container_ads","div.mask",".adcbar",".link-ads",".ad-item,\n.ads-footer",".baners,\n.left-ads",".right-ads",".col-xs-12 > article:has(a[href*=\"/category/pr/\"])",".tab-cpc,\n.tab-dpd-post,\ndiv[class^=\"ads\"]",".full-width-tabligh,\n.home-web-surfing,\n.tj-ad-box,\n.tj-ad-wrapper,\ndiv.widget.aside-widget:nth-of-type(5) > .section-title--dotted.section-title > .section-title__h",".rmp-ad-container",".slider-banners.partial,\n.sponsor-link",".ads-box-green,\n.ads-box-red",".light-text.footer-widgets","div.shop-card.seller-element:has(> div.shop-info > div#vijhe_small)","section#downloadbox > div#indicatorr","div#popupModal,\ndiv.modal-backdrop","div.upbu","a[href^=\"/url/\"][target=\"_blank\"]:has(> img)","div.col-ms-36 > section:has(div.txt_adv_content),\ndiv.row > section:has(a[href*=\"/ads/redirect/\"]),\ndiv.style-text-adv",".zxc_matni",".zxc_top,\ndiv.mnb:has(a[href^=\"/advertisements/triggered/\"])",".adbox:not(.adbar),\n.left-side-ad-col",".tabligh","div.colRight div[class^=\"adsBox\"],\ndiv.topAds","#text-12,\n#text-24",".top-ads",".ads-block,\n.row.fixed-post.post,\n.sidebar-textads","#BannerHome,\n.BannerA,\n.DetailArea > .AdAreaDetail,\ndiv[id^=\"BehinAva\"]","#sidebar-alt","div[id^=\"tabligh\"]",".no-mobile.out-container:nth-of-type(3)",".adsside,\n.elementor-element-d41b3d1,\n.size-large.attachment-large","#site-footer .col-sm-4:has(a[rel=\"noopener\"][target=\"_blank\"]),\n.eif:not(:has(a[href*=\"farnet.io\"]))","div[class*=\"blockByVisit_blockByVisit__container\"],\ndiv[class*=\"company_company__ads--ab\"],\ndiv[class^=\"RequireAuth_mainBox\"]","div.feedAdsBox,\ndiv.js-userLogin-popup","div.header-banners",".col-md-offset-6.col-md-3,\n.kanban-col",".khp-site-info p,\n.left.col-md-4,\n.skip-container p:not(:has(a[href*=\"1da.ir\"])):has(img)",".phoenixad,\na[rel=\"dofollow\"]",".e3lan","#text-2,\n#text-3,\n#text-4,\n#text-6,\n#text-7",".herald-ad:not(:has(a[href*=\"kurdsoft\"])):not(:has(a[href*=\"7ganj.ir\"])),\n.meta-ad",".links_footer",".main22,\n.up_submit > span","x",".adv_l,\n.adv_r_news2",".co-ads","#popular,\n.lolo",".tab_news > a[href*=\"gameup.ir\"]","div#ZAD","div.ml-4.space-right-delt > div.bg-all-box:has(> div.yn-bnr)",".app_ads_banner",".ads-side",".asiatech,\n[id^=\"linkcat\"] > ul > li:not(:has(a[href*=\"apktops.ir\"]))","a[onclick^=\"increase_ad_click_count\"]",".banner",".abox","#featured > .owl-stage-outer","div.all_adv,\ndiv.others_web,\ndiv.zxc,\nsection.reportage","#ad-hoc-2,\n.bdaia-e3-container,\n.widget_text.bdaia-widget.widget",".stream-item","#iddivtoplevelscript,\ndiv[style]:nth-of-type(3)",".ads-margin-bot,\n[href*=\"bourse24.ir/ads/click/\"]",".linkbox",".block-simpleads",".clads-inner","script[id^=\"wpcp_\"]","#ADbox-1,\n.ads-sidebar,\n.ads-sticky",".after-post-ads",".Js_Div5",".adsboxfix,\ndiv[style*=\"position: fixed; right: 0px; bottom: 0px;\"]:has(> .close-fixedSd)","div[id^=\"ads\"]","a[rel=\"nofollow\"]:has(> img[title=\"تبلیغات\"])","div#kaprila_linktable,\ndiv#mediaad-vFkp","#header-bar,\n.sidebar-digiads","div[itemtype=\"https://schema.org/WPAdBlock\"]",".index-adstop > a:not([href*=\"dlrozaneh.ir\"])","div.textwidget:has(> div.parsi-ads),\ndiv.top-full-ads",".d1yekta,\n[id^=\"pos-article-display-\"],\nsection li:not(:has([href^=\"https://download1music.ir/\"]))","#faradars,\n#page-content > .wpb_row:has(a[href*=\"faradars.org\"])",".ads-fix-post,\n.ads-matni",".advertise-place,\n.province-advertise,\nmain > div:has([href*=\"/advertising/\"])",".all_ads","#ContentPlaceHolder1_divBanner","[class*=\"text_ads\"]",".emojo-ad,\n.pzbkcvuqrn","div.avdDiv",".news-web",".header-mdh,\n.pull-right.zm-post-lay-a-area","aside.ad-mobile-none,\ndiv.ads-native","div#ADbox-1,\ndiv#phon","div.col-md-12 > div.card:has(> a > img[src$=\".gif\"])",".custom,\n.customads",".FixedAdvertising,\n.left.sidebar_widget:nth-of-type(3),\n.left_ads,\n.right_ads,\n.top_ads","a[href=\"https://maktabsharif.ir/\"]",".post-ad-box","a[target=\"_blank\"]:has(> img[src*=\"/Gif/\"][src$=\".gif\"]),\na[target=\"_blank\"]:has(> img[src*=\"/files/\"][src$=\".gif\"])","#next1-231,\n.asd_top,\n.fl.block_right > div.box_sh.ads_2","div[class*=\"linkads\"]",".sidebar_tabliq,\n[href^=\"/ads/\"]",".doctor-ads-item","#header_ad,\n.sb_ad","div.t3-contentwindows1:has(a[target=\"_blank\"] > img[src$=\".gif\"])",".banner468,\n.tab_box","[href^=\"/redirect/ads/\"]","div[data-testid=\"more-Button-TestId\"],\ndiv[data-testid^=\"filterItem_tab\"],\ndiv[style=\"display: flex; flex-flow: column nowrap; justify-content: center; align-items: center;\"]:has(img[alt=\"Advertisement\"]),\ndiv[tabindex]:has(div[data-testid^=\"specialServices\"])","a[href^=\"https://www.iranjib.ir/ra.php?adid=\"]:not([title=\"اینستاگرام ایران جیب\"]),\ndiv[id^=\"pos-article-display-\"][style=\"min-height:400px\"]","div.owl-item:has(> li[id^=\"ad\"]),\nsection.box.ads",".advertise_default",".c-forceToLogin__message.o-box,\n.c-forceToLogin__overlay",".im-header-ad","div.main > div.box:has(> p > a[href=\"http://botsaz.com/\"])","#textads-contents,\n.ads-containter","#ads-container > .list-thumbs.title-only.list.box,\n#header-ad,\n.bg-gray-links.box",".ads_bt_box,\n.ads_singles_post,\n.top_img_ads",".type-sticky.status-publish",".ads-widget",".down-box-ads,\n.down-box1",".singleads","[id^=\"ad\"]","a[href=\"http://www.asalchat.skin\"],\na[href=\"https://www.tarhpardaz.ir\"]","div.ad-wrap,\ndiv.widget-ad-image","#bottombanner,\n.apnl,\n.b","#sezfvg-2,\n.sezfvg,\n.sticky-column:not(:has(a[href*=\"modirnameh.ir\"]))",".txt-ads-sl",".banneritem:has(a[href*=\"/banners/click/\"]),\n.eb-inst","div.e3lan,\ndiv.widget#text-15","div[class^=\"yektabanner\"],\ndiv[style]:has(> div.yn-bnr)",".txt-box:has(> .txt_adv_content)","div.is_ads","div.ads_posts",".adspanel",".adsblockpop,\n.dtnoppu,\nsection.banners,\nsection.textAds","div#footer-wrapper > div.copyright-wrapper > div#copyright > *:not(p),\ndiv.basic-list-links,\ndiv.fixed-post:has(a[href*=\"mtm_campaign=p30download\"]),\ndiv.sidebar-tabliq,\ndiv.tabliq-468,\ndiv.text-tab",".body_wrapper > div:nth-of-type(4)","div.block-simpleads","#custom_html-108,\n.stream-item-top,\n.widget_custom_html:has(img[src*=\".gif\"])","a[href*=\"&m_name=ads\"]",".dlbtnhidden",".ad--content","div.ssad",".ytn-hamsan",".c-advertisement",".banner-box",".center.body_c > div > div,\n.center.body_c > div:nth-of-type(2),\n.txtad","#ad7_40,\n.footer-ads","[href*=\"/fa/ads/\"]",".left_banner,\n.links","#arasideadvertising","section.sidebar-left-item:has(> div.custom-html-widget > p > a[target=\"_blank\"][rel=\"noopener\"] > img)","a[class^=\"skinak-text-ads\"],\narticle.morders,\ndiv.dadsd,\ndiv.footer-block-1:has(> a[class^=\"text-ads\"]),\ndiv.left-body:has(> div.text div.text-ads),\ndiv.right-body:has(> div.text div.adsr)",".heading-ads,\n.sidebar-right > div.box:nth-of-type(1)",".adv_mobile",".textwidget,\naside:nth-of-type(5)","a[class^=\"text-ads-\"],\ndiv.backoritybase,\np:has(> a[href^=\"https://shirazsocial.com\"])","#cycle_adv_tabnak","section#LeftPanel > div.leftads","[class^=\"adv\"]:not(.adv8, .adv19)","div.col3:has(div.txt_adv_content)",".inner-wrapper-sticky > .mb-3,\n.sidebar-banners",".type-resource-image","div.bnr-ads",".side1:has(a[title][rel=\"noopener noreferrer\"])",".advertisment","#fpc-banner-top,\n#top-right-ad,\n.content-container:has(.ad-reportage),\n.square-ad:not(:has(#featured-posts))",".full2.box.right,\ndiv.sideheader2:nth-of-type(3)",".ad-link",".footer-back-link,\n.free_ad_con,\n.logo_full_view","a[href*=\"utm_source=uptrack\"]","#tabligh",".textads",".ads120,\n.ads468,\n.fixpost,\n.gsh,\n.headads","div#ads__start_of_the_post","a.textad,\na[href^=\"/ad/\"][target=\"_blank\"]","#kaprila_linktable_left,\n.left-block-top","#slider-box,\n.mortabet-links,\ndiv.row:nth-of-type(2) > .col-xs-12 > .category-side-ads",".advertisements",".home-ads",".sideads",".main-top-ads,\n.wide-ad-row,\ndiv.a1-banner","div.Product-BannerHeader,\ndiv.price-sticky,\ndiv[class^=\"AdvertisingParser\"]",".flex-ad-body","#ads-sticky","#ads-text",".box-title,\n.moreads.widget_text,\n.pm",".mom_custom_text.widget,\n.widget_custom_html.widget.widget_text","div.ads-row-left","#ad14,\n.ad-cell,\n.widget_text",".content_item:has(a[href*=\"/category/ads/\"]),\n.sidebar-area .image","article.fixedadv:not(:has(> div.fixedadvcontent > a[href=\"https://www.youtube.com/c/Par30Game\"])),\ndiv.adbox,\nsection.sidebar-box-shop",".my-single-t-p",".dailylink,\nbody > div > font,\ncenter > center > center > center,\ncenter:nth-of-type(2) > center,\ndiv > font > font > .menuheader,\ndiv > font > font > font > p",".adv-cnt,\n.home-zxc,\n.padding-bottom-8,\n.sanjagh,\n.side_txt_zxc,\n.zxc-header-zxc,\n.zxc-padding-custom","#box_1398,\n#popbox-blackout",".AdsContainer",".special_links,\n.text_adds_container",".zxc_news",".featured_news",".zxc_left",".ads-full-banner-img",".vebgardi",".jmb_banner","div.banner:has(> a > img)",".inline-4d",".adrightPanel,\n.container55,\narticle > .box > a[href*=\"salampnu.com\"]",".vfozk",".aligncenter.wp-image-9273.size-full,\n.size-full.attachment-full",".Topadver",".behtarinseo",".myside.right-sidebar",".advertise,\n.bottom-left-ad,\n.bottom-right-ad",".adsBanner,\n.two-ad-banners,\n.widget_media_image.widget.container-wrapper","div.zoomtech-banner","div.back_links","#titr-box,\n.maincontent > center,\ntbody","#sidebar_ad,\n.b-hd,\n.hidden-xs.hidden-sm.block,\n.hideOnMobile",".new-banner","div.app_ads_banner",".abvertise > .container > a:not(a[href=\"https://t.me/filmha_top\"])",".tabliq"];

const hostnamesMap = new Map([["*",0],["cannews.aero",1],["delta3da.cam",2],["myhastidl.cam",3],["aftab.cc",4],["mojnews.co",5],["eghtesadnews.com",[5,59,68]],["fartaknews.com",[5,90]],["moroornews.com",[5,59,86]],["parsnews.com",[5,171]],["ilna.ir",[5,59]],["tinn.ir",[5,373]],["borna.news",[5,29,204]],["tourismonline.co",[6,7]],["koolakmag.ir",6],["1abzar.com",[8,9]],["gadgetnews.net",[8,400]],["1pezeshk.com",10],["7sobh.com",11],["abipic.com",12],["mihandownload.com",[12,141]],["accpress.com",13],["afkarnews.com",14],["aftabir.com",15],["akharinnews.com",[16,17]],["harmonydl.us",[17,432]],["alamto.com",[18,19]],["power-music.ir",[18,354]],["androidgozar.com",20],["androidha.com",21],["androidsharp.com",22],["aparat.com",[23,24]],["mihanvideo.com",24],["applicationha.com",25],["arga-mag.com",[26,27,28,29,30]],["icivil.ir",26],["plus.ir",27],["beautyhome.ir",[28,272]],["arzcenter.com",31],["asandl.com",[32,33]],["alldriver.ir",[32,260]],["cafejozve.ir",32],["khoshamoz.ir",32],["20file.org",[32,417]],["asemooni.com",34],["asriran.com",35],["avapedia.com",36],["bargozideha.com",37],["barsadic.com",38],["bazimag.com",39],["brain.be-teb.com",40],["benawa.com",41],["beytoote.com",42],["blogsazan.com",43],["boyernews.com",44],["bultannews.com",45],["charbzaban.com",46],["chetor.com",47],["chibepoosham.com",48],["delbaraneh.com",[49,50]],["rouzegar.com",[50,184]],["delgarm.com",[51,52]],["payamekhabar.ir",52],["deltapayam.com",53],["digiato.com",54],["digikala.com",55],["dlfox.com",56],["doctorwp.com",57],["donya-e-eqtesad.com",[58,59,60]],["ecoiran.com",[58,59]],["eghtesadonline.com",[59,69]],["etemadonline.com",59],["fardanews.com",[59,85,86,87]],["khabarerooz.com",[59,122]],["khabarfoori.com",[59,124]],["khanefootball.com",[59,128,129]],["mojnews.com",[59,86]],["mosalasonline.com",[59,87,121,151]],["sharghdaily.com",[59,128,203]],["shayanews.com",[59,204,205]],["shomavaeghtesad.com",[59,71]],["varandaz.com",[59,87,232,233]],["rokna.net",[59,405]],["55online.news",[59,128,232,409,410]],["sobhtazeh.news",[59,413]],["doostihaa.com",61],["downloadha.com",[62,63]],["uploadboy.com",[63,228]],["drdmag.com",64],["e-teb.com",65],["mehrnews.com",[65,139]],["mer30download.com",[65,140]],["salameno.com",65],["shabakeh-mag.com",[65,200]],["tasnimnews.com",[65,216]],["vipofilm.com",[65,235]],["4tools.ir",65],["imna.ir",[65,139,317]],["khabaronline.ir",[65,317,326]],["shahraranews.ir",[65,359]],["shmi.ir",[65,360]],["androidina.net",[65,395,396]],["tebyan.net",65],["ravan.e-teb.com",66],["eghtesademeli.com",67],["web.eitaa.com",70],["ejiga.com",[71,72]],["elmefarda.com",73],["elmevarzesh.com",74],["ensafnews.com",[75,76]],["netpaak.com",[75,156,157]],["bikarsho.ir",[75,273]],["wikihoax.org",[75,76,424]],["mag.khanoumi.com",76],["eramblog.com",77],["etelanews.com",[78,79]],["gahar.ir",[79,308]],["mihand.ir",79],["ezp30.com",80],["faaltarin.com",81],["faceit.ir",[81,301]],["farachart.com",[82,83]],["androidzoom.ir",[82,252]],["fararu.com",84],["farsroid.com",[88,89]],["p30afzar.com",[89,163]],["fastdic.com",91],["fileboro.com",92],["filimo.com",93],["footofan.com",94],["gamefa.com",95],["gharbtv.com",96],["ghatreh.com",97],["gooyait.com",98],["graphiran.com",99],["hamgardy.com",100],["harfetaze.com",101],["honarfardi.com",102],["idehalmag.com",103],["idehaltech.com",104],["imvbox.com",105],["irancircle.com",106],["irannaz.com",107],["iranstar.com",108],["itarfand.com",109],["itbazar.com",110],["itgheymat.com",111],["itresan.com",112],["jafekri.com",113],["jahannews.com",114],["jalebamooz.com",115],["jesarat.com",116],["k2cod.com",117],["ketabesabz.com",118],["khabarban.com",119],["khabareazad.com",[120,121]],["khabarfarsi.com",123],["khabarpu.com",125],["khabarvarzeshi.com",[126,127]],["salamatnews.com",126],["hamshahrionline.ir",126],["irna.ir",126],["gostaresh.news",[128,409,411]],["khodrobank.com",130],["khodrotak.com",131],["kilipo.com",132],["kojaro.com",133],["lamtakam.com",134],["learnparsi.com",135],["lenzak.com",136],["magbazi.com",137],["majalesalamat.com",138],["mihanfal.com",142],["mihangame.com",143],["mihanmarket.com",144],["news.mihanmarket.com",145],["minevisam.com",146],["miniroid.com",[147,148]],["p30day.ir",[148,345]],["mobomod.com",149],["moderndl.com",150],["movienama.com",152],["mybia4music.com",153],["namayesh.com",154],["namnak.com",155],["20tayi.ir",[157,252,253]],["niksalehi.com",158],["niloblog.com",159],["niniban.com",160],["ninisite.com",161],["nodud.com",162],["p30konkor.com",164],["p30world.com",[165,166]],["zendegionline.ir",[166,390]],["forum.p30world.com",[167,168]],["parsipet.ir",[167,347]],["parsfootball.com",169],["parsnaz.com",170],["parstools.com",[172,173]],["taktemp.com",[173,215]],["peivast.com",174],["persiangfx.com",175],["persianv.com",176],["radiojavan-iran.com",[176,180]],["picofile.com",177],["podbean.com",178],["prozhedownload.com",179],["rajanews.com",181],["rayamag.com",182],["roozno.com",183],["rozblog.com",[185,186]],["sid.ir",[185,361]],["rozmusic.com",187],["sabtta.com",188],["saednews.com",189],["safarmarket.com",190],["sakhtafzar.com",191],["sakhtafzarmag.com",[192,193]],["seemorgh.com",[193,198]],["sargarme.com",194],["sariasan.com",195],["sarzamindownload.com",196],["sedayiran.com",197],["setare.com",199],["shahrsakhtafzar.com",201],["shanbemag.com",202],["shereno.com",206],["shomanews.com",207],["simcart.com",208],["softgozar.com",209],["sourceiran.com",[210,211]],["dolatebahar.ir",210],["tak3da.com",212],["takhfifan.com",213],["takhfife.com",214],["techfars.com",[217,218]],["varzesh3.com",[218,234]],["technews-iran.com",219],["techrato.com",220],["tejaratnews.com",221],["telewebion.com",222],["tiwall.com",223],["top2download.com",224],["topnaz.com",225],["torob.com",226],["trainbit.com",227],["upmusics.com",229],["vajehyab.com",230],["vananews.com",231],["webgozar.com",236],["wikisemnan.com",237],["yasdl.com",[238,239]],["downloadsoftware.ir",[238,293]],["zibamoon.com",240],["icoff.ee",241],["konkur.in",242],["shirazsong.in",243],["konkur.info",244],["farnet.io",245],["rasm.io",246],["virgool.io",247],["zaya.io",248],["1000site.ir",249],["1da.ir",250],["1ea.ir",251],["7ganj.ir",254],["8pic.ir",[255,256]],["imgurl.ir",[255,316]],["uupload.ir",[255,382]],["abadis.ir",257],["aftabnews.ir",258],["aftabyazdonline.ir",259],["anaj.ir",261],["androidify.ir",[262,263]],["moddinggame.ir",262],["androidparsi.ir",264],["anzalweb.ir",265],["apktops.ir",266],["appreview.ir",267],["b2n.ir",[268,269]],["timecity.ir",[268,372]],["barato.ir",270],["bartarinha.ir",271],["softsaaz.ir",273],["youc.ir",273],["bils.ir",274],["bourse24.ir",275],["buzdid.ir",276],["citna.ir",277],["click.ir",278],["coffeeapps.ir",[279,280]],["sclinic.ir",279],["computeruser.ir",281],["dabi.ir",282],["dailymobile.ir",283],["daneshchi.ir",284],["darkroid.ir",285],["dehlinks.ir",286],["digiboy.ir",287],["digiro.ir",288],["dlrozaneh.ir",289],["download.ir",290],["download1music.ir",291],["downloadly.ir",292],["econews.ir",294],["eghtesadepooya.ir",295],["rastannews.ir",295],["emalls.ir",296],["emeil.ir",297],["emojo.ir",298],["enama.ir",299],["entekhab.ir",300],["farsnews.ir",302],["fastmobile.ir",303],["forsatnet.ir",304],["freedownload.ir",305],["freescript.ir",306],["ftdigital.ir",307],["games4online.ir",309],["gamesib.ir",310],["getandroid.ir",311],["gsm.ir",312],["hidoctor.ir",313],["imemar.icivil.ir",314],["iica.ir",315],["my.irancell.ir",318],["iranjib.ir",319],["isna.ir",320],["itna.ir",321],["jobinja.ir",322],["kafebook.ir",323],["kalakamuz.ir",324],["khaandaniha.ir",325],["khodropluss.ir",327],["languagedownload.ir",328],["lastsecond.ir",329],["listen2music.ir",330],["loudmusic.ir",331],["mashreghnews.ir",332],["maxstars.ir",333],["mediat.ir",334],["mobile.ir",335],["modirnameh.ir",336],["montiego.ir",337],["moviemag.ir",338],["musicdays.ir",339],["musicdel.ir",340],["nabzefanavari.ir",341],["najiremix.ir",342],["nex11music.ir",343],["omidnamehnews.ir",344],["p30download.ir",346],["payju.ir",348],["pedal.ir",349],["pgnews.ir",350],["phonroid.ir",351],["plaza.ir",352],["pluginyab.ir",353],["rahnamato.ir",355],["rond.ir",356],["rozup.ir",357],["sena.ir",358],["silasdl.ir",362],["skinak.ir",363],["smusic.ir",364],["snn.ir",365],["sornamusic.ir",366],["subf2m.ir",367],["tabnak.ir",368],["taknaz.ir",369],["tehranrasaneh.ir",370],["tejaratemrouz.ir",371],["iranart.news",373],["tinroid.ir",374],["top90.ir",375],["topseda.ir",376],["toranji.ir",377],["up44.ir",378],["uploadkon.ir",379],["uplod.ir",380],["uptrack.ir",381],["varoone.ir",[383,384]],["ariapix.net",383],["tarfandha.org",[383,421]],["my-film.pw",[383,427]],["vgdl.ir",385],["vista.ir",386],["webgoo.ir",387],["webii.ir",388],["yun.ir",389],["zohur12.ir",391],["zoomg.ir",392],["zoomit.ir",393],["filmino.me",394],["salamdl.rip",[396,428]],["cooldl.net",397],["dlbook.net",398],["footballi.net",399],["jeyran.net",401],["par30games.net",402],["parsroid.net",403],["pichak.net",404],["takblog.net",406],["yektablog.net",406],["article.tebyan.net",407],["uplooder.net",408],["mobo.news",412],["techna.news",414],["skyroom.online",415],["titr.online",416],["bazdeh.org",418],["gold-team.org",419],["talab.org",420],["texahang.org",422],["tgju.org",423],["zoomtech.org",425],["ana.press",426],["oila.tj",429],["artmusics.top",430],["filmha.top",431]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["arongroups.site",[0]],["arongroups.co",[0]]]);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
