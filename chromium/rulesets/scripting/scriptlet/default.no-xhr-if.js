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
const uBOL_noXhrIf = function() {

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["request=adb"],["doubleclick"],["googlesyndication"],["/adsbygoogle|doubleclick/"],["homad-global-configs"],["/enthusiastgaming|googleoptimize|googletagmanager/"],["/doubleclick|googlesyndication/"],["/^(?!.*(einthusan\\.io|yahoo|rtnotif|ajax|quantcast|bugsnag))/"],["/adnxs.com|onetag-sys.com|teads.tv|google-analytics.com/"],["ad_"],["/redirector\\.googlevideo\\.com\\/videoplayback[\\s\\S]*?dclk_video_ads/"],["/\\/ad\\/g\\/1/"],["ads"],["svonm"],["/\\/VisitorAPI\\.js|\\/AppMeasurement\\.js/"],["inklinkor.com"],["fwmrm.net"],["damoh"],["/youboranqs01|spotx|springserve/"],["adsbygoogle","length:10"],["adsbygoogle"],["ezoic"],["popunder"],["/pagead2\\.googlesyndication\\.com|inklinkor\\.com/"],["/^/"],["/ad"],["prebid"],["wpadmngr"],["/ads"],["pub.network"],["/ads|doubleclick/"],["url:googlesyndication"],["/analytics|livestats/"],["mahimeta"],["notifier"],["/ad-"],["/coinzillatag|czilladx/"],["czilladx"],["php"],["/googlesyndication|doubleclick/"],["bmcdn6"],["adx"],["cls_report?"],["adswizz.com"],["tag"],["googletagmanager"],["pagead2.googlesyndication.com"],["time-events"],["/_Ad_|_ad/"],["/googlesyndication|nitropay/"],["method:POST url:/logImpressions"],["method:POST"],["utreon.com/pl/api/event method:POST"],["log-sdk.ksapisrv.com/rest/wd/common/log/collect method:POST"],["/VisitorAPI|AppMeasurement/"],["analytics/bulk-pixel"],["/(trace|beacon)\\.qq\\.com/"],["mobileanalytics"],["cloudflare.com/cdn-cgi/trace"],["/recommendations."],["/api/analytics"],["api"],["lr-ingest.io"],["/gtm.js"],["ip-api"]];

