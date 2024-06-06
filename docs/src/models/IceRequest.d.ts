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
import type { IceCandidate } from './IceCandidate';
/**
 *
 * @export
 * @interface IceRequest
 */
export interface IceRequest {
    /**
     *
     * @type {IceCandidate}
     * @memberof IceRequest
     */
    candidate?: IceCandidate;
    /**
     *
     * @type {string}
     * @memberof IceRequest
     */
    sessionId?: string;
}
/**
 * Check if a given object implements the IceRequest interface.
 */
export declare function instanceOfIceRequest(value: object): boolean;
export declare function IceRequestFromJSON(json: any): IceRequest;
export declare function IceRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): IceRequest;
export declare function IceRequestToJSON(value?: IceRequest | null): any;
