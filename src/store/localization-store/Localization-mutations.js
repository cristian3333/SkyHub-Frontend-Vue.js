
/**
 * Created by Alexandru Ionut Budisteanu - SkyHub on 6/24/2017.
 * (C) BIT TECHNOLOGIES
 */


import Vue from 'vue'

export default {

    LOCALIZATION_SET_IP: (state, {ip}) => {
        state.ip = ip;
    },

    NEW_LOCALIZATION: (state, {payload}) => {
        state.country = payload.country;
        state.countryCode = payload.countryCode;
        state.city = payload.city;
        state.latitude = payload.latitude;
        state.longtitude = payload.longitude;
        state.timeZone = payload.timeZone;
        state.request = payload.request;
    },

}