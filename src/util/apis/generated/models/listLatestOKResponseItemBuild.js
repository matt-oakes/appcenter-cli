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
 * Build information for the release
 *
 *
 */
class ListLatestOKResponseItemBuild {
  /**
   * Create a ListLatestOKResponseItemBuild.
   * @property {string} [branchName] The branch name of the build producing the
   * release
   * @property {string} [commitHash] The commit hash of the build producing the
   * release
   * @property {string} [commitMessage] The commit message of the build
   * producing the release
   */
  constructor() {
  }

  /**
   * Defines the metadata of ListLatestOKResponseItemBuild
   *
   * @returns {object} metadata of ListLatestOKResponseItemBuild
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ListLatestOKResponseItem_build',
      type: {
        name: 'Composite',
        className: 'ListLatestOKResponseItemBuild',
        modelProperties: {
          branchName: {
            required: false,
            serializedName: 'branch_name',
            type: {
              name: 'String'
            }
          },
          commitHash: {
            required: false,
            serializedName: 'commit_hash',
            type: {
              name: 'String'
            }
          },
          commitMessage: {
            required: false,
            serializedName: 'commit_message',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ListLatestOKResponseItemBuild;
