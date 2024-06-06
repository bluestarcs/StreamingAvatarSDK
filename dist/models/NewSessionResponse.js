"use strict";
/* tslint:disable */
/* eslint-disable */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewSessionResponseToJSON = exports.NewSessionResponseFromJSONTyped = exports.NewSessionResponseFromJSON = exports.instanceOfNewSessionResponse = void 0;
var NewSessionData_1 = require("./NewSessionData");
/**
 * Check if a given object implements the NewSessionResponse interface.
 */
function instanceOfNewSessionResponse(value) {
    return true;
}
exports.instanceOfNewSessionResponse = instanceOfNewSessionResponse;
function NewSessionResponseFromJSON(json) {
    return NewSessionResponseFromJSONTyped(json, false);
}
exports.NewSessionResponseFromJSON = NewSessionResponseFromJSON;
function NewSessionResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'code': json['code'] == null ? undefined : json['code'],
        'data': json['data'] == null ? undefined : (0, NewSessionData_1.NewSessionDataFromJSON)(json['data']),
    };
}
exports.NewSessionResponseFromJSONTyped = NewSessionResponseFromJSONTyped;
function NewSessionResponseToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'code': value['code'],
        'data': (0, NewSessionData_1.NewSessionDataToJSON)(value['data']),
    };
}
exports.NewSessionResponseToJSON = NewSessionResponseToJSON;
