/******************************************
* Snow Effect Script- By Altan d.o.o. (http://www.altan.hr/snow/index.html)
* Visit Dynamic Drive DHTML code library (http://www.dynamicdrive.com/) for full source code
* Made as module http://blogger4you.blogspot.com
******************************************/
  
  //Configure below to change URL path to the snow image
  var snowsrc="img/snow1.gif"
  // Configure below to change number of snow to render
  var no = 10;
  // Configure whether snow should disappear after x seconds (0=never):
  var hidesnowtime = 0;
  // Configure how much snow should drop down before fading ("windowheight" or "pageheight")
  var snowdistance = "pageheight";

///////////Stop Config//////////////////////////////////

  var ie4up = (document.all) ? 1 : 0;
  var ns6up = (document.getElementById&&!document.all) ? 1 : 0;

	function iecompattest(){
	return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
	}

  var dx, xp, yp;    // coordinate and position variables
  var am, stx, sty;  // amplitude and step variables
  var i, doc_width = 800, doc_height = 600; 
  
  if (ns6up) {
    doc_width = self.innerWidth;
    doc_height = self.innerHeight;
  } else if (ie4up) {
    doc_width = iecompattest().clientWidth;
    doc_height = iecompattest().clientHeight;
  }

  dx = new Array();
  xp = new Array();
  yp = new Array();
  am = new Array();
  stx = new Array();
  sty = new Array();
  snowsrc=(snowsrc.indexOf("dynamicdrive.com")!=-1)? "snow.gif" : snowsrc
  for (i = 0; i < no; ++ i) {  
    dx[i] = 0;                        // set coordinate variables
    xp[i] = Math.random()*(doc_width-50);  // set position variables
    yp[i] = Math.random()*doc_height;
    am[i] = Math.random()*20;         // set amplitude variables
    stx[i] = 0.02 + Math.random()/10; // set step variables
    sty[i] = 0.7 + Math.random();     // set step variables
		if (ie4up||ns6up) {
      if (i == 0) {
        document.write("<div id=\"dot"+ i +"\" style=\"POSITION: absolute; Z-INDEX: "+ i +"; VISIBILITY: visible; TOP: 15px; LEFT: 15px;\"><img src='"+snowsrc+"' border=\"0\"><\/div>");
      } else {
        document.write("<div id=\"dot"+ i +"\" style=\"POSITION: absolute; Z-INDEX: "+ i +"; VISIBILITY: visible; TOP: 15px; LEFT: 15px;\"><img src='"+snowsrc+"' border=\"0\"><\/div>");
      }
    }
  }

  function snowIE_NS6() {  // IE and NS6 main animation function
    doc_width = ns6up?window.innerWidth-10 : iecompattest().clientWidth-10;
		doc_height=(window.innerHeight && snowdistance=="windowheight")? window.innerHeight : (ie4up && snowdistance=="windowheight")?  iecompattest().clientHeight : (ie4up && !window.opera && snowdistance=="pageheight")? iecompattest().scrollHeight : iecompattest().offsetHeight;
    for (i = 0; i < no; ++ i) {  // iterate for every dot
      yp[i] += sty[i];
      if (yp[i] > doc_height-50) {
        xp[i] = Math.random()*(doc_width-am[i]-30);
        yp[i] = 0;
        stx[i] = 0.02 + Math.random()/10;
        sty[i] = 0.7 + Math.random();
      }
      dx[i] += stx[i];
      document.getElementById("dot"+i).style.top=yp[i]+"px";
      document.getElementById("dot"+i).style.left=xp[i] + am[i]*Math.sin(dx[i])+"px";  
    }
    snowtimer=setTimeout("snowIE_NS6()", 10);
  }

	function hidesnow(){
		if (window.snowtimer) clearTimeout(snowtimer)
		for (i=0; i<no; i++) document.getElementById("dot"+i).style.visibility="hidden"
	}
		

if (ie4up||ns6up){
    snowIE_NS6();
		if (hidesnowtime>0)
		setTimeout("hidesnow()", hidesnowtime*1000)
		}












    /**
 * Snowfall pure js
 * https://github.com/loktar00/JQuery-Snowfall
 * http://www.apache.org/licenses/LICENSE-2.0
 */
