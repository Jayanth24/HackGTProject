// enables strict mode which helps catch common JS programming blunders
// 'use strict'

var APP_ID = 'amzn1.ask.skill.13d1810f-ef52-4563-91f0-b820fd6e316b'
var AlexaSkill = require('./alexa-skill.js')
var LaunchIntentFunction = require('./intents/launch-intent-function.js')
var GeneralJobsFunction = require('./intents/general-jobs-intent-function.js')
var LocationIntentFunction = require('./intents/location-intent-function')
var LevelIntentFunction = require('./intents/level-intent-function.js')
var CategoryIntentFunction = require('./intents/category-intent-function.js')
var HelpIntentFunction = require('./intents/help-intent-function.js')
var StopIntentFunction = require('./intents/stop-intent-function.js')
var CancelIntentFunction = require('./intents/cancel-intent-function.js')
var MeditateIntentFunction = require('./intents/meditate-intent-function.js')
var NoIntentFunction = require('./intents/no-intent-function.js')
var GoalIntentFunction = require('./intents/goal-intent-function.js')
var RewardPointsIntentFunction = require('./intents/reward-points-intent-function.js')
var SleepQualityIntentFunction = require('./intents/sleep-quality-intent-function.js')
var BusStopsIntentFunction = require('./intents/bus-stops-intent-function.js)
var BusesIntentFunction = require('./intents/buses-intent-function.js')
var DiningIntentFunction = require('./intents/dining-intent-function.js')
var MenusIntentFunction = require('./intents/menus-intent-function.js')
var RSSIntentFunction = require('./intents/rss-intent-function.js')
var TechScraperIntentFunction = require('./intents/tech-scraper-intent-function.js')
var TVIntentFunction = require('./intents/tv-intent-function.js')
var TweetsIntentFunction = require('./intents/tweets-intent-function.js')

var WellRestedIntentFunction = require('./intents/well-rested-intent-function.js')
var YesIntentFunction = require('./intents/yes-intent-function.js')

// Define a MuseJobsService function which inherits from AlexaSkill.js class
var MuseJobsService = function () {
  AlexaSkill.call(this, APP_ID)
}
MuseJobsService.prototype = Object.create(AlexaSkill.prototype)

// this will be invoked when the user first launches or opens the skill with its invocation name
// this is triggered when said "Alexa, ask muse jobs"
MuseJobsService.prototype.eventHandlers.onLaunch = LaunchIntentFunction

// How Alexa knows to handle all the different functions
// Each intent corresponds to a function
// That function is called when that intent is invoked
MuseJobsService.prototype.intentHandlers = {
  'GeneralJobsIntent': GeneralJobsFunction,
  'LocationIntent': LocationIntentFunction,
  'LevelIntent': LevelIntentFunction,
  'CategoryIntent': CategoryIntentFunction,
  'MeditateIntent': MeditateIntentFunction,
  'GoalIntent': GoalIntentFunction,
  'RewardPointsIntent': RewardPointsIntentFunction,
  'WellRestedIntent': WellRestedIntentFunction,
  'SleepQualityIntent': SleepQualityIntentFunction,
  'BusStopsIntent': BusStopsIntentFunction,
  'BusesIntent': BusesIntentFunction,
  'DiningIntent': DiningIntentFunction,
  'MenusIntent': MenusIntentFunction,
  'RSSIntent': RSSIntentFunction,
  'TechScraperIntent': TechScrapterIntentFunction,
  'TVIntent': TVIntentFunction,
  'TweetsIntent': TweetsIntentFunction,
  'AMAZON.HelpIntent': HelpIntentFunction,
  'AMAZON.StopIntent': StopIntentFunction,
  'AMAZON.CancelIntent': CancelIntentFunction,
  'Amazon.YesIntent': YesIntentFunction,
  'Amazon.NoIntent': NoIntentFunction
}

exports.handler = function (event, context) {
 var museJobsService = new MuseJobsService()
 museJobsService.execute(event, context)
}


