module.exports = YesIntentFunction

function YesIntentFunction(intent, session, response) {
    const YesHandler =  {
            canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'YesIntent';
    }, handle(handlerInput) {
        const speechText = 'I would suggest you to pay for college first and then buy a play station later. Oh! and, there is an offer next month at Target where you can buy a playstation with the remainder of your points.';
            return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};
}
