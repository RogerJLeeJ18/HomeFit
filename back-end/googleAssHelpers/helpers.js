const {
  dialogflow,
  Image,
} = require('actions-on-google')

const app = dialogflow();


app.intent('start workout', conv => {
  conv.ask('This is a test to see that you are connected to the server');
});

app.intent('Default Fallback Intent', conv => {
  conv.ask(`I didn't understand. Can you tell me something else?`)
});

module.exports = app;