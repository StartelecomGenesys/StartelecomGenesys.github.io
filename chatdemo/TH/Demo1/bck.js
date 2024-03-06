//var buttonHtml='<div id="startChatButton" class="start-button" tabindex="0" data-tooltip="Power outage chat" data-message="Power outage chat" aria-label="Power outage chat"><span class="i18n cx-chat-button-label" data-message="Power outage chat"></div>'

/*(function (g, e, n, es, ys) {
g['_genesysJs'] = e;
g[e] = g[e] || function () {
(g[e].q = g[e].q || []).push(arguments)
};
g[e].t = 1 * new Date();
g[e].c = es;
ys = document.createElement('script'); ys.async = 1; ys.src = n; ys.charset = 'utf-8'; document.head.appendChild(ys);
})(window, 'Genesys', 'https://apps.mypurecloud.com/genesys-bootstrap/genesys.min.js', {
environment: 'prod',
deploymentId: '59c974ca-4724-494e-9eee-ffce6f1c7e9f'
});*/

function clearHistoryAndClose(){
	Genesys("command", "MessagingService.clearConversation", 
			{}, 
			function() {
			/*fulfilled callback*/
			},
			function() {
			/*rejected callback*/
			});
};

function openMessenger(){
	Genesys("command", "Messenger.open");
}

function toggleMessenger(){
	
}



Genesys("subscribe", "Messenger.ready", function(){
setTimeout(openMessenger, 5000);
});

Genesys("subscribe", "MessagingService.conversationDisconnected", function({data}){
setTimeout( clearHistoryAndClose, 2000);						
});

