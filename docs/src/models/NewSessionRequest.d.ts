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
import type { NewSessionRequestVoice } from './NewSessionRequestVoice';
/**
 *
 * @export
 * @interface NewSessionRequest
 */
export interface NewSessionRequest {
    /**
     *
     * @type {string}
     * @memberof NewSessionRequest
     */
    quality?: NewSessionRequestQualityEnum;
    /**
     *
     * @type {string}
     * @memberof NewSessionRequest
     */
    avatarName?: string;
    /**
     *
     * @type {NewSessionRequestVoice}
     * @memberof NewSessionRequest
     */
    voice?: NewSessionRequestVoice;
}
/**
 * @export
 */
export declare const NewSessionRequestQualityEnum: {
    readonly Low: "low";
    readonly Medium: "medium";
    readonly High: "high";
};
export type NewSessionRequestQualityEnum = typeof NewSessionRequestQualityEnum[keyof typeof NewSessionRequestQualityEnum];
/**
 * Check if a given object implements the NewSessionRequest interface.
 */
export declare function instanceOfNewSessionRequest(value: object): boolean;
export declare function NewSessionRequestFromJSON(json: any): NewSessionRequest;
export declare function NewSessionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewSessionRequest;
export declare function NewSessionRequestToJSON(value?: NewSessionRequest | null): any;
