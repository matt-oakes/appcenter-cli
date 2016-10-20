/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the Versions class.
 * @constructor
 * @member {array} [versionsProperty]
 * 
 * @member {number} [total] the total count of versions
 * 
 */
function Versions() {
}

/**
 * Defines the metadata of Versions
 *
 * @returns {object} metadata of Versions
 *
 */
Versions.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'Versions',
    type: {
      name: 'Composite',
      className: 'Versions',
      modelProperties: {
        versionsProperty: {
          required: false,
          serializedName: 'versions',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'VersionElementType',
                type: {
                  name: 'Composite',
                  className: 'Version'
                }
            }
          }
        },
        total: {
          required: false,
          serializedName: 'total',
          type: {
            name: 'Number'
          }
        }
      }
    }
  };
};

module.exports = Versions;