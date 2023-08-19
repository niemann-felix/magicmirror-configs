/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
  address: "192.168.1.5", // Address to listen on, can be:
  // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
  // - another specific IPv4/6 to listen on a specific interface
  // - "0.0.0.0", "::" to listen on any interface
  // Default, when address config is left out or empty, is "localhost"
  electronOptions: {
    webPreferences: {
      webviewTag: true,
    },
  },
  port: 8080,
  basePath: "/", // The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
  // you must set the sub path here. basePath must end with a /
  ipWhitelist: [], // Set [] to allow all IP addresses
  // or add a specific IPv4 of 192.168.1.5 :
  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
  // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

  useHttps: false, // Support HTTPS or not, default "false" will use HTTP
  httpsPrivateKey: "", // HTTPS private key path, only require when useHttps is true
  httpsCertificate: "", // HTTPS Certificate path, only require when useHttps is true

  language: "en",
  locale: "en-US",
  logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
  timeFormat: 24,
  units: "metric",
  // serverOnly:  true/false/"local" ,
  // local for armv6l processors, default
  //   starts serveronly and then starts chrome browser
  // false, default for all NON-armv6l devices
  // true, force serveronly mode, because you want to.. no UI on this device

  modules: [
    {
      module: "updatenotification",
      position: "top_bar",
    },
    {
      module: "clock",
      position: "top_left",
      config: {
        // The config property is optional.
        // See 'Configuration options' for more information.
        showWeek: true,
        showSunTimes: true,
        dateFormat: "dddd, DD MMMM [(]MM[)] YYYY",
        lat: "51.099998",
        lon: "6.15",
        displayType: "digital",
      },
    },
    {
      module: "weather",
      position: "top_left",
      config: {
        weatherProvider: "openweathermap",
        type: "current",
        location: "Wassenberg",
        locationID: "2813786", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
        apiKey: "", //openweathermap.org API key HERE ~scr~
        degreeLabel: true,
        showWindDirectionAsArrow: false,
        showHumidity: true,
        showFeelsLike: false,
        useKMPHwind: true,
        useLocationAsHeader: false,
        showSun: false,
      },
    },
    {
      module: "weather",
      position: "top_left",
      header: "Weather Forecast",
      config: {
        weatherProvider: "openweathermap",
        type: "forecast",
        location: "Wassenberg",
        locationID: "2813786", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
        apiKey: "", //openweathermap.org API key HERE ~scr~

        showRainAmount: true,
        colored: "true",
        scale: true,
      },
    },
    {
      module: "calendar",
      header: "Calendar",
      position: "top_left",
      config: {
        calendars: [
          {
            symbol: "menorah",
            url: "", // Feiertage ICS LINK HERE ~scr~
          },
          {
            symbol: "moon",
            url: "", // Mondphasen ICS LINK HERE ~scr~
          },
          {
            symbol: "calendar-day",
            url: "", // Personal Calender ICS LINK HERE ~scr~
          },
        ],
      },
    },
    {
      module: "MMM-network-signal",
      position: "top_right",
      config: {
        // Configuration of the module goes here
        animationSpeed: "2000",
        updateInterval: "20000",
        initialLoadDelay: "3000",
        showMessage: false,
        scale: "0.15",
      },
    },
    {
      module: "MMM-BurnIn",
      position: "bottom_bar", // whatever, doesn't render anything
      config: {
        updateInterval: 15, // in Minutes
        invertDuration: 10, // in Seconds
      },
    },
    {
      module: 'MMM-SmartWebDisplay',
      position: 'bottom_right',       // This can be any of the regions.
      config: {
        // See 'Configuration options' for more information.
        logDebug: false, //set to true to get detailed debug logs. To see them : "Ctrl+Shift+i"
        height: "45px", //hauteur du cadre en pixel ou %
        width: "350px", //largeur
        updateInterval: 0, //in min. Set it to 0 for no refresh (for videos)
        NextURLInterval: 5, //in min, set it to 0 not to have automatic URL change. If only 1 URL given, it will be updat>
        displayLastUpdate: false, //to display the last update of the URL
        displayLastUpdateFormat: 'ddd - HH:mm:ss', //format of the date and time to display
        url: ["https://buchung.hsz.rwth-aachen.de/angebote/aktueller_zeitraum/_Auslastung.html#bs_kb895CF94CEE58"], //source of the URL to be displayed
        scrolling: "no", // allow scrolling or not. html 4 only
        shutoffDelay: 10000 //delay in miliseconds to video shut-off while using together with MMM-PIR-Sens>
      }
    },

    {
      module: 'MMM-SmartWebDisplay',
      position: 'bottom_center',	// This can be any of the regions.
      config: {
        // See 'Configuration options' for more information.
        logDebug: false, //set to true to get detailed debug logs. To see them : "Ctrl+Shift+i"
        height: "400px", //hauteur du cadre en pixel ou %
        width: "100%", //largeur
        updateInterval: 0, //in min. Set it to 0 for no refresh (for videos)
        NextURLInterval: 0.5, //in min, set it to 0 not to have automatic URL change. If only 1 URL given, it will be updated
        displayLastUpdate: false, //to display the last update of the URL
        displayLastUpdateFormat: 'ddd - HH:mm:ss', //format of the date and time to display
        url: ["http://192.168.1.2/inventory?#maintable", "http://192.168.1.2/products#maintable"], //source of the URL to be displayed
        scrolling: "no", // allow scrolling or not. html 4 only
        shutoffDelay: 10000 //delay in miliseconds to video shut-off while using together with MMM-PIR-Sensor 
      }
    },
    {
      module: 'MMM-Todoist',
      position: 'bottom_right',	// This can be any of the regions. Best results in left or right regions.
      header: 'Todoist', // This is optional
      config: { // See 'Configuration options' for more information.
        hideWhenEmpty: false,
        accessToken: '', // TODOIST ACCESS TOKEN HERE ~scr~
        maximumEntries: 60,
        sortType: "dueDateDescPriority",
        updateInterval: 10 * 60 * 1000, // Update every 10 minutes
        fade: false,
        // projects and/or labels is mandatory:
        projects: [2295876986],
        labels: [] // Tasks for any projects with these labels will be shown.
      }
    }
  ],
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
  module.exports = config;
}