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

'use strict';

// ruleset: deu-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".s-item\",\"tasks\":[[\"has\",{\"selector\":\"span.s-item__title--tagblock__SPONSORED\"}]]}"],["{\"selector\":\".block.medium\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://dt.sportradar.com/\\\"]\"}]]}"],["{\"selector\":\".article-list-item.article-card.article-card-default\",\"tasks\":[[\"has\",{\"selector\":\".commercial-tag\"}]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has\",{\"selector\":\"button\",\"tasks\":[[\"has-text\",\"Highspeed-Download\"]]}]]}"],["{\"selector\":\".avgrid_1_of_1.viewlet-bottom\",\"tasks\":[[\"has\",{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Advertorials\"]]}]]}","{\"selector\":\".gridteaser.gridteaser-m\",\"tasks\":[[\"has\",{\"selector\":\"h4\",\"tasks\":[[\"has-text\",\"Sponsored Post\"]]}]]}"],["{\"selector\":\".col4\",\"tasks\":[[\"has\",{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"Unterstützt durch:\"]]}]]}"],["{\"selector\":\".teaser-m-default\",\"tasks\":[[\"has-text\",\"Native Advertising\"]]}","{\"selector\":\".teaser-m-default\",\"tasks\":[[\"has-text\",\"Publireportage\"]]}"],["{\"selector\":\".list_item\",\"tasks\":[[\"has\",{\"selector\":\".dachzeile\",\"tasks\":[[\"has-text\",\"Partnerzone\"]]}]]}"],["{\"selector\":\".v-A_-topteaser__article\",\"tasks\":[[\"has\",{\"selector\":\".v-A_-teaser__tag--ad\"}]]}"],["{\"selector\":\"div.post.hentry.ivycat-post\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://amzn.to/\\\"]\"}]]}","{\"selector\":\"div.post.hentry.ivycat-post\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://www.amazon.de/\\\"]\"}]]}","{\"selector\":\"h2.storytitle\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"http://bit.ly/\\\"]\"}],[\"spath\",\" + p + div.clear + div.infobox\"]]}","{\"selector\":\"h2.storytitle\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"http://bit.ly/\\\"]\"}],[\"spath\",\" + p\"]]}","{\"selector\":\"h2.storytitle\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"http://bit.ly/\\\"]\"}]]}","{\"selector\":\"h2.storytitle\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://amzn.to/\\\"]\"}],[\"spath\",\" + p + div.clear + div.infobox\"]]}","{\"selector\":\"h2.storytitle\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://amzn.to/\\\"]\"}],[\"spath\",\" + p\"]]}","{\"selector\":\"h2.storytitle\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://amzn.to/\\\"]\"}]]}","{\"selector\":\"h2.storytitle\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://bit.ly/\\\"]\"}],[\"spath\",\" + p + div.clear + div.infobox\"]]}","{\"selector\":\"h2.storytitle\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://bit.ly/\\\"]\"}],[\"spath\",\" + p\"]]}","{\"selector\":\"h2.storytitle\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://bit.ly/\\\"]\"}]]}","{\"selector\":\"h2.storytitle\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://www.amazon.de/\\\"]\"}],[\"spath\",\" + p + div.clear + div.infobox\"]]}","{\"selector\":\"h2.storytitle\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://www.amazon.de/\\\"]\"}],[\"spath\",\" + p\"]]}","{\"selector\":\"h2.storytitle\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://www.amazon.de/\\\"]\"}]]}"],["{\"selector\":\".custom\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".core-rail > div > div[id^=\\\"ember\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Gesponsert\"]]}]]}"],["{\"selector\":\".teaser_container.teaser-htmlcode.relative.row\",\"tasks\":[[\"has\",{\"selector\":\".f1de-container-title\",\"tasks\":[[\"has-text\",\"Die besten Leasing-Deals\"]]}]]}"],["{\"selector\":\".v-A_-teaser__halfcol__listitem\",\"tasks\":[[\"has\",{\"selector\":\".v-A_-teaser__tag--ad\"}]]}"],["{\"selector\":\".v-A_-topteaser__rotationbox__item\",\"tasks\":[[\"has\",{\"selector\":\".v-A_-teaser__tag--ad\"}]]}"],["{\"selector\":\".v-A_-white__tile\",\"tasks\":[[\"has\",{\"selector\":\".v-A_-teaser__tag--ad\"}]]}"],["{\"selector\":\".post-grid-item.grid-item\",\"tasks\":[[\"has\",{\"selector\":\".ad-badge\"}]]}"],["{\"selector\":\"article.o-CompactProductListItem\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://retail-api.sa-tech.de/api/\\\"]\"}]]}"],["{\"selector\":\".swiper-slide\",\"tasks\":[[\"has\",{\"selector\":\".entry-adv\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> img[referrerpolicy=\\\"unsafe-url\\\"]\"}]]}"],["{\"selector\":\".row.mt-0.mb-3.d-print-none\",\"tasks\":[[\"has\",{\"selector\":\".fa-ad\"}]]}"],["{\"selector\":\"article[class^=\\\"teaser nummer-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"span.specialfeature\"}]]}"],["{\"selector\":\".ce_topicbox\",\"tasks\":[[\"has\",{\"selector\":\".label-ad-highlight\"}]]}"],["{\"selector\":\".elementor-section\",\"tasks\":[[\"has\",{\"selector\":\"h2.elementor-heading-title\",\"tasks\":[[\"has-text\",\"Werbung\"]]}]]}"],["{\"selector\":\"article.message--post\",\"tasks\":[[\"has\",{\"selector\":\"span.username\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\"div.wpb_text_column\",\"tasks\":[[\"has\",{\"selector\":\"h5\",\"tasks\":[[\"has-text\",\"Werbung\"]]}]]}","{\"selector\":\"div.wpb_text_column\",\"tasks\":[[\"has\",{\"selector\":\"h6\",\"tasks\":[[\"has-text\",\"Werbung\"]]}]]}"],["{\"selector\":\"a.background-red-bright\",\"tasks\":[[\"has\",{\"selector\":\"span.anzeige\"}]]}"],["{\"selector\":\"div[data-testid=\\\"card\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"span.MuiCardHeader-title\",\"tasks\":[[\"has-text\",\"Gesponserte Artikel\"]]}]]}","{\"selector\":\"div[data-testid=\\\"reco-wrapper\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div[class^=\\\"indexesm__HeadlineElement-fragment-product-master__\\\"]\",\"tasks\":[[\"has-text\",\"Gesponserte Artikel\"]]}]]}"],["{\"selector\":\".eight.columns.alpha.content\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Advertorial\"]]}]]}"],["{\"selector\":\".m-teaser\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Sponsored\"]]}]]}"],["{\"selector\":\".m-article-teaser\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".code-block\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/ANZEIGE|Anzeige|Werbung|WERBUNG/\"]]}]]}"],["{\"selector\":\"#bnTickerContainer\",\"tasks\":[[\"has\",{\"selector\":\"#bnTickerAdNotice\"}]]}"],["{\"selector\":\".Listing > div[class]\",\"tasks\":[[\"has\",{\"selector\":\"path[d$=\\\"92.456,64.241 z\\\"]\"}]]}","{\"selector\":\".mt-md\",\"tasks\":[[\"has\",{\"selector\":\"path[d$=\\\"92.456,64.241 z\\\"]\"}]]}","{\"selector\":\"a.secondary\",\"tasks\":[[\"has\",{\"selector\":\".Badge__Content\",\"tasks\":[[\"has-text\",\"/anzeige|gesponsert/\"]]}]]}","{\"selector\":\"article.copy-sm\",\"tasks\":[[\"has\",{\"selector\":\"i\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}","{\"selector\":\"section > header + a + div + div\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\"div.text-asset.text-width\",\"tasks\":[[\"has\",{\"selector\":\"p.text-width\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\"article.gridArea__teaserM\",\"tasks\":[[\"has\",{\"selector\":\"div.teaserBlock__label\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".teaser\",\"tasks\":[[\"has\",{\"selector\":\".teaser__promolabel\"}]]}"],["{\"selector\":\".td_block_wrap\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Sponsored Post\"]]}]]}"],["{\"selector\":\".previewtile.swiper-slide\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://amzn.to/\\\"]\"}]]}"],["{\"selector\":\".entry.hitlistitem.balken\",\"tasks\":[[\"has\",{\"selector\":\".flag2\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".node.teaser\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\"div.product-tile\",\"tasks\":[[\"has\",{\"selector\":\"span.product-tile__sponsored\"}]]}"],["{\"selector\":\".b-module\",\"tasks\":[[\"has\",{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Anzeigen\"]]}]]}","{\"selector\":\".mfe-lex\",\"tasks\":[[\"has\",{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Anzeigen\"]]}]]}"],["{\"selector\":\".node--article\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".v-A_-sidecol__list__item\",\"tasks\":[[\"has\",{\"selector\":\".v-A_-teaser__tag--ad\"}]]}"],["{\"selector\":\"h4\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"ANZEIGEN\"]]}]]}"],["{\"selector\":\".owl-carousel.owl-loaded.owl-drag\",\"tasks\":[[\"has\",{\"selector\":\".label-ad-highlight\"}]]}"],["{\"selector\":\".excerpt-tile.cell.small-12.medium-6\",\"tasks\":[[\"has\",{\"selector\":\".advertorials\"}]]}"],["{\"selector\":\"tr\",\"tasks\":[[\"has\",{\"selector\":\"span.sprite.h-w-c\"}]]}"],["{\"selector\":\".teaser__item\",\"tasks\":[[\"has\",{\"selector\":\".teaser__adtype\"}]]}"],["{\"selector\":\"article[data-post-id]\",\"tasks\":[[\"has\",{\"selector\":\".sponsor-byline\"}]]}"],["{\"selector\":\".content-item-medium\",\"tasks\":[[\"has\",{\"selector\":\"data\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}","{\"selector\":\".content-item-small\",\"tasks\":[[\"has\",{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".box.img_link\",\"tasks\":[[\"has\",{\"selector\":\".advertorial_hint\"}]]}"],["{\"selector\":\".alice-teaser-list-item\",\"tasks\":[[\"has\",{\"selector\":\".alice-teaser-meta-text\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".af-block-native\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}","{\"selector\":\".af-block-native\",\"tasks\":[[\"has-text\",\"Sponsored Post\"]]}"],["{\"selector\":\"li[data-article-id]\",\"tasks\":[[\"has\",{\"selector\":\".icon-addy\"}]]}"],["{\"selector\":\".productCard\",\"tasks\":[[\"has\",{\"selector\":\"div.premiumProductCaption\"}]]}"],["{\"selector\":\".bg-gray-light\",\"tasks\":[[\"has\",{\"selector\":\"div.text-right\",\"tasks\":[[\"has-text\",\"Werbung\"]]}]]}"],["{\"selector\":\".p-3.-mx-3.bg-gray-50\",\"tasks\":[[\"has\",{\"selector\":\"a[data-component=\\\"TeaserLinkContainer\\\"]:not(a[href^=\\\"https://www.heise.de/api/accountservice/subscribe/\\\"])\"}]]}","{\"selector\":\".px-4.md\\\\:px-6.py-3.h-full.bg-gray-50\",\"tasks\":[[\"has\",{\"selector\":\".mb-3.text-xs.leading-none.text-center\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}","{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"=== Anzeige / Sponsorenhinweis ===\"],[\"spath\",\" + p + p\"]]}","{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"=== Anzeige / Sponsorenhinweis ===\"],[\"spath\",\" + p\"]]}","{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"=== Anzeige / Sponsorenhinweis ===\"]]}","{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"=== Anzeige / Sponsorenhinweis ende===\"]]}"],["{\"selector\":\".swiper\",\"tasks\":[[\"has\",{\"selector\":\".headline\",\"tasks\":[[\"has-text\",\"Partner\"]]}]]}"],["{\"selector\":\".td_module_ih_current_news\",\"tasks\":[[\"has\",{\"selector\":\".spo\"}]]}"],["{\"selector\":\".ce_postlistbox\",\"tasks\":[[\"has\",{\"selector\":\".label-ad-highlight\"}]]}"],["{\"selector\":\"li\",\"tasks\":[[\"has\",{\"selector\":\"[data-testid=\\\"advertisementSign-flag\\\"]\"}]]}"],["{\"selector\":\"div[data-widget_type=\\\"shortcode.default\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}","{\"selector\":\"div[style=\\\"text-align: center;\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}"],["{\"selector\":\".product\",\"tasks\":[[\"has\",{\"selector\":\"div.product__sponsored-ad-label\"}]]}","{\"selector\":\".rd-recommender__tile\",\"tasks\":[[\"has\",{\"selector\":\"div.rd-product-tile__badge--ad\"}]]}","{\"selector\":\".recommender-wrapper\",\"tasks\":[[\"has-text\",\"Gesponsert\"]]}"],["{\"selector\":\".small-12.column\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}"],["{\"selector\":\".appetizer\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}"],["{\"selector\":\"div[data-test=\\\"mms-product-card\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div[data-test=\\\"mms-plp-sponsored\\\"]\"}]]}","{\"selector\":\"li\",\"tasks\":[[\"has\",{\"selector\":\"div[data-test=\\\"mms-product-card\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Gesponsert\"]]}]]}]]}"],["{\"selector\":\".text-center\",\"tasks\":[[\"has-text\",\"- Werbung -\"]]}"],["{\"selector\":\".result\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://metager.de/partner/r?\\\"]\"}]]}","{\"selector\":\".result\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://r.search.yahoo.com/\\\"]\"}]]}"],["{\"selector\":\".mfcss_card-article-2--grid-container-flex > span\",\"tasks\":[[\"has-text\",\"WERBUNG\"]]}","{\"selector\":\".product-teaser-container\",\"tasks\":[[\"has-text\",\"WERBUNG\"]]}"],["{\"selector\":\".sp-module\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Kleinanzeigen\"]]}]]}"],["{\"selector\":\".main-preview\",\"tasks\":[[\"has\",{\"selector\":\".anzeige-label\"}]]}","{\"selector\":\".slider-preview\",\"tasks\":[[\"has\",{\"selector\":\".anzeige-label\"}]]}"],["{\"selector\":\".moduletable.text-center\",\"tasks\":[[\"has\",{\"selector\":\".bildunterschrift\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".card-body\",\"tasks\":[[\"has-text\",\"Sponsoren\"]]}"],["{\"selector\":\".flex-layout\",\"tasks\":[[\"has\",{\"selector\":\"div[class^=\\\"ArticleTeaser_ov-article-teaser__onvistaCustomer_\\\"]\"}]]}","{\"selector\":\".outer-spacing--xxlarge-top\",\"tasks\":[[\"has-text\",\"Werbung von\"]]}","{\"selector\":\".ov-article-teaser\",\"tasks\":[[\"has\",{\"selector\":\".ov-article-teaser__onvistaCustomer\"}]]}","{\"selector\":\"a[class*=\\\"ArticleTeaserBox\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div.ov-subline\",\"tasks\":[[\"has-text\",\"Werbung\"]]}]]}"],["{\"selector\":\"div.box\",\"tasks\":[[\"has\",{\"selector\":\"span.banner-text + h4\",\"tasks\":[[\"has-text\",\"/Partner-Angebot|Angebote/\"]]}]]}"],["{\"selector\":\".post.type-post.status-publish\",\"tasks\":[[\"has\",{\"selector\":\".anzeige-box\"}]]}"],["{\"selector\":\".services-item\",\"tasks\":[[\"has-text\",\"bei Amazon\"]]}"],["{\"selector\":\".box.box-style1\",\"tasks\":[[\"has\",{\"selector\":\".notice\"}]]}"],["{\"selector\":\".excerpt-tile.cell\",\"tasks\":[[\"has\",{\"selector\":\".advertorials\"}]]}"],["{\"selector\":\".postlist-item\",\"tasks\":[[\"has\",{\"selector\":\".label\",\"tasks\":[[\"has-text\",\"Gesponsert\"]]}]]}"],["{\"selector\":\".onlyDesktop\",\"tasks\":[[\"has\",{\"selector\":\"div.adContainer\"}]]}"],["{\"selector\":\".content-view-containerbox\",\"tasks\":[[\"has-text\",\"SONDER-VERÖFFENTLICHUNG\"]]}"],["{\"selector\":\".article-box\",\"tasks\":[[\"has\",{\"selector\":\"> .article-box__text > .article-box__info > span.article-badge--ad\"}]]}","{\"selector\":\".article-fill\",\"tasks\":[[\"has\",{\"selector\":\".article-badge.article-badge--ad\"}]]}"],["{\"selector\":\".fc_bloglist_item\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Advertorial\"]]}]]}","{\"selector\":\".mod_flexicontent_standard_wrapper\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Advertorial\"]]}]]}"],["{\"selector\":\".moduletable\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\"article.message--post\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".td_module_wrap\",\"tasks\":[[\"has\",{\"selector\":\".td-post-author-name\",\"tasks\":[[\"has-text\",\"Werbung\"]]}]]}"],["{\"selector\":\"div[data-testid=\\\"StreamLayout.Companion\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://ad.doubleclick.net/\\\"]\"}]]}"],["{\"selector\":\"div[id^=\\\"T-\\\"][onfocus^=\\\"A('zid=\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\"article.article-tile\",\"tasks\":[[\"has\",{\"selector\":\"span.article-tile__badge2\",\"tasks\":[[\"has-text\",\"ANZEIGE\"]]}]]}"],["{\"selector\":\".td_block_wrap\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".small-12.column.space\",\"tasks\":[[\"has\",{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"--Anzeige--\"]]}]]}"],["{\"selector\":\".artikel-preview-content\",\"tasks\":[[\"has\",{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"-ANZEIGE-\"]]}]]}"],["{\"selector\":\".breakingNewsOfferteBox\",\"tasks\":[[\"has\",{\"selector\":\"span.offerteFlag\"}]]}","{\"selector\":\".footnote\",\"tasks\":[[\"has\",{\"selector\":\".headline-box\",\"tasks\":[[\"has-text\",\"Werbung\"]]}]]}","{\"selector\":\".module.c1.hidden-xs\",\"tasks\":[[\"has\",{\"selector\":\"span.issuerPromotionHint\",\"tasks\":[[\"has-text\",\"Werbung\"]]}]]}","{\"selector\":\".newsflash\",\"tasks\":[[\"has\",{\"selector\":\"span.suffix.wo-inline-block.pull-right\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}","{\"selector\":\".newsflash\",\"tasks\":[[\"has\",{\"selector\":\"span.wo-inline-block\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}","{\"selector\":\".sbteaser\",\"tasks\":[[\"has\",{\"selector\":\"span.generalAdTag\"}]]}","{\"selector\":\".sliderItem.active\",\"tasks\":[[\"has\",{\"selector\":\"span.news-item\",\"tasks\":[[\"has\",{\"selector\":\"img[alt=\\\"Anzeige\\\"]\"}]]}]]}","{\"selector\":\".teaser.objectfit\",\"tasks\":[[\"has\",{\"selector\":\"div.angebot\"}]]}","{\"selector\":\".teaser.objectfit\",\"tasks\":[[\"has\",{\"selector\":\"div.anzeige\"}]]}","{\"selector\":\"tr\",\"tasks\":[[\"has\",{\"selector\":\"td.right\",\"tasks\":[[\"has\",{\"selector\":\"img[alt=\\\"Anzeige\\\"]\"}]]}]]}"],["{\"selector\":\"div[data-hb-id=\\\"Grid.Item\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"&sponsoredid=\\\"]\"}]]}"],["{\"selector\":\".c-inline-teaser__body.c-inline-teaser__body--is-standalone\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://www.financeads.net/tc.php?\\\"]\"}]]}","{\"selector\":\"div[id][data-qa]\",\"tasks\":[[\"has\",{\"selector\":\".c-buelent-linkbox__label\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".news330.floatL.mr10\",\"tasks\":[[\"has\",{\"selector\":\".anzeige\"}]]}"],["{\"selector\":\"div.ExtraPostBlock\",\"tasks\":[[\"has\",{\"selector\":\"div.post_block\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}],[\"spath\",\":not(.with_rep)\"]]}"],["{\"selector\":\".zett-teaser-trio\",\"tasks\":[[\"has\",{\"selector\":\".zett-teaser-trio__kicker--ad-anzeige\"}]]}"],["{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/ANZ|EIGE/\"],[\"spath\",\" + button\"]]}","{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/ANZ|EIGE/\"],[\"spath\",\" + div\"]]}"],["{\"selector\":\"#ContainerFull\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".jeg_post.jeg_pl_md_2.pr.format-standard\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"PR-INFO\"]]}]]}"],["{\"selector\":\".post-overview\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\"article[id^=\\\"post-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".sponsored-indicator\"}]]}"],["{\"selector\":\"aside\",\"tasks\":[[\"has\",{\"selector\":\"img[src*=\\\"/adverts/\\\"]\"}]]}"],["{\"selector\":\".mleft-10\",\"tasks\":[[\"has-text\",\"Werbung\"],[\"spath\",\" + .box\"]]}","{\"selector\":\".mleft-10.small-font.light-grey\",\"tasks\":[[\"has-text\",\"Werbung\"],[\"spath\",\" + .box + .border-blue-2\"]]}","{\"selector\":\".row.d-flex.align-items-center\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"http://g.finanzen.net/allvest-fonds-home-intelligent-invest\\\"]\"}]]}","{\"selector\":\".snapshot__trading\",\"tasks\":[[\"has\",{\"selector\":\".button-advertising-hint\"}]]}","{\"selector\":\"article.page-content__item\",\"tasks\":[[\"has\",{\"selector\":\"img[alt=\\\"UBS\\\"]\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> #nydus_org_970x300_billboard_responsive\"}]]}","{\"selector\":\"div.ui-tabs\",\"tasks\":[[\"has\",{\"selector\":\"#nydus_org_300x600_desktop_1\"}]]}"],["{\"selector\":\".code-block\",\"tasks\":[[\"has\",{\"selector\":\"i.fa-cloud-download-alt\"}]]}","{\"selector\":\"form\",\"tasks\":[[\"has\",{\"selector\":\"button\",\"tasks\":[[\"has-text\",\"Download\"]]}]]}"],["{\"selector\":\".text-right.text-white.col-6\",\"tasks\":[[\"has-text\",\"präsentiert von\"]]}"]];

