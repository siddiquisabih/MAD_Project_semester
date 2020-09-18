

import Constants from "./constant"
import AsyncStorage from '@react-native-community/async-storage';

import I18n from 'react-native-i18n'
import translations from './i18n.json';
import en from "./en.json";
import ar from "./ar.json";
import { Platform, NativeModules, I18nManager } from 'react-native';
import moment from "moment";
const { StatusBarManager } = NativeModules;

class Global {
    static STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

    static I18n = (translate) => {
        var userSelectedLanguage = I18nManager.isRTL ? "ar" : "en";
        I18n.translations = I18nManager.isRTL ? ar : en;
        I18n.defaultLocale = userSelectedLanguage;
        I18n.locale = userSelectedLanguage;
        return I18n.t(translate);
    }

    static font(style) {
        return I18nManager.isRTL ? style ? "Tajawal-" + style : "Tajawal-Regular" : style ? "Poppins-" + style : "Poppins-Regular";
    }
    static isDay() {
        return true
    }
    static saveDataInPhone(key, data) {
        let data1 = JSON.stringify(data);
        AsyncStorage.setItem(key, data1)
            .then(() => {
                console.log('data saved')
            })
    }
    static getDataFromPhone(key) {
        return new Promise(resolve => {
            AsyncStorage.getItem(key)
                .then((res) => {
                    let data = JSON.parse(res);
                    resolve(data)
                    // return data
                })
        })
    }
    static removeStorage(key) {
        AsyncStorage.removeItem(key)
            .then(() => {
                console.log('removed')
            })
    }
    static postRequest(url, data) {
        return new Promise((resolve, reject) => {
            fetch(Constants.BASE_URL + url, {
                method: "post",
                body: JSON.stringify(data),
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                }
            }).then((res) => {
                res.json().then((data) => {
                    resolve(data)
                })
            }).catch((err) => {
                reject(err)
            })
        })
    }
    static getRequest(url) {
        return new Promise((resolve, reject) => {
            fetch(Constants.BASE_URL + url, {
                method: "get",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                }
            }).then((res) => {
                res.json().then((data) => {
                    resolve(data)
                })
            }).catch((err) => {
                reject(err)
            })

        })
    }
    static appGetRequest(url) {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(Constants.USER_DETAIL_KEY).then((res) => {
                var data = JSON.parse(res);
                fetch(Constants.BASE_URL + url, {
                    method: "get",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + data.auth
                    }
                }).then((response) => {
                    response.json().then((data) => {
                        resolve(data)
                    })
                }).catch((err) => {
                    reject(err)
                })
            })
        })
    }
    static appPostRequest(url, data) {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(Constants.USER_DETAIL_KEY)
                .then((res) => {
                    let d = JSON.parse(res);
                    fetch(Constants.BASE_URL + url, {
                        method: "post",
                        body: JSON.stringify(data),
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + d.auth
                        }
                    }).then((res) => {
                        res.json().then((data) => {
                            resolve(data)
                        })
                    }).catch((err) => {
                        reject(err)
                    })
                })
        })
    }

}
export default Global;