/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-12-06 10:23:03
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-12-06 10:28:37
 * @FilePath: /react18-webpack-ts/src/locales/i18n.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import i18n from "i18next";
import enUsTrans from "./en.json";
import zhCnTrans from "./zh.json";
import {
  initReactI18next
} from 'react-i18next';

i18n
.use(initReactI18next)
.init({
  resources: {
    en: {
      translation: enUsTrans,
    },
    zh: {
      translation: zhCnTrans,
    },
  },
  //默认语言
  fallbackLng: "zh",
  debug: false,
  interpolation: {
    escapeValue: false,
  },
})


export default i18n;