(function(){(function(){for(var d=0,c=["webkit","moz"],b=0;b<c.length&&!window.requestAnimationFrame;++b)window.requestAnimationFrame=window[c[b]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[c[b]+"CancelAnimationFrame"]||window[c[b]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(b,c){var f=(new Date).getTime(),g=Math.max(0,16-(f-d)),h=window.setTimeout(function(){b(f+g)},g);d=f+g;return h});window.cancelAnimationFrame||(window.cancelAnimationFrame=
  function(b){clearTimeout(b)})})();var p=function(){function d(){var c=document.createElement("div");document.body.appendChild(c);c.setAttribute("class","snowfall");var b={flakeCount:35,flakeColor:"#ffffff",flakeIndex:999999,minSize:1,maxSize:2,minSpeed:1,maxSpeed:5,round:!1,shadow:!1,collection:!1,image:!1,collectionHeight:40},a={},d=[],f=0,g=0,h=0,m=0,n=0,k=0,r=0,p=function(b,a){for(var c in a)b.hasOwnProperty(c)&&(b[c]=a[c])},e=function(b,a){return Math.round(b+Math.random()*(a-b))},l=function(b,
  a){for(var c in a)b.style[c]=a[c]+("width"==c||"height"==c?"px":"")},q=function(a,d,f,p,q){this.id=q;this.x=a+n;this.y=d+m;this.size=f;this.speed=p;this.step=0;this.stepSize=e(1,10)/100;b.collection&&(this.target=canvasCollection[e(0,canvasCollection.length-1)]);a=null;b.image?(a=new Image,a.src=b.image):(a=document.createElement("div"),l(a,{background:b.flakeColor}));a.className="snowfall-flakes";a.setAttribute("id","flake-"+this.id);l(a,{width:this.size,height:this.size,position:"absolute",top:this.y,
  left:this.x,fontSize:0,zIndex:b.flakeIndex});b.round&&l(a,{"-moz-border-radius":~~b.maxSize+"px","-webkit-border-radius":~~b.maxSize+"px",borderRadius:~~b.maxSize+"px"});b.shadow&&l(a,{"-moz-box-shadow":"1px 1px 1px #555","-webkit-box-shadow":"1px 1px 1px #555",boxShadow:"1px 1px 1px #555"});c.appendChild(a);this.element=a;this.update=function(){this.y+=this.speed;this.y>m+g-(this.size+6)&&this.reset();this.element.style.top=this.y+"px";this.element.style.left=~~this.x+"px";this.step+=this.stepSize;
  this.x+=Math.cos(this.step);(this.x>n+h-k||this.x<k)&&this.reset()};this.reset=function(){this.y=m;this.x=n+e(k,h-k);this.stepSize=e(1,10)/100;this.size=e(100*b.minSize,100*b.maxSize)/100;this.speed=e(b.minSpeed,b.maxSpeed)}},s=function(){for(var a=0;a<d.length;a+=1)d[a].update();r=requestAnimationFrame(function(){s()})};return{snow:function(c,l){p(b,l);a=c;g=a.clientHeight;h=a.offsetWidth;m=a.offsetTop;n=a.offsetLeft;a.snow=this;"body"===a.tagName.toLowerCase()&&(k=25);window.onresize=function(){g=
  a.clientHeight;h=a.offsetWidth;m=a.offsetTop;n=a.offsetLeft};for(i=0;i<b.flakeCount;i+=1)f=d.length,d.push(new q(e(k,h-k),e(0,g),e(100*b.minSize,100*b.maxSize)/100,e(b.minSpeed,b.maxSpeed),f));s()},clear:function(){for(var b=null,b=a.getElementsByClassName?a.getElementsByClassName("snowfall-flakes"):a.querySelectorAll(".snowfall-flakes"),c=b.length;c--;)a.removeChild(b[c]);d=[];cancelAnimationFrame(r)}}}return{snow:function(c,b){if("string"==typeof b)if(0<c.length)for(var a=0;a<c.length;a++)c[a].snow&&
  c[a].snow.clear();else c.snow.clear();else if(0<c.length)for(a=0;a<c.length;a++)(new d).snow(c[a],b);else(new d).snow(c,b)}}}(),q=setInterval(function(){"complete"===document.readyState&&(p.snow(document.body,{shadow:!0,flakeCount:150,maxSize:3,round:!0}),clearInterval(q))},100)})();