window._genesys = {
  widgets: {
    main: {
      themes: {
        toronto_hydro: "th-theme",
      },
      theme: "toronto_hydro",
      preload: ["webchat"],
	  i18n: {
        en: {
          webchat: {
            AgentConnected: "<%Agent%> connected",
            AgentDisconnected: "<%Agent%> disconnected",
			      ChatEnded: "Chat ended",
            ChatFormSubmit: "Start chat",
            ChatStarted: "Chat started",
            ChatTitle: "Power outage chat",
			      AriaChatFormSubmit: "Start chat",
            InviteBody:
              "Would you like to speak to a live agent regarding a power outage?",
            InviteReject: "Close",
            AriaInviteReject: "Close",
          },
        },
      },
    },
    webchat: {
      autoInvite: {
        enabled: false,
        timeToInviteSeconds: 10,
        inviteTimeoutSeconds: 30,
      },
      emojis: true,
      transport: {
        type: "purecloud-v2-sockets",
        dataURL: "https://api.cac1.pure.cloud",
        deploymentKey: "d2d3abb3-21be-4bb4-bbe0-9ccf23152ec0",
        orgGuid: "e286544e-a092-4b63-8d98-bf089c058777",
        interactionData: {
          routing: {
            targetType: "QUEUE",
            targetAddress: "Demo_CHAT With Callbac",
            priority: 2,
          },
        },
      },
      chatButton: {
        enabled: true,
        template:
          "<div id='startChatButton' class='start-button' tabindex='0' data-tooltip='Power outage chat' data-message='Power outage chat' aria-label='Power outage chat'><span class='i18n cx-chat-button-label' data-message='Power outage chat'></div>",
        effect: "fade",
        openDelay: 1000,
        effectDuration: 300,
        hideDuringInvite: true,
      },
      disclaimer: {
        enabled: true,
        template:
          "<p id='disclaimerMessage'><strong>If you need to report a safety emergency, such as downed powerlines, call 416-542-8000 (press 1) or 911 immediately.</strong></p><p>This webchat is intended for power outage inquiries only. For all other inquiries, <a id='disclaimerLink' href='https://www.torontohydro.com/contact-us'>contact us here</a>.</p><p>Please be advised that this chat will be saved for quality assurance purposes.</p>",
        fullScreen: true,
      },
      openHours: {
        apiUrl: "https://amazonws.startelecom.ca/genesys/CheckSchedule",
        orgName: "utilassistCa",
        region: "ca",
        scheduleGroupId: "94c33f63-f00a-4913-b89f-dfe577c76a1a",
        emergencyGroupId: "b917cd11-3f4c-4f86-b552-8b8fa0204e7a",
        messageTemplate:
          "<p id='openHoursMessage'>Live power outage chat is available Monday to Friday, 7:00 a.m. to 7:00 p.m.</p><p>To report an outage, <a href='https://www.torontohydro.com/contact-us'>click here</a>. For outage updates, visit our <a href='https://www.torontohydro.com/outage-map'>outage map</a>.<br>For safety emergencies, such as downed powerlines, call 416-542-8000 (press 1) immediately.</p>",
      },
    },
  },
};
