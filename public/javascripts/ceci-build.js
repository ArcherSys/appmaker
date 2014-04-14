requirejs.config({baseUrl:"/javascripts/",paths:{inflector:"../vendor/inflection-js/inflection.min",jquery:"../vendor/jquery/jquery.min",l10n:"l10n","jquery-ui":"../vendor/jquery-ui/ui/minified/jquery-ui.min",persona:"https://login.persona.org/include",ceci:"../ceci",designer:"../designer/js","colorpicker.core":"../vendor/colorpicker/jquery.colorpicker","colorpicker.swatches.crayola":"../vendor/colorpicker/swatches/jquery.ui.colorpicker-crayola","colorpicker.swatches.pantone":"../vendor/colorpicker/swatches/jquery.ui.colorpicker-pantone","colorpicker.swatches.ral-classic":"../vendor/colorpicker/swatches/jquery.ui.colorpicker-ral-classic","colorpicker.parts.memory":"../vendor/colorpicker/parts/jquery.ui.colorpicker-memory","colorpicker.parts.rgbslider":"../vendor/colorpicker/parts/jquery.ui.colorpicker-rgbslider","colorpicker.parsers.rgbslider":"../vendor/colorpicker/parsers/jquery.ui.colorpicker-cmyk-parser","colorpicker.parsers.cmyk-parser":"../vendor/colorpicker/parsers/jquery.ui.colorpicker-cmyk-percentage-parser","colorpicker.i18n.de":"../vendor/colorpicker/i18n/jquery.ui.colorpicker-de","colorpicker.i18n.en":"../vendor/colorpicker/i18n/jquery.ui.colorpicker-en","colorpicker.i18n.fr":"../vendor/colorpicker/i18n/jquery.ui.colorpicker-fr","colorpicker.i18n.nl":"../vendor/colorpicker/i18n/jquery.ui.colorpicker-nl","colorpicker.i18n.pt-br":"../vendor/colorpicker/i18n/jquery.ui.colorpicker-pt-br",Firebase:"https://cdn.firebase.com/v0/firebase"},shim:{"jquery-ui":{exports:"$",deps:["jquery"]},"colorpicker.core":["jquery-ui"],"colorpicker.swatches.crayola":["colorpicker.core"],"colorpicker.swatches.pantone":["colorpicker.core"],"colorpicker.swatches.ral-classic":["colorpicker.core"],"colorpicker.parts.memory":["colorpicker.core"],"colorpicker.parts.rgbslider":["colorpicker.core"],"colorpicker.parsers.rgbslider":["colorpicker.core"],"colorpicker.parsers.cmyk-parser":["colorpicker.core"],"colorpicker.i18n.de":["colorpicker.core"],"colorpicker.i18n.en":["colorpicker.core"],"colorpicker.i18n.fr":["colorpicker.core"],"colorpicker.i18n.nl":["colorpicker.core"],"colorpicker.i18n.pt-br":["colorpicker.core"]}}),define("requireConfig",function(){}),define("l10n",[],function(){var r={},e={},o=!1,c={debug:function(){},get:function(e){return r[e]||""},ready:function(c){var i=!!c.noCache,n=!!c.verboseLogging,s=c.url||"/strings";if(n&&(this.debug=console.log),s+=i?"?bust="+Date.now():"",o=!1,!o){if(o=!0,e.hasOwnProperty(s)){if(200===e[s].status){this.debug("[L10n]: Translation file cached. Firing callback for: ",s);var l=e[s].response;for(var p in l)l.hasOwnProperty(p)&&(r[p]=l[p]);return}if(404===e[s].status)return this.debug("[L10n]: Skipping the request for: "+s+" Status: "+e[s].status),void 0}var t=new XMLHttpRequest;t.open("GET",s,!1),t.onreadystatechange=function(){if(e[s]={},e[s].status=t.status,4===this.readyState){if(200!==t.status)return console.error("Localized Error: HTTP error "+t.status,s),void 0;try{e[s].response=JSON.parse(this.responseText);var o=JSON.parse(this.responseText);for(var c in o)o.hasOwnProperty(c)&&(r[c]=o[c])}catch(i){console.error("Localized Error: "+i+", url = ",s)}}},t.send(null)}},getCurrentLang:function(){var r=document.querySelector("html");return r&&r.lang?r.lang:"en-US"}};return c}),define("ceci/index",["l10n"],function(){});
//# sourceMappingURL=ceci-build.js.map