const hostnamesMap = new Map([["handelsblatt.com",0],["moviepilot.de",1],["journaldemontreal.com",1],["minhaconexao.com.br",1],["videolyrics.in",1],["sportshub.to",1],["topsporter.net",1],["meteoetradar.com",1],["gala.fr",1],["geo.fr",1],["voici.fr",1],["sankaku.app",2],["zigforums.com",2],["ge-map-overlays.appspot.com",2],["freegogpcgames.com",2],["informaxonline.com",[2,25]],["cambb.xxx",2],["gaminplay.com",2],["routech.ro",2],["rontechtips.com",2],["homeairquality.org",2],["techtrim.tech",2],["pigeonburger.xyz",2],["askpaccosi.com",2],["crypto4tun.com",2],["fusedgt.com",2],["apkowner.org",2],["appsmodz.com",2],["bingotingo.com",2],["superpsx.com",2],["stringreveals.com",2],["fox.com",2],["obutecodanet.ig.com.br",2],["firmwarex.net",2],["softwaretotal.net",2],["freecodezilla.net",2],["movieslegacy.com",2],["iconmonstr.com",2],["rbxscripts.net",2],["adslink.pw",2],["comentariodetexto.com",2],["wordpredia.com",2],["livsavr.co",2],["gsmhamza.com",2],["38.242.194.12",2],["bi-girl.net",2],["blurayufr.xyz",2],["medeberiyaa.com",2],["samuraiscan.org",2],["shinobijawi.id",2],["snbc13.com",2],["webmatrices.com",2],["adelsfun.com",2],["advantien.com",2],["bailbondsfinder.com",2],["bigpiecreative.com",2],["childrenslibrarylady.com",2],["classifarms.com",2],["comtasq.ca",2],["crone.es",2],["ctrmarketingsolutions.com",2],["dropnudes.com",2],["ftuapps.dev",2],["genzsport.com",2],["grsprotection.com",2],["gruporafa.com.br",2],["inmatefindcalifornia.com",2],["inmatesearchidaho.com",2],["itsonsitetv.com",2],["mfmfinancials.com",2],["myproplugins.com",2],["onehack.us",2],["ovester.com",2],["paste.bin.sx",2],["privatenudes.com",2],["renoconcrete.ca",2],["richieashbeck.com",2],["short1ink.com",2],["stpm.co.uk",2],["wegotcookies.co",2],["fordownloader.com",2],["di.fm",2],["animehub.ac",2],["yottachess.com",2],["infidrive.net",2],["animefreak.to",2],["9animes.ru",2],["couponscorpion.com",2],["alliptvlinks.com",2],["pinsystem.co.uk",3],["wetter.de",4],["thesimsresource.com",5],["gnomio.com",6],["trangchu.news",6],["techacode.com",6],["cybermania.ws",6],["techhelpbd.com",6],["youmath.it",8],["frkn64modding.com",9],["sbs.com.au",10],["channel4.com",11],["gearingcommander.com",12],["loanoffering.in",12],["novelmultiverse.com",12],["taming.io",12],["cekip.site",12],["snlookup.com",12],["globfone.com",12],["chimicamo.org",12],["webforefront.com",12],["apkmagic.com.ar",12],["reaperscans.id",12],["freecoursesonline.me",12],["short1.site",12],["telewizja-streamer.xyz",12],["filmisub.cc",12],["filmesdostorrenthd.net",12],["play-games.com",12],["vox.de",13],["vip.de",13],["rtl.de",13],["fitforfun.de",13],["desired.de",13],["kino.de",13],["cinema.de",13],["nationalgeographic.fr",14],["oko.sh",15],["uktvplay.co.uk",16],["golem.de",17],["player.pcgameshardware.de",17],["rakuten.tv",18],["pomofocus.io",19],["theforyou.in",20],["gyanitheme.com",20],["hipsonyc.com",20],["texture-packs.com",20],["manyakan.com",20],["persianhive.com",20],["boainformacao.com.br",20],["gcertificationcourse.com",20],["portaliz.site",20],["tech-story.net",20],["visalist.io",20],["litecoin.host",20],["webhostingpost.com",21],["tophostingapp.com",21],["digitalmarktrend.com",21],["aiimgvlog.fun",22],["bestclaimtrx.xyz",22],["freebinance.top",22],["tii.la",23],["pasend.link",24],["freewp.io",24],["hiraethtranslation.com",25],["jetpunk.com",26],["mcrypto.club",27],["coinsparty.com",27],["simplebits.io",28],["flightsim.to",29],["stardeos.com",31],["goduke.com",32],["1apple.xyz",33],["lavanguardia.com",34],["foodsdictionary.co.il",35],["freesolana.top",36],["faucetclub.net",37],["claim.fun",37],["faucetcrypto.net",37],["btc25.org",37],["doge25.in",37],["cashbux.work",37],["farescd.com",38],["getintoway.com",39],["bitcotasks.com",40],["freelitecoin.top",41],["freetron.top",41],["earncrypto.co.in",41],["citi.com",42],["hotfm.audio",43],["luffytra.xyz",44],["maxt.church",45],["history.com",47],["pluto.tv",48],["osuskinner.com",49],["osuskins.net",49],["docs.google.com",50],["endbasic.dev",51],["jmmv.dev",51],["fingerprint.com",51],["utreon.com",52],["zhihu.com",53],["natgeotv.com",54],["airtel.in",55],["meeting.tencent.com",56],["viu.com",57],["myair2.resmed.com",58],["travelerdoor.com",58],["azby.fmworld.net",59],["unrealengine.com",60],["wco.tv",61],["dark-gaming.com",62],["securegames.iwin.com",63],["neilpatel.com",64]]);

const entitiesMap = new Map([["nsw2u",2],["cinemakottaga",2],["asiaon",2],["apkmaven",2],["teluguflix",2],["bg-gledai",2],["gledaitv",2],["live-streamfootball",2],["rbtv77",2],["superabbit",2],["superabbit67",2],["superabbit77",2],["superabbit777",2],["superb77",2],["superb777",2],["superbb77",2],["superbt77",2],["superdom77",2],["superlee77",2],["kissanime",2],["einthusan",7],["khatrimaza",12],["moviegan",12],["writedroid",12],["mhdtvworld",30],["empire-stream",46]]);

