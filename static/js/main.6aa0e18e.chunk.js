(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(3),i=t.n(r),o=(t(15),t(4)),c=t(5),l=t(7),d=t(6),p=t(1),u=t(8),m=(t(16),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(l.a)(this,Object(d.a)(a).call(this,e))).sampleRefs=void 0,t.padKeys=["Q","W","E","A","S","D","Z","X","C"],t.state={sampleSrc:{sample1:"./samples/kick1.wav",sample2:"./samples/large-tom1.wav",sample3:"./samples/medium-tom1.wav",sample4:"./samples/small-tom1.wav",sample5:"./samples/snare-bottom1.wav",sample6:"./samples/sidestick1.wav",sample7:"./samples/ride-bell1.wav",sample8:"./samples/crash1.wav",sample9:"./samples/chh1.wav"},displayText:""},t.sampleRefs={sample1:s.a.createRef(),sample2:s.a.createRef(),sample3:s.a.createRef(),sample4:s.a.createRef(),sample5:s.a.createRef(),sample6:s.a.createRef(),sample7:s.a.createRef(),sample8:s.a.createRef(),sample9:s.a.createRef()},t.handleKeyPress=t.handleKeyPress.bind(Object(p.a)(t)),t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress,!1)}},{key:"handleKeyPress",value:function(e){switch(e.code){case"Key"+this.padKeys[0]:this.play(1);break;case"Key"+this.padKeys[1]:this.play(2);break;case"Key"+this.padKeys[2]:this.play(3);break;case"Key"+this.padKeys[3]:this.play(4);break;case"Key"+this.padKeys[4]:this.play(5);break;case"Key"+this.padKeys[5]:this.play(6);break;case"Key"+this.padKeys[6]:this.play(7);break;case"Key"+this.padKeys[7]:this.play(8);break;case"Key"+this.padKeys[8]:this.play(9)}}},{key:"play",value:function(e){var a=this.sampleRefs["sample".concat(e)];a.current.pause(),a.current.currentTime=0,a.current.play(),this.setState({displayText:this.padKeys[e-1]})}},{key:"renderHeader",value:function(){return s.a.createElement("header",null)}},{key:"renderDrumMachine",value:function(){var e=this,a=Array.from({length:this.padKeys.length},function(a,t){return s.a.createElement("div",{className:"drum-pad",key:"drum-pad-".concat(t+1),id:"drum-pad-".concat(t+1),onClick:function(){return e.play(t+1)}},e.padKeys[t],s.a.createElement("audio",{id:e.padKeys[t],className:"clip",src:e.state.sampleSrc["sample".concat(t+1)],ref:e.sampleRefs["sample".concat(t+1)]}))});return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{id:"display"},this.state.displayText),a)}},{key:"renderFooter",value:function(){return s.a.createElement("footer",null)}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,this.renderHeader(),this.renderDrumMachine(),this.renderFooter())}}]),a}(s.a.Component)),h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,a){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(s.a.createElement(m,null),document.getElementById("drum-machine")),function(e){if("serviceWorker"in navigator){if(new URL("/drum-machine",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var a="".concat("/drum-machine","/service-worker.js");h?(function(e,a){fetch(e).then(function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):y(e,a)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(a,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):y(a,e)})}}()},9:function(e,a,t){e.exports=t(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.6aa0e18e.chunk.js.map