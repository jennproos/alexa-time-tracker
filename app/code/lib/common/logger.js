'use strict';

/* CONSTANTS */
const LOG_SEVERITY = { INFO: '[INFO]', DEBUG: '[DEBUG]', ERROR: '[ERROR]', WARN: '[WARN]'}

/**
 * Logs a standard message
 */
function log( msg, ...extra ) {
  const m = _stringify( msg );
  const e = _stringify( ...extra );
  if ( e ) console.log( `${LOG_SEVERITY.INFO} ${m}`, e );
  else console.log( `${LOG_SEVERITY.INFO} ${m}` );
}

/**
 * Logs an info message
 */
function info( msg, ...extra ) {
  const m = _stringify( msg );
  const e = _stringify( ...extra );
  if ( e ) console.info( `${LOG_SEVERITY.INFO} ${m}`, e );
  else console.info( `${LOG_SEVERITY.INFO} ${m}` );
}

/**
 * Logs a debug message
 */
function debug( msg, ...extra ) {
  const m = _stringify( msg );
  const e = _stringify( ...extra );
  if ( e ) console.info( `${LOG_SEVERITY.DEBUG} ${m}`, e );
  else console.info( `${LOG_SEVERITY.DEBUG} ${m}` );
}

/**
 * Logs a warn message
 */
function warn( msg, ...extra ) {
  const m = _stringify( msg );
  const e = _stringify( ...extra );
  if ( e ) console.warn( `${LOG_SEVERITY.WARN} ${m}`, e );
  else console.warn( `${LOG_SEVERITY.WARN} ${m}` );
}

/**
 * Logs an error message
 */
function error( msg, ...extra ) {
  const m = _stringify( msg );
  const e = _stringify( ...extra );
  if ( e ) console.error( `${LOG_SEVERITY.ERROR} ${m}`, e );
  else console.error( `${LOG_SEVERITY.ERROR} ${m}` );
}

function _stringify( msg ) {
  return msg && typeof( msg ) === 'object' ? JSON.stringify( msg ) : msg;
}

module.exports.log = log;
module.exports.info = info;
module.exports.debug = debug;
module.exports.warn = warn;
module.exports.error = error;