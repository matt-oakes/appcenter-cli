/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Destination details for distributing build releases
 *
 */
class DistributeInfoDestinationsItem {
  /**
   * Create a DistributeInfoDestinationsItem.
   * @property {string} id
   * @property {string} type Possible values include: 'store', 'group',
   * 'tester'
   */
  constructor() {
  }

  /**
   * Defines the metadata of DistributeInfoDestinationsItem
   *
   * @returns {object} metadata of DistributeInfoDestinationsItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'distribute_info_destinationsItem',
      type: {
        name: 'Composite',
        className: 'DistributeInfoDestinationsItem',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DistributeInfoDestinationsItem;
