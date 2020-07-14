'use strict';

/**
 * Builds a valid Alexa response
 */
class ResponseBuilder {
  constructor() {
    this.response = {};
  }

  setOutputSpeechPlainText( output ) {
    if ( !output ) return;
    this.response.outputSpeech = {
      type: 'PlainText',
      text: output
    };

    return this;
  }

  setReprompt( reprompt ) {
    if ( !reprompt ) return;
    this.response.reprompt = {
      outputSpeech: {
        type: 'PlainText',
        text: reprompt
      }
    };

    return this;
  }

  setShouldEndSession( shouldEndSession ) {
    if ( typeof( shouldEndSession ) !== 'boolean' ) return;
    this.response.shouldEndSession = shouldEndSession;

    return this;
  }

  toResponse( sessionAttributes ) {
    return {
      version: '1.0',
      sessionAttributes,
      response: this.response
    };
  }
}

module.exports = ResponseBuilder;