function albumHtml(album) {
  var html = '<table style="width:164px; float: left;"><tr><td align="center" style="height:164px;">'
  html += '<a href=' + album.url + '><img src=' + album.img + ' width="160" height="160" style="margin:1px 0 0 4px;"></a>';
  html += '</td></tr><tr><td style="text-align:center;font-family:arial,sans-serif;font-size:12px">';
  html += '<p><a href=' + album.url + ' style="color:#4D4D4D;font-weight:bold;text-decoration:none;">';
  html += album.title + '</a><br>' + album.date;
  if (album.photos) {
    html += '<br>photos: ' + album.photos;
  } else if (album.albums) {
    html += '<br>albums: ' + album.albums;
  }
  html += '</p></td></tr></table>';
  return html;
}
  
function generateAlbumThumbs(albums, div) {
  var html = '';
  var i;
  for (i = 0; i < albums.length; ++i) {
    html += albumHtml(albums[i]);
  }

  document.getElementById(div).innerHTML = html;
}

// Indexes to standard thumbnails returned by Picasa API
var THUMB_SMALL  = 0;
var THUMB_MEDIUM = 1;
var THUMB_LARGE  = 2;

// Sizes for photographs to be displayed by slimbox
var PHOTO_SMALL  = 640;
var PHOTO_MEDIUM = 800;
var PHOTO_LARGE  = 1024;

var DEFAULT_MARGIN    = 5;
var DEFAULT_THUMBSIZE = THUMB_MEDIUM;
var DEFAULT_PHOTOSIZE = PHOTO_MEDIUM;

// Compute horizontal and vertical padding needed to make the image "square" so
// landscape and portrait images align nicely on a grid
function computePadding(width, height) {
  var hspace = 0;
  var vspace = 0;

  if (width > height) {
    vspace = (width - height) / 2;
  } else if (height > width) {
    hspace = (height - width) / 2;
  }

  return {"hspace": hspace, "vspace": vspace};
}

// Adjust margin style, using padding computed from image dimensions
// hspace and vspace specify padding to make the area filled by the image seem "square"
// margin is the padding to be placed on all sides of the image
function imgMarginStyle(hspace, vspace, margin) {
  var hmargin = margin + hspace;
  var vmargin = margin + vspace;
  return "margin: " + vmargin + "px " + hmargin + "px " + vmargin + "px " + hmargin + "px;";
}

// Generate url for photo scaled to specified size
function imgScaledUrl(url, size) {
  var split = url.lastIndexOf("/");
  return url.substring(0, split) + "/s" + size + url.substring(split);
}

function loadPicasaAlbum(userid, albumid, thumbsize, photosize, margin) {
  var ts = thumbsize || DEFAULT_THUMBSIZE;
  var ps = photosize || DEFAULT_PHOTOSIZE;
  var m = margin || DEFAULT_MARGIN;

  // Originally based on code from http://www.bloggingtips.com/2009/03/23/picasa-widgets-and-plugins-for-your-blog/
  $j = jQuery.noConflict();
  $j(document).ready(function(){
    $j.getJSON("https://picasaweb.google.com/data/feed/base/user/" + userid + "/album/" + albumid + "?kind=photo&access=public&alt=json-in-script&callback=?",
    function(data, status) {
      $j("#picasaTitle").text(data.feed.title.$t);
      $j("#picasaSubtitle").text(data.feed.subtitle.$t);

      $j.each(data.feed.entry, function(i, pic) {
        var thumb = pic.media$group.media$thumbnail[ts];
        var photo = pic.media$group.media$content[0];
        var desc = pic.media$group.media$description.$t;
        var pad = computePadding(thumb.width, thumb.height);

        $j("<img/>").attr("src", thumb.url)
                    .attr("alt", desc)
                    .attr("style", imgMarginStyle(pad.hspace, pad.vspace, m))
                    .appendTo("#picasaPhotos")
                    .wrap("<a href=\"" + imgScaledUrl(photo.url, ps) + "\" title=\"" + desc + "\" />");
      });
      
      $j("#picasaPhotos a").slimbox();
    });
  });
}

