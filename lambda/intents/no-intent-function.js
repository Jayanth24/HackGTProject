module.exports = NoIntentFunction

function NoIntentFunction(intent, session, response) {
    const NoHandler =  {
            canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'NoIntent';
    }, handle(handlerInput) {
        const speechText = "Okay. Thanks. I will use my money in a different way then." ;
            return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};
}