const exceptionsMap = new Map([["dev.fingerprint.com",[51]]]);

/******************************************************************************/

function noXhrIf(
    propsToMatch = '',
    directive = ''
) {
    if ( typeof propsToMatch !== 'string' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('prevent-xhr', propsToMatch, directive);
    const xhrInstances = new WeakMap();
    const propNeedles = parsePropertiesToMatch(propsToMatch, 'url');
    const warOrigin = scriptletGlobals.warOrigin;
    const headers = {
        'date': '',
        'content-type': '',
        'content-length': '',
    };
    self.XMLHttpRequest = class extends self.XMLHttpRequest {
        open(method, url, ...args) {
            xhrInstances.delete(this);
            if ( warOrigin !== undefined && url.startsWith(warOrigin) ) {
                return super.open(method, url, ...args);
            }
            const haystack = { method, url };
            if ( matchObjectProperties(propNeedles, haystack) ) {
                xhrInstances.set(this, haystack);
            }
            if ( propsToMatch === '' && directive === '' ) {
                safe.uboLog(logPrefix, `Called: ${safe.JSON_stringify(haystack, null, 2)}`);
            }
            haystack.headers = Object.assign({}, headers);
            return super.open(method, url, ...args);
        }
        send(...args) {
            const haystack = xhrInstances.get(this);
            if ( haystack === undefined ) {
                return super.send(...args);
            }
            haystack.headers['date'] = (new Date()).toUTCString();
            let promise = Promise.resolve({
                xhr: this,
                directive,
                props: {
                    readyState: { value: 4 },
                    response: { value: '' },
                    responseText: { value: '' },
                    responseXML: { value: null },
                    responseURL: { value: haystack.url },
                    status: { value: 200 },
                    statusText: { value: 'OK' },
                },
            });
            switch ( this.responseType ) {
            case 'arraybuffer':
                promise = promise.then(details => {
                    details.props.response.value = new ArrayBuffer(0);
                    return details;
                });
                haystack.headers['content-type'] = 'application/octet-stream';
                break;
            case 'blob':
                promise = promise.then(details => {
                    details.props.response.value = new Blob([]);
                    return details;
                });
                haystack.headers['content-type'] = 'application/octet-stream';
                break;
            case 'document': {
                promise = promise.then(details => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString('', 'text/html');
                    details.props.response.value = doc;
                    details.props.responseXML.value = doc;
                    return details;
                });
                haystack.headers['content-type'] = 'text/html';
                break;
            }
            case 'json':
                promise = promise.then(details => {
                    details.props.response.value = {};
                    details.props.responseText.value = '{}';
                    return details;
                });
                haystack.headers['content-type'] = 'application/json';
                break;
            default:
                if ( directive === '' ) { break; }
                promise = promise.then(details => {
                    return generateContentFn(details.directive).then(text => {
                        details.props.response.value = text;
                        details.props.responseText.value = text;
                        return details;
                    });
                });
                haystack.headers['content-type'] = 'text/plain';
                break;
            }
            promise.then(details => {
                haystack.headers['content-length'] = `${details.props.response.value}`.length;
                Object.defineProperties(details.xhr, details.props);
                details.xhr.dispatchEvent(new Event('readystatechange'));
                details.xhr.dispatchEvent(new Event('load'));
                details.xhr.dispatchEvent(new Event('loadend'));
                safe.uboLog(logPrefix, `Prevented with response:\n${details.xhr.response}`);
            });
        }
        getResponseHeader(headerName) {
            const haystack = xhrInstances.get(this);
            if ( haystack === undefined || this.readyState < this.HEADERS_RECEIVED ) {
                return super.getResponseHeader(headerName);
            }
            const value = haystack.headers[headerName.toLowerCase()];
            if ( value !== undefined && value !== '' ) { return value; }
            return null;
        }
        getAllResponseHeaders() {
            const haystack = xhrInstances.get(this);
            if ( haystack === undefined || this.readyState < this.HEADERS_RECEIVED ) {
                return super.getAllResponseHeaders();
            }
            const out = [];
            for ( const [ name, value ] of Object.entries(haystack.headers) ) {
                if ( !value ) { continue; }
                out.push(`${name}: ${value}`);
            }
            if ( out.length !== 0 ) { out.push(''); }
            return out.join('\r\n');
        }
    };
}

