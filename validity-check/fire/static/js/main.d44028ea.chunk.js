(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){},114:function(e){e.exports={host:"127.0.0.1",port:5e3,localhostServerUrl:"localhost:5000",globalhostingDOmain:""}},119:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(8),r=a.n(l),i=(a(46),a(9)),s=a(10),c=a(12),d=a(11),u=a(13),h=a(3),m=a(120),g=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(h.Header,null,o.a.createElement(h.HeaderRow,{title:"SCM"}),o.a.createElement(h.Navigation,null,o.a.createElement("a",{href:"/"},o.a.createElement(m.a,{to:"/"},"Home")),o.a.createElement("a",{href:"/about"},o.a.createElement(m.a,{to:"/about"},"About")))),o.a.createElement(h.Drawer,{title:"SCM"}))}}]),t}(n.Component),p=a(15),b=a(38),f=a.n(b),E=(a(112),a(114),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={delay:2e3,result:" ",statusUrl:"https://cdn.dribbble.com/users/1221795/screenshots/5127790/main-gif-drrible.gif",isPresent:!1,details:"",displayMessage:"Scan the QR code by placing the product QR code in front of the camera",dialogColor:"gray"},a.handleScan=a.handleScan.bind(Object(p.a)(Object(p.a)(a))),a.handleOpenDialog=a.handleOpenDialog.bind(Object(p.a)(Object(p.a)(a))),a.handleCloseDialog=a.handleCloseDialog.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleOpenDialog",value:function(){this.setState({openDialog:!0})}},{key:"handleCloseDialog",value:function(){this.setState({openDialog:!1})}},{key:"handleScan",value:function(e){var t=this;this.setState({result:e});var a={code:e};" "!==this.state.result&&fetch("https://192.168.1.10:5000/api/manufacturer/isvaild",{method:"POST",body:JSON.stringify(a)}).then(function(e){return e.json()}).then(function(e){console.log("json.isPresent",e.isPresent),console.log(e.details),t.setState({isPresent:e.isPresent,details:e.details}),"ok this"===e.details?(t.setState({statusUrl:"https://cdn.dribbble.com/users/900431/screenshots/2346622/green-check.gif",displayMessage:"The product is authenticated. It is a valid product and safe to use",isPresent:e.isPresent,dialogColor:"green"}),t.handleOpenDialog()):!1===e.isPresent&&"Spurious"===e.details?(t.setState({statusUrl:"https://cdn.dribbble.com/users/179979/screenshots/1747462/warning_skull.gif",displayMessage:"The product seems to be counterfeit it is adviced not to use this product",isPresent:e.isPresent,dialogColor:"orange"}),t.handleOpenDialog()):t.setState({statusUrl:"https://cdn.dribbble.com/users/1221795/screenshots/5127790/main-gif-drrible.gif",dialogColor:"black",displayMessage:"Scan the QR code by placing the product QR code in front of the camera"})}).catch(function(e){return console.log(e)})}},{key:"handleError",value:function(e){console.error(e)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(h.Grid,{className:"demo-grid-2"},o.a.createElement(h.Cell,{col:7},o.a.createElement(h.Card,{shadow:0,style:{width:"100%",height:"600px",margin:"auto"}},o.a.createElement(h.CardText,{className:""},o.a.createElement(f.a,{delay:this.state.delay,style:{height:400,width:420},onError:this.handleError,onScan:this.handleScan,facingMode:"rear"}),o.a.createElement(h.DataTable,{shadow:0,rows:[{ispresent:this.state.isPresent,code:this.state.result,details:this.state.details}],className:"data_table"},o.a.createElement(h.TableHeader,{numeric:!0,name:"ispresent",tooltip:"QR Code value"},"Is Valid"),o.a.createElement(h.TableHeader,{numeric:!0,name:"code",tooltip:"QR Code value"},"Code"),o.a.createElement(h.TableHeader,{numeric:!0,name:"details",tooltip:"Details"},"Details"))))),o.a.createElement(h.Cell,{col:5},o.a.createElement(h.Card,{class:"hide_block",shadow:0,style:{width:"100%",height:"900px",margin:"auto",right:"250px"}},o.a.createElement(h.CardText,null,o.a.createElement(h.Card,{shadow:0,style:{width:"100%",height:"584px"}},o.a.createElement("img",{src:this.state.statusUrl,style:{height:"300px"},alt:"Status logo"}),o.a.createElement(h.Card,{border:!0,class:"mdl-card__supporting-text",style:{color:this.state.dialogColor}},this.state.displayMessage)))))),o.a.createElement(h.Card,{class:"hide_desktop_block",shadow:0,style:{width:"100%",height:"500px",margin:"auto"}},o.a.createElement(h.CardText,null,o.a.createElement(h.Card,{shadow:0,style:{width:"100%",height:"500px"}},o.a.createElement("img",{src:this.state.statusUrl,style:{height:"300px"},alt:"Status logo"}),o.a.createElement("div",{border:!0,class:"mdl-card__supporting-text",style:{color:this.state.dialogColor}},this.state.displayMessage)))),"Content"),o.a.createElement(h.Dialog,{open:this.state.openDialog},o.a.createElement(h.DialogTitle,null,"Result"),o.a.createElement(h.DialogContent,null,o.a.createElement("p",{style:{color:this.state.dialogColor}},this.state.displayMessage),o.a.createElement("img",{src:this.state.statusUrl,alt:"img not found",style:{width:"100px",height:"100px"}})),o.a.createElement(h.DialogActions,null,o.a.createElement(h.Button,{type:"button",onClick:this.handleCloseDialog},"OK"))))}}]),t}(n.Component)),v=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(g,null),o.a.createElement(E,null))}}]),t}(n.Component),y=(n.Component,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function w(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(115),a(117);var C=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(g,null),o.a.createElement("div",null,o.a.createElement("h1",null,"About team")))}}]),t}(n.Component),O=a(121),j=a(123),k=a(122);r.a.render(o.a.createElement(O.a,null,o.a.createElement(j.a,null,o.a.createElement(k.a,{exact:!0,path:"/",component:v}),o.a.createElement(k.a,{path:"/about",component:C}))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");y?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):w(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):w(t,e)})}}()},41:function(e,t,a){e.exports=a(119)},46:function(e,t,a){}},[[41,2,1]]]);
//# sourceMappingURL=main.d44028ea.chunk.js.map