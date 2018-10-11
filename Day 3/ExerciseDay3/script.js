/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-geolocation-setclasses !*/
 !function(n,e,o){function s(n,e){return typeof n===e}function a(){var n,e,o,a,i,f,r;for(var c in l)if(l.hasOwnProperty(c)){if(n=[],e=l[c],e.name&&(n.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(o=0;o<e.options.aliases.length;o++)n.push(e.options.aliases[o].toLowerCase());for(a=s(e.fn,"function")?e.fn():e.fn,i=0;i<n.length;i++)f=n[i],r=f.split("."),1===r.length?Modernizr[r[0]]=a:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=a),t.push((a?"":"no-")+r.join("-"))}}function i(n){var e=r.className,o=Modernizr._config.classPrefix||"";if(c&&(e=e.baseVal),Modernizr._config.enableJSClass){var s=new RegExp("(^|\\s)"+o+"no-js(\\s|$)");e=e.replace(s,"$1"+o+"js$2")}Modernizr._config.enableClasses&&(e+=" "+o+n.join(" "+o),c?r.className.baseVal=e:r.className=e)}var t=[],l=[],f={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(n,e){var o=this;setTimeout(function(){e(o[n])},0)},addTest:function(n,e,o){l.push({name:n,fn:e,options:o})},addAsyncTest:function(n){l.push({name:null,fn:n})}},Modernizr=function(){};Modernizr.prototype=f,Modernizr=new Modernizr,Modernizr.addTest("geolocation","geolocation"in navigator);var r=e.documentElement,c="svg"===r.nodeName.toLowerCase();a(),i(t),delete f.addTest,delete f.addAsyncTest;for(var u=0;u<Modernizr._q.length;u++)Modernizr._q[u]();n.Modernizr=Modernizr}(window,document);


 var mainBody = document.getElementsByTagName('body')[0];

 var newImage1 = document.createElement('img');
 var newImage2 = document.createElement('img');

 mainBody.appendChild(newImage1);
 mainBody.appendChild(newImage2);
 
 if (Modernizr.geolocation) {
    newImage1.src = 'https://placekitten.com/500/200?random';
    console.log('Location copied! Success!!');
 } else {
    newImage2.src = 'http://www.placepuppy.net/400/250';
    console.log('Failed copying location!')
 }


       
if(history.length === 1) {
    mainBody.style.backgroundColor= '#E0FFFF';
    console.log('First Visit!');
   
} else {
    mainBody.style.backgroundColor = '#FFDAB9';
    console.log('Not your first visit here, eh?');
}


var styledHeading = document.getElementById('heading');
styledHeading.style.color = 'red';

var navContainer = document.getElementById('nav-links');

console.log(singleLink[0]);

var singleLink = document.getElementsByTagName('li');

    for(var i =0; i <= singleLink.length; i++){
        if(i % 2 ===0) {
            console.log(singleLink[i]);
        }
    }










// Style every even nav item differently from the odd nav items.