function generateContentFn(directive) {
    const safe = safeSelf();
    const randomize = len => {
        const chunks = [];
        let textSize = 0;
        do {
            const s = safe.Math_random().toString(36).slice(2);
            chunks.push(s);
            textSize += s.length;
        }
        while ( textSize < len );
        return chunks.join(' ').slice(0, len);
    };
    if ( directive === 'true' ) {
        return Promise.resolve(randomize(10));
    }
    if ( directive === 'emptyObj' ) {
        return Promise.resolve('{}');
    }
    if ( directive === 'emptyArr' ) {
        return Promise.resolve('[]');
    }
    if ( directive === 'emptyStr' ) {
        return Promise.resolve('');
    }
    if ( directive.startsWith('length:') ) {
        const match = /^length:(\d+)(?:-(\d+))?$/.exec(directive);
        if ( match ) {
            const min = parseInt(match[1], 10);
            const extent = safe.Math_max(parseInt(match[2], 10) || 0, min) - min;
            const len = safe.Math_min(min + extent * safe.Math_random(), 500000);
            return Promise.resolve(randomize(len | 0));
        }
    }
    if ( directive.startsWith('war:') && scriptletGlobals.warOrigin ) {
        return new Promise(resolve => {
            const warOrigin = scriptletGlobals.warOrigin;
            const warName = directive.slice(4);
            const fullpath = [ warOrigin, '/', warName ];
            const warSecret = scriptletGlobals.warSecret;
            if ( warSecret !== undefined ) {
                fullpath.push('?secret=', warSecret);
            }
            const warXHR = new safe.XMLHttpRequest();
            warXHR.responseType = 'text';
            warXHR.onloadend = ev => {
                resolve(ev.target.responseText || '');
            };
            warXHR.open('GET', fullpath.join(''));
            warXHR.send();
        });
    }
    return Promise.resolve('');
}

function matchObjectProperties(propNeedles, ...objs) {
    if ( matchObjectProperties.extractProperties === undefined ) {
        matchObjectProperties.extractProperties = (src, des, props) => {
            for ( const p of props ) {
                const v = src[p];
                if ( v === undefined ) { continue; }
                des[p] = src[p];
            }
        };
    }
    const safe = safeSelf();
    const haystack = {};
    const props = safe.Array_from(propNeedles.keys());
    for ( const obj of objs ) {
        if ( obj instanceof Object === false ) { continue; }
        matchObjectProperties.extractProperties(obj, haystack, props);
    }
    for ( const [ prop, details ] of propNeedles ) {
        let value = haystack[prop];
        if ( value === undefined ) { continue; }
        if ( typeof value !== 'string' ) {
            try { value = safe.JSON_stringify(value); }
            catch(ex) { }
            if ( typeof value !== 'string' ) { continue; }
        }
        if ( safe.testPattern(details, value) ) { continue; }
        return false;
    }
    return true;
}

function parsePropertiesToMatch(propsToMatch, implicit = '') {
    const safe = safeSelf();
    const needles = new Map();
    if ( propsToMatch === undefined || propsToMatch === '' ) { return needles; }
    const options = { canNegate: true };
    for ( const needle of propsToMatch.split(/\s+/) ) {
        const [ prop, pattern ] = needle.split(':');
        if ( prop === '' ) { continue; }
        if ( pattern !== undefined ) {
            needles.set(prop, safe.initPattern(pattern, options));
        } else if ( implicit !== '' ) {
            needles.set(implicit, safe.initPattern(prop, options));
        }
    }
    return needles;
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
    try { noXhrIf(...argsList[i]); }
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
    return uBOL_noXhrIf();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_noXhrIf = cloneInto([
            [ '(', uBOL_noXhrIf.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_noXhrIf);
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
    delete page.uBOL_noXhrIf;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
