/*! formstone v0.8.45 [number.js] 2016-04-05 | MIT License | formstone.it */

!function(a,b,c){"use strict";function d(){t=b.$body}function e(a){var b=parseFloat(this.attr("min")),c=parseFloat(this.attr("max"));a.min=b||0===b?b:!1,a.max=c||0===c?c:!1,a.step=parseFloat(this.attr("step"))||1,a.timer=null,a.digits=m(a.step),a.disabled=this.is(":disabled")||this.is("[readonly]");var d="";d+='<button type="button" class="'+[q.arrow,q.up].join(" ")+'">'+a.labels.up+"</button>",d+='<button type="button" class="'+[q.arrow,q.down].join(" ")+'">'+a.labels.down+"</button>",this.wrap('<div class="'+[q.base,a.customClass,a.disabled?q.disabled:""].join(" ")+'"></div>').after(d),a.$container=this.parent(p.base),a.$arrows=a.$container.find(p.arrow),this.on(r.keyPress,p.element,a,i),a.$container.on([r.touchStart,r.mouseDown].join(" "),p.arrow,a,j)}function f(a){a.$arrows.remove(),this.unwrap().off(r.namespace)}function g(a){a.disabled&&(this.prop("disabled",!1),a.$container.removeClass(q.disabled),a.disabled=!1)}function h(a){a.disabled||(this.prop("disabled",!0),a.$container.addClass(q.disabled),a.disabled=!0)}function i(a){var b=a.data;(38===a.keyCode||40===a.keyCode)&&(a.preventDefault(),l(b,38===a.keyCode?b.step:-b.step))}function j(b){s.killEvent(b),k(b);var c=b.data;if(!c.disabled&&b.which<=1){var d=a(b.target).hasClass(q.up)?c.step:-c.step;c.timer=s.startTimer(c.timer,300,function(){c.timer=s.startTimer(c.timer,125,function(){l(c,d,!1)},!0)}),l(c,d),t.on([r.touchEnd,r.mouseUp].join(" "),c,k)}}function k(a){s.killEvent(a);var b=a.data;s.clearTimer(b.timer,!0),t.off(r.namespace)}function l(b,c){var d=parseFloat(b.$el.val()),e=c;"undefined"===a.type(d)||isNaN(d)?e=b.min!==!1?b.min:0:b.min!==!1&&d<b.min?e=b.min:e+=d;var f=(e-b.min)%b.step;0!==f&&(e-=f),b.min!==!1&&e<b.min&&(e=b.min),b.max!==!1&&e>b.max&&(e-=b.step),e!==d&&(e=n(e,b.digits),b.$el.val(e).trigger(r.raw.change))}function m(a){var b=String(a);return b.indexOf(".")>-1?b.length-b.indexOf(".")-1:0}function n(a,b){var c=Math.pow(10,b);return Math.round(a*c)/c}var o=b.Plugin("number",{widget:!0,defaults:{customClass:"",labels:{up:"Up",down:"Down"}},classes:["arrow","up","down","disabled"],methods:{_setup:d,_construct:e,_destruct:f,enable:g,disable:h},events:{}}),p=o.classes,q=p.raw,r=o.events,s=o.functions,t=null}(jQuery,Formstone);