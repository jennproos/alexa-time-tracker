'use strict';

const handlers = {
  // Built-in Amazon intents
  'LaunchRequest': require('./amazon/launch'),
  'SessionEndedRequest': require('./amazon/sessionEnded'),
  'IntentRequest': {
    'AMAZON.HelpIntent': require('./amazon/help'),
    'AMAZON.CancelIntent': require('./amazon/cancel'),
    'AMAZON.StopIntent': require('./amazon/cancel'),
    'AMAZON.FallbackIntent': require('./amazon/fallback'),

    // CreateProject intent
    'CreateProject': require('./CreateProject/full'),
    'CreateProjectUnspecifiedProjectName': require('./CreateProject/unspecifiedProjectName')
  }
};

/**
 * Fetch the appropriate handler for the given requestType + intentName
 * @param {String} requestType
 * @param {String} intentName
 * @returns {Function} requested intent handler
 */
function getIntent(requestType, intentName) {
  const requestHandler = handlers[requestType];
  return typeof(requestHandler) === 'function' ?
    requestHandler :
    handlers[requestType][intentName];
}

module.exports.getIntent = getIntent;