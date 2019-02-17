/* Magic Mirror Test config for default compliments
 *
 * By Rodrigo Ramírez Norambuena https://rodrigoramirez.com
 * MIT Licensed.
 */

var config = {
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],

	language: "en",
	timeFormat: 12,
	units: "metric",
	electronOptions: {
		webPreferences: {
			nodeIntegration: true,
		},
	},

	modules: [
		{
			module: "compliments",
			position: "middle_center",
			config: {
				compliments: 
				{
					morning: [
						"Hi Gorgeous",
						"Good morning Spunky”,
						"How was your sleep?",
						“Did you just get your hair done?”
					],
					afternoon: [
						“I love those shoes“,
						“That top really suits you“,
						“You look like an afternoon delight”
					],
					evening: [
						“You look better when you’re wearing less”,
						“Oh Babe, you look amazing“,
						“Night sexy!"
					]
				}
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