/*
	Slimbox v2.04 - The ultimate lightweight Lightbox clone for jQuery
	(c) 2007-2010 Christophe Beyls <http://www.digitalia.be>
	MIT-style license.
*/
(function(w){var E=w(window),u,f,F=-1,n,x,D,v,y,L,r,m=!window.XMLHttpRequest,s=[],l=document.documentElement,k={},t=new Image(),J=new Image(),H,a,g,p,I,d,G,c,A,K;w(function(){w("body").append(w([H=w('<div id="lbOverlay" />')[0],a=w('<div id="lbCenter" />')[0],G=w('<div id="lbBottomContainer" />')[0]]).css("display","none"));g=w('<div id="lbImage" />').appendTo(a).append(p=w('<div style="position: relative;" />').append([I=w('<a id="lbPrevLink" href="#" />').click(B)[0],d=w('<a id="lbNextLink" href="#" />').click(e)[0]])[0])[0];c=w('<div id="lbBottom" />').appendTo(G).append([w('<a id="lbCloseLink" href="#" />').add(H).click(C)[0],A=w('<div id="lbCaption" />')[0],K=w('<div id="lbNumber" />')[0],w('<div style="clear: both;" />')[0]])[0]});w.slimbox=function(O,N,M){u=w.extend({loop:false,overlayOpacity:0.8,overlayFadeDuration:400,resizeDuration:400,resizeEasing:"swing",initialWidth:250,initialHeight:250,imageFadeDuration:400,captionAnimationDuration:400,counterText:"Image {x} of {y}",closeKeys:[27,88,67],previousKeys:[37,80],nextKeys:[39,78]},M);if(typeof O=="string"){O=[[O,N]];N=0}y=E.scrollTop()+(E.height()/2);L=u.initialWidth;r=u.initialHeight;w(a).css({top:Math.max(0,y-(r/2)),width:L,height:r,marginLeft:-L/2}).show();v=m||(H.currentStyle&&(H.currentStyle.position!="fixed"));if(v){H.style.position="absolute"}w(H).css("opacity",u.overlayOpacity).fadeIn(u.overlayFadeDuration);z();j(1);f=O;u.loop=u.loop&&(f.length>1);return b(N)};w.fn.slimbox=function(M,P,O){P=P||function(Q){return[Q.href,Q.title]};O=O||function(){return true};var N=this;return N.unbind("click").click(function(){var S=this,U=0,T,Q=0,R;T=w.grep(N,function(W,V){return O.call(S,W,V)});for(R=T.length;Q<R;++Q){if(T[Q]==S){U=Q}T[Q]=P(T[Q],Q)}return w.slimbox(T,U,M)})};function z(){var N=E.scrollLeft(),M=E.width();w([a,G]).css("left",N+(M/2));if(v){w(H).css({left:N,top:E.scrollTop(),width:M,height:E.height()})}}function j(M){if(M){w("object").add(m?"select":"embed").each(function(O,P){s[O]=[P,P.style.visibility];P.style.visibility="hidden"})}else{w.each(s,function(O,P){P[0].style.visibility=P[1]});s=[]}var N=M?"bind":"unbind";E[N]("scroll resize",z);w(document)[N]("keydown",o)}function o(O){var N=O.keyCode,M=w.inArray;return(M(N,u.closeKeys)>=0)?C():(M(N,u.nextKeys)>=0)?e():(M(N,u.previousKeys)>=0)?B():false}function B(){return b(x)}function e(){return b(D)}function b(M){if(M>=0){F=M;n=f[F][0];x=(F||(u.loop?f.length:0))-1;D=((F+1)%f.length)||(u.loop?0:-1);q();a.className="lbLoading";k=new Image();k.onload=i;k.src=n}return false}function i(){a.className="";w(g).css({backgroundImage:"url("+n+")",visibility:"hidden",display:""});w(p).width(k.width);w([p,I,d]).height(k.height);w(A).html(f[F][1]||"");w(K).html((((f.length>1)&&u.counterText)||"").replace(/{x}/,F+1).replace(/{y}/,f.length));if(x>=0){t.src=f[x][0]}if(D>=0){J.src=f[D][0]}L=g.offsetWidth;r=g.offsetHeight;var M=Math.max(0,y-(r/2));if(a.offsetHeight!=r){w(a).animate({height:r,top:M},u.resizeDuration,u.resizeEasing)}if(a.offsetWidth!=L){w(a).animate({width:L,marginLeft:-L/2},u.resizeDuration,u.resizeEasing)}w(a).queue(function(){w(G).css({width:L,top:M+r,marginLeft:-L/2,visibility:"hidden",display:""});w(g).css({display:"none",visibility:"",opacity:""}).fadeIn(u.imageFadeDuration,h)})}function h(){if(x>=0){w(I).show()}if(D>=0){w(d).show()}w(c).css("marginTop",-c.offsetHeight).animate({marginTop:0},u.captionAnimationDuration);G.style.visibility=""}function q(){k.onload=null;k.src=t.src=J.src=n;w([a,g,c]).stop(true);w([I,d,g,G]).hide()}function C(){if(F>=0){q();F=x=D=-1;w(a).hide();w(H).stop().fadeOut(u.overlayFadeDuration,j)}return false}})(jQuery);

// AUTOLOAD CODE BLOCK (MAY BE CHANGED OR REMOVED)
if (!/android|iphone|ipod|series60|symbian|windows ce|blackberry/i.test(navigator.userAgent)) {
	jQuery(function($) {
		$("a[rel^='lightbox']").slimbox({/* Put custom options here */}, null, function(el) {
			return (this == el) || ((this.rel.length > 8) && (this.rel == el.rel));
		});
	});
}
