var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

// Generated by CoffeeScript 1.7.1
(function() {
  var JSON;if(!JSON){JSON={}}(function(){'use strict';function f(n){return n<10?'0'+n:n}if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+f(this.getUTCSeconds())+'Z':null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key)}if(typeof rep==='function'){value=rep.call(holder,key,value)}switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null'}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null'}v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v}if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==='string'){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v)}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v)}}}}v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v}}if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' '}}else if(typeof space==='string'){indent=space}rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify')}return str('',{'':value})}}if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j}throw new SyntaxError('JSON.parse')}}}());;
  var P, Req, e, root,
    __slice = [].slice,
    __hasProp = {}.hasOwnProperty;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.adosRun = function() {
    while (window.ados.run !== void 0 && window.ados.run.length > 0) {
      window.ados.run[0].call();
      ados.run.splice(0, 1);
    }
    return window.ados.run.push = function(code) {
      return code.call();
    };
  };

  root.cssLoad = function(css) {
    var s, stylenode;
    s = document.createElement("style");
    document.getElementsByTagName("head")[0].appendChild(s);
    if (!!window.ActiveXObject) {
      return document.styleSheets[document.styleSheets.length - 1].cssText = css;
    } else {
      stylenode = document.createTextNode(css);
      return s.appendChild(stylenode);
    }
  };

  root.cssLinkLoad = function(url) {
    var tag;
    tag = document.createElement('link');
    tag.rel = 'stylesheet';
    tag.href = url;
    return document.getElementsByTagName('head')[0].appendChild(tag);
  };

  root.azHtmlLoad = function(div, content) {
    var adzerkDiv;
    adzerkDiv = document.getElementById(div);
    return adzerkDiv.innerHTML = content;
  };

  root.azScriptSRCLoad = function(div, script) {
    var adzerkDiv, newScript;
    newScript = document.createElement("script");
    newScript.type = "text/javascript";
    newScript.src = script;
    adzerkDiv = document.getElementById(div);
    return adzerkDiv.appendChild(newScript);
  };

  root.azScriptExtensionLoad = function(url) {
    var head, newScript;
    newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.src = url;
    head = document.getElementsByTagName('head')[0];
    return head.appendChild(newScript);
  };

  root.azRegisterExtension = function(name, func) {
    var args, _i, _len, _ref;
    if (root.ados.extensions == null) {
      root.ados.extensions = {};
    }
    root.ados.extensions[name] = func;
    if ((root.ados.extensionCalls != null) && (root.ados.extensionCalls[name] != null)) {
      _ref = root.ados.extensionCalls[name];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        args = _ref[_i];
        func.apply(root, args);
      }
      return delete root.ados.extensionCalls[name];
    }
  };

  root.azInitExtension = function() {
    var args, name;
    name = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    if ((root.ados.extensions != null) && (root.ados.extensions[name] != null)) {
      return root.ados.extensions[name].apply(root, args);
    } else {
      if (root.ados.extensionCalls == null) {
        root.ados.extensionCalls = {};
      }
      if (root.ados.extensionCalls[name] == null) {
        root.ados.extensionCalls[name] = [];
      }
      return root.ados.extensionCalls[name].push(args);
    }
  };

  root.ados_async_load = function(src) {
    var s, z;
    z = document.createElement("script");
    z.type = "text/javascript";
    z.async = true;
    z.src = src;
    s = document.getElementsByTagName("script")[0];
    return s.parentNode.insertBefore(z, s);
  };

  root.azScriptInlineLoad = function(div, script, interval) {
    var adzerkDiv, newScript;
    newScript = document.createElement("script");
    newScript.type = "text/javascript";
    if (/msie/.test(navigator.userAgent.toLowerCase())) {
      newScript.text = script;
    } else {
      newScript.innerHTML = script;
    }
    adzerkDiv = document.getElementById(div);
    return adzerkDiv.appendChild(newScript);
  };

  root.azLoad = function(div, code) {
    var adzerkDiv;
    adzerkDiv = document.getElementById(div);
    if (adzerkDiv) {
      return code();
    } else {
      return setTimeout((function() {
        return azLoad(div, code);
      }), 100);
    }
  };

  root.zshow = function(div) {
    if (zItems[div]) {
      return document.write(zItems[div]);
    }
  };

  root.ados_addInlinePlacement = function(accountId, siteId, size) {
    var chars, i, ran, randomName;
    chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
    randomName = "";
    i = 0;
    while (i < 12) {
      ran = Math.floor(Math.random() * chars.length);
      randomName += chars.substring(ran, ran + 1);
      i++;
    }
    return ados_addPlacement(accountId, siteId, randomName, size);
  };

  root.ados_add_placement = function(accountId, siteId, name, size) {
    return ados_addPlacement(accountId, siteId, name, size);
  };

  root.ados_addPlacement = function(accountId, siteId, name, size) {
    var placement;
    placement = new P();
    placement.A = accountId;
    placement.S = siteId;
    placement.D = name;
    if (!isNaN(size)) {
      placement.AT = size;
    } else {
      placement.ATA = size;
    }
    ados_addPlacementObject(placement);
    return placement;
  };

  root.ados_loadDiv = function(name) {
    if (!window.ados.isAsync) {
      return zshow(name);
    }
  };

  root.ados_setKeywords = function(keywords) {
    var keywordCookie;
    keywordCookie = (' ' + document.cookie).match(new RegExp('[; ]ados_keyword_cookie=([^\\s;]*)'));
    if (!!keywordCookie) {
      return window.ados.keywords = unescape(keywordCookie[1]) + ',' + keywords;
    } else {
      return window.ados.keywords = keywords;
    }
  };

  root.ados_setKeywordCookie = function(keywords) {
    var domain, expires;
    expires = new Date();
    domain = window.ados.domain || ".adzerk.net";
    expires.setTime(new Date().getTime() + 3600000 * 24 * 30);
    return document.cookie = 'ados_keyword_cookie=' + escape(keywords) + ';expires=' + expires.toGMTString() + 'domain=' + domain + ';path=\/;';
  };

  root.ados_setNoTrack = function() {
    return window.ados.isNoTrack = true;
  };

  root.ados_setDomain = function(domain) {
    return window.ados.domain = domain;
  };

  root.ados_setWriteResults = function() {
    return window.ados.writeResults = true;
  };

  root.ados_log = function(text) {
    if (window.console) {
      return console.info(new Date().getTime() + ': ' + text);
    }
  };

  root.ados_addPlacementObject = function(placement) {
    if (!window.ados.placements) {
      window.ados.placements = new Array();
    }
    return window.ados.placements.push(placement);
  };

  root.ados_refresh = function(placement, seconds, again) {
    var div;
    ados_log('triggering refresh of:' + placement.D);
    div = document.getElementById(placement.D);
    while (div.hasChildNodes()) {
      div.removeChild(div.lastChild);
    }
    ados_addPlacementObject(placement);
    ados_load();
    if (again) {
      return setTimeout((function() {
        return ados_refresh(placement, seconds, true);
      }), seconds * 1000);
    }
  };

  root.ados_loadResults = function(results) {
    var i, len, _results;
    len = results.length;
    i = 0;
    _results = [];
    while (i < len) {
      adosResults[results[i].divName] = results[i];
      eval(results[i].adCode);
      _results.push(i++);
    }
    return _results;
  };

  Req = function() {
    this.Placements = window.ados.placements;
    window.ados.placements = new Array();
    this.Keywords = encodeURIComponent(ados.keywords);
    this.Referrer = encodeURIComponent(document.referrer);
    this.IsAsync = window.ados.isAsync;
    this.IsNoTrack = window.ados.isNoTrack;
    this.WriteInline = window.ados.writeInline;
    this.WriteResults = window.ados.writeResults;
    return this;
  };

  P = function() {
    return {
      setZone: function(zoneid) {
        this.Z = zoneid;
        return this;
      },
      setClickUrl: function(clickurl) {
        this.ClickUrl = encodeURIComponent(clickurl);
        return this;
      },
      setRedirectUrl: function(redirectUrl) {
        this.RedirectUrl = encodeURIComponent(redirectUrl);
        return this;
      },
      setCampaignId: function(campaignId) {
        this.CampaignId = campaignId;
        return this;
      },
      setFlightId: function(flightId) {
        this.FlightId = flightId;
        return this;
      },
      setFlightCreativeId: function(flightCreativeId) {
        this.FlightCreativeId = flightCreativeId;
        return this;
      },
      setProperty: function(key, value) {
        if (this.Properties == null) {
          this.Properties = {};
        }
        this.Properties[key] = value;
        return this;
      },
      setProperties: function(dict) {
        var key, value;
        if (this.Properties == null) {
          this.Properties = {};
        }
        for (key in dict) {
          if (!__hasProp.call(dict, key)) continue;
          value = dict[key];
          this.Properties[key] = value;
        }
        return this;
      },
      enableDynamicSiteSelection: function() {
        this.DynamicSiteOverride = document.domain.replace(/^www\./, '');
        return this;
      },
      setRefresh: function(seconds) {
        var placement;
        placement = this;
        setTimeout((function() {
          return ados_refresh(placement, seconds, true);
        }), seconds * 1000);
        return this;
      },
      loadInline: function() {
        ados.isAsync = false;
        ados.writeInline = true;
        window.divName = this.D;
        ados_load(this.D);
        return this;
      }
    };
  };

  root.ados_load = function(loadDiv) {
    var domain, keywordCookie, proto, prototype_toJSON, req, src;
    domain = window.ados.domain || "engine.adzerk.net";
    if (ados.isAsync !== false) {
      window.ados.isAsync = true;
    }
    keywordCookie = (' ' + document.cookie).match(new RegExp('[; ]ados_keyword_cookie=([^\\s;]*)'));
    if (!!keywordCookie) {
      window.ados.keywords = unescape(keywordCookie[1]);
    }
    proto = "http";
    if (document.location.protocol === "https:") {
      proto = "https";
    }
    src = proto + "://" + domain + "/ados?t=" + new Date().getTime() + "&request=";
    req = new Req();
    prototype_toJSON = (window.Prototype ? Array.prototype.toJSON : null);
    if (prototype_toJSON) {
      delete Array.prototype.toJSON;
    }
    if (req.Placements.length !== 0) {
      if (!window.ados.isAsync) {
        document.write("<script type=\"text/javascript\" src=\"" + src + encodeURI(JSON.stringify(req)) + "\"></script>");
      } else {
        ados_async_load(src + JSON.stringify(req));
      }
    }
    if (prototype_toJSON) {
      return Array.prototype.toJSON = prototype_toJSON;
    }
  };

  root.ados_loadInline = function(accountId, siteId, adtype) {
    var chars, i, ran, randomName;
    chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
    randomName = "";
    i = 0;
    while (i < 12) {
      ran = Math.floor(Math.random() * chars.length);
      randomName += chars.substring(ran, ran + 1);
      i++;
    }
    document.write("<div id=\"" + randomName + "\"></div>");
    return ados_add_placement(accountId, siteId, randomName, adtype);
  };

  root.ados_loadPassback = function(div, passbacks) {
    if (!window.ados.passbacks) {
      window.ados.passbacks = {};
    }
    if (!window.ados.currentPassback) {
      window.ados.currentPassback = {};
    }
    if (!window.ados.counted) {
      window.ados.counted = {};
    }
    window.ados.passbacks[div] = passbacks;
    window.ados.counted[div] = false;
    return ados_execPassback(div, passbacks[0]);
  };

  root.ados_passback_next = function(div, id) {
    var chain, flight, idx, next, _i, _ref;
    chain = window.ados.passbacks[div];
    for (idx = _i = _ref = chain.length - 1; _ref <= 0 ? _i <= 0 : _i >= 0; idx = _ref <= 0 ? ++_i : --_i) {
      flight = chain[idx];
      if (flight.FlightId === id) {
        next = idx + 1;
        if (next === window.ados.passbacks[div].length) {
          return null;
        }
        return window.ados.passbacks[div][next];
      }
    }
    throw new Error("Flight not found - make sure the network is returning the correct passback");
  };

  root.ados_findPassback = function(div, id) {
    var chain, flight, idx, _i, _ref;
    chain = window.ados.passbacks[div];
    for (idx = _i = _ref = chain.length - 1; _ref <= 0 ? _i <= 0 : _i >= 0; idx = _ref <= 0 ? ++_i : --_i) {
      flight = chain[idx];
      if (flight.FlightId === id) {
        return flight;
      }
    }
    throw new Error("Flight not found - make sure the network is returning the correct passback");
  };

  root.ados_passback = function(div, flightId) {
    var next;
    ados_log('received passback for div:' + div + ' and flightId:' + flightId);
    next = ados_passback_next(div, flightId);
    return ados_execPassback(div, next);
  };

  root.ados_execPassback = function(div, passback) {
    var timeoutScript;
    ados_log('loading flight:' + passback.FlightId);
    window.ados.currentPassback[div] = passback.FlightId;
    timeoutScript = '';
    if (!window.ados.isAsync) {
      timeoutScript = 'setTimeout(function() { ados_timeoutExpired("' + div + '", ' + passback.FlightId + ') }, 2500)';
    }
    return eval(passback.Script + timeoutScript);
  };

  root.ados_timeoutExpired = function(div, flightId) {
    if (window.ados.currentPassback && window.ados.currentPassback[div] === flightId && window.ados.counted[div] === false) {
      ados_log('time to passback expired for div:' + div + ' and flightid:' + flightId);
      return ados_passbackFilled(div, flightId);
    }
  };

  root.ados_frameLoaded = function(div, flightId) {
    var ifrm;
    ifrm = document.getElementById("ados_frame_" + div + "_" + flightId);
    if (ifrm !== null && ifrm.readyState !== "complete" && ifrm.readyState !== void 0) {
      return setTimeout((function() {
        return ados_frameLoaded(div, flightId);
      }), 100);
    } else if (window.ados.currentPassback && window.ados.currentPassback[div] === flightId) {
      return setTimeout((function() {
        return ados_passbackFilled(div, flightId);
      }), 400);
    } else if (window.ados.currentPassback && window.ados.currentPassback[div]) {
      if (ifrm !== null) {
        return ifrm.parentNode.removeChild(ifrm);
      }
    }
  };

  root.ados_passbackFilled = function(div, flightId) {
    var flight;
    if (window.ados.currentPassback && window.ados.currentPassback[div] === flightId) {
      ados_log('flight is loaded for div: ' + div + ' and flightId:' + flightId);
      flight = ados_findPassback(div, flightId);
      if (flight.counted === void 0 && window.ados.counted[div] === false) {
        flight.counted = window.ados.counted[div].counted = true;
        return ados_passbackWritePixel(div, flight.VeriPixel, flightId);
      }
    }
  };

  root.ados_passbackWritePixel = function(div, url, flightId) {
    var adzerkDiv, pixel;
    adzerkDiv = document.getElementById(div);
    if (adzerkDiv !== null) {
      ados_log('writing pixel for div: ' + div + ' and flightId:' + flightId);
      pixel = document.createElement('img');
      pixel.setAttribute("height", "0px");
      pixel.setAttribute("width", "0px");
      pixel.setAttribute("border", "0");
      pixel.setAttribute("style", "position:absolute;");
      pixel.setAttribute("src", url);
      return adzerkDiv.appendChild(pixel);
    }
  };

  root.ados_writePixel = function(div, url) {
    var adzerkDiv, pixel;
    adzerkDiv = document.getElementById(div);
    if (adzerkDiv !== null) {
      pixel = document.createElement('img');
      pixel.setAttribute("height", "0px");
      pixel.setAttribute("width", "0px");
      pixel.setAttribute("border", "0");
      pixel.setAttribute("style", "position:absolute;");
      pixel.setAttribute("src", url);
      return adzerkDiv.appendChild(pixel);
    }
  };

  root.ados_loadFIframe = function(div, content, flightid, height, width) {
    var adzerkDiv, doc, ifrm;
    adzerkDiv = document.getElementById(div);
    ifrm = document.createElement("iframe");
    ifrm.id = "ados_frame_" + div + "_" + flightid;
    ifrm.frameBorder = 0;
    ifrm.scrolling = "no";
    ifrm.noresize = "noresize";
    ifrm.marginheight = 0;
    ifrm.marginwidth = 0;
    if (height !== 0) {
      ifrm.height = height;
    }
    if (width !== 0) {
      ifrm.width = width;
    }
    adzerkDiv.appendChild(ifrm);
    if (ifrm.attachEvent) {
      ifrm.attachEvent('onload', function() {
        return ados_frameLoaded(div, flightid);
      });
    } else {
      ifrm.onload = function() {
        return ados_frameLoaded(div, flightid);
      };
    }
    content = "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01//EN\" \"http://www.w3.org/TR/html4/strict.dtd\"><html><head><style>div,iframe { top: 0; position:absolute; }</style></head><body style=\"margin:0px;padding:0px;\"><script type=\"text/javascript\">var divName = \"" + div + "\";var inFIF=true;var inDapIF = true;</script>" + content + "</body></html>";
    if (/msie/.test(navigator.userAgent.toLowerCase()) || window.opera) {
      ifrm.contentWindow.contents = content;
      return ifrm.src = "javascript:window[\"contents\"]";
    } else {
      doc = ifrm.contentDocument;
      doc.open();
      doc.write(content);
      doc.close();
      return ifrm;
    }
  };

  root.ados_passback_receiveMessage = function(evt) {
    var adosWindow, flightId, ifrm;
    flightId = evt.data.flightId;
    adosWindow = evt.source.parent;
    while (!adosWindow.divName) {
      if (adosWindow === adosWindow.parent) {
        break;
      }
      adosWindow = adosWindow.parent;
    }
    if (adosWindow.divName === void 0 || evt.data.flightId === void 0) {
      return;
    }
    ados_log('passback recieved through postMessage for Div:' + adosWindow.divName + ' FlightId:' + evt.data.flightId);
    ifrm = document.getElementById("ados_frame_" + adosWindow.divName + "_" + evt.data.flightId);
    ifrm.parentNode.removeChild(ifrm);
    return ados_passback(adosWindow.divName, evt.data.flightId);
  };

  window.ados = window.ados || {};

  window.ados.run = window.ados.run || [];

  window.zItems = window.zItems || [];

  window.adosResults = window.adosResults || {};

  try {
    if (window.top.attachEvent) {
      window.top.attachEvent("message", ados_passback_receiveMessage, false);
    } else if (window.top.addEventListener) {
      window.top.addEventListener("message", ados_passback_receiveMessage, false);
    }
  } catch (_error) {
    e = _error;
  }

  root.adosRun();

  setTimeout((function() {
    return root.adosRun();
  }), 1000);

}).call(this);


}
/*
     FILE ARCHIVED ON 00:23:22 Dec 01, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:27:20 Jan 24, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.08
  exclusion.robots.policy: 0.068
  cdx.remote: 0.142
  esindex: 0.01
  LoadShardBlock: 500.044 (6)
  PetaboxLoader3.datanode: 208.318 (8)
  load_resource: 267.795 (2)
  PetaboxLoader3.resolve: 151.585 (2)
*/