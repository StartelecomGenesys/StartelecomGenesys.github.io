window._genesys = {
  widgets: {
	main: {
		preload: ['webchat'],
	},
    webchat: {
	  
	  form: {
		wrapper: "<table></table>",
        inputs:[
		  {
			  id:'name',
			  name:'Name',
			  maxlenght: '100',
			  placeholder:'Required',
			  label:'name'
		  },
		  {
			  id:'email',
			  name:'Email',
			  maxlenght:'255',
			  placeholder:'Optional',
			  label:'Email'
		  },
		  {
			  id:'serial_number',
			  name:'serialNumber',
			  maxlenght:'255',
			  placeholder:'Optional',
			  label:'Serial Number'
		  }
        ]		  
	  },
	  chatButton: {
        enabled: true,
		template: '<div class="cx-widget cx-webchat-chat-button cx-side-button" role="button" tabindex="0" data-message="ChatButton" data-gcb-service-node="true"><span class="cx-icon" data-icon="chat"> </span><span class="i18n cx-chat-button-label" data-message="ChatButton"></span></div>',
		effect: 'fade',
		openDelay: 1000,
		effectDuration: 300,
		hideDuringInvite: true
      },
      transport: {
        type: 'purecloud-v2-sockets',
        dataURL: 'https://api.usw2.pure.cloud',     // replace with API URL matching your region
        deploymentKey : 'd1a54275-bbba-4d54-a97e-38c00a020a27',  // replace with your Deployment ID
        orgGuid : '5fb49a3b-6364-439d-9dcc-ad77b378d793',              // replace with your Organization ID
        interactionData: {
          routing: {
            targetType: 'QUEUE',
            targetAddress: 'Tech Support Chat',
            priority: 1
          }
        }
      },
      userData: {
        // These fields should be provided via advanced configuration
        // firstName: 'Praenomen',
        // lastName: 'Gens',
        // email: 'praenomen.gens@calidumlitterae.com',
        // subject: 'Chat subject'
      }
    }
  }
};