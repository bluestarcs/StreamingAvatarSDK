"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskResponseDataToJSON = exports.TaskResponseDataFromJSONTyped = exports.TaskResponseDataFromJSON = exports.instanceOfTaskResponseData = void 0;
/**
 * Check if a given object implements the TaskResponseData interface.
 */
function instanceOfTaskResponseData(value) {
    return true;
}
exports.instanceOfTaskResponseData = instanceOfTaskResponseData;
function TaskResponseDataFromJSON(json) {
    return TaskResponseDataFromJSONTyped(json, false);
}
exports.TaskResponseDataFromJSON = TaskResponseDataFromJSON;
function TaskResponseDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'durationMs': json['duration_ms'] == null ? undefined : json['duration_ms'],
    };
}
exports.TaskResponseDataFromJSONTyped = TaskResponseDataFromJSONTyped;
function TaskResponseDataToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'duration_ms': value['durationMs'],
    };
}
exports.TaskResponseDataToJSON = TaskResponseDataToJSON;