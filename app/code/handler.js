'use strict';

/* SERVICES */
const intentFactory = require('./lib/intents/intentFactory');
const logger = require('./lib/common/logger');

/* CONSTANTS */
const AmazonIntents = require('./lib/constants/AmazonIntents');

/**
 * **Lambda event handler**
 * Takes request from the Alexa service and delegates them appropriately
 * @param {Object} event Amazon Alexa event
 * @param {Object} context AWS Lambda context object
 * @param {Function} callback AWS Lambda callback
 */
async function handleAlexaEvent(event, context, callback) {
  logger.info('handleAlexaEvent() called with event:', event);

  const request = event.request;
  const requestType = request && request.type ? request.type : null;

  let sessionAttributes = {
    currentIntent: null
  };

  // Initialize session attributes if data exists
  if ( event.session && event.session.attributes )
    sessionAttributes = event.session.attributes;

  let intentName = '';
  if ( sessionAttributes.currentIntent && !AmazonIntents.includes( request.intent.name ) )
    intentName = sessionAttributes.currentIntent;
  else
    intentName = request && request.intent && request.intent.name ? request.intent.name : null;

  logger.info('Retrieving intent with requestType and intentName:', {requestType, intentName});
  const intent = intentFactory.getIntent(requestType, intentName);

  try {
    logger.info('Invoking intent handler with:', {request, sessionAttributes});
    const handlerResult = await intent(request, sessionAttributes);
    logger.info('Successfully handled Alexa event with result:', handlerResult);
    return callback( null, handlerResult );
  } catch ( err ) {
    logger.error( 'Caught error trying to handle intent', err ); 
    return callback( null, err );
  }
}

module.exports.handleAlexaEvent = handleAlexaEvent;