/* tslint:disable */
/* eslint-disable */
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

import { mapValues } from '../runtime';
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
export function instanceOfTaskRequest(value: object): boolean {
    return true;
}

export function TaskRequestFromJSON(json: any): TaskRequest {
    return TaskRequestFromJSONTyped(json, false);
}

export function TaskRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'text': json['text'] == null ? undefined : json['text'],
        'sessionId': json['session_id'] == null ? undefined : json['session_id'],
    };
}

export function TaskRequestToJSON(value?: TaskRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'text': value['text'],
        'session_id': value['sessionId'],
    };
}

