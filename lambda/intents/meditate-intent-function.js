module.exports = MeditateIntentFunction

function MeditateIntentFunction(intent, session, response) {
    const MeditationHandler =  {
            canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'MeditationIntent';
    }, handle(handlerInput) {
        const speechText = 
            "<emphasis level=\"moderate\"> Starting the calming routine. </emphasis> <break time='1s'/>" +
            "<emphasis level=\"moderate\"> Let's take the next few moments to do some deep breathing. </emphasis> <break time='1s'/>" + 
            "<emphasis level=\"moderate\"> Breathe in. </emphasis> <break time='2s'/>" +
            "<emphasis level=\"moderate\"> Breathe out. </emphasis> <break time='2s'/>" + 
            "<emphasis level=\"moderate\"> Repeat this process one more time. <break time='7s'/>"  +
            "<emphasis level=\"moderate\"> Breathe in. </emphasis> <break time='2s'/>" + 
            "<emphasis level=\"moderate\"> Breathe out. </emphasis> <break time='2s'/>" + 
            "<emphasis level=\"moderate\"> Slowly lift back upright. <break time='1s'/> Stretch your arms out to your sides. </emphasis> <break time='2s'/>" + 
            "<emphasis level=\"moderate\"> Rotate your arms in small circles. Focus on your deep breathing. </emphasis> <break time='2s'/>" +
            "<emphasis level=\"moderate\"> Slow down. Let your arms fall back to your sides. </emphasis> <break time='2s'/>" + 
            "<emphasis level=\"moderate\"> Breathe in. <break time='1.5s'/> Breathe out. </emphasis> <break time='2s'/>" +
            "<emphasis level=\"moderate\"> Remember throughout this exercise to monitor your breathing. <break time='2s'/>" + 
            "<emphasis level=\"moderate\"> Find a friend to do this activity with. </emphasis>" +
            "<emphasis level=\"moderate\"> If you are by yourself, that's ok too. <break time='1s'/> </emphasis>" +
            "<emphasis level=\"moderate\"> Let's start by saying 1 good thing that has happened to you today <break time='3s'/> </emphasis>" +
            "<emphasis level=\"moderate\"> Awesome! That was great to hear. <break time='1s'/> Now, let's say 1 thing that you look forward to later on </emphasis>" +
            "<emphasis level=\"moderate\"> <break time='3s'/> Amazing! Now, let's reflect on some things that might not have gone so well. </emphasis>" +
            "<emphasis level=\"moderate\"> Say one thing that didn't work out so well. <break time='3s'/> </emphasis>" +
            "<emphasis level=\"moderate\"> Sometimes things don't always go as planned. Luckily, tomorrow is a new day! How do you plan to make tomorrow a better day? <break time='3s'/> </emphasis>" +
            "<emphasis level=\"moderate\"> Great! We are definitely on track to have happy days, let's celebrate! </emphasis>" + 
            "<emphasis level=\"moderate\"> To finish off our activity, let's do some final reflections. <break time='1s'/> Get in your best superhero pose. Make sure you stand tall! </emphasis>" +
            "<emphasis level=\"moderate\"> Breathe in. <break time='1s'/> Breathe out. As each of us go about our day, remember what it means to be a member of the Boys and Girls Club. </emphasis>" +
            "<emphasis level=\"moderate\">  <break time='1s'/> Repeat after me. <break time='1s'/> I am a leader in my community. </emphasis>" +
            "<emphasis level=\"moderate\"> <break time='2s'/> Breathe in. <break time='1s'/> Breathe out, repeat after me. I am strong. <break time='1s'/> I am loved. </emphasis>" +
            "<emphasis level=\"moderate\"> <break time='1s'/> <break time='1s'/> Breathe in. <break time='1s'/> Breathe out. </emphasis>" +
            "<emphasis level=\"moderate\"> <break time='1s'/> A true leader learns to take control over a hard time and spin it to have a positive ending. <break time='1s'/> </emphasis>" +
            "<emphasis level=\"moderate\"> We've made it to the end of the guided meditation! Congratulations! I hope to see you soon! </emphasis>";
            
            return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};
}
