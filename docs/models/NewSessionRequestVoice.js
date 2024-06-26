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
exports.NewSessionRequestVoiceToJSON = exports.NewSessionRequestVoiceFromJSONTyped = exports.NewSessionRequestVoiceFromJSON = exports.instanceOfNewSessionRequestVoice = void 0;
/**
 * Check if a given object implements the NewSessionRequestVoice interface.
 */
function instanceOfNewSessionRequestVoice(value) {
    return true;
}
exports.instanceOfNewSessionRequestVoice = instanceOfNewSessionRequestVoice;
function NewSessionRequestVoiceFromJSON(json) {
    return NewSessionRequestVoiceFromJSONTyped(json, false);
}
exports.NewSessionRequestVoiceFromJSON = NewSessionRequestVoiceFromJSON;
function NewSessionRequestVoiceFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'voiceId': json['voice_id'] == null ? undefined : json['voice_id'],
    };
}
exports.NewSessionRequestVoiceFromJSONTyped = NewSessionRequestVoiceFromJSONTyped;
function NewSessionRequestVoiceToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'voice_id': value['voiceId'],
    };
}
exports.NewSessionRequestVoiceToJSON = NewSessionRequestVoiceToJSON;
