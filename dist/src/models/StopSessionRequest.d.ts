/**
 * Streaming Avatar SDK
 * Heygen Streaming Avatar
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: api@heygen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface StopSessionRequest
 */
export interface StopSessionRequest {
    /**
     *
     * @type {string}
     * @memberof StopSessionRequest
     */
    sessionId?: string;
}
/**
 * Check if a given object implements the StopSessionRequest interface.
 */
export declare function instanceOfStopSessionRequest(value: object): boolean;
export declare function StopSessionRequestFromJSON(json: any): StopSessionRequest;
export declare function StopSessionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): StopSessionRequest;
export declare function StopSessionRequestToJSON(value?: StopSessionRequest | null): any;