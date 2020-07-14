'use strict';

/**
 * Gets the config value associated with the given key
 * @param {String} key
 * @returns {*} config value
 */
function get( key ) {
  let result = process.env[key];
  if ( typeof( result ) === 'undefined' ) console.log( `[MISSING CONFIG] config requested for key ${key}, but was undefined.` );

  // Environment variables are loaded as strings
  // Convert boolean string values
  if ( result === 'true' ) result = true;
  if ( result === 'false' ) result = false;

  return result;
}

module.exports.get = get;