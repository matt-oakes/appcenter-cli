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
 * Class representing a ListToolsetProjectsOKResponseAndroid.
 */
class ListToolsetProjectsOKResponseAndroid {
  /**
   * Create a ListToolsetProjectsOKResponseAndroid.
   * @property {array} androidModules Android Gradle modules
   * @property {string} [gradleWrapperPath] The path of the Gradle wrapper
   */
  constructor() {
  }

  /**
   * Defines the metadata of ListToolsetProjectsOKResponseAndroid
   *
   * @returns {object} metadata of ListToolsetProjectsOKResponseAndroid
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ListToolsetProjectsOKResponse_android',
      type: {
        name: 'Composite',
        className: 'ListToolsetProjectsOKResponseAndroid',
        modelProperties: {
          androidModules: {
            required: true,
            serializedName: 'androidModules',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ListToolsetProjectsOKResponseAndroidAndroidModulesItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'ListToolsetProjectsOKResponseAndroidAndroidModulesItem'
                  }
              }
            }
          },
          gradleWrapperPath: {
            required: false,
            serializedName: 'gradleWrapperPath',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ListToolsetProjectsOKResponseAndroid;