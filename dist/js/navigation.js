/*! formstone v0.8.41 [navigation.js] 2016-03-13 | MIT License | formstone.it */

!function(a,b,c){"use strict";function d(){x=a("html, body")}function e(b){b.handleGuid=v.handle+b.guid,b.isToggle="toggle"===b.type,b.open=!1,b.isToggle&&(b.gravity="");var c=v.base,d=[c,b.type].join("-"),e=b.gravity?[d,b.gravity].join("-"):"",f=[b.rawGuid,b.customClass].join(" ");b.handle=this.data(t+"-handle"),b.content=this.data(t+"-content"),b.handleClasses=[v.handle,v.handle.replace(c,d),e?v.handle.replace(c,e):"",b.handleGuid,f].join(" "),b.navClasses=[v.nav.replace(c,d),e?v.nav.replace(c,e):"",f].join(" "),b.contentClasses=[v.content.replace(c,d),f].join(" "),b.contentClassesOpen=[e?v.content.replace(c,e):"",v.open].join(" "),b.$nav=this.addClass(b.navClasses),b.$handle=a(b.handle).addClass(b.handleClasses),b.$content=a(b.content).addClass(b.contentClasses),b.$animate=a().add(b.$nav).add(b.$content),q(b),b.$handle.attr("data-swap-target",b.dotGuid).attr("data-swap-linked",b.handleGuid).attr("data-swap-group",v.base).on("activate.swap"+b.dotGuid,b,k).on("deactivate.swap"+b.dotGuid,b,l).on("enable.swap"+b.dotGuid,b,m).on("disable.swap"+b.dotGuid,b,n).fsSwap({maxWidth:b.maxWidth,classes:{target:b.dotGuid,enabled:u.enabled,active:u.open,raw:{target:b.rawGuid,enabled:v.enabled,active:v.open}}})}function f(a){a.$content.removeClass([a.contentClasses,a.contentClassesOpen].join(" ")).off(w.namespace),a.$handle.removeAttr("data-swap-target").removeData("swap-target").removeAttr("data-swap-linked").removeData("swap-linked").removeClass(a.handleClasses).off(a.dotGuid).html(a.originalLabel).fsSwap("destroy"),r(a),p(a),this.removeClass(a.navClasses).off(w.namespace)}function g(a){a.$handle.fsSwap("activate")}function h(a){a.$handle.fsSwap("deactivate")}function i(a){a.$handle.fsSwap("enable")}function j(a){a.$handle.fsSwap("disable")}function k(a){if(!a.originalEvent){var b=a.data;b.open||(b.$el.trigger(w.open),b.$content.addClass(b.contentClassesOpen).one(w.click,function(){h(b)}),b.label&&b.$handle.html(b.labels.open),o(b),b.open=!0)}}function l(a){if(!a.originalEvent){var b=a.data;b.open&&(b.$el.trigger(w.close),b.$content.removeClass(b.contentClassesOpen).off(w.namespace),b.label&&b.$handle.html(b.labels.closed),p(b),b.open=!1)}}function m(a){var b=a.data;b.$content.addClass(v.enabled),setTimeout(function(){b.$animate.addClass(v.animated)},0),b.label&&b.$handle.html(b.labels.closed)}function n(a){var b=a.data;b.$content.removeClass(v.enabled,v.animated),b.$animate.removeClass(v.animated),r(b),p(b)}function o(a){a.isToggle||x.addClass(v.lock)}function p(a){a.isToggle||x.removeClass(v.lock)}function q(a){if(a.label)if(a.$handle.length>1){a.originalLabel=[];for(var b=0,c=a.$handle.length;c>b;b++)a.originalLabel[b]=a.$handle.eq(b).html()}else a.originalLabel=a.$handle.html()}function r(a){if(a.label)if(a.$handle.length>1)for(var b=0,c=a.$handle.length;c>b;b++)a.$handle.eq(b).html(a.originalLabel[b]);else a.$handle.html(a.originalLabel)}var s=b.Plugin("navigation",{widget:!0,defaults:{customClass:"",gravity:"left",label:!0,labels:{closed:"Menu",open:"Close"},maxWidth:"980px",type:"toggle"},classes:["handle","nav","content","animated","enabled","open","toggle","push","reveal","overlay","left","right","lock"],events:{open:"open",close:"close"},methods:{_setup:d,_construct:e,_destruct:f,open:g,close:h,enable:i,disable:j}}),t=s.namespace,u=s.classes,v=u.raw,w=s.events,x=(s.functions,null)}(jQuery,Formstone);