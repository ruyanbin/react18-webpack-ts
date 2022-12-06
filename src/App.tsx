/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-12-05 16:57:04
 * @LastEditors: ru ru@qq.com
 * @LastEditTime: 2022-12-06 18:44:08
 * @FilePath: /react18-webpack-ts/src/App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React,{useState} from 'react';
import {Router} from "./router"
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import enUS from 'antd/locale/en_US';
import zhCN from 'antd/locale/zh_CN';

import type { RadioChangeEvent } from 'antd';
import "./locales/i18n"
import {
    ConfigProvider,
    Radio,
  } from 'antd';
dayjs.locale('zh');
function App() {
    const [locale, setLocal] = useState(enUS);
    const changeLocale = (e: RadioChangeEvent) => {
        const localeValue = e.target.value;
        setLocal(localeValue);
        if (!localeValue) {
          dayjs.locale('en');
        } else {
          dayjs.locale('zh-cn');
        }
      };
    return (
        <ConfigProvider locale={locale}>
             {/* <Radio.Group value={locale} onChange={changeLocale}>
          <Radio.Button key="en" value={enUS}>
            English
          </Radio.Button>
          <Radio.Button key="cn" value={zhCN}>
            中文
          </Radio.Button>
        </Radio.Group> */}
        <Router/>
        </ConfigProvider>
    )
}

export default App;