const hostnamesMap = new Map([["ebay.at",0],["ebay.ch",0],["ebay.de",[0,42]],["laola1.at",1],["meinbezirk.at",2],["ddl-warez.cc",3],["avguide.ch",4],["games.ch",5],["handelszeitung.ch",6],["pctipp.ch",7],["elektrobike-online.com",8],["roadbike.de",[8,15]],["hornoxe.com",9],["kajak-magazin.com",10],["linkedin.com",11],["motorsport-total.com",12],["outdoor-magazin.com",[13,14,15]],["caravaning.de",13],["motorradonline.de",[13,14]],["promobil.de",13],["mountainbike-magazin.de",15],["running-magazin.com",16],["shop-apotheke.com",17],["szene-hamburg.com",18],["weihnachts-filme.com",19],["froheweihnachten.info",19],["weihnachten.me",19],["weihnachts-bilder.org",19],["zwischengas.com",20],["abendzeitung-muenchen.de",21],["all-electronics.de",22],["produktion.de",[22,61,81]],["automotiveit.eu",[22,61]],["alles-mahlsdorf.de",23],["android-hilfe.de",24],["apfeltalk.de",25],["ariva.de",26],["baur.de",27],["bergsteiger.de",28],["berliner-kurier.de",29],["berliner-zeitung.de",30],["bitreporter.de",31],["boersennews.de",32],["chip.de",33],["computerbase.de",34],["computerbild.de",35],["connect.de",36],["pc-magazin.de",36],["cyclingmagazine.de",37],["dashcamtest.de",38],["dastelefonbuch.de",39],["dkamera.de",40],["douglas.de",41],["emotion.de",43],["eurotransport.de",44],["fazemag.de",45],["fertigung.de",46],["feuerwehrmagazin.de",47],["finanznachrichten.de",48],["fuersie.de",49],["futurezone.de",50],["gamestar.de",51],["gesundheit.de",52],["giga.de",53],["gofeminin.de",54],["golem.de",55],["guenstiger.de",56],["hardwareluxx.de",57],["heise.de",58],["imsueden.de",59],["inside-digital.de",60],["instandhaltung.de",61],["technik-einkauf.de",61],["jameda.de",62],["jungefreiheit.de",63],["kaufland.de",64],["lausitz-tv.de",65],["marbacher-zeitung.de",66],["mediamarkt.de",67],["saturn.de",67],["meissen-fernsehen.de",68],["metager.de",69],["metro.de",70],["mmnews.de",71],["mopo.de",72],["nur-positive-nachrichten.de",73],["o-sport.de",74],["onvista.de",75],["pcwelt.de",76],["photographie.de",77],["pollenflug.de",78],["preis24.de",79],["print.de",80],["promiflash.de",82],["report-d.de",83],["saechsische.de",84],["satvision.de",85],["seo-suedwest.de",86],["skodacommunity.de",87],["smartphonemag.de",88],["t-online.de",[89,90]],["www-t--online-de.cdn.ampproject.org",90],["tag24.de",91],["tonight.de",92],["um-tv.de",93],["unicum.de",94],["wallstreet-online.de",95],["wayfair.de",96],["welt.de",97],["winfuture.de",98],["winfuture-forum.de",99],["zeit.de",100],["zentrum-der-gesundheit.de",101],["stol.it",102],["swz.it",103],["carpediem.life",104],["diegrenzgaenger.lu",105],["az.com.na",106],["finanzen.net",107],["nydus.org",108],["ibooks.to",109],["sportdeutschland.tv",110]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
