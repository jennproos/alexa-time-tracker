'use strict';

/* CLASSES */
const ResponseBuilder = require( '../../helpers/ResponseBuilder' );

/* SERVICES */
const logger = require( '../../common/logger' );

/* CONSTANTS */
const StaticResponses = require( '../../constants/StaticResponses' );

async function handleRequest( request, sessionAttributes ) {
  logger.info( `Amazon Fallback intent requested with id: ${request.requestId}` );

  const output = StaticResponses.OUTPUTS.FALLBACK;
  const reprompt = StaticResponses.REPROMPTS.HELP;

  const response = new ResponseBuilder()
    .setOutputSpeechPlainText( output )
    .setReprompt( reprompt )
    .setShouldEndSession( false )
    .toResponse( sessionAttributes );

  return response;
}

module.exports = handleRequest;