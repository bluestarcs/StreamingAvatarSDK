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
 * @interface TaskRequest
 */
export interface TaskRequest {
    /**
     *
     * @type {string}
     * @memberof TaskRequest
     */
    text?: string;
    /**
     *
     * @type {string}
     * @memberof TaskRequest
     */
    sessionId?: string;
}
/**
 * Check if a given object implements the TaskRequest interface.
 */
export declare function instanceOfTaskRequest(value: object): boolean;
export declare function TaskRequestFromJSON(json: any): TaskRequest;
export declare function TaskRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskRequest;
export declare function TaskRequestToJSON(value?: TaskRequest | null): any;
