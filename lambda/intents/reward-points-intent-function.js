module.exports = RewardPointsIntentFunction
var DatabaseHelper = require('../database_helper');
var databaseHelper = new DatabaseHelper();

function RewardPointsIntentFunction(intent, session, response) {
    const RewardPointsHandler =  {
            canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'RewardPointsIntent';
    }, handle(handlerInput) {
        var status = intent.slot('Speech').toLowerCase();
  var aa = databaseHelper.RewardPoints();
  return aa.then(function(result) {
    switch (status) {
      case 'how many reward points do i have':
        const speechText = 'You have ' + result.body.rewardsBalance + ' points now. I can suggest what you can buy from your goal list with these reward points. Would you like to hear?';
         return handlerInput.responseBuilder.speak(speechText).getResponse();
    }
  })
            
          
    }
};
}
