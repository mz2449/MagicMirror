/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
									// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
									// or add a specific IPv4 of 192.168.1.5 :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
									// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",   // this variable is provided as a consistent location
			   // it is currently only used by 3rd party modules. no MagicMirror code uses this value
			   // as we have no usage, we  have no constraints on what this field holds
			   // see https://en.wikipedia.org/wiki/Locale_(computer_software) for the possibilities

	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 12,
	units: "imperial",

	modules: [
		{
			module: "alert",
		},
		{
      		module: "MMM-OneCallWeather",
      		position: "middle_center",
      		header: "Weather: Brooklyn, NY",
      		config: {
        		latitude: "40.657884",  // Longitude from https://www.latlong.net/
        		longitude: "-73.952641", // Longitude from https://www.latlong.net/
        		apikey: "a222ad935440c2e8cec301bd782b2d4e", // openweathermap.org API key
				iconset: "9a",          // Icon set to use.
        		iconsetFormat: "svg",   // File format of the icons.
				units: "imperial",
				windUnits: "mph",
				forecastLayout: "columns",
				arrangement: "horizontal",
				updateInterval: 150000
      		}
    	},
		{
  			module: "calendar",
  			config: {
   				broadcastPastEvents: true, // <= IMPORTANT to see past events
    			calendars: [
      				{
        				url: "https://calendars.icloud.com/holidays/us_en-us.ics/",
        				name: "Holidays", // <-- specify calendar name
        				color: "mediumpurple", // <-- if you don't want to get color, just remove this line.
        				broadcastPastEvents: true, // <-- need to broadcast past events
        				maximalNumberOfDays: 30, // <-- how old events would be broadcasted
       					maximumEntries: 100, // <-- assign enough number to prevent truncating new events by old events.
        				symbol: [], // <-- when you want to display simbol. If you don't want, just set as `symbol:[],`
      				},
					{
        				url: "webcal://p155-caldav.icloud.com/published/2/NTMwODc1MTkzNTMwODc1MY1eD9srpoCj-7CRtvk5RPpf3Glcl0VAxhsFBlSpZVQ3",
        				name: "Michael1", // <-- specify calendar name
        				color: "navy", // <-- if you don't want to get color, just remove this line.
        				broadcastPastEvents: true, // <-- need to broadcast past events
        				maximalNumberOfDays: 30, // <-- how old events would be broadcasted
       					maximumEntries: 100, // <-- assign enough number to prevent truncating new events by old events.
        				symbol: [], // <-- when you want to display simbol. If you don't want, just set as `symbol:[],`
      				},
					{
        				url: "webcal://p155-caldav.icloud.com/published/2/NTMwODc1MTkzNTMwODc1MY1eD9srpoCj-7CRtvk5RPrm6AiWHL8rzmSc88S_-A4KKsE8kZP1O-sGhB2lqVvqo_yPd083v7IU4fIV9lZfYKw",
        				name: "Michael2", // <-- specify calendar name
        				color: "orange", // <-- if you don't want to get color, just remove this line.
        				broadcastPastEvents: true, // <-- need to broadcast past events
        				maximalNumberOfDays: 30, // <-- how old events would be broadcasted
       					maximumEntries: 100, // <-- assign enough number to prevent truncating new events by old events.
        				symbol: [], // <-- when you want to display simbol. If you don't want, just set as `symbol:[],`
      				},
					{
        				url: "webcal://p155-caldav.icloud.com/published/2/NTMwODc1MTkzNTMwODc1MY1eD9srpoCj-7CRtvk5RPq9KoZNw_iOnYOrTp4kS8pzGdZn2Q02rY0JXstfIyRfuy-TryhAaBt4lCtTm9g9W-E",
        				name: "Michael3", // <-- specify calendar name
        				color: "lime", // <-- if you don't want to get color, just remove this line.
        				broadcastPastEvents: true, // <-- need to broadcast past events
        				maximalNumberOfDays: 30, // <-- how old events would be broadcasted
       					maximumEntries: 100, // <-- assign enough number to prevent truncating new events by old events.
        				symbol: [], // <-- when you want to display simbol. If you don't want, just set as `symbol:[],`
      				},
					{
        				url: "webcal://p155-caldav.icloud.com/published/2/NTMwODc1MTkzNTMwODc1MY1eD9srpoCj-7CRtvk5RPoHNodI1O_Zpa4omEDktCZqXj-C6-sJanVTGj-zxLR5dZUDoSROJZRmcfQRubDIyWU",
        				name: "Michael4", // <-- specify calendar name
        				color: "fuchsia", // <-- if you don't want to get color, just remove this line.
        				broadcastPastEvents: true, // <-- need to broadcast past events
        				maximalNumberOfDays: 30, // <-- how old events would be broadcasted
       					maximumEntries: 100, // <-- assign enough number to prevent truncating new events by old events.
        				symbol: [], // <-- when you want to display simbol. If you don't want, just set as `symbol:[],`
      				},
					{
        				url: "webcal://p155-caldav.icloud.com/published/2/NTMwODc1MTkzNTMwODc1MY1eD9srpoCj-7CRtvk5RPpCXJ49EZOox6PeVtSKNHXEL1SuMGBBhYrKUzaEAojjRBtiDN-1bOgq2SDiQowpJss",
        				name: "Michael5", // <-- specify calendar name
        				color: "skyblue", // <-- if you don't want to get color, just remove this line.
        				broadcastPastEvents: true, // <-- need to broadcast past events
        				maximalNumberOfDays: 30, // <-- how old events would be broadcasted
       					maximumEntries: 100, // <-- assign enough number to prevent truncating new events by old events.
        				symbol: [], // <-- when you want to display simbol. If you don't want, just set as `symbol:[],`
      				},
					{
        				url: "webcal://p155-caldav.icloud.com/published/2/NTMwODc1MTkzNTMwODc1MY1eD9srpoCj-7CRtvk5RPrTR5ww-Fsz8U9RaJ7jlVaT",
        				name: "Michael6", // <-- specify calendar name
        				color: "saddlebrown", // <-- if you don't want to get color, just remove this line.
        				broadcastPastEvents: true, // <-- need to broadcast past events
        				maximalNumberOfDays: 30, // <-- how old events would be broadcasted
       					maximumEntries: 100, // <-- assign enough number to prevent truncating new events by old events.
        				symbol: [], // <-- when you want to display simbol. If you don't want, just set as `symbol:[],`
      				},
					{
        				url: "https://calendars.partiful.com/getCalendar?id=7d34b15f-6223-40c5-b924-e5d97b655933",
        				name: "Michael7", // <-- specify calendar name
        				color: "gold", // <-- if you don't want to get color, just remove this line.
        				broadcastPastEvents: true, // <-- need to broadcast past events
        				maximalNumberOfDays: 30, // <-- how old events would be broadcasted
       					maximumEntries: 100, // <-- assign enough number to prevent truncating new events by old events.
        				symbol: [], // <-- when you want to display simbol. If you don't want, just set as `symbol:[],`
      				},
					{
        				url: "https://lcms.downstate.edu/noshib/caldav/index.php/sunydmc/calendars/202405497/default?export",
        				name: "Michael8", // <-- specify calendar name
        				color: "fuchsia", // <-- if you don't want to get color, just remove this line.
        				broadcastPastEvents: true, // <-- need to broadcast past events
        				maximalNumberOfDays: 30, // <-- how old events would be broadcasted
       					maximumEntries: 100, // <-- assign enough number to prevent truncating new events by old events.
        				symbol: [], // <-- when you want to display simbol. If you don't want, just set as `symbol:[],`
      				},
					{
        				url: "webcal://p115-caldav.icloud.com/published/2/NTkzNDY1NTQzNTkzNDY1NWhz6rD_yuIulfHnWpmDSeTK6Qediog1ubdS986POJ4I",
        				name: "Grace1", // <-- specify calendar name
        				color: "purple", // <-- if you don't want to get color, just remove this line.
        				broadcastPastEvents: true, // <-- need to broadcast past events
        				maximalNumberOfDays: 30, // <-- how old events would be broadcasted
       					maximumEntries: 100, // <-- assign enough number to prevent truncating new events by old events.
        				symbol: [], // <-- when you want to display simbol. If you don't want, just set as `symbol:[],`
      				},
					{
        				url: "webcal://p115-caldav.icloud.com/published/2/NTkzNDY1NTQzNTkzNDY1NWhz6rD_yuIulfHnWpmDSeTkPJT6il1HIQlIaIAt7qiv",
        				name: "Grace2", // <-- specify calendar name
        				color: "goldenrod", // <-- if you don't want to get color, just remove this line.
        				broadcastPastEvents: true, // <-- need to broadcast past events
        				maximalNumberOfDays: 30, // <-- how old events would be broadcasted
       					maximumEntries: 100, // <-- assign enough number to prevent truncating new events by old events.
        				symbol: [], // <-- when you want to display simbol. If you don't want, just set as `symbol:[],`
      				},
					{
        				url: "webcal://p115-caldav.icloud.com/published/2/NTkzNDY1NTQzNTkzNDY1NWhz6rD_yuIulfHnWpmDSeRDda8XBzNjD5RI2jtDPerv5oBhNUKgEiBjhRn9lR1ZPRkWD4Y1r1DfaioWXB8ysuE",
        				name: "Grace3", // <-- specify calendar name
        				color: "dodgerblue", // <-- if you don't want to get color, just remove this line.
        				broadcastPastEvents: true, // <-- need to broadcast past events
        				maximalNumberOfDays: 30, // <-- how old events would be broadcasted
       					maximumEntries: 100, // <-- assign enough number to prevent truncating new events by old events.
        				symbol: [], // <-- when you want to display simbol. If you don't want, just set as `symbol:[],`
      				},
				]
			}
		},
		{
  			module: "MMM-CalendarExt3Agenda",
  			position: "bottom_left",
  			header: "Michael's Calendar",
  			config: {
    			instanceId: "michaelCalendar",
    			locale: 'en-US',
    			firstDayOfWeek: 1,
    			startDayIndex: 0,
    			endDayIndex: 2,
    			calendarSet: ["Michael1", "Michael2", "Michael3", "Michael4", "Michael5", "Michael6", "Michael7"], // <-- specify calendar name to display, if you want to display all calendar, just set as `calendarSet:[]`
  			}
		},
		{
  			module: "MMM-CalendarExt3Agenda",
  			position: "bottom_right",
  			header: "Grace's Calendar",
  			config: {
    			instanceId: "graceCalendar",
    			locale: 'en-US',
    			firstDayOfWeek: 1,
    			startDayIndex: 0,
    			endDayIndex: 2,
    			calendarSet: ["Grace1", "Grace2", "Grace3"], // <-- specify calendar name to display, if you want to display all calendar, just set as `calendarSet:[]`
  			}
		},
		{
    		module: 'MMM-nyc-transit',
    		position: "bottom_bar",
    		header: "Winthrop Street Station",
    		config: {
      			apiKey: '',
      			displayType: 'list',
      			mtaType: 'train',
				updateInterval: 300000,
      			stations: [
        			{
          				stationId: 355,
          				walkingTime: 0,
          				dir: {
              				upTown: true,
              				downTown: true
        	  			}
        			},
				]
    		}
  		},
		{
			module: "MMM-PhotoStack",
  			position: "upper_third",
  			config: {
    			imagePaths: ["/home/michael/Pictures/MagicMirrorPictures"],
    			speed: 10000,
    			stackSize: 3,
				photoWidth: 600,
				flyInDuration: 1500,
				flyOutDuration: 1500,
				backgroundColor: "Transparent"
			}
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
			config: {
				displayType: "analog",
				analogFace: "simple",
				analogPlacement: "left",
				clockBold: true,
				timeFormat: 12,
				timezone: "America/New_York",
				displaySeconds: false,
				showPeriod: true,
				showDate: false
			}
		},
		{
			module: "clock",
			position: "top_right",
			config: {
				displayType: "digital",
				analogFace: "simple",
				analogPlacement: "left",
				clockBold: true,
				timeFormat: 12,
				timezone: "America/New_York",
				displaySeconds: false,
				showPeriod: true,
				showMoonTimes: "both"
			}
		},
		{
      		module: "compliments",
      		position: "top_bar", // This can be any of the regions.
      		// Best results in one of the middle regions like: lower_third
      		config: {
				remoteFile: "https://raw.githubusercontent.com/mz2449/MagicMirror/refs/heads/main/compliments.json"
    		},
		},
		{
     		module: "weather",
      		config: {
        		type: "current"
      		},
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
