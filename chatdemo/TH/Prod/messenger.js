// Startelecom Genesys Web Messaging Script Loader. Please do not block this resource.
let deploymentId = '71a84fe9-e65a-4c0a-94da-4c713ec09b34';
let isOpened = false;

(function () {
  function getScriptLocation() {
    const scripts = document.getElementsByTagName("script");
    let chatScriptLocation = "";

    for (let i = 0; i < scripts.length; i++) {
      if (scripts[i].id === "startelecom-chat-loader") {
        chatScriptLocation = scripts[i].src.substr(
          0,
          scripts[i].src.lastIndexOf("/")
        );
      }
    }

    if (chatScriptLocation === "") {
      throw "Could not detect a location of chat widget files!";
    }

    return chatScriptLocation;
  }
  
  function loadButton(){
	  var d = document.createElement("div");
	  d.id="startChatButton";
	  d.class="start-button";
	  d.role="button";
	  d.setAttribute("aria-expanded","false");
	  d.setAttribute("tabindex","0");
	  d.setAttribute("aria-label","Power outage chat");
	  d.setAttribute("data-tooltip","Power outage chat");
	  d.setAttribute("data-message","Power outage chat");
	  d.addEventListener("click",function(){Genesys('command', 'Messenger.open');})
	  d.addEventListener("keypress", function(e){
		  e.preventDefault();
		  if (e.key=="Enter" || e.key==" "){
			  d.click();
		  }
	  });
	  
	  var s = document.createElement("span");
	  s.class="cx-message-text";
	  s.setAttribute("data-message","Power outage chat")
	  
	  d.appendChild(s);
	  document.body.appendChild(d);
  }
  
  function loadStyle(){
	  var t = document.createElement("link");
		t.rel = "stylesheet";
		t.type = "text/css";
		t.href = "style.css";
		t.media = "all";
		document.head.appendChild(t)	  
  }

  function loadWidgedScript(g, e, n, es, ys) {
    g["_genesysJs"] = e;
    g[e] =
      g[e] ||
      function () {
        (g[e].q = g[e].q || []).push(arguments);
      };
    g[e].t = 1 * new Date();
    g[e].c = es;
    ys = document.createElement("script");
    ys.async = 1;
    ys.src = n;
    ys.charset = "utf-8";
    document.head.appendChild(ys);
  }

	function clearHistoryAndClose(){
		const deleteAndClose = localStorage.getItem("deleteHistory");
		if (JSON.parse(deleteAndClose) === true ){
			Genesys("command", "MessagingService.clearConversation", 
					{}, 
					function() {
					/*fulfilled callback*/
					},
					function() {
					/*rejected callback*/
			});
		}
	};

	function openMessenger(){
		Genesys("command", "Messenger.open");
	}

  window.addEventListener("load", function () {
    // const scriptBaseUrl = getScriptLocation();
	loadStyle();
    loadWidgedScript(
      window,
      "Genesys",
      "https://apps.cac1.pure.cloud/genesys-bootstrap/genesys.min.js",
      {
        environment: "prod-cac1",
        deploymentId: deploymentId,
		//debug:true
      }
    );
	loadButton();
	
	Genesys("subscribe", "Messenger.ready", function(){
		const element = document.getElementById('startChatButton');
		element.style.display = "block";
		//setTimeout(openMessenger, 5000);
	});

	Genesys("subscribe", "MessagingService.conversationDisconnected", function({data}){
		localStorage.setItem("deleteHistory","true");
		setTimeout( clearHistoryAndClose, 60000);						
	});
      
	Genesys("subscribe", "Messenger.opened", function(){
		const element = document.getElementById('startChatButton');
		element.style.display = "none";
	});
	
	Genesys("subscribe", "Messenger.closed", function(){
		const element = document.getElementById('startChatButton');
		element.style.display = "block";
	});

	Genesys("subscribe", "Conversations.started", function(){
		localStorage.setItem("deleteHistory","false");
		const messengerIframe = document.getElementById("genesys-mxg-container-frame");
		console.log(messengerIframe);
		
	});

	document.addEventListener("keydown", function(e){
		//e.preventDefault();
		  if (e.key=="Escape"){
			Genesys("command", "Messenger.Close");
		  }
		
	});
	  
  });

})();
