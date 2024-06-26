/**
 * Streaming Avatar SDK
 * Heygen Streaming Avatar
 *
 * The version of the OpenAPI document: 1.0.2
 * Contact: api@heygen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface NewSessionRequestVoice
 */
export interface NewSessionRequestVoice {
    /**
     *
     * @type {string}
     * @memberof NewSessionRequestVoice
     */
    voiceId?: string;
}
/**
 * Check if a given object implements the NewSessionRequestVoice interface.
 */
export declare function instanceOfNewSessionRequestVoice(value: object): boolean;
export declare function NewSessionRequestVoiceFromJSON(json: any): NewSessionRequestVoice;
export declare function NewSessionRequestVoiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewSessionRequestVoice;
export declare function NewSessionRequestVoiceToJSON(value?: NewSessionRequestVoice | null): any;
