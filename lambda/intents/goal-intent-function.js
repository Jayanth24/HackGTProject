module.exports = GoalIntentFunction

function GoalIntentFunction(intent, session, response) {
    const GoalHandler =  {
            canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'GoalIntent';
    }, handle(handlerInput) {
  var status = intent.slot('Status').toLowerCase();
  console.log('variable slot', status)
  switch (status) {

    case 'i would like to add a goal':
    case 'add a goal':
      const speechText = 'Okay. You would like to add a goal. What type of goal would you like to add? You can say things like - rewards goal, budget goal. What will it be?';
      return handlerInput.responseBuilder.speak(speechText).getResponse();
  

    case 'rewards goal':
    case 'rewards goals':
    case 'reward goals':
    case 'reward goal':
      const speechText1 = 'Sure! What goal would you like to add under reward goals?';
      return handlerInput.responseBuilder.speak(speechText1).getResponse();
      
    case 'buy a playstation next month':
    case 'add buy a playstation next month':
      
      const speechText2 = 'I have added - buy a playstation next month, to your list of rewards goal. The average price of a playstation is USD 279. You need 200 more points to redeem for a playstation. Now, Is there anything else I can help you with?';
      return handlerInput.responseBuilder.speak(speechText2).getResponse();


    case 'what are my goals':
      const speechText3 = 'Your current goals are to pay for college which is USD 5,000 and to buy a playstation next month.';
      return handlerInput.responseBuilder.speak(speechText3).getResponse();
      

    default:
      const speechText4 = 'Sorry, i did not understand that. can you please repeat it?';
      return handlerInput.responseBuilder.speak(speechText4).getResponse();
    
    }
}
};
}
