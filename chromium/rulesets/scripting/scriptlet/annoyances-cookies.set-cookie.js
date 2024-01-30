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

// ruleset: annoyances-cookies

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_setCookie = function() {

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["taunton_user_consent_submitted","true"],["taunton_user_consent_advertising","false"],["taunton_user_consent_analytics","false"],["cookieconsent_status","allow"],["tachyon-accepted-cookie-notice","true"],["endgame-accept-policy","true"],["cookieChoice","0"],["PostAnalytics","0"],["gdpr-google-analytics","false"],["cookie_policy","true"],["cookieModalAccept","no"],["AcceptFunctionalCookies","true"],["AcceptAnalyticsCookies","false"],["AcceptNonFunctionalCookies","false"],["forced-cookies-modal","2"],["cookiebar","1"],["cookieconsent_status","true"],["longines-cookiesstatus-analytics","false"],["longines-cookiesstatus-functional","false"],["longines-cookiesstatus-necessary","true"],["longines-cookiesstatus-social","false"],["pz_cookie_consent","true"],["_cb","1","","reload","1"],["gatsby-gdpr-google-tagmanager","false"],["consent-status","1"],["HANA-RGPD","accepted"],["cookie-optin","true"],["msg_cookie_CEX","true"],["OptanonAlertBoxClosed","ok"],["OptanonAlertBoxClosed","true"],["cookie-bar","0"],["cookieBannerHidden","true"],["isReadCookiePolicyDNT","No"],["isReadCookiePolicyDNTAa","false"],["coookieaccept","ok"],["consentTrackingVerified","true"],["consent","0"],["allowGetPrivacyInfo","true"],["cookiebanner","0"],["_tv_cookie_consent","y"],["_tv_cookie_choice","1"],["eika_consent_set","true"],["eika_consent_marketing","false"],["ew_cookieconsent","1"],["cookie-agreed","0"],["ew_cookieconsent_optin_b","true"],["ew_cookieconsent_optin_a","true"],["gdpr-agree-cookie","1","","reload","1"],["gdpr-consent-cookie-level3","1"],["gdpr-consent-cookie-level2","1"],["ck-cp","accepted"],["cookieConsent","1"],["gsbbanner","0"],["__adblocker","false","","reload","1"],["cookies_marketing_ok","false"],["cookies_ok","true"],["acceptCookies","0"],["marketingCookies","false"],["CookieLaw_statistik 0"],["CookieLaw_komfort","0"],["CookieLaw_personalisierung","0"],["CookieLaw","on"],["wtr_cookie_consent","1"],["wtr_cookies_advertising","0"],["wtr_cookies_functional","0"],["wtr_cookies_analytics","0"],["allowTrackingCookiesKvK","0"],["cookieLevelCodeKVK","1"],["allowAnalyticsCookiesKvK","0"],["macfarlanes-necessary-cookies","accepted"],["TC_PRIVACY_CENTER","0"],["AllowCookies","false","","reload","1"],["consented","false"],["cookie_tou","1","","reload","1"],["blukit_novo","true"],["cr","true"],["gdpr_check_cookie","accepted","","reload","1"],["accept-cookies","accepted"],["dvag_cookies2023","1"],["consent_cookie","1"],["permissionExperience","false"],["permissionPerformance","false"],["permissionMarketing","false"],["consent_analytics","false"],["consent_received","true"],["cookieModal","false"],["user-accepted-AEPD-cookies","1"],["personalization-cookies-consent","0","","reload","1"],["analitics-cookies-consent","0"],["sscm_consent_widget","1"],["texthelp_cookie_consent_in_eu","0"],["texthelp_cookie_consent","yes"],["nc_cookies","accepted"],["nc_analytics","rejected"],["nc_marketing","rejected"],[".AspNet.Consent","no","","reload","1"],["user_gave_consent","1"],["user_gave_consent_new","1"],["rt-cb-approve","true"],["CookieLayerDismissed","true"],["RODOclosed","true"],["cookieDeclined","1"],["cookieModal","true"],["oph-mandatory-cookies-accepted","true"],["dw_is_new_consent","true"],["accept_political","1"],["konicaminolta.us","1"],["cookiesAnalyticsApproved","0"],["hasConfiguredCookies","1"],["cookiesPubliApproved","0"],["cookieAuth","1"],["kscookies","true"],["cookie-policy","true"],["cookie-use-accept","false"],["ga-disable-UA-xxxxxxxx-x","true"],["consent","1"],["cookie-bar","no"],["CookiesAccepted","no"],["essential","true"],["cookieConfirm","true"],["trackingConfirm","false"],["cookie_consent","false"],["uce-cookie","N"],["tarteaucitron","false"],["cookiePolicies","true"],["wed_cookie_info","1"],["cookie_optin_q","false"],["ce-cookie","N"],["NTCookies","0"],["alertCookie","1","","reload","1"],["gdpr","1"],["hideCookieBanner","true"],["obligatory","true"],["marketing","false"],["analytics","false"],["cookieControl","true"],["plosCookieConsentStatus","false"],["user_accepted_cookies","1"],["analyticsAccepted","false"],["cookieAccepted","true"],["hide-gdpr-bar","true"],["promptCookies","1"],["_cDaB","1"],["_aCan_analytical","0"],["_aGaB","1"],["surbma-gpga","no"],["elrowCookiePolicy","yes"],["ownit_cookie_data_permissions","1"],["Cookies_Preferences","accepted"],["Cookies_Preferences_Analytics","declined"],["privacyPolicyAccepted","true"],["Cookies-Accepted","true"],["cc-accepted","2"],["cc-item-google","false"],["accept_cookies","accepted"],["featureConsent","false","","reload","1"],["accept-cookie","no"],["consent","0","","reload","1"],["cookiePrivacyPreferenceBannerProduction","accepted"],["cookiesConsent","false"],["2x1cookies","1"],["firstPartyDataPrefSet","true"],["cookies-required","1","","reload","1"],["kh_cookie_level4","false"],["kh_cookie_level3","false"],["kh_cookie_level1","true"],["cookie_agreement","1","","reload","1"],["MSC_Cookiebanner","false"],["cookieConsent_marketing","false"],["Fitnessing21-15-9","0"],["cookies_popup","yes"],["cookieConsent_required","true","","reload","1"],["sa_enable","off"],["acceptcookietermCookieBanner","true"],["cookie_status","1","","reload","1"],["FTCookieCompliance","1"],["cookiePopupAccepted","true"],["UBI_PRIVACY_POLICY_VIEWED","true"],["UBI_PRIVACY_ADS_OPTOUT","true"],["UBI_PRIVACY_POLICY_ACCEPTED","false"],["UBI_PRIVACY_VIDEO_OPTOUT","false"],["jocookie","false"],["cookieNotification.shown","1"],["localConsent","false"],["oai-allow-ne","false"],["allow-cookie","1"],["cookie-functional","1"],["hulkCookieBarClick","1"],["CookieConsent","1"],["zoommer-cookie_agreed","true"],["accepted_cookie_policy","true"],["gdpr_cookie_token","1"],["_consent_personalization","denied"],["_consent_analytics","denied"],["_consent_marketing","denied"],["cookieWall","1"],["no_cookies","1"],["hidecookiesbanner","1"],["CookienatorConsent","false"],["cookieWallOptIn","0"],["analyticsCookiesAccepted","false"],["cf4212_cn","1"],["mediaCookiesAccepted","false"],["mandatoryCookiesAccepted","true"],["gtag","true"],["BokadirektCookiePreferencesMP","1"],["cookieAcknowledged","true"],["data-privacy-statement","true"],["cookie_privacy_level","required"],["accepted_cookies","true","","reload","1"],["MATOMO_CONSENT_GIVEN","0"],["BABY_MARKETING_COOKIES_CONSENTED","false"],["BABY_PERFORMANCE_COOKIES_CONSENTED","false"],["BABY_NECESSARY_COOKIES_CONSENTED","true"],["consent_essential","allow"],["cookieshown","1"],["warn","true"],["optinCookieSetting","1"],["privacy-shown","true"],["slimstat_optout_tracking","true"],["npp_analytical","0"],["inshopCookiesSet","true"],["adsCookies","false"],["performanceCookies","false"],["sa_demo","false"],["animated_drawings","true"],["cookieStatus","true"],["swgCookie","false"],["cookieConsentPreferencesGranted","1"],["cookieConsentMarketingGranted","0"],["cookieConsentGranted","1"],["cookies-rejected","true"],["NL_COOKIE_KOMFORT","false"],["NL_COOKIE_MEMORY","true","","reload","1"],["NL_COOKIE_STATS","false"],["pws_gdrp_accept","1"],["have18","1"],["pelm_cstate","1"],["pelm_consent","1"],["accept-cookies","true"],["accept-analytical-cookies","false"],["accept-marketing-cookies","false"],["cookie-level-v4","0"],["analytics_consent","yes"],["sei-ccpa-banner","true"],["awx_cookie_consent","true"],["cookie_warning","1"],["allowCookies","0"],["cookiePolicyAccepted","true"],["codecamps.cookiesConsent","true"],["cookiesConsent","true"],["consent_updated","true"],["acsr","1"],["__hs_gpc_banner_dismiss","true"],["cookieyes-necessary","yes"],["cookieyes-other","no"],["cky-action","yes"],["cookieyes-functional","no"],["has-declined-cookies","true","","reload","1"],["has-agreed-to-cookies","false"],["essential","Y"],["analytics","N"],["functional","N"],["gradeproof_shown_cookie_warning","true"],["sber.pers_notice_en","1"],["cookies_consented","yes"],["CB393_DONOTREOPEN","true"],["AYTO_CORUNA_COOKIES","1","","reload","1"],["I6IISCOOKIECONSENT0","n","","reload","1"],["htg_consent","0"],["cookie_oldal","1"],["cookie_marketing","0"],["cookie_jog","1"],["cp_cc_ads","0"],["cp_cc_stats","0"],["cp_cc_required","1"],["ae-cookiebanner","true"],["ae-esential","true"],["ae-statistics","false"],["ccs-supplierconnect","ACCEPTED"],["accepted_cookies","yes"],["note","1"],["cookieConsent","required"],["cookieConsent","accepted"],["pd_cc","1"],["gdpr_ok","necessary"],["allowTracking","false"],["cookies-marketing","N"],["varmafi_mandatory","true"],["VyosCookies","Accepted"],["analyticsConsent","false"],["adsConsent","false"],["te_cookie_ok","1"],["amcookie_policy_restriction","allowed"],["cookieConsent","allowed"],["dw_cookies_accepted","1"],["acceptConverseCookiePolicy","0"],["gdpr-banner","1"],["privacySettings","1"],["are_essential_consents_given","1"],["is_personalized_content_consent_given","1"],["acepta_cookies_funcionales","1"],["acepta_cookies_obligatorias","1"],["acepta_cookies_personalizacion","1"],["cookiepolicyinfo_new","true"],["acceptCookie","true"],["cookie_analytics","false"],["et_cookie_consent","true"],["__gitbook_cookie_granted","no"],["cookieBasic","true"],["cookieMold","true"],["ytprefs_gdpr_consent","1"],["efile-cookiename-","1"],["plg_system_djcookiemonster_informed","1","","reload","1"],["cvc","true"],["cookieConsent3","true"],["acris_cookie_acc","1","","reload","1"],["termsfeed_pc1_notice_banner_hidden","true"],["cmplz_marketing","allowed"],["acknowledged","true"],["gdpr_shield_notice_dismissed","yes"],["luci_gaConsent_95973f7b-6dbc-4dac-a916-ab2cf3b4af11","false"],["luci_CookieConsent","true"],["ng-cc-necessary","1"],["ng-cc-accepted","accepted"],["PrivacyPolicyOptOut","yes"],["consentAnalytics","false"],["consentAdvertising","false"],["consentPersonalization","false"],["privacyExpiration","1"],["cookieconsent_status","deny"],["lr_cookies_tecnicas","accepted"],["cookies_surestao","accepted","","reload","1"],["hide-cookie-banner","1"],["fjallravenCookie","1"],["accept_cookie_policy","true"],["_marketing","0"],["_performance","0"],["RgpdBanner","1"],["seen_cookie_message","accepted"],["complianceCookie","on"],["cookieTermsDismissed","true"],["cookie-consent","1"],["cookie-consent","0"],["ecologi_cookie_consent_20220224","false"],["appBannerPopUpRulesCookie","true"],["eurac_cookie_consent","true"],["akasaairCookie","accepted"],["rittalCC","1"],["cookie-agreed","2"],["ckies_facebook_pixel","deny"],["ckies_google_analytics","deny"],["ckies_youtube","allow"],["ckies_cloudflare","allow"],["ckies_paypal","allow"],["ckies_web_store_state","allow"],["hasPolicy","Y"],["modalPolicyCookieNotAccepted","notaccepted"],["MANA_CONSENT","true"],["_ul_cookie_consent","allow"],["cookiePrefAnalytics","0"],["cookiePrefMarketing","0"],["cookiePrefThirdPartyApplications","0"],["trackingCookies","off"],["acceptanalytics","no"],["acceptadvertising","no"],["acceptfunctional","yes"],["consent18","0","","reload","1"],["ATA.gdpr.popup","true"],["AIREUROPA_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["privacyNoticeExpireDate","1"],["privacyNoticeAccepted","true"],["policy_accepted","1"],["stampen-cookies-hide-information","yes"],["dominos_cookies_accepted","1"],["deva_accepted","yes"],["privacy_settings","1"],["cookies_consent","1"],["cookies_modal","true"],["cookie_notice","1"],["cookie_policy_agreement","true"],["cookiesPopup","1"],["digibestCookieInfo","true"],["cookiesettings_status","allow"],["_duet_gdpr_acknowledged","1"],["daimant_collective","accept","","reload","1"],["cookies-notice","1","","reload","1"],["banner","2","","reload","1"],["privacy-policy-2023","accept"],["user_cookie_consent","false"],["cookiePolicy","4"],["standard_gdpr_consent","true"],["cookie_accept","true"],["cookieBanner","true"],["tncookieinfo","1","","reload","1"],["agree_with_cookies","1"],["sc-privacy-settings","true"],["cookie-accepted","true"],["cookie-accepted","yes"],["consentAll","1"],["hide_cookies_consent","1"],["nicequest_optIn","1"],["shb-consent-cookies","false"],["cpaccepted","true"],["cookieMessageDismissed","1"],["LG_COOKIE_CONSENT","0"],["CookieConsent","true"],["gatsby-plugin-google-tagmanager","false"],["wtr_cookies_functional","1"],["cookie-m-personalization","0"],["cookie-m-marketing","0"],["cookie-m-analytics","0"],["cookies","true"],["ctc_rejected","1"],["AcceptedCookieCategories","1"],["cookie_policy_acknowledgement","true"],["allowCookies","yes"],["cookieNotification","true"],["privacy","true"],["euconsent-bypass","1"],["cookie_usage","yes"],["dismissCookieBanner","true"],["switchCookies","1"],["cbChecked","true"],["infoCookieUses","true"],["consent-data-v2","0"],["ACCEPTED_COOKIES","true"],["EMR-CookieConsent-Analytical","0","","reload","1"],["gem_cookies_usage_production","1"],["cookie_level","2"],["toutv_cookies_usage_production","1"],["_evidon_suppress_notification_cookie","1"],["EMR-CookieConsent-Advertising","0"],["acceptCookies","true"],["COOKIES_NEWACCEPTED","1"],["es_cookie_settings_closed","1"],["cookie-banner-acceptance-state","true"],["cookie_consent_seen","1"],["cookie_tag_accepted","true"],["cookies_allowed","yes"],["tracking","0"],["valamis_cookie_message","true","","reload","1"],["valamis_cookie_marketing","false"],["valamis_cookie_analytics","false"],["approvedcookies","no","","reload","1"],["psd-google-ads-enabled","0"],["psd-gtm-activated","1"],["wishlist-enabled","1"],["textshuttle_cookie","true"],["consentInteract","true"],["cookielawinfo-checkbox-functional","yes"],["cookielawinfo-checkbox-necessary","yes"],["viewed_cookie_policy","yes"],["cookielawinfo-checkbox-advertisement","no"],["cookielawinfo-checkbox-non-necessary","no"],["cookielawinfo-checkbox-performance","no"],["cookielawinfo-checkbox-analytics","no"],["cookie-byte-consent-essentials","true"],["cookie-byte-consent-showed","true"],["cookie-byte-consent-statistics","false"],["bm_acknowledge","yes"],["genovaPrivacyOptions","1","","reload","1"],["kali-cc-agreed","true"],["cookiesAccepted","true"],["allowMarketingCookies","false"],["allowAnalyticalCookies","false"],["privacyLevel","2","","reload","1"],["AcceptedCookies","1"],["userCookieConsent","true"],["hasSeenCookiePopUp","yes"],["privacyLevel","flagmajob_ads_shown","1","","reload","1"],["userCookies","true"],["privacy-policy-accepted","1"],["precmp","1","","reload","1"],["IsCookieAccepted","yes","","reload","1"],["gatsby-gdpr-google-tagmanager","true"],["legalOk","true"],["cp_cc_stats","1","","reload","1"],["cp_cc_ads","1"],["cookie-disclaimer","1"],["statistik","0"],["cookies-informer-close","true"],["gdpr","0"],["required","1"],["rodo-reminder-displayed","1"],["cookie_consent_given","true"],["rodo-modal-displayed","1"],["ING_GPT","0"],["ING_GPP","0"],["cookiepref","1"],["shb-consent-cookies","true"],["termos-aceitos","ok"],["ui-tnc-agreed","true"],["cookie-preference","1"],["cookie-preference","1","","reload","1"],["cookie-preference-v3","1"],["consent","true"],["cookies_accepted","yes"],["set-cookie","cookieAccess","1"],["hife_eu_cookie_consent","1"],["cookie-consent","accepted"],["permission_marketing_cookies","0"],["permission_statistic_cookies","0"],["permission_funktional_cookies","1"],["cookieconsent","1"],["cookieconsent","true"],["epole_cookies_settings","true"],["dopt_consent","false"],["privacy-statement-accepted","true","","reload","1"],["cookie_locales","true"],["ooe_cookie_policy_accepted","no"],["accept_cookie","1"],["cookieconsent_status_new","3"],["_acceptCookies","1","","reload","1"],["_reiff-consent-cookie","yes"],["snc-cp","1"],["cookies-accepted","true"],["cookies-accepted","false"],["isReadCookiePolicyDNTAa","true"],["mubi-cookie-consent","allow"],["isReadCookiePolicyDNT","Yes"],["ivc_consent","3"],["cookie_accepted","1"],["cookie_accepted","false","","reload","1"],["UserCookieLevel","1"],["sat_track","false"],["Rodo","1"],["cookie_privacy_on","1"],["allow_cookie","false"],["3LM-Cookie","false"],["i_sc_a","false"],["i_cm_a","false"],["i_c_a","true"],["cookies-marketing","false"],["cookies-functional","true"],["cookies-preferences","false"],["__cf_gdpr_accepted","false"],["3t-cookies-essential","1"],["3t-cookies-functional","1"],["3t-cookies-performance","0"],["3t-cookies-social","0"],["allow_cookies_marketing","0"],["allow_cookies_tracking","0"],["cookie_prompt_dismissed","1"],["cookies_enabled","1"],["cookie","1","","reload","1"],["cookie-analytics","0"],["cc-set","1","","reload","1"],["allowCookies","1","","reload","1"],["rgp-gdpr-policy","1"],["jt-jobseeker-gdpr-banner","true","","reload","1"],["cookie-preferences-analytics","no"],["cookie-preferences-marketing","no"],["withings_cookieconsent_dismissed","1"],["cookieconsent_advertising","false"],["cookieconsent_statistics","false"],["cookieconsent_statistics","no"],["cookieconsent_essential","yes"],["cookie_preference","1"],["CP_ESSENTIAL","1"],["CP_PREFERENCES","1"],["amcookie_allowed","1"],["pc_analitica_bizkaia","false"],["pc_preferencias_bizkaia","true"],["pc_tecnicas_bizkaia","true"],["gdrp_popup_showed","1"],["cookie_consent_accept","true"],["cookie-preferences-technical","yes"],["gdpr__google__analytics","false"],["gdpr__depop__functional","true"],["tracking_cookie","1"],["cookie-preference","2"],["cookie-preference_auto_accept","1"],["cookie-preference_renew7","1"],["pc234978122321234","1"],["ck_pref_all","1"],["ONCOSURCOOK","2"],["RY_COOKIE_CONSENT","true"],["COOKIE_CONSENT","1","","reload","1"],["COOKIE_STATIC","false"],["COOKIE_MARKETING","false"],["cookieConsent","true","","reload","1"],["videoConsent","true"],["comfortConsent","true"],["cookie_consent","1"],["cookieBannerAccepted","1","","reload","1"],["cookieMsg","true","","reload","1"],["cookie-consent","true"],["abz_seo_choosen","1"],["privacyAccepted","true"],["cok","1","","reload","1"],["ARE_DSGVO_PREFERENCES_SUBMITTED","true"],["dsgvo_consent","1"],["efile-cookiename-28","1"],["efile-cookiename-74","1"],["cookie_policy_closed","1","","reload","1"],["gvCookieConsentAccept","1","reload","","1"],["acceptEssential","1"],["baypol_banner","true"],["nagAccepted","true"],["baypol_functional","true"],["CookieConsent","OK"],["CookieConsentV2","YES"],["viewed_cookie_policy","yes","","reload","1"],["BM_Advertising","false","","reload","1"],["BM_User_Experience","true"],["BM_Analytics","false"],["DmCookiesAccepted","true","","reload","1"],["DmCookiesMarketing","false"],["DmCookiesAnalytics","false"],["cookietypes","OK"],["consent_setting","OK","","reload","1"],["user_accepts_cookies","true"],["gdpr_agreed","4"],["ra-cookie-disclaimer-11-05-2022","true"],["acceptMatomo","true"],["UBI_PRIVACY_POLICY_ACCEPTED","true"],["UBI_PRIVACY_VID_OPTOUT","false"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Functional","1"],["ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["ARE_MARKETING_COOKIES_ACCEPTED","true"],["ARE_REQUIRED_COOKIES_ACCEPTED","true"],["HAS_COOKIES_FORM_SHOWED","true"],["accepted_functional","yes"],["accepted_marketing","no"],["allow_the_cookie","yes"],["cookie_visited","true"],["drcookie","true"],["acceptedCookies","true"],["cookieMessageHide","true"],["sq","0"],["notice_preferences","2"],["cookie_consent_all","1"],["eb_cookie_agree","1"],["cookiesPolicy20211101","1"],["sc-cookies-accepted","true"],["ccpa-notice-viewed-02","true"],["cookieConsent","yes"],["cookieConsent","true"],["plenty-shop-cookie","0"],["acceptedPolicy","true"],["cookie-consent","false"],["consent-analytics","false"],["cookieConsentClosed","true"],["_tvsPrivacy","true"],["epCookieConsent","0","","reload","1"],["is_allowed_client_traking_niezbedne","1","","reload","1"],["intro","true"],["SeenCookieBar","true"],["cpaccpted","true"],["AllowCookies","true"],["cookiesAccepted","3"],["optOutsTouched","true"],["optOutAccepted","true"],["gdpr_dismissal","true"],["analyticsCookieAccepted","0"],["cookieAccepted","0"],["uev2.gg","true"],["closeNotificationAboutCookie","true"],["use_cookie","1"],["figshareCookiesAccepted","true"],["allowCookie","1","","reload","1"],["bitso_cc","1"],["eg_asked","1"],["AcceptKeksit","0","","reload","1"],["cookiepref","true"],["cookie_analytcs","false","","reload","1"],["dhl-webapp-track","allowed"],["cookieconsent_status","1"],["PVH_COOKIES_GDPR","Accept"],["PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"],["PVH_COOKIES_GDPR_ANALYTICS","Reject"],["ofdb_werbung","Y","","reload","1"],["user_cookie_consent","1"],["STAgreement","1"],["cookielawinfo-checkbox-markkinointi","no"],["cookielawinfo-checkbox-tilastointi","no"],["viewed_cookie_policy","no"],["functionalCookies","true"],["contentPersonalisationCookies","false"],["statisticalCookies","false"],["hide_cookieoverlay_v2","1","","reload","1"],["socialmedia-cookies_allowed_v2","0"],["performance-cookies_allowed_v2","0"],["mrm_gdpr","1"],["necessary_consent","accepted"],["__cookie_consent","false"],["jour_cookies","1"],["jour_functional","true"],["jour_analytics","false"],["jour_marketing","false"],["gdpr_opt_in","1"],["ad_storage","denied"],["stickyCookiesSet","true"],["analytics_storage","denied"],["user_experience_cookie_consent","false"],["marketing_cookie_consent","false"],["cookie_notice_dismissed","yes"],["cookie_analytics_allow","no"],["mer_cc_dim_rem_allow","no"],["num_times_cookie_consent_banner_shown","1"],["cookie_consent_banner_shown_last_time","1"],["privacy_hint","1"],["cookiesConsent","1"],["cookiesStatistics","0"],["cookiesPreferences","0"],["gpc_v","1"],["gpc_ad","0"],["gpc_analytic","0"],["gpc_audience","0"],["gpc_func","0"],["OptanonAlertBoxClosed","1"],["vkicookieconsent","0"],["cookie_policy_agreement","3"],["internalCookies","false"],["essentialsCookies","true"],["cookielawinfo-checkbox-toiminnalliset-evasteet","yes"],["allow-marketing","false"],["allow-analytics","false"],["cc_analytics","0"],["cc_essential","1"],["__consent","%5B%22required%22%5D"],["external-data-googlemaps-is-enabled","true"],["external-data-youtube-is-enabled","true"],["external-data-spotify-is-enabled","true"],["notion_check_cookie_consent","true"],["cmp_level","15"],["vl-cookie-consent-cookie-consent","true"],["vl-cookie-consent-functional","true"],["amcookie_allowed","0"],["euconsent-v2-addtl","0"],["acepta_cookie","acepta"],["3sat_cmp_configuration","true"],["privacyConsent_version","1","","reload","1"],["privacyConsent","false"],["DDCookiePolicy-consent-functional","false"],["DDCookiePolicy-consent-tracking","false"],["DDCookiePolicy-consent-statistics","false"],["CookieNotificationSeen","1","","reload","1"]];

const hostnamesMap = new Map([["greenbuildingadvisor.com",[0,1,2]],["finewoodworking.com",[0,1,2]],["physikinstrumente.de",3],["karlknauer.de",3],["schoeck.com",3],["resonate.coop",3],["northgatevehiclehire.ie",3],["badhall.at",3],["m.twitch.tv",4],["endgame.id",5],["omega-nuernberg.servicebund.com",6],["eboo.lu",7],["twomates.de",8],["intergiro.com",9],["healthygamer.gg",10],["telepizza.es",[11,12,13]],["telepizza.pt",[11,12,13]],["frisco.pl",14],["tyleenslang.nl",15],["schrikdraad.net",15],["kruiwagen.net",15],["pvcvoordeel.nl",15],["pvcbuis.com",15],["drainagebuizen.nl",15],["likewise.com",16],["longines.com",[17,18,19,20]],["vater-it.de",21],["biano.hu",22],["quebueno.es",23],["nadia.gov.gr",24],["hana-book.fr",25],["kzvb.de",26],["correosexpress.com",27],["cexpr.es",27],["rte.ie",28],["smart.com",29],["gry.pl",29],["gamesgames.com",29],["games.co.uk",29],["jetztspielen.de",29],["ourgames.ru",29],["permainan.co.id",29],["gioco.it",29],["jeux.fr",29],["juegos.com",29],["ojogos.com.br",29],["oyunskor.com",29],["spela.se",29],["spelletjes.nl",29],["agame.com",29],["spielen.com",29],["flashgames.ru",29],["games.co.id",29],["giochi.it",29],["jeu.fr",29],["spel.nl",29],["sartor-stoffe.de",30],["rockpoint.cz",30],["rockpoint.sk",30],["parfum-zentrum.de",30],["candy-store.cz",30],["tridge.com",31],["asus.com",[32,33]],["drinksking.sk",34],["neuhauschocolates.com",35],["commandsuite.it",36],["oktea.tw",37],["bafin.de",38],["materna.de",38],["bamf.de",38],["tenvinilo-argentina.com",[39,40]],["eikaforsikring.no",[41,42]],["eurowings.com",[43,45,46]],["seventhgeneration.com",44],["press.princeton.edu",44],["newpharma.be",[47,48,49]],["newpharma.fr",[47,48,49]],["newpharma.de",[47,48,49]],["newpharma.at",[47,48,49]],["newpharma.nl",[47,48,49]],["kapoorwatch.com",50],["paf.se",51],["citibankonline.pl",51],["thw.de",52],["bafa.de",52],["bka.de",52],["bmbf.de",52],["weather.com",53],["bolist.se",[54,55]],["project529.com",55],["evivanlanschot.nl",56],["prenatal.nl",57],["onnibus.com",[57,680,681,682]],["kyoceradocumentsolutions.us",[57,716,717]],["kyoceradocumentsolutions.ch",[57,716,717]],["kyoceradocumentsolutions.co.uk",[57,716,717]],["kyoceradocumentsolutions.de",[57,716,717]],["kyoceradocumentsolutions.es",[57,716,717]],["kyoceradocumentsolutions.eu",[57,716,717]],["kyoceradocumentsolutions.fr",[57,716,717]],["kyoceradocumentsolutions.it",[57,716,717]],["kyoceradocumentsolutions.ru",[57,716,717]],["kyoceradocumentsolutions.mx",[57,716,717]],["kyoceradocumentsolutions.cl",[57,716,717]],["kyoceradocumentsolutions.com.br",[57,716,717]],["wagner-tuning.com",[58,59,60,61]],["waitrosecellar.com",[62,63,64,65]],["waitrose.com",[62,408]],["kvk.nl",[66,67,68]],["macfarlanes.com",69],["pole-emploi.fr",70],["gardenmediaguild.co.uk",71],["samplerite.com",72],["samplerite.cn",72],["sororedit.com",73],["blukit.com.br",74],["biegnaszczyt.pl",75],["staff-gallery.com",76],["itv.com",77],["dvag.de",78],["premierinn.com",[79,80,81,82]],["whitbreadinns.co.uk",[79,80,81,82]],["barandblock.co.uk",[79,80,81,82]],["tabletable.co.uk",[79,80,81,82]],["brewersfayre.co.uk",[79,80,81,82]],["beefeater.co.uk",[79,80,81,82]],["allstarssportsbars.co.uk",[83,84]],["babiesrus.ca",85],["toysrus.ca",85],["roomsandspaces.ca",85],["athletic-club.eus",[86,87,88]],["wattoo.dk",89],["wattoo.no",89],["texthelp.com",[90,91]],["courierexchange.co.uk",[92,93,94]],["haulageexchange.co.uk",[92,93,94]],["powerball.com",95],["tlaciarik.sk",95],["tiskarik.cz",95],["sseriga.edu",[96,97]],["rt.com",98],["swrng.de",99],["crfop.gdos.gov.pl",100],["nurgutes.de",101],["kpcen-torun.edu.pl",102],["opintopolku.fi",103],["debenhams.com",104],["archiwumalle.pl",105],["konicaminolta.ca",106],["konicaminolta.us",106],["deutschebank-dbdirect.com",[107,108,109]],["dbonline.deutsche-bank.es",[107,108,109]],["deutsche-bank.es",[107,108,109]],["hipotecaonline.db.com",110],["kangasalansanomat.fi",111],["eif.org",112],["tunnelmb.net",112],["sugi-net.jp",113],["understandingsociety.ac.uk",114],["electroprecio.com",115],["autohero.com",115],["leibniz.com",115],["computerbase.de",[115,713]],["bargaintown.ie",116],["tui.nl",117],["doppelmayr.com",118],["case-score.com",[119,120]],["cote.co.uk",121],["finimize.com",121],["rtu.lv",122],["sysdream.com",123],["cinemarkca.com",124],["wedding.pl",125],["neander-zahn.de",126],["theadelphileeds.co.uk",127],["tobycarvery.co.uk",127],["carsupermarket.com",127],["viajesatodotren.com",128],["ticketingcine.fr",129],["agenziavista.it",130],["e-chladiva.cz",130],["bitecode.dev",131],["mjob.si",[132,133,134]],["airportrentacar.gr",135],["plos.org",136],["autohaus24.de",137],["sixt-neuwagen.de",137],["gadis.es",[138,139]],["dom.ru",139],["ford-kimmerle-reutlingen.de",140],["autohaus-reitermayer.de",140],["autohaus-diefenbach-waldbrunn.de",140],["autohaus-diefenbach.de",140],["autohaus-musberg.de",140],["ford-ah-im-hunsrueck-simmern.de",140],["ford-arndt-goerlitz.de",140],["ford-autogalerie-alfeld.de",140],["ford-bacher-schrobenhausen.de",140],["ford-bathauer-bad-harzburg.de",140],["ford-behrend-waren.de",140],["ford-bergland-frankfurt-oder.de",140],["ford-bergland-wipperfuerth.de",140],["ford-besico-glauchau.de",140],["ford-besico-nuernberg.de",140],["ford-bischoff-neumuenster.de",140],["ford-bodach-borgentreich.de",140],["ford-bunk-saarbruecken.de",140],["ford-bunk-voelklingen.de",140],["ford-busch-kirchberg.de",140],["ford-diermeier-muenchen.de",140],["ford-dinnebier-leipzig.de",140],["ford-duennes-regensburg.de",140],["ford-fischer-bochum.de",140],["ford-fischer-muenster.de",140],["ford-foerster-koblenz.de",140],["ford-fuchs-uffenheim.de",140],["ford-geberzahn-koeln.de",140],["ford-gerstmann-duesseldorf.de",140],["ford-haefner-und-strunk-kassel.de",140],["ford-hartmann-kempten.de",140],["ford-hartmann-rastatt.de",140],["ford-hatzner-karlsruhe.de",140],["ford-heine-hoexter.de",140],["ford-hentschel-hildesheim.de",140],["ford-hessengarage-dreieich.de",140],["ford-hessengarage-frankfurt.de",140],["ford-hga-windeck.de",140],["ford-hommert-coburg.de",140],["ford-horstmann-rastede.de",140],["ford-janssen-sonsbeck.de",140],["ford-jochem-stingbert.de",140],["ford-jungmann-wuppertal.de",140],["ford-kestel-marktzeuln.de",140],["ford-klaiber-bad-friedrichshall.de",140],["ford-koenig-eschwege.de",140],["ford-kohlhoff-mannheim.de",140],["ford-kt-automobile-coesfeld.de",140],["ford-lackermann-wesel.de",140],["ford-ludewig-delligsen.de",140],["ford-maiwald-linsengericht.de",140],["ford-mertens-beckum.de",140],["ford-meyer-bad-oeynhausen.de",140],["ford-mgs-bayreuth.de",140],["ford-mgs-radebeul.de",140],["ford-muecke-berlin.de",140],["ford-norren-weissenthurm.de",140],["ford-nrw-garage-duesseldorf.de",140],["ford-nrw-garage-handweiser.de",140],["ford-nuding-remshalden.de",140],["ford-ohm-rendsburg.de",140],["ford-reinicke-muecheln.de",140],["ford-rennig.de",140],["ford-roerentrop-luenen.de",140],["ford-schankola-dudweiler.de",140],["ford-sg-goeppingen.de",140],["ford-sg-leonberg.de",140],["ford-sg-neu-ulm.de",140],["ford-sg-pforzheim.de",140],["ford-sg-waiblingen.de",140],["ford-storz-st-georgen.de",140],["ford-strunk-koeln.de",140],["ford-tobaben-hamburg.de",140],["ford-toenjes-zetel.de",140],["ford-wagner-mayen.de",140],["ford-wahl-fritzlar.de",140],["ford-wahl-siegen.de",140],["ford-weege-bad-salzuflen.de",140],["ford-westhoff-hamm.de",140],["ford-wieland-hasbergen.de",140],["renault-autocenterprignitz-pritzwalk.de",140],["renault-spenrath-juelich.de",140],["vitalllit.com",141],["fincaparera.com",141],["dbnetbcn.com",141],["viba.barcelona",141],["anafaustinoatelier.com",141],["lamparasherrero.com",141],["calteixidor.cat",141],["argentos.barcelona",141],["anmarlube.com",141],["anynouxines.barcelona",141],["crearunapaginaweb.cat",141],["cualesmiip.com",141],["porndoe.com",[142,143,144]],["thinkingaustralia.com",145],["elrow.com",146],["ownit.se",147],["velo-antwerpen.be",[148,149]],["wwnorton.com",150],["pc-canada.com",151],["mullgs.se",152],["1a-sehen.de",153],["anker.com",154],["feature.fm",155],["comte.com",156],["baltic-watches.com",157],["np-brijuni.hr",157],["vilgain.com",157],["tradingview.com",158],["wevolver.com",159],["experienciasfree.com",160],["freemans.com",161],["kivikangas.fi",162],["melkkobrew.fi",162],["kh.hu",[163,164,165]],["aplgo.com",166],["securityconference.org",167],["aha.or.at",[168,171]],["fantasyfitnessing.com",169],["chocolateemporium.com",170],["account.samsung.com",172],["crushwineco.com",173],["levi.pt",174],["fertagus.pt",175],["smiggle.co.uk",176],["ubisoft.com",[177,178,179,180]],["store.ubisoft.com",[177,180,616,617]],["thulb.uni-jena.de",181],["splityourticket.co.uk",182],["eramba.org",183],["openai.com",184],["kupbilecik.com",[185,186]],["kupbilecik.de",[185,186]],["kupbilecik.pl",[185,186]],["shopilya.com",187],["arera.it",188],["haustier-berater.de",188],["hfm-frankfurt.de",188],["zoommer.ge",189],["studentapan.se",190],["petcity.lt",[191,192,193,194]],["tobroco.com",[195,199]],["tobroco.nl",[195,199]],["tobroco-giant.com",[195,199]],["geosfreiberg.de",[196,197]],["eapvic.org",198],["bassolsenergia.com",198],["bammusic.com",[200,202,203]],["green-24.de",201],["phish-test.de",204],["bokadirekt.se",205],["ford.lt",206],["ford.pt",206],["ford.fr",206],["ford.de",206],["ford.dk",206],["ford.pl",206],["ford.se",206],["ford.nl",206],["ford.no",206],["ford.fi",206],["ford.gr",206],["ford.it",206],["data-media.gr",207],["e-food.gr",[208,209]],["bvmed.de",210],["babyshop.com",[211,212,213]],["griffbereit24.de",214],["checkwx.com",215],["calendardate.com",216],["wefashion.ch",217],["wefashion.fr",217],["wefashion.lu",217],["wefashion.be",217],["wefashion.de",217],["wefashion.nl",217],["brettspiel-angebote.de",[218,219]],["nio.com",220],["kancelarskepotreby.net",[221,222,223]],["segment-anything.com",224],["sketch.metademolab.com",225],["cambridgebs.co.uk",226],["freizeitbad-greifswald.de",227],["giuseppezanotti.com",[228,229,230]],["xcen.se",230],["biggreenegg.co.uk",231],["skihuette-oberbeuren.de",[232,233,234]],["pwsweather.com",235],["xfree.com",236],["theweathernetwork.com",[237,238]],["monese.com",[239,240,241]],["assos.com",239],["helmut-fischer.com",242],["myscience.org",243],["7-eleven.com",244],["airwallex.com",245],["streema.com",246],["gov.lv",247],["tise.com",248],["codecamps.com",249],["avell.com.br",250],["moneyfarm.com",251],["app.moneyfarm.com",251],["simpl.rent",252],["hubspot.com",253],["prodyna.com",[254,255,256,257]],["zutobi.com",[254,255,256,257]],["calm.com",[258,259]],["pubgesports.com",[260,261,262]],["outwrite.com",263],["sberbank.com",264],["sbermarket.ru",265],["bgextras.co.uk",266],["sede.coruna.gal",267],["czech-server.cz",268],["hitech-gamer.com",269],["bialettikave.hu",[270,271,272]],["canalplus.com",[273,274,275]],["mader.bz.it",[276,277,278]],["supply.amazon.co.uk",279],["bhaptics.com",280],["cleverbot.com",281],["watchaut.film",282],["tuffaloy.com",283],["fanvue.com",283],["electronoobs.com",284],["xn--lkylen-vxa.se",285],["tiefenthaler-landtechnik.at",286],["tiefenthaler-landtechnik.ch",286],["tiefenthaler-landtechnik.de",286],["huisartsenpraktijkdoorn.nl",287],["varma.fi",288],["vyos.io",289],["digimobil.es",[290,291]],["teenage.engineering",292],["merrell.pl",[293,561]],["converse.pl",293],["shop.wf-education.com",[293,561]],["werkenbijaswatson.nl",294],["converse.com",[295,296]],["buyandapply.nexus.org.uk",297],["img.ly",298],["halonen.fi",[298,326,327,328,329]],["carlson.fi",[298,326,327,328,329]],["cams.ashemaletube.com",[299,300]],["electronicacerler.com",[301,302,303]],["okpoznan.pl",[304,306]],["ielts.idp.com",305],["endlesstools.io",307],["thehacker.recipes",308],["mbhszepkartya.hu",309],["casellimoveis.com.br",310],["embedplus.com",311],["e-file.pl",312],["sp215.info",313],["empik.com",314],["senda.pl",315],["befestigungsfuchs.de",316],["cut-tec.co.uk",317],["gaytimes.co.uk",318],["hello.one",319],["wildcat-koeln.de",320],["libraries.merton.gov.uk",[321,322]],["tommy.hr",[323,324]],["usit.uio.no",325],["demo-digital-twin.r-stahl.com",330],["la31devalladolid.com",[331,332]],["mx.com",333],["foxtrail.fjallraven.com",334],["dotwatcher.cc",335],["bazarchic.com",[336,337,338]],["seedrs.com",339],["mypensiontracker.co.uk",340],["praxisplan.at",[340,363]],["endclothing.com",341],["esimplus.me",342],["cineplanet.com.pe",343],["ecologi.com",344],["wamba.com",345],["eurac.edu",346],["akasaair.com",347],["rittal.com",348],["wizards.com",349],["worstbassist.com",[350,351,352,353,354,355]],["zs-watch.com",356],["crown.com",357],["mesanalyses.fr",358],["teket.jp",359],["fish.shimano.com",[360,361,362]],["simsherpa.com",[364,365,366]],["translit.ru",367],["aruba.com",368],["aireuropa.com",369],["skfbearingselect.com",[370,371]],["scanrenovation.com",372],["ttela.se",373],["dominospizza.pl",374],["devagroup.pl",375],["hintaopas.fi",376],["ledenicheur.fr",376],["prisjagt.dk",376],["prisjakt.no",376],["prisjakt.nu",376],["pricespy.co.uk",376],["pricespy.co.nz",376],["horecaworld.biz",377],["horecaworld.be",377],["secondsol.com",377],["angelifybeauty.com",378],["cotopaxi.com",379],["kaluga.hh.ru",380],["justjoin.it",381],["digibest.pt",382],["two-notes.com",383],["theverge.com",384],["daimant.co",385],["secularism.org.uk",386],["karriere-hamburg.de",387],["musicmap.info",388],["gasspisen.se",389],["medtube.pl",390],["medtube.es",390],["medtube.fr",390],["medtube.net",390],["standard.sk",391],["linmot.com",392],["larian.com",[392,668]],["containerandpackaging.com",393],["top-yp.de",394],["termania.net",395],["swisscard.ch",396],["account.nowpayments.io",397],["fizjobaza.pl",398],["gigasport.at",399],["gigasport.de",399],["gigasport.ch",399],["velleahome.gr",400],["nicequest.com",401],["handelsbanken.no",402],["handelsbanken.com",402],["handelsbanken.co.uk",402],["handelsbanken.se",[402,490]],["handelsbanken.dk",402],["handelsbanken.fi",402],["songtradr.com",[403,651]],["logo.pt",[404,405]],["flexwhere.co.uk",[406,407]],["flexwhere.de",[406,407]],["pricewise.nl",406],["getunleash.io",406],["dentmania.de",406],["free.navalny.com",406],["latoken.com",406],["campusbrno.cz",[409,410,411]],["secrid.com",412],["etsy.com",413],["seb.se",414],["sebgroup.com",414],["deps.dev",415],["buf.build",416],["starofservice.com",417],["ytcomment.kmcat.uk",418],["gmx.com",419],["gmx.fr",419],["karofilm.ru",420],["octopusenergy.it",421],["octopusenergy.es",[421,422]],["justanswer.es",423],["justanswer.de",423],["justanswer.com",423],["justanswer.co.uk",423],["citilink.ru",424],["huutokaupat.com",425],["kaggle.com",426],["emr.ch",[427,432]],["gem.cbc.ca",428],["pumatools.hu",429],["ici.tou.tv",430],["crunchyroll.com",431],["mayflex.com",433],["clipchamp.com",433],["trouwenbijfletcher.nl",433],["fletcher.nl",433],["fletcherzakelijk.nl",433],["intermatic.com",433],["ebikelohr.de",434],["eurosender.com",435],["melectronics.ch",436],["guard.io",437],["schrottpreis.org",438],["nokportalen.se",439],["dokiliko.com",440],["valamis.com",[441,442,443]],["sverigesingenjorer.se",444],["shop.almawin.de",[445,446,447,493]],["textshuttle.com",448],["zeitzurtrauer.de",449],["steamdeckhq.com",[450,451,452,453,454,455,456]],["sumsub.com",[450,451,452]],["atman.pl",[450,451,452]],["fabriziovanmarciano.com",[450,451,452]],["nationalrail.com",[450,451,452]],["eett.gr",[450,451,452]],["funkypotato.com",[450,451,452]],["equalexchange.co.uk",[450,451,452]],["swnsdigital.com",[450,451,452]],["hemglass.se",[451,452,453,455,456]],["tampereenratikka.fi",[451,677,678,679]],["kymppikatsastus.fi",[451,452,456,718]],["ipouritinc.com",[452,453,454]],["gogolf.fi",[452,453]],["hanse-haus-greifswald.de",452],["skaling.de",[457,458,459]],["bringmeister.de",460],["gdx.net",461],["clearblue.com",462],["drewag.de",[463,464,465]],["enso.de",[463,464,465]],["buidlbox.io",463],["helitransair.com",466],["more.com",467],["nwslsoccer.com",467],["climatecentral.org",468],["resolution.de",469],["flagma.by",470],["eatsalad.com",471],["pacstall.dev",472],["web2.0calc.fr",473],["de-appletradein.likewize.com",474],["swissborg.com",475],["qwice.com",476],["canalpluskuchnia.pl",[477,478]],["uizard.io",479],["stmas.bayern.de",[480,483]],["novayagazeta.eu",481],["kinopoisk.ru",482],["yandex.ru",482],["go.netia.pl",[484,486]],["polsatboxgo.pl",[484,486]],["wst.tv",485],["ing.it",[487,488]],["ing.nl",489],["youcom.com.br",491],["rule34.paheal.net",492],["pnel.de",493],["korodrogerie.de",493],["der-puten-shop.de",493],["katapult-shop.de",493],["evocsports.com",493],["esm-computer.de",493],["calmwaters.de",493],["mellerud.de",493],["akustik-projekt.at",493],["vansprint.de",493],["0815.at",493],["0815.eu",493],["ojskate.com",493],["der-schweighofer.de",493],["tz-bedarf.de",493],["zeinpharma.de",493],["weicon.com",493],["dagvandewebshop.be",493],["thiele-tee.de",493],["carbox.de",493],["riapsport.de",493],["trendpet.de",493],["eheizung24.de",493],["seemueller.com",493],["vivande.de",493],["heidegrill.com",493],["gladiator-fightwear.com",493],["h-andreas.com",493],["pp-parts.com",493],["natuerlich-holzschuhe.de",493],["massivart.de",493],["malermeister-shop.de",493],["imping-confiserie.de",493],["lenox-trading.at",493],["cklenk.de",493],["catolet.de",493],["drinkitnow.de",493],["patisserie-m.de",493],["storm-proof.com",493],["balance-fahrradladen.de",493],["magicpos.shop",493],["zeinpharma.com",493],["sps-handel.net",493],["novagenics.com",493],["butterfly-circus.de",493],["holzhof24.de",493],["w6-wertarbeit.de",493],["fleurop.de",493],["leki.com",493],["extremeaudio.de",493],["taste-market.de",493],["delker-optik.de",493],["stuhl24-shop.de",493],["g-nestle.de",493],["alpine-hygiene.ch",493],["fluidmaster.it",493],["cordon.de",493],["belisse-beauty.de",493],["belisse-beauty.co.uk",493],["wpc-shop24.de",493],["liv.si",493],["maybach-luxury.com",493],["leiternprofi24.de",493],["hofer-kerzen.at",494],["karls-shop.de",495],["firmen.wko.at",496],["byggern.no",497],["rostics.ru",498],["hife.es",499],["lilcat.com",500],["hot.si",[501,502,503,504]],["crenolibre.fr",505],["e-pole.pl",506],["dopt.com",507],["keb-automation.com",508],["bonduelle.ru",509],["oxfordonlineenglish.com",510],["pccomponentes.fr",511],["pccomponentes.com",511],["pccomponentes.pt",511],["oead.at",512],["innovationsstiftung-bildung.at",512],["etwinning.at",512],["arqa-vet.at",512],["zentrumfuercitizenscience.at",512],["vorstudienlehrgang.at",512],["erasmusplus.at",512],["jeger.pl",513],["bo.de",514],["thegamingwatcher.com",515],["webtv.stofa.dk",516],["plusujemy.pl",517],["asus.com.cn",[518,520]],["zentalk.asus.com",[518,520]],["mubi.com",519],["lawrievetgroup.co.uk",521],["59northwheels.se",522],["foto-gregor.de",523],["kamera-express.de",523],["kamera-express.be",523],["kamera-express.nl",523],["kamera-express.fr",523],["kamera-express.lu",523],["dhbbank.com",524],["dhbbank.de",524],["dhbbank.be",524],["dhbbank.nl",524],["login.ingbank.pl",525],["fabrykacukiernika.pl",[526,527]],["peaks.com",528],["3landesmuseen-braunschweig.de",529],["unifachbuch.de",[530,531,532]],["playlumi.com",[533,534,535]],["chatfuel.com",536],["studio3t.com",[537,538,539,540]],["realgap.co.uk",[541,542,543,544]],["hotelborgia.com",[545,546]],["sweet24.de",547],["zwembaddekouter.be",548],["flixclassic.pl",549],["jobtoday.com",550],["deltatre.com",[551,552,567]],["withings.com",[553,554,555]],["blista.de",[556,557]],["hashop.nl",558],["gift.be",[559,560]],["elevator.de",561],["foryouehealth.de",561],["animaze.us",561],["penn-elcom.com",561],["curantus.de",561],["mtbmarket.de",561],["spanienweinonline.ch",561],["novap.fr",561],["bizkaia.eus",[562,563,564]],["sinparty.com",565],["jobs.ch",566],["jobup.ch",566],["depop.com",[568,569]],["mantel.com",570],["armedangels.com",[571,572,573]],["e-dojus.lv",574],["burnesspaull.com",575],["oncosur.org",576],["ryanair.com",577],["refurbished.at",[578,579,580]],["refurbished.nl",[578,579,580]],["refurbished.be",[578,579,580]],["refurbishedstore.de",[578,579,580]],["bayernportal.de",[581,582,583]],["ayudatpymes.com",584],["zipjob.com",584],["pricehubble.com",585],["ilmotorsport.de",586],["karate.com",587],["psbank.ru",587],["myriad.social",587],["exeedme.com",587],["followalice.com",[587,643]],["aqua-store.fr",588],["voila.ca",589],["anastore.com",590],["app.arzt-direkt.de",591],["dasfutterhaus.at",592],["e-pity.pl",593],["fillup.pl",594],["dailymotion.com",595],["barcawelt.de",596],["lueneburger-heide.de",597],["polizei.bayern.de",[598,600]],["ourworldofpixels.com",599],["jku.at",601],["matkahuolto.fi",602],["espacocasa.com",603],["altraeta.it",603],["centrooceano.it",603],["allstoresdigital.com",603],["cultarm3d.de",603],["soulbounce.com",603],["fluidtopics.com",603],["uvetgbt.com",603],["malcorentacar.com",603],["emondo.de",603],["maspero.it",603],["kelkay.com",603],["underground-england.com",603],["vert.eco",603],["turcolegal.com",603],["magnet4blogging.net",603],["moovly.com",603],["automationafrica.co.za",603],["jornaldoalgarve.pt",603],["keravanenergia.fi",603],["kuopas.fi",603],["frag-machiavelli.de",603],["healthera.co.uk",603],["mobeleader.com",603],["powerup-gaming.com",603],["developer-blog.net",603],["medical.edu.mt",603],["deh.mt",603],["bluebell-railway.com",603],["ribescasals.com",603],["javea.com",603],["chinaimportal.com",603],["inds.co.uk",603],["raoul-follereau.org",603],["serramenti-milano.it",603],["cosasdemujer.com",603],["luz-blanca.info",603],["cosasdeviajes.com",603],["safehaven.io",603],["havocpoint.it",603],["motofocus.pl",603],["nomanssky.com",603],["drei-franken-info.de",603],["clausnehring.com",603],["alttab.net",603],["kinderleicht.berlin",603],["kiakkoradio.fi",603],["cosasdelcaribe.es",603],["de-sjove-jokes.dk",603],["serverprofis.de",603],["biographyonline.net",603],["iziconfort.com",603],["sportinnederland.com",603],["natureatblog.com",603],["wtsenergy.com",603],["cosasdesalud.es",603],["internetpasoapaso.com",603],["zurzeit.at",603],["contaspoupanca.pt",603],["backmarket.de",[604,605,606]],["backmarket.co.uk",[604,605,606]],["backmarket.es",[604,605,606]],["backmarket.be",[604,605,606]],["backmarket.at",[604,605,606]],["backmarket.fr",[604,605,606]],["backmarket.gr",[604,605,606]],["backmarket.fi",[604,605,606]],["backmarket.ie",[604,605,606]],["backmarket.it",[604,605,606]],["backmarket.nl",[604,605,606]],["backmarket.pt",[604,605,606]],["backmarket.se",[604,605,606]],["backmarket.sk",[604,605,606]],["backmarket.com",[604,605,606]],["eleven-sportswear.cz",[607,608,609]],["silvini.com",[607,608,609]],["silvini.de",[607,608,609]],["purefiji.cz",[607,608,609]],["voda-zdarma.cz",[607,608,609]],["lesgarconsfaciles.com",[607,608,609]],["ulevapronohy.cz",[607,608,609]],["vitalvibe.eu",[607,608,609]],["plavte.cz",[607,608,609]],["mo-tools.cz",[607,608,609]],["flamantonlineshop.cz",[607,608,609]],["sandratex.cz",[607,608,609]],["norwayshop.cz",[607,608,609]],["3d-foto.cz",[607,608,609]],["neviditelnepradlo.cz",[607,608,609]],["nutrimedium.com",[607,608,609]],["silvini.cz",[607,608,609]],["karel.cz",[607,608,609]],["silvini.sk",[607,608,609]],["book-n-drive.de",610],["cotswoldoutdoor.com",611],["cotswoldoutdoor.ie",611],["cam.start.canon",612],["usnews.com",613],["researchaffiliates.com",614],["singkinderlieder.de",615],["ba.com",[618,619,620]],["britishairways.com",[618,619,620]],["cineman.pl",[621,622,623]],["tv-trwam.pl",[621,622,623,624]],["qatarairways.com",[625,626,627,628,629]],["vivaldi.com",630],["emuia1.gugik.gov.pl",631],["nike.com",632],["adidas.at",633],["adidas.be",633],["adidas.ca",633],["adidas.ch",633],["adidas.cl",633],["adidas.co",633],["adidas.co.in",633],["adidas.co.kr",633],["adidas.co.nz",633],["adidas.co.th",633],["adidas.co.uk",633],["adidas.com",633],["adidas.com.ar",633],["adidas.com.au",633],["adidas.com.br",633],["adidas.com.my",633],["adidas.com.ph",633],["adidas.com.vn",633],["adidas.cz",633],["adidas.de",633],["adidas.dk",633],["adidas.es",633],["adidas.fi",633],["adidas.fr",633],["adidas.gr",633],["adidas.ie",633],["adidas.it",633],["adidas.mx",633],["adidas.nl",633],["adidas.no",633],["adidas.pe",633],["adidas.pl",633],["adidas.pt",633],["adidas.ru",633],["adidas.se",633],["adidas.sk",633],["colourbox.com",634],["ebilet.pl",635],["myeventeo.com",636],["snap.com",637],["ratemyprofessors.com",638],["filen.io",639],["leotrippi.com",640],["restaurantclub.pl",640],["context.news",640],["stilord.com",641],["stilord.pl",641],["stilord.de",641],["stilord.fr",641],["quantamagazine.org",642],["scaleway.com",644],["hellotv.nl",645],["lasestrellas.tv",646],["hair-body-24.de",647],["shopforyou47.de",647],["kreativverliebt.de",647],["anderweltverlag.com",647],["octavio-shop.com",647],["forcetools-kepmar.eu",647],["fantecshop.de",647],["hexen-werkstatt.shop",647],["shop-naturstrom.de",647],["biona-shop.de",647],["camokoenig.de",647],["bikepro.de",647],["kaffeediscount.com",647],["vamos-skateshop.com",647],["holland-shop.com",647],["avonika.com",647],["hurton.pl",648],["officesuite.com",649],["fups.com",[650,652]],["scienceopen.com",653],["moebel-mahler-siebenlehn.de",[654,655]],["calendly.com",656],["batesenvironmental.co.uk",[657,658]],["ubereats.com",659],["101internet.ru",660],["bein.com",661],["beinsports.com",661],["figshare.com",662],["hitado.de",663],["bitso.com",664],["gallmeister.fr",665],["eco-toimistotarvikkeet.fi",666],["proficient.fi",666],["developer.ing.com",667],["webtrack.dhlglobalmail.com",669],["webtrack.dhlecs.com",669],["ehealth.gov.gr",670],["calvinklein.se",[671,672,673]],["calvinklein.fi",[671,672,673]],["calvinklein.sk",[671,672,673]],["calvinklein.si",[671,672,673]],["calvinklein.ch",[671,672,673]],["calvinklein.ru",[671,672,673]],["calvinklein.com",[671,672,673]],["calvinklein.pt",[671,672,673]],["calvinklein.pl",[671,672,673]],["calvinklein.at",[671,672,673]],["calvinklein.nl",[671,672,673]],["calvinklein.hu",[671,672,673]],["calvinklein.lu",[671,672,673]],["calvinklein.lt",[671,672,673]],["calvinklein.lv",[671,672,673]],["calvinklein.it",[671,672,673]],["calvinklein.ie",[671,672,673]],["calvinklein.hr",[671,672,673]],["calvinklein.fr",[671,672,673]],["calvinklein.es",[671,672,673]],["calvinklein.ee",[671,672,673]],["calvinklein.de",[671,672,673]],["calvinklein.dk",[671,672,673]],["calvinklein.cz",[671,672,673]],["calvinklein.bg",[671,672,673]],["calvinklein.be",[671,672,673]],["calvinklein.co.uk",[671,672,673]],["ofdb.de",674],["dtksoft.com",675],["serverstoplist.com",676],["doka.com",[683,684,685]],["abi.de",[686,687]],["studienwahl.de",[686,687]],["youthforum.org",688],["journal.hr",[689,690,691,692]],["howstuffworks.com",693],["stickypassword.com",[694,695,696]],["conversion-rate-experts.com",[697,698]],["merkur.si",[699,700,701]],["petitionenligne.com",[702,703]],["petitionenligne.be",[702,703]],["petitionenligne.fr",[702,703]],["petitionenligne.re",[702,703]],["petitionenligne.ch",[702,703]],["skrivunder.net",[702,703]],["petitiononline.uk",[702,703]],["petitions.nz",[702,703]],["petizioni.com",[702,703]],["peticao.online",[702,703]],["skrivunder.com",[702,703]],["peticiones.ar",[702,703]],["petities.com",[702,703]],["petitionen.com",[702,703]],["petice.com",[702,703]],["opprop.net",[702,703]],["peticiok.com",[702,703]],["peticiones.net",[702,703]],["peticion.es",[702,703]],["peticiones.pe",[702,703]],["peticiones.mx",[702,703]],["peticiones.cl",[702,703]],["peticije.online",[702,703]],["peticiones.co",[702,703]],["mediathek.lfv-bayern.de",704],["aluypvc.es",[705,706,707]],["pracuj.pl",[708,709,710,711,712]],["vki.at",714],["konsument.at",714],["chollometro.com",715],["dealabs.com",715],["hotukdeals.com",715],["pepper.it",715],["pepper.pl",715],["preisjaeger.at",715],["mydealz.de",715],["easyfind.ch",[719,720]],["e-shop.leonidas.com",[721,722]],["lastmile.lt",723],["constantin.film",[724,725,726]],["notion.so",727],["digi24.ro",728],["omgevingsloketinzage.omgeving.vlaanderen.be",[729,730]],["primor.eu",731],["tameteo.com",732],["tempo.pt",732],["yourweather.co.uk",732],["meteored.cl",732],["meteored.mx",732],["tempo.com",732],["ilmeteo.net",732],["meteored.com.ar",732],["daswetter.com",732],["algarvevacation.net",733],["3sat.de",734],["oxxio.nl",[735,736]],["butterflyshop.dk",[737,738,739]],["praxis.nl",740],["brico.be",740]]);

const entitiesMap = new Map([]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function setCookie(
    name = '',
    value = '',
    path = ''
) {
    if ( name === '' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('set-cookie', name, value, path);
    name = encodeURIComponent(name);

    const validValues = [
        'accept', 'reject',
        'accepted', 'rejected', 'notaccepted',
        'allow', 'deny',
        'allowed', 'disallow',
        'enable', 'disable',
        'enabled', 'disabled',
        'ok',
        'on', 'off',
        'true', 't', 'false', 'f',
        'yes', 'y', 'no', 'n',
        'necessary', 'required',
    ];
    const normalized = value.toLowerCase();
    const match = /^("?)(.+)\1$/.exec(normalized);
    const unquoted = match && match[2] || normalized;
    if ( validValues.includes(unquoted) === false ) {
        if ( /^\d+$/.test(unquoted) === false ) { return; }
        const n = parseInt(value, 10);
        if ( n > 15 ) { return; }
    }

    const done = setCookieFn(
        false,
        name,
        value,
        '',
        path,
        safeSelf().getExtraArgs(Array.from(arguments), 3)
    );

    if ( done ) {
        safe.uboLog(logPrefix, 'Done');
    }
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

function setCookieFn(
    trusted = false,
    name = '',
    value = '',
    expires = '',
    path = '',
    options = {},
) {
    const cookieBefore = getCookieFn(name);
    if ( cookieBefore !== undefined && options.dontOverwrite ) { return; }
    if ( cookieBefore === value && options.reload ) { return; }

    const cookieParts = [ name, '=', value ];
    if ( expires !== '' ) {
        cookieParts.push('; expires=', expires);
    }

    if ( path === '' ) { path = '/'; }
    else if ( path === 'none' ) { path = ''; }
    if ( path !== '' && path !== '/' ) { return; }
    if ( path === '/' ) {
        cookieParts.push('; path=/');
    }

    if ( trusted ) {
        if ( options.domain ) {
            cookieParts.push(`; domain=${options.domain}`);
        }
        cookieParts.push('; Secure');
    }

    try {
        document.cookie = cookieParts.join('');
    } catch(_) {
    }

    const done = getCookieFn(name) === value;
    if ( done && options.reload ) {
        window.location.reload();
    }

    return done;
}

function getCookieFn(
    name = ''
) {
    for ( const s of document.cookie.split(/\s*;\s*/) ) {
        const pos = s.indexOf('=');
        if ( pos === -1 ) { continue; }
        if ( s.slice(0, pos) !== name ) { continue; }
        return s.slice(pos+1).trim();
    }
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
    try { setCookie(...argsList[i]); }
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
    return uBOL_setCookie();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_setCookie = cloneInto([
            [ '(', uBOL_setCookie.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_setCookie);
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
    delete page.uBOL_setCookie;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
