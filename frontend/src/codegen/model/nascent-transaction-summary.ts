/* tslint:disable */
/* eslint-disable */
/**
 * Flathub API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface NascentTransactionSummary
 */
export interface NascentTransactionSummary {
  /**
   *
   * @type {number}
   * @memberof NascentTransactionSummary
   */
  value: number
  /**
   *
   * @type {string}
   * @memberof NascentTransactionSummary
   */
  currency: string
  /**
   *
   * @type {string}
   * @memberof NascentTransactionSummary
   */
  kind: NascentTransactionSummaryKindEnum
}

export const NascentTransactionSummaryKindEnum = {
  Donation: "donation",
  Purchase: "purchase",
} as const

export type NascentTransactionSummaryKindEnum =
  (typeof NascentTransactionSummaryKindEnum)[keyof typeof NascentTransactionSummaryKindEnum]