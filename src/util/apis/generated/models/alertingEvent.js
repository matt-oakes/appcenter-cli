/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the AlertingEvent class.
 * @constructor
 * Event Setting
 *
 * @member {string} eventTimestamp ISO 8601 date time when event was generated
 * 
 * @member {string} eventId A unique identifier for this event instance.
 * Useful for deduplication
 * 
 * @member {number} eventVersion Versioning for this eventType. Default value:
 * 1 .
 * 
 * @member {object} [properties] Custom properties for a specific event
 * 
 */
function AlertingEvent() {
}

/**
 * Defines the metadata of AlertingEvent
 *
 * @returns {object} metadata of AlertingEvent
 *
 */
AlertingEvent.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'AlertingEvent',
    type: {
      name: 'Composite',
      className: 'AlertingEvent',
      modelProperties: {
        eventTimestamp: {
          required: true,
          serializedName: 'event_timestamp',
          type: {
            name: 'String'
          }
        },
        eventId: {
          required: true,
          serializedName: 'event_id',
          type: {
            name: 'String'
          }
        },
        eventVersion: {
          required: true,
          serializedName: 'event_version',
          defaultValue: 1,
          type: {
            name: 'Number'
          }
        },
        properties: {
          required: false,
          serializedName: 'properties',
          type: {
            name: 'Object'
          }
        }
      }
    }
  };
};

module.exports = AlertingEvent;