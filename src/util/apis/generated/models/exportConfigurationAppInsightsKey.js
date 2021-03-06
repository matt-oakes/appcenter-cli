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
 * Configuration for export to Application Insights resource with customer
 * provided intrumentation key
 *
 */
class ExportConfigurationAppInsightsKey {
  /**
   * Create a ExportConfigurationAppInsightsKey.
   * @property {string} type Type of export configuration. Possible values
   * include: 'blob_storage_connection_string',
   * 'application_insights_instrumentation_key',
   * 'blob_storage_linked_subscription',
   * 'application_insights_linked_subscription'
   * @property {array} [exportEntities]
   * @property {string} [resourceName] The resource name on azure
   * @property {string} [resourceGroup] The resource group name on azure
   * @property {boolean} [backfill] Field to determine if backfilling should
   * occur. The default value is true. If set to false export starts from date
   * and time of config creation.
   * @property {string} instrumentationKey Instrumentation key for Application
   * Insights resource
   */
  constructor() {
  }

  /**
   * Defines the metadata of ExportConfigurationAppInsightsKey
   *
   * @returns {object} metadata of ExportConfigurationAppInsightsKey
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'application_insights_instrumentation_key',
      type: {
        name: 'Composite',
        className: 'ExportConfigurationAppInsightsKey',
        modelProperties: {
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          exportEntities: {
            required: false,
            serializedName: 'export_entities',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ExportEntityElementType',
                  type: {
                    name: 'Enum',
                    allowedValues: [ 'crashes', 'errors', 'attachments', 'no_logs' ]
                  }
              }
            }
          },
          resourceName: {
            required: false,
            serializedName: 'resource_name',
            type: {
              name: 'String'
            }
          },
          resourceGroup: {
            required: false,
            serializedName: 'resource_group',
            type: {
              name: 'String'
            }
          },
          backfill: {
            required: false,
            serializedName: 'backfill',
            type: {
              name: 'Boolean'
            }
          },
          instrumentationKey: {
            required: true,
            serializedName: 'instrumentation_key',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ExportConfigurationAppInsightsKey;
