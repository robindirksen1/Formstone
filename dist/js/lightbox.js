/*! formstone v0.5.6 [lightbox.js] 2015-04-23 | MIT License | formstone.it */

!function(a,b,c){"use strict";function d(){R=b.$body,S=a("html, body")}function e(){T&&j()}function f(a){this.on(N.click,a,i)}function g(){k(),this.off(N.namespace)}function h(b,c){b instanceof a&&i.apply(P,[{data:a.extend({},{$object:b},K,c||{})}])}function i(c){if(!T){var d=c.data,e=d.$el,f=d.$object,g=e&&e[0].href?e[0].href||"":"",h=e&&e[0].hash?e[0].hash||"":"",i=g.toLowerCase().split(".").pop().split(/\#|\?/),j=i[0],l=e?e.data(J+"-type"):"",m="image"===l||a.inArray(j,d.extensions)>-1||"data:image"===g.substr(0,10),o=g.indexOf("youtube.com/embed")>-1||g.indexOf("player.vimeo.com/video")>-1,q="url"===l||!m&&!o&&"http"===g.substr(0,4)&&!h,r="element"===l||!m&&!o&&!q&&"#"===h.substr(0,1),t="undefined"!=typeof f;if(r&&(g=h),!(m||o||q||r||t))return;if(O.killEvent(c),T=a.extend({},{visible:!1,gallery:{active:!1},isMobile:b.isMobile||d.mobile,isTouch:b.support.touch,isAnimating:!0,oldContentHeight:0,oldContentWidth:0},d),T.margin*=2,T.type=m?"image":o?"video":"element",m||o){var u=e.data(J+"-gallery");u&&(T.gallery.active=!0,T.gallery.id=u,T.gallery.$items=a("a[data-lightbox-gallery= "+T.gallery.id+"], a[rel= "+T.gallery.id+"]"),T.gallery.index=T.gallery.$items.index(T.$el),T.gallery.total=T.gallery.$items.length-1)}var w="";T.isMobile||(w+='<div class="'+[L.raw.overlay,T.customClass].join(" ")+'"></div>');var x=[L.raw.base,L.raw.loading,L.raw.animating,T.customClass];T.fixed&&x.push(L.raw.fixed),T.isMobile&&x.push(L.raw.mobile),T.isTouch&&x.push(L.raw.touch),q&&x.push(L.raw.iframed),(r||t)&&x.push(L.raw.inline),w+='<div class="'+x.join(" ")+'">',w+='<button type="button" class="'+L.raw.close+'">'+T.labels.close+"</button>",w+='<span class="'+L.raw.loading_icon+'"></span>',w+='<div class="'+L.raw.container+'">',w+='<div class="'+L.raw.content+'">',(m||o)&&(w+='<div class="'+L.raw.tools+'">',w+='<div class="'+L.raw.controls+'">',T.gallery.active&&(w+='<button type="button" class="'+[L.raw.control,L.raw.control_previous].join(" ")+'">'+T.labels.previous+"</button>",w+='<button type="button" class="'+[L.raw.control,L.raw.control_next].join(" ")+'">'+T.labels.next+"</button>"),T.isMobile&&T.isTouch&&(w+='<button type="button" class="'+[L.raw.caption_toggle].join(" ")+'">'+T.labels.captionClosed+"</button>"),w+="</div>",w+='<div class="'+L.raw.meta+'">',T.gallery.active&&(w+='<p class="'+L.raw.position+'"',T.gallery.total<1&&(w+=' style="display: none;"'),w+=">",w+='<span class="'+L.raw.position_current+'">'+(T.gallery.index+1)+"</span> ",w+=T.labels.count,w+=' <span class="'+L.raw.position_total+'">'+(T.gallery.total+1)+"</span>",w+="</p>"),w+='<div class="'+L.raw.caption+'">',w+=T.formatter.call(e,d),w+="</div></div>",w+="</div>"),w+="</div></div></div>",R.append(w),T.$overlay=a(L.overlay),T.$lightbox=a(L.base),T.$close=a(L.close),T.$container=a(L.container),T.$content=a(L.content),T.$tools=a(L.tools),T.$meta=a(L.meta),T.$position=a(L.position),T.$caption=a(L.caption),T.$controlBox=a(L.controls),T.$controls=a(L.control),T.isMobile?(T.paddingVertical=T.$close.outerHeight(),T.paddingHorizontal=0,T.mobilePaddingVertical=parseInt(T.$content.css("paddingTop"),10)+parseInt(T.$content.css("paddingBottom"),10),T.mobilePaddingHorizontal=parseInt(T.$content.css("paddingLeft"),10)+parseInt(T.$content.css("paddingRight"),10)):(T.paddingVertical=parseInt(T.$lightbox.css("paddingTop"),10)+parseInt(T.$lightbox.css("paddingBottom"),10),T.paddingHorizontal=parseInt(T.$lightbox.css("paddingLeft"),10)+parseInt(T.$lightbox.css("paddingRight"),10),T.mobilePaddingVertical=0,T.mobilePaddingHorizontal=0),T.contentHeight=T.$lightbox.outerHeight()-T.paddingVertical,T.contentWidth=T.$lightbox.outerWidth()-T.paddingHorizontal,T.controlHeight=T.$controls.outerHeight(),n(),T.gallery.active&&z(),Q.on(N.keyDown,A),R.on(N.clickTouchStart,[L.overlay,L.close].join(", "),k),T.gallery.active&&T.$lightbox.on(N.clickTouchStart,L.control,y),T.isMobile&&T.isTouch&&T.$lightbox.on(N.clickTouchStart,L.caption_toggle,p),T.$lightbox.transition({property:"opacity"},function(){m?s(g):o?v(g):q?C(g):r?B(g):t&&D(T.$object)}).addClass(L.raw.open),T.$overlay.addClass(L.raw.open)}}function j(a){"object"!=typeof a&&(T.targetHeight=arguments[0],T.targetWidth=arguments[1]),"element"===T.type?E(T.$content.find("> :first-child")):"image"===T.type?t():"video"===T.type&&w(),m()}function k(a){O.killEvent(a),T&&(T.$lightbox.transition("destroy"),T.$container.transition("destroy"),T.$lightbox.addClass(L.raw.animating).transition({property:"opacity"},function(){T.$lightbox.off(N.namespace),T.$container.off(N.namespace),Q.off(N.namespace),R.off(N.namespace),T.$overlay.remove(),T.$lightbox.remove(),T=null,Q.trigger(N.close)}),T.$lightbox.removeClass(L.raw.open),T.$overlay.removeClass(L.raw.open),T.isMobile&&S.removeClass(M.lock))}function l(){{var a=o();T.isMobile?0:T.duration}T.isMobile||T.$controls.css({marginTop:(T.contentHeight-T.controlHeight-T.metaHeight)/2}),!T.visible&&T.isMobile&&T.gallery.active&&T.$content.touch({axis:"x",swipe:!0}).on(N.swipe,G),T.$lightbox.transition({property:T.contentHeight!==T.oldContentHeight?"height":"width"},function(){T.$container.transition({property:"opacity"},function(){T.$lightbox.removeClass(L.raw.animating),T.isAnimating=!1}),T.$lightbox.removeClass(L.raw.loading),T.visible=!0,Q.trigger(N.open),T.gallery.active&&x()}),T.isMobile||T.$lightbox.css({height:T.contentHeight+T.paddingVertical,width:T.contentWidth+T.paddingHorizontal,top:T.fixed?0:a.top});var b=T.oldContentHeight!==T.contentHeight||T.oldContentWidth!==T.contentWidth;(T.isMobile||!b)&&T.$lightbox.transition("resolve"),T.oldContentHeight=T.contentHeight,T.oldContentWidth=T.contentWidth,T.isMobile&&S.addClass(M.lock)}function m(){if(T.visible&&!T.isMobile){var a=o();T.$controls.css({marginTop:(T.contentHeight-T.controlHeight-T.metaHeight)/2}),T.$lightbox.css({height:T.contentHeight+T.paddingVertical,width:T.contentWidth+T.paddingHorizontal,top:T.fixed?0:a.top})}}function n(){var a=o();T.$lightbox.css({top:T.fixed?0:a.top})}function o(){if(T.isMobile)return{left:0,top:0};var a={left:(b.windowWidth-T.contentWidth-T.paddingHorizontal)/2,top:T.top<=0?(b.windowHeight-T.contentHeight-T.paddingVertical)/2:T.top};return T.fixed!==!0&&(a.top+=Q.scrollTop()),a}function p(a){O.killEvent(a),T.captionOpen?q():(T.$lightbox.addClass(L.raw.caption_open).find(L.caption_toggle).text(T.labels.captionOpen),T.captionOpen=!0)}function q(){T.$lightbox.removeClass(L.raw.caption_open).find(L.caption_toggle).text(T.labels.captionClosed),T.captionOpen=!1}function r(){var a=this.attr("title"),b=a!==c&&a?a.replace(/^\s+|\s+$/g,""):!1;return b?'<p class="caption">'+b+"</p>":""}function s(b){T.$image=a("<img>"),T.$image.one(N.load,function(){var a=H(T.$image);T.naturalHeight=a.naturalHeight,T.naturalWidth=a.naturalWidth,T.retina&&(T.naturalHeight/=2,T.naturalWidth/=2),T.$content.prepend(T.$image),""===T.$caption.html()?T.$caption.hide():T.$caption.show(),t(),l()}).error(F).attr("src",b).addClass(L.raw.image),(T.$image[0].complete||4===T.$image[0].readyState)&&T.$image.trigger(N.load)}function t(){var a=0;for(T.windowHeight=T.viewportHeight=b.windowHeight-T.mobilePaddingVertical-T.paddingVertical,T.windowWidth=T.viewportWidth=b.windowWidth-T.mobilePaddingHorizontal-T.paddingHorizontal,T.contentHeight=1/0,T.contentWidth=1/0,T.imageMarginTop=0,T.imageMarginLeft=0;T.contentHeight>T.viewportHeight&&2>a;)T.imageHeight=0===a?T.naturalHeight:T.$image.outerHeight(),T.imageWidth=0===a?T.naturalWidth:T.$image.outerWidth(),T.metaHeight=0===a?0:T.metaHeight,T.spacerHeight=0===a?0:T.spacerHeight,0===a&&(T.ratioHorizontal=T.imageHeight/T.imageWidth,T.ratioVertical=T.imageWidth/T.imageHeight,T.isWide=T.imageWidth>T.imageHeight),T.imageHeight<T.minHeight&&(T.minHeight=T.imageHeight),T.imageWidth<T.minWidth&&(T.minWidth=T.imageWidth),T.isMobile?(T.isTouch?(T.$controlBox.css({width:b.windowWidth}),T.spacerHeight=T.$controls.outerHeight(!0)):(T.$tools.css({width:b.windowWidth}),T.spacerHeight=T.$tools.outerHeight(!0)),T.contentHeight=T.viewportHeight,T.contentWidth=T.viewportWidth,u(),T.imageMarginTop=(T.contentHeight-T.targetImageHeight-T.spacerHeight)/2,T.imageMarginLeft=(T.contentWidth-T.targetImageWidth)/2):(0===a&&(T.viewportHeight-=T.margin+T.paddingVertical,T.viewportWidth-=T.margin+T.paddingHorizontal),T.viewportHeight-=T.metaHeight,u(),T.contentHeight=T.targetImageHeight,T.contentWidth=T.targetImageWidth),T.isMobile||T.isTouch||T.$meta.css({width:T.contentWidth}),T.$image.css({height:T.targetImageHeight,width:T.targetImageWidth,marginTop:T.imageMarginTop,marginLeft:T.imageMarginLeft}),T.isMobile||(T.metaHeight=T.$meta.outerHeight(!0),T.contentHeight+=T.metaHeight),a++}function u(){var a=T.isMobile?T.contentHeight-T.spacerHeight:T.viewportHeight,b=T.isMobile?T.contentWidth:T.viewportWidth;T.isWide?(T.targetImageWidth=b,T.targetImageHeight=T.targetImageWidth*T.ratioHorizontal,T.targetImageHeight>a&&(T.targetImageHeight=a,T.targetImageWidth=T.targetImageHeight*T.ratioVertical)):(T.targetImageHeight=a,T.targetImageWidth=T.targetImageHeight*T.ratioVertical,T.targetImageWidth>b&&(T.targetImageWidth=b,T.targetImageHeight=T.targetImageWidth*T.ratioHorizontal)),(T.targetImageWidth>T.imageWidth||T.targetImageHeight>T.imageHeight)&&(T.targetImageHeight=T.imageHeight,T.targetImageWidth=T.imageWidth),(T.targetImageWidth<T.minWidth||T.targetImageHeight<T.minHeight)&&(T.targetImageWidth<T.minWidth?(T.targetImageWidth=T.minWidth,T.targetImageHeight=T.targetImageWidth*T.ratioHorizontal):(T.targetImageHeight=T.minHeight,T.targetImageWidth=T.targetImageHeight*T.ratioVertical))}function v(b){T.$videoWrapper=a('<div class="'+L.raw.videoWrapper+'"></div>'),T.$video=a('<iframe class="'+L.raw.video+'" seamless="seamless"></iframe>'),T.$video.attr("src",b).addClass(L.raw.video).prependTo(T.$videoWrapper),T.$content.prepend(T.$videoWrapper),w(),l()}function w(){T.windowHeight=T.viewportHeight=b.windowHeight-T.mobilePaddingVertical-T.paddingVertical,T.windowWidth=T.viewportWidth=b.windowWidth-T.mobilePaddingHorizontal-T.paddingHorizontal,T.videoMarginTop=0,T.videoMarginLeft=0,T.isMobile?(T.isTouch?(T.$controlBox.css({width:b.windowWidth}),T.spacerHeight=T.$controls.outerHeight(!0)):(T.$tools.css({width:b.windowWidth}),T.spacerHeight=T.$tools.outerHeight(!0)),T.viewportHeight-=T.spacerHeight,T.targetVideoWidth=T.viewportWidth,T.targetVideoHeight=T.targetVideoWidth*T.videoRatio,T.targetVideoHeight>T.viewportHeight&&(T.targetVideoHeight=T.viewportHeight,T.targetVideoWidth=T.targetVideoHeight/T.videoRatio),T.videoMarginTop=(T.viewportHeight-T.targetVideoHeight)/2,T.videoMarginLeft=(T.viewportWidth-T.targetVideoWidth)/2):(T.viewportHeight=T.windowHeight-T.margin,T.viewportWidth=T.windowWidth-T.margin,T.targetVideoWidth=T.videoWidth>T.viewportWidth?T.viewportWidth:T.videoWidth,T.targetVideoWidth<T.minWidth&&(T.targetVideoWidth=T.minWidth),T.targetVideoHeight=T.targetVideoWidth*T.videoRatio,T.contentHeight=T.targetVideoHeight,T.contentWidth=T.targetVideoWidth),T.isMobile||T.isTouch||T.$meta.css({width:T.contentWidth}),T.$videoWrapper.css({height:T.targetVideoHeight,width:T.targetVideoWidth,marginTop:T.videoMarginTop,marginLeft:T.videoMarginLeft}),T.isMobile||(T.metaHeight=T.$meta.outerHeight(!0),T.contentHeight=T.targetVideoHeight+T.metaHeight)}function x(){var b="";T.gallery.index>0&&(b=T.gallery.$items.eq(T.gallery.index-1).attr("href"),b.indexOf("youtube.com/embed")<0&&b.indexOf("player.vimeo.com/video")<0&&a('<img src="'+b+'">')),T.gallery.index<T.gallery.total&&(b=T.gallery.$items.eq(T.gallery.index+1).attr("href"),b.indexOf("youtube.com/embed")<0&&b.indexOf("player.vimeo.com/video")<0&&a('<img src="'+b+'">'))}function y(b){O.killEvent(b);var c=a(b.currentTarget);T.isAnimating||c.hasClass(L.raw.control_disabled)||(T.isAnimating=!0,q(),T.gallery.index+=c.hasClass(L.raw.control_next)?1:-1,T.gallery.index>T.gallery.total&&(T.gallery.index=T.infinite?0:T.gallery.total),T.gallery.index<0&&(T.gallery.index=T.infinite?T.gallery.total:0),T.$lightbox.addClass([L.raw.loading,L.raw.animating].join(" ")),T.$container.transition({property:"opacity"},function(){"undefined"!=typeof T.$image&&T.$image.remove(),"undefined"!=typeof T.$videoWrapper&&T.$videoWrapper.remove(),T.$el=T.gallery.$items.eq(T.gallery.index),T.$caption.html(T.formatter.call(T.$el,T)),T.$position.find(L.position_current).html(T.gallery.index+1);var a=T.$el.attr("href"),b=a.indexOf("youtube.com/embed")>-1||a.indexOf("player.vimeo.com/video")>-1;b?v(a):s(a),z()}))}function z(){T.$controls.removeClass(L.raw.control_disabled),T.infinite||(0===T.gallery.index&&T.$controls.filter(L.control_previous).addClass(M.control_disabled),T.gallery.index===T.gallery.total&&T.$controls.filter(L.control_next).addClass(M.control_disabled))}function A(a){!T.gallery.active||37!==a.keyCode&&39!==a.keyCode?27===a.keyCode&&T.$close.trigger(N.click):(O.killEvent(a),T.$controls.filter(37===a.keyCode?L.control_previous:L.control_next).trigger(N.click))}function B(b){var c=a(b).find("> :first-child").clone();D(c)}function C(b){b+=b.indexOf("?")>-1?"&"+T.requestKey+"=true":"?"+T.requestKey+"=true";var c=a('<iframe class="'+L.raw.iframe+'" src="'+b+'"></iframe>');D(c)}function D(a){T.$content.append(a),E(a),l()}function E(a){T.windowHeight=b.windowHeight-T.mobilePaddingVertical-T.paddingVertical,T.windowWidth=b.windowWidth-T.mobilePaddingHorizontal-T.paddingHorizontal,T.objectHeight=a.outerHeight(!0),T.objectWidth=a.outerWidth(!0),T.targetHeight=T.targetHeight||(T.$el?T.$el.data(J+"-height"):null),T.targetWidth=T.targetWidth||(T.$el?T.$el.data(J+"-width"):null),T.maxHeight=T.windowHeight<0?T.minHeight:T.windowHeight,T.isIframe=a.is("iframe"),T.objectMarginTop=0,T.objectMarginLeft=0,T.isMobile||(T.windowHeight-=T.margin,T.windowWidth-=T.margin),T.contentHeight=T.targetHeight?T.targetHeight:T.isIframe||T.isMobile?T.windowHeight:T.objectHeight,T.contentWidth=T.targetWidth?T.targetWidth:T.isIframe||T.isMobile?T.windowWidth:T.objectWidth,(T.isIframe||T.isObject)&&T.isMobile?(T.contentHeight=T.windowHeight,T.contentWidth=T.windowWidth):T.isObject&&(T.contentHeight=T.contentHeight>T.windowHeight?T.windowHeight:T.contentHeight,T.contentWidth=T.contentWidth>T.windowWidth?T.windowWidth:T.contentWidth)}function F(){var b=a('<div class="'+L.raw.error+'"><p>Error Loading Resource</p></div>');T.type="element",T.$tools.remove(),T.$image.off(N.namespace),D(b)}function G(a){T.captionOpen||T.$controls.filter("left"===a.directionX?L.control_next:L.control_previous).trigger(N.click)}function H(a){var b=a[0],c=new Image;return"undefined"!=typeof b.naturalHeight?{naturalHeight:b.naturalHeight,naturalWidth:b.naturalWidth}:"img"===b.tagName.toLowerCase()?(c.src=b.src,{naturalHeight:c.height,naturalWidth:c.width}):!1}var I=b.Plugin("lightbox",{widget:!0,defaults:{customClass:"",extensions:["jpg","sjpg","jpeg","png","gif"],fixed:!1,formatter:r,infinite:!1,labels:{close:"Close",count:"of",next:"Next",previous:"Previous",captionClosed:"View Caption",captionOpen:"Close Caption"},margin:50,minHeight:100,minWidth:100,mobile:!1,retina:!1,requestKey:"fs-lightbox",top:0,videoRatio:.5625,videoWidth:800},classes:["loading","animating","fixed","mobile","touch","inline","iframed","open","overlay","close","loading_icon","container","content","image","video","video_wrapper","tools","meta","controls","control","control_previous","control_next","control_disabled","position","position_current","position_total","caption_toggle","caption","caption_open","iframe","error","lock"],events:{open:"open",close:"close",swipe:"swipe"},methods:{_setup:d,_construct:f,_destruct:g,_resize:e,resize:j},utilities:{_initialize:h,close:k}}),J=I.namespace,K=I.defaults,L=I.classes,M=L.raw,N=I.events,O=I.functions,P=b.window,Q=b.$window,R=null,S=null,T=null}(jQuery,Formstone);