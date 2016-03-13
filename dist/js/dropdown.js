/*! formstone v0.8.41 [dropdown.js] 2016-03-13 | MIT License | formstone.it */

!function(a,b,c){"use strict";function d(){I=b.$body}function e(d){d.multiple=this.prop("multiple"),d.disabled=this.is(":disabled")||this.is("[readonly]"),d.lastIndex=!1,d.multiple?d.links=!1:d.external&&(d.links=!0);var e=this.find("[selected]").not(":disabled"),f=this.find(":selected").not(":disabled"),g=f.text(),h=this.find("option").index(f);d.multiple||""===d.label||e.length?d.label="":(f=this.prepend('<option value="" class="'+D.item_placeholder+'" selected>'+d.label+"</option>"),g=d.label,h=0);var i=this.find("option, optgroup"),l=i.filter("option"),m=a("[for="+this.attr("id")+"]");d.tabIndex=this[0].tabIndex,this[0].tabIndex=-1,m.length&&(m[0].tabIndex=-1);var n=[D.base,d.customClass];d.mobile||b.isMobile?n.push(D.mobile):d.cover&&n.push(D.cover),d.multiple&&n.push(D.multiple),d.disabled&&n.push(D.disabled);var o='<div class="'+n.join(" ")+'" tabindex="'+d.tabIndex+'"></div>',u="";d.multiple||(u+='<button type="button" class="'+D.selected+'" tabindex="-1">',u+=a("<span></span>").text(z(g,d.trim)).html(),u+="</button>"),u+='<div class="'+D.options+'">',u+="</div>",this.wrap(o).after(u),d.$dropdown=this.parent(C.base),d.$label=m,d.$allOptions=i,d.$options=l,d.$selected=d.$dropdown.find(C.selected),d.$wrapper=d.$dropdown.find(C.options),d.$placeholder=d.$dropdown.find(C.placeholder),d.index=-1,d.closed=!0,d.focused=!1,j(d),d.links?this.attr("aria-hidden","true"):d.$selected.add(d.$wrapper).attr("aria-hidden","true"),d.multiple||v(h,d),a.fn.fsScrollbar!==c&&d.$wrapper.fsScrollbar(),d.$selected.on(E.click,d,k),d.$dropdown.on(E.click,C.item,d,q).on(E.close,d,p),this.on(E.change,d,r),b.isMobile||(this.on(E.focusIn,d,function(a){a.data.$dropdown.trigger(E.raw.focus)}),d.$dropdown.on(E.focusIn,d,s).on(E.focusOut,d,t))}function f(b){b.$dropdown.hasClass(D.open)&&b.$selected.trigger(E.click),a.fn.fsScrollbar!==c&&b.$wrapper.fsScrollbar("destroy"),b.links&&this.removeAttr("aria-hidden"),b.$el[0].tabIndex=b.tabIndex,b.$label.length&&(b.$label[0].tabIndex=b.tabIndex),b.$dropdown.off(E.namespace),b.$options.off(E.namespace),b.$placeholder.remove(),b.$selected.remove(),b.$wrapper.remove(),b.$el.off(E.namespace).show().unwrap()}function g(a,b){if("undefined"!=typeof b){var c=a.$items.index(a.$items.filter("[data-value="+b+"]"));a.$items.eq(c).addClass(D.item_disabled),a.$options.eq(c).prop("disabled",!0)}else a.$dropdown.hasClass(D.open)&&a.$selected.trigger(E.click),a.$dropdown.addClass(D.disabled),a.$el.prop("disabled",!0),a.disabled=!0}function h(a,b){if("undefined"!=typeof b){var c=a.$items.index(a.$items.filter("[data-value="+b+"]"));a.$items.eq(c).removeClass(D.item_disabled),a.$options.eq(c).prop("disabled",!1)}else a.$dropdown.removeClass(D.disabled),a.$el.prop("disabled",!1),a.disabled=!1}function i(b){a.fn.fsScrollbar!==c&&b.$wrapper.fsScrollbar("destroy");var d=b.index;b.$allOptions=b.$el.find("option, optgroup"),b.$options=b.$allOptions.filter("option"),b.index=-1,d=b.$options.index(b.$options.filter(":selected")),j(b),b.multiple||v(d,b),a.fn.fsScrollbar!==c&&b.$wrapper.fsScrollbar()}function j(b){for(var c="",d=0,e=0,f=b.$allOptions.length;f>e;e++){var g=b.$allOptions.eq(e),h=[];if("OPTGROUP"===g[0].tagName)h.push(D.group),g.is(":disabled")&&h.push(D.disabled),c+='<span class="'+h.join(" ")+'">'+g.attr("label")+"</span>";else{var i=g.val(),j=g.data("label"),k=b.links?"a":'button type="button"';g.attr("value")||g.attr("value",i),h.push(D.item),g.hasClass(D.item_placeholder)&&(h.push(D.item_placeholder),k="span"),g.is(":selected")&&h.push(D.item_selected),g.is(":disabled")&&h.push(D.item_disabled),c+="<"+k+' class="'+h.join(" ")+'"',b.links?"span"===k?c+=' aria-hidden="true"':(c+=' href="'+i+'"',b.external&&(c+=' target="_blank"')):c+=' data-value="'+i+'"',c+=' tabindex="-1">',c+=j?j:F.decodeEntities(z(g.text(),b.trim)),c+="</"+k+">",d++}}b.$items=b.$wrapper.html(a.parseHTML(c)).find(C.item)}function k(a){F.killEvent(a);var c=a.data;if(!c.disabled)if(c.mobile||!b.isMobile||b.isFirefoxMobile||b.isIEMobile)c.closed?m(c):n(c);else{var d=c.$el[0];if(H.createEvent){var e=H.createEvent("MouseEvents");e.initMouseEvent("mousedown",!1,!0,G,0,0,0,0,0,!1,!1,!1,!1,0,null),d.dispatchEvent(e)}else d.fireEvent&&d.fireEvent("onmousedown")}l(c)}function l(b){a(C.base).not(b.$dropdown).trigger(E.close,[b])}function m(a){if(a.closed){var b=a.$dropdown.offset(),c=I.outerHeight(),d=a.$wrapper.outerHeight(!0);a.index>=0?a.$items.eq(a.index).position():{left:0,top:0};b.top+d>c-a.bottomEdge&&a.$dropdown.addClass(D.bottom),I.on(E.click+a.dotGuid,":not("+C.options+")",a,o),a.$dropdown.trigger(E.focusIn),a.$dropdown.addClass(D.open),w(a),a.closed=!1}}function n(a){a&&!a.closed&&(I.off(E.click+a.dotGuid),a.$dropdown.removeClass([D.open,D.bottom].join(" ")),a.closed=!0)}function o(b){F.killEvent(b);var c=b.data;c&&0===a(b.currentTarget).parents(C.base).length&&(n(c),c.$dropdown.trigger(E.focusOut))}function p(a){var b=a.data;b&&(n(b),b.$dropdown.trigger(E.focusOut))}function q(b){var c=a(this),d=b.data;if(F.killEvent(b),!d.disabled){var e=d.$items.index(c);d.focusIndex=e,d.$wrapper.is(":visible")&&(v(e,d,b.shiftKey,b.metaKey||b.ctrlKey),x(d)),d.multiple||n(d),d.$dropdown.trigger(E.focus)}}function r(b,c){var d=a(this),e=b.data;if(!c&&!e.multiple){var f=e.$options.index(e.$options.filter("[value='"+A(d.val())+"']"));e.focusIndex=f,v(f,e),x(e)}}function s(b){F.killEvent(b);var c=(a(b.currentTarget),b.data);c.disabled||c.multiple||c.focused||(l(c),c.focused=!0,c.focusIndex=c.index,c.input="",c.$dropdown.addClass(D.focus).on(E.keyDown+c.dotGuid,c,u))}function t(b,c){F.killEvent(b);var d=(a(b.currentTarget),b.data);d.focused&&d.closed&&(d.focused=!1,d.$dropdown.removeClass(D.focus).off(E.keyDown+d.dotGuid),d.multiple||(n(d),d.index!==d.focusIndex&&(x(d),d.focusIndex=d.index)))}function u(c){var d=c.data;if(d.keyTimer=F.startTimer(d.keyTimer,1e3,function(){d.input=""}),13===c.keyCode)d.closed||(n(d),v(d.index,d)),x(d);else if(!(9===c.keyCode||c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)){F.killEvent(c);var e=d.$items.length-1,f=d.index<0?0:d.index;if(a.inArray(c.keyCode,b.isFirefox?[38,40,37,39]:[38,40])>-1)f+=38===c.keyCode||b.isFirefox&&37===c.keyCode?-1:1,0>f&&(f=0),f>e&&(f=e);else{var g,h,i=String.fromCharCode(c.keyCode).toUpperCase();for(d.input+=i,h=d.index+1;e>=h;h++)if(g=d.$options.eq(h).text().substr(0,d.input.length).toUpperCase(),g===d.input){f=h;break}if(0>f||f===d.index)for(h=0;e>=h;h++)if(g=d.$options.eq(h).text().substr(0,d.input.length).toUpperCase(),g===d.input){f=h;break}}f>=0&&(v(f,d),w(d))}}function v(a,c,d,e){var f=c.$items.eq(a),g=c.$options.eq(a),h=f.hasClass(D.item_selected),i=f.hasClass(D.item_disabled);if(!i)if(c.multiple)if(b.isMobile)i||(h?(g.prop("selected",null),f.removeClass(D.item_selected)):(g.prop("selected",!0),f.addClass(D.item_selected)));else if(d&&c.lastIndex!==!1){var j=c.lastIndex>a?a:c.lastIndex,k=(c.lastIndex>a?c.lastIndex:a)+1;c.$options.prop("selected",null),c.$items.filter(C.item_selected).removeClass(D.item_selected),c.$options.slice(j,k).not("[disabled]").prop("selected",!0),c.$items.slice(j,k).not(C.item_disabled).addClass(D.item_selected)}else e?(h?(g.prop("selected",null),f.removeClass(D.item_selected)):(g.prop("selected",!0),f.addClass(D.item_selected)),c.lastIndex=a):(c.$options.prop("selected",null),c.$items.filter(C.item_selected).removeClass(D.item_selected),g.prop("selected",!0),f.addClass(D.item_selected),c.lastIndex=a);else if(a>-1&&a<c.$items.length){if(a!==c.index){var l=g.data("label")||f.html();c.$selected.html(l).removeClass(C.item_placeholder),c.$items.filter(C.item_selected).removeClass(D.item_selected),c.$el[0].selectedIndex=a,f.addClass(D.item_selected),c.index=a}}else""!==c.label&&c.$selected.html(c.label)}function w(b){var d=b.$items.eq(b.index),e=b.index>=0&&!d.hasClass(D.item_placeholder)?d.position():{left:0,top:0},f=(b.$wrapper.outerHeight()-d.outerHeight())/2;a.fn.fsScrollbar!==c?b.$wrapper.fsScrollbar("resize").fsScrollbar("scroll",b.$wrapper.find(".fs-scrollbar-content").scrollTop()+e.top):b.$wrapper.scrollTop(b.$wrapper.scrollTop()+e.top-f)}function x(a){a.links?y(a):a.$el.trigger(E.raw.change,[!0])}function y(a){var b=a.$el.val();a.external?G.open(b):G.location.href=b}function z(a,b){return 0===b?a:a.length>b?a.substring(0,b)+"...":a}function A(a){return"string"==typeof a?a.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1"):a}var B=b.Plugin("dropdown",{widget:!0,defaults:{bottomEdge:0,cover:!1,customClass:"",label:"",external:!1,links:!1,mobile:!1,trim:0},methods:{_setup:d,_construct:e,_destruct:f,disable:g,enable:h,update:i,open:m,close:n},classes:["cover","bottom","multiple","mobile","open","disabled","focus","selected","options","group","item","item_disabled","item_selected","item_placeholder"],events:{close:"close"}}),C=B.classes,D=C.raw,E=B.events,F=B.functions,G=b.window,H=(b.$window,b.document),I=null}(jQuery,Formstone);