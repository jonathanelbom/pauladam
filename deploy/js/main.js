!function(){function a(){var a,b=h(),c=b.width,d=b.height,e=Math.max(c,d);return a=240>=e?"m":320>=e?"n":500>=e?"-":640>=e?"z":"b"}function b(a){$(".modal .js-next").off(),$(".modal .js-prev").off(),$(".modal .js-close").off(),a&&($(".modal .js-next").on(V,function(){return c(e()),!1}),$(".modal .js-prev").on(V,function(){return c(f()),!1}),$(".modal .js-close").on(V,function(){return K.removeClass("modal-shown"),F.removeClass("shown"),H.attr("src",""),!1}))}function c(b){var c=g(b.farm,b.server,b.id,b.secret,a());H.removeClass("full-width full-height loaded"),z=setTimeout(function(){j(!0)},500),H.attr("src",c),K.addClass("modal-shown"),F.addClass("shown showing-hiding"),H.addClass("loading"),I.addClass("loading").find("span").text(b.title)}function d(a){return x=_.findWhere(N,{id:a.toString()})}function e(){var a=N.indexOf(x);return a=a===N.length-1?0:a+1,x=N[a]}function f(){var a=N.indexOf(x);return a=0===a?N.length-1:a-1,x=N[a]}function g(a,b,c,d,e){return"http://farm"+a+".static.flickr.com/"+b+"/"+c+"_"+d+"_"+e+".jpg"}function h(){return{width:Math.max(document.documentElement.clientWidth,window.innerWidth||0),height:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}}function i(){S&&($(".section").justifiedGallery("destroy"),$(".section").justifiedGallery().off()),$(".section").justifiedGallery({rowHeight:l(),lastRow:"nojustify",margins:15,sizeRangeSuffixes:{100:"_t",240:"_m",320:"_n",500:"",640:"_z",1024:"_b"}}),$(".section").justifiedGallery().on("jg.complete",function(a){j(!1),$(document).scrollTop(0)}),S=!0}function h(){return{width:Math.max(document.documentElement.clientWidth,window.innerWidth||0),height:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}}function j(a){_.isBoolean(a)||(a=!J.is(":visible")),a?J.show():J.hide()}function k(a,b){R[a]&&delete R[a]}function l(){var a=h(),b=300;return a.width<=500?b=100:a.width<=800&&(b=200),b}function m(){$(".section").justifiedGallery({rowHeight:l()})}function n(){var a=h(),b=a.width/a.height,c=H.outerWidth(),d=H.outerHeight(),e=c/d;e>b?H.addClass("full-width"):H.addClass("full-height")}function o(a){var b=a.photoset;C[b.id].photoset=b,O++,$.each(a.photoset.photo,function(b,c){c.photosetId=a.photoset.id,M.push(c)}),P>0&&O===P&&(p(M),i())}function p(a){N=_.shuffle(a),_.each(N,q)}function q(a){var b=g(a.farm,a.server,a.id,a.secret,"m"),c=$(D.thumb.concat()).on("error",function(){k($(this).data("photoId"),!1)}).on("load",function(){k($(this).parent().data("photoId"),!0)}).attr("src",b),d=$("<div></div>").append(c).attr({"data-photo-id":a.id,"data-photoset-id":a.photosetId});d.appendTo(".section")}function r(a){var b=$("#nav-scroll > .navbar-right");y=$(D.section.concat()).appendTo(E),console.log("$imageHolder:",y),b.append($('<li><a href="#" class="nav-item" data-section-id="all">all</a></li>')),$.each(a.photosets.photoset,function(a,c){P++,C[c.id]=c,$(D.navitem.concat()).appendTo(b).find("a").attr("data-section-id",this.id).text(this.title._content),v(this.id)}),$('a[data-section-id="all"]').trigger(V)}function s(a){w=a.user.nsid,t()}function t(){$.getJSON(B,{method:"flickr.photosets.getList",api_key:A,format:"json",user_id:w,per_page:20},r)}function u(a){$.getJSON(B,{method:"flickr.people.findByUsername",api_key:A,format:"json",username:a},s)}function v(a){$.getJSON(B,{method:"flickr.photosets.getPhotos",api_key:A,format:"json",photoset_id:a,per_page:500},o)}var w,x,y,z,A="4db987262fa1141b53330031985571b6",B="https://api.flickr.com/services/rest/?jsoncallback=?",C={},D={section:'<section class="section"></section>',thumb:'<img class="thumb"></img>',navitem:'<li><a href="#" class="nav-item"></a></li>'},E=$("main"),F=$(".modal"),G=$(".modal-controls"),H=$(".full-size"),I=$(".descr"),J=$(".js-loader"),K=$("body"),L=$(".nav-shell"),M=[],N=[],O=0,P=0,Q=!1,R={},S=!1,T=!1,U=!1;(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&(U=!0),u("mikedparsons");var V=Modernizr.touch?"touchend":"click";H.on("load",function(){z&&(clearTimeout(z),z=null),H.removeClass("loading"),H.addClass("loaded"),I.removeClass("loading"),j(!1),n()});var W=_.debounce(function(){n(),U||m()},200);$(window).on("resize",function(){H.removeClass("full-width full-height"),W()}),$(window).on("scroll",function(){var a=170,b=$(this).scrollTop()>a&&!T,c=$(this).scrollTop()<=a&&T;b?(L.addClass("shrunk"),T=!0):c&&(L.removeClass("shrunk"),T=!1)}),U&&$(window).on("orientationchange",function(){m()}),$("header").on(V,".nav-item",function(){$(".nav-item").removeClass("selected");var a=$(this).addClass("selected").data("sectionId");$(".section").empty();var b="all"===a?M:_.where(M,{photosetId:a});p(b),i(),$("body").scrollTop(0),$(".navbar-collapse").removeClass("in")}),$(".thumbs").css("padding-top",$(".main-nav").outerHeight()+15+"px");var X=G.outerHeight();G.css("top","calc(50% - "+X/2+"px)"),E.on(V,".thumb",function(){Q||c(d($(this).closest("div").data("photoId"))),Q=!1}).on("touchmove",".thumb",function(){Q=!0}),$(".modal").on("webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd",function(){var a=$(this),c=parseInt(a.css("opacity"),10);0===c&&a.removeClass("showing-hiding"),b(1===c)})}();