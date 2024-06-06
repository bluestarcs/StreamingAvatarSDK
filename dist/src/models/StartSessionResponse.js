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
exports.StartSessionResponseToJSON = exports.StartSessionResponseFromJSONTyped = exports.StartSessionResponseFromJSON = exports.instanceOfStartSessionResponse = void 0;
/**
 * Check if a given object implements the StartSessionResponse interface.
 */
function instanceOfStartSessionResponse(value) {
    return true;
}
exports.instanceOfStartSessionResponse = instanceOfStartSessionResponse;
function StartSessionResponseFromJSON(json) {
    return StartSessionResponseFromJSONTyped(json, false);
}
exports.StartSessionResponseFromJSON = StartSessionResponseFromJSON;
function StartSessionResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'code': json['code'] == null ? undefined : json['code'],
        'message': json['message'] == null ? undefined : json['message'],
    };
}
exports.StartSessionResponseFromJSONTyped = StartSessionResponseFromJSONTyped;
function StartSessionResponseToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'code': value['code'],
        'message': value['message'],
    };
}
exports.StartSessionResponseToJSON = StartSessionResponseToJSON;
