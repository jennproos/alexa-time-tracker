'use strict';

/* CLASSES */
const ResponseBuilder = require( '../../helpers/ResponseBuilder' );

/* SERVICES */
const logger = require( '../../common/logger' );

/* CONSTANTS */
const StaticResponses = require( '../../constants/StaticResponses' );

async function handleRequest( request, sessionAttributes ) {
  logger.info( `Amazon Session Ended requested with id: ${request.requestId}` );

  const output = `<prosody rate="slow" pitch="+10%" volume="x-loud">${StaticResponses.OUTPUTS.GO_HUSKIES}</prosody>`;

  const response = new ResponseBuilder()
    .setOutputSpeechPlainText( output )
    .setShouldEndSession( true )
    .toResponse( sessionAttributes );

  return response;
}

module.exports = handleRequest;