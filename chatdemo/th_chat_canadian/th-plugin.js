window._genesys||(window._genesys={}),window._genesys.widgets||(window._genesys.widgets={}),window._genesys.widgets.extensions||(window._genesys.widgets.extensions={}),window._genesys.widgets.extensions.torontoHydro=function(e,t,a){var n=t.registerPlugin("torontoHydro"),o="form",r=!1,s=!1;function i(){document.addEventListener("keydown",c)}function c(e){if("Tab"===e.key||9===e.keyCode){var t='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',a=[],n=document.getElementsByClassName("cx-body")[0],r=n&&"none"!==window.getComputedStyle(n).display;if("form"===o&&r){var s=document.getElementsByClassName("cx-form-wrapper");if(s)for(var i=0;i<s.length;i++){var c=s[i],l=Array.prototype.slice.call(c.querySelectorAll(t));a=a.concat(l)}}if("notification"===o&&r){var d=document.getElementsByClassName("cx-container cx-overlay cx-dynamic");if(d)for(var m=0;m<d.length;m++){var u=d[m];if("none"!==window.getComputedStyle(u).display){var g=Array.prototype.slice.call(u.querySelectorAll(t));a=a.concat(g)}}}if("chat"===o&&r){var w=document.getElementsByClassName("cx-transcript");if(w)for(var y=0;y<w.length;y++){var p=w[y],b=Array.prototype.slice.call(p.querySelectorAll(t));a=a.concat(b)}if(w=document.getElementsByClassName("cx-input-container"))for(var f=0;f<w.length;f++){var h=w[f],v=Array.prototype.slice.call(h.querySelectorAll(t));a=a.concat(v)}}var _=document.getElementsByClassName("cx-alert cx-chat-end");if(_)for(var x=0;x<_.length;x++){var C=_[x];if("none"!==window.getComputedStyle(C).display){var A=Array.prototype.slice.call(C.querySelectorAll(t));a=a.concat(A)}}var H=document.getElementsByClassName("cx-alert cx-chat-close");if(H)for(var N=0;N<H.length;N++){var E=H[N];if("none"!==window.getComputedStyle(E).display){var B=Array.prototype.slice.call(E.querySelectorAll(t));a=a.concat(B)}}var S=document.getElementsByClassName("cx-alert cx-general cx-normal-alert");if(S)for(var O=0;O<S.length;O++){var q=S[O];if("none"!==window.getComputedStyle(q).display){var I=Array.prototype.slice.call(q.querySelectorAll(t));a=a.concat(I.filter((function(e){return e.parentElement&&"none"!==window.getComputedStyle(e.parentElement).display})))}}var T=document.getElementsByClassName("cx-button-group cx-buttons-window-control");if(T)for(var W=0;W<T.length;W++){var k=T[W],L=Array.prototype.slice.call(k.querySelectorAll(t));a=a.concat(L)}if(0!==(a=a.filter((function(e){return(void 0===e.tabIndex||e.tabIndex>-1)&&"none"!==window.getComputedStyle(e).display&&!e.hidden}))).length){var M=a[0],D=a[a.length-1];e.shiftKey?document.activeElement===M&&(D.focus(),e.preventDefault()):document.activeElement===D&&(M.focus(),e.preventDefault())}}}function l(e){var t=[],a=[];if(e)for(var n=0;n<e.length;n++){var o=e[n],r=Array.prototype.slice.call(o.querySelectorAll("label, button, [href], table")),s=Array.prototype.slice.call(o.querySelectorAll("input, select, textarea"));t=t.concat(r),a=a.concat(s)}for(var i=0;i<t.length;i++){var c=t[i];y(c),g(c)}for(var l=0;l<a.length;l++){var d=a[l];y(d),g(d),w(d)}var m=document.getElementsByClassName("cx-powered-by");m&&m.length>0&&g(m[0])}function d(e){e.removeAttribute("aria-hidden")}function m(e){e.removeAttribute("hidden")}function u(e){e.removeAttribute("tabindex")}function g(e){e.setAttribute("aria-hidden","true")}function w(e){e.setAttribute("hidden",null)}function y(e){e.setAttribute("tabindex",-1)}function p(e,t,a,n,o,r,s){return!!(a&&a.length>0&&a[0])&&(a[0].checked?(a[0].parentNode,(i=document.getElementById("cx_webchat_form_disclaimer_desc_wrapper"))&&i.parentNode&&i.parentNode.removeChild(i),a[0].hasAttribute("aria-describedby")&&a[0].removeAttribute("aria-describedby"),!0):("cx_webchat_form_disclaimer_desc"!==a[0].id&&"cx_webchat_form_disclaimer_desc_wrapper"!==a[0].id&&function(e){if(e&&e.childNodes&&!document.getElementById("cx_webchat_form_disclaimer_desc_wrapper")){var t=document.createElement("div");t.id="cx_webchat_form_disclaimer_desc_wrapper",t.classList.add("error-desc");var a=document.createElement("span");a.id="cx_webchat_form_disclaimer_desc",a.innerHTML="Please select the checkbox to proceed.",t.appendChild(a),e.appendChild(t)}}(a[0].parentNode),a[0].hasAttribute("aria-describedby")||a[0].setAttribute("aria-describedby","cx_webchat_form_disclaimer_desc"),!1));var i}n.registerCommand("version",(function(e){return console.log("Version: 1.2.0"),e.deferred.resolve("1.2.0")})),n.registerCommand("closeDisclaimer",(function(e){var t=document.getElementsByClassName("cx-form");t&&function(e){var t=[],a=[];if(e)for(var n=0;n<e.length;n++){var o=e[n],r=Array.prototype.slice.call(o.querySelectorAll("label, button, [href], table")),s=Array.prototype.slice.call(o.querySelectorAll("input, select, textarea"));t=t.concat(r),a=a.concat(s)}for(var i=0;i<t.length;i++){var c=t[i];u(c),d(c)}for(var l=0;l<a.length;l++){var g=a[l];u(g),d(g),m(g)}var w=document.getElementsByClassName("cx-powered-by");w&&w.length>0&&d(w[0])}(t),n.command("WebChat.hideOverlay"),o=r?"chat":"form"})),n.registerCommand("closeOpenHoursMessage",(function(e){n.command("WebChat.close"),n.command("WebChat.close").done((function(e){n.command("WebChat.hideOverlay"),o=r?"chat":"form"})).fail((function(e){}))})),n.subscribe("WebChat.closed",(function(e){r=!1,document.removeEventListener("keydown",c)})),n.subscribe("WebChat.opened",(function(e){e.data&&!1===e.data.started?(function(){if(window._genesys.widgets.webchat&&window._genesys.widgets.webchat.disclaimer&&window._genesys.widgets.webchat.disclaimer.enabled){var e='<div class="disclaimer" role="dialog" id="chatDisclaimer" aria-labelledby="disclaimerLabel" aria-describedby="disclaimerMessage" aria-modal="true"><label id="disclaimerLabel" style="display:none;">Disclaimer message</label><div class="disclaimer-content">'+window._genesys.widgets.webchat.disclaimer.template+"</div><div class='disclaimer-footer'><button id='disclaimerBeginButton' class='cx-submit cx-btn cx-btn-primary i18n' data-message='ProceedToChat' aria-label='Begin' onclick=\"CXBus.command('torontoHydro.closeDisclaimer')\">Begin</button></div></div>";n.command("WebChat.showOverlay",{html:e,hideFooter:window._genesys.widgets.webchat.disclaimer.fullScreen}).done((function(e){var t=document.getElementsByClassName("cx-form");t&&l(t);var a=document.getElementsByClassName("disclaimer");if(a&&!(a.length<1)){var n=a[0];n&&(n.scrollTop=0)}})).fail((function(e){console.error(e)}))}}(),o="notification",i(),s||function(){if(window._genesys.widgets.webchat&&window._genesys.widgets.webchat.openHours&&window._genesys.widgets.webchat.openHours.messageTemplate){var e='<div class="disclaimer" role="dialog" id="openHoursMessageContent" aria-labelledby="openHoursLabel" aria-describedby="openHoursMessage" aria-modal="true"><label id="openHoursLabel" style="display:none;">Open hours</label><div class="open-hours-content">'+window._genesys.widgets.webchat.openHours.messageTemplate+"</div><div class='disclaimer-footer'><button id='closeOpenHoursButton' class='cx-submit cx-btn cx-btn-primary i18n' data-message='CloseMessage' aria-label='Close' onclick=\"CXBus.command('torontoHydro.closeOpenHoursMessage')\">Close</button></div></div>";n.command("WebChat.showOverlay",{html:e,hideFooter:window._genesys.widgets.webchat.disclaimer.fullScreen}).done((function(e){var t=document.getElementsByClassName("cx-form");t&&l(t);var a=document.getElementsByClassName("openHoursMessage");if(a&&!(a.length<1)){var n=a[0];n&&(n.scrollTop=0)}})).fail((function(e){console.error(e)}))}}()):(o="chat",i(),s||t.command("torontoHydro.closeOpenHoursMessage"))})),n.before("WebChat.open",(function(e){if(s=function(){if(!(window._genesys.widgets.webchat&&window._genesys.widgets.webchat.openHours&&window._genesys.widgets.webchat.openHours.apiUrl&&window._genesys.widgets.webchat.openHours.orgName&&window._genesys.widgets.webchat.openHours.region&&window._genesys.widgets.webchat.openHours.scheduleGroupId&&window._genesys.widgets.webchat.openHours.emergencyGroupId))return!1;try{var e=new XMLHttpRequest,t={orgName:window._genesys.widgets.webchat.openHours.orgName,region:window._genesys.widgets.webchat.openHours.region,scheduleGroupId:window._genesys.widgets.webchat.openHours.scheduleGroupId,emergencyGroupId:window._genesys.widgets.webchat.openHours.emergencyGroupId},a=JSON.stringify(t);if(e.open("POST",window._genesys.widgets.webchat.openHours.apiUrl,!1),e.setRequestHeader("Content-Type","application/json;charset=UTF-8"),e.send(a),200===e.status){var n=JSON.parse(e.responseText);return!(!n||!n.open)&&n.open}return!1}catch(e){return!1}}(),!e.restoring){var t={form:{autoSubmit:!1},formJSON:{wrapper:"<table></table>",inputs:[{id:"cx_webchat_form_firstname",name:"firstName",maxlength:"100",label:"Name (optional):",type:"text"},{id:"cx_webchat_form_phone_number",name:"phone_number",maxlength:"100",label:"Phone number (optional):",type:"text"},{id:"cx_webchat_form_disclaimer",name:"disclaimer",label:"I understand that webchat agents are only able to provide information relating to power outages.",type:"checkbox",validate:p}]}};Object.keys(t).forEach((function(a){e[a]=t[a]}))}return e})),n.subscribe("WebChat.messageAdded",(function(e){!function(){var e=document.getElementsByClassName("cx-avatar bot");if(e&&!(e.length<1))for(var t=0;t<e.length;t++)e[t].parentNode.removeChild(e[t])}(),function(e){e.data&&e.data.message&&e.data.message.text&&e.data.message.type&&"External"===e.data.message.type&&e.data.html&&e.data.html.length>0&&-1!==e.data.message.text.indexOf(" disconnected")&&e.data.html[0].classList.add("th-message-strong")}(e)})),n.subscribe("WebChat.started",(function(e){r=!0,o="chat"})),n.republish("ready"),n.ready()};