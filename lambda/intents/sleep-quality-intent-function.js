module.exports = SleepQualityIntentFunction

const Alexa = require('alexa-sdk');

function pluck (arr) {
  const randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

const WellRestedPhrases = {
  tooMuch: [
    "I think you may sleep too much and swing back to tired.",
    "Whoa, that's a lot of sleep. You'll wake up rested for sure."
  ],
  justRight: [
    "You should wake up refreshed.",
    "Rest is important and you're getting enough.",
    "With that much sleep, you're ready to face the world.",
    "You'll wake up invigorated."
  ],
  justUnder: [
    "You may get by, but watch out for a mid-day crash.",
    "You'll be alright, but would be better off with a bit more time.",
    "You might be a little tired tomorrow."
  ],
  tooLittle: [
    "You'll be dragging tomorrow. Get the coffee ready!",
    "Long night or early morning? Either way, tomorrow's going to be rough."
  ]
};

function SleepQualityIntentFunction(intent, session, response) {
    const SleepQualityIntentHandler =  {
            canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'SleepQualityIntent';
    }, handle(handlerInput) {
        const quality = this.event.request.intent.slots.PreviousNightQuality.value;
    const good = ["good", "well", "wonderfully", "a lot", "amazing", "fantastic", "o.k.", "great"];
    const bad = ["bad", "poorly", "little", "very little", "not at all"];

    let speech;

    if(good.includes(quality)) {
      speech = "Let's keep the great sleep going!";
    } else if(bad.includes(quality)) {
      speech = "I hope tonight's better for you.";
    } else {
      speech = "I've got a good feeling about your sleep tonight.";
    }
    return handlerInput.responseBuilder
            .speak(speech)
            .getResponse();
  }

    }
           

    }



